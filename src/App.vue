<template>
  <div id="app">
	  <Header>头部</Header>
   <router-view/>
   <Footer>底部</Footer>
  </div>
</template>

<script>
	import Footer from './views/public/footer.vue'
	import Header from './views/public/header.vue'
	export default{
		components:{
			Footer,Header
		}
	}
</script>
<style lang="scss">

</style>
