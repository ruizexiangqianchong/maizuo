<template>
	<div>
		<div class="top">
			<div class="goback" @click="goback">×</div>
			<div class="title">当前城市</div>
			<div class="top-input"><input type="text" class="input" placeholder="输入城市名或拼音" /></div>
		</div>
		<div class="hot">
			<div class="hotcity" ref="city">
				<div class="hotcity-title">热门城市</div>
				<ul class="hotcity-content">
					<li v-for="(t, index) in hot" class="hotcity-item">{{ t.name }}</li>
				</ul>
			</div>
		</div>
		<!-- 城市列表 -->
		<div class="box">
			<div v-for="(t, index) in str"><!-- 循环字符串abc -->
				<p class="fenge" :id="t.toUpperCase()" :ref="t.toUpperCase()" >{{ t }}</p>
				<ul>
					<li v-for="item in getdata(t)" class="item">{{ item.name }}</li>
				</ul> <!-- 循环调用函数，每次带入一个不同参数，函数返回出不同数组 -->
			</div>
		</div>
		<!-- 城市列表-结束 -->

		<ul class="indexing">
			<li v-for="prop in Upstr">
				<span @click="indexs(prop)">{{ prop }}</span>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	data() {
		return {
			datalist: [],
			str: 'abcdefghjklmnpqrstwxyz'
		};
	},
	computed: {
		Upstr() {
			return this.str.toUpperCase();
		},
		hot() {
			return (this.hotarr = this.datalist.filter(t => {
				return t.isHot === 1;
			}));
		}
	},
	created() {
		this.$axios
			.get('/dl/gateway?k=7601774', {
				headers: {
					'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"156197501364424510562"}',
					'X-Host': 'mall.film-ticket.city.list'
				}
			})
			.then(res => {
				let compare = (val1, val2) => {
					return val1.pinyin.toLowerCase() > val2.pinyin.toLowerCase();
				};
				this.datalist = res.data.data.cities.sort(compare);
				console.log(this.datalist);
			});
	},
	methods: {
		indexs(num){
			 document.documentElement.scrollTop =this.$refs[num][0].offsetTop
		},
		getdata(num) {
			return (this.arr = this.datalist.filter(t => {
				return t.pinyin[0] === num;
			}));
		},
		goback() {
			this.$router.go(-1);
		}
	}
};
</script>

<style scoped>
.hotcity-item:nth-child(4) {
	margin-top: 0.4rem;
}
.hotcity-item {
	width: 2rem;
	text-align: center;
	padding-bottom: 0.3rem;
	box-sizing: border-box;
	float: left;
	height: 0.6rem;
	background-color: #f4f4f4;
	line-height: 0.6rem;
	border-radius: 3px;
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
	margin: 0 0.15rem;
	font-size: 0.28rem;
	margin-top: 0.1rem;
	color: #191a1b;
}
.hotcity-content {
	display: flex;
	justify-content: flex-start;
	flex-wrap: wrap;
	align-content: center;
	list-style: none;
	padding: 0;
	margin: 0;
}
.hotcity-title {
	font-size: 0.24rem;
	color: #797d82;
	margin-bottom: 0.2rem;
}
.hotcity {
}
.hot {
	margin-top: 1.87rem;
	background-color: #fff;
	padding-left: 0.3rem;
	padding-top: 0.3rem;
}
.input {
	width: 92%;
	height: 100%;
	border: none;
}
.top-input {
	height: 0.6rem;
	width: 100%;
	background: #f4f4f4;
	padding: 0.19rem 0.3rem;
	position: fixed;
	top: 0.88rem;
}
.indexing a {
	text-decoration: none;
	color: #000000;
}
.indexing {
	position: fixed;
	z-index: 10;
	top: 30%;
	right: 0.1rem;
	list-style: none;
}
.item {
	color: #191a1b;
	height: 0.88rem;
	line-height: 0.88rem;
	padding-left: 0.3rem;
	margin: 0.14rem 0;
}
.fenge {
	background-color: #f4f4f4;
	color: #797d82;
	padding: 0 0 0 0.3rem;
	height: 0.6rem;
	line-height: 0.6rem;
	box-sizing: border-box;
	font-size: 0.34rem;
}
.box {
	height: auto;
	width: 100%;
	margin-top: 0.4rem;
}
.top {
	overflow: hidden;
	height: auto;
	background: #ffffff;
	position: fixed;
	width: 100%;
	top: 0;
}
.title {
	width: 100%;
	height: 0.88rem;
	text-align: center;
	line-height: 0.88rem;
	position: fixed;
	overflow: hidden;
	background: #ffffff;
}
.goback {
	position: fixed;
	font-size: 0.7rem;
	left: 0.3rem;
	z-index: 10;
}
</style>
