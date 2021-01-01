<template>
	<view>
		<dataChapter></dataChapter>
		<view class="page">
			<view class="title">
				<view class="title-left">奖期</view>
				<view class="title-right">开奖</view>
			</view>
			<view class="list" v-for="(item,index) in list" :key="index" :class="index%2 == 0?'list-bgc':''">
				<view class="title-left">{{item.num}}期</view>
				<view class="title-flex">
					<view class="button" v-for="(item,index) in 5" :key="index">1</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import dataChapter	from "@/components/myCommon/date-chapter.vue";
	export default {
		components:{dataChapter},
		data() {
			return {
				gameId: 100,
				pageIndex:1,
				pageSize : 12,
				list:[]
			}
		},
		onLoad() {
			this.getData(this.gameId, this.pageIndex, this.pageSize);
		},
		methods: {
			// onBackPress(event){
			// 	if(event.from == navigateBack){
					
			// 	}else{
			// 		uni.navigateBack(1)
			// 	}
			// },
			getData(gameId, pageIndex, pageSize) {
				this.$myRequest.get("/qihao/v1", {gameId:gameId, pageIndex:pageIndex, pageSize:pageSize},
				{
					success: (res) => {
						this.list = res.data.data.content;
					}
				})
			},
			onNavigationBarButtonTap(e) {//点击事件
				uni.redirectTo({
					url: '/pages/xuanma/prizetrend?id=1'
				})
				}
			}
	}
</script>

<style lang='scss'>
	.page{
		margin: 0 auto;
		width: 95%;
		border-top-left-radius:15px;
		border-top-right-radius:15px;
		background-color: #021769;
	}
	.title{
		border-top-left-radius:15px;
		border-top-right-radius:15px;
		background-color: #342075;
		display: flex;
		color: #fff;
		justify-content: space-between;
	}
	.title-left{
		padding: 4px 10px;
		color: #fff;
	}
	.title-right{
		padding: 4px 115px 0 0;
	}
	.list{
		padding: 5px 0;
		display: flex;
		justify-content: space-between;
	}
	.button{
		width: 25px;
		height: 25px;
		border-radius: 50%;
		text-align: center;
		line-height: 25px;
		background-image: $uni-bg-color-linear;
		margin: 0 5upx;
		/* background-image: $uni-bg-color-linear; */
		/* color: #fff; */
	}
	.title-flex{
		padding: 5px 20px 0 0;
		display: flex;
	}
	.list-bgc{
		background-color: #444691;
	}
</style>
