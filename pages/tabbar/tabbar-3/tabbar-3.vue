<template>
	<view class="content">
		<view class="page-body">
			<view class="user-list">
				<view class="c-flex">
					<view class="avatar"></view>
					<view class="userInfo">
						<p class="user-p">用户昵称：水电费<span>121</span></p>
						<p class="yu-e">余额
							<span class="number" v-if="onoff">￥000000</span>
							<span class="number" v-if="!onoff">￥*******</span>
							<span class="refresh" v-if="onoff">1</span>
							<span :class="onoff===true ? 'eys2' : 'eys1'" @click="onoffclick">12</span>
						</p>
					</view>
				</view>
			</view>
			<view class="btn-area">
				<navigator class="botton-flex" url="/#">
					<view class="btn-area-img"><img src="../../../static/img/金色渐变app图标-02.png" alt=""></view>
					<view>立即提现</view>
				</navigator>
				<navigator class="botton-flex" url="/#">
					<view class="btn-area-img"><img src="../../../static/img/金色渐变app图标-03.png" alt=""></view>
					<view>立即充值</view>
				</navigator>
				<navigator class="botton-flex" url="/#">
					<view class="btn-area-img"><img src="../../../static/img/金色渐变app图标-04.png" alt=""></view>
					<view>账变记录</view>
				</navigator>
			</view>

			<view class="report_xc">
				<ul v-for="(Item,index) in 2" :key="index">
					<li v-for="(item,index) in 2" :key="index">
						<span class="content">
							<i>1231</i>
							彩票报表
						</span>
						<span class="icon_gt">></span>
					</li>
				</ul>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				onoff: false,
			}
		},
		onLoad() {

		},
		methods: {
			onoffclick() {
				this.onoff = !this.onoff
			}
		}
	}
</script>

<style>
	.content {}

	.btn-area {
		display: flex;
		margin-left: 3%;
		background: #fff;
		bottom: -1.5rem;
		border-radius: .57rem;
		width: 94%;
		box-shadow: 0 0.14rem 0.43rem rgba(77, 119, 152, .1);
	}

	.botton-flex {
		position: relative;
		height: 2.86rem;
		color: #666;
		font-size: .86rem;
		font-weight: 700;
		text-align: center;
		flex: 1;
	}

	.user-list {
		position: relative;
		padding: 5upx 0 5upx;
	}

	.c-flex {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.avatar {
		width: 3.79rem;
		height: 3.79rem;
		padding: 0 .85rem 0 1rem;
		background: url(../../../static/img/QQ图片20201126162211.jpg) no-repeat 50%;
		background-size: contain;
	}

	.userInfo {
		flex: 1;
		font-size: 1rem;
	}

	.user-p {
		font-size: .92rem;
		color: #867e9c;
	}

	.yu-e {
		line-height: 1.8;
		font-size: .92rem;
		color: #867e9c;
	}

	.number {
		font-size: 1rem;
		font-weight: 550;
		color: #cf00b0;
	}

	.refresh {
		padding-left: 1rem;
		background: url(../../../static/img/刷新.png) no-repeat;
		background-position:3px 3px;
		background-size: 70% 70%;
		color: rgba(255, 255, 255, 0)
	}

	.report_xc {
		padding-top: 2rem;
		padding-bottom: 5rem;
		background: #f7f7fc;
		width: 94%;
		margin: 0 auto;
	}

	.report_xc ul {
		width: 94%;
		border-radius: .57rem;
		box-shadow: 0 4px 10px #e5d5f5;
		margin: 0 auto .8rem;
		padding-left: 0;
	}

	.report_xc ul li:first-of-type {
		border-top-left-radius: .4rem;
		border-top-right-radius: .4rem;
	}

	.report_xc ul li {
		width: 100%;
		line-height: 3rem;
		display: flex;
		justify-content: space-between;
		border-bottom: 1px solid #f0f0f0;
		background: #fff;
		box-sizing: border-box;
		padding: 0 1rem;
	}

	.icon_gt {
		color: #c878d5;
		font-size: 20px;
	}

	.eys2 {
		background: url(../../../static/img/眼睛.png) repeat;
		background-size: 100% 100%;
		color: rgba(255, 255, 255, 0)
	}

	.eys1 {
		background: url(../../../static/img/隐藏.png) repeat;
		background-size: 100% 100%;
		color: rgba(255, 255, 255, 0)
	}
	.btn-area-img img{
		width: 100upx;
		height: 100upx;
	}
</style>
