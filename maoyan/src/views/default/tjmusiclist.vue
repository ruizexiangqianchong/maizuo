<template>
	<div class="tjmusiclist">
		<div class="tjmusiclist-title">
			<h3>推荐歌单</h3>
			<span><router-link to="/">歌单广场</router-link></span>
		</div>
		<div class="tjmusiclist-center">
			<ul>
				<li v-for="item in list">
					<!-- 注意在div上预留了歌单id，可以直接获取 -->
					<div :id="item.id">
						<img :src="item.picUrl" alt="" />
						<p>
							<i class="iconfont icon-kongxinsanjiao-first"></i>
							<span>
								<b>{{ parseInt(item.playCount / 10000) }}</b>
								万
							</span>
						</p>
					</div>
					<p>{{ item.name }}</p>
				</li>
			</ul>
		</div>
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
		this.$axios.get('/wy/personalized').then(res => {
			for (let i = 0; i < 6; i++) {
				this.list.push(res.data.result[i]);
			}
		});
	}
};
//parseInt(Math.random() * res.data.result.length + 1)
</script>

<style lang="scss" scoped>
.tjmusiclist {
	.tjmusiclist-title {
		display: flex;
		justify-content: space-between;
		margin: 0.2rem 0.2rem;
		text-align: center;
		h3 {
			display: inline-block;
			font-size: 0.32rem;
		}
		span {
			display: inline-block;
			border: 1px solid #e6e6e6;
			border-radius: 0.4rem;
			padding: 0.05rem 0.15rem;
		}
	}
	.tjmusiclist-center {
		overflow: hidden;
		height: auto;
		ul {
			li {
				margin: 0.1rem;
				float: left;
				width: 30%;
				div {
					position: relative;
					p {
						position: absolute;
						top: 0.1rem;
						right: 0.1rem;
						color: #fff;
					}
				}
				p {
					margin-top: 0.1rem;
				}
				img {
					width: 100%;
					border-radius: 0.2rem;
				}
			}
		}
	}
}
</style>
