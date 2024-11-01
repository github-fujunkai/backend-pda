<template>
	<view class="container">
		<uni-forms ref="form" :modelValue="formData" :rules="rules">
			<uni-forms-item label="工位" name="workstation" labelWidth="160rpx">
				<uni-easyinput prefixIcon="scan" type="text" v-model="formData.workstation" placeholder="请输入工位" />
			</uni-forms-item>
			<uni-forms-item label="OK提示音:" name="okSound" labelWidth="160rpx">
				<uni-data-select v-model="formData.okSound" :localdata="dictList"></uni-data-select>
			</uni-forms-item>
			<uni-forms-item label="NG提示音:" name="ngSound" labelWidth="160rpx">
				<uni-data-select v-model="formData.ngSound" :localdata="dictList"></uni-data-select>
			</uni-forms-item>
			<uni-section title="输入设置" type="line">
				<uni-row>
					<uni-col :span="8">
						<uni-forms-item label="光标:" name="operationType" labelWidth="100rpx">
							<switch @change="" style="transform:scale(0.7)" />
						</uni-forms-item>
					</uni-col>
					<uni-col :span="8">
						<uni-forms-item label="串口:" name="operationType" labelWidth="100rpx">
							<switch @change="" style="transform:scale(0.7)" />
						</uni-forms-item>
					</uni-col>
					<uni-col :span="8">
						<uni-forms-item label="TCP:" name="operationType" labelWidth="100rpx">
							<switch @change="" style="transform:scale(0.7)" />
						</uni-forms-item>
					</uni-col>
				</uni-row>
			</uni-section>
			<uni-section title="输入设置" type="line">
				<uni-row>
					<uni-col :span="8">
						<uni-forms-item label="光标:" name="operationType" labelWidth="100rpx">
							<switch @change="" style="transform:scale(0.7)" />
						</uni-forms-item>
					</uni-col>
					<uni-col :span="8">
						<uni-forms-item label="串口:" name="operationType" labelWidth="100rpx">
							<switch @change="" style="transform:scale(0.7)" />
						</uni-forms-item>
					</uni-col>
					<uni-col :span="8">
						<uni-forms-item label="TCP:" name="operationType" labelWidth="100rpx">
							<switch @change="" style="transform:scale(0.7)" />
						</uni-forms-item>
					</uni-col>
				</uni-row>
				<uni-row>
					<uni-col :span="6" class="center mb-5">序号</uni-col>
					<uni-col :span="6" class="center mb-5">串口号</uni-col>
					<uni-col :span="6" class="center mb-5">波特率</uni-col>
					<uni-col :span="6" class="center mb-5">校验位</uni-col>
					<uni-col :span="6" class="mb-5">
						<uni-data-select size="mini" v-model="formData.sequenceNumber"
							:localdata="dictList"></uni-data-select>
					</uni-col>
					<uni-col :span="6" class="mb-5">
						<uni-data-select size="mini" v-model="formData.serialNumber"
							:localdata="dictList"></uni-data-select>
					</uni-col>
					<uni-col :span="6" class="mb-5">
						<uni-data-select size="mini" v-model="formData.baudRate"
							:localdata="dictList"></uni-data-select>
					</uni-col>
					<uni-col :span="6" class="mb-5">
						<uni-data-select size="mini" v-model="formData.checkBit"
							:localdata="dictList"></uni-data-select>
					</uni-col>
					<uni-col :span="6" class="mb-5">
						<uni-data-select size="mini" v-model="formData.sequenceNumber"
							:localdata="dictList"></uni-data-select>
					</uni-col>
					<uni-col :span="6" class="mb-5">
						<uni-data-select size="mini" v-model="formData.serialNumber"
							:localdata="dictList"></uni-data-select>
					</uni-col>
					<uni-col :span="6" class="mb-5">
						<uni-data-select size="mini" v-model="formData.baudRate"
							:localdata="dictList"></uni-data-select>
					</uni-col>
					<uni-col :span="6" class="mb-5">
						<uni-data-select size="mini" v-model="formData.checkBit"
							:localdata="dictList"></uni-data-select>
					</uni-col>
				</uni-row>
			</uni-section>
			<uni-section title="输入设置" type="line">
				<uni-row>
					<uni-col :span="8">
						<uni-forms-item label="光标:" name="operationType" labelWidth="100rpx">
							<switch @change="" style="transform:scale(0.7)" />
						</uni-forms-item>
					</uni-col>
					<uni-col :span="8">
						<uni-forms-item label="串口:" name="operationType" labelWidth="100rpx">
							<switch @change="" style="transform:scale(0.7)" />
						</uni-forms-item>
					</uni-col>
					<uni-col :span="8">
						<uni-forms-item label="TCP:" name="operationType" labelWidth="100rpx">
							<switch @change="" style="transform:scale(0.7)" />
						</uni-forms-item>
					</uni-col>
				</uni-row>
				<uni-row>
					<uni-col :span="8" class="center mb-5">序号</uni-col>
					<uni-col :span="8" class="center mb-5">IP地址</uni-col>
					<uni-col :span="8" class="center mb-5">端口号</uni-col>
					<uni-col :span="8" class="mb-5">
						<uni-data-select size="mini" v-model="formData.operationType"
							:localdata="dictList"></uni-data-select>
					</uni-col>
					<uni-col :span="8" class="mb-5">
						<uni-data-select size="mini" v-model="formData.operationType"
							:localdata="dictList"></uni-data-select>
					</uni-col>
					<uni-col :span="8" class="mb-5">
						<uni-data-select size="mini" v-model="formData.operationType"
							:localdata="dictList"></uni-data-select>
					</uni-col>
					<uni-col :span="8" class="mb-5">
						<uni-data-select size="mini" v-model="formData.operationType"
							:localdata="dictList"></uni-data-select>
					</uni-col>
					<uni-col :span="8" class="mb-5">
						<uni-data-select size="mini" v-model="formData.operationType"
							:localdata="dictList"></uni-data-select>
					</uni-col>
					<uni-col :span="8" class="mb-5">
						<uni-data-select size="mini" v-model="formData.operationType"
							:localdata="dictList"></uni-data-select>
					</uni-col>
				</uni-row>
			</uni-section>
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
		.center{
			text-align: center;
		}
		.mb-5{
			margin-bottom: 8rpx;
		}
		.uni-forms-item{
			margin-bottom: 5rpx;
		}
	}
</style>