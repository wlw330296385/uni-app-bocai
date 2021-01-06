<template>
	<view class="page">
		<liuheHead :rule="rule" :gameId="gameId"></liuheHead>	
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
					 @click="onoffclick1(index1,item1)">
					 <span>
					    {{item1.code}}
						<br>
						x{{item1.odds}}
					 </span>
					 </view>
				 </view>
			</view>
		</view>
		<!-- 号码选择列表 -->
		<view class="caizhonghaoma_list">
			<view class="buttom">
				<view class="buttom-hezi" v-for="(it, idx) in codeList" :key="idx" @click="clickbuttom2(it,idx)">
					<view class="button-list"  :class="addClass(it)">
						{{it.code}}
					</view>
				</view>
			</view>
		</view>
		
		<OnekeyBettingLiuhe :label='2' :max="99" :val="0" :step="1" :min="0"
			 @change="stepper3" 
			 :data_list1="data_list1"
			 :data_list2="data_list2"
			 :playmode = "playmode"
			 :caizhong = "wname"
			 :wname = "wname"
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
				gameId:104,
				rule:"自选不中奖:挑选5-12个号码为一个组合,当期号码(所有平码与最后开出的特码)皆没有坐落于投注时所挑选之号码组合内,则视为中奖,若是有任何一个当期号码开在所挑选的号码组合情形视为不中奖。例如当期号码为19,24,17,34,40,39特别号49,所挑选5个号码(称为五不中),若所挑选的号码内皆没有坐落于当期号码,则为中奖",
				codeList:[],
				data_list1:[],
				data_list2:[],
				playmode:"五不中",
				wname:"不中",
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
					onoff: false
				}, {
					title: '两面',
					onoff: false
				}, {
					title: '不中',
					onoff: true
				}],
				five_list_item:[
				]
			}
		},
		created() {
			this.getCodeList();
			this.getBuzhonglList();
		},
		// 页面周期与 onLoad 同级
		onBackPress(e) {
			console.log(e);
			if (e.from == 'backbutton') {
				uni.switchTab({
					url:"/pages/tabbar/tabbar-1/tabbar-1"
				});
				return true; //阻止默认返回行为
			}
		},
		methods: {
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
			getBuzhonglList(){
				this.five_list_item=[]
				this.$myRequest.get(
					'/lhc-wanfa/v1/buzhong', 
					{},
					{
					success: (res) => {
							if(res.data.code == 200){
								console.log(res.data.data)
								this.wname = res.data.data.wname;
								let key = 0;
								res.data.data.lhcCodeVos.forEach(item=>{
									let onoff = false;
									if(key ==0){
										onoff = true;
									}
									this.five_list_item.push({
										code:item.code,
										onoff:onoff,
										odds:item.odds
									})
									key++
								})
								this.yjfl[0].Index = true
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
			onoffclick(index) {
					if (index == 0) {
						uni.navigateTo({
							url: '/pages/liuhe/haoma'
						});
					}else if(index == 1){
						uni.navigateTo({
							url: '/pages/liuhe/shengxiao'
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
			getCodeList(index1){
				let url = "/lhc-wanfa/v1/codecolor";
				// if(index1 === 1) {
				// 	url = "/lhc-wanfa/v1/tema";
				// }
				this.$myRequest.get(url,{},{
					success:(res) => {
						if(res.data.code == 200) {
							let data = liuhejs.escapedlhcCodeVos(res.data.data);
							this.codeList = data;
						} else {
							uni.showToast({
								title:res.data.message
							})
						}
					}
				})
			},
			onoffclick1(index1, item){
				this.playmode = item.code;
				this.getCodeList();
				for(let i in this.five_list_item) {
					this.five_list_item[i].onoff = false;
				}
				for(let i in this.codeList) {
					this.codeList[i].onoff = false;
				}
				this.five_list_item[index1].onoff = true;
				this.data_list1 = [];
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
		font-size: 24upx;
		white-space: nowrap;
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
		background-color: #999;
		border-radius: 50%;
		text-align: center;
		color: #000;
	}
</style>
