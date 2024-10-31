<template>
	<view class="container">
		<uni-forms ref="form" :modelValue="formData" :rules="rules" labelWidth="145rpx">
			<uni-forms-item label="链接地址" name="name">
				<uni-easyinput type="text" v-model="formData.name" placeholder="请输入地址" />
			</uni-forms-item>
			<uni-forms-item label="端口号" name="port">
				<uni-easyinput type="text" v-model="formData.port" placeholder="请输入端口号" />
			</uni-forms-item>
		</uni-forms>
		<button @click="submitForm">保存</button>
		<uni-row class="demo-uni-row" style="padding:50rpx;">
			<uni-col :span="12">
				<button size="mini" @click="submitForm">防错</button>
			</uni-col>
			<uni-col :span="12">
				<button style="float: right;" size="mini" @click="goDIP">DIP</button>
			</uni-col>
		</uni-row>
	</view>
</template>


<script setup>
	import {
		ref,
		toRefs,
		reactive
	} from 'vue'
	const form = ref(null)
	const state = reactive({
		formData: {
			name:uni.getStorageSync('BASE_URL'),
		},
		rules: {
			name: {
				rules: [{
						required: true,
						errorMessage: '连接地址不能为空',
					}
				]
			}
		},
	})
	const {
		formData,
		rules
	} = toRefs(state);
	
	const submitForm = () =>{
		// console.log(uni.getStorageSync('BASE_URL'))
		form.value.validate().then(res => {
			uni.setStorageSync('BASE_URL',formData.value.name)
			// console.log(uni.getStorageSync('BASE_URL'))
			uni.showToast({
				icon: 'success',//success error none
				title: '保存成功'
			})
			 //需要刷新地址才会立即变化
			setTimeout(()=>{
				location.reload();
			},500)
		}).catch(err => {
			
		})
	}
	
	const goDIP = () => {
		uni.navigateTo({
			url: "./dip-setup"
		})
	}
</script>

<style lang="scss" scoped>
.container{
	padding: 20rpx;
	button {
		// height: 70rpx;
		// line-height: 70rpx;
		background-color: $uni-color-primary;
		color: $uni-text-color-inverse;
		font-size: $uni-font-size-base;
	}
}
</style>
