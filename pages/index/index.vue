<template>
	<view class="bg">
	<uni-icons custom-prefix="iconfont" type="icon-xiaoxi1" size="30"></uni-icons>
	
	<p @click="toLost">首页1</p>
	<tabbar :selected='selected'></tabbar>
	<button style="width: 230rpx;" @click="toLost">404</button>
	</view>
</template>

<script>
	import tabbar from '@/common/tabbar/tabbar.vue'
	export default {
		components:{
			tabbar,
		},
		data(){
			return{
				selected:0
			}
		},
		onLoad() {
			// uni.setNavigationBarTitle({
			// 	title:'asd'
			// })
			uni.hideTabBar()
		},
		methods:{
			toLost(){
				console.log(123);
				uni.navigateTo({
					url:'/pages/404/index'
				})
			}
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
	    background: linear-gradient(to bottom,#DA70D6,#F4F4F4);
		}

</style>