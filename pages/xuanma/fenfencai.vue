<template>
	<view>
		<view>
			<cmd-textarea :weishu="weishu" :weishu_list = "weishu_list"></cmd-textarea>
		</view>
		<view>
			
		</view>
	</view>
</template>

<script>
	import cmdTextarea from "@/components/myUnits/cmd-textarea.vue";
	export default {
		components:{cmdTextarea},
		data() {
			return {
				weishu : true,
				weishu_list : ['万位', '千位', '百位','十位']
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
