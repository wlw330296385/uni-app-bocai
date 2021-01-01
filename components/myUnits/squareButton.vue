<!-- 大小单双n星的组件 -->
<template>
	<view class="r-top">
		<view class="r-background">
			<view class="frame">
				<view class="frame-text">
					<view class="frame-text-buttom" :class="item.onoff == true?'frame-text-buttom-click': ''" v-for="(item,index) in list"
					 :key="index" @click="frame(index,item)">{{item.title}}</view>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		components: {},
		computed: {},
		props: {
			pl: {
				type: String,
				default: "请输入"
			},
		},
		data() {
			return {
				content: '',
				visible1: false,
				visible2: false,
				list: [{
						title: '全大',
						onoff: false
					},
					{
						title: '3大1小',
						onoff: false
					},
					{
						title: '2大2小',
						onoff: false
					},
					{
						title: '1大3小',
						onoff: false
					},
					{
						title: '全小',
						onoff: false
					},
				],
				xiazhuData:[],
			}
		},
		methods: {
			frame(index,item) {
				Array.prototype.indexOf = function(val) {
				for (var i = 0; i < this.length; i++) { 
				if (this[i] == val) return i; 
				} 
				return -1; 
				};
				Array.prototype.remove = function(val) { 
				var index = this.indexOf(val); 
				if (index > -1) { 
				this.splice(index, 1); 
				} 
				};
				for (let i = 0; i < this.list.length; i++) {
					if (index == i) {
						this.list[i].onoff = !this.list[i].onoff;
						if(this.list[i].onoff == true){
							this.xiazhuData.push(item.title)
						}else{
								this.xiazhuData.remove(item.title); 
						}
					}
				}
				this.$emit('click_list1',this.xiazhuData)
			}
		}
	}
</script>

<style lang="scss">
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
		background-color: #f7fdf7;
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


	.frame {
		width: 95%;
		background-color: #fff;
		border-radius: 10px;
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
		background-color: #e2beff;
		padding: 0 18px;
		color: #fff;
		font-weight: bold;
		border-radius: 15px;
	}

	.frame-top-right-list {
		padding: 0 10px;
	}

	.frame-text {
		display: flex;
		justify-content: left;
		flex-flow: wrap;
		padding: 5px 10px;
	}

	.frame-text-buttom {
		margin: 5px;
		padding: 10px;
		border: 1px solid #cccccc;
		border-radius: 5px;
		background-color: #cccccc;
		color: #fff;
	}

	.frame-text-buttom-click {
		background-color: #F76260;
	}

	/deep/.demo-popup1 {
		.s-popup-wrap {
			top: $uni-pop-top;
			left: $uni-pop-left;
			right: $uni-pop-right;
			bottom: $uni-pop-bottom;
		}
	}

	/deep/.demo-popup2 {
		.s-popup-wrap {
			top: $uni-pop-top;
			left: $uni-pop-left;
			right: $uni-pop-right;
			bottom: $uni-pop-bottom;
		}
	}
</style>
