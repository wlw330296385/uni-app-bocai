<template>
	<view class="page">
	<!-- navigationbar -->
	<navigationbar :playmode = "playmode" :playmode1="playmode1" :caizhong = "caizhong"></navigationbar>
		<dynamic :hour="hour" :minute='minute' :second='second'></dynamic>
		<sampleHelp></sampleHelp>
		<daxiaodanshuang @click_list1="click_list1" :codeBox = "codeBox"></daxiaodanshuang>
		<OnekeyBetting :label='2' :max="99" :val="0" :step="1" :min="0" 
		@change="stepper3"
		:data_list1 = "data_list1"
		:data_list2 = "data_list2"
		 :playmode = "playmode"
		 :caizhong = "caizhong"
		 :yjfl="yjfl"
		></OnekeyBetting>
	</view>
</template>

<script>
	import navigationbar from "@/components/wuxingzhixuanfushi/navigationbar.vue";
	import sampleHelp from "@/components/myUnits/sampleHelp.vue";
	import dynamic from "@/components/myUnits/dynamic.vue";
	import daxiaodanshuang from "@/components/myUnits/daxiaodanshuang.vue";
	import OnekeyBetting from "@/components/myUnits/OnekeyBetting.vue";
	export default {
		components:{
			navigationbar,
			daxiaodanshuang,
			OnekeyBetting,
			dynamic,
			sampleHelp,
		},
		data() {
			return {
				caizhong:"分分彩",
				playmode:"大小",
				playmode1:"单双",
				hour: Math.round(Math.random() * 10),
				minute: Math.round(Math.random() * 10),
				second: Math.round(Math.random() * 10),
				data_list1 : []
				,data_list2 : []
				,codeBox:[
					// {		"title":"万位",
					// 			"code":[
					// 				{title:"豹子",onoff: false},
					// 				{title:"顺子",onoff: false},
					// 				{title:"对子",onoff: false},
					// 				],
					// 			"index":0,"col":1},
							{	"title":"千位",
								"code":[
									// {title:"大",onoff: false},
									// {title:"小",onoff: false},
									{title:"单",onoff: false},
									{title:"双",onoff: false},
									],
								"index":0,"col":1}
						]
				,yjfl:[]
			}
		},
		onLoad() {
			this.digitslist()
		},
		methods: {
			stepper3(e){
					
				},
			click_list1(e){
				this.data_list1 = e;
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
	.page{
		padding-top: 70upx;
	}
</style>
