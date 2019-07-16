<template>
	<!-- 单曲 -->
	<ul class="songs">
		<p class="title">
			单曲
			<span class="iconfont icon-tiaozhuanqianwangyoujiantouxiangyouxiayibuxianxing"></span>
		</p>
		<li class="songs-t" v-for="(t, index) in songsData" @click="clickHandler(t.id,t.name)">
			<div class="songs-info">
				<p class="songsName">{{ t.name }}</p>
				<p class="artists">{{ t.artists[0].name }} - {{ t.album.name }}</p>
			</div>
			<div class="songs-icon"><span class="iconfont icon-z-list-copy more"></span></div>
		</li>
	</ul>
</template>

<script>
export default {
	created() {
		this.getdata();
	},
	data() {
		return {
			songsData: '',
			img:'',
		};
	},
	methods: {
		getdata() {
			this.$axios.get(`/wy/search?keywords= ${this.keyWorld}&limit=${this.num}&type=1`).then(res => {
				this.songsData = res.data.result.songs;
			});
		},
		clickHandler(id,name){
			console.log(id,name)
						this.$axios.get(`/wy/song/detail?ids=${id}`).then(res => {
							this.img=res.data.songs[0].al.picUrl
							this.$router.push({name:'musicplay',query:{id:id,img:this.img,name:name}})
							
			});
		}
	},
	props: ['keyWorld', 'num'],
	watch: {
		keyWorld: {
			handler(n, o) {
				this.songsData.length=0
				this.getdata()
			},
			deep: true
		}
	}
};
</script>

<style scoped>
.title {
	font-size: 0.36rem;
	font-weight: 500;
	margin-bottom: 0.2rem;
}
.more {
	font-size: 0.8rem;
	font-weight: 900;
	color: #666666;
}
.artists {
	font-size: 0.24rem;
	color: #666;
	height: 50%;
	margin-top: 0.05rem;
}
.songsName {
	font-size: 0.32rem;
	height: 50%;
	line-height: 0.6rem;
}
.songs-t {
	height: 1.2rem;
}
.songs-icon {
	float: left;
	width: 20%;
	height: 100%;
	text-align: center;
	line-height: 1.2rem;
}
.songs-info {
	width: 80%;
	float: left;
}
.songs {
	margin-top: 0.4rem;
}
</style>
