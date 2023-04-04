<template>
	<view>
		<scroll-view scroll-y="true" class="container">
			<ba-form-row title="通知ID" @valueChange="IDChange" :value="ID" clear></ba-form-row>
			<view class="item-row" @click="showNotify(99)">0、常驻通知</view>
			<view class="item-row" @click="showNotify(0)"> 1、普通通知</view>
			<view class="item-row" @click="showNotify(1)"> 2、大图通知</view>
			<view class="item-row" @click="showNotify(2)"> 3、按钮通知</view>
			<view class="item-row" @click="showNotify(3)"> 4、HeadUp</view>
			<view class="item-row" @click="showNotify(4)"> 5、消息盒子（mailbox）</view>
			<view class="item-row" @click="showNotify(5)"> 6、多行通知</view>
			<view class="item-row" @click="showNotify(6)"> 7、进度通知</view>
			<view class="item-row top-line" @click="clear()">清空普通通知</view>
			<view class="item-row" @click="goSetNotify()">设置通知</view>
			<view class="item-row" @click="isNotifyEnabled()">是否开启通知</view>
		</scroll-view>
		<tabbar :selected='selected'></tabbar>
	</view>
</template>

<script>
	import tabbar from '@/components/tabbar/tabbar.vue'
	// #ifdef APP-PLUS
	const notify = uni.requireNativePlugin('Ba-Notify')
	// #endif
	export default {
		components: {
			tabbar
		},
		data() {
			return {
				selected: 2,
				'ID': 0, 
			}
		},
		onReady() {

		},
		onLoad() {
			uni.hideTabBar()
		},
		mounted() {
			setTimeout(() => {
				this.showNotify(0)
			}, 5000)
		},
		methods: {
			showNotify(notifyType) { //根据notifyType显示各种通知
				let content = 'content';
				let leftText = "左按钮";
				let rightText = "右按钮";
				let thumbUrl = "/storage/emulated/0/baidu/searchbox/downloads/c-ssl.duitang-3.jpeg";
				let bigUrl = "/storage/emulated/0/baidu/searchbox/downloads/c-ssl.duitang-3.jpeg";

				switch (notifyType) {
					case 0: //普通通知
						notify.show({
								'channelID': '0',
								'channelName': '普通通知',
								'ID': 0,
								'notifyType': notifyType,
								'ticker': 'Ticker',
								'title': '普通通知',
								'content': content,
								"ongoing": true
							},
							(res) => {
								console.log(res)
							});
						break;
					case 1: //大图通知
						notify.show({
								'channelID': '1',
								'channelName': '大图通知',
								'ID': 1,
								'notifyType': notifyType,
								'ticker': 'Ticker',
								'title': '大图通知',
								'content': content,
								'thumbUrl': thumbUrl,
								'bigUrl': bigUrl,
							},
							(res) => {
								console.log(res)
							});
						break;
					case 2: //按钮通知
						notify.show({
								'channelID': '2',
								'channelName': '按钮通知',
								'ID': 2,
								'notifyType': notifyType,
								'ticker': 'Ticker',
								'title': '按钮通知',
								'content': content,
								'leftBtnText': leftText,
								'rightBtnText': rightText,
							},
							(res) => {
								console.log(res)
							});
						break;
					case 3: //HeadUp
						notify.show({
								'channelID': '4',
								'channelName': 'HeadUp',
								'ID': 3,
								'notifyType': notifyType,
								'ticker': 'Ticker',
								'title': 'HeadUp',
								'content': content,
								'leftBtnText': leftText,
								'rightBtnText': rightText,
								'thumbUrl': thumbUrl
							},
							(res) => {
								console.log(res)
							});
						break;
					case 4: //消息盒子（mailbox）
						let msgList = ['消息1', '消息2', '消息3'];
						notify.show({
								'channelID': '4',
								'channelName': '消息盒子',
								'ID': 4,
								'notifyType': notifyType,
								'ticker': 'Ticker',
								'title': 'mailbox',
								'content': content,
								'thumbUrl': thumbUrl,
								'msgList': msgList
							},
							(res) => {
								console.log(res)
							});
						break;
					case 5: //多行通知
						content = "《一代人》\n" +
							"\n" +
							"\n" +
							"黑夜给了我黑色的眼睛\n" +
							"我却用它寻找光明";
						notify.show({
								'channelID': '5',
								'channelName': '多行通知',
								'ID': 5,
								'notifyType': notifyType,
								'ticker': 'Ticker',
								'title': '多行通知',
								'content': content,
							},
							(res) => {
								console.log(res)
							});
						break;
					case 6: //进度通知
						notify.show({
								'channelID': '6',
								'channelName': '进度通知',
								'ID': 6,
								'notifyType': notifyType,
								'ticker': 'Ticker',
								'title': '进度通知',
								'content': content,
								'maxProgress': 100,
								'progress': 10, //当前进度
								'indeterminate': false, //是否模糊进度显示
								'finishText': "下载完成"
							},
							(res) => {
								console.log(res)
							});
						break;
					default:
						break;
				}

			},
			isNotifyEnabled() { //是否打开通知权限
				notify.isNotifyEnabled(
					(res) => {
						console.log(res)
						uni.showToast({
							title: 'isNotifyEnabled：' + res.isNotifyEnabled ? true : false,
							icon: "none"
						})
					});
			},
			goSetNotify() { //跳转到通知设置界面
				notify.goSetNotify();
			},
			clear() { //清空某类型消息
				notify.clear({
					'channelID': '0',
					'channelName': 'channel_0',
					'ID': 1,
				});
			},

		}
	}
</script>

<style scoped>
	.item-row {
		padding: 30upx;
	}

	.top-line {
		border-top: 2upx solid #eee;
	}
</style>
