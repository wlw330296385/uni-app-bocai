<template>
	<view class="r-top">
		<view class="title">
			<view class="title-p">
				<span class="title-span">?</span>
				<span>手动输入2个号码组成一注,所选号码的第一位,第二位与开奖号码相同,即为中奖</span>
			</view>
			<view class="right-buttom">
				<view class="right-buttom-list" @click="clickhelp">帮助</view>
				<view class="right-buttom-list" @click="clickExamples">示例</view>
			</view>
		</view>
		<textarea class="textarea-class" placeholder-style="color:rgba(153,153,153,1);" v-model="content" />
		<view class="r-top-t">
		 	<view class="r-top-buttom" @click="Delete">删除重复号</view>
			<view class="r-top-buttom" @click="empty">清空</view>
		 </view>
		 <view class="r-botom">
			 <span>每注号码之间请用一个空格[   ],逗号[ , ]或者分号[ : ]隔开</span>
		 </view>
	
	</view>
</template>
<script>	
	export default {
		components:{
		},
		computed:{
		},
		props:{
			pl:{
				type: String,
				default: "请输入"
			},
		},
		data() {
			return {
				content:'',
				visible1: false,
				visible2: false,
			}
		},
		methods:{
			Delete(){
			},
			empty(){
				this.content = '';
			},
	
		}
	}
</script>

<style lang="scss">
	.title{
		display: flex;
		padding: 5px;
	}
	.right-buttom{
		display: flex;
	}
	.right-buttom-list{
		width: 50px;
		height: 25px;
		border: 1px solid #cccccc;
		border-radius: 5px;
		color: #999;
		text-align: center;
		margin-left: 5px;
	}
	.r-top{
		padding: 10rpx;
		background: #FFFFFF;
		border-radius: 20rpx;
	}
	.r-top-t{
		display: flex;
		justify-content: space-between;
		font-family:PingFang SC;
		font-weight:400;
		line-height:20px;
		color:rgba(153,153,153,1);
		opacity:1;
	}
	.r-top-buttom{
		width: 80px;
		height: 30px;
		color: #fff;
		text-align: center;
		line-height: 30px;
		margin:15px 10px;
		border-radius: 5px;
		background-color: #b46dfa;
	}
	.title-p{
		width: 70%;
		font-size: 12px;
		display: flex;
		color: #9c9c9c;
	}
	.title-span{
		display: block;
		width: 25px;
		height: 15px;
		text-align: center;
		line-height: 14px;
		color: #fff;
		border: 1px solid #cccccc;
		border-radius: 50%;
		background-color: #ccc;
	}
	.textarea-class{
		margin: 0 auto;
		width: 95%;
		border-radius: 10px;
		border:1px solid #cccccc;
		padding: 5px;
	}
	.r-botom{
		padding:0 10px;
		color: #a5a5a5;
		}
	/deep/.demo-popup1{
	  .s-popup-wrap{
		  top:45px;
		  left: 50px;
		  right: 50px;
		  bottom: 100px;
	  }
	}
	/deep/.demo-popup2{
	  .s-popup-wrap{
		 top:45px;
		 left: 50px;
		 right: 50px;
		 bottom: 100px;
	  }
	}
</style>
