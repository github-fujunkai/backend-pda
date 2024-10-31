<template>

	<view class="login">
		<h6 class="title"></h6>
		<uni-forms ref="form" :modelValue="formData" :rules="rules">
			<uni-forms-item label="" name="username">
				<uni-easyinput prefixIcon="person" type="text" v-model="formData.username" placeholder="请输入账号" />
			</uni-forms-item>
			<uni-forms-item label="" name="password">
				<uni-easyinput prefixIcon="eye" type="password" v-model="formData.password" placeholder="请输入密码" />
			</uni-forms-item>
		</uni-forms>
		<button @click="submitForm" type="primary" size="mini" style="width: 100%;">登录</button>
		
		<div class="link" @click="goLink">连接设置</div>
	</view>
	
</template>



<script setup>
	import {
		uaeslogin,
		uaeslogin1
	} from "/src/api/api.js"

	import {
		ref,
		toRefs,
		reactive
	} from 'vue'

	import {
		onLoad,
		onUnload,
		onHide
	} from "@dcloudio/uni-app"
	const state = reactive({
		formData: {
			username:"fujunkai",
			password:"123456"
		},
		rules: {
			username: {
				rules: [{
						required: true,
						errorMessage: '请输入您的账号',
					},
					{
						minLength: 3,
						maxLength: 20,
						errorMessage: '{label}长度在 {minLength} 到 {maxLength} 个字符',
					}
				]
			},
			password: {
				rules: [{
						required: true,
						errorMessage: '请输入您的密码',
					},
					{
						minLength: 3,
						maxLength: 20,
						errorMessage: '{label}长度在 {minLength} 到 {maxLength} 个字符',
					}
				]
			}
		},
		url: ""
	})
	const {
		formData,
		rules,
		url
	} = toRefs(state);

	const interval = ref(null);
	const form = ref(null);
	const submitForm = () => {
		form.value.validate().then(ress => {
			uaeslogin({
				...formData.value,
				scope:'DIP'
			}).then(res => {
				if(res.respCode == 200){
					uni.setStorageSync('user',res?.bizData || '')
					uni.redirectTo({
						url: "../menu/index"
					})
					uni.showToast({
						icon: 'success',//success error none
						title: res.msg
					})
				}else{
					uni.showToast({
						icon: 'error',//success error none
						title: res.msg
					})
				}
				
			})
			//注释
			// let res = uaeslogin1();
			// uni.setStorageSync('lineList',res?.data?.lineList || [])
			// uni.setStorageSync('user',res?.data?.user || '')
			// uni.redirectTo({
			// 	url: "../menu/index"
			// })
			// uni.showModal({
			// 	title: '提示',
			// 	content: uni.getStorageSync('BASE_URL'),
			// 	success: function (res) {
			// 		if (res.confirm) {
			// 			console.log('用户点击确定');
			// 		} else if (res.cancel) {
			// 			console.log('用户点击取消');
			// 		}
			// 	}
			// });
		}).catch(err => {
			
		})
	}

	const goLink = () => {
		uni.navigateTo({
			url: "./link"
		})
	}
	onLoad((options) => {

	})
	onUnload((options) => {
		clearInterval(interval.value);
		interval.value = null;
	})
	
</script>

<style scoped lang="scss">
	.login {
		width: 80%;
		margin: 0 auto;
		margin-top: 16vh;

		.title {
			font-size: 36rpx;
			text-align: center;
			margin-bottom: 50rpx;
		}

		.link{
			width: 100%;
			text-align: center;
			color: #007aff;
			margin-top: 5%;
		}
	}
</style>
