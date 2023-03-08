<template>
	<view class="container">
		<map id="map_container" :latitude="latitude" :longitude="longitude" scale="11" :markers="markers"
			:show-location="true" @markertap="openMap" @updated='mapUpdated' @tap='closeMapMarker'
			:polyline="polyline">
		</map>
		<uni-card :title=cardInfo.subTitle :sub-title=cardInfo.maintitle :extra=cardInfo.extra class="cardstyle">
			<text class="uni-body">{{ cardInfo.extra }}</text>
			<button style="width: 200px;" type="primary" @click="openPayAli">支付宝支付</button>
			<button style="width: 200px;" type="primary" @click="openPayWx">微信支付</button>
			<button style="width: 200px;" type="primary" @click="openOtherMap">导航</button>
			
		</uni-card>
		
		
	</view>
</template>

<script>
	// import amap from '../../common/AMapWX_SDK_V1.3.0/amap-wx.130.js'
	export default {
		data() {
			return {
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
					extra:'1.24km',
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
					latitude:"",
					longitude:'',
				},
				initCardInfo: {
				}
			}
		},
		mounted() {
			console.log(this.initCardInfo)
			this.$nextTick(() => {
				this.cardInfo.maintitle = this.markers[0].maintitle
				this.cardInfo.subTitle = this.markers[0].label.content
				this.cardInfo.extra = '0.26km'
			})
			this.muDD = this.markers[0]

		},
		onLoad() {
			let that = this 
			
		},

		methods: {
			toggle(type) {
				this.type = true
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
			openMap(e) {
				this.show = true
				console.log('初始1111', e)
				for (let i = 0; i < this.markers.length; i++) {
					if (e.detail.markerId === this.markers[i].id) {
						this.muDD = this.markers[i]
						this.cardInfo.maintitle = this.markers[i].maintitle
						this.cardInfo.subTitle = this.markers[i].label.content
						this.cardInfo.extra = this.markers[i].extra
					}
				}
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
				console.log(123,this.muDD);
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
			openPayAli(){
				//支付宝 调用之前传入必要数据，向后端请求订单信息orderInfo
				//wx
				/*
				{
					appid,
					noncestr,
					package,
					partnerid,
					prepayid,
					timestamp,
					sign,
				}
				*/
				let payData = {
					app_id:'2021003181698306',
					channel:'aliPay',
					title:'标题1111',
					price: 222,
					bill_note:'2021231003181698306123',
					bill_timout:300,
				}
				var orderInfo = 'app_id=2021003181698306&biz_content=%7B%22timeout_express%22%3A%2230m%22%2C%22seller_id%22%3A%22%22%2C%22product_code%22%3A%22QUICK_MSECURITY_PAY%22%2C%22total_amount%22%3A%220.02%22%2C%22subject%22%3A%221%22%2C%22body%22%3A%22%E6%88%91%E6%98%AF%E6%B5%8B%E8%AF%95%E6%95%B0%E6%8D%AE%22%2C%22out_trade_no%22%3A%22314VYGIAGG7ZOYY%22%7D&charset=utf-8&method=alipay.trade.app.pay&sign_type=RSA2&timestamp=2016-08-15%2012%3A12%3A15&version=1.0&sign=MsbylYkCzlfYLy9PeRwUUIg9nZPeN9SfXPNavUCroGKR5Kqvx0nEnd3eRmKxJuthNUx4ERCXe552EV9PfwexqW%2B1wbKOdYtDIb4%2B7PL3Pc94RZL0zKaWcaY3tSL89%2FuAVUsQuFqEJdhIukuKygrXucvejOUgTCfoUdwTi7z%2BZzQ%3D';  //从服务器获取的订单
				uni.getProvider({
				    service: 'payment',
				    success: function (res) {
				        console.log('获取的服务商',res.provider)
				        if (~res.provider.indexOf('alipay')) {
				            uni.requestPayment({
				                "provider": "alipay",   //固定值为"alipay"
				                "orderInfo": orderInfo, //此处为服务器返回的订单信息字符串
				                success: function (res) {
				                    var rawdata = JSON.parse(res.rawdata);
				                    console.log("支付成功");
				                },
				                fail: function (err) {
				                    console.log('支付失败:' + JSON.stringify(err));
				                }
				            });
				        }
				    }
				});
			},
			
			openPayWx(){
				//支付宝 调用之前传入必要数据，向后端请求订单信息orderInfo
				//wx
				/*
				{
					appid,
					noncestr,
					package,
					partnerid,
					prepayid,
					timestamp,
					sign,
				}
				*/
				var orderInfo = {
				  "appid": "wx499123451237c70e",  // 应用ID（AppID）
				  "partnerid": "1483245132",      // 商户号（PartnerID）
				  "prepayid": "wx202254123423241234234112331be90000", // 预支付交易会话ID
				  "package": "Sign=WXPay",        // 固定值
				  "noncestr": "c5sEwbaNPiXAF3iv", // 随机字符串
				  "timestamp": 1597935292,        
				  "sign": "A842B45937F6EFF60DEC7A2EAA52D5A0" // 签名，这里用的 MD5 签名
				};
				uni.getProvider({
				    service: 'payment',
				    success: function (res) {
				        console.log(res.provider)
				        if (~res.provider.indexOf('wxpay')) {
				            uni.requestPayment({
				                "provider": "wxpay",  //固定值为"wxpay"
				                "orderInfo": orderInfo, 
				                success: function (res) {
				                    var rawdata = JSON.parse(res.rawdata);
				                    console.log("支付成功");
				                },
				                fail: function (err) {
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
		padding: 20px;
		font-size: 14px;
		line-height: 24px;
		
	}

	#map_container {
		width: 50%;
		height: 100px;
	}
</style>
 