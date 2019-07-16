<template>
	<div class="header" ref="header" id="header">
		<div class="header-nav">
			<div class="header-nav-left"><span class="iconfont icon-liebiao2   nav-tab" @click="clickShow()"></span></div>
			<div class="header-nav-main">
				<router-link to="/shouye" class="header-nav-main-item">我的</router-link>
				<router-link to="/1" class="header-nav-main-item">发现</router-link>
				<router-link to="/friend" class="header-nav-main-item">朋友</router-link>
				<router-link to="/3" class="header-nav-main-item">视频</router-link>
			</div>
			<div class="header-nav-right"><span class="iconfont icon-sousuo nav-search" @click="goSearch()"></span></div>
		</div>
	</div>
</template>

<script>
export default {
	created() {
		this.data = JSON.parse(sessionStorage.getItem('user'));
	},
	data() {
		return {
			showsecond: false,
			data: ''
		};
	},
	methods: {
		clickShow() {
			this.$router.push('/fuye');
		},
		goSearch(){
			this.$router.push('/search');
		}
	},
	
};
</script>

<style scoped>
.nav-search {
	font-size: 0.6rem;
	margin-right: 0.2rem;
	float: right;
}
.header-nav-right {
	width: 20%;
	height: 100%;
	line-height: 0.8rem;
	float: right;
	overflow: hidden;
}
.header-nav-main-item {
	width: 25%;
	height: 100%;
	text-align: center;
	line-height: 0.8rem;
	transition: all 0.2s;
}
.header-nav-main {
	width: 60%;
	display: flex;
	height: 100%;
	float: left;
}
.header {
	width: 100%;
	height: 0.8rem;
}
.header-nav {
	width: 100%;
	height: 100%;
	overflow: hidden;
}
.header-nav-left {
	width: 20%;
	height: 100%;
	line-height: 0.8rem;
	float: left;
}
.nav-tab {
	font-size: 0.6rem;
	margin-left: 0.2rem;
}
.router-link-exact-active {
	font-size: 0.32rem;
	font-weight: 700;
}
</style>
