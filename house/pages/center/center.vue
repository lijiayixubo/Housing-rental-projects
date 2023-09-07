<template>
	<view>
		<u-navbar :is-back="false" title="我的" :border-bottom="false"></u-navbar>
		<view class="u-flex user-box u-p-l-30 u-p-r-20 u-p-t-30 u-p-b-30">
			<view class="u-flex" @click="profile">
				<view class="u-m-r-20">
					<u-avatar :src="avatar" size="140"></u-avatar>
				</view>
				<view class="u-flex-1">
					<view class="u-font-18 u-p-b-20">{{vuex_user.realName}}</view>
					<view class="u-font-14 u-tips-color">昵称:{{vuex_user.nick}}</view>
				</view>
			</view>
		</view>
		<view class="center-nav">
			<u-row>
				<u-col span="3" text-align="center" v-for="(item,index) in navList" :key="index">
					<view v-if="item.name=='问题反馈'">
						<!-- 调用微信反馈功能 -->
						<button type="default" open-type="feedback"  class="clearBtn" hover-class="none" style="background-color: #FFFFFF;">
							<u-icon :name="item.icon" color="#909399" size="50"></u-icon>
							<view class="tabName" style="padding-top: 15rpx;">{{item.name}}</view>
						</button>
					</view>
					<view @click="clickNav(item)" v-else>
						<u-icon :name="item.icon" color="#909399" size="50"></u-icon>
						<view class="tabName">{{item.name}}</view>
					</view>
				</u-col>
			</u-row>
		</view>
		
		<view class="icon-panel">
			<view
				v-for="(item, index) in indexList"
				:key="index"
				class="list"
				@click="clickItem(item)"
			>
				<image class="icon" :src="item.url"></image>
				<view class="right">
					<view>{{item.title}}</view>
					<view></view>
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
				avatar: uni.getStorageSync('lifeData').vuex_user.avatar && uni.getStorageSync('lifeData').vuex_user.avatar.includes('http')?uni.getStorageSync('lifeData').vuex_user.avatar:config.staticUrl+uni.getStorageSync('lifeData').vuex_user.avatar,
				show:true,
				navList:[
				   {name:"收藏",icon:"heart",url:"pages-module/center/heart"},
				   {name:"预约",icon:"checkmark-circle",url:"pages-module/center/history"},
				   {name:"实名",icon:"info-circle"},
				   {name:"钱包",icon:"info-circle"}
				],
				indexList: [
					{
						url: 'http://wx.isdefined.com/icon/tong.png',
						title: '租房合同'
					},
					{
						url: 'http://wx.isdefined.com/icon/shui.png',
						title: '水费缴纳'
					},
					{
						url: 'http://wx.isdefined.com/icon/dian.png',
						title: '电费缴纳'
					},
					{
						url: 'http://wx.isdefined.com/icon/fang.png',
						title: '房租缴纳'
					},
					{
						url: 'http://wx.isdefined.com/icon/lan.png',
						title: '蓝牙开锁'
					},
					{
						url: 'http://wx.isdefined.com/icon/yao.png',
						title: '查看密码'
					},
					{
						url: 'http://wx.isdefined.com/icon/hu.png',
						title: '账户明细'
					},
					{
						url: 'http://wx.isdefined.com/icon/tong.png',
						title: '用量统计'
					}
				]
			}
		},
		onLoad() {
			uni.$on('updateAvatar', (obj) => {
				// 获取数据
				this.updateAvatar();
			})
		},
		onUnload() {
			// 移除监听事件  
			uni.$off('updateAvatar');
		},
		onShow(){
			// 检查token
			this.checkToken();
		},
		methods: {
			logout() {
				// 登录成功修改token与用户信息
				this.$u.vuex('vuex_token', '');
				this.$u.vuex('vuex_user', {});
				this.$u.route('/pages-module/login/wxlogin')
			},
			profile(){
				this.$u.route('/pages-module/profile/profile')
			},
			setting(){
				this.$u.route('/pages-module/profile/setting')
			},
			//拨打固定电话
			callPhoneNumber() {
				uni.makePhoneCall({
					phoneNumber: "15720152064",
				});
			},
			problem(){
				this.$u.route({
					url: 'pages-module/login/problem'
				})
			},
			checkToken(){
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
					// let url = "/api/profile/isExpiration";
					// this.$u.get(url,{
					// 	token:token
					// }).then(obj => {
					// 	if(obj.data){
					// 		// 没有token过期则跳转到登录
					// 		return uni.reLaunch({
					// 			url:'pages-module/login/wxlogin'
					// 		})
					// 	}
					// });
				}
			},
			code(){
				this.$mytip.toast('敬请期待')
			},
			clickNav(item){
				if(item.url){
					this.$u.route(item.url);
				} else if(item.name == '实名') {
					if(this.vuex_user.isReal == 1) {
						this.$u.route('pages-module/center/isReal')
					} else {
						this.$u.route('pages-module/center/authreal')
					}
					console.log(this.vuex_user);
				} else{
					this.$mytip.toast('尚未开通支付功能')
				}
			},
			updateAvatar(){
				this.avatar = uni.getStorageSync('lifeData').vuex_user.avatar && uni.getStorageSync('lifeData').vuex_user.avatar.includes('http')?uni.getStorageSync('lifeData').vuex_user.avatar:config.staticUrl+uni.getStorageSync('lifeData').vuex_user.avatar
			},
			clickItem(item) {
				switch(item.title) {
					case '租房合同':
						this.$u.route('pages-module/center/agreement')
						break;
					case '水费缴纳':
						this.$u.route('pages-module/center/water')
						break;
					case '电费缴纳':
						this.$u.route('pages-module/center/electric')
						break;
					case '房租缴纳':
						this.$u.route('pages-module/center/rent')
						break;
					case '智能门锁':
					var that = this;
					            uni.openBluetoothAdapter({
					                success: (res) => {
					                    this.startBluetoothDevicesDiscovery();
					                     
					                },
					                fail: (res) => {
					                    console.log(res)
					                    uni.showModal({
					                        title: '提示',
					                        content: '请开启本机蓝牙'
					                    });
					                    if (res.errCode === 10001) {
					                        console.log('111')
					                        //监听蓝牙适配器是否打开，若打开则自动搜索蓝牙设备
					                        uni.onBluetoothAdapterStateChange(function(res) {
					                            if (res.available) {
					                                that.startBluetoothDevicesDiscovery();//开启蓝牙设备搜索
					                            }
					                        });
					                    }
					                },
					            });
						break;
					case '查看密码':
					var that = this;
					            uni.openBluetoothAdapter({
					                success: (res) => {
										uni.showLoading({
											title:'正在搜索设备……'
										})
										setTimeout(() => {
											uni.hideLoading();
											uni.showModal({
												content:'未搜索到设备'
											})
										}, 5000)
					                    taht.startBluetoothDevicesDiscovery();
										
					                     
					                },
					                fail: (res) => {
					                    console.log(res)
					                    uni.showModal({
					                        title: '提示',
					                        content: '请开启本机蓝牙'
					                    });
					                    if (res.errCode === 10001) {
					                        console.log('111')
					                        //监听蓝牙适配器是否打开，若打开则自动搜索蓝牙设备
					                        uni.onBluetoothAdapterStateChange(function(res) {
					                            if (res.available) {
					                                that.startBluetoothDevicesDiscovery();//开启蓝牙设备搜索
					                            }
					                        });
					                    }
					                },
					            });
	
						
						break;
					uni.showModal({
						content:'您暂未签订合同'
					})
						break;
					case '账户明细':
					uni.showModal({
						content:'您暂未签订合同'
					})
						break;
					case '用量统计':
					uni.showModal({
						content:'您暂未签订合同'
					})
						break;
				}
			}
		}
	}
</script>

<style lang="scss">
.user-box{
	background-color: #fff;
	justify-content: space-between;
}

.u-iconfont::before {
   color: #eee;
}

.center-nav{
	background-color: #FFFFFF;
	margin-top: 30rpx;
	padding: 30rpx 0;
	border-radius: 8px;
	.tabName{
		color: #606266;
		font-size: 26rpx;
		padding-top: 10rpx;
	}
}

.grid-text {
		font-size: 28rpx;
		margin-top: 4rpx;
		color: $u-type-info;
	}

.qiandao{
	color: #606266;
	font-size: 24rpx;
	margin-right: 24rpx;
	margin-top: 54rpx;
	justify-content:center;
	align-items: center;
}

.clearBtn{
		margin:0;
		padding: 0;
		line-height: 1;
		background-color: #FFFFFF;
}

.clearBtn::after{
	position: unset !important;
	border: unset;
}

.list{
	display: flex;
	flex-direction: row;
	padding: 20rpx 30rpx;
	background-color: #FFFFFF;
	align-items: center;
	border-bottom: 0.5rpx solid #eee;
	
}

.list .icon {
	width: 35rpx;
	height: 35rpx;
	margin-right: 30rpx;
}
.icon-panel {
	margin-top: 30rpx;
}
</style>