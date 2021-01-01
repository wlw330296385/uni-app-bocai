<template>
	<view class="conter">
	<!-- navigationbar -->
	<navigationbar :playmode = "playmode" :playmode1="playmode1" :caizhong = "caizhong"></navigationbar>
		<dynamic :hour="hour" :minute='minute' :second='second'></dynamic>
		<sampleHelp></sampleHelp>
		<digits :codebox = "codebox"
		@click_list1="fresh_click_list1" @click_list2="fresh_click_list2">
		</digits>
		<OnekeyBetting :label='2' :max="99" :val="0" :step="1" :min="0" 
			 @change="stepper3" 
			 :data_list1="data_list1"
			 :data_list2="data_list2"
			 :playmode = "playmode"
			 :caizhong = "caizhong"
			:playmode1 = "playmode1"
			:yjfl = "yjfl"
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
				caizhong:"分分彩",
				playmode:"直选",
				playmode1:"复式",
				hour: Math.round(Math.random() * 10),
				minute: Math.round(Math.random() * 10),
				second: Math.round(Math.random() * 10),
				nums: [0,1,2,3,4,5,6,7,8,9],
				"codebox": [
				        {
				          "col": 1,
				          "code": [{
							number: "一区",
							onoff: false
						}, {
							number: "二区",
							onoff: false
						}, {
							number: "三区",
							onoff: false
						}, {
							number: "四区",
							onoff: false
						}, {
							number: "五区",
							onoff: false
						}],
				          "index": 1,
							"zongOnoff1": {
								quanonoff: false,
								daonoff: false,
								xiaoonoff: false,
								jionoff: false,
								ouonoff: false,
								qingonoff: false,
							},
				          "title": "万位"
				        },
				        {
				          "col": 1,
				          "code": [{
							number: 0,
							onoff: false
						}, {
							number: 1,
							onoff: false
						}, {
							number: 2,
							onoff: false
						}, {
							number: 3,
							onoff: false
						}, {
							number: 4,
							onoff: false
						}, {
							number: 5,
							onoff: false
						}, {
							number: 6,
							onoff: false
						}, {
							number: 7,
							onoff: false
						}, {
							number: 8,
							onoff: false
						}, {
							number: 9,
							onoff: false
						}],
				          "index": 3,
							"zongOnoff1": {
								quanonoff: false,
								daonoff: false,
								xiaoonoff: false,
								jionoff: false,
								ouonoff: false,
								qingonoff: false,
							},
				          "title": "千位"
				        },
				        {
				          "col": 1,
				          "code": [{
							number: 0,
							onoff: false
							}, {
								number: 1,
								onoff: false
							}, {
								number: 2,
								onoff: false
							}, {
								number: 3,
								onoff: false
							}, {
								number: 4,
								onoff: false
							}, {
								number: 5,
								onoff: false
							}, {
								number: 6,
								onoff: false
							}, {
								number: 7,
								onoff: false
							}, {
								number: 8,
								onoff: false
							}, {
								number: 9,
								onoff: false
							}],
				          "index": 4,
							"zongOnoff1": {
								quanonoff: false,
								daonoff: false,
								xiaoonoff: false,
								jionoff: false,
								ouonoff: false,
								qingonoff: false,
							},
				          "title": "百位"
				        }
				      ],
				data_list1:[],
				data_list2:[],
				// 元角分离
				yjfl:[
					],
			}
		},
		created() {
			this.digitslist()
		},
		methods: {
			stepper3(e){
				console.log(e)
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
					{userId:5,wfId : 1000038},
					{
					success: (res) => {
							if(res.data.code == 200){
								res.data.data.models.forEach(item=>{
									this.yjfl.push({
										title:item.modeName,
										Index:false,
										modeValue:item.modeValue
									})
								})
								this.yjfl[0].Index = true
							}else{
								alert(res.data.message)
							}
						}
					}
				)
			}
		}
	}
</script>

<style>
	.conter{
		padding-bottom: 500upx;
		padding-top: 70upx;
	}
</style>
