<template>
	<view class="conter">
		<navigationbar></navigationbar>
		<dynamic></dynamic>
		<hezhi-unit :weishu="weishu" :hezhi="hezhi">

		</hezhi-unit>

		<MyTextarea :label='2' :max="99" :val="0" :step="1" :min="0" @change="stepper3"></MyTextarea>

	</view>
</template>

<script>
	
		import navigationbar from "@/components/wuxingzhixuanfushi/navigationbar.vue";
	import hezhiUnit from "@/components/myUnits/zhixuanhezhi.vue";
	import dynamic from "@/components/myUnits/dynamic.vue";
	import MyTextarea from "@/components/myUnits/OnekeyBetting.vue";
	export default {
		components: {
			hezhiUnit,
			dynamic,
			MyTextarea,
			navigationbar
		},
		data() {
			return {
				weishu: ['万位', '千位', '百位'],
				hezhi: [{
					'title': '和值',
					'nums': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
				}]

			};
		},
		methods:{
			stepper3(e){
				
			}
		}
	}
</script>

<style lang="scss">
.conter{
	padding-bottom: 500upx;
	padding-top: 70upx;
}
</style>
