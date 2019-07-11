<template>
	<!-- 左侧副页 -->
<!-- 	<transition name="slide-fade" mode="out-in"> -->
		<div class="left-second" v-show="showsecond" @click.stop="closeShow($event)">
			<div class="left-second-main">
			<div class="login">
			<div v-if="!data">
			<p class="login-text">登录网易云音乐</p>
			<p class="login-text">手机电脑多端登陆，进项海量高品质音乐</p>
			<div class="login-btn-warp">
			<router-link to="/login" class="login-btn">立即登录</router-link>
			</div>
			
			<!-- 个人信息 -->
			<div>
				
			</div>
			<!-- 个人信息 -->
			</div>
			
			</div></div>
		</div>
	<!-- </transition> -->
	<!-- 左侧副页-结束 -->
</template>

<script>
	export default{
		methods:{
			closeShow(e) {
				if (e.target !== e.currentTarget) return;
				this.showsecond = false;
			}
		}
	}
</script>

<style scoped>
	.login-btn-warp{
			text-align: center;
			}
		.login-btn{
			display: inline-block;
			width: 1.2rem;
			padding :0.1rem 0.3rem;
			color: #666666;
			border: 0.02rem solid #ccc;
			border-radius: 16px;
			margin-top: 0.5rem;
		}
		.login-text{
			color: #666;
			font-size: 0.2rem;
			text-align: center;
			margin: 0.1rem;
			}
		.login{
			background: #EEEEEE;
			height: 3rem;
			padding: 0 0.5rem;
			padding-top: 0.5rem;
			box-sizing: border-box;
		}
	.slide-fade-enter-active {
		transition: all 0.3s ease;
	}
	.slide-fade-leave-active {
		transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
	}
	.slide-fade-enter, .slide-fade-leave-to
	/* .slide-fade-leave-active for below version 2.1.8 */ {
		transform: translateX(-600px);
		opacity: 0;
	}
	
	.left-second-main {
		height: 100vh;
		width: 80%;
		background: red;
		position: fixed;
		display: inline-block;
		top: 0;
		z-index: 3;
	}
	.left-second {
		height: 100vh;
		width: 100%;
		background: rgba(0, 0, 0, 0.5);
		position: fixed;
		top: 0;
		z-index: 1;
	}
</style>
