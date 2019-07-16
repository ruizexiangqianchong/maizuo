<template>
	<!-- 歌单 -->
	<ul class="songs">
		<p class="title">歌单 <span class="iconfont icon-tiaozhuanqianwangyoujiantouxiangyouxiayibuxianxing"></span></p>
		<li class="songs-t" v-for="(t, index) in playsData">
			<div class="cover">
				<img :src="t.coverImgUrl" class="cover-img">
			</div>
			<div class="playsinfo">
				<span class="playsinfo-warp">
					<p class="playname">{{t.name}}</p>
					<p class="playinfo"><span class="trackCount">{{t.trackCount}}首by {{t.creator.nickname}}, 播放{{t.playCount}}次</span></p>
				</span>
			</div>
		</li>
	</ul>
</template>

<script>
	export default {
		created() {
			this.getdata()
		},
		data() {
			return {
				playsData: ''
			};
		},
		props: [
			'keyWorld', 'num'
		],
		watch: {
			keyWorld: {
				handler(n, o) {
					this.playsData.length = 0
					this.getdata()
				},
				deep: true
			}
		},
		methods: {
			getdata() {
				this.$axios.get(`/wy/search?keywords= ${this.keyWorld}&limit=${this.num}&type=1000`).then(res => {
					this.playsData = res.data.result.playlists
				});
			}
		}
	}
</script>

<style scoped>
	.creator {
		color: #666666;
		margin-left: 0.1rem;
		overflow: hidden;
		display: block;
	}

	.playsinfo-warp {
		display: block;
		/* margin:  auto 0; */
		width: 100%;
	}

	.trackCount {
		color: #666666;
		display: block;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		width: 100%;
	}

	.playname {
		font-size: 0.32rem;
		height: 50%;
		width: 100%;
	}

	.playsinfo {
		width: 70%;
		height: 100%;
		float: left;
		/* vertical-align: middle; */
		display: flex;
		align-items: center;

	}

	.cover {
		width: 30%;
		height: 100%;
		float: left;
	}

	.cover-img {
		width: 90%;
		height: 90%;
		border-radius: 4px;
	}



	.title {
		font-size: 0.36rem;
		font-weight: 500;
		margin-bottom: 0.2rem;
	}

	.songs-t {
		height: 2rem;
	}

	.songs {
		margin-top: 0.4rem;
	}
</style>
