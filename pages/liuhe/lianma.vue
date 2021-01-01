<template>
	<view>
		<liuheHead></liuheHead>	
		<view class="page">
		<!-- 彩种选择列表 -->
			<view class="page_five">
				<view class="page_five_list">
					<view class="page_five_list_item" v-for="(item,index) in five_list" :key="index" :class="item.onoff?'page_five_list_item_onoff':''"
					 @click="onoffclick(index)">
						{{item.title}}
					</view>
				</view>
				<view class="page_five_list1">
					<view class="page_five_list_item-1" v-for="(item1,index1) in five_list_item" :key="index1">
						<view class="page_five_list_item-1_item"  :class="item1.onoff?'page_five_list_item_onoff':''"
						 @click="onoffclick1(item1,index1)">
						 <span style="font-weight: bolder;font-size: 30upx; line-height: 1.8;">
							{{item1.code}}
						</span>
						 <span style="font-weight:lighter;font-size: 30upx; line-height: 1;">
							{{item1.odds}}
						 </span>
						 </view>
					 </view>
				</view>
			</view>
			<!-- 号码选择列表 -->
			<view class="caizhonghaoma_list">
				<view class="buttom">
					<view class="buttom-hezi" v-for="(it, idx) in codeList" :key="idx" @click="clickbuttom2(it,idx)">
						<view class="button-list" :class="addClass(it)">
						{{it.code}}
						</view>
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
		components:{liuheHead, OnekeyBettingLiuhe},
		data() {
			return {
				codeList:[],
				data_list1:[],
				data_list2:[],
				playmode:"连号",
				caizhong:"六合",
				// 元角分离
				yjfl:[
					  {
						title: "元",
						Index:false,
						modeValue: 1
					  },
				  ],
				five_list: [{
					title: '号码',
					onoff: false
				}, {
					title: '生肖',
					onoff: false
				}, {
					title: '连码',
					onoff: true
				}, {
					title: '两面',
					onoff: false
				}, {
					title: '不中',
					onoff: false
				}],
				five_list_item:[
				  {
					"sale": true,
					"code": "三全中",
					"odds": "650.00",
					"color": ""
				  },
				  {
					"sale": true,
					"code": "三中二",
					"odds": "107.00,20.00",
					"color": ""
				  },
				  {
					"sale": true,
					"code": "二全中",
					"odds": "63.00",
					"color": ""
				  },
				  {
					"sale": true,
					"code": "二中特",
					"odds": "51.00,31",
					"color": ""
				  }
				]
			}
		},
		created() {
			for (let i = 1; i < 50; i++) {
				this.codeList.push({
					title:i,
					onoff:false
				})
			}
			this.getMenu();
			this.getCodeList();
		},
		methods: {
			getMenu(){
				this.$myRequest.get("/lhc-wanfa/v1/lianma",{},{
					success: (res) => {
						if(res.data.code == 200) {
							let five_list_item_arr = [];
							for (let i in res.data.data.lhcCodeVos) {
								if(i == 0) {
									res.data.data.lhcCodeVos[i].onoff = true;
								} else {
									res.data.data.lhcCodeVos[i].onoff = false;
								}
								five_list_item_arr.push(res.data.data.lhcCodeVos[i]);
							}
							this.five_list_item = five_list_item_arr;
						} else {
							uni.showToast({
								title:res.data.message
							})
						}
					}
				});
			},
			getCodeList(){
				let url = "/lhc-wanfa/v1/codecolor";
				this.$myRequest.get(url,{},{
					success:(res) => {
						if(res.data.code == 200) {
							let data = liuhejs.escapedlhcCodeVos(res.data.data);
							this.codeList = data;
							console.log(this.codeList)
						} else {
							uni.showToast({
								title:res.data.message
							})
						}
					}
				})
			},
			addClass(item){
				let classname = '';
					classname = "liuhe-hong-kong";
				if(item.color == "红波") {
					if(item.onoff) {
						classname = "liuhe-hong liuhe-hong-kong";
					}
				}
				if(item.color == "绿波") {
					classname = "liuhe-lv-kong";
					if(item.onoff) {
						classname = "liuhe-lv liuhe-lv-kong";
					}
				}
				if(item.color == "蓝波") {
					classname = "liuhe-lan-kong";
					if(item.onoff) {
						classname = "liuhe-lan liuhe-lan-kong";
					}
				}
				return classname;
			},
			onoffclick(index) {
				if (index == 4) {
					uni.navigateTo({
						url: '/pages/liuhe/buzhong'
					});
				}else if(index == 1){
					uni.navigateTo({
						url: '/pages/liuhe/shengxiao'
					});
				}else if(index == 0){
					uni.navigateTo({
						url: '/pages/liuhe/haoma'
					});
				}else if(index == 3){
					uni.navigateTo({
						url: '/pages/liuhe/liangmian'
					});
				}
			},
			onoffclick1(item1,index1){
				this.wanfas = index1;
				this.getCodeList();
				for(let i in this.five_list_item) {
					this.five_list_item[i].onoff = false;
				}
				for(let i in this.codeList) {
					this.codeList[i].onoff = false;
				}
				this.five_list_item[index1].onoff = true;
				this.data_list1 = [];
				this.data_list2 = [item1.code];
			},
			clickbuttom2(it, idx){
				this.codeList[idx].onoff = !this.codeList[idx].onoff;
				// 把选择的号码装到dataList1里去
				let index = -1;
				for(let i in this.data_list1) {
					if(this.data_list1[i] == it.code) {
						index = i;
					}
				}
				if(index >=0) {
					this.data_list1.splice(index,1);
				} else {
					this.data_list1.push(it.code)
				}
				this.$emit('data_list1', this.data_list1);
			},
			stepper3(e){
				console.log(e)
			}
		}
	}
</script>

<style lang="scss">
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
	
	.page_five_list_item {
		width: 18%;
		height: 45upx;
		border-radius: 20upx;
		background-image: linear-gradient(#01BFFE, #01375A);
		line-height: 45upx;
		text-align: center;
		color: #fff;
	}
	
	.page_five_list_item_onoff {
		background-image: linear-gradient(#FFECBA, #AD5901)!important;
	}
	
	.page_five_list_item-1{
		width: 21%;
		margin: 10upx 0;
	}
	.page_five_list_item-1_item{
		margin: 0 auto;
		width: 90upx;
		height: 90upx;
		border-radius: 50%;
		background-image: linear-gradient(#01BFFE, #01375A);
		line-height: 45upx;
		text-align: center;
		color: #fff;
	}
	.page_five_list_item-1_item span{
		display: block;
		font-size: 18upx;
		white-space: nowrap;
		transform: scale(0.8);
	}
	
	.buttom {
		display: flex;
		flex-wrap: wrap;
		justify-content: left;
	}
	
	.buttom-hezi {
		width: 20%;
		
	}
	
	.button-list {
		width: $uni-xuanma-width-normal;
		line-height: $uni-xuanma-height-normal;
		height: $uni-xuanma-height-normal;
		margin: 15upx auto;
		border: 1px $uni-border-color solid;
		border-radius: 50%;
		background-color: #999;
		text-align: center;
		color: #fff;
		font-size: 35upx;
	}
	
</style>
