<template>
	<view class="selection-top">
		<view class="selection-top-title">日期:
			<view class="selection-top-span" 
			:class="clickonoff == index?'selection-top-color':''" 
			v-for="(item,index) in list"
			 :key="index" @click="clickindex(index)">{{item}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: ['今日', '近三天', '近七天', '近半月'],
				clickonoff:0
			};
		},
		methods: {
			clickindex(index) {
				for (let i = 0; i < this.list.length; i++) {
					if (index == i) {
						this.clickonoff = index;
					}
				}
			}
		}
	}
</script>

<style lang="scss">
	.selection-top {
		padding: 15px;
		.selection-top-title {
			border-left: 4px solid #007AFF;
			padding: 0 10px;
			display: flex;
			justify-content: space-between;
			
			.selection-top-span {
				width: 18%;
				height: 25px;
				border-radius: 10px;
				display: block;
				text-align: center;
			}
			.selection-top-color {
				background-color: $theme-color;
				color: #fff;
			}
		}
	}
	
	
	
	
	
</style>
