<!-- 真人体育 -->
<template>
	<view class="content">
		<view class="mine">
			<view class="uni-flex uni-row data-picker">
				<view class="uni-flex uni-row flex-item data-picker-item">
					<view class="flex-item label-text">
						排序:
					</view>
					<view class="flex-item">
						<picker @change="bindPickerChange" :value="index" :range="array">
							<view class="uni-input">{{array[index]}}</view>
						</picker>
					</view>
				</view>
			</view>
			<view class="uni-flex uni-row search-unit" >
				<view class="search-item uni-flex uni-row ">
					<view class="flex-item">
						<view class="label-text">名字</view>
					</view>
					<view class="flex-item">
						<input class="uni-input" confirm-type="search" placeholder="张三" />
					</view>
					<view class="flex-item bottom-btn"><button type="warn" class="btn">查询</button>
					</view>
				</view>
				
			</view>
			
		</view>
		
		
		<view class="mine2 mine">
			<view class="uni-flex uni-row">
				<view class="flex-item">
					<image style="width: 50upx; height: 50upx;" src="/static/img/tabbar/meactive.png"></image>测试用户昵称
				</view>
			</view>
			<view class="uni-flex uni-row">
				<view class="flex-item">返点: 7.8%</view>
				<view class="flex-item">团队人数: 0</view>
			</view>
			<view class="uni-flex uni-row">
				<view class="flex-item">充值金额: 0.0000</view>
				<view class="flex-item">提现金额: 0.0000</view>
			</view>
			<view class="uni-flex uni-row">
				<view class="flex-item">投注金额: 0.0000</view>
				<view class="flex-item">中奖金额: 0.0000</view>
			</view>
			<hr>
			<view class="button-3">
				<view class="uni-flex uni-row">
					<view class="flex-item">
						<navigator class="report_xc_flex" url="/pages/tabbar/tabbar-3/detailsList">
							<button type="default" disabled="true">投注记录</button>
						</navigator>
					</view>
					<view class="flex-item">
						<navigator class="report_xc_flex" url="/pages/tabbar/tabbar-3/detailsList">
							<button type="default" disabled="true">账变记录</button>
						</navigator>
					</view>
					<view class="flex-item">
						<navigator class="report_xc_flex" url="/pages/tabbar/tabbar-3/detailsList">
							<button type="default" disabled="true">追号记录</button>
						</navigator>
					</view>
				</view>
			</view>
			
		</view>
		
		
		<view class="bottom-text">统计时间为: 2020-12-11 18:11:44</view>
	</view>
</template>

<script>
	export default {
		data() {
			
			return {
				title: 'picker',
				array: ['个人余额从少到多', '个人余额从多到少', '返点由高到低', '返点由低到高'],
				current:0,
				index: 0,
				time: '12:01'
			}
		},
		methods: {
		 bindPickerChange: function(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.index = e.target.value
			},
		 radioChange: function(evt) {
					for (let i = 0; i < this.items.length; i++) {
						if (this.items[i].value === evt.target.value) {
							this.current = i;
							break;
						}
					}
				}
		},
		computed: {
			
		}
	}
</script>

<style lang="scss">
	.content{
		top: 0;
		height: 1500upx;
		background-color: $uni-bg-color-grey;
		color: $uni-bg-color-darkgray;
	}
	.bottom-text{
		text-align: center;
	}
	.mine {
		margin: 25upx 15upx;
		padding-bottom: 15upx;
		background-color: #FFFFFF;
		border-radius: $uni-border-radius-lg;
	}
	.mine1 {
		padding: 15upx;
		font-size: $uni-font-size-xl;
		text {
			margin: 0 15upx;
			color: $uni-color-ping;
		}
		image {
			margin: auto;
		}
	}
	
	.mine2 {
		.button-3 {
			width: 80%;
			margin: auto;
			button {
				width: 160upx;
				height: 50upx;
				font-size: $uni-font-size-sm;
				line-height: $uni-font-size-xxl;
			}
		}
		
		.uni-flex:first-child {
			padding: 25upx 0upx;
		}
		.uni-flex {
			margin: 0 15upx;
			.flex-item {
				width: 50%;
			}
		}
	}
		
	.uni-input {
		border: solid 2upx $uni-bg-color-dark-light;
		border-radius: $uni-border-radius-xxl;
		margin: 0 15upx;
		padding: 0 15upx;
		width: 100%;
	}
	.data-picker {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		width: 90%;
		margin: 15upx auto;
		.data-picker-item {
			.label-text {
				font-weight: bold;
			}
		}
		.flex-item{
				line-height: 50upx;
		}
	}
	
	.search-unit {
		width: 90%;
		margin: 15upx auto;
		flex-wrap: wrap;
		justify-content: space-between;
		.search-item {
			width: 95%;
			.flex-item:first-child {
				width: 18%;
			}
			.flex-item:last-child {
				width: 80%;
				.uni-input {
					border: solid 2upx $uni-bg-color-dark-light;
					margin: 0 15upx;
					line-height: 50upx;
					height: 50upx;
					padding: 0 5upx;
				}
			}
		}
	}
	
	
	.bottom-btn {
		.btn {
			width: 120upx;
			height: 60upx;
			line-height: 60upx;
			border-radius: $uni-border-radius-xl;
			font-size: $uni-font-size-lg;
		}
	}
</style>
