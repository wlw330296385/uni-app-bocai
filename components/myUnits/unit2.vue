<template>
	<navigator url="@/pages/tabbar/tabbar-2/tabbar-2?title=跳转到新页面" hover-class="navigator-hover" class="">
    <view class="page-body uni-flex uni-row unit0" style="border: #e3e3e3 1upx solid;">
				<view class="flex-item" style="flex: 1;">
					<image class="uint1" :mode="mode" :src="src" @error="imageError"></image>
				</view>	
				<view class="flex-item uni-flex uni-column unit2" style="flex:6">
					<text>123</text>
					<text>123</text>
				</view>
				<view  class="flex-item unit3" style="flex:2">
					asdasf 
				</view>
    </view>
	</navigator>
</template>

<script>
	export default {
		data() {
			return {
				src:"/static/img/release.png",
				mode:"scaleToFill"
			}
		},
		methods: { 
			imageError: function(e) {
            console.error('image发生error事件，携带值为' + e.detail.errMsg)
        }
		}
	}
	
		console.log("启动第五页面");
</script>

<style>
	.unit0{
		margin: 15upx; border-radius: 30upx; background-color: #FFFFFF;
		height: 130upx;
	}
	image{
		box-shadow: 5px 10px 5px #d0d0d0;
		border-radius: 30upx;
	}
	.uint1 {
		width: 120upx;
		height: 120upx;
	}
	.unit2 {
		text-align: left;
		padding-left: 30upx;
		:first-child{
			font-weight: bold;
		}
	}
	.unit3 {
		background-color: #ffe8e4;
		width: 120upx;
		height: 130upx;
	}
</style>
