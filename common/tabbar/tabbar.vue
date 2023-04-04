<template>
	<view class="tabbar">
		<view class="tabbar-list">
			<view class="tabbar-list-ul">
				<view class="tabbar-list-li" v-for="(item,index) in tabBar.list" :key="index" @click="tabClick(index)">
					<view class="icon">
						<image :src='selected==index?item.selectedIconPath:item.iconPath' mode=""></image>
					</view>
					<view :class="selected==index?'text active':'text'">{{item.text}}</view>
				</view>
			</view>
		</view>
	</view> 
</template>

<script>
	export default {
		props: ['selected'],
		data() {
			return {
				tabBar: {
					list: [{
						pagePath: "/pages/index/index",
						iconPath: '/static/tabbar/unindex.png',
						selectedIconPath: "/static/tabbar/index.png",
						text: "首页"
					}, {
						pagePath: "/pages/question/question",
						iconPath: '/static/tabbar/unbill.png',
						selectedIconPath: "/static/tabbar/bill.png",
						text: "题目"
					}, {
						pagePath: "/pages/process/process",
						iconPath: '/static/tabbar/unvip.png',
						selectedIconPath: "/static/tabbar/vip.png",
						text: "流程"
					}, {
						pagePath: "/pages/contract/contract",
						iconPath: '/static/tabbar/unworkbentch.png',
						selectedIconPath: "/static/tabbar/workbentch.png",
						text: "协议相关"
					}, {
						pagePath: "/pages/my/my",
						iconPath: '/static/tabbar/unmy.png',
						selectedIconPath: "/static/tabbar/my.png",
						text: "我的"
					}, ]
				}
			}
		},
		mounted() {
			console.log('<<<<<<<<$',this.selected);
		},
		methods: {
			tabClick(index){
				console.log('****',index);
				// uni.switchTab({
				// 	url:this.tabBar.list[index].pagePath
				// },
				// success:res=>{
				// uni.hideTabBar()
				// })
				uni.switchTab({
				url:this.tabBar.list[index].pagePath
				})
				
			}

		}
	}
</script>

<style scoped>
	.tabbar {
		width: 100%;
		position: fixed;
		bottom: 0;
		box-sizing: border-box;
	}

	.tabbar-list {
		width: 100%; 
		position: relative;
		left: 0;
		bottom: 0;
		box-shadow: 0px -12upx 37upx 0upx rgba(230, 235, 243, 0.9);
		border-top-left-radius: 30upx;
		border-top-right-radius: 30upx;
		box-sizing: border-box;
	}

	.tabbar-list-ul {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: space-around;
		align-items: center;
		box-sizing: border-box;
	}

	.icon {
		width: 56upx;
		height: 56upx;
		margin: 0 auto;
		padding: 20upx;
		background-color: transparent;
	}

	.icon image {
		width: 56upx;
		height: 56upx;
	}

	.text {
		width: 100%;
		text-align: center;
		line-height: 40upx;
		font-size: 28upx;
	}

	.active {
		color: red;
	}
</style>
