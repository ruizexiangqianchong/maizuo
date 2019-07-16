<template>
	<!-- 左侧副页 -->

	<div class="left-second">
		<i class="iconfont icon-xiangyou goback" @click="goback()"></i>
		<div class="left-second-main">
			<div class="login">
				<div v-if="!userdata">
					<p class="login-text">登录网易云音乐</p>
					<p class="login-text">手机电脑多端登陆，进项海量高品质音乐</p>
					<div class="login-btn-warp"><router-link to="/login" class="login-btn">立即登录</router-link></div>
				</div>
				<!-- 个人信息 -->
				<div v-if="userdata">
					<img :src="userdata.avatarUrl" class="userportrait" />
					<div class="usermsg">
						<span class="nickname">{{ userdata.nickname }}</span>
						<span class="userVip">Vip</span>
						<span class="rank">Lv.{{ level }}</span>
						<span class="signin">
							<i class="iconfont icon-yingyong1 sign-icon"></i>
							签到
						</span>
					</div>
				</div>
				<!-- 个人信息 -->
			</div>
			<!-- 消息，好友，换肤，识曲 -->
			<div class="commonly">
				<div class="commonly-item" @click="myMsg()">
					<span class="msgnum" v-show="msg">{{msg.newMsgCount}}</span>
					<span class="iconfont icon-xinfeng commonly-icon"></span>
					<p class="commonly-tex">我的消息</p>
				</div>
				<div class="commonly-item">
					<span class="iconfont icon-wodehaoyou commonly-icon"></span>
					<p class="commonly-tex">我的好友</p>
				</div>
				<div class="commonly-item">
					<span class="iconfont icon-yifu commonly-icon"></span>
					<p class="commonly-tex">个性换肤</p>
				</div>
				<div class="commonly-item">
					<span class="iconfont icon-tinggeshiqu commonly-icon"></span>
					<p class="commonly-tex">听歌识曲</p>
				</div>
			</div>
		</div>
		<router-view/>
	</div>

	<!-- 左侧副页-结束 -->
</template>

<script>
export default {
	created() {
		if (JSON.parse(sessionStorage.getItem('user'))) {
			this.userdata = JSON.parse(sessionStorage.getItem('user'));
			this.userbindings = this.userdata.data.bindings[0];
			this.userdata = this.userdata.data.profile;

			this.$axios.get(`/wy/user/detail?uid=${this.userdata.userId}`).then(res => {
				this.level = res.data.level; //获取等级
			});
			this.$axios.get(`/wy/msg/private?limit=999`).then(res => {
				this.msg = res.data;
			});
		}
	},
	methods: {
		goback() {
			this.$router.go(-1);
		},
		myMsg(){
			this.$router.push({name:"myMsg",query:{Uid:this.userdata.userId,Msg:this.msg.newMsgCount}})
		}
	},
	data() {
		return {
			userdata: '',
			userbindings: '',
			level: '',
			msg: ''
		};
	}
};
</script>

<style scoped>
	.msgnum{
		background: red;
		color: #FFF;
		border-radius: 6px;
		position: absolute;
		padding: 0 0.04rem;
		right: 0.5rem;
		top: -0.1rem;
	}
	.commonly-tex{
		margin-top: 0.1rem;
		font-size: 0.2rem;
	}
	.commonly-icon{
		font-size: 0.48rem;
		color: red;
	}
	.commonly-item{
		position: relative;
		width: 25%;
		display: flex;
		flex-direction:column;
		align-items:center;
	}
	.commonly{
		margin-top: 0.4rem;
		display: flex;
		height: auto;
		padding: 0 0.3rem;
	}
.usermsg {
	height: auto;
}
.sign-icon {
	font-size: 0.24rem;
	height: 0.4rem;
	vertical-align: middle;
	display: inline-block;
}
.signin {
	color: #fffdef;
	border-radius: 116px;
	background: red;
	height: 0.4rem;
	display: inline-block;
	width: 1rem;
	text-align: center;
	line-height: 0.4rem;
	float: right;
	margin-top: 0.1rem;
}
.rank {
	color: #666666;
	background: #999999;
	font-style: italic;
	border-radius: 6px;
	padding: 0 0.14rem;
	margin-left: 0.2rem;
}
.userVip {
	font-size: 0.28rem;
	color: #fffdef;
	background: #cccccc;
	border-radius: 4px;
	padding: 0 0.14rem;
	display: inline-block;
	margin-left: 0.08rem;
}
.nickname {
	font-size: 0.32rem;
}
.userportrait {
	height: 1.4rem;
	width: 1.4rem;
	border-radius: 50%;
	margin-bottom: 0.2rem;
}
.goback {
	position: absolute;
	z-index: 10;
	font-size: 0.48rem;
	top: 0.2rem;
	left: 0.2rem;
	font-weight: 700;
}
.login-btn-warp {
	text-align: center;
}
.login-btn {
	display: inline-block;
	width: 1.2rem;
	padding: 0.1rem 0.3rem;
	color: #666666;
	border: 0.02rem solid #ccc;
	border-radius: 16px;
	margin-top: 0.5rem;
}
.login-text {
	color: #666;
	font-size: 0.2rem;
	text-align: center;
	margin: 0.1rem;
}
.login {
	background: #eeeeee;
	height: 3rem;
	padding: 0 0.5rem;
	padding-top: 0.5rem;
	box-sizing: border-box;
}

.left-second-main {
	height: 100vh;
	width: 100%;
	background: #fff;
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
