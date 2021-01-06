<template>
	<view class="content">
	<!-- navigationbar -->
	<navigationbar :playmode = "playmode" :playmode1="playmode1" :caizhong = "caizhong"></navigationbar>
		<dynamic :hour="hour" :minute='minute' :second='second'></dynamic>
		<sampleHelp></sampleHelp>

		<hezhi-unit :weishu="weishu" :hezhi="hezhi" @click_list1 = "click_list1" @click_list2="click_list2" >

		</hezhi-unit>

		<OnekeyBetting :label='2' :max="99" :val="0" :step="1" :min="0" 
		@change="stepper3"
		:data_list1 = "data_list1"
		:data_list2 = "data_list2"
		 :playmode = "playmode"
		 :wfData = "wfData"
		 :caizhong = "caizhong"
		 :yjfl = "yjfl"
		></OnekeyBetting>
	</view>
</template>

<script>
	import navigationbar from "@/components/wuxingzhixuanfushi/navigationbar.vue";
	import sampleHelp from "@/components/myUnits/sampleHelp.vue";
	import hezhiUnit from "@/components/myUnits/zhixuanhezhi.vue";
	import dynamic from "@/components/myUnits/dynamic.vue";
	import OnekeyBetting from "@/components/myUnits/OnekeyBetting.vue";
	export default {
		components: {
			
			navigationbar,
			hezhiUnit,
			dynamic,
			OnekeyBetting,
			sampleHelp
		},
		data() {
			return {
				gameId:100,
				wfData:{id:1000038,name:""},
				caizhong:"广西时时彩",
				playmode:"和值",
				playmode1:"复式",
				hour: Math.round(Math.random() * 10),
				minute: Math.round(Math.random() * 10),
				second: Math.round(Math.random() * 10),
				weishu: ['万位', '千位', '百位'],
				hezhi: [{
					'title': 'zuliu',
					'nums': [1, 2, 3, 4, 5, 6, 7, 8, 9],
				}],
				wanfas: [],
				data_list1: [],
				data_list2: [],
				yjfl:[]
			};
		},
		onLoad(option) { 
			this.digitslist();
			if (option.gameId) {
				this.gameId = option.gameId
				this.wfData.id = option.gameId;
			}
		},
		methods: {
			//接受多少注多少元
			stepper3(e) {

			},
			getwfData(e){
				this.wfData = e
			},
			click_list1(e) {
				this.data_list1 = e;
				// console.log(this.data_list1)
			},
			click_list2(e) {
				this.data_list2 = e;
				// console.log(this.data_list2)
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

<style lang="scss">
	
	.content{
		margin-top: 60upx;
	}
</style>
