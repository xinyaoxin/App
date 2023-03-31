<template>
	<view>
		<p>协议相关</p>
		<tabbar :selected='selected'></tabbar>
	</view>
</template>

<script>
	import tabbar from '@/components/tabbar/tabbar.vue'
	export default {
		components:{
			tabbar
		},
		data() {
			return {
				selected:3
			}
		},
		onLoad() {
			uni.hideTabBar()
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
