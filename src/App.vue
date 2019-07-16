<template>
  <div id="app">
	  <Header :u="u">头部</Header>
	  <transition name="slide-fade" mode="out-in">
   <router-view @child="receive"/>
   </transition>
   <Footer>底部</Footer>
  </div>
</template>

<script>
	import Footer from './views/public/footer.vue'
	import Header from './views/public/header.vue'
	export default{
		data(){
			return {
				u:''
			}
		},
		components:{
			Footer,Header
		},
		methods:{
			receive(p){
				this.u=p
			}
		}
		
	}
</script>
<style lang="scss">
#app{
	position: relative;
	height: 100%;
}
	.slide-fade-enter-active {
		transition: all 0.3s ease;
	}
	.slide-fade-leave-active {
		transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
	}
	.slide-fade-enter, .slide-fade-leave-to
	{
		transform: translateX(-600px);
		opacity: 0;
	}
</style>
