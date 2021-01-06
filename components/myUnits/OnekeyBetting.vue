<template name='sunui-stepper'>
	<view class="content">
		<!-- <view class="title">
			<view class="title-p">余额:{{balance}}</view>
			<view class="title-p">已选{{label}}注,共{{totalPrice}}元</view>
		</view> -->
		<view class="caizhonglistonoff" @click="caizhonglistonoff" v-if="!caizhonglistheightonoff">^</view>
		<view class="caizhonglistonoff" @click="caizhonglistonoff" v-if="caizhonglistheightonoff">v</view>
		<view class="Counter-flex">
			<view class="buttom-flex">
				<view class="button" :class="item.Index?'button-color':''" 
				v-for="(item,index) in yjfl" :key="index" @click="buttonclick(index)">
				{{item.title}}
				</view>
			</view>
			<view class="sunui-stepper">
				<view @tap="less" :style="beishu<=min?'color:'+unactive+';':'color:'+active+';'">-</view>
				<input type="number" :value="beishu" @input="iptVal" :disabled="false" /><span>倍</span>
				<view @tap="add" :style="beishu>=max?'color:'+unactive+';':'color:'+active+';'">+</view>
			</view>
			<view class="Betting uni-bg-red" @click="Bettingclick" v-if="zhushu > 0">添加投注</view>
			<view class="Betting uni-bg-red tj-opacity" v-if="zhushu == 0">添加投注</view>
		</view>
		<!-- 已选购彩种列表 -->
		<view class="caizhong-list" :class="caizhonglistheightonoff?'caizhong-list-height':''" v-if="wanfas.length > 0">
			<view class="caizhongkuang">
				<view class="caizhong-item" v-for="(item,index) in wanfas" :key="index">
					<view class="item-left">
						<view class="item-left-top">[任选二_直选复式: {{item.content}}]</view>
						<view class="item-left-buttom">{{item.zhushu}}注*{{item.multiple}}倍*{{item.noteAmt}}={{item.amt}}元 <span>--模式:{{item.moShi}}</span></view>
					</view>
					<view class="item-right" @click="deleteclick(index)"><span>X</span></view>
				</view>
			</view>
		</view>
		<!--  -->
		<view class="yixuan-list">
			<view class="yixuan-top">
				<!-- <view class="yixuan-top-left">已选1单,共三注</view> -->
				<hyj-select v-model="value" placeholder="奖金1956.00-0" @change="selectChange" >
					<hyj-option v-for="(item,index) in options" :label="item.label" :key="index" 
					:value="item.value" :disabled="item.disabled">
					</hyj-option>
				</hyj-select>
				<view class="yixuan-buttom">
					<span style="color: #007AFF;"> 余额:{{balance}}, </span>
					<span style="color: #009a4a;"> 已选{{zhushu}}注, </span>
					<span style="color: #f40000;"> 共{{totalPrice}}元 </span>
				
				</view>
			</view>
		</view>
		<!-- 立即投注 -->
		<view class="lijitouzhu">
			<view class="lijitouzhu-title uni-bg-red" @click="lijitouzhu"  v-if="wanfas.length > 0">立即投注</view>
			<view class="lijitouzhu-title uni-bg-red tj-opacity" v-if="wanfas.length == 0">立即投注</view>
		</view>
		<uni-popup ref="popup2" type="dialog">
			<uni-popup-dialog type="info" mode="base" message="成功消息" :title="qishu"  content="投注成功!" 
			:duration="2000" :before-close="true" @close="close2" :list="[]"
			 @confirm="confirm2"></uni-popup-dialog>
		</uni-popup>
		<uni-popup ref="popup1" type="dialog">
			<uni-popup-dialog type="info" mode="base" message="成功消息" :title="qishu" content="确认添加投注吗?" 
			:duration="2000" :before-close="true" @close="close1" :list="[]"
			 @confirm="confirm1"></uni-popup-dialog>
		</uni-popup>
		<uni-popup ref="popup" type="dialog">
			<uni-popup-dialog type="info" mode="base" message="成功消息" :title="qishu" 
			:list="textlist" :duration="2000" :before-close="true" @close="close"
			 @confirm="confirm">
			 </uni-popup-dialog>
		</uni-popup>
	</view>
</template>

<script>
	import base64 from	"@/common/myBase64.js";
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
				default:"分分彩"
			},
			playmode:{
				type: String,
				default:"复式"
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
			wfData: {
				type: Object,
				default: 0
			},
			// 期号
			currentNumber:{
				type: [String,Object],
				default: ''
			}
		},
		
		data() {
			return {
				qishu:Math.round(Math.random()*100),
				caizhonglistheightonoff:false,
				zhushu:0,
				wanfas:[],
				jiangjinmoshi:1956.00,
				moneyUnit:"元",
				stepperNum: 0,
				beishu:1,
				balance: 10,//余额
				num: 1,
				multiple: 1,//总价
				checked: false,
				value: '',
				textlist:{
					title:'投注包含单挑注单,单挑注单盈利上限为3万元,是否继续投注?',
					Colorseed:'[任选二_直选复式]',
					money:'1600元',
					number:'23,01,06,57,89',
					type:'单挑',
					beishu:1
				},
				options: [{
						 value: '选项1',
						  label: '奖金1956.00-0%'
						},
								{
						  value: '选项2',
						  label: '奖金1800%~7.8%',
						},],
				options_label:'',
			};
		},
		name: 'sunui-stepper',
		created() {
		},
		mounted() {
		},
		watch: {
			number:function() {
				this.labelget()
			}
		},
		computed: {
			totalPrice() {
				return (this.beishu * this.num * this.multiple * this.zhushu).toFixed(3);
			}
			,number(){
				var arr = [];
				var arr2 = [];
				var str1 = '';
				var str2 = '';
				this.data_list1.forEach(res => {
					str1 += "'"+arr.concat(res)+"'";
				});
				
				this.data_list2.forEach(res => {
					if(res == ''){
						str2 += '-' + ',';
					}else{
					str2 += arr2.concat(res) + ',';
					}
				})
				return str1+str2.slice(0,str2.length-1)
			}
		},
		methods: {
			// 奖金返点
			selectChange(e){
				this.options_label = e.slice(2)
				// console.log(this.options_label)
			},
			caizhonglistonoff(){
				this.caizhonglistheightonoff = !this.caizhonglistheightonoff
			},
			labelget(){
				let number = this.number
				this.$myRequest.post(
					'/wanfa/v1/calZs', 
					{content:number,wfId : this.wfData.id},
					{
					success: (res) => {
						this.zhushu = res.data.data
						}
					}
				)
			},
			less() {
				if(this.beishu >0){
				this.beishu = this.beishu -1}
			},
			add() {
				this.beishu = this.beishu+1
				
			},
			emit(val, zhushu,list2onoff) {
				if (Number(val.toFixed(1)) > this.max) {
					val = this.max;
					this.beishu = this.max;
				}
				if (Number(val.toFixed(1)) < this.min) {
					val = this.min;
					this.beishu = this.min;
				}
				this.$emit('change', {
					val: val,
					label: zhushu, // 这是注数
					list2onoff : list2onoff
				});
			},
			iptVal(e) {
				// 暂未开发输入框->sunUI1.0.0,预计sunUI1.0.1
				// Number(e.detail.value) > this.max ? this.stepperNum = this.max : this.stepperNum;
				this.beishu = Number(e.detail.value)
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
				console.log(this.number);
				let content = Object.assign({}, this.number);
				this.textlist = this.wanfas;
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
			// 删除购物车
			deleteclick(index){
				this.wanfas.splice(index,1) 
			},
			// 立即投注
			close(done) {
				// TODO 做一些其他的事情，before-close 为true的情况下，手动执行 done 才会关闭对话框
				// ...
				done()
			},
			confirm(done, value) {
				//组合下单数据
			let xiadan = {"gameId":100,"gameName":"重庆时时彩","qiHao":this.currentNumber,"userName":getApp().globalData.userInfo.userName,
				"wanfas":this.wanfas
				};
				let jsonString = JSON.stringify(xiadan);
				console.log(base64(jsonString));return 1;
				this.$myRequest.get(
									'/sales-order/v1', 
									{orderJson:xiadan},
									{
										success: (res) => {
											if(res.data.code == 200){
											} else {
												// uni.showToast({
												// 	title:res.data.message,
												// 	icon:"none"
												// })
													uni.showToast({
														title: '扫码失败',
														image:'/static/zhongjiang.png', 
														duration: 3000,
													})
											}
										}
									},
								)
				
				done()
			},
			close1(done, value) {
				done()
			},
			confirm1(done, value) {
				let content = this.number;
				let amt = this.totalPrice;
				let cart_obj = Object.assign({}, {
					Colorseed:this.playmode,
					type:this.caizhong,
					moneyUnit:this.moneyUnit,
					wfId:this.wfData.id,
					wfName:this.wfData.name,
					moShi:this.options_label,
					multiple:this.beishu,
					noteAmt:this.multiple,
					content:content,
					zhushu:this.zhushu,
					amt:amt,
					position:"11100"
				})
				this.wanfas.unshift({...cart_obj})
				// TODO 做一些其他的事情，手动执行 done 才会关闭对话框
				this.emit(this.beishu, this.zhushu,true);
				// ...
				done()
				// 将倍数清零
					this.beishu = 1
			},
			// 删除彩种
			close2(done) {
				// TODO 做一些其他的事情，before-close 为true的情况下，手动执行 done 才会关闭对话框
				// ...
				done()
			},
			confirm2(done, value) {
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
			width: 70upx;
			// 如果不需要边框,则关闭本样式 --2
			margin: 0 10upx; //2
			text-align: center;
			background-color: #eee;
			
		}
		span {
			padding-right: 15upx;
		}

	}

	.caizhonglistonoff{
		width: 50upx;
		height: 30upx;
		text-align: center;
		margin: 0 auto;
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
	
	.caizhongkuang{
		 overflow: auto;
		 height: 100%;
	}

	.caizhong-list {
		margin: 10upx 0 0 0;
		width: 100%;
		height: 120upx;
		overflow: hidden;
	}
	
	.caizhong-list-height{
		height: 100%;
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
	}

	.item-left-buttom {
		font-size: 24upx;
		color: #999999;
	}

	.item-right {
		width: 12%;
		padding: 20upx 0;
		height: auto;
		background-color: #ccc;
		border-top-right-radius: 10upx;
		border-bottom-right-radius: 10upx;
	}
	
	.tj-opacity{
		opacity: 0.6;
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
