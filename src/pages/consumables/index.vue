<template>
	<view>
		<view class="uni-container">
			<uni-forms ref="form" class="form" labelWidth="145rpx" :model="queryParams" style="padding:0 15rpx;">
				<uni-row class="demo-uni-row" :gutter="20">
					<uni-col :span="24">
						<uni-forms-item label="产线:" name="name">
							<uni-easyinput class="uni-mt-5" v-model="queryParams.name" disabled></uni-easyinput>
						</uni-forms-item>
					</uni-col>
					<uni-col :span="24" class="uni-mt-5">
						<uni-forms-item label="设备编码:" name="macId">
							<uni-easyinput class="uni-mt-5" focus trim="all" suffixIcon="scan" v-model="queryParams.macId"  @confirm="onConfirm"  placeholder="" @iconClick=""></uni-easyinput>
						</uni-forms-item>
					</uni-col>
					<uni-col :span="24" class="uni-mt-5">
						<uni-forms-item label="当前设备:" name="oldmacId">
							<uni-easyinput class="uni-mt-5"  v-model="queryParams.oldmacId"  disabled  placeholder="" ></uni-easyinput>
						</uni-forms-item>
					</uni-col>
				</uni-row>
			</uni-forms>
			<uni-table ref="table" :loading="loading" border stripe emptyText="暂无更多数据"
			style="margin-top: 10rpx;"
				@selection-change="selectionChange">
				<uni-tr>
					<uni-th  width="50" align="center">序号</uni-th>
					<uni-th  width="100" align="center">易耗品料号</uni-th>
					<uni-th  width="100" align="center">易耗品名称</uni-th>
					<uni-th align="center">操作</uni-th>
				</uni-tr>
				<uni-tr v-for="(item, index) in tableData" :key="item.id">
					<uni-td align="center">{{ index+1 }}</uni-td>
					<uni-td align="center">
						<view class="name">{{ item.partNumber }}</view>
					</uni-td>
					<uni-td align="center">{{ item.materialName }}</uni-td>
					<uni-td>
						<view class="uni-group">
							<button v-if="item.operationType == 1" class="uni-button uni-green" size="mini" type="primary" @click="open(item)">更换</button>
							<button v-if="item.operationType != 1 && item.operationType != 3" class="uni-button uni-orange" size="mini" type="primary" @click="open(item)">更换</button>
							<button v-if="item.operationType == 3" class="uni-button uni-red" size="mini" type="primary" @click="open(item)">更换</button>
						</view>
					</uni-td>
				</uni-tr>
			</uni-table>
		<!-- 	<view class="uni-pagination-box">
				<uni-pagination show-icon :page-size="pageSize" :current="pageCurrent" :total="total"
					@change="change" />
			</view> -->
		</view>
	</view>
</template>

<script setup>
	import {
		getPlanList,
		getPlanList1
	} from "/src/api/api.js"
	import {
		ref,
		reactive,
		toRefs,
		onMounted
	} from 'vue'
	import {
		onLoad,
		onUnload,
		onShow,
		onHide
	} from "@dcloudio/uni-app"
	onMounted(() => {
		console.log(tableData.value)
	})
	onShow(()=>{
		// console.log('queryParams.value.oldmacId',queryParams.value.oldmacId)
		if(!queryParams.value.oldmacId) return false
		getPlanList({
			lineId:lineId.value,
			macId:queryParams.value.oldmacId
		}).then(res => {
			if(res.success){
				tableData.value = res.data
				loading.value = false
				queryParams.value.macId = ''
			}else{
				uni.showToast({
					icon: 'error',//success error none
					title: res.msg
				})
			}
		});
	})
	onLoad((query)=>{
		lineId.value = query.id;
		queryParams.value.name = query.name;
		// console.log(lineId.value)
	})
	const table = ref(null);
	const type = ref('right');
	const state = reactive({
		lineId:'',
		searchVal: '',
		tableData: [],
		// 每页数据量
		pageSize: 10,
		// 当前页
		pageCurrent: 1,
		// 数据总量
		total: 0,
		loading: false,
		selectedIndexs: [],
		// 表单数据
		formData: {
			shelfId: '',
			sapId: '',
			stackingQty: '',
			lot: ''
		},
		rules: {
			// sapId: {
			// 	rules: [{
			// 		required: true,
			// 		errorMessage: '请输入或扫描SAP号',
			// 	}]
			// },
		},
		queryParams: {
			name: 'C03-1F-01', 
			pageNum: 1,
			pageSize: 10
		},
		scrollTop: 0,
		selectData: {},
		requestTips: "暂无提示~",
		orderList: [],
		lock: false //锁定库位
	})

	const {
		searchVal,
		tableData,
		pageSize,
		total,
		loading,
		pageCurrent,
		selectedIndexs,
		queryParams,
		scrollTop,
		selectData,
		requestTips,
		orderList,
		formData,
		rules,
		lock,
		lineId
	} = toRefs(state);


	// 多选
	const selectionChange = (e) => {
		console.log(e.detail.index)
		selectedIndexs.value = e.detail.index
	}
	// 分页触发
	const change = (e) => {
		// table.value.clearSelection()
		selectedIndexs.value.length = 0
		getData(e.current)
	}
	// 搜索
	const search = () => {
		getData(1)
	}


	// getData(1);
	// 点击更换操作
	const open = (item) =>{
		//positionId 用于与登录用户职位id对比是否可以进行更换操作
		// console.log(uni.getStorageSync('user'))
		if(item.positionId != uni.getStorageSync('user').positionId){
			uni.showToast({
				icon: 'none',//success error none
				title: '职位id不匹配'
			})
		}else{
			uni.setStorageSync('replaceData',item);
			setTimeout(()=>{
				uni.navigateTo({
					url: "./abnormal"
				})
			},50)
		}
		
	}
	// 获取数据
	// pageCurrent.value = pCurrent
	// queryParams.value.pageNum = pCurrent
	// onshow里面还有调用刷新用的
	const getData = () => {
		queryParams.value.oldmacId = queryParams.value.macId
		loading.value = true
		getPlanList({
			lineId:lineId.value,
			macId:queryParams.value.macId
		}).then(res => {
			if(res.success){
				tableData.value = res.data
				loading.value = false
				queryParams.value.macId = ''
			}else{
				uni.showToast({
					icon: 'error',//success error none
					title: res.msg
				})
			}
		});
		// //注释
		// let res = getPlanList1()
		// tableData.value = res.data
		// loading.value = false
	}
	const onConfirm = () => {
		getData();
	}
</script>

<style scoped lang="scss">
	.uni-mt-5{
		margin-top: 5rpx;
	}
	.uni-group {
		display: flex;
		align-items: center;
	}

	.uni-pagination-box {
		margin-top: 50rpx;
	}

	.popup-content {
		padding: 30rpx;
		position: relative;

		.close {
			position: absolute;
			top: 50rpx;
			right: 30rpx;
		}

		.btns {
			margin-top: 8rpx;
		}
	}

	::v-deep .uni-popup .uni-popup__wrapper {
		width: 75%;
		height: 75vh;
		overflow-y: auto;
	}

	.demo-uni-row {
		margin-top: 10rpx;
	}

	.scroll-Y {
		height: 260rpx;
	}

	.text-center {
		display: block;
		text-align: center !important;
		color: #606266;
	}

	::v-deep .form .uni-forms-item {
		margin-bottom: 0;
	}
	
	.uni-green {
		background-color: #67c23a;
	}
	
	.uni-red {
		background-color: #f56c6c;
	}
	
	.uni-orange {
		background-color: #e6a23c;
	}
	
	.uni-blue {
		background-color: #409eff;
	}
	
	.uni-info {
		background-color: #909399;
	}
</style>
