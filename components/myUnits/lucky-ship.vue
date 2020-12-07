<template>
	<view class="">
		<view class="image-list uni-flex uni-row my-image-list">
			<view class="image-content flex-item my-image"  v-for="(item, index) in shiplist" :key="index" @click="choose_ship(item)">
				<image style="width: 100upx; height: 100upx; "   mode="aspectFit" src="@/static/img/luckyShip.png"
					@error=""
					:style = "{ background:randomcolor(index) }"
					 >
				</image>
				<view class="image-title">{{item}} </view>
			</view>
		</view>
		
		<view class="line">
		
		</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:['shiplist'],
		data() {
			return {
				choose_list : []
			}
		},
		methods: {
			choose_ship(item) {
				if (this.choose_list.indexOf(item) < 0 ) {
					this.choose_list.push(item);
				}
				console.log(this.choose_list);
			}
		}
		,computed: {
			randomcolor (n) {
				return (n) => {
				var color = "#";
				   for (var i = 0; i < 6; i++) color += parseInt(Math.random() * 16).toString(16);
				return color;
				}
			}
		}
	}
</script>

<style lang="scss">
	image{will-change: transform}
	.my-image-list {
		width:100%;
		margin: auto;
		flex-wrap:wrap;
		text-align: center;
		justify-content: space-between;
		background-color: $u-type-info-light;
		.my-image {
			margin: $uni-xuanma-margin-top-bottom $uni-xuanma-margin-left-right;
		}
	}
	
	.line {
		border-bottom: 5upx $u-type-info solid;
		// margin: $uni-spacing-col-base 0;
	}
</style>
