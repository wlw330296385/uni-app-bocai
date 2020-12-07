<template>
	<view>
		<digits v-for="(item, index) in digits" :key = "index" :nums="nums" :digit = "item" ></digits>
	</view>
</template>

<script>
	
	import digits from '@/components/myUnits/digits.vue'; 
	export default {
		components:{digits},
		data() {
			return {
				nums: [0,1,2,3,4,5,6,7,8,9,10],
				digits: ['N选1', '万位', '千位', '百位']
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
