<template>
	<div>
		<div class="area" ref="area" @click="clickHandler">北京</div>
		<div class="hearder" v-if="top">电影</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			top: false
		};
	},
	mounted() {
		window.addEventListener('scroll', this.handleScroll);
	},
	methods: {
		clickHandler(){
			this.$router.push("/area")
		},
		handleScroll() {
			var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
			if (scrollTop > 234) {
				
				this.top = true;
				//console.log(this.$refs)
				this.$refs.area.style.position="fixed"
				this.$refs.area.style.background="#fff"
				this.$parent.$refs.tab.style.position="fixed"
				this.$refs.area.style.color="#191a1b"
			} else {
				this.top = false;
				this.$refs.area.style.position="absolute"
				this.$parent.$refs.tab.style.position="static"
				this.$refs.area.style.background="rgba(0, 0, 0, 0.2)"
				this.$refs.area.style.color="#fff"
			}
		}
	}
};
</script>

<style scoped>
.area {
	top: 0.15rem;
	left: 0.14rem;
	position: absolute;
	display: inline-block;
	background: rgba(0, 0, 0, 0.2);
	height: 0.6rem;
	line-height: 0.6rem;
	border-radius: 0.2rem;
	text-align: center;
	padding: 0 0.1rem;
	color: #fff;
	z-index: 10;
	font-size: 0.24rem;
	width: 0.6rem;
}
.hearder {
	width: 100%;
	height: 0.8rem;
	background: #ffffff;
	z-index: 5;
	line-height: 0.8rem;
	text-align: center;
	color: #191a1b;
	font-size: 0.3rem;
	position: fixed;
}
</style>
