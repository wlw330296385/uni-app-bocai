<!-- 公告详情 -->
<template>
	<view class="page">
		<view class="navbutton">
			<view class="navbutton-left" @click="gotoback">
					<img class="header-left-img" src="@/static/fanhui.png" alt="">
			</view>
			<view class="navbutton-title">消息详情</view>
			<view class="navbutton-right"></view>
		</view>
		<view class="header">
			<h2>{{currentContent.title}}</h2>
			<p>{{currentContent.sendTime}}</p>
		</view>
		<hr class="hr">
		<view class="content" v-html="currentContent.body">
			
		</view>
	</view>
</template>

<script>
	export default {
		props:["currentContent"],
		data() {
			return {
				
			};
		},
		methods:{
			gotoback(){
				this.$emit('close',true)
			}
		}
	}
</script>

<style lang="scss">
	.navbutton{
		display: flex;
		justify-content: space-between;
		align-items: center;
		}
		.navbutton-left{
		}
		.navbutton-title{
			font-weight: bold;
			font-size: 18px;
		}
	.page{
		padding: 5px 20px;
		background-color: #fff;
		height: 1200upx;
		}
		.header p {
			color: #999999;
			margin:0 auto 10px ;
		}
		.hr{
		border: 1px dashed #999999;	
		}
		.content{
			margin: 10px 0;
		}
		.buttom-title{
			margin: 30px auto;
		}
		.header-left-img{
			width: 35upx;
			height: 35upx;
		}
</style>
