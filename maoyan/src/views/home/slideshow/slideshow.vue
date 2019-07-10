<template>
	<div class="swiper-container">
		<div class="swiper-wrapper">
			<div class="swiper-slide" v-for="t in banner"><img :src="t.imgUrl" class="banner-img"></div>
		</div>
		<!-- 如果需要分页器 -->
		<div class="swiper-pagination"></div>
	</div>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.css';
export default {
	data() {
		return {
			banner:[]
		};
	},
	created() {
		this.$axios
			.get('/dl/gateway?type=2&cityId=110100&k=2130781', {
				headers: {
					'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"156197501364424510562"}',
					'X-Host': 'mall.cfg.common-banner'
				}
			}).then((res)=>{
				console.log(res)
				this.banner=res.data.data
			})
	},
watch:{
	banner(){
		this.$nextTick(function(){
					var mySwiper = new Swiper('.swiper-container', {
				loop: true, // 循环模式选项
				autoplay: {
					delay: 3000,
					stopOnLastSlide: false,
					disableOnInteraction: true
				},
				// 如果需要分页器
				pagination: {
					el: '.swiper-pagination'
				}
			});
		})
	}
},

};
</script>

<style scoped>
.swiper-container {
	width: 100%;
	height: 100%;
}
.swiper-wrapper {
	width: 100%;
	height: 100%;
}
.swiper-slide {
	width: 100%;
	height: 100%;
}
.banner-img{
	width: 100%;
	height: 100%;
}
</style>
