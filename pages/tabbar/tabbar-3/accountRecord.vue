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
			<view class="uni-flex uni-row data-picker">
				<view class="uni-flex uni-row flex-item data-picker-item">
					<view class="flex-item label-text">
						类型:
					</view>
					<view class="flex-item">
						<picker @change="bindPickerChange" :value="index" :range="searchtype" range-key="name">
							<view class="uni-input">{{searchtype[index].name}}</view>
						</picker>
					</view>
				</view>
			</view>

			
			<view class="bottom-btn">
				<button type="warn" class="btn">筛选</button>
			</view>
			
		</view>
		<view class="warp mine">
			<view class="box">
				<!-- <view class="title">默认效果</view> -->
				<t-table @change="change">
					<t-tr>
						<t-th>日期</t-th>
						<t-th>变动金额</t-th>
						<t-th>余额</t-th>
						<t-th>类型</t-th>
					</t-tr>
					<t-tr v-for="item in tableList" :key="item.id" >
						<t-td>{{ item.createDate}}</t-td>
						<t-td font-size="5" :color="item.amt < 0? '#ec0000' : '#009800'" style="font-weight: bolder;">{{ item.amt }}</t-td>
						<t-td>{{ item.enBlance }}</t-td>
						<t-td>{{ type[item.transType] }}</t-td>
					</t-tr>
				</t-table>
			</view>
		</view>


	</view>
</template>

<script>
	import tTable from '@/components/t-table/t-table.vue';
    import tTh from '@/components/t-table/t-th.vue';
    import tTr from '@/components/t-table/t-tr.vue';
    import tTd from '@/components/t-table/t-td.vue';
	export default {
		components: {
		            tTable,
		            tTh,
		            tTr,
		            tTd
		        },
		data() {
			const currentDate = this.getDate({
				format: true
			})
			return {
				title: 'picker',
				current:0,
				index: 0,
				date: currentDate,
				time: '12:01',
				tableList: [],
				type:["充值","提现","下单","返点","下级返点","中奖","退单"],
				searchtype:[{"name":"全部","val":0},{"name":"提现","val":-1},{"name":"下单","val":-1},{"name":"返点","val":-1},{"name":"下级返点","val":-1},{"name":"中奖","val":-1},{"name":"退单","val":-1}]
			}
		},
		onLoad() {
			this.getTableListData();
		},
		methods: {
			bindPickerChange: function(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.index = e.target.value
			},
			change(e) {
				console.log(e.detail);
			},
			edit(item) {
				uni.showToast({
					title: item.name,
					icon: 'none'
				});
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
				for (let i = 0; i < this.items.length; i++) {
					if (this.items[i].value === evt.target.value) {
						this.current = i;
						break;
					}
				}
			},
			getTableListData:function() {
				this.$myRequest.post("/user-trans/v1/getPages",
					{
						"pageIndex": 0,
						"pageSize": 12,
						"userName": "root"
					},
					{
						success:(res) => {
							if(res.data.code == 200) {
								this.tableList = res.data.data.content;
								console.log(this.tableList)
							}
						}
					}
				)
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
