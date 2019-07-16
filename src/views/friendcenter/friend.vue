<template>
	<div>
		<friendNav></friendNav>
		<div>
			<ul v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
				
				<li v-for="(t, index) in friendData" class="fri-item">
					<div class="avatar-warp"><img :src="t.user.avatarUrl" class="avatar" /></div>
					<div class="fri-item-right">
						<div class="fri-title">
							<span class="nickname">{{ t.user.nickname }}</span>
							<span class="share">分享视频</span>
							<p class="data">{{ t.showTime | formatYear }}{{ t.showTime | formatMonth }}{{ t.showTime | formatYearDate }}</p>
						</div>
						<div class="videos" ><video :src="arr[index]" :poster="JSON.parse(t.json).video.coverUrl" width="300px" controls="controls" class="vie"></video></div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import friendNav from './friend-nav.vue';
import { InfiniteScroll } from 'mint-ui';
export default {
	
	created() {
		//this.getdata();
	},
	components: {
		friendNav
	},
	data() {
		return {
			Uid: '',
			userData: '',
			friendData: '',
			vidUrl: '',
			arr: [],
			lasttime:""
		};
	},
	methods: {
		getdata() {
			this.userData = JSON.parse(sessionStorage.getItem('user'));
			this.Uid = this.userData.data.account.id;
			this.$axios
				.get(`/wy/event?pagesize=3&lasttime=${this.lasttime}`)
				.then(res => {
					this.lasttime=res.data.lasttime
					this.friendData = [...this.friendData,...res.data.event];
					// Array.prototype.concat.apply(this.friendData,res.data.event) 
					// console.log(JSON.parse(this.friendData[0].json));
					// console.log(JSON.parse(res.data.event[0].json));
				})
				.then(() => {
					for (let i = 0; i < this.friendData.length; i++) {
						this.getvideo(JSON.parse(this.friendData[i].json).video.videoId);
					}
				});
		},
		getvideo(id) {
			console.log(id)
			this.arr=[];
			this.$axios.get(`/wy/video/url?id=${id}`).then(res => {
				this.arr.push(res.data.urls[0].url);
				// console.log(this.vidUrl)
				console.log(this.arr)
			});
		},
		loadMore() {
		  this.loading = true;
		  console.log(999)
		  this.getdata()
		  
		},
	}
};
</script>

<style scoped>
.vie {
	height: 100%;
	width: 100%;
}
.data {
	margin-top: 0.1rem;
	font-size: 0.22rem;
	color: #999999;
}
.share {
	color: #666;
	margin-left: 5px;
}
.nickname {
	color: cornflowerblue;
	font-size: 0.26rem;
}
.fri-title {
	height: 20%;
}
.fri-item-right {
	height: 100%;
	width: 80%;
	float: left;
}
.avatar {
	height: 0.8rem;
	border-radius: 50%;
	vertical-align: middle;
	display: inline-block;
}
.avatar-warp {
	height: 100%;
	width: 20%;
	float: left;
}
.fri-item {
	padding: 0.3rem 0.3rem 0.16rem 0.3rem;
	height: 35vh;
	border-bottom: 1px solid #f5f2f0;
}
</style>
