<template>
	<div id="app">
		<transition name="fade" mode="out-in"><router-view /></transition>
	</div>
</template>

<script>
export default {
	components: {}
};
</script>
<style>
	#app{
		height: auto
	}
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
	opacity: 0;
}
</style>
