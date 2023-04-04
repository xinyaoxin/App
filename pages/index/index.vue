<template>
	<view class="bg">
		<view class="container">
			<view class="header">
				<view class="title">标题</view>
				<view class="school">学校入口</view>
				<view class="show" @click="goClassContract">
					<view class="show-class">
						<text class="text">查看班级权益</text>
					</view>
					<uni-icons style="color: #fff" class="showimg" custom-prefix="iconfont" type="icon-shangwu"></uni-icons>
				</view>
			</view>
			<scroll-view scroll-y="true" :style="'height: '+clientHeight+'px;'">
				<view class="content"    :style="'height: '+clientHeight+'px;'">
					<Class></Class>
				</view>
			</scroll-view>
		</view>
		<tabbar :selected='selected'></tabbar>
	</view>
</template>

<script>
	import tabbar from '@/common/tabbar/tabbar.vue'
	import Class from '@/components/class/class.vue'
	export default {
		components: {
			tabbar,
			Class,
		},
		data() {
			return {
				selected: 0,
				clientHeight:null
			}
		},
		onLoad() {
			uni.hideTabBar()
		},
		mounted() {
			console.log('mounted');
		},
		onReady() {
			console.log(1234);
			uni.getSystemInfo({
				success:(res) =>{
					let info = uni.createSelectorQuery().in(this).select('.header')
					info.boundingClientRect((data)=>{
						this.clientHeight = res.windowHeight - data.height - 68
					}).exec()
				}
			});
		},
		methods: {
			toLost() {
				uni.navigateTo({
					url: '/pages/404/index'
				})
			},
			goClassContract(){
				uni.navigateTo({
					url:'/pages/class-contract/class-contract'
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	// position: fixed;
	// top: 0;
	// left: 0;
	// right: 0;
	// bottom: 60%;
	// background: linear-gradient(to bottom,#DA70D6,#F4F4F4);
	scroll-view ::-webkit-scrollbar{
		display: none;
		width: 0 !important;
		height: 0 !important;
		-webkit-appearance: none;
		background: transparent;
		color: transparent;
	}

	.container {
		width: 100vw;
		margin-right: -7upx;
		background: url('@/static/img/bg.png') no-repeat;
		background-size: cover;
		// background-size：contain; // 缩小图片来适应元素的尺寸（保持像素的长宽比），是图片宽高最长的那个边覆盖元素一边即可；
		// background-size ：cover; // 扩展图片来填满元素（保持像素的长宽比），是图片宽高最短的那个边覆盖元素一边即可；
		// background-size ：100px 100px; // 调整图片到指定大小；
		// background-size ：50% 100%; // 调整图片到指定大小，百分比相对于包含元素的尺寸（并且并不需要包含元素显示设置宽高）
		margin-bottom: 120upx;
		box-sizing: border-box;
	}

	.header {
		padding: 131upx 37upx 0 37upx;
	}

	.title {
		width: 420upx;
		height: 59upx;
		font-size: 60upx;
		font-weight: 600;
		color: #000CFF;
		line-height: 80upx;
		font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
	}

	.school {
		height: 40upx;
		line-height: 40upx;
		font-size: 38upx;
		font-weight: 400;
		color: #344356;
		opacity: 0.8;
		margin: 30upx 0;
	}

	.show {
		width: 290upx;
		height: 59upx;
		display: flex;
		align-items: center;
		background-color: #5468ff;
		border-radius: 10upx;
		padding: 0 20upx;
		box-sizing: border-box;

		.show-class {
			height: 27upx;
			line-height: 27upx;
			font-size: 28upx;
			font-weight: 400;
			color: #fff;
		}

		.show-class::after {
			content: '';
			width: 1upx;
			height: 31upx;
			margin: 0 20upx;
			border-left: 4upx solid #fff;
		}

	}

	.showimg {
		color: red;
	}
</style>
