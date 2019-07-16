<template>
	<div style="padding: 0 0.3rem;">
		<songs :keyWorld="keyWorld" :num="5"></songs>
		<playlist :keyWorld="keyWorld" :num="5"></playlist>
	</div>
</template>

<script>
import songs from './songs.vue';
import playlist from './playsList.vue';
export default {
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
			songsData: ''
		};
	},
	components: {
		songs,
		playlist
	}
};
</script>

<style scoped>
.songsName {
	font-size: 0.32rem;
}
.songs-t {
	height: 1.2rem;
}
.songs-info {
	width: 80%;
}
</style>
