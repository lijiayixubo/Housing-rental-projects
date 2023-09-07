<!-- 蓝色登录页面2 -->
<template>
	<view>
		<view>
			<view class="header">
				<image src="/static/img/public/logo.jpeg"></image>
			</view>
			<view class="content">
				<view>申请获取以下权限</view>
				<text>获得你的公开信息(昵称，头像、地区等)</text>
			</view>
			<button class="bottom" type="primary" withCredentials="true" @tap="getUserProfile">授权登录</button>
			<!-- 注意，这里要用@tap -->
		</view>
	</view>
</template>
<script>
export default {
	data() {
		return {
			// username: '',
			// password: '',
			username: '15720152064',
			password: '123456',
		}
	},
	// onLoad() {
	// 	// 在页面中定义激励视频广告
	// 	let videoAd = null
	// 	// 在页面onLoad回调事件中创建激励视频广告实例
	// 	if (wx.createRewardedVideoAd) {
	// 	  videoAd = wx.createRewardedVideoAd({
	// 	    adUnitId: 'adunit-8cd5789a01a51891'
	// 	  })
	// 	  videoAd.onLoad(() => {})
	// 	  videoAd.onError((err) => {})
	// 	  videoAd.onClose((res) => {})
	// 	}
	// 	// 用户触发广告后，显示激励视频广告
	// 	if (videoAd) {
	// 	  videoAd.show().catch(() => {
	// 	    // 失败重试
	// 	    videoAd.load()
	// 	      .then(() => videoAd.show())
	// 	      .catch(err => {
	// 	        console.log('激励视频 广告显示失败')
	// 	      })
	// 	  })
	// 	}
	// },
	methods: {
		login() {
			if(!this.$u.test.mobile(this.username)){
				return this.$refs.uToast.show({
					title: '手机号不正确',
					type: 'warning',
				})
			}
			if(!this.password){
				return this.$refs.uToast.show({
					title: '密码不能为空',
					type: 'warning',
				})
			}
			// 登录json参数，不同于表单参数
			let url = "/api/thirdLogin";
			this.$u.post(url,{
				username: this.username,
				password: this.password
			}).then(data => {
				// 登录成功初始化token与用户信息
				this.$u.vuex('vuex_token', data.token);
				this.$u.vuex('vuex_user', data.loginUser);
				uni.switchTab({
					url: '/pages/index/index'
				})
			});
		},
		weChatLogin(e){
			let code= e.detail.code;
			if(code){
				uni.showLoading({title:"登录中....",mask:true})
				let url = "/api/miniWxApi/getPhoneNum?code="+code;
				this.$u.get(url).then(res => {
					let phoneNum = res.phoneNum
					let weChatUrl = "/api/weChatLogin";
					this.$u.post(weChatUrl,{
						username: phoneNum,
						code: code
					}).then(data => {
						uni.hideLoading();
						// 登录成功初始化token与用户信息
						this.$u.vuex('vuex_token', data.token);
						this.$u.vuex('vuex_user', data.loginUser);
						uni.switchTab({
							url: '/pages/index/index'
						})
					});
				});
			}else{
				this.$mytip.toast('登录失败')
			}
		},
		reg(){
			this.$u.route({
				url: '/pages-module/login/account'
			})
		},
		getUserProfile() {
			uni.getUserProfile({
				desc: '登录',
				success: (info) => {
					uni.login({
						provider:"weixin",
						success:(res)=>{
							console.log(res);
							// 获取微信登录的授权码
							var code = res.code
							//在写发送request请求，
							console.log(info)
							uni.showLoading({title:"登录中....",mask:true})
							let url = "/wx-login";
							let data = {
								code,
								encryptedIv: info.iv,
								encryptedData: info.encryptedData
							}
							//这里取到的是用户的信息，自己安排自己的业务
							this.$u.post(url, data).then(res => {
								console.log('微信登录返回',res);
								this.$u.vuex('vuex_token', res.token);
								this.$u.vuex('vuex_user', res.loginUser);
								uni.switchTab({
									url: '/pages/center/center'
								})
							});
						}
					})
					
				},
				fail: (err) => {
					console.log(err);
				}
			})
		}
	},
};
</script>


<style>
page {
  background-color: #ffffff;
}
</style>
<style lang="scss" scoped>
.header {
		margin: 90rpx 0 90rpx 50rpx;
		border-bottom: 1px solid #ccc;
		text-align: center;
		width: 650rpx;
		height: 300rpx;
		line-height: 450rpx;
	}
 
	.header image {
		width: 200rpx;
		height: 200rpx;
		border-radius: 10rpx;
	}
 
	.content {
		margin-left: 50rpx;
		margin-bottom: 90rpx;
	}
 
	.content text {
		display: block;
		color: #9d9d9d;
		margin-top: 40rpx;
	}
 
	.bottom {
		border-radius: 80rpx;
		margin: 70rpx 50rpx;
		font-size: 35rpx;

	}
</style>
