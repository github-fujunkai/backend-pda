<template>
	<view class="uni-container">
		<view class="uni-title">
			<view class="tit">
				产线：{{replaceData?.lineName}}
			</view>
			<view class="tit">
				易耗品料号：{{replaceData?.partNumber}}
			</view>
			<view class="tit">
				设备：{{replaceData?.macMesCode}}
			</view>
			<view class="tit">
				易耗品料盘：{{replaceData?.materialName}}
			</view>
		</view>
		<uni-forms ref="form" :modelValue="formData" :rules="formData.operationType==1?rules:rules1" labelWidth="145rpx">
			<uni-row class="demo-uni-row" :gutter="20">
				<uni-col :span="24">
					<uni-forms-item label="更换类型:" name="operationType">
						<uni-data-select v-model="formData.operationType" :localdata="dictList"></uni-data-select>
					</uni-forms-item>
					<uni-forms-item label="更换数量:" name="qty" >
						<uni-easyinput class="uni-mt-5" v-model="formData.qty"></uni-easyinput>
					</uni-forms-item>
				</uni-col>
				<uni-col :span="24" class="uni-mt-5">
					<uni-forms-item label="更换原因:" name="reason" >
						<uni-easyinput type="textarea" v-model="formData.reason" placeholder=""></uni-easyinput>
					</uni-forms-item>
				</uni-col>
			</uni-row>
		</uni-forms>
		<view class="" style="text-align: center;">
			<button size="mini" type="primary" @click="submitForm">保存</button>
		</view>
	</view>
</template>

<script setup>
	import {
		ref,
		toRefs,
		reactive,
		onMounted
	} from 'vue'
	import {
		submitResult
	} from "/src/api/api.js"
	import {
		onLoad,
		onUnload,
		onHide
	} from "@dcloudio/uni-app"
	onLoad((query)=>{
		let data = uni.getStorageSync('replaceData')?.operationType;
		uni.setNavigationBarTitle({
			title: data == 1? "易耗品更换":"易耗品更换"
	    });
		formData.value.operationType = uni.getStorageSync('replaceData')?.operationType;
	})
	const dictList = ref([{
		text: "正常",
		value: '1'
	},{
		text: "异常",
		value: '2'
	}])
	const form = ref(null)
	const state = reactive({
		formData:{
			operationType:1,
			qty:"",
			reason:""
		},
		replaceData:uni.getStorageSync('replaceData'),
		rules: {
			operationType: {
				rules: [{
						required: true,
						errorMessage: '请选择更换类型',
					}
				]
			},
			qty: {
				rules: [{
						required: true,
						errorMessage: '更换数量不能为空',
					}
				]
			},
			reason: {
				rules: [{
						required: false,
						errorMessage: '更换原因不能为空',
					}
				]
			}
		},
		rules1: {
			operationType: {
				rules: [{
						required: true,
						errorMessage: '请选择更换类型',
					}
				]
			},
			qty: {
				rules: [{
						required: true,
						errorMessage: '更换数量不能为空',
					}
				]
			},
			reason: { 
				rules: [{
						required: true,
						errorMessage: '更换原因不能为空',
					}
				]
			}
		},
	})
	const {formData,replaceData,rules,rules1} = toRefs(state)
	
	onMounted(()=>{
		console.log(uni.getStorageSync('replaceData'))
	})
	
	const submitForm = () =>{
		form.value.validate().then(ress => {
			submitResult({
				...formData.value,
				id:uni.getStorageSync('replaceData').id,
				// operationType:uni.getStorageSync('replaceData').operationType,
				userId:uni.getStorageSync('user').id,
			}).then(res => {
				if(res.success){
					uni.showToast({
						icon: 'success',//success error none
						title: res.msg
					})
					formData.value.qty = ''
					formData.value.reason = ''
				}else{
					uni.showToast({
						icon: 'error',//success error none
						title: res.msg
					})
				}
				
			})
			
		}).catch(err => {
			
		})
	}
</script>

<style lang="scss" scoped>
	.uni-container{
		padding: 15rpx;
		.uni-title{
			display: flex;
			flex-wrap: wrap;
			.tit{
				width: 47%;
				margin-bottom: 10rpx;
				padding-left: 20rpx;
			}
		}
		button {
			// height: 70rpx;
			// line-height: 70rpx;
			background-color: $uni-color-primary;
			color: $uni-text-color-inverse;
			font-size: $uni-font-size-base;
		}
	}
</style>
