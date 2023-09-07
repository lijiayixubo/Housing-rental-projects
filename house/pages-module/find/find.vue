<template>
	<view style="background-color: #fff">
		<u-navbar>
			<view style="display: flex;">
				<view class="u-p-20"  @click="location" style="">
					<!-- {{vuex_city==''?'选择':vuex_city}} -->
					杭州
					<!-- <u-icon name="lo" class="u-p-l-10" color="#515356"></u-icon> -->
				</view>
				
				<u-search placeholder="你想住在哪儿" v-model="keyword" input-align="center"  :show-action="false" :clearabled="true"
:disabled="true" style="flex-grow: 1;" @click="search"></u-search>
			</view>
		</u-navbar>
		<view>
			
			<u-gap height="5" style="margin: 20rpx"></u-gap>
			<view v-model="flowList" ref="uWaterfall">
			   <view class="demo-warter" v-for="(item, index) in flowList" :key="index">
			       <view class="image" threshold="750" border-radius="12" :style="{backgroundImage:'url('+item.image+')'}" :index="index"
			                    @click="clickImage(item.id)"></view>
								<view class="info">
			       <view class="item-title">{{item.villageName}} {{item.type == '整租' ? item.houseNum + item.houseHall + item.toiletNum : item.roomType}}</view>
			   	<view class="item-price">¥{{item.price}}</view>
			        <view class="item-desc">{{item.type}} | {{item.type == '整租' ? item.houseArea : item.roomArea}}㎡ | {{item.decoration}} </view>
			   </view>
			   </view>
			</view>
		</view>
		<u-loadmore bg-color="rgb(240, 240, 240)" :status="loadStatus" @loadmore="findHouseList" style="height: 80rpx;line-height: 80rpx;"></u-loadmore>
		<u-back-top :scroll-top="scrollTop" top="1000"></u-back-top>
		<u-no-network></u-no-network>
		<view class="buttom">
			<view class="loginType">
				<view class="wechat item">
					<view class="icon"><u-icon size="60" name="server-man" color="#999" @click="server"></u-icon></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import config from "@/common/config.js" // 全局配置文件
	export default {
		data() {
			return {
				tabIndex: 0, /* 选中标签栏的序列,默认显示第一个 */
				keyword: '',
				pageNum: 1,
				pageSize: 20,
				scrollTop: 0,
				houseList: [],
				noticeList: [],
				navList:[
				],
				loadStatus: 'loadmore',
				flowList: [],
				uvCode: uni.getStorageSync('uvCode')
			}
		},
		onLoad() {
			// 检查是否已选择城市，如果未选择，跳转到选择城市页面
			this.checkCity();
			// 获取数据
			this.findHouseList();
			this.getNoticecList();
			// 流量统计
			this.appSysFlowInfo();
			uni.$on('findIndexHouseList', (obj) => {
				// 获取数据
				this.findHouseList(1);
			})
		},
		onUnload() {
			// 移除监听事件  
			uni.$off('findIndexHouseList');
		},
		onPageScroll(e) {
		    this.scrollTop = e.scrollTop;
		},
		onReachBottom() {
		    this.loadStatus = 'loading';
		    // 获取数据
			this.findHouseList()
		},
		// 下拉刷新
		onPullDownRefresh() {
			// 获取数据
			this.findHouseList(1);
			// 关闭刷新
			uni.stopPullDownRefresh();
		},
		methods: {
			checkCity(){
				// 检查是否已选择城市，如果未选择，跳转到选择城市页面
				let lifeData = uni.getStorageSync('lifeData');
				let vuex_city = lifeData.vuex_city
				console.log(vuex_city.length);
				if(!vuex_city || vuex_city.length == 0){
					// 没有token 则跳转到登录
					this.$u.vuex('vuex_city', '杭州市');
					// return this.$u.route('/pages-module/location/location');
				}
			},
			getItem() {
				
			},
			//切换选项卡
						toggleTab (index) { 
							this.tabIndex=index;
						},
						//滑动切换swiper
						tabChange (e) { 
							console.log(e);
							this.tabIndex=e.detail.current;
						},
			location(){
				 //  this.$u.route({
					// url: 'pages-module/location/location',
				 //  })
			},
			search(){
				this.$u.route({
					url: 'pages-module/search/search',
				})
			},
			notice(){
				this.$u.route({
					url: 'pages-module/notice/notice'
				})
			},
			findHouseList(type = 0) {
				if(type == 1){
					this.pageNum = 1
					this.flowList = []
					this.$refs.uWaterfall.clear();
				}
				let url = "/api/houseApi/findHouseRoomList";
				this.$u.get(url, {
					state:1,
					villageCity:'杭州市'||uni.getStorageSync('lifeData').vuex_city,
					pageNum: this.pageNum,
					pageSize: this.pageSize,
					orderByColumn: 'update_time,create_time',
					isAsc: 'desc'
				}).then(result => {
					const data = result.rows;
					if(this.pageNum>1 && data.length < this.pageSize){
						return this.loadStatus = 'nomore';
					}
					this.houseList = data;
					for (let i = 0; i < this.houseList.length; i++) {
					    // 先转成字符串再转成对象，避免数组对象引用导致数据混乱
					    let item = this.houseList[i]
						if(!item.faceUrl.includes(config.staticUrl)){
							item.image = config.staticUrl+item.faceUrl
						}else{
							item.image = item.faceUrl
						}
						if(item.type == 0){
							item.type = '整租'
						}else if(item.type == 1){
							item.type = '合租'
						}
						if(item.roomType == 1){
							item.roomType = '主卧'
						}else if(item.roomType == 2){
							item.roomType = '次卧'
						}else{
							item.roomType = '未知'
						}
						if(this.$u.test.isEmpty(item.houseNum)){
							item.houseNum = ''
						}
						if(this.$u.test.isEmpty(item.houseHall)){
							item.houseHall = ''
						}
						if(this.$u.test.isEmpty(item.toiletNum)){
							item.toiletNum = ''
						}
					    this.flowList.push(item);
					}
					++ this.pageNum 
					this.loadStatus = 'loadmore';
				});
			},
			clickSearch() {
			    this.$u.route('/pages-module/search/search');
			},
			clickImage(houseId) {
				this.$u.route({
					url: '/pages-module/detail/detail',
					params: {
						houseId: houseId
					}
				})
			},
			clickNav(item){
				if(item.url){
					return this.$u.route(item.url);
				}
				if(item.type === "2"){
					// 判断是否有token
					let lifeData = uni.getStorageSync('lifeData');
					let token = lifeData.vuex_token
					if(!token){
						// 没有token 则跳转到登录
						return uni.reLaunch({
							url:'/pages-module/login/wxlogin'
						})
					}else{
						// 判断Token是否有效
						return this.$u.route('/pages-module/detail/preHouse');
						let url = "/api/profile/isExpiration";
						// return this.$u.get(url,{
						// 	token:token
						// }).then(obj => {
						// 	if(obj.data){
						// 		// 没有token过期则跳转到登录
						// 		return uni.reLaunch({
						// 			url:'/pages-module/login/wxlogin'
						// 		})
						// 	}else{
						// 		return this.$u.route('/pages-module/detail/preHouse');
						// 	}
						// });
					}
				}else if(item.type){
					// return this.$u.route('/pages-module/search/searchList');
					return this.$u.route({
						url: '/pages-module/search/searchList',
						params: {
							type: item.type
						}
					})
				}
			},
			code(){
				this.$mytip.toast('请咨询作者')
			},
			appSysFlowInfo(){
				// 流量统计
				// let uvCode = uni.getStorageSync("uvCode");
				// let url = "https://sourcebyte.cn/api/flow/upFlow?type=MINI&uvCode=" + uvCode;
				// uni.request({
				//   url: url,
				//   method: "POST",
				//   success: (res) => {
				// 	uni.setStorageSync("uvCode", res.data.data);
				//   },
				// });
			},
			server(){
				// window.open ('https://sourcebyte.cn')
				uni.makePhoneCall({
				  phoneNumber: "15720152064",
				});
			},
			getNoticecList(){
				let url = "/api/notice/findNoticeList";
				this.$u.get(url,{
					pageNum:1,
					pageSize:50,
					orderByColumn:'create_time',
					isAsc:'desc'
				}).then(obj => {
					let data = obj.rows
					data.filter(item=>{
						this.noticeList.push(item.noticeTitle)
					})
				});
			},
			moreInfo(){
				// uni.navigateToMiniProgram({
				// 	appId:'wxbca64173e772915e',// 此为开源字节appid
				// 	path:'/pages/index/index',// 此为开源字节首页路径
				// 	envVersion:"release",
				// 	success: res => {
				// 		 // 打开成功
				// 		 console.log("打开成功", res);
				// 	},
				// 	fail: err => {
				// 		 console.log(err);
				// 	}
				// })
			},
		}
	}
</script>

<style lang="scss" scoped>
	.nomore {
		background-color: $u-bg-color;
	}
	
	.search{
		width: 54px;
		height: 44px;
		
		&:active{
			background-color: $u-bg-color;
		}
	}
	
	.rowClass{
		border-radius: 8px;
		background-color: rgb(255, 255, 255);
		margin-top: 10rpx;
	}
	
	.hoverClass{
		background-color: #E4E7ED;
	}
	
	.tabName{
		font-size: 28rpx;
		color: $u-main-color;
	}
	
	.demo-warter {
		display: flex;
	    margin-top: 3px;
	    background-color: #ffffff;
	    padding: 6px;
	    position: relative;
		
	}
	
	.demo-warter .info{
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}
	
	.demo-warter .image{
		width:50%;
		height: 200rpx;
		margin-right: 30rpx;
		border-radius: 20rpx;
		background-position: center center;
		background-size: cover;  
	}
	
	.u-close {
	    position: absolute;
	    top: 20rpx;
	    right: 20rpx;
	}
	
	.item-cover {
	    font-size: 55rpx;
	    color: $u-type-warning;
	}
	
	.item-title {
	    font-size: 28rpx;
	    color: $u-main-color;
	    font-weight: bold;
		padding-top: 5rpx;
		padding-left: 10rpx;
	}
	
	.item-price {
	    font-weight: normal;
	    font-size: 32rpx;
	    color: $u-type-warning;
		padding-left: 5rpx;
	}
	
	.item-desc {
	    font-weight: normal;
	    font-size: 26rpx;
	    color: $u-tips-color;
		padding-bottom: 5rpx;
		padding-left: 10rpx;
	}
	
	.item-tag {
	    font-size: 24rpx;
	    color: $u-tips-color;
	    margin-top: 3px;
	}
	
	.buttom {
		.loginType {
			font-size: 14px;
			position: fixed;
			right: 30rpx;
			bottom: 300rpx;
			width: 60px;
			height: 60px;
			padding: 4px;
			cursor: pointer;
			background: #FFF;
			text-align: center;
			line-height: 60px;
			border-radius: 100%;
			-webkit-box-shadow: 0px 1px 20px 0px rgba(0,0,0,0.1),inset 0px -1px 0px 0px rgba(0,0,0,0.1);
			box-shadow: 0px 1px 20px 0px rgba(0,0,0,0.1),inset 0px -1px 0px 0px rgba(0,0,0,0.1);
		}
	}
	.u-slot-content{
		display: flex;
		justify-content: center;
	}
	
	.horizonal-tab{
			
		}
		.horizonal-tab .active{
			color: red;
		}
		.scroll-tab{
			white-space: nowrap; /* 必要，导航栏才能横向*/
			border-bottom: 1rpx solid #eee;
			text-align: center;
		}
		.scroll-tab-item{
			display: inline-block; /* 必要，导航栏才能横向*/
			margin: 20rpx 30rpx 0 30rpx;
		}
		.active .scroll-tab-line{
			border-bottom: 5rpx solid red;
			border-top: 5rpx solid red;
			border-radius: 20rpx;
			width: 70rpx;
			
		}
		
		.scrollContainer {
				width: 100%;
				margin-top: 30rpx;
				// height: 234rpx;
				white-space: nowrap;
			}
		
			// 容器项
			.scrollitem {
				display: inline-block;
				margin-left: 30rpx;
				height: 300rpx;
				width: 80%;
				border-radius: 20rpx;
			}
		
			.scrollimage {
				width: 100%;
				height: 100%;
				border-radius: 20rpx;
			}
		
			.recommandItemText {
				width: 270rpx;
				text-align: center;
				text-overflow: ellipsis;
				overflow: hidden;
				white-space: nowrap;
				margin: 0 auto;
			}
		
			.EmptyData {
				text-align: center;
				margin-top: 50rpx;
			}
			
			.u-waterfall img{
				width: 100%;
				height: 100%;
			}
</style>
