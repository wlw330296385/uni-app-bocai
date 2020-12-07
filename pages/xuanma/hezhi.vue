<template>
	<view>
		<hezhi-unit :weishu = "weishu" :hezhi = "hezhi">
			
		</hezhi-unit>
	</view>
</template>

<script>
	import	hezhiUnit from "@/components/myUnits/zhixuanhezhi.vue";
	export default {
		components:{hezhiUnit},
		data() {
			return {
				weishu : ['万位', '千位', '百位'],
				hezhi : 
					[
						{
							'title' : '和值',
							'nums' : [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],
						}
					] 
				
			};
		}
	}
</script>

<style lang="scss">

</style>
