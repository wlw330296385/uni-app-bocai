<template>
	<view class="content">
	<!-- navigationbar -->
		<navigationbar :playmode = "playmode" :playmode1="playmode1" :caizhong = "caizhong" :gameId = "gameId" @getwfData="getwfData"></navigationbar>
		<dynamic :hour="hour" :minute='minute' :second='second'></dynamic>
		<sampleHelp :wfDes="wfDes" :wfHelp="wfHelp" :wfExample="wfExample"></sampleHelp>
		<digits :codebox = "codebox"
		@click_list1="fresh_click_list1"
		@click_list2="fresh_click_list2"
		ref="digits"
		>
		</digits>
		<OnekeyBetting :label='2' :max="99" :val="0" :step="1" :min="0" 
			@change="stepper3" 
			:data_list1="data_list1"
			:data_list2="data_list2"
			:wfData = "wfData"
			:playmode = "playmode"
			:caizhong = "caizhong"
			:playmode1 = "playmode1"
			:yjfl = "yjfl"
			:currentNumber = "currentNumber"
		 ></OnekeyBetting>
	</view>
</template>

<script>
	import navigationbar from "@/components/wuxingzhixuanfushi/navigationbar.vue";
	import sampleHelp from "@/components/myUnits/sampleHelp.vue";
	import digits from '@/components/myUnits/digits.vue'; 
	import dynamic from "@/components/myUnits/dynamic.vue";
	import OnekeyBetting from "@/components/myUnits/OnekeyBetting.vue";
	export default {
		components:{
			navigationbar,
			digits,dynamic,OnekeyBetting,sampleHelp},
		data() {
			return {
				currentNumber:'',
				wfDes:'',
				wfHelp:'',
				wfExample:"",
				gameId:100,
				wfData:{id:1000038,name:""},
				caizhong:"分分彩",
				playmode:"直选",
				playmode1:"复式",
				hour: Math.round(Math.random() * 10),
				minute: Math.round(Math.random() * 10),
				second: Math.round(Math.random() * 10),
				nums: [0,1,2,3,4,5,6,7,8,9],
				codebox: [],
				data_list1:[],
				data_list2:[],
				// 元角分离
				yjfl:[
					],
			}
		},
		onLoad(option) { 
			this.digitslist();
			if (option.gameId) {
				this.gameId = option.gameId
				this.wfData.id = option.gameId;
			}
			//请求期号
			this.getQihao();
		},
		methods: {
			getQihao(){
				this.$myRequest.get(
					'/qihao/v1/curqihao', 
					{gameId:this.gameId},
					{
						success: (res) => {
							if(res.data.code == 200){
								this.currentNumber = res.data.data.currentNumber
							} else {
								uni.showToast({
									title:res.data.message,
									icon:"none"
								})
							}
						}
					},
				)
			},
			getwfData(e){
				this.wfData = e
			},
			stepper3(e){
				// console.log(e)
				
				if(e.list2onoff == true){
					for(let i=0 ; i<this.codebox.length ;i++){
					this.$refs.digits.none_choose(i);
					}
				
				}
			},
			fresh_click_list1(e) {
				this.data_list1 = e;
			},
			fresh_click_list2(e) {
				this.data_list2 = e;
			},
			digitslist(){
				this.$myRequest.get(
					'/wanfa/v1/wf', 
					{userId:5, wfId:this.wfData.id},
					{
					success: (res) => {
							if(res.data.code == 200){
								//组合时分秒
								res.data.data.models.forEach(item=>{
									this.yjfl.push({
										title:item.modeName,
										Index:false,
										modeValue:item.modeValue
									})
								})
								this.yjfl[0].Index = true;
								//组合codebox数据
								let codebox = [];
								res.data.data.layout.codebox.forEach(item=>{
									//把"code": "0|1|2|3|4|5|6|7|8|9", 转成数组：[{number: 9,onoff: false}]
									let arr = [];
									arr = item.code.split('|');
									let codebox_item = [];
									for(let i in arr){
										codebox_item.push(
											{number: arr[i],onoff: false}
										)
									}
									//加上zongOnoff1这串数组
									codebox.push(
										{
										  "col": item.col,
										  "code": codebox_item,
										  "index": item.index,
										  "zongOnoff1": {
												quanonoff: false,
												daonoff: false,
												xiaoonoff: false,
												jionoff: false,
												ouonoff: false,
												qingonoff: false,
										   },
										  "title": item.title
										}
									);
								})
								this.codebox = codebox;
								console.log(this.codebox);
								//拿到des和example和helps传参
								this.wfDes = res.data.data.des;
								this.wfHelp = res.data.data.helps;
								this.wfExample = res.data.data.example;
								
							}else{
								
								uni.showToast({
									title:res.data.message,
									icon:"none"
								})
							}
						}
					}
				)
			}
		}
	}
</script>

<style>
	.content{
		margin-top: 60upx;
	}
</style>
