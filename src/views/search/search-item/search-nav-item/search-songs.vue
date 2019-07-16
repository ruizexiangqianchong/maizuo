<template>
	<div style="padding: 0 0.3rem;">
		<songs :keyWorld="keyWorld" :num="30"></songs>
	</div>
</template>

<script>
	import songs from './songs.vue'
	export default{
		components:{
		  songs
		},
		created() {
			this.keyWorld = this.$route.query.keyWorld;
		},
		watch: {
			$route: {
				handler(n, o) {
					this.keyWorld = n.query.keyWorld;
					console.log(n.query)
				},
				deep: true
			}
		},
		data() {
			return {
				keyWorld: '',
			};
		},
	}
</script>

<style>
</style>
