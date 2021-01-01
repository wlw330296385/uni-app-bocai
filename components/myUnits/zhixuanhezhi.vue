<template>
	<view>

		<view v-if="weishu" class="uni-flex uni-row">
			<view class="flex-item r-top-buttom uni-border" v-for="(item, index) in weishu" :key="index" @click="clickbuttom1(item,index)"
			 :class="in_array(item,click_list1) ? 'uni-bg-red' : 'uni-bg-blue'">
				{{item}}
			</view>
		</view>
		<view v-for="(item,index) in hezhi" :key="index" class="uni-border">
			<view class="r-top-buttom uni-bg-blue">
				{{item.title}}
			</view>
			<view class="buttom">
				<view class="buttom-hezi" v-for="(it, idx) in item.nums" :key="idx" @click="clickbuttom2(it,idx)">
					<view class="button-list" :class="in_array(it,click_list2)?'uni-bg-red':'button-light'">{{it}}</view>
				</view>
			</view>
		</view>

	</view>

</template>

<script>
	export default {
		props: ['weishu', "hezhi"],
		data() {
			return {
				click_list1: [],
				click_list2: []
			};
		},
		methods: {
			clickbuttom1(item, index) {
				//如果存在,则删除;否则添加
				let idx = this.click_list1.indexOf(item);
				if (idx >= 0) {
					this.click_list1.splice(idx, 1);
				} else {
					this.click_list1.splice(0, 0, item);
				}
				this.$emit('click_list1', this.click_list1);
			},
			clickbuttom2(item, index) {
				//如果存在,则删除;否则添加
				let idx = this.click_list2.indexOf(item);
				if (idx >= 0) {
					this.click_list2.splice(idx, 1);
				} else {
					this.click_list2.splice(0, 0, item);
				}
				this.$emit('click_list2', this.click_list2);
			},
			in_array(search, array) {
				for (var i in array) {
					if (array[i] == search) {
						return true;
					}
				}
				return false;
			}
		}
	};
</script>

<style lang='scss'>
	.r-top-buttom {
		width: $uni-xuanxiang-width-normal;
		height: $uni-xuanxiang-height-normal;
		color: #fff;
		text-align: center;
		line-height: 30px;
		margin: $uni-xuanxiang-margin-top-bottom $uni-xuanxiang-margin-left-right;
		border-radius: $uni-xuanxiang-radiu-normal;
	}

	.uni-border {
		border: $uni-text-color-disable solid 1upx;
		border-radius: $uni-border-radius-xxl;
		margin: $uni-spacing-col-sm $uni-spacing-row-sm;
		text-align: center;

		.top-button {
			line-height: 30upx;
			height: 30upx;
			flex: 2;
			margin: 0 $uni-spacing-row-sm;
			background-color: $uni-bg-color-darkgray;
			color: $uni-text-color-inverse;
			border: 1px $uni-border-color solid;
			border-radius: $uni-border-radius-xxl;
		}

		.mbs {
			line-height: 60upx;
			height: 60upx;
			width: 300upx;
			flex-wrap: wrap;
			flex: 3;
			border-radius: 50upx;
		}

		.buttom {
			display: flex;
			flex-wrap: wrap;
			justify-content: left;

			.buttom-hezi {
				width: 20%;

				.button-list {
					width: $uni-xuanma-width-normal;
					line-height: $uni-xuanma-height-normal;
					height: $uni-xuanma-height-normal;
					margin: 15upx auto;
					border: 1px $uni-border-color solid;
					border-radius: $uni-xuanma-radiu-normal;
				}
			}
		}

		.button-light {
			background-color: $u-type-info-light;
		}
	}
</style>
