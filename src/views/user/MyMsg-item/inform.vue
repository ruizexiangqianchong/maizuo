<template>
	<div>
		<div v-if="datalist" class="nr">
			<ul>
				<li v-for="(t,index) in datalist" class="info-item">
					<div class="private-item-img-warp">
						<img :src="JSON.parse(t.notice).user.avatarUrl" class="avatar">
					</div>
					<div class="info-nr">
						<div class="info-nr-top">
							<span class="nickname">{{JSON.parse(t.notice).user.nickname}}</span>
							<span class="praise">赞了你的评论:</span><span class="date">{{JSON.parse(t.notice).comment.time|formatYear}}{{JSON.parse(t.notice).comment.time|formatMonth}}{{JSON.parse(t.notice).comment.time|formatYearDate}}</span>
						</div>
						<div class="info-nr-top">
							<span class="info-content">{{JSON.parse(t.notice).comment.content}}</span>
						</div>
					</div>
				</li>
			</ul>
		</div>
		<div v-if="!datalist">
			给爷爬去登录
		</div>
	</div>
</template>

<script>
	export default{
		created() {
			this.$axios.get('/wy/msg/notices').then(res => {
				this.datalist = res.data.notices
				console.log(JSON.parse(this.datalist[0].notice))
			});
		},
		data(){
			return {
				datalist:""
			}
		}
	}
</script>

<style scoped>
	.info-content{
		width: 5.6rem;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		height: 100%;
		line-height: 0.8rem;
	}
	.date{
		font-size: 0.18rem;
		color: #cccccc;
		position: absolute;
		top: 0.3rem;
		right: 0.15rem;
	}
	.praise{
		color: #CCCCCC;
		margin-left: 0.15rem;
	}
	.nickname{
		display: inline-block;
		color: cornflowerblue;
		font-size: 0.28rem;
		height: 100%;
		line-height:0.8rem ;
		}
	.info-nr-top{
		height: 50%;
		width: 100%;
		position: relative;
	}
	.info-nr{
		display: inline-block;
		height: 100%;
		width: 5.55rem;
		margin-left: 0.4rem;
	}
	.avatar{
		height: 1.2rem;
		border-radius: 50%;
		vertical-align: middle;
		display: inline-block;
	}
	.info-item{
		height: 1.6rem;
		vertical-align: middle;
	}
	.private-item-img-warp {
	float: left;
	display: inline-block;
	height: 100%;
	line-height: 1.6rem;
	vertical-align: middle;
}
.nr{
	padding-left: 0.3rem;
}
</style>
