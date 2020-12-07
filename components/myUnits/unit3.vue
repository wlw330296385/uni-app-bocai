<template>
	
	<navigator :url="url" hover-class="navigator-hover" >
	<view class="page-body uni-flex uni-column unit0">
		<view class="flex-item" style="flex: 1;">
			<image class="uint1" mode="mode" :src="src" @error="imageError"  @onclik="goto(url)"></image>
		</view>	
		<view class="flex-item uni-flex uni-column unit2" style="flex:6">
			<text class="txt1">{{name}}</text>
			<uni-countdown  :color="color ? color : '#fff'" :splitorColor = "color ? color : '#fff'" border-color="#00B26A" :show-day="false" :hour="hour" :minute="minute" :second="second"></uni-countdown>
		</view>
	</view>
	</navigator>
</template>

<script>
	import uniCountdown from '@/components/uni-countdown/uni-countdown.vue';
	export default {
		components: {uniCountdown},
		props:['name', 'url', 'src', 'hour', 'minute', 'second', 'color'],
		data() {
			return {
				mode : "scaleToFill",
			}
		},
		methods: { 
			imageError: function(e) {
				console.error('image发生error事件，携带值为' + e.detail.errMsg)
			},
			goto(url){
				// uni.redirectTo({
				//     url: url
				// });
			}
		}
	}
		
</script>

<style>
	.unit0{
		text-align: center;
		margin: 23upx; 
		border-radius: 30upx;
		height: 300upx;
		width: 200upx;
	}
	image{
		border-radius: 30upx;
	}
	.uint1 {
		margin-top: 30upx;
		width: 150upx;
		height: 140upx;
	}
	.unit2 {
		padding:0 10upx;
		color: #ffffff;
	}
	.txt1 {
		font-weight: bold;
	}
	.txt2 {
		background-color: #343434;
		border-radius: 25upx;
	}
</style>
