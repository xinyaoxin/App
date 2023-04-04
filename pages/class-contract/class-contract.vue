<template>
	<view class="class-contract">
		<view class="contract-header">
			<image src="https://fawn.xuexiluxian.cn/api/profile/wechat/bgimg/title.png" mode=""></image>
		</view>
		<scroll-view scroll-y="true" :style="'height: '+clientHeight+'px;'">
			<view class="contract" :style="'height: '+clientHeight+'px;'">
				<view class="contract-content">
					<view class="sign-item">
						<view class="sign-bg-title">
							<view class="item-title">
								教室
							</view>
						</view>
					</view>
					<view class="item-content">
						<view class="item-text">
						</view>
					</view>
					<view class="sign-bg-footer">
						sdasd
					</view>
				</view>
				<view class="contract-content">
					<view class="sign-item">
						<view class="sign-bg-title">
							<view class="item-title">
								教室
							</view>
						</view>
					</view>
					<view class="item-content">
						<view class="item-text">
							<text>asdasd</text>
						</view>
					</view>
					<view class="sign-bg-footer">
					</view>
				</view>
				<view class="contract-content">
					<view class="sign-item">
						<view class="sign-bg-title">
							<view class="item-title">
								教室
							</view>
						</view>
					</view>
					<view class="item-content">
						<view class="item-text">
							<text>asdasd</text>
						</view>
					</view>
					<view class="sign-bg-footer">
					</view>
				</view>
				<view class="contract-content">
					<view class="sign-item">
						<view class="sign-bg-title">
							<view class="item-title">
								教室
							</view>
						</view>
					</view>
					<view class="item-content">
						<view class="item-text">
							<text>asdasd</text>
						</view>
					</view>
					<view class="sign-bg-footer">
					</view>
				</view>
			</view>
		</scroll-view>
		<view class="know" @click="goBack">
			<view class="contract-know">
				我已了解
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				clientHeight: null
			}
		},
		onReady() {
			console.log(1234);
			uni.getSystemInfo({
				success: (res) => {
					let infoa = uni.createSelectorQuery().in(this).select('.contract-header')
					infoa.boundingClientRect((data) => {
						this.clientHeight = res.windowHeight - data.height
					}).exec()
					let infob = uni.createSelectorQuery().in(this).select('.know')
					infob.boundingClientRect((data) => {
						this.clientHeight = this.clientHeight - data.height
					}).exec()
				}
			});
		},
		methods: {
			goBack() {
				uni.navigateBack({
					delta: 1
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	scroll-view ::-webkit-scrollbar {
		display: none;
		width: 0 !important;
		height: 0 !important;
		-webkit-appearance: none;
		background: transparent;
		color: transparent;
	}

	.class-contract {
		width: 750upx;
		height: 100vh;
		padding-bottom: 200upx;
		box-sizing: border-box;
		background: url('@/static/img/sign-bg.png') no-repeat;
	}

	.contract-header {
		width: 100vw;
		height: 300upx;
		position: relative;
	}

	.contract-header image {
		width: 622upx;
		height: 93upx;
		position: absolute;
		left: 50%;
		top: 150upx;
		transform: translate(-50%);
	}

	.contract {
		width: 702upx;
		padding: 0 24upx;
		padding-bottom: 60upx;
	}

	.contract-content {
		margin-bottom: 50upx;
	}

	.sign-item {
		width: 702upx;
	}

	.sign-bg-title {
		width: 702upx;
		height: 100upx;
		background: url('@/static/img/sign-bg-title.png') no-repeat;
		background-size: 100% 100%;
		position: relative;
	}

	.item-title {
		position: absolute;
		left: 50%;
		top: 10upx;
		transform: translate(-50%);
		font-size: 48upx;
		font-weight: normal;
		color: #5d6fe5;
		line-height: 60upx;
	}

	.item-content {
		width: 702upx;
		height: 100%;
		background: url('@/static/img/item-bg.png') no-repeat;
		background-size: 100% 100%;
		position: relative;
	}

	.sign-bg-footer {
		width: 702upx;
		height: 100%;
		background: url('@/static/img/sign-bg-footer.png') no-repeat;
		background-size: 100% 100%;
		position: relative;
	}

	.item-text {
		padding: 20upx 40upx;
		font-size: 30upx;
		font-weight: 400;
		color: #7a8bff;
	}

	.know {
		width: 100vw;
		height: 200upx;
		position: relative;

		.contract-know {
			width: 520upx;
			height: 80upx;
			font-size: 30upx;
			font-weight: normal;
			color: #5d6fe5;
			text-align: center;
			line-height: 80upx;
			background-color: #fff;
			position: absolute;
			left: 50%;
			top: 50%;
			transform: translate(-50%);
			border-radius: 20upx;
		}
	}
</style>
