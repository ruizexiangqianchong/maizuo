<template>
	<div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in list">
			<a href="javascript:void(0)"><img :src="item.pic" /></a>
        </div>
        
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
   
</div>
</template>
<script>
import Swiper from 'swiper'
import "swiper/dist/css/swiper.css"
export default {
	data(){
		return {
			list:[]
		}
	},
created() {
		this.$axios.get('/wy/banner?type=2').then(res => {
			this.list=res.data.banners;
		});
	},
	mounted(){
		 
	},
	watch:{
		list(){  //保证数据变了   保证dom准备好了
			//nextTick 延迟回调函数的执行，直到dom就绪
			this.$nextTick(()=>{
					var mySwiper = new Swiper ('.swiper-container', {
				    loop: true, // 循环模式选项
				    autoplay: {
				    delay: 3000,    
				     disableOnInteraction: false,
				    },
				    // 如果需要分页器
				    pagination: {
				      el: '.swiper-pagination',
				    }
	     		})      
			})
			  
		}
	}
}

</script>
<style lang="scss">
	.swiper-container{
		width:100%;
		height: 100%;
		img{
			width:98%;
			height: 100%;
			margin: 0 auto;
			border-radius: 0.2rem
		}
		.swiper-pagination span{
			background: red;
		}
	}
</style>