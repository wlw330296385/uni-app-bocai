<template>
	<view class="content">
	<navigationbar :playmode = "playmode" :playmode1="playmode1" :caizhong = "caizhong" @wfid="wfid"></navigationbar>
		<dynamic :hour="hour" :minute='minute' :second='second'></dynamic>
		<sampleHelp></sampleHelp>

		<hezhi-unit :weishu="weishu" :hezhi="hezhi" @click_list1 = "click_list1" @click_list2="click_list2">

		</hezhi-unit>

		<OnekeyBetting  :max="99" :val="0" :step="1" :min="0" 
		@change="stepper3"
		:data_list1 = "data_list1"
		:data_list2 = "data_list2"
		:wfid = "wfID"
		 :playmode = "playmode"
		 :caizhong = "caizhong"
		 :yjfl="yjfl"
		></OnekeyBetting>
	</view>
</template>

<script>
	import navigationbar from "@/components/wuxingzhixuanfushi/navigationbar.vue";
	import sampleHelp from "@/components/myUnits/sampleHelp.vue";
	import hezhiUnit from "@/components/myUnits/squareButton.vue";
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
				wfID:'',
				caizhong:"新疆分分彩",
				playmode:"大小单双",
				playmode1:"中三个大小个数",
				weishu: ['万位', '千位', '百位'],
				hour: Math.round(Math.random() * 10),
				minute: Math.round(Math.random() * 10),
				second: Math.round(Math.random() * 10),
				hezhi: [{
					'title': '和值',
					'nums': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
				}]
				,data_list1 : []
				,data_list2 : []
				,yjfl:[]
			};
		},
		onLoad() {
			this.digitslist();
		},
		methods: {
			wfid(e){
				this.wfID = e
			},
			//接受多少注多少元
			stepper3(e) {
				
			}
			,click_list1(e) {
				this.data_list1 = e;
				// console.log(this.data_list1)
			}
			,click_list2(e) {
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
