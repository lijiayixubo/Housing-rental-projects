<template>
	<view>
		<u-navbar :is-back="true" title="租房合同" :border-bottom="false"></u-navbar>
		<view class="wrap">
			<view class="u-tabs-box">
				<u-tabs-swiper activeColor="#2979ff" ref="tabs" :list="list" :current="current" @change="change" :is-scroll="false" swiperWidth="750"></u-tabs-swiper>
			</view>
			<swiper class="swiper-box" :current="swiperCurrent" @transition="transition" @animationfinish="animationfinish">
				<swiper-item class="swiper-item" v-for="(swiper,i) in orderList" :key="i">
					<scroll-view scroll-y style="height: 100%;width: 100%;">
						<view class="page-box">
							<view v-if="swiper.length === 0">
								<view class="centre">
									<image :src="empty" mode=""></image>
									<view class="explain">
										您还没有签订合同
										<view class="tips">联系房东发放合同</view>
									</view>
									<view class="btn">联系房东</view>
								</view>
							</view>
							<view v-else
							 class="order" v-for="(item, index) in swiper" :key="index">
								<view class="top">
									<view class="left">
										<view class="store">合同编号：{{ item.id }}</view>
										<u-icon name="arrow-right" color="rgb(203,203,203)" :size="26"></u-icon>
									</view>
								</view>
								<view class="item">
									<view class="left"><image :src="item.image" mode="aspectFill"></image></view>
									<view class="content">
										<view class="title u-line-2">
											房间编号：{{item.houseId}}
										</view>
										<view class="price">房租金额 ¥{{item.price}}</view>
										<view class="type">
											账单日期：{{item.time}}
										</view>
									</view>
								</view>
								<view class="bottom">
									<view v-if="item.status == 0" class="evaluate btn"  @click.stop="viewImage(item.houseId)">去签约</view>
									<view v-if="item.status == 1" class="evaluate btn"  @click.stop="viewImage(item.houseId)">已签约</view>
									<view v-if="item.status == 2" class="evaluate btn"  @click.stop="viewImage(item.houseId)">待确认</view>
									<view v-if="item.status == 3" class="evaluate btn"  @click.stop="viewImage(item.houseId)">已解约</view>
								</view>
							</view>
						</view>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
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
				empty:'/static/empty/default.png',
				orderList: [[], [], [], []],
				list: [
					{
						name: '未签订'
					},
					{
						name: '已签订',
					},
					{
						name: '解约中'
					},
					{
						name: '已解约',
					}
				],
				current: 0,
				swiperCurrent: 0,
				tabsHeight: 0,
				dx: 0,
				pageNum: 1,
				pageSize: 100,
			};
		},
		onLoad() {
			this.getOrderList(0);
			this.getOrderList(1);
			this.getOrderList(2);
			this.getOrderList(3);
		},
		methods: {
			login(){
				this.$u.route('/pages-module/login/wxlogin')
			},
			// 页面数据
			getOrderList(idx) {
				this.findAgreementList(idx)
			},
			// tab栏切换
			change(index) {
				this.swiperCurrent = index;
				this.orderList[index] = []
				this.getOrderList(index);
			},
			transition({ detail: { dx } }) {
				this.$refs.tabs.setDx(dx);
			},
			animationfinish({ detail: { current } }) {
				this.$refs.tabs.setFinishCurrent(current);
				this.swiperCurrent = current;
				this.current = current;
			},
			findAgreementList(idx) {
				let url = "/api/houseApi/getAgreementList";
				let defaultData = {
					status:idx,
					userId:uni.getStorageSync('lifeData').vuex_user.id,
					pageNum: this.pageNum,
					pageSize: this.pageSize,
					orderByColumn: 'update_time,create_time',
					isAsc: 'desc'
				}
				this.$u.get(url, {...defaultData,...this.searchData}).then(result => {
					const data = result.rows;
					this.agreementList = data;
					for (let i = 0; i < this.agreementList.length; i++) {
						// 先转成字符串再转成对象，避免数组对象引用导致数据混乱
						let item = this.agreementList[i]
						if(!item.img.includes(config.staticUrl)){
							item.image = config.staticUrl+item.img
						}else{
							item.image = item.img
						}
						this.orderList[idx].push(item);
					}
				});
			},
			publishHouse(){
				this.$u.route('/pages-module/detail/preHouse');
			},
			server(){
				// window.open ('https://sourcebyte.cn')
				uni.makePhoneCall({
				  phoneNumber: "15720152064",
				});
			},
			clickImage(houseId) {
				this.$u.route({
					url: '/pages-module/detail/preHouse',
					params: {
						houseId: houseId
					}
				})
			},
			viewImage(houseId){
				// this.$u.route({
				// 	url: '/pages-module/detail/detail',
				// 	params: {
				// 		houseId: houseId
				// 	}
				// })
			}
		}
	};
</script>

<style>
/* #ifndef H5 */
page {
	height: 100%;
	background-color: #f2f2f2;
}
/* #endif */
</style>

<style lang="scss" scoped>
	.container{
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		.empty{
			overflow: hidden;
			.tip{
				color: #909399  ;
			}
			.btn {
				color:#fff ;
				background-color: #2979ff;
				width:200rpx;
				padding: 15rpx 28rpx;
				border-radius: 130rpx;
				margin: 30rpx 0 0 100rpx;
			}
		}
	}
	.order {
		width: 710rpx;
		background-color: #ffffff;
		margin: 20rpx auto;
		border-radius: 20rpx;
		box-sizing: border-box;
		padding: 20rpx;
		font-size: 28rpx;
		.top {
			display: flex;
			justify-content: space-between;
			.left {
				display: flex;
				align-items: center;
				.store {
					// margin: 0 10rpx;
					font-size: 32rpx;
				}
			}
			.right {
				color: #2979ff;
			}
		}
		.item {
			display: flex;
			margin: 20rpx 0 0 0;
			.left {
				margin-right: 30rpx;
				image {
					width: 150rpx;
					height: 150rpx;
					border-radius: 10rpx;
				}
			}
			.content {
				.title {
					font-weight: bold;
					font-size: 28rpx;
					line-height: 50rpx;
				}
				.price{
					margin: 10rpx 0;
					font-size: 30rpx;
				}
				.type {
					margin: 10rpx 0;
					font-size: 24rpx;
					color: $u-tips-color;
				}
				.desc {
					margin: 10rpx 0;
					font-size: 24rpx;
					color: $u-tips-color;
				}
			}
		}
		.bottom {
			display: flex;
			margin-top: 20rpx;
			padding: 0 10rpx;
			justify-content: flex-end;
			align-items: center;
			.btn {
				margin-left: 20rpx;
				line-height: 52rpx;
				width: 160rpx;
				border-radius: 26rpx;
				border: 2rpx solid $u-border-color;
				font-size: 26rpx;
				text-align: center;
				color: $u-type-info-dark;
			}
			.evaluate {
				// color: #2979ff;
				// border-color: #2979ff;
				color: $u-tips-color;
				border-color: $u-tips-color;
			}
		}
	}
	.centre {
		text-align: center;
		margin: 200rpx auto;
		font-size: 32rpx;
		image {
			width: 164rpx;
			height: 164rpx;
			border-radius: 50%;
			margin-bottom: 20rpx;
		}
		.tips {
			font-size: 24rpx;
			color: #999999;
			margin-top: 20rpx;
		}
		.btn {
			margin: 80rpx auto;
			width: 200rpx;
			border-radius: 32rpx;
			line-height: 64rpx;
			color: #ffffff;
			font-size: 26rpx;
			background-image:linear-gradient(to left,#2979ff,rgba(#2979ff,0.6));
		}
	}
	.wrap {
		display: flex;
		flex-direction: column;
		height: calc(100vh - var(--window-top));
		width: 100%;
	}
	.swiper-box {
		flex: 1;
	}
	.swiper-item {
		height: 100%;
	}

	.buttom {
		.loginType {
			font-size: 14px;
			position: fixed;
			right: 30rpx;
			bottom: 120rpx;
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
</style>
