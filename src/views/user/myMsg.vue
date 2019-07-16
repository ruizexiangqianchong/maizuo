<template>
	<div class="myMsg-warp">
		<div class="myMsg-title">
			<span class="iconfont icon-houtui goback" @click="goback()"></span>
			<span class="myMsg-title-tex">我的信息</span>
		</div>
		<div class="myMsg-nav">
			
			<div class="myMsg-na-item"><router-link :to="{path:'/fuye/myMsg/private',query:{Uid:Uid,Msg:MsgCont}}">私信</router-link>
			<span class="MsgCont" v-if="MsgCont">{{MsgCont}}</span>
			</div>
			<div class="myMsg-na-item"><router-link to="/fuye/myMsg/comment">评论</router-link></div>
			<div class="myMsg-na-item"><router-link to="/fuye/myMsg/callme">@我</router-link></div>
			<div class="myMsg-na-item"><router-link to="/fuye/myMsg/inform">通知</router-link></div>
		</div>
		 <transition name="slide-fade" out-in>
		<router-view/>
		  </transition>
	</div>
</template>

<script>

	export default{
		created() {
			if(this.$route.query.Uid){
				sessionStorage.setItem("Uid",JSON.stringify({Uid:this.$route.query.Uid,Msg:this.$route.query.Msg}))
			}
			//console.log(JSON.parse(sessionStorage.getItem("Uid")))
			this.Uid=this.$route.query.Uid||JSON.parse(sessionStorage.getItem("Uid")).Uid
			this.MsgCont=this.$route.query.Msg||JSON.parse(sessionStorage.getItem("Uid")).Msg
		},
		methods:{
			goback(){
				this.$router.push("/")
				},
				clickGo(){
					this.$router.push({name:"private",query:{Uid:this.Uid,Msg:this.MsgCont}})
				}
			},
			data(){
				return {
					Uid:"",
					MsgCont:""
				}
			}
	}
</script>

<style scoped>
	.MsgCont{
		position: absolute;
		color: #FFF;
		background: red;
		padding: 0.02rem 0.08rem;
		border-radius:8px;
		text-align: center;
	}
	.myMsg-nav{
		height: 0.6rem;
		margin-top: 0.2rem;
		display: flex;
		box-sizing: border-box;
		border-bottom: 0.02rem solid #E6E6E6;
	}
	.myMsg-na-item{
		width: 25%;
		text-align: center;
	}
	.myMsg-na-item a{
		height: 100%;
		display: inline-block;
		font-size: 0.32rem;
		box-sizing: border-box;
		position: relative;
	}
.myMsg-title-tex {
	font-size: 0.3rem;
	display: inline-block;
	margin-left: 0.2rem;
}
.goback {
	font-size: 0.32rem;
}
.myMsg-warp {
	height: 100vh;
	background: #fff;
	z-index: 11;
	width: 100%;
	position: absolute;
	top: 0;
}
.myMsg-title {
	padding: 0.16rem 0.2rem;
	height: 0.4rem;
}
.router-link-active{
	color: red;
	border-bottom: 0.04rem solid red;
}
.router-link-exact-active{
	color: red;
	border-bottom: 0.04rem solid red;
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(600px);

}
</style>
