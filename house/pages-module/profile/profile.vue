<template>
	<view class="u-m-20">
		<u-navbar :is-back="true" title="个人信息" :border-bottom="false"></u-navbar>
		<view>
			<u-cell-group>
				<u-cell-item title="头像" :arrow="true" hover-class="none" @click="updateAvatar">
					<u-avatar :src="pic" size="100"></u-avatar>
				</u-cell-item>
			</u-cell-group>
			<u-cell-group>
				<u-cell-item title="昵称" :arrow="true" hover-class="none" @click="updateName">
					{{vuex_user.nick}}
				</u-cell-item>
			</u-cell-group>
		</view>
		
		<u-modal v-model="showModel" @confirm="confirmName" ref="uModal" :async-close="true"
		title="设置昵称">
			<view class="slot-content">
				<u-input v-model="nick" type="text" :border="false" placeholder="请输入昵称"/>
			</view>
		</u-modal>
		
		<!-- <view class="u-m-t-20">
			<u-button type="primary" @click="subProfile">提交</u-button>
		</view> -->
		
		<!-- 如果是微信登录小程序，则获取用户的昵称与头像 -->
		<!-- #ifdef MP-WEIXIN -->  
			<!-- <u-button type="default">使用微信头像与昵称</u-button> -->
		<!-- #endif -->
	</view>
</template>

<script>
	import config from "@/common/config.js" // 全局配置文件
	export default {
		data() {
			return {
				pic:uni.getStorageSync('lifeData').vuex_user.avatar.includes('http')?uni.getStorageSync('lifeData').vuex_user.avatar:config.staticUrl+uni.getStorageSync('lifeData').vuex_user.avatar,
				nick:null,
				showModel:false,
			}
		},
		methods: {
			updateName(){
				this.showModel = true;
			},
			confirmName() {
				if(!this.nick){
					this.showModel = false;
					return this.$mytip.toast('请输入昵称')
				}
				let url = "api/profile/updateProfile";
				let vuex_user = uni.getStorageSync('lifeData').vuex_user
				let user = vuex_user
				let userId = user.id;
				this.$u.put(url,{
					userId:userId,
					nick:this.nick,
				}).then(data => {
					// 关闭
					user.nick = this.nick
					this.$u.vuex('vuex_user', vuex_user);
					this.showModel = false;
					this.$mytip.toast('昵称修改成功')
				});
			},
			updateAvatar(){
				this.$u.route('/pages-module/profile/avatar')
			},
			subProfile(){
				// 1.更新vuex中的用户信息
				this.$mytip.toast('修改成功')
				// 2.页面跳转
				uni.switchTab({
					url: '/pages/center/center'
				})
			},
			getUserProfile(){
				// 如果是微信登录小程序，则获取用户的昵称与头像
				// #ifdef MP-WEIXIN
					// 此处执行微信才执行
				// #endif
			    var that = this;
			    uni.getUserProfile({
			        desc: '获取您的微信信息以授权小程序',
			        lang: 'zh_CN',
			        success: UserProfileRes => {  
			            console.log(UserProfileRes)
			            uni.login({
			                provider: 'weixin',
			                success: function(loginRes) {
			                    let avatar = UserProfileRes.userInfo.avatar; //用户头像
			                    let nick = UserProfileRes.userInfo.nick; //用户微信名
			                    let gender = UserProfileRes.userInfo.gender;//性别
								console.log(avatar);
								// 去修改用户的昵称与头像
			                },
			                fail(err) {
			                    console.log(err)
			                }
			            });
			        },
			        fail:err=>{
			            console.log(err)
			        }
			    })
			}
		}
	}
</script>

<style lang="scss" scoped>
	.slot-content{
		padding: 40rpx;
	}
</style>