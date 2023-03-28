<script>
	export default {
		onLaunch: function() {
			console.warn('当前组件仅支持 uni_modules 目录结构 ，请升级 HBuilderX 到 3.1.0 版本以上！')
			console.log('App Launch')
			console.log('>>>>>>>>>>>>app.vue launch')
			// let token = uni.getStorageSync('token');
			// let base_login_name = uni.getStorageSync('base_login_name');
			// if (true) {
			// 	//存在则关闭启动页进入首页
			// 	// #ifdef APP-PLUS
			// 	plus.navigator.closeSplashscreen();
			// 	// #endif
			// } else {
			// 	//不存在则跳转至登录页
				uni.reLaunch({
					url: "/pages/index/index",
					success: () => {
						// #ifdef APP-PLUS
						plus.navigator.closeSplashscreen();
						// #endif
					}
				})
			// }
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		onPageNotFound() {
			uni.navigateTo({
				url: '/pages/404/index'
			})
		},
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import '@/uni_modules/uni-scss/index.scss';
	/* #ifndef APP-NVUE */
	@import '@/static/iconfont.css';

	// 设置整个项目的背景色
	page {
		background-color: #f5f5f5;
	}

	/* #endif */
	.example-info {
		font-size: 14px;
		color: #333;
		padding: 10px;
	}
</style>
