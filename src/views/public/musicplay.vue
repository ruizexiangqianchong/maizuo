<template>
	<div>
		<div class="musicplay-kj" :style="{ backgroundImage: 'url(' + musicimgsrc + ')' }"></div>
		<div class="musicplay-kj-bb"></div>
		<div class="musicplay">
			<div class="musicplay-header">
				<div class="musicplay-header-back" @touchstart="goback" style="margin:0  0.2rem;"><span class="iconfont icon-houtui"></span></div>
				<div class="musicplay-header-jshao">
					<h3>{{ musicname }}</h3>
				</div>
				<div class="musicplay-header-search">
					<span class="iconfont icon-yingyong1"></span>
					<span class="iconfont icon-z-list-copy" style="font-weight: 800;"></span>
				</div>
			</div>
			<div class="musicplay-rotate" @click="hidelabel()">
				<div class="demo democlick" v-show="bool"><a href="javascript:viod(0)"><img :src="musicimgsrc" alt="" :class="{ an: !tool }" /></a></div>
				<div class="musicplay-lyric" v-show="!bool">
					<ul>
						<li v-for="item in lyric">{{ item }}</li>
					</ul>
				</div>
			</div>
			<div class="musicplay-text">
				<ul>
					<li><i class="iconfont icon-xin"></i></li>
					<li><i class="iconfont icon-xiazai"></i></li>
					<li><i class="iconfont icon-ttpodicon"></i></li>
					<li><i class="iconfont icon-pinglun"></i></li>
					<li><i class="iconfont icon-fenxiang"></i></li>
				</ul>
			</div>
			
			<div class="musicplay-play">
				<div class="musicplay-time">
					<div>00.00</div>
					<div class="musicplay-time-bx">
						<div></div>
					</div>
					<div>03.20</div>
				</div>
				<ul>
					<li @touchstart.stop="xunhuan()"><i class="iconfont" :class="{'icon-danquxunhuan':hool,'icon-icon-test':!hool}"></i></li>
					<li><i class="iconfont icon-prev"></i></li>
					<li @touchstart.stop="musicplay()"><i class="iconfont" :class="{ 'icon-zanting': !tool, 'icon-bofang1': tool }" style="font-size: 0.8rem;"></i></i></li>
					<li ><i class="iconfont icon-prev1"></i></li>
					<li><i class="iconfont icon-gavin-copy"></i></li>
				</ul>
				<audio id="musicplayaudio" autoplay="autoplay" :loop="hool"><source :src="list[0].url" type="audio/mpeg" /></audio>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			musicid: '',
			musicimgsrc: '',
			//musicauthor: '',
			musicname: '',
			musictime:'',
			list: [],
			lyric: [],
			bool: true,
			tool:false,
			hool:true
		};
	},
	created() {
		this.getid(), this.getdata(this.musicid);
	},
	mounted() {
		this.gettime()
	},
	methods: {
		getdata(id) {
			this.$axios.get(`/wy/song/url?id=${id}`).then(res => {
				this.list = res.data.data;
			});
			this.$axios.get(`/wy/lyric?id=${id}`).then(res => {
				let str = res.data.tlyric.lyric.split('\n');
				this.lyric = str;
			});
		},
		goback() {
			this.$router.go(-1);
		},
		getid() {
			this.musicid = this.$route.query.id;
			this.musicimgsrc = this.$route.query.img;
			//this.musicauthor = this.$route.query.name;
			this.musicname = this.$route.query.musicname;
		},
		hidelabel() {
			this.bool = !this.bool;
		},
		xunhuan(){
			this.hool=!this.hool;
		},
		musicplay(){
			this.tool = !this.tool;
			this.playstop(this.tool);
		},
		playstop(tool){
			let musicplayaudio=document.getElementById("musicplayaudio")
			//console.log(musicplayaudio.duration)
			if(tool){
				musicplayaudio.pause()
			}else{
				musicplayaudio.play()
			}	
		},
		gettime(){
			let musicplayaudio=document.getElementById("musicplayaudio")
			this.musictime=parseInt(musicplayaudio.duration/60)+"."+parseInt(musicplayaudio.duration%60)
			console.log(this.musictime)
		}
	}
};
</script>

<style lang="scss" scoped>
.musicplay-kj {
	width: 100%;
	position: fixed;
	z-index: 10;
	top: 0;
	//background: #625349;
	background-size: 200%;
	background-repeat: no-repeat;
	//background-position-x:0 ;
	//background-position-Y:0 ;
	height: 100%;
	filter: blur(120px);
}
.musicplay-kj-bb {
	width: 100%;
	position: fixed;
	z-index: 2;
	height: 100%;
	top: 0;
	left: 0;
	background: #554E49;
}
.musicplay {
	left: 0;
	width: 100%;
	position: absolute;
	z-index: 93;
	top: 0;
	//background: #625349;
	//background-size: 200%;
	//background-repeat:no-repeat;
	//background-position-x:0 ;
	//background-position-Y:0 ;
	height: 100%;
}
.musicplay-header {
	display: inline-block;
}
.musicplay-header {
	color: #fff;
	width: 100%;
	justify-content: space-between;
	display: flex;
	position: fixed;
	top: 0;
	height: 1rem;
	line-height: 1rem;
	.iconfont {
		font-size: 0.6rem;
	}
}
.musicplayeader-back {
	width: 0.8rem;
}
.icon-houtui {
	display: block;
	width: 80%;
	margin: auto 0;
}
.musicplay-header-jshao {
	width: 80%;
}
.musicplay-header-jshao h3 {
	margin: 0;
	display: inline-block;
	height: 0.8rem;
}
.musicplay-header-jshao p {
	display: inline-block;
	font-size: 0.2rem;
	width: 3rem;
	text-overflow: ellipsis;
	color: #7d7168;
	line-height: 0;
}
.musicplay-header-search {
	span {
		font-size: 0.6rem;
		margin-left: 0.2rem;
	}
}
.musicplay-rotate {
	top: 1rem;
	width: 100%;
	position: relative;
	height: 9rem;

	.demo {
		background: #262627;
		width: 6rem;
		height: 6rem;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		margin: auto;
		text-align: center;
		border-radius: 50%;
		border: 2px solid #6d6a6b;
		-webkit-transform-style: preserve-3d;
		/*设置内嵌的元素在 3D 空间如何呈现：保留 3D*/
		-webkit-backface-visibility: hidden;
		/*（设置进行转换的元素的背面在面对用户时是否可见：隐藏）*/
		img {
			width: 80%;
			border-radius: 50%;
			display: inline-block;
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			margin: auto;
			text-align: center;
		}
	}
.democlick {
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
}
.musicplay-text {
	width: 96%;
	left: 0;
	right: 0;
	margin: auto;
	margin-bottom: 0.4rem;
	position: fixed;
	bottom: 1rem;
	height: 1rem;
	ul {
		display: flex;
		justify-content: space-between;
		li {
			text-align: center;
			flex: 1;
			i {
				font-size: 0.4rem;
				color: #fff;
			}
		}
	}
}
.musicplay-lyric {
	width: 100%;
	text-align: center;
	margin: auto;
	height: 10rem;
	overflow: hidden;
	ul {
		overflow: auto;
		height: 100%;
		li {
			height: 0.8rem;
			line-height: 0.8rem;
		}
	}
}
.musicplay-play {
	position: fixed;
	left: 0;
	bottom: 0;
	width: 100%;
	width: 100%;
	height: 1.5rem;
	line-height: 1.5rem;
	ul {
		justify-content: space-between;
		display: flex;
		margin: auto 0;

		li {
			text-align: center;
			flex: 1;
			i{
				font-size: 0.6rem;
				color: #fff;
			}
		}
	}
	audio {
		width: 100%;
		source {
			background: none;
		}
	}
	.musicplay-time{
		width: 90%;
		position: absolute;
		justify-content: space-between;
		display: flex;
		line-height: 0;
		font-size: 0.2rem;
		color: #fff;
		right: 0;
		left: 0;
		margin: auto;
		.musicplay-time-bx{
			height: 2px;
			flex: 1;
			background: #847770;
			margin: 0 0.4rem;
			margin-bottom: 3px;
			div{
				width: 4px;
				height: 4px;
				background: #fff;
				position: absolute;
				border-radius: 50%;
			}
		}
	}
}
</style>
