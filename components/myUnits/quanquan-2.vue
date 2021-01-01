<template>
	<!-- 两行数字的圈圈 -->
	<view>
		<view class="circle-2 uni-flex uni-column flex-item uni-bg-red">
			<view class="flex-item flex-item-V flex-item1">{{diyihang}}</view>
			<view class="flex-item flex-item-V flex-item2">{{dierhang}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:["diyihang", "dierhang"],
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	.circle-2 {
		border-radius: 30upx;
		text-align: center;
		width: 60upx;
		height: 60upx;
		.flex-item1 {
			font-size: 35upx;
			line-height: 40upx;
			width: 60upx;
			height: 40upx;
		}
		.flex-item2 {
			width: 60upx;
			height: 20upx;
			font-size: 10upx;
			line-height: 20upx;
		}
	}
</style>
