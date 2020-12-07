<template>
	<view>
		<dynamic :minute="minute" :hour = 'hour' :second = "second"></dynamic>
	</view>
</template>

<script>
	import dynamic from '@/components/myUnits/dynamic.vue';
	export default {
		components: {
			dynamic
		},
		data() {
			return {
				hour : Math.round(Math.random()*10),
				minute : Math.round(Math.random()*10),
				second : Math.round(Math.random()*10),
				title: 'Hello',
				list: [
					{
					src: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3511544063,4112539952&fm=26&gp=0.jpg",
					url: "pages/tabbar/tabbar-4/tabbar-4",
					daojishi: "15:54:17",
					name: "幸运飞艇44",
				    }, 
					{
					src: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3511544063,4112539952&fm=26&gp=0.jpg",
					url: "pages/tabbar/tabbar-4/tabbar-4",
					daojishi: "15:54:17",
					name: "幸运飞艇",
					}, 
				],
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>
<style>

</style>
