<template>
	<div class="box">
		<top></top>
		<div class="top-banner">
			<slideshow>
				
			</slideshow>
		</div>
		<div class="home-tab" ref="tab">
			
			<router-link to='/home/hotshowing' class="tab-item"  >正在热映</router-link>
			
			<router-link to='/home/soon' class="tab-item" >即将上映</router-link>
				
		</div>
		<transition name="fade" mode="out-in"><router-view /></transition>
	</div>
</template>

<script>
import top from '../hearder/hearder.vue';
import slideshow from './slideshow/slideshow.vue'
export default {
	data() {
		return {
			flag:true
		};
	},
	components: {
		top,slideshow
	},
	methods: {
		}
	
};
</script>

<style scoped>
	a{
		text-decoration: none;
	}
	.router-link-active{
		color: #ff5f16 !important;
	}
	.box{

		height: auto;
		margin-bottom: 1rem;
		}
.top-banner {
	width: 100%;
	height: 4.62rem;
	display: block;
}
.home-tab {
	width: 100%;
	height: 1rem;
	display: flex;
	background: #FFFFFF;
	z-index: 10;
	top: 0.8rem;
}
.active {
	color: #ff5f16 !important;
}
.tab-item {
	width: 50%;
	height: 100%;
	text-align: center;
	line-height: 1rem;
	color: #191a1b;
	font-size: 0.28rem;
}
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
	opacity: 0;
}
</style>
