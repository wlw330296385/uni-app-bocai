<template>
	<view class="page">
		<liuheHead></liuheHead>	
		<!-- 彩种选择列表 -->
		<view class="page_five">
			<view class="page_five_list">
				<view class="page_five_list_item" v-for="(item,index) in five_list" :key="index" :class="item.onoff?'page_five_list_item_onoff':''" @click="onoffclick(index)">
					{{item.title}}
				</view>
			</view>
			<view class="page_five_list1">
				<view class="page_five_list_item-1" :class="item1.onoff?'page_five_list_item_onoff':''" 
				v-for="(item1,index1) in five_list_item" :key="index1" 
				@click="onoffclick1(index1)">
					    <span>
						{{item1.title}}
						</span>
				 </view>
			</view>
		</view>
		<!-- 号码选择列表 -->
		<view class="caizhonghaoma_list">
			<view class="buttom">
				<view class="buttom-hezi" v-for="(it, idx) in codeList" :key="idx" @click="clickbuttom2(it,idx)">
					<view class="button-list" :class="it.onoff?'page_five_list_item_onoff':''" >
					{{it.code}}
					</view>
					<span>x{{it.odds}}</span>
				</view>
			</view>
			<!-- 玩法选择 -->
			<view  v-if="temaonoff == true">
			<view class="wfxz_title">玩法选择</view>
			<hr class="wfxz_br">
			<view class="page_wfxz_list">
				<view class="page_wfxz_list_item" v-for="(item3,index) in wfxz_list" :key="index" :class="item3.onoff?'page_five_list_item_onoff':''" @click="onoffclick3(item3.title,index)">
					{{item3.title}}
				</view>
			</view>
			</view>
		</view>
		
		<OnekeyBettingLiuhe :label='2' :max="99" :val="0" :step="1" :min="0"
			 @change="stepper3" 
			 :data_list1="data_list1"
			 :data_list2="data_list2"
			 :playmode = "playmode"
			 :caizhong = "caizhong"
			 :yjfl="yjfl"
		 ></OnekeyBettingLiuhe>
	</view>
</template>

<script>
	import liuhejs from "@/common/liuhe.js";
	import liuheHead from "@/components/myUnits/LiuheHead.vue";
	import OnekeyBettingLiuhe from "@/components/myUnits/OnekeyBettingLiuhe.vue";
	export default {
		components:{liuheHead,OnekeyBettingLiuhe},
		data() {
			return {
				wfxzitem:'一肖',
				temaonoff:false,
				data_list1:[],
				data_list2:[],
				playmode:"连号",
				caizhong:"六合",
				yjfl:[
					  {
						title: "元",
						Index:false,
						modeValue: 1
					  },
				  ],
				codeList:[
					{
						title:'鼠',
						onoff:false
					},
					{
						title:'牛',
						onoff:false
					},{
						title:'虎',
						onoff:false
					}
					],
				five_list: [{
					title: '号码',
					onoff: false
				}, {
					title: '生肖',
					onoff: true
				}, {
					title: '连码',
					onoff: false
				}, {
					title: '两面',
					onoff: false
				}, {
					title: '不中',
					onoff: false
				}],
				five_list_item:[{
					title: '平特一肖',
					onoff: true
				}, {
					title: '特码合肖',
					onoff: false
				}, {
					title: '平码生肖',
					onoff: false
				}, {
					title: '特码生肖',
					onoff: false
				}],
				wfxz_list:[
					{
						title: '一肖',
						onoff: false
					},
					{
						title: '二肖',
						onoff: false
					},{
						title: '三肖',
						onoff: false
					},{
						title: '四肖',
						onoff: false
					},{
						title: '五肖',
						onoff: false
					},{
						title: '六肖',
						onoff: false
					},{
						title: '七肖',
						onoff: false
					},{
						title: '八肖',
						onoff: false
					},{
						title: '九肖',
						onoff: false
					},{
						title: '十肖',
						onoff: false
					},{
						title: '十一肖',
						onoff: false
					}
				]
			}
		},
		created() {
				this.onoffclick1(0)
		},
		methods: {
			// 平特 特码 平码
			onoffclick1(index1){
				let url ='/lhc-wanfa/v1/pingmasx';
				let name = ''
				for (let i = 0; i < this.five_list_item.length; i++) {
					if (index1 == i) {
							this.five_list_item[index1].onoff = true
						if(index1 == 1){
							this.temaonoff = true;
						}else{
							this.temaonoff = false
						}
					}else{
						this.five_list_item[i].onoff = false
					}
					if(index1 == 1){
						url = '/lhc-wanfa/v1/temahexiao';
						name = this.wfxzitem
					}else if(index1 == 2){
						url ='/lhc-wanfa/v1/pingmasx';
					}else if(index1 == 3){
						url = '/lhc-wanfa/v1/temasx';
					}
				}
				this.$myRequest.get(
					url, 
					{name:name},
					{
					success: (res) => {
							if(res.data.code == 200){
								let lhcCodeVos = liuhejs.escapedlhcCodeVos(res.data.data.lhcCodeVos);
								this.codeList = lhcCodeVos;
							}else{
								uni.showToast({
									title:res.data.message
								})
							}
						}
					}
				)
			},
			// 玩法选择
			onoffclick3(item,index3){
				for (let i = 0; i < this.wfxz_list.length; i++) {
						this.wfxz_list[i].onoff = false
					if (index3 == i) {
						this.wfxz_list[index3].onoff = true
					}
				}
				this.wfxzitem = item;
				this.onoffclick1(1)
			},
			// 号码选择
			clickbuttom2(it,idx){
						this.codeList[idx].onoff = !this.codeList[idx].onoff
this.$forceUpdate();
			},
			onoffclick(index) {
					if (index == 4) {
						uni.navigateTo({
							url: '/pages/liuhe/buzhong'
						});
					}else if(index == 0){
						uni.navigateTo({
							url: '/pages/liuhe/haoma'
						});
					}else if(index == 2){
						uni.navigateTo({
							url: '/pages/liuhe/lianma'
						});
					}else if(index == 3){
						uni.navigateTo({
							url: '/pages/liuhe/liangmian'
						});
					}
			},
			stepper3(){
				
			}
		}
	}
</script>

<style lang='scss'>
	.page{
		padding-bottom: 300upx;
	}
	.page_five , .caizhonghaoma_list{
		width: 95%;
		margin: 10upx auto;
		background-color: $uni-background-image-color;
		border-radius: 20upx;
		padding: 30upx 3upx;
	}

	.page_five_list {
		display: flex;
		justify-content: space-evenly;
		align-items: center;
	}
	.page_five_list1 {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		margin-top: 30upx;
	}
	.page_wfxz_list{
		display: flex;
		justify-content: left;
		align-items: center;
		flex-wrap: wrap;
	}

	.page_five_list_item {
		width: 18%;
		height: 45upx;
		border-radius: 20upx;
		background-image: linear-gradient(#01BFFE, #01375A);
		line-height: 45upx;
		text-align: center;
		color: #fff;
	}
	
	.page_wfxz_list_item{
		width: 18%;
		margin: 25upx 0 0 11%;
		height: 45upx;
		border-radius: 20upx;
		background-image: linear-gradient(#01BFFE, #01375A);
		line-height: 45upx;
		text-align: center;
		color: #fff;
	}
	.wfxz_title{
		text-align: center;
	}
	.wfxz_br{
		margin: 0 auto;
		width: 90%;
		border-top: 1px solid #999;
	}

	.page_five_list_item_onoff {
		background-image: linear-gradient(#FFECBA, #AD5901)!important
;	}
	
	.page_five_list_item-1{
		margin: 10upx 30upx;
		width: 90upx;
		height: 90upx;
		border-radius: 50%;
		background-image: linear-gradient(#01BFFE, #01375A);
		text-align: center;
		line-height: 35upx;
		color: #fff;
		font-size: 28upx;
	}
	
	.page_five_list_item-1 span{
		width: 80upx;
		display: block;
		margin: 0 auto;
		padding-top:10upx ;
	}
	.buttom {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}

	.buttom-hezi {
		width: 25%;
		
	}
	.buttom-hezi span{
		color: #fff;
		display: block;
		text-align: center;
		transform: scale(0.8);
	}

	.button-list {
		width: $uni-xuanma-width-normal;
		line-height: $uni-xuanma-height-normal;
		height: $uni-xuanma-height-normal;
		margin: 0 auto;
		background-color: #999;
		border-radius: 50%;
		text-align: center;
		color: #fff;
	}
</style>
