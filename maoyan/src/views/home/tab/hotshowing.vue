<template>
	<div>
		<div class="content">
			<ul class="content-box" id="list" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
				<li v-for="(prop, index) in list" class="content-item">
					<img :src="prop.poster" class="index-img" />
					<div class="content-item-right">
						<p class="title">
							<span>{{ prop.name }}</span>
							<span class="type">{{ prop.item.name }}</span>
						</p>
						<p class="evaluate">
							<span class="grade-left" v-if="prop.grade">观众评价:</span>
							<span class="grade-right" v-if="prop.grade">{{ prop.grade }}</span>
						</p>
						<p class="protagonist">
							<span class="director">主演:{{ prop.director }}</span>
						</p>
						<p class="area-data">
							<span class="area">{{ prop.nation }}</span>
							<span class="area">{{ prop.runtime }}分钟</span>
						</p>
					</div>
					<div class="buy" @click="goDetail(prop.filmId)">购票</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import { InfiniteScroll } from 'mint-ui';
import { mapState } from 'vuex';
import { Toast } from 'mint-ui';
export default {
	methods: {
		loadMore() {
			this.dataNum++;
			this.getdata();
		},
		goDetail(id) {
			this.$router.push({ name: 'page', params: { id: id } });
		},
		getdata() {
			if (this.dataNum > 8) {
				Toast({
					message: '已经到头了!!!!',
					position: 'bottom',
					duration: 2000
				});
				return;
			}
			this.loading = true;
			this.$axios
				.get(`/dl/gateway?cityId=110100&pageNum=${this.dataNum}&pageSize=10&type=1&k=8959214`, {
					headers: {
						'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"156197501364424510562"}',
						'X-Host': 'mall.film-ticket.film.list'
					}
				})
				.then(res => {
					this.$store.state.hotdata = this.$store.state.hotdata.concat(res.data.data.films); //数组的连接，上一次的数据和这一次的数据连接到一块去
					this.loading = false;
				});
		}
	},
	created() {
		this.getdata();
	},
	computed: {
		list() {
			return this.$store.state.hotdata;
		}
	},
	data() {
		return {
			loading: false, //表示可以发请求  true 表示不可以发请求
			dataNum: 1
		};
	}
};
</script>

<style scoped>
.content {
	
	width: 100%;
	height: auto;
}
.content-box {
	list-style: none;
	padding: 0;
	margin-left: 0.3rem;
	margin-bottom: 0;
	margin-top: 0;
	
	
}
.content-item {
	padding: 0.15rem 0.15rem 0.15rem 0;
	height: 1.8rem;
	position: relative;
}
.index-img {
	width: 1.32rem;
	height: 1.8rem;
	display: inline-block;
}
.content-item-right {
	width: 3rem;
	padding: 0 0.2rem;
	display: inline-block;
}
.title {
	color: #191a1b;
	font-size: 0.32rem;
	height: 0.44rem;
	line-height: 0.44rem;
	margin-right: 0.1rem;
	text-overflow: ellipsis;
	white-space: nowrap;
	vertical-align: middle;
	width: 100%;
}
.type {
	font-size: 0.18rem;
	color: #fff;
	background-color: #d2d6dc;
	height: 0.28rem;
	line-height: 0.28rem;
	padding: 0 0.04rem;
	border-radius: 0.04rem;
	display: inline-block;
	vertical-align: middle;
	margin-left: 0.1rem;
	margin-bottom: 0.06rem;
}
.evaluate {
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	width: 100%;
	height: 0.42rem;
}
.grade-left {
	font-size: 0.26rem;
	margin-top: 0.08rem;
	color: #797d82;
}
.grade-right {
	color: #ffb232;
	font-size: 0.28rem;
}
.protagonist {
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	width: 100%;
	height: 0.42rem;
}
.director {
	font-size: 0.26rem;
	margin-top: 0.08rem;
	color: #797d82;
}
.area-data {
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	width: 100%;
	height: 0.42rem;
}
.area {
	font-size: 0.26rem;
	margin-top: 0.08rem;
	color: #797d82;
}
.buy {
	line-height: 0.5rem;
	height: 0.5rem;
	width: 0.6rem;
	color: #ff5f16;
	font-size: 0.26rem;
	text-align: center;
	border: 0.02rem #ff5f16 solid;
	border-radius: 0.04rem;
	position: absolute;
	top: 50%;
	right: 0.5rem;
	cursor: pointer;
}
</style>
