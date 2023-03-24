<template>
	<view class="container">
		<uni-section title="一般用法" type="line" padding>
			<uni-countdown :day="1" :hour="1" :minute="12" :second="40" />
		</uni-section>
		<button @click='navgo' >跳转丢失页面</button>
		
		<uni-section title="默认" subTitle="使用 focus 属性自动获取输入框焦点" type="line" padding>
			<uni-easyinput errorMessage v-model="value" focus placeholder="请输入内容" @input="input"></uni-easyinput>
		</uni-section>
		<map id="map_container" :latitude="latitude" :longitude="longitude" scale="11" :markers="markers"
			:style="'height:'+windowHeight+'px;width:' +windowWidth+'px;'" :show-location="true"
			@markertap="clickMarker" @updated='mapUpdated' @tap='closeMapMarker' :polyline="polyline">
		</map>

		<!-- <uni-card :title=cardInfo.subTitle :sub-title=cardInfo.maintitle :extra=cardInfo.extra
			class="cardstyle">
			<text class="uni-body">{{ cardInfo.extra }}</text>
			<button style="width: 80px; margin: 5px auto;" class="button" type="primary"
				@click="toggle('bottom')"><text class="button-text">底部</text></button>
			<uni-popup ref="popup" background-color="#fff">
				<view class="popup-content" :class="{ 'popup-height': type === 'left' || type === 'right' }">
					<button style="width: 200px; margin: 5px auto;" type="primary"
						@click="openPayAli">支付宝支付</button>
					<button style="width: 200px; margin: 5px auto;" type="primary"
						@click="openPayWx">微信支付</button>
				</view>
			</uni-popup>
			<button style="width: 80px; margin: 5px auto;" type="primary" @click="openOtherMap">导航</button>
		</uni-card> -->

		<!-- <div class="frametest"></div> -->


	</view>
</template>

<script>
	// import amap from '../../common/AMapWX_SDK_V1.3.0/amap-wx.130.js'
	export default {
		data() {
			return {
				value: '',
				wWidth: 0,
				windowHeight: 0,
				windowWidth: 0,
				show: false,
				type: 'center',
				href: 'https://uniapp.dcloud.io/component/README?id=uniui',
				key: "66305aa05776a166b948321344673836",
				amapPlugin: null,
				longitude: 118.80470,
				latitude: 32.06267,
				markers: [{
					id: 101, //id 必填项
					extra: '0.26km',
					maintitle: '南京AAAAAAAAA',
					width: 50,
					height: 50,
					longitude: 118.84124,
					latitude: 32.05229,
					iconPath: "../../static/c1.png",
					label: {
						content: '钟山风景区',
						color: 'red',
						fontSize: 20

					}
				}, {
					id: 100, //id 必填项
					maintitle: '南京BBBBBBBBB',
					extra: '1.24km',
					width: 50,
					height: 50,
					longitude: 118.77148,
					latitude: 32.01630,
					iconPath: "../../static/c2.png",
					label: {
						content: '秦淮河',
						color: 'red',
						fontSize: 20

					}
				}],
				mapInfo: [],
				polyline: [{
					points: [],
					color: "#31c27c",
					width: 10,
					arrowLine: true,
					borderWidth: 2 //线的边框宽度，还有很多参数，请看文档 
				}],
				muDD: {},
				cardInfo: {
					extra: '',
					subTitle: '',
					maintitle: '',
					latitude: "",
					longitude: '',
				},
				initCardInfo: {}
			}
		},
		onPullDownRefresh() {
			console.log('pull down refresh')
		},
		mounted() {

			this.$nextTick(() => {
				this.cardInfo.maintitle = this.markers[0].maintitle
				this.cardInfo.subTitle = this.markers[0].label.content
				this.cardInfo.extra = '0.26km'
			})
			this.muDD = this.markers[0]
			console.log('mounted向nvue传递信息', this.muDD, this.cardInfo)
			uni.$emit('mapData', {
				muDD: this.muDD,
				cardInfo: this.cardInfo
			});
			uni.$on('hideCard', res => {
				console.log('resave fun', res());
			})
			const subNVue = uni.getSubNVueById('card')
			subNVue.show('slide-in-top', 5000)
		},
		onLoad() {
			let _this = this
			uni.getSystemInfo({
				success: function(res) {
					console.log('首屏内容', res);
					_this.windowHeight = res.windowHeight
					_this.windowWidth = res.windowWidth
				}
			})
		},

		methods: {
			navgo() {
				console.log(123);
				uni.navigateTo({
					url:'/pages/404/index'
				})
			},
			input(e) {
				console.log('输入内容：', e);
			},
			showCard() {
				//#ifdef APP-PLUS
				uni.getSubNVueById('card').show('slide-in-bottom', 200);
				//#endif
			},


			toggle(type) {
				this.type = type
				// open 方法传入参数 等同在 uni-popup 组件上绑定 type属性
				this.$refs.popup.open(type)
			},
			markertap(e) {
				console.log(e)
				let points = []
				points.push({
					latitude: 31.98087,
					longitude: 118.67143,
				})
				points.push({
					latitude: 32.06959,
					longitude: 118.75128,
				})
				points.push({
					latitude: 32.09378,
					longitude: 118.89842,
				})
				this.polyline = [{
					points: points,
					color: "#31c27c",
					width: 10,
					arrowLine: true,
					borderWidth: 2 //线的边框宽度，还有很多参数，请看文档 
				}]
			},

			// 打开的点击事件，传经纬度和地点名 
			clickMarker(e) {
				this.show = true

				for (let i = 0; i < this.markers.length; i++) {
					if (e.detail.markerId === this.markers[i].id) {
						this.muDD = this.markers[i]
						this.cardInfo.maintitle = this.markers[i].maintitle
						this.cardInfo.subTitle = this.markers[i].label.content
						this.cardInfo.extra = this.markers[i].extra
					}
				}
				console.log('12父点标记传递信息', this.muDD, this.cardInfo)
				// 在 subNVue/vue 页面触发事件
				// $emit(eventName, data)  
				uni.$emit('mapData', {
					muDD: this.muDD,
					cardInfo: this.cardInfo
				});
				// uni.$on('showCard', res => {
				// 	console.log('1234123123123123',res);
				// })

				// let url = "";
				// let latitude =e.detail.latitude;
				// let longitude= e.detail.longitude;
				// let name = '去的地方'
				// if (plus.os.name == "Android") { //判断是安卓端
				// console.log('打印plus',plus)
				// 	plus.nativeUI.actionSheet({ //选择菜单
				// 		title: "选择地图应用",
				// 		cancel: "取消",
				// 		buttons: [{
				// 			title: "腾讯地图"
				// 		}, {
				// 			title: "百度地图"
				// 		}, {
				// 			title: "高德地图"
				// 		}]
				// 	}, function(e) {
				// 		switch (e.index) {
				// 			//下面是拼接url,不同系统以及不同地图都有不同的拼接字段
				// 			case 1:
				// 				//注意referer=xxx的xxx替换成你在腾讯地图开发平台申请的key
				// 				url = `qqmap://map/geocoder?coord=${latitude},${longitude}&referer=xxx`;
				// 				break;
				// 			case 2:
				// 				url =
				// 					`baidumap://map/marker?location=${latitude},${longitude}&title=${name}&coord_type=gcj02&src=andr.baidu.openAPIdemo`;
				// 				break;
				// 			case 3:
				// 				url =
				// 					`androidamap://viewMap?sourceApplication=appname&poiname=${name}&lat=${latitude}&lon=${longitude}&dev=0`;
				// 				break;
				// 			default:
				// 				break;
				// 		}
				// 		if (url != "") {
				// 			url = encodeURI(url);
				// 			//plus.runtime.openURL(url,function(e){})调起手机APP应用
				// 			plus.runtime.openURL(url, function(e) {
				// 				plus.nativeUI.alert("本机未安装指定的地图应用");
				// 			});
				// 		}
				// 	})
				// } else {}
			},
			// openmap() {
			// 	uni.openLocation({
			// 		latitude: this.dataInfo.latitude,
			// 		longitude: this.dataInfo.longitude,
			// 		name: this.dataInfo.name,
			// 		address: this.dataInfo.position
			// 	})
			// },
			mapUpdated() {},
			closeMapMarker() {},
			openOtherMap(obj) {
				console.log(123, this.muDD);
				uni.openLocation({
					longitude: this.muDD.longitude,
					latitude: this.muDD.latitude,
					address: this.muDD.title,
					scale: 15,
					success: function(res) {
						console.log('success', res);
					},
					fail: function() {
						wx.showToast({
							title: '定位异常',
							icon: 'none'
						})
					}
				});
			},
			openPayAli() {
				// 	//支付宝 调用之前传入必要数据，向后端请求订单信息orderInfo
				// 	//wx
				// 	/*
				// 	{
				// 		appid,
				// 		noncestr,
				// 		package,
				// 		partnerid,
				// 		prepayid,
				// 		timestamp,
				// 		sign,
				// 	}
				// 	*/
				let payData = {
					app_id: '2021003181698306',
					channel: 'aliPay',
					title: '标题1111',
					price: 222,
					bill_note: '2021231003181698306123',
					bill_timout: 300,
				}
				var orderInfo =
					'app_id=2021003181698306&biz_content=%7B%22timeout_express%22%3A%2230m%22%2C%22seller_id%22%3A%22%22%2C%22product_code%22%3A%22QUICK_MSECURITY_PAY%22%2C%22total_amount%22%3A%220.02%22%2C%22subject%22%3A%221%22%2C%22body%22%3A%22%E6%88%91%E6%98%AF%E6%B5%8B%E8%AF%95%E6%95%B0%E6%8D%AE%22%2C%22out_trade_no%22%3A%22314VYGIAGG7ZOYY%22%7D&charset=utf-8&method=alipay.trade.app.pay&sign_type=RSA2&timestamp=2016-08-15%2012%3A12%3A15&version=1.0&sign=MsbylYkCzlfYLy9PeRwUUIg9nZPeN9SfXPNavUCroGKR5Kqvx0nEnd3eRmKxJuthNUx4ERCXe552EV9PfwexqW%2B1wbKOdYtDIb4%2B7PL3Pc94RZL0zKaWcaY3tSL89%2FuAVUsQuFqEJdhIukuKygrXucvejOUgTCfoUdwTi7z%2BZzQ%3D'; //从服务器获取的订单
				uni.getProvider({
					service: 'payment',
					success: function(res) {
						console.log('获取的服务商', res.provider)
						if (~res.provider.indexOf('alipay')) {
							uni.requestPayment({
								"provider": "alipay", //固定值为"alipay"
								"orderInfo": orderInfo, //此处为服务器返回的订单信息字符串
								success: function(res) {
									var rawdata = JSON.parse(res.rawdata);
									console.log("支付成功");
								},
								fail: function(err) {
									console.log('支付失败:' + JSON.stringify(err));
								}
							});
						}
					}
				});
			},

			openPayWx() {
				// 	//支付宝 调用之前传入必要数据，向后端请求订单信息orderInfo
				// 	//wx
				// 	/*  
				// 	{
				// 		appid,
				// 		noncestr,
				// 		package,
				// 		partnerid,
				// 		prepayid,
				// 		timestamp,
				// 		sign,
				// 	}
				// 	*/
				var orderInfo = {
					"appid": "wx499123451237c70e", // 应用ID（AppID）
					"partnerid": "1483245132", // 商户号（PartnerID）
					"prepayid": "wx202254123423241234234112331be90000", // 预支付交易会话ID
					"package": "Sign=WXPay", // 固定值
					"noncestr": "c5sEwbaNPiXAF3iv", // 随机字符串
					"timestamp": 1597935292,
					"sign": "A842B45937F6EFF60DEC7A2EAA52D5A0" // 签名，这里用的 MD5 签名
				};
				uni.getProvider({
					service: 'payment',
					success: function(res) {
						console.log(res.provider)
						if (~res.provider.indexOf('wxpay')) {
							uni.requestPayment({
								"provider": "wxpay", //固定值为"wxpay"
								"orderInfo": orderInfo,
								success: function(res) {
									var rawdata = JSON.parse(res.rawdata);
									console.log("支付成功");
								},
								fail: function(err) {
									console.log('支付失败:' + JSON.stringify(err));
								}
							});
						}
					}
				});
			}


		}
	}
</script>

<style>
	.container {
		padding: 0px 5px;
		margin: 0px;
		font-size: 14px;
		line-height: 24px;

	}


	/* #map_container { */
	/* width: 10%; */
	/* z-index: -199; */

	/* } */

	/* .covewContainer {
		position: relative;
		top: 55vh;
	} */

	.cardstyle {
		position: absolute;
		top: -200px;
		width: 200px;
		z-index: 99;

	}


	/* @keyframes example {
		from {
			background-color: green;
		}

		to {
			background-color: yellow;
		}
	}

	.frametest {
		width: 100px;
		height: 100px;
		background-color: yellow;
		animation-name: example;
		animation-duration: 5s;
	} */
</style>
