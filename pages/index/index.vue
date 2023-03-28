<template>
	<view>
	<p>首页</p>
	<uni-icons custom-prefix="iconfont" type="icon-xiaoxi1" size="30"></uni-icons>
	<button @click="toLost">404</button>
	</view>
</template>

<script>
	export default {
		onLoad() {
			// uni.setNavigationBarTitle({
			// 	title:'asd'
			// })
		},
		methods:{
			toLost(){
				uni.navigateTo({
					url:'/pages/404/index'
				})
			}
		}
	}
</script>

<style scoped>
	

</style>