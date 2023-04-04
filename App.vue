<script>
	export default {
		onLaunch: function() {
			console.warn('当前组件仅支持 uni_modules 目录结构 ，请升级 HBuilderX 到 3.1.0 版本以上！')
			console.log('App Launch')
			console.log('>>>>>>>>>>>>app.vue launch')
			uni.hideTabBar()
			// this.checkArguments();
			// 重点是以下： 一定要监听后台恢复 ！一定要
			// plus.globalEvent.addEventListener('newintent', (e) => {
			// 	// this.checkArguments(); // 检测启动参数  
			// });
			// let token = uni.getStorageSync('token');
			// let base_login_name = uni.getStorageSync('base_login_name');
			// if (true) {
			// 	//存在则关闭启动页进入首页
			// 	// #ifdef APP-PLUS
			// 	plus.navigator.closeSplashscreen();
			// 	// #endif
			// } else {
			// 	//不存在则跳转至登录页
			// uni.reLaunch({
			// 	url: "/pages/index/index",
			// 	success: () => {
			// 		// #ifdef APP-PLUS
			// 		plus.navigator.closeSplashscreen();
			// 		// #endif
			// 	}
			// })
			// }
			// console.log('2***********>>>',uni);
			// console.log('3***********>>>',wx);
			// console.log('1***********>>>',plus);
			// plus.navigator.closeSplashscreen()
			// console.log(1234);
			// setTimeout(()=>{
			// 	uni.hideTabBar()
			// },100)
			// uni.switchTab({
			// url:'/pages/index/index',
			// success:res=>{
			// }
			// })
		},
		onLoad() {
			
		},
		onShow: function() {
			// uni.hideTabBar()
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
		methods: {
			// checkArguments() {
			// 	var args = plus.runtime.arguments;
			// 	if (args) {
			// 		console.log('app.vue-onShow', args);
			// 		let args1 = JSON.parse(args);
			// 		if (args1.BaNotifyID) { //判断是否为通知传来的消息
			// 			//这里写你的处理逻辑
			// 			//args参数见“点击事件参数”
			// 			console.log('args.BaNotifyID', args1.BaNotifyID);
			// 			uni.navigateTo({
			// 				url:'/pages/my/my'
			// 			})
			// 			uni.showToast({
			// 				title: "点击BaNotifyID：" + args1.BaNotifyID,
			// 				icon: "none",
			// 				duration: 3000
			// 			})
			// 			// uni.navigateTo({
			// 			// 	url: '/pages/notify/notify'
			// 			// })
			// 		}
			// 		// 处理args参数，如直达到某新页面等
			// 	}
			// },
		}
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
