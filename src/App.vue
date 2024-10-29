<script>
export default {
  onLaunch: function () {
    // console.log('App Launch')
	//#ifdef APP-PLUS
	// plus.screen.lockOrientation('landscape-primary'); // 强制横屏
	// plus.screen.lockOrientation('portrait-primary'); // 强制竖屏
	//#endif
	
  },
  onShow: function () {
    console.log('App Show')
	// #ifdef APP-PLUS
	var args= plus.runtime.arguments;
	if(args){
		// 处理args参数，如直达到某新页面等
		// uni.showModal({
		// 	title: "弹窗++",
		// 	content: JSON.stringify(args),
		// 	showCancel: false,
		// 	confirmText: "确定"
		// })
	}
	// #endif
  },
  onHide: function () {
    console.log('App Hide')
  },
}
</script>

<style>
/*每个页面公共css */
</style>
