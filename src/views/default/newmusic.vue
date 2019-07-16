<template>
	<div>
		这是新歌页面
	</div>
</template>

<script>
export default {
	data() {
		return {
			list: []
		};
	},
	created() {
		this.$axios.get('/wy/personalized/newsong').then(res => {
			let lulist = res.data.result.sort();
			console.log(654854)
		});
	}
};
</script>
<style></style>
