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

			
			<view class="bottom-btn">
				<button type="warn" class="btn">搜索</button>
			</view>
			
		</view>
		<view class="warp mine">
			<view class="box">
				<!-- <view class="title">默认效果</view> -->
				<t-table @change="change">
					<t-tr>
						<t-th>序号</t-th>
						<t-th>结算时间</t-th>
						<t-th>返点金额</t-th>
						<t-th>结算状态</t-th>
					</t-tr>
					<t-tr v-for="item in tableList" :key="item.id">
						<t-td>{{ item.id + 1 }}</t-td>
						<t-td font-size="5">{{ item.name }}</t-td>
						<t-td>{{ item.age }}</t-td>
						<t-td>{{ item.hobby }}</t-td>
					</t-tr>
				</t-table>
			</view>
		</view>

		<view class="mine2 mine">
				<view class="uni-flex uni-row">
					<view class="flex-item">总合计 : </view>
				</view>
				<view class="uni-flex uni-row">
					<view class="flex-item">投注金额: 7953.00</view>
					<view class="flex-item">中奖金额: 349.20</view>
				</view>
				<view class="uni-flex uni-row">
					<view class="flex-item">返点金额: 1536.00</view>
					<view class="flex-item">盈亏金额: 7634.80</view>
				</view>
		</view>
		<view class="bottom-text">合计统计时间为: 2020-12-11 18:11:44</view>
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
				tableList: [{
					id: 0,
					name: '2020-12-30',
					age: '19',
					hobby: '已结算'
				},
				{
					id: 1,
					name: '2020-12-29',
					age: '21',
					hobby: '已结算'
				},
				{
					id: 2,
					name: '2020-12-30',
					age: '29',
					hobby: '已结算'
				},
				{
					id: 3,
					name: '2020-12-30',
					age: '20',
					hobby: '已结算'
				},
				{
					id: 4,
					name: '2020-12-30',
					age: '21',
					hobby: '已结算'
				},
				{
					id: 5,
					name: '2020-12-30',
					age: '29',
					hobby: '已结算'
				},
				{
					id: 6,
					name: '2020-12-30',
					age: '20',
					hobby: '已结算'
				},
				{
					id: 7,
					name: '2020-12-30',
					age: '21',
					hobby: '已结算'
				},
				{
					id: 8,
					name: '2020-12-30',
					age: '29',
					hobby: '已结算'
				},
				{
					id: 9,
					name: '2020年12月30日',
					age: '20',
					hobby: '已结算'
				}
			]
			}
		},
		methods: {
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
