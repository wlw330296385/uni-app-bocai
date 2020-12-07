<!-- 全清按钮的组件 -->
<template>
	<view class="r-top">
		<view class="r-background">
			<view class="title">
				<view class="title-p">
					<span class="title-span">?</span>
					<span>手动输入2个号码组成一注,所选号码的第一位,第二位与开奖号码相同,即为中奖</span>
				</view>
				<view class="right-buttom">
					<view class="right-buttom-list" @click="clickhelp">帮助</view>
					<view class="right-buttom-list" @click="clickExamples">示例</view>
				</view>
			</view>
			<view class="frame">
				<view class="frame-top">
					<view class="frame-top-left">
						<view class="frame-top-left-buttom">亚军</view>
					</view>
					<view class="frame-top-right">
						<view class="frame-top-right-list" :class="totalonoff?'frame-text-buttom-click': ''" @click="clickwhole">全</view>
						<view class="frame-top-right-list" @click="clickdelete">清</view>
					</view>
				</view>
				<view class="frame-text">
					<view class="frame-text-buttom" :class="item.onoff == true?'frame-text-buttom-click': ''" v-for="(item,index) in list"
					 :key="index" @click="frame(index)">{{item.title}}</view>
				</view>
			</view>
		</view>
		<uni-popup ref="popup1" type="dialog">
			<uni-popup-dialog type="input" mode="base" message="成功消息" title="示例" content="你好啊" cancel="false" :duration="2000" :before-close="true" @close="close1"
			 @confirm="confirm1"></uni-popup-dialog>
		</uni-popup>
		<uni-popup ref="popup2" type="dialog">
			<uni-popup-dialog type="input" mode="base" message="成功消息" title="示例" content="你好啊" cancel="false" :duration="2000" :before-close="true" @close="close2"
			 @confirm="confirm2"></uni-popup-dialog>
		</uni-popup>
	</view>
</template>
<script>
	import uniPopupDialog from '@/components/uni-popup/uni-popup-dialog.vue';
	export default {
		components: {
			uniPopupDialog
		},
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
						title: '大',
						onoff: false
					},
					{
						title: '小',
						onoff: false
					},
					{
						title: '单',
						onoff: false
					},
					{
						title: '双',
						onoff: false
					},
				],
				onoff: -1,
				wholeonoff: false,
				totalonoff: false,
			}
		},
		methods: {
			Delete() {},
			empty() {
				this.content = '';
			},
			frame(index) {
				let onoff = true;
				if (this.wholeonoff) {
					for (let i = 0; i < this.list.length; i++) {
						if (index == i) {
							this.list[i].onoff = !this.list[i].onoff
						}
						if (this.list[i].onoff == false) {
							onoff = false;
						}
					}
				}
				if (!this.wholeonoff) {
					for (let i = 0; i < this.list.length; i++) {
						if (index == i) {
							this.list[i].onoff = !this.list[i].onoff;
						}
						if (this.list[i].onoff == false) {
							onoff = false;
						}
					}
				}
				this.totalonoff = onoff
			},
			clickwhole() {
				this.totalonoff = true;
				this.wholeonoff = !this.wholeonoff;
				for (let i = 0; i < this.list.length; i++) {
					this.list[i].onoff = true
				}
			},
			clickdelete() {
				this.totalonoff = false;
				for (let i = 0; i < this.list.length; i++) {
					this.list[i].onoff = false
				}
			},
			clickhelp(){
					this.$refs.popup1.open()
			},
			clickExamples(){
					this.$refs.popup2.open()
			},
			confirm1(done, value) {
				// 输入框的值
				console.log(value)
				// TODO 做一些其他的事情，手动执行 done 才会关闭对话框
				// ...
				done()
			},
			confirm2(done, value) {
				// 输入框的值
				console.log(value)
				// TODO 做一些其他的事情，手动执行 done 才会关闭对话框
				// ...
				done()
			},
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
		padding: 5px 10px;
	}

	.frame-text-buttom {
		margin: 0 10px;
		padding: 5px 10px;
		border: 1px solid #cccccc;
		border-radius: 50%;
		background-color: #cccccc;
		color: #fff;
	}

	.frame-text-buttom-click {
		background-image: $uni-bg-color-linear;
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
