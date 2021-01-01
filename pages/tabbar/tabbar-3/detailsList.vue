<template>
	<view>
		<view class="selection">
			<dataChapter>
				
			</dataChapter>
			<selectCaizhong>
				
			</selectCaizhong>
		</view>
		<touzhuListUnit>
			
		</touzhuListUnit>
		
	</view>
</template>

<script>
	import touzhuListUnit from	"@/components/myCommon/touzhu-list-unit.vue";
	import dataChapter from "@/components/myCommon/date-chapter.vue";
	import selectCaizhong from "@/components/myCommon/select-caizhong.vue";
	export default {
		components: {touzhuListUnit,dataChapter,selectCaizhong},
		data() {
			return {
				
			};
		},
		onLoad: function(options) {
		},
		methods: {
		
			
		}
	}
</script>

<style lang="scss">

</style>
