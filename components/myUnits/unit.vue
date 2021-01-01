<template>
	    <view class="my-unit">
	        <view class="image-list">
	            <view class="image-item" v-for="(item,index) in unitModel1" :key="index">
	                <view class="unit-body">
	                    <image style="height: 300upx;width: 100%;" :mode="item.mode" :src="'/static/event/'+index+'.png'"
	                        @error="imageError"></image>
	                </view>
					<view class="unit-foot uni-flex uni-row">
						<view class="uni-flex uni-column" style="flex:5">
							<text style="warm">{{item.label}}</text>
							<text style="warm">活动时间：2020年11月25日</text>
						</view>
						<button class="btn-bottom" style="flex: 1;" type="warn" @click="goTo" >参与</button>
					</view>
	            </view>
	        </view>
	    </view>
</template>
	
<script>
    export default{
        data() {
            return {
				unitModel1:[
					{prop:"",label:"单期累计奖金限额",mode:"scaleToFill"},
					{prop:"",label:"单挑模式",mode:"scaleToFill"},
					{prop:"",label:"AE返点返水",mode:"scaleToFill"},
					{prop:"",label:"WM娱乐",mode:"scaleToFill"},
					{prop:"",label:"IM电竞",mode:"scaleToFill"},
					{prop:"",label:"沙巴体育",mode:"scaleToFill"},
					{prop:"",label:"xx棋牌",mode:"scaleToFill"},
				]
            }
        },
        methods:{
			goTo(){
			
			},
			imageError(){}
        },
		computed:{
			
		},
		created() {
			
		},
    }
</script>
<style lang='scss'>
    .my-unit{
		margin: 20upx 0;
		background-color: #ffffff;
		font-size: 28upx;
		transform: all 1s;
		
		.unit-body{
			padding: 20upx;
			display: flex;
			flex-wrap: wrap;
			
			text{
				width: 50%;
				font-size: 28upx;
				line-height: 55upx;
			}
		}
		.unit-foot{
			height: 88upx;
			padding: 0 20upx;
			border-top: 2upx solid #f5f5f5;
			border-bottom: none;
			line-height: 88upx;
			.btn-bottom{
				height: 60upx;
				font-size: 28upx;
				line-height: 60upx;
				margin: 14upx 0;
				
			}
		}
	}
</style>