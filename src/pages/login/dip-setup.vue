<template>
	<view class="container">
		<uni-forms ref="form" :modelValue="formData" :rules="rules" labelWidth="145rpx">
			<uni-forms-item label="工位" name="name">
				<uni-easyinput type="text" v-model="formData.name" placeholder="请输入工位" />
			</uni-forms-item>
		</uni-forms>
		<button @click="submitForm">保存</button>
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
						errorMessage: '',
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
