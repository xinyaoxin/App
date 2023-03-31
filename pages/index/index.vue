<template>
	<view class="bg">
		<view class="container">
			<view class="header">
				<view class="title">标题</view>
				<view class="school">学校</view>
				<view class="show">
					<view class="class">
						<text class="text">查看班级权益</text>
						<uni-icons custom-prefix="iconfont" type="icon-xiaoxi1" size="30"></uni-icons>
					</view>
				</view>
			</view>
			<scroll-view scroll-y="true">
				<view class="content">
					<Class></Class>
				</view>
			</scroll-view>
		</view>
		<tabbar :selected='selected'></tabbar>
	</view>
</template>

<script>
	import tabbar from '@/components/tabbar/tabbar.vue'
	import Class from '@/components/class/class.vue'
	export default {
		components: {
			tabbar,
			Class
		},
		data() {
			return {
				selected: 0
			}
		},
		onLoad() {
			// uni.setNavigationBarTitle({
			// 	title:'asd'
			// })
			uni.hideTabBar()
		},
		methods: {
			toLost() {
				console.log(123);
				uni.navigateTo({
					url: '/pages/404/index'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.bg {
		// position: fixed;
		// top: 0;
		// left: 0;
		// right: 0;
		// bottom: 60%;
		// background: linear-gradient(to bottom,#DA70D6,#F4F4F4);
		
		.container{
			width: 100vw;
			margin-right: -7upx;
			background:url('https://fawn.xuexiluxian.cn/api/profile/wechat/bgimg/bg.png') no-repeat;
			background-size: cover;
			// background-size：contain; // 缩小图片来适应元素的尺寸（保持像素的长宽比），是图片宽高最长的那个边覆盖元素一边即可；
			// background-size ：cover; // 扩展图片来填满元素（保持像素的长宽比），是图片宽高最短的那个边覆盖元素一边即可；
			// background-size ：100px 100px; // 调整图片到指定大小；
			// background-size ：50% 100%; // 调整图片到指定大小，百分比相对于包含元素的尺寸（并且并不需要包含元素显示设置宽高）
			margin-bottom: 120upx;
			box-sizing: border-box;	
		}
		.header{
			padding: 131upx 37upx 0 37upx;
		}
		.title{
			width: 420upx;
			height: 59upx;
			font-size: 60upx;
			font-weight: 600;
			color: #000CFF;
			line-height: 80upx;
			font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
		}
	}
</style>
