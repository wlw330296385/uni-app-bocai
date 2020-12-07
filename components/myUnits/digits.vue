<template>
	<view>
		<view class="uni-flex uni-row digits">
			<view class="r-top-buttom uni-bg-blue">{{digit}}</view>
			<view class="flex-item top-button" @click="all_choose()">全</view>
			<view class="flex-item top-button" @click="big_choose()">大</view>
			<view class="flex-item top-button" @click="small_choose()">小</view>
			<view class="flex-item top-button" @click="odd_choose()">奇</view>
			<view class="flex-item top-button" @click="even_choose()">偶</view>
			<view class="flex-item top-button" @click="none_choose()">清</view>
		</view>

		<view class="buttom">
			<view v-for="(item, index) in nums" 
			:key="index" @click="clickbuttom(item)" 
			class="button-list" 
			:class="(list.indexOf(item)) >= 0?'uni-bg-red':'button-light'">
			{{item}}
			</view>	
		</view>
	</view>

</template>

<script>
	export default {
		props: ['nums', "digit"],
		data() {
			return {
				list: []
			};
		},
		methods: {
			//数字选择
			clickbuttom(item) {
				let idx = this.list.indexOf(item);
				if(idx >= 0){
					this.list.splice(idx, 1);
				} else {
					this.list.splice(0, 0, item);
				}
			}
			// 奇偶选择
			,all_choose () {
				this.list = this.nums;
			}
			,big_choose () {
				let len = Math.floor( this.nums.length / 2 );
				this.list = this.nums.slice(len, (this.nums.length));
			}
			,small_choose () {
				let len = Math.floor( this.nums.length / 2 );
				this.list = this.nums.slice(0, len);
			}
			,odd_choose () {
				this.list = [];
				for (var item in this.nums) {
					if (item%2 == 0) {
						this.list.push(this.nums[item]);
					}
				}
			}
			,even_choose () {
				this.list = [];
				for (var item in this.nums) {
					if (item%2 == 1) {
						this.list.push(this.nums[item]);
					}
				}
			}
			,none_choose () {
				this.list = [];
			}
			//其他
		}
	};
</script>

<style lang='scss'>
	.digits {
		margin: $uni-spacing-col-base 0;
		font-size: $uni-font-size-lg;
		text-align: center;
		text {
			flex: 3;
		}
		
		.r-top-buttom{
			width: $uni-xuanxiang-width-normal;
			height: $uni-xuanxiang-height-normal;
			color: #fff;
			text-align: center;
			line-height: $uni-xuanxiang-height-normal;
			margin:$uni-xuanxiang-margin-top-bottom $uni-xuanxiang-margin-left-right;
			border-radius: $uni-xuanxiang-radiu-normal;
		}
		.top-button {
			line-height:$uni-xuanxiang-height-normal;
			font-size: $uni-font-size-lg;
			height: $uni-xuanxiang-height-normal;
			flex: 2;
			margin:$uni-xuanxiang-margin-top-bottom $uni-xuanxiang-margin-left-right;
			background-color: $u-type-info-light;
			color: $uni-bg-color-darkgray;
			border: 1px $uni-border-color solid;
			border-radius: $uni-border-radius-xxl;
		}
		.mbs {
			line-height: 60upx;
			height: 60upx;
			width: 300upx;
			flex-wrap:wrap;
			flex: 3;
			border-radius: 50upx;
		}
	}

	.buttom {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		text-align: center;
		width: 95%;
		margin: auto;
		.button-list {
			width: $uni-xuanma-width-normal;
			line-height: $uni-xuanma-height-normal;
			height: $uni-xuanma-height-normal;
			margin: $uni-xuanma-margin-top-bottom $uni-xuanma-margin-top-bottom;
			/* margin: auto; */
			border: 1px $uni-border-color solid;
			border-radius: $uni-xuanma-radiu-normal;
		}
	}
	.button-light {
		background-color: $u-type-info-light;
	}
</style>
