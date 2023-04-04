<template>
	<view class="main">
		<block v-for="(item,index) in homeDate" :key='index'>
			<ClassItem :item='item'></ClassItem>
		</block>
	</view>
</template>

<script>
	import ClassItem from '@/components/classItem/classItem.vue'
	export default {
		components:{
			ClassItem 
		},
		data() {
			return {
				homeDate:[{
					classImgLink:'@/static/1678435242396.png',
					className:'AAA'
				},{
					classImgLink:'https://test.cloudapprod.com/api/profile/wechat/bgimg/p4.png',
					className:'BBB'
				},{
					classImgLink:'https://test.cloudapprod.com/api/profile/wechat/bgimg/p4.png',
					className:'CCC'
				},{
					classImgLink:'https://test.cloudapprod.com/api/profile/wechat/bgimg/p4.png',
					className:'DDD'
				},{
					classImgLink:'https://test.cloudapprod.com/api/profile/wechat/bgimg/p4.png',
					className:'EEE'
				},]
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped>
	.main{
		width: 676upx;
		margin-left: 36upx;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
	}
</style>
