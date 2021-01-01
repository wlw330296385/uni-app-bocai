<!-- 五星直选复式组件 -->
<template>
	<view>
		<view class="button" v-for="(item,index) in list" :key="index" @mousedown="buttonclick(index)">
			<view class="title">{{item.name}}</view>
			<view class="hr"></view>
			<view class="list">
				<span class="botton" 
				v-for="(item1,index1) in item.wfs" 
				:key="index1" 
				:class="index == listindex && index1==textlistindex?'on1':''"
				@click="clickindex(index1,item1)"
				>{{item1.name}}</span>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: ["list"],
		data() {
			return {
				listindex:0,
				textlistindex:0,
			}
		},
		methods: {
			buttonclick(index){
				this.listindex = index;
			},
			clickindex(index,item1){
				this.textlistindex = index;
				this.$emit("send",item1);
			}
		}
	}
</script>
<style>
	.button {
		width: 100%;
		background-color: #ffffff;
		border-radius: 15px;
		color: #fff;
		margin-bottom: 10px;
	}

	.title {
		padding: 5px 15px;
		color: #000000;
	}

	.list {
		display: flex;
		flex-flow: wrap;
		justify-content: center;
		align-content: flex-start;
	}
	.hr{
		width: 100%;
		height: 1px;
		background:#969696;
	}

	.botton {
		width: 100px;
		height: 30px;
		margin: 10px;
		border-radius: 15px;
		text-align: center;
		line-height: 30px;
		background-color: #007AFF;
	}
	.on1{
		background:#F76260;
	}
</style>
