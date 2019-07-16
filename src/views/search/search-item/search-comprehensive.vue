<template>
	<div>
		<div class="nav">
			<div class="nav-item"><router-link :to="{ path: '/search/comprehensive/index', query: { keyWorld: this.keyWorld } }">综合</router-link></div>
			<div class="nav-item"><router-link :to="{ path: '/search/comprehensive/songs', query: { keyWorld: this.keyWorld } }" class="nav-item">单曲</router-link></div>
			<div class="nav-item"><router-link to="3" class="nav-item">视频</router-link></div>
			<div class="nav-item"><router-link to="3" class="nav-item">歌手</router-link></div>
			<div class="nav-item"><router-link to="4" class="nav-item">专辑</router-link></div>
		</div>
		<router-view />
	</div>
</template>

<script>
export default{
	created() {
		this.keyWorld=this.$route.query.keyWorld
	},

	data(){
		return{
			keyWorld:""
		}
	},
	watch:{
				$route:{
					handler(n,o){
						this.keyWorld=n.query.keyWorld
					},
					deep:true,
				}
			},
}
</script>

<style scoped>
.router-link-active {
	color: red;
	box-sizing: border-box;
	height: 100%;
	padding-bottom:0.12rem ;
	border-bottom: red solid 2px;
}
.nav-item {
	width: 20%;
	height: 100%;
	font-size: 0.28rem;
	text-align: center;
	line-height: 0.7rem;
	box-sizing: border-box;
}
.nav {
	height: 0.7rem;
	width: 100%;
	display: flex;
	box-sizing: border-box;
	border-bottom: 1px solid #e6e6e6;
}
</style>
