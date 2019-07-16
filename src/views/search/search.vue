<template>
	<div class="warp">
		<div class="title">
			<div class="goback"><span class="iconfont icon-houtui goback-icon" @click="goback()"></span></div>
			<div class="search"><input type="search" class="input-tex" @keypress="searchHandler()" v-model="keyWorld" placeholder="请输入关键词" /></div>
			<div class="star"><span class="iconfont icon-wodehaoyou star-icon"></span></div>
		</div>
		<ul v-show="fuyu" class="fuyu">
			<li v-for="(t,index) in Navigation" class="Navigation-item" v-show="fuyu" @click="Searchthis(t.name)">
				<span class="iconfont icon-kongxinsanjiao-first goSearch" ></span><span class="song-name">{{t.name}}</span>
			</li>
		</ul>
		<router-view />
	</div>
</template>

<script>
export default {
	watch: {
		keyWorld: {
			handler() {
				if(this.keyWorld==""){
					this.fuyu=false
					return
				}
				this.fuyu=true;
				this.$axios.get(`/wy/search?keywords=${this.keyWorld}&type=1&limit=10`).then(res => {
					this.Navigation=res.data.result.songs
				});
			}
		}
	},
	data() {
		return {
			keyWorld: '',
			fuyu: false,
			Navigation:[],
		};
	},
	methods: {
		goback() {
			this.$router.go(-1);
		},
		searchHandler(e) {
			this.fuyu=false;
			this.$router.push({path:'/search/comprehensive',query:{keyWorld:this.keyWorld}})
		},
		Searchthis(name){
			this.keyWorld=name
			this.fuyu=false
			setTimeout(()=>{
				this.searchHandler()
			},1)
			
		}
	}
};
</script>

<style scoped>
	.song-name{
		height: 100%;
		float: left;
		width: 80%;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		line-height: 1rem;
		font-size: 0.4rem;
		color: #CCCCCC;
	}
	.goSearch{
		height: 100%;
		float: left;
		width: 20%;
		text-align: center;
		line-height: 1rem;
		font-size: 0.44rem;
		color: #CCCCCC;
	}
	.Navigation-item{
		height:1rem;
		width: 100%;
		background: #FFF;
		border-bottom: 1px solid #EEEEEE;
		
	}
	.fuyu{
		position: absolute;
		width: 80%;
		top: 0.8rem;
		left: 0.8rem;
		box-shadow: 1px 5px 10px 1px #999;
	}
.star-icon {
	font-size: 0.48rem;
}
.star {
	height: 100%;
	width: 15%;
	float: left;
	text-align: center;
	line-height: 0.8rem;
}
.input-tex {
	height: 70%;
	width: 100%;
	display: inline-block;
	background: #fff;
	border: 0;
	font-size: 0.36rem;
	margin-top: 0.09rem;
	border-bottom: 1px solid #000000;
}
.search {
	float: left;
	height: 100%;
	width: 70%;
	text-align: center;
}
.goback-icon {
	font-size: 0.48rem;
}
.goback {
	float: left;
	width: 15%;
	height: 100%;
	text-align: center;
	line-height: 0.8rem;
}
.warp {
	overflow: auto;
	height: auto;
	height: 100vh;
	width: 100%;
	position: fixed;
	top: 0;
	background: #fff;
	z-index: 1;
}
.title {
	height: 0.8rem;
}
</style>
