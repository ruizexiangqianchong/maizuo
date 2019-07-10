<template>
	<div>
		<div class="top-nav">
			<img
				src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAMAAADWZboaAAAAt1BMVEVHcEz///////////////////////////////////////////////////////////////////////////////////97e3saGxyIiYnW1tYdHh9UVVUpKiulpaXLy8s6OzyysrIiIyPx8fEeHyC/v7/5+fklJihCQ0Ntb28bHB1hYWKXl5c0NTZLS0xAQUI4ODk3ODjh4eHr6+s2Nzfq6uptbm5gYGIbHB39/f2VlZdLS0wzNDUZGhs8UYRWAAAAPHRSTlMAGHpLE3cKgEdgVnJfNBZ+cBx9A28js/6sjPvK7p+Q3pn1g/iUgfLYuvzCpeTR2eHiiIXihrvD/YCl0uTUXbEtAAABd0lEQVRIx91W13KDQAw0xnCHARuDe+/dKY7T9f/flTzghCLdMaMXj/eRnZ0T0qqUSveBim96gRWGVuCZfqW4zpCuSMGVRiFhwxEInIY+0qogUFXHHcm6IFGXEa20HaGEY1PKWlNo0KzhylZZaFFuoW8WUP5qkXdtMtrnx4dkzLn/jcgMXY7wlMpVNs+SUs4nMOylvsiME6h6rjawHmfqm/YG6aETzJY5X6V8SykHsJjmvyb9TOVoD/0R5qpElxHKLewOKGHo0tuGThdn/pPsony3A20iHPevMih92MGW9OO1Pj5Gjvqwp63sx1IT4aYLGCi6wIylXp5azuCkaiAvlgY5ZryGzUolDWKplSV6Q5jMlW1rxdIwS7zA8azu+JCWfl+KSRkBM9KEF+fro0BxGJagjPimNyJp/1et/RlNx2l1esC8f2oGDGOscYYpY4RzFgdjXSmW5Fm3JBmrmXMQcM4QzvHDObk4hx7nvGQdtaxTmnXA3zR+AH8JUdNL967cAAAAAElFTkSuQmCC"
				class="goback"
				@click="goback"
			/>
		</div>
		<div class="content">
			<img :src="data.poster" class="banner" />
			<p class="content-name">
				{{ data.name }}
				<!-- <span class="content-type">{{ data.filmType.name }}</span> -->
				<span class="grade">
					{{ data.grade }}
					<span>分</span>
				</span>
			</p>
			<p class="content-genre">{{ data.category }}</p>
			<p class="content-data">2019-06-21上映</p>
			<p class="area">
				<span class="area-item">{{ data.nation }}</span>
				<span class="area-item">{{ data.runtime }}分钟</span>
			</p>
			<div class="plot">{{ data.synopsis }}</div>
		</div>
	</div>
</template>

<script>
export default {
	methods: {
		goback() {
			this.$router.go(-1);
		}
	},
	created() {
		this.id = this.$route.params.id;
		this.$axios
			.get('/dl/gateway?filmId=' + this.id + '&k=4190536', {
				headers: {
					'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"156197501364424510562"}',
					'X-Host': 'mall.film-ticket.film.info'
				}
			})
			.then(res => {
				this.data = res.data.data.film;
				console.log(this.data);
			});
	},
	data() {
		return {
			id: '',
			data: ''
		};
	}
};
</script>

<style scoped>
.banner {
	width: 100%;
}
.top-nav {
	position: fixed;
	width: 100%;
	overflow: hidden;
	height: 0.88rem;
}
.goback {
	width: 0.6rem;
	color: transparent;
	height: 0.6rem;
	position: absolute;
	top: 0.1rem;
	left: 0.1rem;
}
.content-name {
	font-size: 0.36rem;
	height: 0.54rem;
	overflow: hidden;
}
.content-type {
	font-size: 0.18rem;
	color: #fff;
	background-color: #d2d6dc;
	height: 0.28rem;
	line-height: 0.28rem;
	padding: 0 0.04rem;
	border-radius: 0.04rem;
	display: inline-block;
	margin-bottom: 0.1rem;
	margin-left: 0.1rem;
	vertical-align: middle;
}
.grade {
	float: right;
	color: #ffb232;
	font-style: italic;
}
.grade span {
	font-size: 0.24rem;
}
.content-genre {
	font-size: 0.26rem;
	color: #797d82;
	margin-top: 0.08rem;
}
.content-data {
	font-size: 0.26rem;
	color: #797d82;
	margin-top: 0.08rem;
}
.area {
	font-size: 0.26rem;
	color: #797d82;
	margin-top: 0.08rem;
}
.area-item {
	height: 0.32rem;
	width: auto;
	line-height: 0.32rem;
	display: inline-block;
}
.area-item:nth-child(1) {
	padding-right: 0.1rem;
	border-right: 1px #797d82 solid;
}
.area-item:nth-child(2) {
	padding-left: 0.1rem;
}
.plot {
	height: 0.76rem;
	overflow: hidden;
	margin-top: 0.24rem;
	font-size: 0.26rem;
	color: #797d82;
}
</style>
