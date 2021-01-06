<template>
	<view class="content">
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
<!-- 			<view class="uni-flex uni-row search-unit" >
				<view class="search-item uni-flex uni-row ">
					<view class="flex-item">
						<view class="label-text">名字</view>
					</view>
					<view class="flex-item">
						<input class="uni-input" confirm-type="search" placeholder="张三" />
					</view>
				</view>
				
				<view class="flex-item uni-flex uni-row radio-list">
					<view class="flex-item label-text ">
					
					</view>
					<view class="flex-item ">
						<view>
							<radio-group @change="radioChange">
								<label class="radio" v-for="(item, index) in array" :key="index">
									<radio value="r1" :value="item.value" :checked="index === current"/>{{item.name}}
								</label>
							</radio-group>
						</view>
					</view>
				</view>
			</view>
			 -->
			<view class="bottom-btn">
				<button type="warn" class="btn">搜索</button>
			</view>
			
		</view>
		
		<view class="mine1 mine">
			<image style="width: 50upx; height: 50upx;" src="/static/img/tabbar/meactive.png"> 本级:</image>
		
			<text>测试用户昵称</text>
		</view>
		
		
		<view class="mine2 mine">
			<view class="uni-flex uni-row">
				<view class="flex-item">充值金额: {{selfReportList.rechargeAmt}}</view>
				<view class="flex-item">提现金额: {{selfReportList.rewardAmt}}</view>
			</view>
			<view class="uni-flex uni-row">
				<view class="flex-item">投注金额: {{selfReportList.orderAmt}}</view>
				<view class="flex-item">中奖金额: {{selfReportList.winAmt}}</view>
			</view>
			<view class="uni-flex uni-row">
				<view class="flex-item">返点金额: {{selfReportList.fanShuiAmt}}</view>
				<view class="flex-item">盈亏金额: {{selfReportList.ykAmt}}</view>
			</view>
			<view class="uni-flex uni-row">
				<view class="flex-item">活动金额: {{selfReportList.hdAmt}}</view>
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
		
		
		<view class="mine2 mine" v-for="(item,index) in selfReportList.items">
				<view class="uni-flex uni-row">
					<view class="flex-item" >本页合计</view>
				</view>
				<view class="uni-flex uni-row">
					<view class="flex-item">投注金额: {{item.orderAmt}}</view>
					<view class="flex-item">中奖金额: {{item.winAmt}}</view>
				</view>
				<view class="uni-flex uni-row">
					<view class="flex-item">返点金额: {{item.fanShuiAmt}}</view>
					<view class="flex-item">盈亏金额: {{item.ykAmt}}</view>
				</view>
		</view>
		<view class="mine2 mine">
				<view class="uni-flex uni-row">
					<view class="flex-item">总合计</view>
				</view>
				<view class="uni-flex uni-row">
					<view class="flex-item">投注金额: </view>
					<view class="flex-item">中奖金额: </view>
				</view>
				<view class="uni-flex uni-row">
					<view class="flex-item">返点金额: </view>
					<view class="flex-item">盈亏金额: </view>
				</view>
		</view>
		<view class="bottom-text">统计时间为: 2020-12-11 18:11:44</view>
	</view>
</template>

<script>
	Date.prototype.format = function (format) {
		           var args = {
		               "M+": this.getMonth() + 1,
		               "d+": this.getDate(),
		               "h+": this.getHours(),
		               "m+": this.getMinutes(),
		               "s+": this.getSeconds(),
		               "q+": Math.floor((this.getMonth() + 3) / 3),  //quarter
		               "S": this.getMilliseconds()
		           };
		           if (/(y+)/.test(format))
		               format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
		           for (var i in args) {
		               var n = args[i];
		               if (new RegExp("(" + i + ")").test(format))
		                   format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? n : ("00" + n).substr(("" + n).length));
		           }
		           return format;
	}
	export default {
		data() {
			const currentDate = this.getDate({
				format: true
			})
			return {
				title: 'picker',
				array: [ {
                    value: '1',
                    name: '个人',
                    checked: 'true'
                }, {
                    value: '2',
                    name: '团队',
                    checked: 'false'
                }],
				current:0,
				index: 0,
				date: currentDate,
				time: '12:01',
				selfReportList:{}
			}
		},
		created() {
			this.selfReportlist("/user-total/v1/selfReport")
		},
		methods: {
			selfReportlist(url){
				 var day1 = new Date();
				 day1.setDate(day1.getDate() - 30);
				 var s1 = day1.format("yyyy-MM-dd hh:mm:ss");
				 var day2 = new Date().format("yyyy-MM-dd hh:mm:ss");
				 let data = {}
				 if(this.current == 1){
					  data = {
						beginDate:s1,
						endDate:day2,
						userName:'root'
					} 
				 }else if(this.current == 0){
					  data = {
					 	beginDate:s1,
					 	endDate:day2,
					 	userName:'root',
						pageIndex:1,
						pageSize:10,
						pid:123456,
					 } 
				 }
				this.$myRequest.get(
					url, 
					data,
					{
					success: (res) => {
							if(res.data.code == 200){
								this.selfReportList = res.data.data
							}else{
								
								uni.showToast({
									title:res.data.message,
									icon:"none"
								})
							}
						}
					}
				)
			},
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
		 radioChange: function(evt) {
					for (let i = 0; i < this.array.length; i++) {
						if (this.array[i].value === evt.target.value) {
							if(this.array[i].value == 1){
								this.selfReportlist("/user-total/v1/selfReport")
							}else{
								this.selfReportlist("/user-total/v1/teamReport")
							}
							this.current = i;
							break;
						}
					}
				}
		},
		computed: {
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
		background-color: #FFFFFF;
		border-radius: $uni-border-radius-lg;
	}
	.mine1 {
		padding: 15upx;
		font-size: $uni-font-size-xl;
		text {
			margin: 0 15upx;
			color: $uni-color-ping;
			font-weight: bold;
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
				width: 150upx;
				height: 50upx;
				font-size: $uni-font-size-sm;
				line-height: $uni-font-size-xxl;
				padding: 0;
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
		
	.data-picker {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		width: 90%;
		margin: 15upx auto;
		.data-picker-item {
			.uni-input {
				border: solid 2upx $uni-bg-color-dark-light;
				border-radius: $uni-border-radius-xxl;
				margin: 0 15upx;
				padding: 0 15upx;
				width: 95%;
			}
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
			width: 55%;
			.flex-item:first-child {
				width: 18%;
			}
			.flex-item:last-child {
				width: 70%;
				.uni-input {
					border: solid 2upx $uni-bg-color-dark-light;
					margin: 0 15upx;
					line-height: 50upx;
					height: 50upx;
					padding: 0 5upx;
				}
			}
		}
		
		.radio-list {
			width: 45%;
		}
	}
	
	
	.bottom-btn {
		padding: 20upx;
		.btn {
			width: 280upx;
			height: 60upx;
			line-height: 60upx;
			border-radius: $uni-border-radius-xxxl;
			font-size: $uni-font-size-lg;
		}
	}
</style>
