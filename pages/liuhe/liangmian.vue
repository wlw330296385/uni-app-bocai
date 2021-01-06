<template>
	<view>
		<liuheHead :rule="rule" :gameId="gameId"></liuheHead>	
		<view class="page">
			<!-- 彩种选择列表 -->
			<view class="page_five">
				<view class="page_five_list">
					<view class="page_five_list_item" v-for="(item,index) in five_list" :key="index" :class="item.onoff?'page_five_list_item_onoff':''"
					 @click="onoffclick(index)">
						{{item.title}}
					</view>
				</view>
			</view>
			<!-- 号码选择列表 -->
			<view class="caizhonghaoma_list">
				<view class="caizhonghaoma_box">
					特码大小 \ 单双
					<hr>
					<view class="uni-flex uni-row flex-justify-content-center">
						<view class="flex-item" v-for="(item0,index0) in dxds_list" :key="index0" @click="onoffclick0(index0)">
							<view class="item-box" :class="item0.onoff?'dxds_list_onoff':''">{{item0.code}}</view>
							<view>{{item0.beilv}}</view>
						</view>
					</view>
				</view>
				<view class="caizhonghaoma_box">
					特码波色
					<hr>
					<view class="uni-flex uni-row flex-justify-content-center caizhonghaoma_box_color">
						<view class="flex-item" v-for="(item1,index1) in hll_list" :key="index1" @click="onoffclick1(index1)">
							<view class="item-box" :class="addClass(item1)" >{{item1.code}}</view>
							<view>{{item1.beilv}}</view>
						</view>
					</view>
				</view>
				<view class="caizhonghaoma_box">
					特码双位
					<hr>
					<view class="uni-flex uni-row flex-justify-content-center  caizhonghaoma_box_color">
					<view class="flex-item" v-for="(item2,index2) in dxdss_list" :key="index2" @click="onoffclick2(item2,index2)">
						<view class="item-box" :class="item2.onoff == true ?'dxds_list_onoff':''">{{item2.code}}</view>
						<view>{{item2.beilv}}</view>
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
				gameId:104,
				rule:`
				连码玩法是以平码+特码作为开奖结果,连码
				共有四种玩法:
				①三全中:所投注的每三个号码为一组合,
				若三个号码都是开奖号码之平码,视为中奖
				其余情形视为不中奖
				②三中二:所投注的每三个号码为一组合
				若其中2个是开奖号码中的平码,即为三中二
				视为中奖:;若3个都是开奖号码中的平码
				即为三中二之中三,其余情形视为不中奖
				二全中:所投注的每二个号码为一组合
				二个号码都是开奖号码之平码,视为中奖,其
				余情形视为不中奖(含个平码加个特别号
				码之情形)
				④二中特:所投注的每二个号码为一组合,
				二个号码都是开奖号码之平码,叫二中特之中
				二;若其中一个是平码,一个是特别号码,
				叫二中特之中特;其余情形视为不中奖。
				`,
				color_onoff:[],
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
					onoff: false
				}, {
					title: '两面',
					onoff: true
				}, {
					title: '不中',
					onoff: false
				}],
				dxds_list:[{
					title: '大',
					onoff: false,
					beilv:"x650"
				}, {
					title: '小',
					onoff: false,
					beilv:"x107"
				}, {
					title: '单',
					onoff: false,
					beilv:"x63"
				}, {
					title: '双',
					onoff: false,
					beilv:"x51"
				}],
				hll_list:[
					{
						title: '红',
						onoff: false,
						beilv:"x63"
					},
					{
						title: '蓝',
						onoff: false,
						beilv:"x63"
					},{
						title: '绿',
						onoff: false,
						beilv:"x63"
					},
				],
				dxdss_list:[{
					title: '大单',
					onoff: false,
					beilv:"x650"
				}, {
					title: '大双',
					onoff: false,
					beilv:"x107"
				}, {
					title: '小单',
					onoff: false,
					beilv:"x63"
				}, {
					title: '小双',
					onoff: false,
					beilv:"x51"
				}],
			}
		},
		created() {
			for (let i = 0; i < 3; i++) {
				this.hll_list.push({
					title:i,
					onoff:false,
					odds:Math.round(Math.random() * 10),
				})
			};
			this.liangmianlist()
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
				if(item.code == "红波") {
					if(item.onoff) {
						classname = "liuhe-hong liuhe-hong-kong";
					}
				}
				if(item.code == "绿波") {
					classname = "liuhe-lv-kong";
					if(item.onoff) {
						classname = "liuhe-lv liuhe-lv-kong";
					}
				}
				if(item.code == "蓝波") {
					classname = "liuhe-lan-kong";
					if(item.onoff) {
						classname = "liuhe-lan liuhe-lan-kong";
					}
				}
				return classname;
			},
			liangmianlist(){
				this.dxds_list =[];
				this.dxdss_list = [];
				this.hll_list = [];
				this.$myRequest.get("/lhc-wanfa/v1/temalm",{},{
					success: (res) => {
						if(res.data.code == 200) {
							for (let i in res.data.data.lhcCodeVos) {
								if(i == 0) {
									res.data.data.lhcCodeVos[i].onoff = true;
								} else {
									res.data.data.lhcCodeVos[i].onoff = false;
								}
								if(i<=1 || i> 5&& i<8){
									this.dxds_list.push(res.data.data.lhcCodeVos[i]);
								}else if(i>=3 && i<8 || i==2){
									this.dxdss_list.push(res.data.data.lhcCodeVos[i]);
							        this.dxdss_list = liuhejs.escapedlhcCodeVos(this.dxdss_list);
								}else{
									this.hll_list.push(res.data.data.lhcCodeVos[i]);
								}
							}
						} else {
							uni.showToast({
								title:res.data.message
							})
						}
					}
				})
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
				}else if(index == 2){
					uni.navigateTo({
						url: '/pages/liuhe/lianma'
					});
				}
			},
			onoffclick0(index0){
				for (let i = 0; i < this.dxds_list.length; i++) {
					if (index0 == i) {
						this.dxds_list[index0].onoff = !this.dxds_list[index0].onoff
					}
				}
			},
			onoffclick1(index1){
				for (let i = 0; i < this.hll_list.length; i++) {
					if (index1 == i) {
						this.hll_list[index1].onoff = !this.hll_list[index1].onoff
					}
				}
			},
			onoffclick2(it,index1){
				for (let i = 0; i < this.dxdss_list.length; i++) {
					if (index1 == i) {
						this.dxdss_list[index1].onoff = !this.dxdss_list[index1].onoff
					} 
				}
			},
			stepper3(){
				
			}
		}
	}
</script>

<style lang="scss">
	.page_five , .caizhonghaoma_list{
		width: 95%;
		margin: 10upx auto;
		background-color: #444691;
		border-radius: 20upx;
		padding: 30upx 3upx;
		text-align: center;
		color: #fff;
		.page_five_list {
			display: flex;
			justify-content: space-evenly;
			align-items: center;
			.page_five_list_item {
				width: 18%;
				height: 45upx;
				border-radius: 20upx;
				background-image: linear-gradient(#01BFFE, #01375A);
				line-height: 45upx;
				text-align: center;
			}
			.page_five_list_item_onoff {
				background-image: linear-gradient(#FFECBA, #AD5901)!important;
			}
		}
	}
	
	.caizhonghaoma_list {
		.caizhonghaoma_box {
			margin-bottom: 1upx;
			.flex-item {
				margin: 20upx 20upx 0 0;
				.item-box {
					border-radius: 50%;
					background-color: $uni-text-color-grey;
					font-size: 35upx;
					line-height: 2.3;
					width: 80upx;
					height: 80upx;
				}
			}
			
		}
	}
	.dxds_list_onoff {
		background-image: linear-gradient(#FFECBA, #AD5901)!important;
	}
</style>
