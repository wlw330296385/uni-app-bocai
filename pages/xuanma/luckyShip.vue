<template>
	<view>
		<lucky-ship :shiplist="shiplist"></lucky-ship>
	</view>
</template>

<script>
	import luckyShip from "@/components/myUnits/lucky-ship.vue";
	export default {
		components : {luckyShip},
		data() {
			return {
				shiplist : ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10']
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">

</style>
