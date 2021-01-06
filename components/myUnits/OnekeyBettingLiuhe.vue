<template name='sunui-stepper'>
	<view class="content">
		<!-- <view class="title">
			<view class="title-p">余额:{{balance}}</view>
			<view class="title-p">已选{{label}}注,共{{totalPrice}}元</view>
		</view> -->
		<view class="Counter-flex">
			<view class="buttom-flex">
				<view class="button button-color" 
				v-for="(item,index) in yjfl" :key="index" @click="buttonclick(index)">
				{{item.title}}
				</view>
			</view>
			<view class="sunui-stepper">
				每注:
				<view @tap="less" :style="stepperCacheNum<=min?'color:'+unactive+';':'color:'+active+';'">-</view>
				<input type="number" :value="stepperCacheNum" @input="iptVal" :disabled="true" /><span>元</span>
				<view @tap="add" :style="stepperCacheNum>=max?'color:'+unactive+';':'color:'+active+';'">+</view>
			</view>
			<!-- <view class="Betting uni-bg-red" @click="Bettingclick">添加投注</view> -->
			<view class="Betting uni-bg-red" >余额:{{balance}}</view>
		</view>
		<!-- 已选购彩种列表 -->
		<view class="caizhong-list">
			<view class="caizhong-item">
				<view class="item-left">
					<view class="item-left-top">已选</view>
					<view class="item-left-buttom">{{pingjie}}</view>
				</view>
			</view>
		</view>
		<!--  -->
		<view class="yixuan-list">
			<view class="yixuan-top">
				<!--本地存储,每周星期二9点34分清空 -->
				提示 : 最低1元
			<view class="yixuan-buttom">已选{{zhushu}}注,共{{totalPrice}}元</view>
			</view>
		</view>
		<!-- 立即投注 -->
		<view class="lijitouzhu">
			<view class="lijitouzhu-title uni-bg-red" @click="lijitouzhu">立即投注</view>
		</view>
		<uni-popup ref="popup2" type="dialog">
			<uni-popup-dialog type="info" mode="base" message="成功消息" :title="qishu" content="投注成功!" 
			:duration="2000" 
			:before-close="true" 
			@close="close2"
			:list="[]" 
			 @confirm="confirm2">
			 </uni-popup-dialog>
		</uni-popup>
		<uni-popup ref="popup1" type="dialog">
			<uni-popup-dialog type="info" mode="base" message="成功消息" :title="qishu" content="确认添加投注吗?" 
			:duration="2000" 
			:before-close="true" 
			@close="close1"
			:list="[]" 
			 @confirm="confirm1">
			 </uni-popup-dialog>
		</uni-popup>
		<uni-popup ref="popup" type="dialog">
			<uni-popup-dialog type="info" mode="base" message="成功消息" :title="qishu" 
			:list="textlist" 
			:duration="2000" 
			:before-close="true" 
			@close="close"
			 @confirm="confirm">
			 </uni-popup-dialog>
		</uni-popup>
	</view>
</template>

<script>
	import uniPopupDialog from '@/components/uni-popup/uni-popup-dialog.vue';
	import HyjOption   from '@/components/hyj-select/hyj-option.vue';
	import HyjSelect  from '@/components/hyj-select/hyj-select.vue';
	export default {
		components: {
			uniPopupDialog,
			HyjOption,
			HyjSelect
		},
		props: {
			caizhong:{
				type: String,
				default:"六合彩"
			},
			playmode:{
				type: String,
				default:"号码"
			},
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
			},
			data_list1: {
				type: Array,
				default: ''
			},
			data_list2: {
				type: Array,
				default: ''
			},
			yjfl: {
				type: Array,
				default: ''
			},
		},
		
		data() {
			return {
				qishu:Math.round(Math.random()*100),
				moneyUnit:"元",
				stepperNum: 0,
				stepperCacheNum: 1,
				balance: 10,//余额
				num: 1,
				multiple: 1,//注数
				checked: false,
				value: '',
				textlist:{},
				options: [{
						 value: '选项1',
						  label: '奖金1956.00-0%'
						},
								{
						  value: '选项2',
						  label: '奖金1800%~7.8%',
						},]
			};
		},
		name: 'sunui-stepper',
		created() {
			this.stepperNum = this.val;
		},
		mounted() {
		},
		watch: {
			val: function(val) {
				this.stepperNum = this.val;
			}
		},
		computed: {
			totalPrice() {
				return (this.stepperCacheNum * this.num * this.multiple * this.zhushu).toFixed(3);
			}
			,pingjie(){
				var arr = [];
				var arr2 = [];
				var str1 = '';
				var str2 = '';
				str1 = this.data_list1.join(',');
				this.data_list2.forEach(res => {
					str2 = res + ":";
				})
				return str2 + str1;
			}
			,zhushu(){
				let count_zhushu = 0;
				let dividend = 1;
				// console.log(this.data_list1)
				//这里通过不同彩种和玩法, 计算注数
				if(this.caizhong == "不中"){
					if(this.playmode == "五不中") {
						dividend = 5;//C(len,5)
					}
					if(this.playmode == "六不中") {
						dividend = 6;//C(len,6)
					}
					if(this.playmode == "七不中") {
						dividend = 7;//C(len,7)
					}
					if(this.playmode == "八不中") {
						dividend = 8;//C(len,8)
					}
					if(this.playmode == "九不中") {
						dividend = 9;//C(len,9)
					}
					if(this.playmode == "十不中") {
						dividend = 10;//C(len,10)
					}
					if(this.playmode == "十一不中") {
						dividend = 11;//C(len,11)
					}
					if(this.playmode == "十二不中") {
						dividend = 12;//C(len,12)
					}
					if(this.data_list1.length - dividend < 0) {
						return 0;
					}
					count_zhushu =  Math.floor(this.$myJs.factorial_for(this.data_list1.length) / (this.$myJs.factorial_for(dividend))) / this.$myJs.factorial_for((this.data_list1.length - dividend));
				}else if(this.caizhong == "连码"){
					if(this.playmode == "三全中" || this.playmode == "三中二") {
						dividend = 3;
					}
					if(this.playmode == "二全中" || this.playmode == "二中特") {
						dividend = 2;
					}
					if(this.data_list1.length - dividend < 0) {
						return 0;
					}
					count_zhushu =  Math.floor(this.$myJs.factorial_for(this.data_list1.length) / (this.$myJs.factorial_for(dividend))) / this.$myJs.factorial_for((this.data_list1.length - dividend));
				}else if (this.caizhong == "生肖"){
					if(this.playmode == "二肖") {
						dividend = 2;//C(len,6)
					}
					if(this.playmode == "三肖") {
						dividend = 3;//C(len,7)
					}
					if(this.playmode == "四肖") {
						dividend = 4;//C(len,8)
					}
					if(this.playmode == "五肖") {
						dividend = 5;//C(len,5)
					}
					if(this.playmode == "六肖") {
						dividend = 6;//C(len,6)
					}
					if(this.playmode == "七肖") {
						dividend = 7;//C(len,7)
					}
					if(this.playmode == "八肖") {
						dividend = 8;//C(len,8)
					}
					if(this.playmode == "九肖") {
						dividend = 9;//C(len,9)
					}
					if(this.playmode == "十肖") {
						dividend = 10;//C(len,10)
					}
					if(this.playmode == "十一肖") {
						dividend = 11;//C(len,11)
					}
					if(this.playmode == "十二肖") {
						dividend = 12;//C(len,12)
					}
					if(this.data_list1.length - dividend < 0) {
						return 0;
					}
					count_zhushu =  Math.floor(this.$myJs.factorial_for(this.data_list1.length) / (this.$myJs.factorial_for(dividend))) / this.$myJs.factorial_for((this.data_list1.length - dividend));
				} else {
					count_zhushu = this.data_list1.length;
				}
				return Math.round(count_zhushu);
			}
		},
		methods: {
			
			selectChange(e){
				console.log(e)
			},
			less() {
				this.stepperNum <= this.min ? this.stepperNum = this.min : this.stepperNum -= Math.ceil(this.step * 10) / 10;
				this.stepperCacheNum = Number(this.stepperNum.toFixed(1));
				this.emit(this.stepperCacheNum, this.zhushu);
			},
			add() {
				this.stepperNum >= this.max ? this.stepperNum = this.max : this.stepperNum += Math.ceil(this.step * 10) / 10;
				this.stepperCacheNum = Number(this.stepperNum.toFixed(1));
				this.emit(this.stepperCacheNum, this.zhushu);
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
				for (let i = 0; i < this.yjfl.length; i++) {
					this.yjfl[i].Index = false
					if (index == i) {
						this.yjfl[i].Index = !this.yjfl[i].Index;
						this.moneyUnit = this.yjfl[i].title;
						this.multiple = this.yjfl[i].modeValue
					}
				}
			},
			lijitouzhu() {
				this.textlist = [{
					Colorseed:this.playmode,
					type:this.caizhong,
					moneyUnit:this.moneyUnit,
					wfId:888,
					wfName:this.wname,
					moShi:'',
					multiple:1,
					noteAmt:this.multiple,//倍率?
					content:this.pingjie,
					zhushu:this.zhushu,
					amt:this.totalPrice,
					position:"11100"
				}];
				if (this.totalPrice <= this.balance) {
					this.$refs.popup.open()
					return
				}
				if (this.totalPrice >= this.balance) {
					this.$refs.popup.open()
					return
				}
				
			},
			Bettingclick(){
				this.$refs.popup1.open()
			},
			deleteclick(){
			},
			// 立即投注
			close(done) {
				// TODO 做一些其他的事情，before-close 为true的情况下，手动执行 done 才会关闭对话框
				// ...
				done()
			},
			confirm(done, value) {
					this.$refs.popup2.open()
				// 输入框的值
				console.log(value)
				// TODO 做一些其他的事情，手动执行 done 才会关闭对话框
				// ...
				done()
			},
			close1(done, value) {
					this.$refs.popup2.open()
				// 输入框的值
				console.log(value)
				// TODO 做一些其他的事情，手动执行 done 才会关闭对话框
				// ...
				done()
			},
			confirm1(done, value) {
					this.$refs.popup2.open()
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
	.content{
		position: fixed;
		background-color: #fff;
		bottom:0;
		box-shadow: 0 0 10upx 0 #cccccc;
		width: 100%;
	}
	.sunui-stepper {
		display: flex;
		align-items: center;

		view {
			display: inline-block;
			font-size: 40upx;
			font-weight: bold;
			text-align: center;
			// 如果需要边框,则打开本样式 --1
			line-height: 40upx; //1
			border: 1upx solid #eee; //1
			width: 40upx;
		}

		input {
			width: 50upx;
			// 如果不需要边框,则关闭本样式 --2
			// margin: 0 20upx; //2
			text-align: center;
			// background-color: #eee;
		}
		span {
			padding-right: 15upx;
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
		margin-top: 5upx;
	}

	.title-p {
		padding: 5upx 10upx;
	}

	.button {
		width: 50upx;
		height: 50upx;
		text-align: center;
		color: #fff;
		margin: 0 5upx;
		background-color: #ccc;
		border-radius: 15upx;
	}

	.button-color {
		background-color: #F76260;
	}

	.Betting {
		width: 180upx;
		text-align: center;
		border-radius: 10upx;
		color: #fff;
		margin-right: 10upx;
	}

	.caizhong-list {
		margin: 10upx 0 0 0;
	}

	.caizhong-item {
		width: 95%;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-radius: 10upx;
		background-color: #d0e3e6;
	}

	.item-left {
		padding: 5upx 10upx;
		width: 80%;
	}

	.item-left-buttom {
		width: 100%;
		font-size: 24upx;
		color: #999999;
		word-wrap: break-word;
		// word-wrap:break-all;
		// word-break: normal;
	}

	.item-right {
		width: 12%;
		padding: 20upx 0;
		height: auto;
		background-color: #ccc;
		border-top-right-radius: 10upx;
		border-bottom-right-radius: 10upx;
	}

	.item-right span {
		display: block;
		width: 20upx;
		height: 20upx;
		text-align: center;
		margin: 0 auto;
		line-height: 22upx;
		color: #fff;
		background-color: $u-type-info-dark;
		border-radius: 50%;
	}

	.yixuan-top {
		width: 95%;
		margin: auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.yixuan-checkbox {
		display: flex;
	}

	.yixuan-top-left {
		padding: 0upx 10upx;
		color: #999999;
	}

	.yixuan-checkbox {
		padding: 5upx 10upx;
	}

	.yixuan-buttom {
		padding: 5upx 10upx;
	}

	.lijitouzhu-title {
		width: 100%;
		margin: 0 auto;
		text-align: center;
		padding: 15upx 0;
		border-top-left-radius: 20upx;
		border-top-right-radius: 20upx;
		color: #fff;
		font-size: $uni-font-size-lg;
	}
</style>
