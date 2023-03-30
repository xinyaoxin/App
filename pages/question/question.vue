<template>
	<view>
		<p>面试题</p>
		<tabbar :selected='selected'></tabbar>
	</view>
</template>

<script>
	import tabbar from '@/common/tabbar/tabbar.vue'
	export default {
		components:{tabbar},
		data() {
			return {
				selected:1
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
