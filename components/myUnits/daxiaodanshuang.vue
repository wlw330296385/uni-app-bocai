<!-- 大小单双组件 -->
<template>
	<view class="r-top">
		
		<view class="r-background" v-for="(item, index) in codeBox" :key="index">
			<view class="frame">
				<view class="frame-top">
					<view class="frame-top-left">
						<view class="frame-top-left-buttom uni-bg-blue">{{item.title}}</view>
					</view>
					<view class="frame-top-right">
						<view class="frame-top-right-list" :class="totalonoff?' uni-bg-red': ''" @click="clickwhole(index)">全</view>
						<view class="frame-top-right-list" @click="clickdelete(index)">清</view>
					</view>
				</view>
				<view class="frame-text">
					<view class="frame-text-buttom"  v-for="(itm, idx) in item.code"
					 :key="idx" @click="frame(itm, idx, index)" :class="itm.onoff == true?'uni-bg-red': ''">{{itm.title}}</view>
				</view>
			</view>
		</view>
		
	</view>
</template>
<script>
	export default {
		components: {
		},
		computed: {},
		props: {
			pl: {
				type: String,
				default: "请输入"
			},
			codeBox : {
				type: Array,
				default : []
			}
		},
		data() {
			return {
				content: '',
				visible1: false,
				visible2: false,
				onoff: -1,
				totalonoff: false,
				xiazhuData:[],
				aonoff:0,
			}
		},
		methods: {
			frame(item,idx, index) {
				Array.prototype.indexOf = function(val) {
					for (var i = 0; i < this.length; i++) { 
						if (this[i] == val) return i; 
					} 
					return -1; 
				};
				Array.prototype.remove = function(val) { 
					var idx = this.indexOf(val); 
					if (idx > -1) { 
						this.splice(idx, 1); 
					} 
				};
				for (let ii in this.codeBox[index].code) {
					if (idx == ii) {
						this.codeBox[index].code[ii].onoff = !this.codeBox[index].code[ii].onoff;
						console.log(this.codeBox[index].code[ii].onoff)
						if(item.onoff) {
							this.xiazhuData.push(item.title);
						}else{
							this.xiazhuData.remove(item.title); 
						}
					}
					if (this.codeBox[index].code[ii].onoff == false) {
						this.totalonoff = false;
					}
				}
				this.$emit('click_list1',this.xiazhuData)
			},
			clickwhole(index) {
				this.totalonoff = true;
				this.wholeonoff = !this.wholeonoff;
				this.xiazhuData = []
				for (let i in this.codeBox[index].code) {
					this.codeBox[index].code[i].onoff = true
					this.xiazhuData.push(this.codeBox[index].title)
				}
				if( this.aonoff <= 0){
					this.aonoff = this.aonoff++;
					this.$emit('click_list1',this.xiazhuData);
				}
			},
			clickdelete(index) {
				this.totalonoff = false;
				for (let i in this.codeBox[index].code) {
					this.codeBox[index].code[i].onoff = false
				}
				this.xiazhuData = [];
				this.$emit('click_list1',this.xiazhuData)
			}
		}
	}
</script>

<style lang="scss">
	.title {
		display: flex;
		padding: 5px;
	}

	.right-buttom {
		display: flex;
	}

	.right-buttom-list {
		width: 50px;
		height: 25px;
		border: 1px solid #cccccc;
		border-radius: 5px;
		color: #999;
		text-align: center;
		margin-left: 5px;
	}

	.r-background {
		padding: 5px;
	}

	.r-top {
		padding: 10rpx;
		background: #FFFFFF;
		border-radius: 20rpx;
	}

	.r-top-t {
		display: flex;
		justify-content: space-between;
		font-family: PingFang SC;
		font-weight: 400;
		line-height: 20px;
		color: rgba(153, 153, 153, 1);
		opacity: 1;
	}

	.r-top-buttom {
		width: 80px;
		height: 30px;
		color: #fff;
		text-align: center;
		line-height: 30px;
		margin: 15px 10px;
		border-radius: 5px;
		background-color: #b46dfa;
	}

	.title-p {
		width: 70%;
		font-size: 12px;
		display: flex;
		color: #9c9c9c;
	}

	.title-span {
		display: block;
		width: 25px;
		height: 15px;
		text-align: center;
		line-height: 14px;
		color: #fff;
		border: 1px solid #cccccc;
		border-radius: 50%;
		background-color: #ccc;
	}

	.frame {
		width: 96%;
		background-color: #fff;
		border-radius: 10px;
		padding:0 0 15upx 0;
		margin: 0 auto;
		box-shadow: 0 0 1upx 2upx #cccccc;
	}

	.frame-top {
		padding: 10px 5px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.frame-top-right {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.frame-top-left-buttom {
		padding: 0 18px;
		color: #fff;
		font-weight: bold;
		border-radius: 15px;
	}

	.frame-top-right-list {
		padding: 0 10px;
		border-radius: $uni-border-radius-xxxl;
	}

	.frame-text {
		display: flex;
		justify-content: center;
		padding: 5px 10px;
	}

	.frame-text-buttom {
		margin: 0 10px;
		padding: 5px 10px;
		border: 1px solid #cccccc;
		border-radius: 10%;
		color: $uni-bg-color-darkgray;
	}
	.uni-bg-red {
		color: #fff;
	}
	

	/deep/.demo-popup1 {
		.s-popup-wrap {
			top : $uni-pop-top;
			left : $uni-pop-left;
			right : $uni-pop-right;
			bottom : $uni-pop-bottom;
		}
	}

	/deep/.demo-popup2 {
		.s-popup-wrap {
			top : $uni-pop-top;
			left : $uni-pop-left;
			right : $uni-pop-right;
			bottom : $uni-pop-bottom;
		}
	}
</style>
