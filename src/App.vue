<template>
  <div id="app">
	  <Header>头部</Header>
   <router-view/>
   <Index></Index>
  <!-- <Footer>底部</Footer> -->
   
  </div>
</template>

<script>
	import Footer from './views/public/footer.vue'
	import Header from './views/public/header.vue'
	import Index from './views/default/index.vue'
	export default{
		components:{
			Footer,Header,Index
		}
	}

</script>
<style lang="scss">
#app{
	
}
</style>
