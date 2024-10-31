<template>
	<view class="box-bg">
		<uni-nav-bar @clickRight="logout" dark left-icon="person-filled" :leftText="userName" rightText="退出" title=""
			background-color="#007AFF" />
	</view>
	<view class="content">
		<view class="box" v-for="(item,index) in menuList" @click="goItem(item)">
			<image class="logo" :src="item.imgurl"></image>
			<p>{{item.name}}</p>
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
		menuList: [{
			name: "防错",
			imgurl: "/static/image/icon_purchase.png",
			router: "../consumables/poka-yoke"
		}, {
			name: "DIP",
			imgurl: "/static/image/icon_requisition.png",
			router: "../consumables/dip"
		}
		],
		userName:uni.getStorageSync('user')?.name || ''
	})

	const {
		menuList,
		userName
	} = toRefs(state);

	const goItem = (item) => {
		if(!item.router){
			uni.showToast({
				icon: 'error',//success error none
				title: '待开发'
			})
		}
		setTimeout(function() {
			uni.navigateTo({
				url: item.router
			})
		}, 10);
	}
	//退出
	const logout = () => {
		uni.removeStorageSync('replaceData');
		uni.removeStorageSync('user');
		uni.removeStorageSync('lineList');
		uni.redirectTo({
			url: "../login/index"
		})
	}
	
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

			image {
				width: 180rpx;
				height: 180rpx;
				display: block;
				margin: 0 auto;
			}

			p {
				text-align: center;
				margin-top: 50rpx;
				font-size: $uni-font-size-lg;
			}
		}
	}
	::v-deep .uni-navbar__header-btns-left{
		width: 280rpx !important;
	}
</style>
