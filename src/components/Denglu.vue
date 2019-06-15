<template>
	<div class="logins">
		<div class="nav">
			<router-link :to="{name: 'Zhuche'}" class="register-text">注册</router-link>
		</div>

		<div class="logo">
			<img class="auto-img" src="../assets/kugou.jpg" />
		</div>
		<van-row>
			<van-col offset="2" span="20">

				<van-cell-group>

					<van-field label="手机号" placeholder="输入手机号" v-model="userInfo.phone" />
					<van-field type="password" label="密码" placeholder="密码(8-16位)" v-model="userInfo.pwd" />

				</van-cell-group>

				<van-button class="login-btn" size="large" type="info" @click="login">登录</van-button>

			</van-col>
		</van-row>

	</div>
</template>

<script>
	import { CellGroup, Field, Button } from 'vant'

	import validForm from '../data/validForm.js'

	import tip from '../data/tip.js'

	export default {
		name: 'Denglu',

		data() {

			return {

				//用户列表
				users: [],

				//用户信息
				userInfo: {
					phone: '',
					pwd: ''
				}

			};

		},

		components: {
			[CellGroup.name]: CellGroup,
			[Field.name]: Field,
			[Button.name]: Button
		},

		methods: {

			login() {

				//验证手机号
				if(!validForm.validPhone(this.userInfo.phone)) {

					tip.dialogTip('手机号码不正确', true, this.userInfo, 'phone');

				} else if(!validForm.validPwd(this.userInfo.pwd, 8, 16)) {
					//验证密码

					tip.dialogTip('密码只支持!@._字母数字组合', true, this.userInfo, 'pwd');

				} else {

					var userData = localStorage.getItem('users');

					if(userData) {
						//如果存在用户
						this.users = JSON.parse(userData);

						for(var i = 0; i < this.users.length; i++) {

							if(this.users[i].phone == this.userInfo.phone) {
								//如果手机号匹配, 验证密码

								if(this.users[i].pwd == this.userInfo.pwd) {
									//保存用户登录状态{userId: 手机号, loginStatus: true}

									localStorage.setItem('userLogin', JSON.stringify({
										userId: this.userInfo.phone,
										loginStatus: true
									}));

									return this.$router.push({
										name: 'Index'
									});

								} else {

									return tip.dialogTip('手机号或者密码不正确');

								}

							}

						}

						//不存该用户
						tip.dialogTip('该用户不存在');

					}

				}

			},

		}

	}
</script>

<style lang="less" scoped>
.nav .register-text[data-v-fc143c9a] {
    float: right;
    font-size: 14PX;
    color: #fff;
    line-height: 2.3333rem;
    margin-right: 1.5333rem;
}
	
	.logins {
		min-height: 667px;
		background: white;
	}
	
	.logo {
		width: 100%;
		margin-top: -1px;
		background-color: #F6F6F6;
		.auto-img {
			width: 90%;
			margin: 0 5%;
		}
	}
	
	.nav {
		height: 2.3333rem;
		background-image: linear-gradient(to right, #62AAF5 0%, #1989FA 100%);
		background-image: linear-gradient(to bottom, #62AAF5 0%, #F6F6F6 100%);
		/*margin-bottom:  1.3333rem;*/
		.register-text {
			float: right;
			font-size: 14PX;
			color: #fff;
			line-height: 2.3333rem;
			margin-right: 1.5333rem;
		}
	}
	
	.van-row {
		background-image: linear-gradient(to bottom, #F6F6F6 0%, #fff 100%);
		margin-top: -3px;
		padding-top: 1rem;
	}
	
	.login-btn {
		margin-top: 144px;
		/*min-height: 667px;*/
		/*background: white;*/
	}
	.van-row[data-v-38ed59e9] {
	padding-top: 1rem;
}
.van-row[data-v-fc143c9a] {
    padding-top: 1rem;
}
</style>