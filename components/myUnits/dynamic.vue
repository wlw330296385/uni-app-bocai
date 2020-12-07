<!-- 开奖公示栏组件 -->
<template>
	<view class="dynamic">
		<view class="page">
			<view class="left">
				<view> 20201130-0800 
					<span class="left-p">00100101</span>
				</view>
				<view class="uni-flex uni-row"> 20201130-0800 
					<span class="left-p uni-flex-item">
					</span>
					@<uni-countdown class=" uni-flex-item" color="#ff00ff"
						:show-day="false" 
						:hour="hour" 
						:minute="minute" 
						:second="second">
						</uni-countdown>
				</view>
			</view>
			<view class="right">
				<view class="right-click" @click="record1">投注记录</view>
				<view class="right-click" @click="record2">近期开奖</view>
			</view>
		</view>
		<view class="Box1" v-if="box1onoff">
			<fieldset class="fieldset">
				<legend class="legend">近期投注</legend>
			</fieldset>
			<view class="Box1-list">
				<view class="Box1-list-1">
					<h2 class="history-code-item item-flex">
						<view class="Box1-p Box1-p-color">腾讯分分彩</view>
						<view class="Box1-p">玩法:后二直选</view>
						<view class="Box1-p Box1-p-details" @click="goto">详情</view>
					</h2>
					<view class="history-code-item item-flex">
						<view class="Box1-p Box1-center">投注金额:0.0180</view>
						<view class="Box1-p Box1-center">奖金:0.0000</view>
					</view>
					<view class="hr"></view>
					<view class="history-code-item item-flex">
						<view class="Box1-p">期号:0.0180</view>
						<view class="Box1-p">状态:未中奖</view>
					</view>
				</view>
			</view>
			<view class="hr"></view>
			<view class="Box1-buttom">
				<view class="Box1-buttom-1" @click="box1onoff=false">关闭</view>
				<view class="Box1-buttom-1">刷新</view>
				<view class="Box1-buttom-1 Box1-buttom-1-color">查看更多</view>
			</view>
		</view>
		<view class="Box2" v-if="box2onoff">
			<fieldset class="fieldset">
				<legend class="legend">近期开奖</legend>
			</fieldset>
			<view class="Box1-list">
				<h2 class="history-code-item item-flex1">
					<span>期号</span>
					<span>开奖号码</span>
					<span>三星状态</span>
				</h2>
				<view class="history-code-item item-flex1">
					<view class="code-issue ">1201-213 期</view>
					<view class="code-number code-number-flex">
						<span class="disabled">7</span>
						<span class="disabled">7</span>
						<span class="active">7</span>
						<span class="active">7</span>
						<span class="active">7</span>
					</view>
					<view class="code-form ">组三</view>
				</view>
			</view>
			<view class="hr"></view>
			<view class="Box1-buttom">
				<view class="Box1-buttom-1" @click="box2onoff=false">关闭</view>
				<view class="Box1-buttom-1">刷新</view>
				<view class="Box1-buttom-1 Box1-buttom-1-color"  @click="Seemoreclick">查看更多</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniCountdown from '@/components/uni-countdown/uni-countdown.vue';
	export default {
		components: {uniCountdown},
		props:['hour', 'minute', 'second'],
		data() {
			return {
				box1onoff: false,
				box2onoff: false,
			}
		},
		created() {
			
		},
		methods: {
			record1() {
				this.box1onoff = !this.box1onoff;
				this.box2onoff = false;
			},
			record2() {
				this.box2onoff = !this.box2onoff;
				this.box1onoff = false;
			},
			goto(){
				uni.navigateTo({
					url: '/pages/tabbar/tabbar-3/prizeDetails'
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

<style lang='scss'>
	.dynamic {
		position: relative;
	}

	.page {
		padding: 5px 10px;
		display: flex;
		justify-content: space-between;
	}

	.left-p {
		color: #ff55ff;
	}

	.right-click {
		background-color: #efeeee;
		border-radius: 10px;
		padding: 0 5px;
	}

	.Box1,
	.Box2 {
		width: 100%;
		position: absolute;
		background-color: #fff;
	}

	.Box1-list {
		margin: 0 auto;
		width: 95%;
		height: 300px;
		background-color: #f6fffc;
	}

	.Box1-list-1 {
		width: 95%;
		padding: 5px 0;
		margin: 10px auto;
		background-color: #fff;
		box-shadow: 1px 1px 10px #cccccc;
	}
	
	.Box1-center{
		width: 45%;
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
		padding: 0 5px;
		display: flex;
		align-items: center;
	}

	.item-flex1 {
		justify-content: space-evenly;
	}

	.item-flex {
		justify-content: space-between;
	}

	.history-code-item span {
		width: 30%;
		display: block;
		text-align: center;
	}

	.code-issue,
	.code-number,
	.code-form {
		width: 30%;
		text-align: center;
		min-height: 30px;
		line-height: 30px;
	}

	.code-number-flex {
		display: flex;
		justify-content: center;
		overflow: hidden;
	}

	.disabled {
		margin: 6px 0 0;
		display: block;
		line-height: 20px;
		font-size: 14px;
		font-weight: 700;
		color: #666;
	}

	.active {
		margin: 6px 0 0;
		display: block;
		line-height: 20px;
		font-size: 14px;
		font-weight: 700;
		color: #e54a6f;
	}
	.Box1-buttom-1-color{
		background-image: linear-gradient(to right, #aa00ff, #ff00ff);
		color: #fff;
	}
</style>
