<template>
	<view class="conter">
		<navigationbar></navigationbar>
			<dynamic></dynamic>
		<digits v-for="(item, index) in digits" :key = "index" :nums="nums" :digit = "item" ></digits>
		<MyTextarea  :label='2' :max="99" :val="0" :step="1" :min="0" @change="stepper3"></MyTextarea>
	</view>
</template>

<script>
	import navigationbar from "@/components/wuxingzhixuanfushi/navigationbar.vue";
	import digits from '@/components/myUnits/digits.vue'; 
	import dynamic from "@/components/myUnits/dynamic.vue";
	import MyTextarea from "@/components/myUnits/OnekeyBetting.vue";
	export default {
		components:{digits,dynamic,MyTextarea,navigationbar},
		data() {
			return {
				nums: [0,1,2,3,4,5,6,7,8,9,10],
				digits: ['N选1', '万位', '千位', '百位']
			}
		},
		methods: {
			stepper3(e){
				
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
