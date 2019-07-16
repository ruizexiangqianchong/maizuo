<template>
	<nav class="index-nav">
		<ul>
			<li><router-link to="/"><span class="iconfont icon-rili"></span></router-link>每日推荐</li>
			<li><router-link to="/"><span class="iconfont icon-gavin-copy"></span></router-link>歌单</li>
			<li><router-link to="/"><span class="iconfont icon-paixingbang"></span></router-link>排行榜</li>
			<li><router-link to="/"><span class="iconfont icon-diantai"></span></router-link>电台</li>
			<li><router-link to="/"><span class="iconfont icon-airudiantubiaohuizhi-zhuanqu_zhibojian"></span></router-link>直播</li>
		</ul>
	</nav>
</template>

<script>
</script>

<style lang="scss" scoped>
	.index-nav{
		margin:0 auto; 
		border-bottom: 1px solid #E6E6E6;
		ul{
			display: flex;
			margin: 0.4rem 0;
		}
		li{
		
			flex: 1;
			text-align: center;
			font-size: 0.2rem
		}
		a{
			margin: 0 auto;
			display: block;
			background: #dd001b;
			border-radius: 50%;
			width:0.8rem;
			height: 0.8rem;
			padding: 0.05rem;
			line-height: 0.8rem;
			margin-bottom: 0.2rem
		}
		span{
			font-size: 0.6rem;
			font-weight: 300;
			color: #fff
		}
	}
</style>
