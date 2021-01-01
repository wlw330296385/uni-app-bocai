<template>
	<view class="content">
		<view class="bottom-btn uni-flex  flex-justify-content-end">
			<view type="primary" class="uni-flex-item"></view>
			<view type="primary" class="uni-flex-item"></view>
			<view type="primary" class="uni-flex-item"></view>
			<view type="primary" class="uni-flex-item"></view>
			<button type="primary" class="btn uni-flex-item">添加银行卡</button>
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
			return {
                tableData:[],
				columns:[
						// { type:'checkbox',width:80,align:"center" },
						// { type:'index',width:70,align:"center" },
						{ title:'卡号',key:'bankNo' },
						{ title:'银行',key:'bankName' },
						{ title:'真实姓名',key:'realName' },
						{ title:'缩写',key:'bankCode'},
					]
			}
		},
		methods: {
			// Wtable相关
			getTableData(){
				this.$myRequest.get("/user-bank/v1",{userId:getApp().globalData.userInfo.id},{
					success:(res)=>{
						console.log(res)
						if(res.data.code == 200) {
							this.tableData = res.data.data;
						}
					}
				}) 
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
			// Wtable相关
		},
        mounted(){
            this.getTableData()
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
		margin: 1upx 15upx;
		background-color: #FFFFFF;
		border-radius: $uni-border-radius-lg;
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
