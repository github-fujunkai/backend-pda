<template>
	<view class="container">
		<uni-forms ref="form" :modelValue="formData" :rules="rules" labelWidth="145rpx">
			<view class="tab-nav">
				<view v-for="(tab, index) in tabs" :key="index" :class="['tab-item', { active: currentTab === index }]"
					@click="switchTab(index)">
					{{ tab.name }}
				</view>
			</view>
			<uni-forms-item label="工位" name="name">
				<uni-easyinput type="text" v-model="formData.port" placeholder="请输入工位" />
			</uni-forms-item>
			<uni-forms-item label="工单号" name="port">
				<uni-easyinput type="text" v-model="formData.port" placeholder="请输入工单号" />
			</uni-forms-item>
			<uni-forms-item label="产品料号" name="port">
				<uni-easyinput type="text" v-model="formData.port" placeholder="请输入产品料号" />
			</uni-forms-item>
			<uni-forms-item label="容器编码" name="port">
				<uni-easyinput type="text" v-model="formData.port" placeholder="请输入容器编码" />
			</uni-forms-item>
			<uni-forms-item label="容器列表" name="port">
				<uni-easyinput type="textarea" v-model="formData.port" placeholder="请输入容器列表"></uni-easyinput>
			</uni-forms-item>
		</uni-forms>
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
			name: uni.getStorageSync('BASE_URL'),
		},
		rules: {
			name: {
				rules: [{
					required: true,
					errorMessage: '连接地址不能为空',
				}]
			}
		},
		currentTab: 0,
		tabs: [{
				name: '一级包装',
			},
			{
				name: '二级包装',
			}
		]
	})
	const {
		formData,
		rules,
		currentTab,
		tabs
	} = toRefs(state);

	const submitForm = () => {
		// console.log(uni.getStorageSync('BASE_URL'))
		form.value.validate().then(res => {
			uni.setStorageSync('BASE_URL', formData.value.name)
			// console.log(uni.getStorageSync('BASE_URL'))
			uni.showToast({
				icon: 'success', //success error none
				title: '保存成功'
			})
			//需要刷新地址才会立即变化
			setTimeout(() => {
				location.reload();
			}, 500)
		}).catch(err => {

		})
	}

	const goDIP = () => {
		uni.navigateTo({
			url: "./dip-setup"
		})
	}
	const switchTab = (index) => {
      currentTab.value = index;
    }
</script>

<style lang="scss" scoped>
	.container {
		padding: 20rpx;

		button {
			// height: 70rpx;
			// line-height: 70rpx;
			background-color: $uni-color-primary;
			color: $uni-text-color-inverse;
			font-size: $uni-font-size-base;
		}
	}
	.container1 {
	  flex-direction: column;
	  display: flex;
	  height: 100%;
	}
	
	.tab-nav {
	  display: flex;
	  justify-content: space-around;
	  background-color: #fff;
	  border-bottom: 1px solid #eee;
	  margin-bottom: 30rpx;
	}
	
	.tab-item {
	  padding: 10px;
	  flex: 1;
	  text-align: center;
	  cursor: pointer;
	}
	
	.tab-item.active {
	  color: #007aff;
	  border-bottom: 2px solid #007aff;
	}
	
	.tab-content {
	  flex: 1;
	  padding: 10px;
	  box-sizing: border-box;
	}
</style>