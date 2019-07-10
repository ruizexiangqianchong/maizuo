<template>
	<div class="footer">
		<ul>
			<li>
				<router-link to="/index"><span class="iconfont icon-dianying"></span><br>电影</router-link>
			</li>
			<li>
				<router-link to="/fion"><span class="iconfont icon-yingyuana"></span><br>影院</router-link>
			</li>
			<li>
				<router-link to="/shpig"><span class="iconfont icon-youhui"></span><br>特惠</router-link>
			</li>
			<li>
				<router-link to="/user"><span class="iconfont icon-wode"></span><br>我的</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
export default {};
</script>

<style>
.footer {
	width: 100%;
	height: 1.6rem;
	background: #fff;
	z-index: 10;
	position: fixed;
	bottom: 0;
	font-size: 0.48rem;
	border-top: 1px solid #f5f5f5;
	text-align: center;
}
.footer ul {
	display: flex;
	justify-content: space-between;
}
.footer ul li {
	color: #797D82;
	width: 25%;
}
.footer ul li span {
	display: inline-block;
}
.footer ul li a{
	display: inline-block;
	width: 100%;
	height: 100%;
	text-decoration: none;
}
</style>
