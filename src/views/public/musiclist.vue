<template>
	<div class="musiclist">
		<!-- 这是一个异步组件用reout-link   直接跳转 -->
		<!-- 这是歌单列表 -->
		<div class="musiclist-header">
			<div class="musiclist-header-back" @touchstart.stop.prevent="goback"><span class="iconfont icon-houtui"></span></div>
			<div class="musiclist-header-jshao">
				<h3>歌单</h3>
				<p>{{ list.playlist.description }}</p>
			</div>
			<div class="musiclist-header-search">
				<span class="iconfont icon-yingyong1"></span>
				<span class="iconfont icon-z-list-copy" style="font-weight: 800;"></span>
			</div>
		</div>
		<div style="height: 1.0rem;background: #625349;"></div>
		<div class="musiclist-title">
			<div class="musiclist-title-img">
				<div>
					<img :src="list.playlist.coverImgUrl" alt="" />
					<p>
						<i class="iconfont icon-kongxinsanjiao-first"></i>
						<span>
							<b>{{ parseInt(list.playlist.playCount / 10000) }}</b>
							万
						</span>
					</p>
				</div>
			</div>
			<div class="musiclist-title-text">
				<h3>{{ list.playlist.name }}</h3>
				<p>
					<img :src="list.playlist.creator.avatarUrl" alt="" />
					<b>{{ list.playlist.creator.nickname }}</b>
					<i class="iconfont icon-tiaozhuanqianwangyoujiantouxiangyouxiayibuxianxing"></i>
				</p>
				<h4> {{list.playlist.description}} </h4>
			</div>
		</div>
		<div class="musiclist-comment">
			<ul>
				<li @touchstart.stop="comment">
					<router-link to="#">
						<i class="iconfont icon-pinglun"></i>
						<br />
						<b>{{ list.playlist.commentCount }}</b>
					</router-link>
				</li>
				<li @touchstart.stop="comment">
					<router-link to="#">
						<i class="iconfont icon-fenxiang"></i>
						<br />
						<b>{{ list.playlist.shareCount }}</b>
					</router-link>
				</li>
				<li @touchstart.stop="comment">
					<router-link to="#">
						<i class="iconfont icon-xiazai"></i>
						<br />
						<b>下载</b>
					</router-link>
				</li>
				<li @touchstart.stop="comment">
					<router-link to="#">
						<i class="iconfont icon-duoxuan"></i>
						<br />
						<b>多选</b>
					</router-link>
				</li>
			</ul>
		</div>
		<div class="musiclist-vip">
			<div class="musiclist-vip-content">
				<i class="iconfont icon-huiyuan"></i>
				<span>会员享高品质听觉盛宴</span>
				<b>立即开通</b>
				<i class="iconfont icon-tiaozhuanqianwangyoujiantouxiangyouxiayibuxianxing" style="color: #7D7B7D;font-size: 0.38rem;"></i>
			</div>
			<div class="musiclist-lsit">
					<div class="musiclist-list-title">
						<i class="iconfont icon-bofang1"></i>
						<span>播放全部</span>
						<strong>(共<b>{{list.playlist.trackCount}}</b>首)</strong>
						<span class="musiclist-collection"><i class="iconfont icon-mui-icon-add"></i>收藏({{list.playlist.subscribedCount}})</span>
					</div>
				<div class="musiclist-list-list">
					<ul>
						<li v-for="(item,index) in list.playlist.tracks" @click="addid(item.id,item.al.picUrl,item.ar[0].name,item.name,id)">
							<div class="musiclist-sort"><b style="font-weight:300;">{{index+1}}</b> </div>
							<div class="musiclist-name">
							<b style="color: #000;font-weight: 300;">{{item.name}}</b>
							<span v-if="item.alia.length!==0">({{item.alia[0]}})</span><br>
							<strong >{{item.ar[0].name}}</strong>
							<strong style="margin-left: 0.05rem;margin-top: 0.1rem; ">-{{item.al.name}}</strong>
							</div>
							<div class="musiclist-gd">
								<i class="iconfont icon-bofang"></i>
								<i class="iconfont icon-z-list-copy" style="margin-left: 0.15rem;font-weight: 800;"></i>
							</div>
							
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			id: '',
			list: []
		};
	},
	created() {
		this.getid(), this.getdata(this.id);
	},
	methods: {
		getdata(id) {
			this.$axios.get(`/wy/playlist/detail?id=${id}`).then(res => {
				this.list = res.data;
				console.log(this.list)
			});
		},
		getid() {
			this.id=this.$route.params.id
		},
		goback() {
			this.$router.go(-1);
		},
		comment() {
			alert('功能未启用');
		},
		addid(musicid,musicimgsrc,musicauthor,musicname,musiclistid){
			let musiclist={
				musicid,musicimgsrc,musicauthor,musicname,musiclistid
			}
			localStorage.setItem("musiclist", JSON.stringify(musiclist));
			this.$router.push({name:'musicplay',query:{id:musicid,img:musicimgsrc,name:musicauthor,musicname:musicname}})
		}
	}
};
</script>

<style lang="scss" scoped>
.musiclist {
	width: 100%;
	position: absolute;
	z-index: 2;
	left: 0;
	top: 0;
	background: #625349;
}
.musiclist-header {
	display: inline-block;
	left:0;
}
.musiclist-header {
	color: #fff;
	width: 100%;
	justify-content: space-between;
	display: flex;
	position: fixed;
	top: 0;
	height: 1rem;
	background: #625349;
}
.musiclist-header div {
	margin-top: 0.2rem;
}
.musiclist-header-back {
	width: 0.8rem;
	span {
		display: inline-block;
		font-size: 0.6rem;
		width: 80%;
		margin: auto 0;
	}
}
.musiclist-header-jshao {
	width: 80%;
}
.musiclist-header-jshao p {
	font-size: 0.2rem;
	width: 3rem;
	height: 0.3rem;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	color: #7d7168;
}
.musiclist-header-search {
	span {
		font-size: 0.6rem;
		margin-left: 0.2rem;
	}
}
.musiclist-title {
	color: #fff;
	display: flex;
	background: #625349;
	.musiclist-title-img {
		width: 40%;
		div {
			position: relative;
			padding: 0.2rem;
		}
		img {
			width: 100%;
			border-radius: 0.2rem;
		}
		p {
			position: absolute;
			top: 0.3rem;
			right: 0.3rem;
		}
	}
	.musiclist-title-text {
		padding: 0.2rem;
		font-weight: 300;
		p {
			margin-top: 0.2rem;
			height: 0.5rem;
			width: 100%;
			display: flex;
			line-height: 0.5rem;
			color: #ccc9c8;
			img {
				height: 100%;
				border-radius: 50%;
			}
			b {
				margin-left: 0.2rem;
			}
			i {
				margin-left: 0.4rem;
			}
		}
		h4 {
			width: 4rem;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
			color: #7d7168;
			font-weight: 300;
		}
	}
}
.musiclist-comment {
	background: #625349;
	ul {
		display: flex;
		text-align: center;
		justify-content: space-between;
		padding-bottom: 0.2rem;

		li {
			margin: 0 auto;
			font-size: 0.32rem;
			i {
				font-size: 0.4rem;
				color: #fff;
			}
			b {
				color: #fff;
				font-weight: 300;
				font-size: 0.25rem;
			}
		}
	}
}
.musiclist-vip {
	background: #c1bfc0;
	border-radius: 0.4rem;
	.musiclist-vip-content {
		height: 1rem;
		display: flex;
		margin: 0 auto;
		width: 96%;
		text-align: center;
		justify-content: space-between;
		line-height: 1rem;
		i {
			color: #f35353;
			font-size: 0.48rem;
			margin-right: 0.2rem;
		}
		span {
			width: 65%;
			text-align: left;
		}
		b {
			font-weight: 300;
			color: #7d7b7d;
		}
	}
}
.musiclist-lsit{
	background: #fff;
	border-radius: 0.4rem;
	.musiclist-list-title{
		position: relative;
		width: 96%;
		margin: 0 auto;
		height: 1rem;
		line-height: 1rem;
		i {
			color: #f35353;
			font-size: 0.48rem;
			margin-right: 0.2rem;
		}
		.musiclist-collection{
			position: absolute;
			right: 0;
			top: 0;
			bottom: 0;
			margin:auto;
			display: inline-block;
			background: #FF3A3A;
			height: 0.8rem;
			text-align: center;
			border-radius: 0.4rem;
			width: 2rem;
			line-height:0.8rem;
			font-size: 0.2rem;
			i{
				text-align: center;
				color: #fff;
				font-size: 0.32rem;
				margin: 0;
			}
		}
	}
}
.musiclist-list-list ul li {
	display: block;
}
.musiclist-list-list{
	width: 96%;
	margin: 0 auto;
	ul{
		height: auto;
		li {
			display: flex;
			height: 1.2rem;
			justify-content: space-between;
			// line-height: 1rem;
			.musiclist-sort{
				width: 0.8rem;
				height: 100%;
				line-height: 1.4rem;
				margin-left: 0.2rem;
				color: #999999;
				font-size: 0.32rem;
				
			}
			.musiclist-name{
				margin-top: 0.2rem;
				width: 80%;
				margin: auto 0;
				b{
					
				}
				strong{
					color: #969696;
					font-size: 0.2rem;
					font-weight:300;
				}
			}
			.musiclist-gd{
				margin: auto 0;
				i{
					font-size: 0.48rem;
					color: #B6B6B6;
				}
			}
		}
	}
}
</style>
