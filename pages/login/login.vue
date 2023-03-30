<!-- 
<template>
	<view>
			<view class="login-form-top">登录</view>
			<view class="login-form-content">
				<view class="input-item flex align-center">
				  <view class="iconfont icon-zhanghao icon"></view>
				  <input v-model="username" class="input" type="text" placeholder="账号" maxlength="30" />
					<view v-if="username" class="iconfont icon-qingchu icon" @click="clearName"></view>
				</view>
				<view class="input-item flex align-center">
				  <view class="iconfont icon-mima icon"></view>
				  <input v-model="password" type="password" class="input" placeholder="密码" maxlength="20" />
					<view v-if="password" class="iconfont icon-qingchu icon" @click="clearPassword"></view>
				</view>
				<view class="contentManual">
					<view></view>
					<view>
						<text class="contentManual_right">用户手册</text>
						<text class="contentManual_right">常见内容</text>
					</view>
				</view>
				<view class="action-btn">
				  <button @click="handleLogin" type="primary" class="login-btn">登录</button>
				</view>
				<view class="forgotPassword">
					<text class="forgotPassword_right">忘记密码</text> 
					<text class="forgotPassword_content">|</text>
					<text class="forgotPassword_right">游客登录</text>
				</view>
			</view>
			<view class="inputBottom">
				<view class="input_content">
					<checkbox class="checkBox" value="cb" checked="true" color="#fd7402" style="transform:scale(0.6)" />
					我已阅读和同意
					<text class="input_flag">用户协议</text> 和
					<text class="input_flag">隐私条款</text> 
				</view>
			</view>
		</view>
</template>

<script>
	import JSEncrypts from '../../js_sdk/jsencrypt-Rsa/jsencrypt/jsencrypt.min.js';
		import sha1 from '../../utils/sha1.min.js';
		import {
			publickey,
			authToken,
			tokenInfo
		} from '../../services/api.js';


	export default {
			data() {
				return {
					username: 'Administrator',
					password: 'admin@84805353xx',
					keyseed: '',
					publicKey: '',
					token: ''
				}
			},
			onLoad() {
				
			},
			methods: {
				clearName() {
					this.username = '';
				},
				clearPassword() {
					this.password = '';
				},
				handleLogin() {
					if (this.username === "") {
					  uni.showToast({
							title: '请输入账号',
							icon: 'none'
						})
					} else if (this.password === "") {
					  uni.showToast({
					  	title: '请输入密码',
					  	icon: 'none'
					  })
					} else {
						uni.showLoading({
							title: '登录中...'
						});
							
						// setTimeout(() => {
							this.pwdLogin()
							console.log('####',1);
						// },500) 
					}
				},
				pwdLogin() {
					let url = `${publickey}?account=${this.username}`
					uni.request({
						url:url, 
						method:"GET",
				  }).then(res => {
					  console.log('####',2,res,url);
						if(res[1].statusCode === 200){
							console.log(res, '97---')
							this.keyseed = res[1].data.seed;
							this.publicKey = res[1].data.publicKey;
							this.login();
						}
					})
					uni.hideLoading();
				},
				login() {
					let encrypt = new JSEncrypts();
					console.log('**************',encrypt.setPublicKey(this.publicKey),'**************')
					let encpassword = sha1(this.username + "$" + this.keyseed + "$" + this.password);
					let tokenData = this.username + "$" + this.keyseed + "$" + encpassword;
					let encrypted = encrypt.encrypt(tokenData);
					const params = {
						loginData: encrypted,
						portal: "mobile",
						simple: 0
					}
					uni.request({
						url: authToken, 
						method:"POST",
						header: {
							"Content-Type": "application/x-www-form-urlencoded"
						},
						data: params,
					}).then(res => {
						// console.log('>>>>>>>',res)
						console.log('>>>>>>>',res);
						if(res[1].statusCode === 200) {
							this.token = res[1].data.token;
							uni.setStorageSync('token', this.token);
							setTimeout(() => {
								uni.reLaunch({
									url: '/pages/index/index'
								})
							})
						}
					})
				}
			}
		}
</script>

<style lang="scss">
	.login-form-top {
		margin: 20px auto;
		width: 80%;
		font-size: 64rpx;
	}
	.login-form-content {
	  text-align: center;
	  margin: 20px auto;
	  margin-top: 15%;
	  width: 80%;
	  .input-item {
	    margin: 20px auto;
			display: flex;
			align-items: center;
	    background-color: #fff;
	    height: 45px;
			border-bottom: 1px solid #ccc;
	    .icon {
	      font-size: 32rpx;
	      margin-left: 10px;
	      color: #999;
	    }
	    .input {
	      width: 100%;
	      font-size: 14px;
				height: 100%;
	      text-align: left;
	      padding-left: 10px;
	      display: flex;
				align-items: center;
	    }
	  }
		.contentManual {
			display: flex;
			justify-content: space-between;
			.contentManual_right {
				font-size: 12px;
				margin-left: 8px;
				color: #666;
			}
		}
		.forgotPassword {
			color: #fd7402;
			font-size: 12px;
			margin-top: 40rpx;
			.forgotPassword_content {
				margin: 0 20rpx;
			}
		}
		.login-btn {
		  margin-top: 30px;
		  height: 45px;
			border-radius: 10px;
			border: none;
			background: #fd7402;
		}
	}
	.inputBottom {
		position: absolute;
		bottom: 30px;
		width: 750rpx;
		.input_content {
			width: 100%;
			font-size: 14px;
			display: flex;
			justify-content: center;
			.checkBox {
				margin-top: -2px;
			}
			.input_flag {
				color: #fd7402;
				margin: 0 6rpx;
			}
		}
	}
</style> -->
<template>
	<view>
		<p style="background-color: red;">login</p>
	</view>
</template>