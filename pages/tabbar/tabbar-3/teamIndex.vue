<template>
	<view class="content">
<!-- 		<view class="mine">
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
		</view>
		 -->
		<view class="mine">
			<view class="uni-flex uni-row data-picker">
				<view class="uni-flex uni-row flex-item data-picker-item">
					<view class="flex-item label-text">
						日期:
					</view>
					<view class="flex-item">
						<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
							<view class="uni-input">{{date}}</view>
						</picker>
					</view>
				</view>
				<view class="uni-flex uni-row flex-item  data-picker-item">
					<view class="flex-item label-text">
						至:
					</view>
					<view class="flex-item">
						<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
							<view class="uni-input">{{date}}</view>
						</picker>
					</view>
				</view>
			</view>
			<view class="bottom-btn">
				<button type="warn" class="btn">搜索</button>
			</view>
		</view>	
		
		<view class="bottom-btn">
			<button type="warn" class="btn">返点设置</button>
		</view>
		<view class="mine2 mine">
			
			<view class="uni-flex uni-row">
				
			</view>
			<view class="uni-flex uni-row">
				<view class="flex-item">日期: 2020-12-30</view>
				<view class="flex-item"></view>
			</view>
			<view class="uni-flex uni-row">
				<view class="flex-item">充值金额: 0.0000</view>
				<view class="flex-item">提现金额: 0.0000</view>
			</view>
			<view class="uni-flex uni-row">
				<view class="flex-item">下注金额: 0.0000</view>
				<view class="flex-item">中奖金额: 0.0000</view>
			</view>
			<view class="uni-flex uni-row">
				<view class="flex-item">返点: 0/0/0/1.785/0</view>
				<view class="flex-item">新增用户: 0/0/0/0</view>
			</view>
			<hr>
			<view class="uni-flex uni-row">
				<view class="flex-item">
				
				</view>
			</view>
			<view class="uni-flex uni-row">
				<view class="flex-item">日期: 2020-12-30</view>
				<view class="flex-item"></view>
			</view>
			<view class="uni-flex uni-row">
				<view class="flex-item">充值金额: 0.0000</view>
				<view class="flex-item">提现金额: 0.0000</view>
			</view>
			<view class="uni-flex uni-row">
				<view class="flex-item">下注金额: 0.0000</view>
				<view class="flex-item">中奖金额: 0.0000</view>
			</view>
			<view class="uni-flex uni-row">
				<view class="flex-item">返点: 0/0/0/1.785/0</view>
				<view class="flex-item">新增用户: 0/0/0/0</view>
			</view>
			<hr>
			<view class="uni-flex uni-row">
				<view class="flex-item">
				
				</view>
			</view>
			<view class="uni-flex uni-row">
				<view class="flex-item">日期: 2020-12-30</view>
				<view class="flex-item"></view>
			</view>
			<view class="uni-flex uni-row">
				<view class="flex-item">充值金额: 0.0000</view>
				<view class="flex-item">提现金额: 0.0000</view>
			</view>
			<view class="uni-flex uni-row">
				<view class="flex-item">下注金额: 0.0000</view>
				<view class="flex-item">中奖金额: 0.0000</view>
			</view>
			<view class="uni-flex uni-row">
				<view class="flex-item">返点: 0/0/0/1.785/0</view>
				<view class="flex-item">新增用户: 0/0/0/0</view>
			</view>
			<hr>
			<view class="uni-flex uni-row">
				<view class="flex-item">
				
				</view>
			</view>
			<view class="uni-flex uni-row">
				<view class="flex-item">日期: 2020-12-30</view>
				<view class="flex-item"></view>
			</view>
			<view class="uni-flex uni-row">
				<view class="flex-item">充值金额: 0.0000</view>
				<view class="flex-item">提现金额: 0.0000</view>
			</view>
			<view class="uni-flex uni-row">
				<view class="flex-item">下注金额: 0.0000</view>
				<view class="flex-item">中奖金额: 0.0000</view>
			</view>
			<view class="uni-flex uni-row">
				<view class="flex-item">返点: 0/0/0/1.785/0</view>
				<view class="flex-item">新增用户: 0/0/0/0</view>
			</view>
			<hr>
			
		</view>
		
		
		<view class="bottom-text">开发时间为: 2020-12-30 18:01:44</view>
	</view>
</template>

<script>
	export default {
		data() {
			const currentDate = this.getDate({
				format: true
			})
			return {
				index: 0,
				date: currentDate,
				time: '12:01',
                tableData:[],
				title: 'picker',
				array: ['个人余额从少到多', '个人余额从多到少', '返点由高到低', '返点由低到高'],
				current:0,
				index: 0,
				time: '12:01',
				userInfo:[]
			}
		},
		created() {
			this.userInfo = getApp().globalData.userInfo ;
		},
		methods: {
			// 时间选择器
			bindDateChange: function(e) {
				this.date = e.target.value
			},
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();
			
				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			},
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
			},
			getUserinfo(){
				try {
				    const value = uni.getStorageSync('userInfo');
				    if (value) {
						getApp().globalData.userInfo = value;
						this.userInfo = value;
				    }
				} catch (e) {
				    // error
				}
			},
		},
		computed: {
			//时间选择器
			startDate() {
				return this.getDate('start');
			},
			endDate() {
				return this.getDate('end');
			}
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
		padding-bottom: 15upx;
		
		.uni-flex:first-child {
			padding: 25upx 0upx;
		}
		.uni-flex {
			margin: 5upx 15upx;
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
	

	.bottom-btn {
		.btn {
			width: 320upx;
			height: 60upx;
			line-height: 60upx;
			border-radius: $uni-border-radius-xl;
			font-size: $uni-font-size-lg;
		}
	}
</style>
