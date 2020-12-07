<!-- 公告详情 -->
<template>
	<view class="page">
		<view class="navbutton">
			<view class="navbutton-left" @click="gotoback"><</view>
			<view class="navbutton-title">公告详情</view>
			<view class="navbutton-right"></view>
		</view>
		<view class="header">
			<h2>BBIN 维护公告</h2>
			<p>2020-12-01  20:36:39</p>
		</view>
		<hr class="hr">
		<view class="content">
			<p>尊敬的用户:</p>
			<p>[BBIN]将会在2020年12月02日06:00~8:00 进行例行维护作业.在此期间.将无法访问游戏,给您带来不便,请您谅解,谢谢!</p>
		</view>
		<view class="buttom-title">
			<p>杏彩娱乐</p>
		</view>
		<view class="buttom">
			<p>2020年12月01日</p>
			<p>感谢您的选择杏彩娱乐,祝您盈利多多</p>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			gotoback(){
				this.$emit('close',true)
			}
		}
	}
</script>

<style lang="scss">
	.navbutton{
		display: flex;
		justify-content: space-between;
		align-items: center;
		}
		.navbutton-left{
		}
		.navbutton-title{
			font-weight: bold;
			font-size: 18px;
		}
	.page{
		padding: 5px 20px;
		background-color: #fff;
		height: 1200upx;
		}
		.header p {
			color: #999999;
			margin:0 auto 10px ;
		}
		.hr{
		border: 1px dashed #999999;	
		}
		.content{
			margin: 10px 0;
		}
		.buttom-title{
			margin: 30px auto;
		}
</style>
