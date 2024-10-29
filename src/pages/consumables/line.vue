<template>
	<view class="content">
		<view class="box" v-for="(item,index) in lineList" @click="goItem(item)">
			<button>{{item.lineName}}</button>
		</view>
	</view>
</template>

<script setup>

import {
		// logoutUaes,
		// getInfo,
		// uaesuser 
	} from "/src/api/api.js"
	import {
		ref,
		reactive,
		toRefs,
		onMounted
	} from 'vue';
	const state = reactive({
		lineList: uni.getStorageSync('lineList') || [],
		userName:"admin"
	})

	const {
		lineList,
		userName
	} = toRefs(state);

	const goItem = (item) => {
		setTimeout(function() {
			uni.navigateTo({
				url: `./index?id=${item.id}&name=${item.lineName}`
			})
		}, 10);
	}
	//退出
	const logout = () => {
		uni.redirectTo({
			url: "../login/index"
		})
	}
	const getuserInfo = () => {
		uni.showLoading({   //会覆盖showToast提示
		  title: ""
		});
		getInfo().then(res => {
			console.log(res);
			userName.value = res.user.userName;
		});
		// uni.getStorageSync('token')
		// uaesuser(uni.getStorageSync('token')).then(res => {
		// 	console.log(res);
		// 	userName.value = res.Data.Account;
		// });
	}
	// getuserInfo();
	onMounted(()=>{
	})
</script>

<style scoped lang="scss">
	.content {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		flex-wrap: wrap;
		padding: 5vh 0;
		
		.box {
			width: 50%;
			margin-bottom: 50rpx;

			// image {
			// 	width: 180rpx;
			// 	height: 180rpx;
			// 	display: block;
			// 	margin: 0 auto;
			// }

			// p {
			// 	text-align: center;
			// 	margin-top: 50rpx;
			// 	font-size: $uni-font-size-lg;
			// }
			
			button {
				width: 70%;
				height: 70rpx;
				line-height: 70rpx;
				// background-color: $uni-color-primary;
				color: #000;
				font-size: $uni-font-size-base;
			}	
		}
	}
	::v-deep .uni-navbar__header-btns-left{
		width: 280rpx !important;
	}
</style>
