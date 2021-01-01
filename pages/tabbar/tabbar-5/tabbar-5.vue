<template>
	<view class="bgc">
		<view class="yule-head">
			<myHead :title = "title"></myHead>
			<view class="userInfo">
				<p class="yu-e">余额
					<span class="number" v-if="onoff">￥{{balanceInfo.balance}}</span>
					<span class="number" v-if="!onoff">￥*******</span>
					<span class="refresh" v-if="onoff" @click="getBalance()" ></span>
					<span :class="onoff===true ? 'eys2' : 'eys1'" @click="onoffclick">12</span>
				</p>
			</view>
		</view>
		<view class="list">
			<view class="list-content">
				<view class="uni-flex uni-row top-bar">
					<view class="flex-item">真人/老虎机</view>
					<view class="flex-item">转账</view>
				</view>
				
				<uni-list-chat
					v-for="(item,idx) in list1" :key="idx"
					:title="item.title" 
					:avatar-list="item.image_src"
					:note="item.sub_title" 
					time="2020-02-02 20:20" 
					badge-positon="left" 
					badge-text=""
				>
					<view class="chat-custom-right" @click="gotoWebView(item.url,item.title)">
						<!-- 需要使用 uni-icons 请自行引入 -->
						<uni-icons type="star-filled" color="#999" size="18"></uni-icons>
						<text class="chat-custom-text">进入</text>
					</view>
				</uni-list-chat>
			</view>
			
			<view class="list-content">
				<view class="uni-flex uni-row top-bar">
					<view class="flex-item">棋牌游戏</view>
					<view class="flex-item">转账</view>
				</view>
				
				<uni-list-chat
					v-for="(item,idx) in list2" :key="idx"
					:title="item.title" 
					:avatar-list="item.image_src"
					:note="item.sub_title" 
					time="2020-02-02 20:20" 
					badge-positon="left" 
					badge-text=""
					>
					<view class="chat-custom-right" @click="gotoWebView(item.url,item.title)">
						<!-- 需要使用 uni-icons 请自行引入 -->
						<uni-icons type="star-filled" color="#999" size="18"></uni-icons>
						<text class="chat-custom-text">进入</text>
					</view>
				</uni-list-chat>
			</view>
			
			<view class="list-content">
				<view class="uni-flex uni-row top-bar">
					<view class="flex-item">体育游戏</view>
					<view class="flex-item">转账</view>
				</view>
				
				<uni-list-chat
					v-for="(item,idx) in list3" :key="idx"
					:title="item.title" 
					:avatar-list="item.image_src" 
					:note="item.sub_title" 
					time="2020-02-02 20:20" 
					badge-positon="left" 
					badge-text=""
					>
					<view class="chat-custom-right" @click="gotoWebView(item.url,item.title)">
						<!-- 需要使用 uni-icons 请自行引入 -->
						<uni-icons type="star-filled" color="#999" size="18"></uni-icons>
						<text class="chat-custom-text">进入</text>
					</view>
				</uni-list-chat>
			</view>
			
			<view class="list-content">
				<view class="uni-flex uni-row top-bar">
					<view class="flex-item">电竞游戏</view>
					<view class="flex-item">转账</view>
				</view>
				<uni-list-chat
					v-for="(item,idx) in list4" :key="idx"
					:title="item.title" 
					:avatar-list="item.image_src" 
					:note="item.sub_title" 
					time="2020-02-02 20:20" 
					badge-positon="left" 
					badge-text=""
					>
					<view class="chat-custom-right" @click="gotoWebView(item.url,item.title)">
						<!-- 需要使用 uni-icons 请自行引入 -->
						<uni-icons type="star-filled" color="#999" size="18"></uni-icons>
						<text class="chat-custom-text">进入</text>
					</view>
				</uni-list-chat>
			</view>
		</view>
	</view>
</template>
<script>
	import myHead from "@/components/myHead/my-head.vue";
	export default {
		components : {
				myHead
			},
		 data () {
			 return {
				balanceInfo:{},
				title: "娱乐",
				userInfo:{},
				onoff : false
				 ,list1:[
					 {
						 title:		"CQ9娱乐",
						 sub_title:	"￥0.00",
						 image_src: [{url:"/static/entertainmentIcon/0.png"}],
						 url:		"https://www.jytengfeng.com/aggame/play/812"
					 },
					 {
						 title:		"AE娱乐",
						 sub_title:	"￥0.00",
						 image_src: [{url:"/static/entertainmentIcon/1.png"}],
						 url:		"https://www.jytengfeng.com/webapp/#/game/pt/list"
					 },
					 {
						 title:		"AG娱乐",
						 sub_title:	"￥0.00",
						 image_src: [{url:"/static/entertainmentIcon/2.png"}],
						 url:		"http://777.gsoftbb.com/"
					 },
					 {
						 title:		"PT娱乐",
						 sub_title:	"￥0.00",
						 image_src: [{url:"/static/entertainmentIcon/3.png"}],
						 url:		"https://wmtc.s5t4c.cn/?sid=44014B80006A168M7162373&ui=0&lang=cn&co=wm"
					 },
					 {
						 title:		"BBIN娱乐",
						 sub_title:	"￥0.00",
						 image_src: [{url:"/static/entertainmentIcon/4.png"}],
						 url:		""
					 },
					 {
						 title:		"WM娱乐",
						 sub_title:	"￥0.00",
						 image_src: [{url:"/static/entertainmentIcon/5.png"}],
						 url:		"https://imes-gteqn.roshan88.com/esportsite/index.html?v=201214222720&id=2343&token=57d37b36-4cb8-4d19-901c-b15d7fe6f80c&languageCode=1&liveStream=1&theme=default&streamer=1&streamerLiveStream=1#/?_k=dneaga"
					 }
				 ],
				 list2 : [
					 {
						 title:		"KGAME棋牌",
						 sub_title:	"￥0.00",
						 image_src: [{url:"/static/entertainmentIcon/11.png"}],
						 url:		"https://www.jytengfeng.com/sexygame/play"
					 },
					 {
						 title:		"VG财神棋牌",
						 sub_title:	"￥0.00",
						 image_src: [{url:"/static/entertainmentIcon/12.png"}],
						 url:		"https://bpweb.bikimex.com/player/gamehall.jsp?dm=1&title=1&hall=-1&sgt=-1"
					 }
				 ],
				 list3 : [
					 {
						 title:		"IM电竞",
						 sub_title:	"￥0.00",
						 image_src: [{url:"/static/entertainmentIcon/7.png"}],
						 url:		"https://www.51egou.com.cn/f_game/soccer?t=0"
					 }
				 ],
				 list4 : [
					 {
						 title:		"CQ9体育",
						 sub_title:	"￥0.00",
						 image_src: [{url:"/static/entertainmentIcon/41.png"}],
						 url:		"https://www.51egou.com.cn/f_game/soccer?t=0"
					 },
					 {
						 title:		"沙巴体育",
						 sub_title:	"￥0.00",
						 image_src: [{url:"/static/entertainmentIcon/40.png"}],
						 url:		"https://www.51egou.com.cn/f_game/soccer?t=0"
					 }
				 ],
			 }
		},
		onLoad() {
			this.getBalance();
			this.userInfo = getApp().globalData.userInfo;
		}
		,methods: {
			gotoWebView (url,title) {
				uni.navigateTo({
					url:"/pages/common/webView?url="+url+"&title="+title
				})
			},
			getBalance () {
				this.$myRequest.get("/user-wallet/v1", {userName: getApp().globalData.userInfo.userName},
					{
						success:(res) => {
							this.balanceInfo = res.data.data;
							getApp().globalData.balanceInfo = res.data.data;
						}
					}
				);
			},
			onoffclick() {
				this.onoff = !this.onoff
			}
		}
	}
</script>
<style lang="scss">
	.bgc {background-color: $uni-text-color-background;}
	.yule-head {
		background-color: #f7f8fc;
		.userInfo {
			padding: 0 $uni-xuanxiang-margin-left-right $uni-xuanxiang-margin-left-right $uni-xuanxiang-margin-left-right;
			.eys2 {
				background: url(@/static/img/eyes.png) repeat;
				background-size: 100% 100%;
				color: rgba(255, 255, 255, 0)
			}
			
			.eys1 {
				background: url(@/static/img/yincang.png) repeat;
				background-size: 100% 100%;
				color: rgba(255, 255, 255, 0)
			}
		}
	}
	
	.list {
		background-color: $my-color-xingcai;
		.list-content {
			background-color: $my-color-xingcai;
			margin: 0 $uni-spacing-col-lg;
			box-shadow: 0 5upx 5upx 0upx $uni-text-color-background;
			.top-bar {
				margin-top: $uni-xuanma-radiu-normal;
				background-color : $my-color-xingcai;
				border-bottom: $uni-text-color-background 2px solid;
				padding : $uni-xuanxiang-radiu-normal 0 0 $uni-xuanxiang-margin-left-right;
				view:first-child {
					width: 85%;
				}
				view:last-child {
					margin-top: 6upx;
					font-size: 20upx;
					line-height: 40upx;
					text-align: center;
					height: 40upx;
					width: 15%;
					background-color: $u-type-error-disabled;
					border-radius: $uni-border-radius-xxl;
				}
			}
		}
	}
	
	.chat-custom-right {
	    flex: 1;
	    /* #ifndef APP-NVUE */
	    display: flex;
	    /* #endif */
	    flex-direction: column;
	    justify-content: space-between;
	    align-items: flex-end;
	}
	
	.chat-custom-text {
	    font-size: 12px;
	    color: #999;
	}
</style>