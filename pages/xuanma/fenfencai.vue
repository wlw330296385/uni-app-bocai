<template>
	<view>
		<view class="page">
			<navigationbar></navigationbar>
			<dynamic></dynamic>
			<cmd-textarea :weishu="weishu" :weishu_list = "weishu_list"></cmd-textarea>
			<MyTextarea  :label='2' :max="99" :val="0" :step="1" :min="0" @change="stepper3"></MyTextarea>
		</view>
		<view>
			
		</view>
	</view>
</template>

<script>
	import navigationbar from "@/components/wuxingzhixuanfushi/navigationbar.vue";
	import cmdTextarea from "@/components/myUnits/cmd-textarea.vue";
	import dynamic from "@/components/myUnits/dynamic.vue";
	import MyTextarea from "@/components/myUnits/OnekeyBetting.vue";
	export default {
		components:{cmdTextarea,dynamic,MyTextarea,navigationbar},
		data() {
			return {
				weishu : true,
				weishu_list : ['万位', '千位', '百位','十位']
			}
		},
		methods: {
			stepper3(e){
				
			}
		}
	}
</script>

<style>
	.page{
		padding-top: 70upx;
	}
</style>
