<template>
	
	<view class="page-body uni-flex uni-column unit0" @onclik="goto(url, isSale)" @tap="goto(url, isSale)">
		<view class="flex-item" style="flex: 1;">
			<image class="uint1" mode="mode" :src="src" @error="imageError" ></image>
		</view>	
		<view class="flex-item uni-flex uni-column unit2" style="flex:6">
			<text class="txt1">{{name}}</text>
			<uni-countdown  :color="color ? color : '#000000'" :splitorColor = "color ? color : '#000000'" border-color="#00B26A" :show-day="false" :hour="hour" :minute="minute" :second="second"></uni-countdown>
		</view>
	</view>
</template>

<script>
	import uniCountdown from '@/components/uni-countdown/uni-countdown.vue';
	export default {
		components: {uniCountdown},
		props:['name', 'url', 'src', 'hour', 'minute', 'second', 'color', "isSale", "gameId"],
		data() {
			return {
				mode : "scaleToFill",
			}
		},
		methods: { 
			imageError: function(e) {
				console.error('image发生error事件，携带值为' + e.detail.errMsg)
			},
			goto(url, isSale){
				if (isSale) {
					uni.navigateTo({
					    url: `${url}?gameId=${this.gameId}`
					});
				} else {
					uni.showToast({
						mask:true,
						title:"该彩种暂未上架",
						icon:"loading"
					})
				}
				
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
		width: 200upx;
		height: 200upx;
	}
	.unit2 {
		padding:0 10upx;
	}
	.txt1 {
		font-size: $uni-font-size-ssm;
		font-weight: bold;
	}
	.txt2 {
		background-color: #343434;
		border-radius: 25upx;
	}
</style>
