<template>	               
	<navigator :url="url" hover-class="other-navigator-hover">		
		<view class="buttom-list">
		<view class="buttom-list-left">
			<view class="buttom-list-left-top">河内五分彩</view>
			<view class="buttom-list-left-buttom">
				<view class="span-list">
					<view class="span-list-item">1</view>
					<view class="span-list-item">2</view>
					<view class="span-list-item">3</view>
					<view class="span-list-item">4</view>
					<view class="span-list-item">5</view>
				</view>
			</view>
		</view>
		<view class="buttom-list-right">
			<!-- <view class="buttom-list-left-top">00:04:31</view> -->
			<view class="buttom-list-left-buttom">查看></view>
		</view>   
		</view>  
	</navigator>
</template>

<script>
	export default {
		props:['url','list'],
		data() {
			return {
				
			};
		},
		methods:{
			
		}
	}
</script>

<style lang="scss">
.buttom-list {
		border: 1px solid #f0f0f0;
		box-shadow: 10upx 10upx 10upx #f0f0f0;
		width: 95%;
		margin: 5px auto;
		border-radius: 10px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.buttom-list-left,
		.buttom-list-right {
			padding: 5px 10px;
		}
		
		.buttom-list-left-top {
			font-size: 18px;
			color: $uni-bg-color-darkgray;
		}
		.span-list{
			display: flex;
		}
		.span-list-item{
			width: 50upx;
			height: 50upx;
			border-radius: 50%;
			margin-right: 10upx;
			text-align: center;
			line-height: 50upx;
			color: #fff;
			background-color: $theme-color-text;
		}
	}

	
</style>
