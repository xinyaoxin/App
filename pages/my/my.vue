<template>
	<view class="bg">
		<!-- <p>我的页面a</p>
		<image src="../../static/Add User-Light.png" mode=""></image> -->
		<web-view :webview-styles="webviewStyles" src="https://www.bilibili.com/"></web-view>
		<tabbar class="tabBar" :selected='selected'></tabbar>
	</view>
</template>

<script>
	import tabbar from '@/common/tabbar/tabbar.vue'
	export default {
		components: {
			tabbar
		},
		data() {
			return {
				webviewStyles: {
					// progress: {
					// 	color: '#FF3333'
					// },
					height: ''
				},
				selected: 4
			}
		},
		mounted() {
			console.log('&&&&&&&&&&&&&&&&&&&&&&');
		},
		onLoad() {
			uni.hideTabBar()
		},
		onShow() {
			let _this = this
			uni.getSystemInfo({
				success: function(res) {
					_this.webviewStyles.height = res.screenHeight - 128
					console.log('^^^^^', res, _this.webviewStyles.height)
				}
			});
			console.log('!!!!!')
		},
		onReady() {
			let tabBarHeight = 0
			console.log('%%%%%%%%%%%%%%%%%%%%%%');

			const query = uni.createSelectorQuery().in(this);
			query.select('.tabBar').boundingClientRect(data => {
				tabBarHeight = data.height

				console.log("获取的tabBar高度" + data.height);
				console.log("tabBar距离顶部高度" + data.top);
			}).exec();
			console.log('%$$', tabBarHeight); 

		},


		mounted() {

		},
		methods: {

		}
	}
</script>

<style scoped>
	.bg {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 60%;
		background: linear-gradient(to bottom, #DA70D6, #F4F4F4);
	}
</style>
