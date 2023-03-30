<template>
	<view>
		<p>工作流程</p>
		<button @click="clicka">asdas </button>
		<tabbar :selected='selected'></tabbar>
	</view>
</template>

<script>
	import tabbar from '@/common/tabbar/tabbar.vue'
	export default {
		components:{
			tabbar
		},
		data() {
			return {
				selected:2
			}
		},
		onLoad() {
			uni.hideTabBar()
		},
		methods: {
			clicka(){
				console.log(1234)
			}
		}
	}
</script>

<style>

</style>
