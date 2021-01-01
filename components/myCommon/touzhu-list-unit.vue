<template>
	<view>
		<view class="Box1-list">
			<view class="Box1-list-1">
				<h2 class="history-code-item item-flex">
					<view class="Box1-p Box1-p-color">腾讯分分彩</view>
					<!-- <view class="Box1-p">玩法:后二直选</view> -->
					<view class="Box1-p " @click="goto">详情</view>
				</h2>
				<view class="history-code-item item-flex">
					<view class="Box1-p ">投注金额:0.0180</view>
					<view class="Box1-p ">奖金:0.0000</view>
				</view>
				<view class="hr"></view>
				<view class="history-code-item item-flex">
					<view class="Box1-p">期号:0.0180</view>
					<view class="Box1-p">状态:未中奖</view>
				</view>
			</view>
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
			goto() {
				uni.navigateTo({
					url: '/pages/tabbar/tabbar-3/prizeDetails'
				});
			},
		}
	}
</script>

<style lang="scss">
	
	.Box1-list {
		margin: 0 auto;
		width: 100%;
		.item-flex1 {
			justify-content: space-evenly;
		}
		
		.item-flex {
			justify-content: space-between;
		}
		.Box1-list-1 {
			width: 95%;
			padding: 5px 0;
			margin: 10px auto;
			background-color: #fff;
			box-shadow: 1px 1px 10px #cccccc;
			
			
			.hr {
				width: 90%;
				margin: 0 auto;
				height: 1px;
				background-color: #e5e5e5;
			}
			.history-code-item {
				min-height: 30px;
				font-size: 12px;
				font-weight: 500;
				color: #97a6c5;
				height: 30px;
				line-height: 30px;
				padding: 0 5px;
				display: flex;
				align-items: center;
				.Box1-p {
					margin: 0 5px;
				}
				.Box1-p-color {
					color: #5500ff;
				}
		
			}
			
			
		}
	}
	
	
	
	
</style>
