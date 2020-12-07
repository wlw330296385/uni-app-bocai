<template>
	<view class="page">
		<navigationbar></navigationbar>
		<Typeslist></Typeslist>
		<MyTextarea :label='2' :max="99" :val="0" :step="1" :min="0" @change="stepper3"></MyTextarea>
	</view>
</template>

<script>
	import navigationbar from "@/components/wuxingzhixuanfushi/navigationbar.vue";
	import Typeslist from "@/components/myUnits/Typeslist.vue";
	import MyTextarea from "@/components/myUnits/OnekeyBetting.vue";
	export default {
		components:{
			navigationbar,
			Typeslist,
			MyTextarea
		},
		data() {
			return {
				stepper3(e){
					
				}
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.page{
		padding-top: 70upx;
	}
</style>
