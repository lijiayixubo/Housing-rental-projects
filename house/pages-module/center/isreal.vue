<template>
	<view>
		<view class="section">
			<view class="item">
				<text>姓名</text>
				<text>{{vuex_user.realName}}</text>
			</view>
			<view class="item">
				<text>身份证号</text>
				<text>{{vuex_user.cardId}}</text>
			</view>
		</view>
		<view class="section">
			<view class="title">证件信息</view>
			<view class="card">
				<text>国徽面</text>
				<image :src="vuex_user.cardBack"></image>
			</view>
			<view class="card">
				<text>人像面</text>
				<image :src="vuex_user.cardFront"></image>
			</view>
		</view>
		<view class="submit">
			<u-button shape="circle" type="warning">已认证</u-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
