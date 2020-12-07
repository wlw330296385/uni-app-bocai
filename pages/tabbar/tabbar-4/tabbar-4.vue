<template>
	<view class='purchase-list'>
		<scroll-view class="purchase-body" scroll-y="true">
			<my-unit></my-unit>
		</scroll-view>
	</view>
</template>
<script>
	import myUnit from '@/components/myUnits/unit.vue'
	export default {
		components:{myUnit},
		data() {
			return {
				
			}
		},
		onLoad(){
		},
		methods: {
			
		},
		
	}
</script>
<style lang='scss'>
	.purchase-list {
		background-color: #f5f5f5;
		height: 100%;
		overflow: hidden;
		
		.purchase-body{
			height: calc(100% - 88upx);
			overflow: auto
		}
	}
</style>