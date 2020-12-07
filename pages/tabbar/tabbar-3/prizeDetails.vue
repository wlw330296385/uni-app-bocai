<template>
	<view>
		<view class="list">
			<view class="list-item"><p>投单时间:<span class="list-item-span">2020.11.11</span></p></view>
			<view class="list-item"><p>投单时间:<span class="list-item-span">2020.11.11</span></p></view>
			<view class="list-item"><p>投单时间:<span class="list-item-span">2020.11.11</span></p></view>
			<view class="list-item"><p>投单时间:<span class="list-item-span">2020.11.11</span></p></view>
			<view class="list-item"><p>投单时间:<span class="list-item-span">2020.11.11</span></p></view>
			<view class="list-item"><p>投单时间:<span class="list-item-span">2020.11.11</span></p></view>
			<view class="list-item"><p>投单时间:<span class="list-item-span">2020.11.11</span></p></view>
			<view class="list-item"><p>投单时间:<span class="list-item-span">2020.11.11</span></p></view>
		</view>
		<view class="bottom">
			<view class="bottom-left">
				<view class="bottom-left-top">投注总额</view>
				<view class="bottom-left-buttom">$121322</view>
			</view>
			<view class="bottom-right">
				<view class="bottom-left-top">奖金</view>
				<view class="bottom-left-buttom">$545456484</view>
				</view>
		</view>
		<view class="bottom1">
			<view class="bottom-left">
				<view>倍数:<span>1倍</span></view>
			</view>
			<view class="bottom-right">
				<view>模式:<span>分</span></view>
				</view>
		</view>
		<view class="bottom1 bonttom1-wei">
			<view class="bottom1-left">
				<view>投注内容:</view>
				<view class="content-item">123213</view>
			</view>
		</view>
		<view class="buttom-click" @click="returnback">
			<view class="buttom-click-img">X</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			returnback(){
				uni.navigateBack({  //uni.navigateTo跳转的返回，默认1为返回上一级
						delta: 1
					});
			}
		}
	}
</script>

<style>
	.list-item{
		padding: 5px 10px;
		font-size: 14upx;
		color: #999999;
		}
		.list-item-span{
			color: #000000;
			padding-left: 10px;
			font-weight: bold;
		}
		.bottom{
			width: 95%;
			margin: 0 auto;
			display: flex;
			justify-content:left;
			background-color: #f3f3f3;
		}
		.bottom1{
				width: 95%;
				margin: 0 auto;
				display: flex;
				justify-content:left;
				color: #999999;
		}
		.bonttom1-wei{
			font-weight: bold;
		}
		.bottom1-left{
			width: 95%;
			padding: 10px 5px;
		}
		.bottom-left,.bottom-right{
			width: 50%;
			padding: 10px 5px;
		}
		.bottom-left-top{
			font-weight: bold;
		}
		.bottom-left-buttom{
			color: #999999;
			font-size: 35upx;
		}
		.content-item{
			width: 100%;
			height: 35px;
			padding: 5px;
			line-height: 35px;
			border-radius: 5px;
			border: 1px solid #cccccc;
		}
		
		.buttom-click{
			width: 100%;
			height: 50px;
			background-color: #000;
			position:fixed;
			bottom: 0;
		}
		.buttom-click-img{
			width: 30px;
			margin: 10px auto;
			color: #fff;
			border: 1px solid #fff;
			border-radius: 50%;
			text-align: center;
		}
</style>
