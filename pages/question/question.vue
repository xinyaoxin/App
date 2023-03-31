<template>
	<view>
		<p>面试题</p>
		<view class="box" :style="boxStyle">asd</view> 
		<tabbar class="tabBar" :selected='selected'></tabbar>
	</view>
</template>

<script>
	import tabbar from '@/components/tabbar/tabbar.vue'
	export default {
		components:{tabbar},
		data() {
			return {
				selected:1,
				boxStyle:{
					height:'',
					width:'200upx',
				}
			}
		},
		onReady() {
			let _this = this 
			let tabBarHeight = 0 
			const query = uni.createSelectorQuery().in(this);
			query.select('.tabBar').boundingClientRect(data => {
				tabBarHeight = data.height
			    _this.boxStyle.height = tabBarHeight  + 'upx'
				console.log("question获取的tabBar高度" + data.height);
				console.log("tabBar距离顶部高度" + data.top);
			}).exec();
			
		},
		methods: {
			
		}
	}
</script>

<style scoped>
	.box{
		background-color: red;
		border: 1px solid red;
	}

</style>
