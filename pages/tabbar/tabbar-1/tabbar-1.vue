<template>
	<view class="content">

		<!-- 标签列表 -->
			<navTab ref="navTab" :tabTitle="tabTitle" @changeTab='changeTab'></navTab>
			<swiper style="min-height: 80vh;" :current="currentTab" @change="swiperTab">
				<swiper-item v-for="(listItem,listIndex) in 9" :key="listIndex">
					<scroll-view style="height: 100%;" scroll-y="true" @scrolltolower="lower1" scroll-with-animation :scroll-into-view="toView">
					<view :id="'top'+listIndex" style="width: 100%;height: 110upx;">边距盒子</view>
					<view class='content swiper-flex'>
						<my-unit3 v-for="(item, idx) in list"
						:key = "idx"
						:src="item.src" 
						:url="item.url" 
						:name="item.name" 
						:hour = "item.hour"
						:minute = 'item.minute'
						:second = 'item.second'
						></my-unit3>
					</view>
					<view class='noCard' v-if="listItem.length===0">
						暂无信息
					</view>
					<view style="width: 100%;height: 100upx;opacity:0;">底部占位盒子</view>
					</scroll-view>
				</swiper-item>
			</swiper>
	</view>
</template>

<script>
	import myUnit3 from '@/components/myUnits/unit3.vue'; 
import navTab from '@/components/uni-scroll/navTab.vue';
	var list = [{
						src: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3511544063,4112539952&fm=26&gp=0.jpg",
						url: "pages/tabbar/tabbar-4/tabbar-4",
						hour: Math.round(Math.random()*10),
						minute: Math.round(Math.random()*10),
						second: Math.round(Math.random()*10),
						daojishi: "15:54:17",
						name: "幸运飞艇44",
					},
					{
						src: "../../../static/img/PK10图标4.png",
						url: "pages/tabbar/tabbar-4/tabbar-4",
						hour:Math.round(Math.random()*10),
						minute: Math.round(Math.random()*10),
						second: Math.round(Math.random()*10),
						daojishi: "15:54:17",
						name: "幸运飞艇",
					},
					{
						src: "../../../static/img/PK10图标4.png",
						url: "pages/tabbar/tabbar-4/tabbar-4",
						hour:Math.round(Math.random()*10),
						minute: Math.round(Math.random()*10),
						second: Math.round(Math.random()*10),
						daojishi: "15:54:17",
						name: "幸运飞艇",
					},
					{
						src: "../../../static/img/PK10图标4.png",
						url: "pages/tabbar/tabbar-4/tabbar-4",
						hour:Math.round(Math.random()*10),
						minute: Math.round(Math.random()*10),
						second: Math.round(Math.random()*10),
						daojishi: "15:54:17",
						name: "幸运飞艇",
					},
				];
	var tab_list = [
					{
					  "id": 100,
					  "gname": "重庆时时彩",
					  "isSale": true
					},
					{
					  "id": 101,
					  "gname": "山东11x5",
					  "isSale": true
					},
					{
					  "id": 102,
					  "gname": "福彩3D",
					  "isSale": true
					},
					{
					  "id": 103,
					  "gname": "江苏快3",
					  "isSale": true
					},
					{
					  "id": 104,
					  "gname": "六合彩",
					  "isSale": true
					},
					{
					  "id": 105,
					  "gname": "新疆时时彩",
					  "isSale": true
					},
					{
					  "id": 106,
					  "gname": "上海时时乐",
					  "isSale": true
					},
					{
					  "id": 107,
					  "gname": "排列三",
					  "isSale": true
					},
					{
					  "id": 108,
					  "gname": "排列五",
					  "isSale": true
					}
				  ];	
	var tabTitle = [];
	export default {
		components: {
			myUnit3,
			navTab
		},
		data() {
			return {
				toView:'',//回到顶部id
				currentTab: 0, //sweiper所在页
				tabTitle:tabTitle, //导航栏格式
				list,
				tab_list
			};
		},
		onLoad() {
			
		},
		methods: {
			changeTab(index){
			this.currentTab = index
		},
		onShow() {
			// let text = Math.ceil(Math.random() * 30);
			//这里验证登陆状态
			if (1 > 20) {
				uni.redirectTo({
					url: '/pages/login/login'
				})
			}
			//尝试请求
			this.request_test();
			for (let key in tab_list) {
				this.tabTitle.push(tab_list[key].gname);
			}
		},
		request_test () {
			uni.request({
				url: 'http://192.168.3.29:80/', //仅为示例，并非真实接口地址。
				data: {
					text: 'uni.request'
				},
				header: {
					
				},
				success: (res) => {
					console.log(res.data);
				}
			});
		}
		
	},
	
};
</script>

<style>
	.content {
		position: absolute;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		background: url(../../../static/img/内容背景.png) repeat fixed center;
		background-size: 100% 100%;
	}

	.nuter {
		width: 100%;
		height: 80rpx;
		display: flex;
		justify-content: space-around;
		font-size: 35rpx;
	}

	.nuter view {
		flex: 1;
		font-size: 30upx;
		line-height: 40px;
		text-align: center;
		transition: all 0.5s ease .1s;
		background-color: #f0f0f0;
	}

	.active {
		box-sizing: border-box;
		color: #007AFF;
		border-bottom: 5upx solid #00aaff;
		background-color: #f3ffff;
		border-radius: 10upx;
		box-shadow: 3px 3px 5px #888888;
	}

	.swiper-flex {
		display: flex;
		flex-wrap: wrap;
		align-content: flex-start;
	}
</style>
