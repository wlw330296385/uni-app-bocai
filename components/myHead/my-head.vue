<template>
	<view class="head-content">
		<view class="none"></view>
		<view class="uni-flex uni-row">
			<view class="flex-item top_left">
				<text>{{title}}</text>
			</view>
			<view class="flex-item uni-flex top_right">
				<view class="flex-item uni-bg-red">
					<image style="width: 35upx; height: 35upx;" src = "@/static/money.png"></image>
					<view>充值</view>
				</view>
				<view class="flex-item flex-item-two">
					<image mode = "scaleToFill"  style="width: 35upx; height: 35upx;" src = "@/static/kefu.png"></image>
				</view>
				<view class="flex-item flex-item-two">
				<navigator url="/pages/tabbar/tabbar-3/message">
					<image mode = "scaleToFill"  style="width: 35upx; height: 35upx;" src = "@/static/msg.png"></image>
				</navigator>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:['title'],
		components: {
		},
		data() {
			return {
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>
<style lang="scss">
	.none{
		height: var(--status-bar-height);
		width: 100%;
	}
	.head-content {
		// background-color: $my-color-xingcai;
		.top_left {			
			width: 60%;
			text {
				font-size: $uni-font-size-xl;
				padding-left: $uni-xuanxiang-margin-left-right;
			}
		}
		.top_right {
			align-items: center;
			width: 40%;
			justify-content: space-evenly;
			view:first-child {
				text-align: center;
				width: 130upx;
				display: flex;
				border-radius: $uni-border-radius-xxxl;
				image {
					display: block;
					margin: 5upx 0 0 10upx;
				}
				view {
					font-size: 20upx;
				}	
			}
			view {
				margin: 5upx 10upx;
			}
			.flex-item-two{
				padding-top: 20upx;
			}
		}
		
		
	}
</style>
