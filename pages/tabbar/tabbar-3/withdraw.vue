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
				<view class="uni-flex uni-row search-unit" >
					<view class="search-item uni-flex uni-row ">
						<view class="flex-item">
							<view class="label-text">卡号:</view>
						</view>
						<view class="flex-item">
							<input class="uni-input" confirm-type="search" placeholder="输入卡号" />
						</view>
					</view>
				</view>
				
				<view class="bottom-btn">
					<button type="warn" class="btn">搜索</button>
				</view>
				
			</view>	
		<view class="warp mine">
			<view class="box">
				<wTable
				       :columns="columns"
				       :data="tableData" 
				       @on-row-click="clickrow"
				       border
				       @on-select-all="selectAll"
				       @on-select="selectO"/>
			</view>
		</view>

	</view>
</template>

<script>
	import wTable from '@/components/wang-wTable/wTable.vue';
	export default {
		components: {
		            wTable
		        },
		data() {
			const currentDate = this.getDate({
				format: true
			})
			return {
				index: 0,
				date: currentDate,
				time: '12:01',
                tableData:[],
				columns:[
						// { type:'checkbox',width:80,align:"center" },
						// { type:'index',width:70,align:"center" },
						{ title:'提现时间',key:'age' },
						{ title:'卡号',key:'name' },
						{ title:'提现金额',key:'address' },
						{ title:'余额',render:(h,{ row })=>{
							return h('view',row.money+'元')
						}},
						{ title:'状态',key:'status' },
					]
			}
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
			
			// Wtable相关
			getTableData(){
				this.tableData=[
					  { name:'6226225503969774',age:'2020-12-30',address:'100',money:'1200', status:"完成" },
					  { name:'6226225503969774',age:'2020-12-30',address:'200',money:'2400', status:"完成" },
					  { name:'6226225503969774',age:'2020-12-30',address:'300',money:'4800', status:"完成" },
				  ] 
			},
            clickrow({ row,index }){
                console.log(row,index)
            },
            selectAll(val){
                console.log(val)
            },
            selectO({ allChecked,checked }){
                console.log(allChecked,checked)
            }
		},
        mounted(){
			//wtable
            this.getTableData()
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
		margin: 1upx 15upx;
		background-color: #FFFFFF;
		border-radius: $uni-border-radius-lg;
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
			width: 100%;
			.flex-item:first-child {
				width: 10%;
			}
			.flex-item:last-child {
				width: 60%;
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
		padding: 10upx 15upx;
		.btn {
			width: 180upx;
			height: 60upx;
			line-height: 60upx;
			font-size: $uni-font-size-sm;
		}
	}
</style>
