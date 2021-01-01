<template>
	<view>
		<view class="page">
	<navigationbar :playmode = "playmode" :playmode1="playmode1" :caizhong = "caizhong"></navigationbar>
		<dynamic :hour="hour" :minute='minute' :second='second'></dynamic>
			<cmd-textarea :weishu="weishu" :weishu_list="weishu_list" @click_list1="click_list1" @click_list2="click_list2"></cmd-textarea>
			<OnekeyBetting :label='2' :max="99" :val="0" :step="1" :min="0" 
				 @change="stepper3" 
				 :data_list1="data_list1"
				 :data_list2="data_list2"
				 :playmode = "playmode"
				 :caizhong = "caizhong"
				 :yjfl = "yjfl"
			 ></OnekeyBetting>
		</view>
		<view>
		</view>
	</view>
</template>

<script>
	import navigationbar from "@/components/wuxingzhixuanfushi/navigationbar.vue";
	import cmdTextarea from "@/components/myUnits/cmd-textarea.vue";
	import dynamic from "@/components/myUnits/dynamic.vue";
	import OnekeyBetting from "@/components/myUnits/OnekeyBetting.vue";
	export default {
		components: {
			cmdTextarea,
			dynamic,
			OnekeyBetting,
			navigationbar
		},
		data() {
			return {
				caizhong:"分分彩",
				playmode:"直选",
				playmode1:"复式",
				weishu: true,
				hour: Math.round(Math.random() * 10),
				minute: Math.round(Math.random() * 10),
				second: Math.round(Math.random() * 10),
				weishu_list: [{
					title: '万位',
					clickonoff: false
				}, {
					title: '千位',
					clickonoff: false
				}, {
					title: '百位',
					clickonoff: false
				}, {
					title: '十位',
					clickonoff: false
				}],
				data_list1: [],
				data_list2: [],
				yjfl:[]
			}
		},
		onLoad() {
			this.digitslist();
		},
		methods: {
			stepper3(e) {},
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
	.page {
		padding-top: 70upx;
		padding-bottom: 500upx;
	}
</style>
