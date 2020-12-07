<template name='sunui-stepper'>
	<view>
		<view class="title">
			<view class="title-p">余额:{{balance}}</view>
			<view class="title-p">已选{{label}}注,共{{Totalprice}}元</view>
		</view>
		<view class="Counter-flex">
			<view class="buttom-flex">
				<view class="button" :class="item.Index?'button-color':''" v-for="(item,index) in list" :key="index" @click="buttonclick(index)">{{item.title}}</view>
			</view>
			<view class="sunui-stepper">
				<view @tap="less" :style="stepperCacheNum<=min?'color:'+unactive+';':'color:'+active+';'">-</view>
				<input type="number" :value="stepperCacheNum" @input="iptVal" :disabled="true" /><span>倍</span>
				<view @tap="add" :style="stepperCacheNum>=max?'color:'+unactive+';':'color:'+active+';'">+</view>
			</view>
			<view class="Betting" @click="Bettingclick">添加投注</view>
		</view>
		<!-- 已选购彩种列表 -->
		<view class="caizhong-list">
			<view class="caizhong-item">
				<view class="item-left">
					<view class="item-left-top">[任选二_直选复式-,-,7,9,7]</view>
					<view class="item-left-buttom">3注*1倍*2分 = 0.06元 <span>模式:195.60</span></view>
				</view>
				<view class="item-right" @click="deleteclick"><span>X</span></view>
			</view>
		</view>
		<!--  -->
		<view class="yixuan-list">
			<view class="yixuan-top">
				<view class="yixuan-top-left">已选1单,共三注</view>
				<view class="yixuan-checkbox">
					<checkbox-group @change="checkboxChange">
						<checkbox :value="value" :checked="checked" />

					</checkbox-group>
					<view>11111</view>
				</view>
			</view>
			<view class="yixuan-buttom">总金额:0.060元</view>
		</view>
		<!-- 立即投注 -->
		<view class="lijitouzhu">
			<view class="lijitouzhu-title" @click="lijitouzhu">立即投注</view>
		</view>
<uni-popup ref="popup2" type="dialog">
			<uni-popup-dialog type="info" mode="base" message="成功消息" title="删除投注" content="确认删除吗?" :duration="2000" :before-close="true" @close="close2"
			 @confirm="confirm2"></uni-popup-dialog>
		</uni-popup>
		<uni-popup ref="popup1" type="dialog">
			<uni-popup-dialog type="info" mode="base" message="成功消息" title="添加投注" content="确认添加投注吗?" :duration="2000" :before-close="true" @close="close1"
			 @confirm="confirm1"></uni-popup-dialog>
		</uni-popup>
		<uni-popup ref="popup" type="dialog">
			<uni-popup-dialog type="info" mode="base" message="成功消息" title="余额不足,请及时充值" content="21321321" :duration="2000" :before-close="true" @close="close"
			 @confirm="confirm"></uni-popup-dialog>
		</uni-popup>
	</view>
</template>

<script>
	import uniPopupDialog from '@/components/uni-popup/uni-popup-dialog.vue'
	export default {
		components: {
			uniPopupDialog
		},
		data() {
			return {
				stepperNum: 0,
				stepperCacheNum: 0,
				balance: 10,
				num: 1,
				price: 0,
				multiple: 0,
				checked: false,
				value: '',
				list: [{
						Index: false,
						title: '元',
					},
					{
						Index: false,
						title: '角',
					},
					{
						Index: false,
						title: '分',
					},
					{
						Index: false,
						title: '离',
					},
				],
			};
		},
		name: 'sunui-stepper',
		props: {
			val: {
				type: [String, Number],
				default: 0
			},
			min: {
				type: [String, Number],
				default: 0
			},
			max: {
				type: [String, Number],
				default: 0
			},
			step: {
				type: Number,
				default: 1
			},
			label: {
				type: Number,
				default: 0
			},
			disabled: {
				type: Boolean,
				default: false
			},
			active: {
				type: String,
				default: '#666'
			},
			unactive: {
				type: String,
				default: '#ddd'
			}
		},
		created() {
			this.stepperNum = this.val;
			this.stepperCacheNum = this.val;
		},
		watch: {
			val: function(val) {
				this.stepperNum = this.val;
				// 加上这句
				this.stepperCacheNum = val
			}
		},
		computed: {
			Totalprice() {
				return this.stepperCacheNum * this.num * this.multiple * this.label
			}
		},
		methods: {
			less() {
				this.stepperNum <= this.min ? this.stepperNum = this.min : this.stepperNum -= Math.ceil(this.step * 10) / 10;
				this.stepperCacheNum = Number(this.stepperNum.toFixed(1));
				this.emit(this.stepperCacheNum, this.label);
			},
			add() {
				this.stepperNum >= this.max ? this.stepperNum = this.max : this.stepperNum += Math.ceil(this.step * 10) / 10;
				this.stepperCacheNum = Number(this.stepperNum.toFixed(1));
				this.emit(this.stepperCacheNum, this.label);
			},
			emit(val, label) {
				if (Number(val.toFixed(1)) > this.max) {
					val = this.max;
					this.stepperCacheNum = this.max;
				}
				if (Number(val.toFixed(1)) < this.min) {
					val = this.min;
					this.stepperCacheNum = this.min;
				}
				this.$emit('change', {
					val: val,
					label: label
				});
			},
			iptVal(e) {
				// 暂未开发输入框->sunUI1.0.0,预计sunUI1.0.1
				Number(e.detail.value) > this.max ? this.stepperNum = this.max : this.stepperNum;
			},
			buttonclick(index) {
				for (let i = 0; i < this.list.length; i++) {
					this.list[i].Index = false
					if (index == i) {
						this.list[i].Index = !this.list[i].Index;
					}
					if (index == 0) {
						this.multiple = 1;
					} else if (index == 1) {
						this.multiple = 0.1;
					} else if (index == 2) {
						this.multiple = 0.01;
					} else if (index == 3) {
						this.multiple = 0.001;
					}
				}
			},
			checkboxChange: function(e) {
				var items = this.items,
					values = e.detail.value;
			},
			lijitouzhu() {
				if (this.Totalprice >= this.balance) {
					this.$refs.popup.open()
					return
				}
			},
			Bettingclick(){
				this.$refs.popup1.open()
			},
			deleteclick(){
					this.$refs.popup2.open()
			},
			// 立即投注
			close(done) {
				// TODO 做一些其他的事情，before-close 为true的情况下，手动执行 done 才会关闭对话框
				// ...
				done()
			},
			confirm(done, value) {
				// 输入框的值
				console.log(value)
				// TODO 做一些其他的事情，手动执行 done 才会关闭对话框
				// ...
				done()
			},
			// 添加投注
			close1(done) {
				// TODO 做一些其他的事情，before-close 为true的情况下，手动执行 done 才会关闭对话框
				// ...
				done()
			},
			confirm1(done, value) {
				// 输入框的值
				console.log(value)
				// TODO 做一些其他的事情，手动执行 done 才会关闭对话框
				// ...
				done()
			},
			// 删除彩种
			close2(done) {
				// TODO 做一些其他的事情，before-close 为true的情况下，手动执行 done 才会关闭对话框
				// ...
				done()
			},
			confirm2(done, value) {
				// 输入框的值
				console.log(value)
				// TODO 做一些其他的事情，手动执行 done 才会关闭对话框
				// ...
				done()
			}
		}
	}
</script>

<style lang="scss">
	.sunui-stepper {
		display: flex;
		align-items: center;

		view {
			display: inline-block;
			font-size: 1.5em;
			font-weight: bold;
			// 如果需要边框,则打开本样式 --1
			line-height: 1em; //1
			padding: 4upx 10upx; //1
			border: 1upx solid #eee; //1
		}

		input {
			width: 100upx;
			// 如果不需要边框,则关闭本样式 --2
			// margin: 0 20upx; //2
			text-align: center;
			// background-color: #eee;
		}

	}

	.title {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.buttom-flex {
		display: flex;
		justify-content: left;
		align-items: center;
		margin-left: 10px;
	}

	.Counter-flex {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.title-p {
		padding: 5px 10px;
	}

	.button {
		width: 25px;
		height: 25px;
		text-align: center;
		color: #fff;
		margin: 0 2px;
		background-color: #ccc;
		border-radius: 5px;
	}

	.button-color {
		background-image: $uni-bg-color-linear;
	}

	.Betting {
		width: 100px;
		text-align: center;
		background-image: $uni-bg-color-linear;
		border-radius: 10px;
		color: #fff;
		margin-right: 10px;
	}

	.caizhong-list {
		margin: 10px 0;
	}

	.caizhong-item {
		width: 95%;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-radius: 10px;
		background-color: #d0e3e6;
	}

	.item-left {
		padding: 5px 10px;
	}

	.item-left-buttom {
		font-size: 14px;
		color: #999999;
	}

	.item-right {
		width: 12%;
		padding: 20px 0;
		height: auto;
		background-color: #ccc;
		border-top-right-radius: 10upx;
		border-bottom-right-radius: 10upx;
	}

	.item-right span {
		display: block;
		width: 20px;
		height: 20px;
		text-align: center;
		margin: 0 auto;
		line-height: 22px;
		color: #fff;
		background-color: #ff55ff;
		border-radius: 50%;
	}

	.yixuan-top {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.yixuan-checkbox {
		display: flex;
	}

	.yixuan-top-left {
		padding: 5px 10px;
		color: #999999;
	}

	.yixuan-checkbox {
		padding: 5px 10px;
	}

	.yixuan-buttom {
		padding: 5px 10px;
	}

	.lijitouzhu-title {
		width: 95%;
		margin: 0 auto;
		text-align: center;
		background-color: #ff55ff;
		padding: 18upx 0;
		border-radius: 10px;
		color: #fff;
		font-size: 18px;
	}
</style>
