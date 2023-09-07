<template>
	<view class="book-form">
		<!-- 注意，如果需要兼容微信小程序，最好通过setRules方法设置rules规则 -->
		<u-form
				labelPosition="left"
				:model="model1"
				:rules="rules"
				ref="uForm"
				labelWidth="140rpx"
		>
			<u-form-item
				label="约看房间"
				prop="room"
				borderBottom
			>
				<text>{{room.villageName +" "+ room.houseCode +" "+ room.houseNo}}</text>
			</u-form-item>
			<u-form-item
					label="约看姓名"
					prop="user.realName"
					borderBottom
					ref="item1"
			>
				<u-input
						v-model="user.realName"
				></u-input>
			</u-form-item>
			<u-form-item
					label="手机号"
					prop="user.mobile"
					borderBottom
					ref="item1"
			>
				<u-input
						v-model="user.mobile"
						placeholder="请输入手机号"
				></u-input>
			</u-form-item>
			
			<u-form-item
					label="约看时间"
					prop="user.defaultTime"
					borderBottom
					ref="item1"
			>
				<text @click="showTimePicker">{{user.defaultTime}}</text>
				
			</u-form-item>
		</u-form>
		<view>
			<u-picker
			    mode="time"
				v-model="showTime"
				:defaultTime="user.defaultTime"
				@confirm="confirm"
				:params="params"
			></u-picker>
		</view>
		<view class="submit-btn">
			<u-button @click="submit" type="warning">提交</u-button>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			showSex: false,
			showTime: false,
			defaultTime: '2019-12-11 20:15:35',
			room: {
				
			},
			user: {
				
			},
			model1: {
				userInfo: {
					name: 'uView UI',
					sex: '',
				},
			},
			actions: [{
				name: '男',
				},
				{
					name: '女',
				},
				{
					name: '保密',
				},
			],
			rules: {
				'userInfo.name': {
					type: 'string',
					required: true,
					message: '请填写姓名',
					trigger: ['blur', 'change']
				},
				'userInfo.sex': {
					type: 'string',
					max: 1,
					required: true,
					message: '请选择男或女',
					trigger: ['blur', 'change']
				},
			},
			radio: '',
			switchVal: false,
			params: {
				year: true,
				month: true,
				day: true,
				hour: true,
				minute: true,
				second: true,
				province: true,
				city: true,
				area: true,
				timestamp: true
			}
		};
	},
	mounted() {
		console.log(this.user, '===');
		console.log(this.room, '===');
	},
	methods: {
		submit(){
			if (!this.user.mobile) {
				this.$mytip.toast('请填写预约手机号');
				return;
			}
			this.$refs.uForm.validate(valid => {
				if (valid) {
					console.log('验证通过');
					let url = "api/houseApi/reservation/add";
					let data = {
						houseId: this.room.id,
						mobile: this.user.mobile,
						renterId: this.user.id,
						status: 1,
						time: this.submittime
					}
					this.$u.post(url,data).then(res => {
						if(res.code == 200) {
							this.$mytip.toast('预约成功')
						}
					});
				} else {
					this.$mytip.toast('填写信息格式不正确')
				}
			});
		},
		sexSelect(e) {
			this.model1.userInfo.sex = e.name
		},
		confirm(e) {
					// console.log(e);
			this.submittime = '';
				if (this.params.year) this.submittime += e.year;
				if (this.params.month) this.submittime += '-' + e.month;
				if (this.params.day) this.submittime += '-' + e.day;
				if (this.params.hour) this.submittime += ' ' + e.hour;
				if (this.params.minute) this.submittime += ':' + e.minute;
				if (this.params.second) this.submittime += ':' + e.second;
		},
		showTimePicker() {
			console.log('111');
			this.showTime = true;
		}
	},
	onReady() {
		//如果需要兼容微信小程序，并且校验规则中含有方法等，只能通过setRules方法设置规则。
    	this.$refs.uForm.setRules(this.rules)
    },
	onLoad(options) {
		this.room = JSON.parse(options.room);
		this.user = JSON.parse(options.user);
		this.user.defaultTime = '2019-12-11 20:15:35';
		console.log('book===room', JSON.parse(options.room));
		console.log('book===user', JSON.parse(options.user));
	}
};
</script>

<style lang="less">
	.book-form {
		padding: 30rpx;
	}
	.submit-btn {
		margin-top: 20rpx;
	}
</style>