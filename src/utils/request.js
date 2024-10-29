import { setStorageSync,getStorageSync } from "@dcloudio/uni-h5"

//测试：http://172.16.8.9:8080  正式：
let BASE_URL = ''
if(!uni.getStorageSync('BASE_URL')){
	BASE_URL = 'http://172.16.8.9:8080'
	uni.setStorageSync('BASE_URL',BASE_URL)
}else{
	BASE_URL = uni.getStorageSync('BASE_URL')
}

console.log('BASE_URL',BASE_URL)

// 请求,参数{url:'', data:{}, method:'POST'}
export const request = (options) => {
	return new Promise((resolve, reject) => {
		// console.log(options);
		// console.log(options.url);
		// uni.showLoading({   //会覆盖showToast提示
		//   title: ""
		// });
		uni.request({
			url: BASE_URL + options.url,
			method: options.method || 'GET',
			// header:{token: uni.getStorage('user') ? uni.getStorage('user').token : ''},
			// 后端需要的请求头
			// header: {
			// 	Authorization: uni.getStorageSync('token') ?
			// 		`Bearer ${uni.getStorageSync('token')}` : '',
			// 	Client: 'APP'
			// },
			data: options.data || {},
			success: res => {
				uni.hideLoading();
				const data = res.data
				if (data.code === 401) {
					uni.reLaunch({
						url: '/pages/login/index'
					})
					uni.removeStorageSync('token')
					uni.removeStorageSync('dataurl')
					console.log('error', '认证失败，请重新登录')
					uni.showToast({
						icon: 'error',
						title: '认证失败重新登录'
					})
					return
				}
				if (data.code === 500) {
					console.log('500', data.msg)
					// uni.showToast({
					// 	icon: 'error',
					// 	title: data.msg
					// })
					uni.showModal({
						title: '',
						content: data.msg,
						showCancel:false,
						success: function(res) {}
					});
					return
				}
				resolve(data)
			},
			fail: error => {
				uni.hideLoading();
				uni.showToast({
					icon: 'error',
					title: 'api请求失败'
				})
				// uni.reLaunch({
				// 	url: '/pages/login/index'
				// })
				reject(error)
			
			}
		})
	})
}
