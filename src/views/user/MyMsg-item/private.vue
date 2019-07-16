<template>
	<div class="nr">
		<div class="private" v-if="Uid">
			<ul class="private-main">
				<li class="private-item" v-for="(t, index) in this.datalist">
					<div class="private-item-img-warp"><img :src="t.fromUser.avatarUrl" class="avatar" /></div>
					<div class="private-nr">
						<p class="nickname">{{ t.fromUser.nickname }}</p>
						<span class="MsgNr">{{ JSON.parse(t.lastMsg).msg }}</span>
						<!-- <span class="date">
							{{ new Date(t.lastMsgTime).getFullYear() == 2019 ? '' : new Date(t.lastMsgTime).getFullYear() + '年' }}{{ new Date(t.lastMsgTime).getMonth() + 1 + '月'
							}}{{ new Date(t.lastMsgTime).getDate() + '日' }}
						</span> -->
						<span class="date">{{t.lastMsgTime|formatYear}}{{t.lastMsgTime|formatMonth}}{{t.lastMsgTime|formatYearDate}}</span>
						<span v-if="t.newMsgCount" class="newMsgCount" :class="{active:t.newMsgCount<10}">{{t.newMsgCount}}</span>
					</div>
				</li>
			</ul>
		</div>
		<div v-if="!Uid">请登录</div>
	</div>
</template>

<script>
export default {
	created() {
		this.Uid = this.$route.query.Uid;
		this.MsgCont = this.$route.query.Msg;
		this.$axios.get('/wy/msg/private?limit=999').then(res => {
			this.datalist = res.data.msgs;
			console.log(this.datalist[1].newMsgCount.length);
		});
	},
	data() {
		return {
			Uid: '',
			MsgCont: '',
			datalist: ''
		};
	}
};
</script>

<style scoped>
	.active{
		border-radius: 50% !important;
		padding:0 !important;
		height: 0.35rem !important;
		width: 0.35rem !important;
		text-align: center;
		line-height: 0.35rem;
	}
	.newMsgCount{
		position: absolute;
		top: 0.8rem;
		background: red;
		padding: 0.04rem 0.1rem;
		border-radius: 8px;
		color: #FFF;
		right: 0.4rem;
	}
.date {
	font-size: 0.18rem;
	color: #cccccc;
	position: absolute;
	top: 0.2rem;
	right: 0.08rem;
}
.MsgNr {
	width: 5.6rem;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	display: block;
	color: #cccccc;
	box-sizing: border-box;
	padding-right: 0.8rem;
}
.nickname {
	margin-top: 0.4rem;
	font-size: 0.28rem;
}
.private-nr {
	position: relative;
	overflow: hidden;
	display: inline-block;
	height: 100%;
	margin-left: 0.2rem;
	float: left;
	box-sizing: border-box;
	border-bottom: 0.02rem solid #e6e6e6;
}
.private-item-img-warp {
	float: left;
	display: inline-block;
	height: 100%;
	line-height: 1.6rem;
	vertical-align: middle;
}
.private-item {
	height: 1.6rem;
	vertical-align: middle;
}
.private-main {
	height: auto;
}
.private {
	padding-left: 0.3rem;
}
.avatar {
	height: 1.2rem;
	border-radius: 50%;
	vertical-align: middle;
	display: inline-block;
}
.nr {
	height: 100vh;
	overflow-y: auto;
}
</style>
