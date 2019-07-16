<template>
	<div class="footer" v-if="musicdata != null" @touchstart.stop="addmusicplay(musicdata.musicid, musicdata.musicimgsrc, musicdata.musicname)">
		<div style="margin-left: 0.2rem; margin-top: 0.1rem;" class="demo" ><img :src="musicdata.musicimgsrc" :class="{ an: bool }" /></div>
		<div style="width: 4rem;" >
			<p>{{ musicdata.musicname }}</p>
			<p>横滑切换歌曲</p>
		</div>
		<div @touchstart.stop="musicplay()"><i class="iconfont" :class="{ 'icon-zanting': bool, 'icon-bofang1': !bool }" style="color: #FF4848;font-weight: 300;"></i></div>
		<div style="margin-right: 0.2rem;" @touchstart.stop="addtolist(musicdata.musiclistid)"><i class="iconfont icon-liebiao1"></i></div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			bool: false,
			musicdata: {}
		};
	},
	created() {
		this.getmusic();
	},
	methods: {
		musicplay() {
			this.bool = !this.bool;
		},
		//取出中的数据
		getmusic() {
			let musiclist = localStorage.getItem('musiclist');
			this.musicdata = JSON.parse(musiclist);
		},
		addtolist(id) {
			this.$router.push('/musiclist/' + id);
		},
		//传入歌曲id,名称，图片地址
		addmusicplay(musicid, musicimgsrc, musicname) {
			this.$router.push({ name: 'musicplay', query: { id: musicid, img: musicimgsrc, musicname: musicname } });
		},
	}
};
</script>

<style scopedv lang="scss">
.footer {
	width: 100%;
	height: 1rem;
	background: #fff;
	position: fixed;
	bottom: 0;
	left: 0;
	display: flex;
	justify-content: space-between;
	div {
		margin: auto 0;
		img {
			width: 0.8rem;
			border-radius: 50%;
		}
		i {
			font-size: 0.6rem;
			display: inline-block;
			width: 100%;
			height: 100%;
		}
	}
}
.demo {
	text-align: center;
	margin-top: 100px;
	@-webkit-keyframes rotation {
		from {
			-webkit-transform: rotate(0deg);
		}
		to {
			-webkit-transform: rotate(360deg);
		}
	}
	.an {
		-webkit-transform: rotate(360deg);

		animation: rotation 9s linear infinite;

		-moz-animation: rotation 9s linear infinite;

		-webkit-animation: rotation 9s linear infinite;

		-o-animation: rotation 9s linear infinite;
	}
}
</style>
