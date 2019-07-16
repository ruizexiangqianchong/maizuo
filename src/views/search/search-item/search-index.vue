<template>
	<div class="hot-warp">
		<div class="hot"><div class="hot-title">热搜榜</div>
		<ul class="hot-mian">
			<li v-for="(t,index) in hotlist" class="hot-item">
				<div class="ranking" :class="{activeRank:index<3}">
					{{index+1}}
				</div>
				<div class="hot-nr">
					<div class="hot-nr-title">
						<span class="searchWord" :class="{topSearchWord:index<3}">{{t.searchWord}}</span><span class="score">{{t.score}}</span> <img v-if="t.iconUrl" :src="t.iconUrl" class="iconUrl">
					</div>
					<div class="hot-nr-info">{{t.content}}</div>
				</div>
			</li>
		</ul>
		</div>
	</div>
</template>

<script>
export default {
	created() {
		this.$axios.get('/wy/search/hot/detail').then(res => {
			this.hotlist = res.data.data;
			console.log(this.hotlist);
		});
	},
	data() {
		return {
			hotlist: ''
		};
	},
};
</script>

<style scoped>
	.hot-nr-info{
		height: 30%;
		font-size: 0.22rem;
		color: #999;
	}
	.iconUrl{
		display: inline-block;
		height: 0.25rem;
		margin-left: 0.3rem;
		
		}
	.score{
		font-size: 0.22rem;
		color: #999;
		height: 100%;
		display: inline-block;
		line-height:0.84rem;
		margin-left: 0.2rem;
	}
	.topSearchWord{
		font-weight: 700;
	}
	.searchWord{
		font-size: 0.3rem;
		height: 100%;
		display: inline-block;
		line-height:0.84rem;
	}
	.hot-nr-title{
		height: 70%;
	}
	.hot-nr{
		width: 85%;
		height: 100%;
		float: left;
	}
	.ranking{
		width: 15%;
		height: 100%;
		line-height: 1.2rem;
		float: left;
		font-size: 0.32rem;
		color: #666666;
		text-align: center;
	}
	.activeRank{
		color: red;
	}
	.hot-mian{
		padding: 0 0.2rem;
		
	}
	.hot-item{
		height: 1.2rem;
	}
.hot-title {
	height: 0.6rem;
	font-size: 0.3rem;
	padding: 0 0.2rem;
	margin-top: 0.4rem;
}
</style>
