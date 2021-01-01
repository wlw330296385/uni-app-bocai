<template>
	<view>
		<view>
			<view class="report_xc">
				<ul>
					<li v-for="(item,index) in messageData" :key="index" @click="cilckpopup(item)">
						<span class="content">
							<span class="content-span">
							<img class="image" src="@/static/news.png" alt="">
							<span class="content-span-quan" v-if="!item.read"></span>
							</span>
							<i></i>
							{{item.title}}
						</span>
						<span class="icon_gt">></span>
					</li>
				</ul>
			</view>
			<uni-popup ref="popup" type="bottom">
				<noticeDetails @close="closeclick" :currentContent="currentContent"></noticeDetails>
			</uni-popup>
		</view>
	</view>
</template>

<script>
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	import noticeDetails from '@/components/myUnits/noticeDetails.vue'
	export default {
		components:{
			uniPopup,
			noticeDetails
		},
		data() {
			return {
				messageData:[],
				currentContent:{}
			}
		},
		mounted() {
			this.getMessageData();
		},
		methods: {
			// Wtable相关
			getMessageData(){
				this.$myRequest.post("/user-msg/v1/getUserMsgs",{userName:getApp().globalData.userInfo.userName,pageSize:10},{
					success:(res)=>{
						console.log(res)
						if(res.data.code == 200) {
							this.messageData = res.data.data.content;
						}
					}
				}) 
			},
			cilckpopup(item){
				this.currentContent = item;
				this.$refs.popup.open();
			},
			closeclick(data){
				if(data){
					this.$refs.popup.close()
				}
			}
		}
	}
</script>

<style>
	.report_xc {
		padding-top: 2rem;
		padding-bottom: 5rem;
		background: #f7f7fc;
		width: 100%;
		margin: 0 auto;
	}
	
	.report_xc ul {
		width: 96%;
		border-radius: .57rem;
		box-shadow: 0 4px 10px #e5d5f5;
		margin: 0 auto .8rem;
		padding-left: 0;
	}
	
	.report_xc ul li:first-of-type {
		border-top-left-radius: .4rem;
		border-top-right-radius: .4rem;
	}
	
	.report_xc ul li {
		width: 100%;
		line-height: 3rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid #f0f0f0;
		background: #fff;
		box-sizing: border-box;
		padding: 0 1rem;
	}
	.icon_gt {
		color: #c878d5;
		font-size: 20px;
	}
	.content{
		display: flex;
		align-items: center;
		position: relative;
	}
	.image{
		width: 25px;
		height: 25px;
		padding: 2.5px;
	}
	.content-span{
		display: block;
		width: 30px;
		height: 30px;
		border-radius: 50%;
		background-color: #aa00ff;
	}
	.content-span-quan{
			display: block;
			position: absolute;
			top:15upx;
			left:50upx;
			width: 5px;
			height: 5px;
			border-radius: 50%;
			background-color: red;
	}
</style>
