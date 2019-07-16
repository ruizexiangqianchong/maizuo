<template>
	<div class="bg">
		<div class="logo"><!-- <img  src="../../assets/img/logo.png" class="logo-img"/> --></div>
		<div class="login">
			<div class="username-warp">
				<span class="login-lable">未注册手机号登录后会自动创建账号</span>
				<div class="areacode" :class="{ active: tex }">+86</div>
				<input type="text" class="username" placeholder="请输入手机号" v-model="tex" />
				<div class="del" v-show="tex" @click="clickedl()">×</div>
			</div>
			<div class="password-warp"><input type="password" class="username" placeholder="请输入密码" v-model="pas" /></div>
			<div class="submit-warp"><button class="submit" @click="submitHandler()">登录</button></div>
		</div>
	</div>
</template>

<script>
import { Toast } from 'mint-ui';
export default {
	data() {
		return {
			delinput: false,
			tex: '',
			pas: ''
		};
	},
	methods: {
		clickedl() {
			this.tex = '';
		},
		submitHandler() {
			this.$axios
				.post(`/wy/login/cellphone`, {
					phone: this.tex,
					password: this.pas
				})
				.then(res => {
					sessionStorage.setItem("user",JSON.stringify(res))
					this.$emit("child","u")
					this.$router.push("/")
				})
				.catch(err => {
					console.log(err);
					if (err) {
						Toast({
							message: '用户名或密码错误',
							position: 'bottom',
							duration: 2000
						});
					}
				});
		}
	}
};
</script>

<style scoped>
.submit-warp {
	margin-top: 0.7rem;
	width: 100%;
	height: auto;
	text-align: center;
}
.submit {
	display: inline-block;
	width: 2.2rem;
	padding: 0.1rem 0;
	border: 0;
	border-radius: 24px;
}
.active {
	color: #000000 !important;
}

input:-moz-placeholder,
textarea:-moz-placeholder {
	color: #ccc;
}

input:-ms-input-placeholder,
textarea:-ms-input-placeholder {
	color: #ccc;
}

input::-webkit-input-placeholder,
textarea::-webkit-input-placeholder {
	color: #ccc;
}

.del {
	position: absolute;
	color: #ccc;
	font-size: 0.64rem;
	right: 0.4rem;
	top: 0.6rem;
}
.areacode {
	position: absolute;
	color: #ccc;
	font-size: 0.32rem;
	top: 0.8rem;
}
.username-warp {
	height: auto;
	overflow: hidden;
	position: relative;
}
.password-warp {
	height: auto;
	overflow: hidden;
	position: relative;
	margin-top: 0.8rem;
}
.username {
	caret-color: #ccc;
	width: 95%;
	height: 0.6rem;
	font-size: 0.32rem;
	box-sizing: border-box;
	padding-left: 0.6rem;
	outline: none;
	border: 0;
	border-bottom: 1px solid #e9e9e9;
	background: #dd001b;
}
.login-lable {
	position: relative;
	color: #cccccc;
	margin-bottom: 0.4rem;
	display: inline-block;
}
.login {
	margin-top: 1.4rem;
	height: auto;
	padding: 0 0.2rem;
}

.logo {
	width: 100%;
	height: 35%;
	text-align: center;
	vertical-align: middle;
	background: url(../../assets/img/logo.png) center no-repeat;
	background-size: 60%;
}
.bg {
	background: #dd001b;
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	z-index: 999;
}
</style>
