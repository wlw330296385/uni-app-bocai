<template>
	<view class="my-head">
		 <view class="uni-flex uni-row">
			 
			<view class="flex-item item-left">
				<view class="uni-flex uni-column flex-item">
					<view class="flex-item flex-item-V">
						<view class="uni-flex uni-row item-left-bottom">
						    <view class="flex-item">
								<image style="width:50upx; height: 50upx; " src="@/static/clock2.png" alt="" mode="aspectFit"></image>
							</view>
							<view class="flex-item">
								<uni-countdown class="uni-flex-item" color="#ffffff"
									:show-day="false" 
									:hour="hour" 
									:minute="minute" 
									:second="second">
								</uni-countdown>
							</view>
						</view>
					</view>
					<view class="flex-item flex-item-V">{{currentNumber}}期开奖</view>
				</view>
			</view>
			
			<view class="flex-item item-right">
				<view class="uni-flex uni-column flex-item">
					<view class="flex-item flex-item-V">
						<view class="uni-flex uni-row flex-item flex-justify-content-space-between">
							<view class="flex-item" style="color: #00c35e;"  @click="record3">玩法规则</view>
							<view class="flex-item" style="color: #007AFF;"  @click="record1">
								投注记录
							</view>
							<view class="flex-item" style="color: #ff5500;"  @click="record2">开奖历史</view>
						</view>
					</view>
					<view class="flex-item flex-item-V">
						<view class="uni-flex uni-row flex-justify-content-space-between">
							<view class="flex-item" v-for="(item, index) in 7" :key = "index">
								<quanquan2
								 :diyihang="diyihang"
								 :dierhang="dierhang" 
								></quanquan2>
							</view>
						</view>
					</view>
				</view>
			</view>
			<!-- 玩法规则弹窗 -->
			<view class="Box1" v-if="box3onoff">
				<fieldset class="fieldset">
					<legend class="legend">玩法规则</legend>
				</fieldset>
				
				<view class="Box1-list">
					<scroll-view style="height: 800upx;" scroll-y="true" scroll-with-animation>
						<text>
							{{rule}}
						</text>
					</scroll-view>
				</view>
				<view class="hr"></view>
				<view class="Box1-buttom">
					<view class="Box1-buttom-1" @click="box3onoff=false">关闭</view>
				</view>
			</view>
			<!-- 投注记录弹窗 -->
			<view class="Box1" v-if="box1onoff">
				<fieldset class="fieldset">
					<legend class="legend">近期投注</legend>
				</fieldset>
				<view class="Box1-list">
					<scroll-view style="height: 100%;" scroll-y="true" scroll-with-animation>
					<view class="Box1-list-1" v-for="(item,index) in orderpagelsit" :key="index">
						<h2 class="history-code-item item-flex">
							<view class="Box1-p Box1-p-color">{{item.gameName}}</view>
							<view class="Box1-p"></view>
							<view class="Box1-p Box1-p-details" @click="gotodetails(item.gameId)">详情</view>
						</h2>
						<view class="history-code-item item-flex-center">
							<view class="Box1-p" v-for="(item1,index) in item.content" :key="index">
								<view class="Box1-center">
									{{item1}}
								</view>
								<span class="Box1-p-span">
									x123
									</span>
								</view>
						</view>
						<view class="hr"></view>
						<view class="history-code-item item-flex">
							<view class="Box1-p">期号:{{item.qiHao}}</view>
							<view class="Box1-p" v-if="item.itemStatus == 0">状态:等待开奖</view>
							<view class="Box1-p" v-if="item.itemStatus == 1">状态:未中奖</view>
							<view class="Box1-p" v-if="item.itemStatus == 2">状态:中奖</view>
						</view>
					</view>
					</scroll-view>
				</view>
				<view class="hr"></view>
				<view class="Box1-buttom">
					<view class="Box1-buttom-1" @click="box1onoff=false">关闭</view>
					<view class="Box1-buttom-1">刷新</view>
					<navigator url="/pages/tabbar/tabbar-3/detailsList">
						<view class="Box1-buttom-1 Box1-buttom-1-color">查看更多</view>
					</navigator>
				</view>
			</view>
			
			<!-- 开奖记录弹窗 -->
			<view class="Box2" v-if="box2onoff">
				<fieldset class="fieldset">
					<legend class="legend">近期开奖</legend>
				</fieldset>
				<view class="Box1-list">
					<h2 class="history-code-item item-flex1">
						<span>期号</span>
						<span>开奖号码</span>
						<span><!-- 三星状态 --></span>
					</h2>
					<scroll-view style="height: 100%;" scroll-y="true" scroll-with-animation>
					
					<view class="history-code-item item-flex1" v-for="(item,index) in 12" :key="index">
						<view class="code-issue ">1201-213 期</view>
						<view class="code-number code-number-flex">
							<span class="active">7</span>
							<span class="active">28</span>
							<span class="active">7</span>
							<span class="active">龙</span>
							<span class="active">7</span>
							<span class="active">7</span>
							<span class="active">7</span>
						</view>
						<view class="code-form "><!-- 组三 --></view>
					</view>
					</scroll-view>
				</view>
				<view class="hr"></view>
				<view class="Box1-buttom">
					<view class="Box1-buttom-1" @click="box2onoff=false">关闭</view>
					<view class="Box1-buttom-1">刷新</view>
					<view class="Box1-buttom-1 Box1-buttom-1-color"  @click="Seemoreclick">查看更多</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniCountdown from "@/components/uni-countdown/uni-countdown.vue";
	import quanquan2 from "@/components/myUnits/quanquan-2.vue";
	
	export default {
		components:{uniCountdown,quanquan2},
		props:["rule","gameId"],
		data() {
			return {
				hour: Math.round(Math.random() * 10),
				minute: Math.round(Math.random() * 10),
				second: Math.round(Math.random() * 10),
				diyihang:Math.round(Math.random() * 100),
				currentNumber:"",
				preNumber:'',
				dierhang:"猴",
				box1onoff: false,
				box2onoff: false,
				box3onoff: false,
				orderpagelsit:[]
			}
		},
		mounted() {
			this.getCurqihao();
		},
		methods: {
			//获取最近期号
			getCurqihao(){
				this.$myRequest.get(
					"/qihao/v1/curqihao",
					{gameId: this.gameId},
					{
						success:(res)=>{
							if(res.data.code == 200){
								console.log(res.data.data)
								this.hour = parseFloat(res.data.data.hour) ;
								this.second = parseFloat(res.data.data.second);
								this.minute = parseFloat(res.data.data.minute);
								this.currentNumber = res.data.data.currentNumber;
								this.preNumber = res.data.data.preNumber;
							} else {
								uni.showToast({
									title:res.data.message,
									icon:"none"
								})
							}
						},
					}
				);
			},
			//获取投注历史
			getSalesOrderPagelist(){
				
			},
			record1() {
				this.box1onoff = !this.box1onoff;
				this.box3onoff = false;
				this.box2onoff = false;
				this.getSalesOrderPagelist()
			},
			record2() {
				this.box2onoff = !this.box2onoff;
				this.box3onoff = false;
				this.box1onoff = false;
			},
			record3() {
				this.box3onoff = !this.box3onoff;
				this.box2onoff = false;
				this.box1onoff = false;
			},
			gotodetails(id){
				uni.navigateTo({
					url: '/pages/tabbar/tabbar-3/prizeDetails?id='+encodeURIComponent(JSON.stringify(id))
				});
			},
			Seemoreclick(){
				uni.navigateTo({
					url: '/pages/tabbar/tabbar-3/detailsList'
				});
			}
		}
	}
</script>

<style lang="scss">
	.my-head {
		margin: 10upx 20upx;
		background-color: $uni-bg-color-grey;
		border-radius: 10upx;
		.item-left {
			width: 30%;
			padding: 0 20upx;
			text-align: center;
			.item-left-bottom {
				border-radius: 50upx;
				background-color: #F76260;
				margin:0upx 0upx 10upx 0upx;
				.flex-item {
					line-height: 0.5;
				}
			}
		}
		.item-right {
			width: 70%;
			padding: 0 20upx;
		}
	}
	.Box1,
	.Box2 {
		width: 100%;
		position: absolute;
		top:120upx;
		background-color: #fff;
		z-index: 99999;
	}
	
	.Box1-list {
		margin: 0 auto;
		width: 95%;
		height: 300px;
		background-color: #f6fffc;
		overflow: hidden;
	}
	
	.Box1-list-1 {
		width: 95%;
		padding: 5px 0;
		margin: 10px auto;
		background-color: #fff;
		box-shadow: 1px 1px 10px #cccccc;
	}
	
	.Box1-center{
		width: 50upx;
		height: 50upx;
		background-color: #ffaa7f;
		border-radius: 50%;
		text-align: center;
		color: #fff;
	}
	
	.hr {
		width: 90%;
		margin: 0 auto;
		height: 1px;
		background-color: #e5e5e5;
	}
	
	.Box1-buttom {
		width: 100%;
		padding: 10px 5px;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		box-shadow: 0 20px 60px #cccccc;
	}
	
	.Box1-buttom-1 {
		border: 1px solid #aa00ff;
		color: #aa00ff;
		border-radius: 5px;
		padding: 0 10px;
	}
	
	.Box1-p{
		margin:0 5px;
	}
	.Box1-p-span{
		display: block;
		transform: scale(0.8);
	}
	
	.Box1-p-color{
		color: #5500ff;
	}
	
	.Box1-p-details{
		width: 40px;
		height: 18px;
		text-align: center;
		border-radius: 5px;
		line-height: 30upx;
		background-color: #dce7e4;
	}
	
	.fieldset {
		margin: 0 auto;
		width: 90%;
		border: 0;
		border-top: 1px dashed #b6c5e3;
		padding-bottom: 0;
	}
	
	.legend {
		margin: auto;
		color: #657699;
		padding: 0 .6rem;
	}
	
	.history-code-item {
		min-height: 30px;
		font-size: 12px;
		font-weight: 500;
		color: #97a6c5;
		height: 30px;
		line-height: 30px;
		padding: 0 15upx;
		display: flex;
		align-items: center;
	}
	
	.item-flex1 {
		justify-content: space-between;
	}
	
	.item-flex {
		justify-content: space-between;
	}
	.item-flex-center{
			justify-content: center;
			margin: 20upx 0;
	}
	
	.history-code-item span {
		width: 30%;
		display: block;
		text-align: center;
	}
	
	.code-issue,
	.code-number,
	.code-form {
		width: 40%;
		text-align: center;
		min-height: 30px;
		line-height: 30px;
	}
	.code-number{
		width: 50%;
	}
	.code-form{
		width: 10%;
	}
	.code-number-flex {
		display: flex;
		justify-content: center;
		overflow: hidden;
	}
	
	.active{
		margin: 3px 0 0 6upx;
		height: 40upx;
		display: block;
		line-height: 45upx;
		font-size: 14px;
		border-radius: 50%;
		font-weight: 700;
		color: #e54a6f;
	}
	.active:nth-child(1){
		background-color: $uni-border-color-red;
	}
	.active:nth-child(2){
		background-color: $uni-border-color-lv;
	}.active:nth-child(3){
		background-color: $uni-border-color-lan;
	}.active:nth-child(4){
		background-color: $uni-border-color-red;
	}.active:nth-child(5){
		background-color: $uni-border-color-lv;
	}.active:nth-child(6){
		background-color: $uni-border-color-lan;
	}.active:nth-child(7){
		background-color: $uni-border-color-red;
	}
	.Box1-buttom-1-color{
		background-image: linear-gradient(to right, #aa00ff, #ff00ff);
		color: #fff;
	}
	.left-p-image{
		width: 35upx;
		height: 35upx;
		padding: 4px 0 0 0;
	}
</style>
