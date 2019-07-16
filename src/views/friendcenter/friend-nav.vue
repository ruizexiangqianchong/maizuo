<template>
	<div>
		<ul class="nav">
			<li class="nav-main" v-for="(t, index) in friend">
				<div class="avatar-warp"><img :src="t.avatarUrl" class="avatar" /></div>

				<span class="nickname">
					<p>{{ t.nickname }}</p>
				</span>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	created() {
		this.userdata = JSON.parse(sessionStorage.getItem('user'));
		this.Uid = this.userdata.data.account.id;
		//console.log(this.userdata,this.Uid)
		this.$axios.get(`/wy/user/follows?uid=${this.Uid}`).then(res => {
			this.friend = res.data.follow;
			// console.log(this.friend);
		});
	},
	data() {
		return {
			userdata: '',
			Uid: '',
			friend: ''
		};
	}
};
</script>

<style scoped>
.avatar-warp {
	display: inline-block;
	text-align: center;
}
.nav-main {
	height: 100%;
	display: flex;
	width: 25%;
	flex-direction: column;
	justify-content: center;
}
.nav-main span {
	margin-top: 0.1rem;
	text-align: center;
}
.nav-main span p {
	width: 1.2rem;
	overflow: hidden;
	display: inline-block;
	color: #666;
	font-size: 0.22rem;
	white-space: nowrap;
	text-overflow: ellipsis;
}
.nav {
	height: 1.6rem;
	display: flex;
	box-sizing: border-box;
	border-bottom: 1px solid #F5F2F0;
}
.avatar {
	height: 1rem;
	border-radius: 50%;
	vertical-align: middle;
	display: inline-block;
}
</style>
