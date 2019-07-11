<template>
	<div class="index">
		<!-- 轮播图 -->
		<Indexlbt></Indexlbt>
		<!-- 发现页面的导航栏 -->
		<Indexnav></Indexnav>
		<!-- 推荐歌单 -->
		<Tjmusiclist></Tjmusiclist>
		<!--  新歌-->
		<Newmusiclist></Newmusiclist>
	</div>
</template>

<script>
import Indexlbt from './../public/indexlbt.vue';
import Indexnav from './indexnav.vue';
import Tjmusiclist from './tjmusiclist.vue';
import Newmusiclist from './newmusic.vue';
export default {
	components: {
		Indexlbt,
		Indexnav,
		Tjmusiclist,
		Newmusiclist
	}
};
</script>
<style scoped lang="scss">
.index {
	width: 96%;
	margin: 0 auto;
}
</style>
