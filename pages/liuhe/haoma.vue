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
				@click="onoffclick1(item1.index)">
					    {{item1.title}}
				 </view>
			</view>
		</view>
		<!-- 号码选择列表 -->
		<view class="caizhonghaoma_list">
			<view class="buttom">
				<view class="buttom-hezi" v-for="(it, idx) in codeList" :key="idx" @click="clickbuttom2(it, idx)">
					<view class="button-list" :class="addClass(it)" >
					{{it.code}}
					</view>
					<span>x{{it.odds}}</span>
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
				wanfa:0,
				codeList:[],
				color_onoff:[],
				data_list1:[],//所选号码
				data_list2:[],//所选生肖什么的
				playmode:"号码",
				caizhong:"六合",
				yjfl:[
					  {
						title: "元",
						Index:false,
						modeValue: 1
					  },
				  ],
				five_list: [{
					title: '号码',
					onoff: true
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
					onoff: false
				}],
				five_list_item:[{
					title: '平码',
					onoff: true,
					index:0
				}, {
					title: '特码',
					onoff: false,
					index:1
				}]
			}
		},
		created() {
			for (let i = 1; i < 50; i++) {
				this.codeList.push({
					title:i,
					onoff:false,
					odds:Math.round(Math.random() * 10),
				})
			};
			this.getCodeList();
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
			getCodeList(){
				let url = "/lhc-wanfa/v1/pingma";
				if(this.wanfa === 0) {
					url = "/lhc-wanfa/v1/tema";
				}
				this.$myRequest.get(url,{},{
					success:(res) => {
						if(res.data.code == 200) {
							let lhcCodeVos = liuhejs.escapedlhcCodeVos(res.data.data.lhcCodeVos);
							this.codeList = lhcCodeVos;
							console.log(this.codeList)
						} else {
							uni.showToast({
								title:res.data.message
							})
						}
					}
				})
			},
			onoffclick1(index1){
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
			onoffclick(index) {
					if (index == 4) {
						uni.navigateTo({
							url: '/pages/liuhe/buzhong'
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
		background-image: linear-gradient(#FFECBA, #AD5901)!important
;	}
	
	.page_five_list_item-1{
		margin: 10upx 30upx;
		width: 90upx;
		height: 90upx;
		border-radius: 50%;
		background-image: linear-gradient(#01BFFE, #01375A);
		line-height: 45upx;
		text-align: center;
		color: #fff;
		line-height: 90upx;
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
	.buttom-hezi span{
		color: #fff;
		display: block;
		text-align: center;
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
