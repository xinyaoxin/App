<template>
	<view>
		<view class="item">
			<view class="item-main">
				<view class="item-content">
					<!-- <image class="left-arrow" src="" mode=""></image> -->
					<view class="item-text">{{item.className}}</view>
					<!-- <image class=""right-arrow src="" mode=""></image> -->
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			item:{
				type:Object,
				default:{}
			}
		},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped>
	.item{
		width: 320upx;
		height: 404upx;
		box-shadow: 0upx 24upx 38upx 0upx rgb(60,128,209,0.09);
		border-radius: 30upx;
		position: relative;
		margin-bottom: 40upx;
		
	}
	.item-main{
		width: 294upx;
		height: 371upx;
		background:url('@/static/1678435242396.png');
		background-repeat: no-repeat;
		background-size: cover;
		position: absolute;
		top: 15upx;
		left: 10upx;
	}
	.item-content{
		padding-top: 290upx;
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #fff;
	}
	.item-content image{
		width: 30upx;
		height: 20upx;
	}
	.left-arrow{
		transform: rotate(180deg);
	}
	.item-text{
		font-size: 36upx;
		font-weight: 400;
		color:mediumaquamarine;
		padding: 0 20upx;
	}
</style>
