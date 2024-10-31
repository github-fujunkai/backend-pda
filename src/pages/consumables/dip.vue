<template>
	<view class="container">
		<uni-forms ref="form" :modelValue="formData" :rules="rules">
			<uni-row>
				<uni-col :span="12">
					<uni-forms-item label="线体" name="name" labelWidth="140rpx">
						<uni-easyinput type="text" v-model="formData.operationType1" placeholder="" />
					</uni-forms-item>
				</uni-col>
				<uni-col :span="12">
					<uni-forms-item label="工位" name="name" labelWidth="140rpx">
						<uni-easyinput type="text" v-model="formData.operationType2" placeholder="" />
					</uni-forms-item>
				</uni-col>
				<uni-col :span="12">
					<uni-forms-item label="工序" name="name" labelWidth="140rpx">
						<uni-easyinput type="text" v-model="formData.operationType3" placeholder="" />
					</uni-forms-item>
				</uni-col>
				<uni-col :span="12">
					<uni-forms-item label="类型" name="name" labelWidth="140rpx">
						<uni-easyinput type="text" v-model="formData.operationType4" placeholder="" />
					</uni-forms-item>
				</uni-col>
				<uni-col :span="24">
					<uni-forms-item label="工单" name="name" labelWidth="140rpx">
						<uni-easyinput prefixIcon="scan" type="text" v-model="formData.operationType5" placeholder="" />
					</uni-forms-item>
				</uni-col>
				<uni-col :span="24">
					<uni-forms-item label="产品料号" name="name" labelWidth="140rpx">
						<uni-easyinput type="text" v-model="formData.operationType6" placeholder="" />
					</uni-forms-item>
				</uni-col>
				<uni-col :span="12">
					<uni-forms-item label="工单量" name="name" labelWidth="140rpx">
						<uni-easyinput type="text" v-model="formData.operationType7" placeholder="" />
					</uni-forms-item>
				</uni-col>
				<uni-col :span="12">
					<uni-forms-item label="过站" name="name" labelWidth="140rpx">
						<uni-easyinput type="text" v-model="formData.operationType8" placeholder="" />
					</uni-forms-item>
				</uni-col>
			</uni-row>

			<!-- 过站 -->
			<!-- 			<view>
				<uni-forms-item label="产品条码" name="name" labelWidth="140rpx">
					<uni-easyinput prefixIcon="scan" type="text" v-model="formData.operationType9"
						placeholder="请扫描产品条码" />
				</uni-forms-item>
			</view>
			<view class="progress-box">
				<uni-forms-item label="工单进度" name="name" labelWidth="140rpx">
					<progress :percent="60" show-info stroke-width="3" />
				</uni-forms-item>
			</view>
			<view style="width:750rpx; height:750rpx"><l-echart ref="chartRef"></l-echart></view> -->
			<!-- 测试 -->
			<!-- <view>
				<uni-forms-item label="产品/不良代码" name="name" labelWidth="140rpx">
					<uni-easyinput prefixIcon="scan" type="text" v-model="formData.operationType9"
						placeholder="请扫描新料料盘" />
				</uni-forms-item>
			</view>
			<uni-grid :column="3" :highlight="true" @change="change">
				<uni-grid-item>
					<view class="grid-item-box" style="background-color: #fff;text-align: center;padding-top: 40px;">
						<view style="fongt-size:20rpx;font-weight: 700;">良品</view>
						<view style="fongt-size:20rpx;font-weight: 700;">256</view>
					</view>
				</uni-grid-item>
				<uni-grid-item>
					<view class="grid-item-box" style="background-color: #fff;;text-align: center;padding-top: 40px;">
						<view style="fongt-size:20rpx;font-weight: 700;">良品</view>
						<view style="fongt-size:20rpx;font-weight: 700;">6</view>
					</view>
				</uni-grid-item>
				<uni-grid-item>
					<view class="grid-item-box" style="background-color: #fff;;text-align: center;padding-top: 40px;">
						<view style="fongt-size:20rpx;font-weight: 700;">良品</view>
						<view style="fongt-size:20rpx;font-weight: 700;">25%</view>
					</view>
				</uni-grid-item>
			</uni-grid> -->
			<!-- 测试2 -->
			<uni-row>
				<uni-col :span="24">
					<uni-forms-item label="主板" name="name" labelWidth="140rpx">
						<uni-easyinput prefixIcon="scan" type="text" v-model="formData.operationType9"
							placeholder="请扫描主板编码" />
					</uni-forms-item>
				</uni-col>
				<uni-col :span="24">
					<uni-forms-item label="MAC" name="name" labelWidth="140rpx">
						<uni-easyinput prefixIcon="scan" type="text" v-model="formData.operationType9"
							placeholder="请扫描MAC" />
					</uni-forms-item>
				</uni-col>
				<uni-col :span="24">
					<uni-forms-item label="电源" name="name" labelWidth="140rpx">
						<uni-easyinput prefixIcon="scan" type="text" v-model="formData.operationType9"
							placeholder="请扫描电源编码" />
					</uni-forms-item>
				</uni-col>
				<uni-col :span="24">
					<uni-forms-item label="USB" name="name" labelWidth="140rpx">
						<uni-easyinput prefixIcon="scan" type="text" v-model="formData.operationType9"
							placeholder="请扫描USB PKG" />
					</uni-forms-item>
				</uni-col>
			</uni-row>
		</uni-forms>
		<!-- <button @click="submitForm">保存</button> -->
	</view>
</template>


<script setup>
	import {
		ref,
		toRefs,
		reactive,
		onMounted
	} from 'vue'
	import * as echarts from 'echarts'
	const form = ref(null)
	const dictList = ref([{
		text: "提示音1",
		value: '1'
	}, {
		text: "提示音2",
		value: '2'
	}])
	const state = reactive({
		formData: {
			name: uni.getStorageSync('BASE_URL'),
			operationType1: "DIP Line1",
			operationType2: "DIP Line1",
			operationType3: "FCT",
			operationType4: "测试",
			operationType5: "123456789",
			operationType6: "123456789",
			operationType7: "100",
			operationType8: "7",
			operationType9: "",
		},
		rules: {
			name: {
				rules: [{
					required: true,
					errorMessage: '',
				}]
			}
		},
	})
	const {
		formData,
		rules
	} = toRefs(state);

	const submitForm = () => {

	}


	const chartRef = ref(null)
	const option = {
		title: {
			text: '时段产量',
		},
		xAxis: {
			type: 'category',
			data: ['12', '11', '10', '9', '8', '7', '6']
		},
		yAxis: {
			type: 'value'
		},
		series: [{
			data: [120, 200, 150, 80, 70, 110, 130],
			type: 'bar'
		}]
	};
	onMounted(() => {
		// 组件能被调用必须是组件的节点已经被渲染到页面上
		setTimeout(async () => {
			if (!chartRef.value) return
			const myChart = await chartRef.value.init(echarts)
			myChart.setOption(option)
		}, 300)
	})
</script>

<style lang="scss" scoped>
	.container {
		padding: 10rpx;

		button {
			// height: 70rpx;
			// line-height: 70rpx;
			background-color: $uni-color-primary;
			color: $uni-text-color-inverse;
			font-size: $uni-font-size-base;
		}

		.center {
			text-align: center;
		}

		.mb-5 {
			margin-bottom: 8rpx;
		}

		.uni-forms-item {
			margin-bottom: 25rpx;
		}
	}
</style>