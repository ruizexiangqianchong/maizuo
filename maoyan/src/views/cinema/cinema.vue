<template>
	<div>
		<div class="top-warp">
			<!-- <top></top> -->
			<!-- <div class="tianchong"></div> -->
			<div class="title">电影院</div>
			<ul class="nav">
				<li v-for="(t, index) in nav" class="nav-item" @click="navclick(index)" :class="{ active: t.flag }" >
					<span ref='navs'>{{ t.text }}</span>
					<img :src="t.img1" class="nav-img" v-show="!t.flag" />
					<img :src="t.img2" class="nav-img" v-show="t.flag" />
				</li>
			</ul>
		</div>
		<!-- 影院列表 -->
		<div>
			<ul class="cinema-list">
				<li class="cinema-list-item" v-for="(t, index) in newList">
					<div class="list-left">
						<span class="cinemaname">{{ t.name }}</span>
						<p class="cinema-info">{{t.address}}</p>
					</div>
				</li>
			</ul>
		</div>
		<!-- 导航栏副页 -->
		<div v-show="wapbool">
			<ul class="quyu" v-show="nav[0].flag">
				<li v-for="(t, index) in cityProper" class="quyu-item" @click="qufen(t)">{{ t }}</li>
			</ul>
		</div>
		<!-- 导航栏副页-结束 -->
		<!-- 影院列表-结束 -->
		<div class="warp" v-show="wapbool" @click="warpclick()"></div>
	</div>
</template>

<script>
import top from '../hearder/hearder.vue';
export default {
	methods: {
		qufen(tex) {
			this.wapbool = false;
			this.nav.forEach(t => {
				t.flag = false;
			});
			this.$refs.navs[0].textContent=tex
			if (tex === '全城') {
				this.newList = this.cinemaList;
			} else {
				this.newList = this.cinemaList.filter(t => {
					return t.districtName === tex;
				});
			}
		},
		navclick(num) {
			this.wapbool = !this.wapbool;
			this.nav.forEach((t, index) => {
				if (num === index) {
					t.flag = !t.flag;
					if (t.flag) {
						this.wapbool = true;
					}
				} else {
					t.flag = false;
				}
			});
		},
		warpclick() {
			this.wapbool = false;
			this.nav.forEach(t => {
				t.flag = false;
			});
		}
	},
	components: {
		top
	},

	created() {
		this.$axios
			.get('/dl/gateway?cityId=110100&ticketFlag=1&k=679120', {
				headers: { 'X-Client-Info': `{"a":"3000","ch":"1002","v":"5.0.4","e":"156197501364424510562"}`, 'X-Host': 'mall.film-ticket.cinema.list' }
			})
			.then(res => {
				this.cinemaList = res.data.data.cinemas;
				this.cinemaList.forEach(t => {
					this.cityProper.push(t.districtName);
				});
				this.cityProper = new Set(this.cityProper);
				this.newList = this.cinemaList;
				console.log(this.cinemaList)
				this.cityProper = ['全城', ...this.cityProper];
			});
	},
	data() {
		return {
			wapbool: false,
			newList: [],
			cinemaList: [],
			cityProper: [],
			nav: [
				{
					text: '全城',
					flag: false,
					img1:
						'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAJCAMAAAAIAYw9AAAAOVBMVEVHcEwZGhsZGxsZGhskJCQaGhwbGxsZHR0ZGhsZGhsZGhsZGhsZHBwaGhsaGhwZGxsaGh0bGxsZGhsAwt9XAAAAEnRSTlMA5Z7pB2scPfrK6NJskn6fcnH7htMrAAAAVElEQVQI11XNOQKAIBAEwQEXl0NQ+/+PNfDucIIabaGbnqyHXQHKfC9zgaABVD8Xr8CQlgw5SVLKkBdJ8gmIZhGY/BUoha9qKwDEz/fJJP3y1i5GB2jVA/F2X5USAAAAAElFTkSuQmCC',
					img2:
						'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAJCAMAAAAIAYw9AAAANlBMVEVHcEz/Xxb/Xxb/Xxf/Xxb/bST/ZBv/YBn/Xxb/Xxf/Xxf/Xxb/YBb/Xxb/YBb/YBb/YRb/XxYVPc+mAAAAEXRSTlMA5Z7SygccPfpr6OmSfp9ycXeG0lYAAABPSURBVAjXVY05EsAgDMTM4Zgzif7/2RTABFTtqNCKDCwEk4OcIOVNqAcAr8tcEYgRiNfMFMCr3kCxM7NWB+o8swp0cX9hVJ08run23dz7ASR9A7q9wA9qAAAAAElFTkSuQmCC'
				},
				{
					text: 'app购票',
					flag: false,
					img1:
						'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAJCAMAAAAIAYw9AAAAOVBMVEVHcEwZGhsZGxsZGhskJCQaGhwbGxsZHR0ZGhsZGhsZGhsZGhsZHBwaGhsaGhwZGxsaGh0bGxsZGhsAwt9XAAAAEnRSTlMA5Z7pB2scPfrK6NJskn6fcnH7htMrAAAAVElEQVQI11XNOQKAIBAEwQEXl0NQ+/+PNfDucIIabaGbnqyHXQHKfC9zgaABVD8Xr8CQlgw5SVLKkBdJ8gmIZhGY/BUoha9qKwDEz/fJJP3y1i5GB2jVA/F2X5USAAAAAElFTkSuQmCC',
					img2:
						'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAJCAMAAAAIAYw9AAAANlBMVEVHcEz/Xxb/Xxb/Xxf/Xxb/bST/ZBv/YBn/Xxb/Xxf/Xxf/Xxb/YBb/Xxb/YBb/YBb/YRb/XxYVPc+mAAAAEXRSTlMA5Z7SygccPfpr6OmSfp9ycXeG0lYAAABPSURBVAjXVY05EsAgDMTM4Zgzif7/2RTABFTtqNCKDCwEk4OcIOVNqAcAr8tcEYgRiNfMFMCr3kCxM7NWB+o8swp0cX9hVJ08run23dz7ASR9A7q9wA9qAAAAAElFTkSuQmCC'
				},
				{
					text: '最近去过',
					flag: false,
					img1:
						'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAJCAMAAAAIAYw9AAAAOVBMVEVHcEwZGhsZGxsZGhskJCQaGhwbGxsZHR0ZGhsZGhsZGhsZGhsZHBwaGhsaGhwZGxsaGh0bGxsZGhsAwt9XAAAAEnRSTlMA5Z7pB2scPfrK6NJskn6fcnH7htMrAAAAVElEQVQI11XNOQKAIBAEwQEXl0NQ+/+PNfDucIIabaGbnqyHXQHKfC9zgaABVD8Xr8CQlgw5SVLKkBdJ8gmIZhGY/BUoha9qKwDEz/fJJP3y1i5GB2jVA/F2X5USAAAAAElFTkSuQmCC',
					img2:
						'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAJCAMAAAAIAYw9AAAANlBMVEVHcEz/Xxb/Xxb/Xxf/Xxb/bST/ZBv/YBn/Xxb/Xxf/Xxf/Xxb/YBb/Xxb/YBb/YBb/YRb/XxYVPc+mAAAAEXRSTlMA5Z7SygccPfpr6OmSfp9ycXeG0lYAAABPSURBVAjXVY05EsAgDMTM4Zgzif7/2RTABFTtqNCKDCwEk4OcIOVNqAcAr8tcEYgRiNfMFMCr3kCxM7NWB+o8swp0cX9hVJ08run23dz7ASR9A7q9wA9qAAAAAElFTkSuQmCC'
				}
			]
		};
	}
};
</script>

<style scoped>
	.cinema-info{
		width: 80%;
		height: auto;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
.list-left {
	width: 80%;
	height: auto;
	overflow: hidden;
}
.cinemaname {
	width: 80%;
	height: auto;
	overflow: hidden;
	display: inline-block;
	color: #191a1b;
	font-size: 0.28rem;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.quyu-item {
	font-size: 0.24rem;
	display: inline-block;
	width: 1.8rem;
	margin-bottom: 0.15rem;
	margin-left:0.15rem ;
	margin-right:0.15rem ;
	text-align: center;
	height: 0.45rem;
	line-height: 0.45rem;
	border: 1px solid rgba(210, 214, 220, 0.5);
}
.quyu {
	position: fixed;
	z-index: 10;
	top: 1.88rem;
	height: auto;
	overflow: hidden;
	padding: 0 0.45rem;
	background: #ffffff;
	display: flex;
	list-style: none;
	flex-wrap: wrap;
	
}
.top-warp {
	height: auto;
	overflow: hidden;
}
.cinema-list-item {
	margin-top: 0.4rem;
	padding-left: 0.3rem;
}
.cinema-list {
	margin-top: 1.88rem;
	list-style: none;
	height: auto;
	width: 100%;
}
.title {
	width: 100%;
	background: #ffffff;
	text-align: center;
	height: 0.88rem;
	line-height: 0.88rem;
	font-size: 0.28rem;
	position: fixed;
	z-index: 9;
}
.nav {
	margin-top: 0.88rem;
	width: 100%;
	height: 1rem;
	display: flex;
	position: fixed;
	list-style: none;
	z-index: 9;
	background: #ffffff;
}
.nav-item {
	width: 33%;
	height: 1rem;
	text-align: center;
	font-size: 0.28rem;
	line-height: 1rem;
	z-index: 9;
}
.nav-img {
	height: 0.06rem;
	width: 0.12rem;
	display: inline;
	line-height: 1rem;
	vertical-align: middle;
	margin-left: 0.06rem;
}
.tianchong {
	padding-top: 1.88rem;
}
.active {
	color: #ff5f16 !important;
}
.warp {
	height: 100vh;
	width: 100%;
	background: rgba(0, 0, 0, 0.6);
	position: fixed;
	top: 0;
	z-index: 5;
}
</style>
