<template>
  <div id="app">
	  <Header :u="u">头部</Header>
   <router-view @child="receive"/>
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
</style>
