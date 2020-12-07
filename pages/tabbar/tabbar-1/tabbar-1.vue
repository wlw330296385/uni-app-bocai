<template>
	<view class="content">

		<!-- 标签列表 -->
			<navTab ref="navTab" :tabTitle="tabTitle" @changeTab='changeTab'></navTab>
			<swiper style="min-height: 80vh;" :current="currentTab" @change="swiperTab">
				<swiper-item v-for="(listItem,listIndex) in 9" :key="listIndex">
					<view class='content swiper-flex'>
						<my-unit3 v-for="(item, idx) in list" :key="idx" :src="item.src" :url="item.url" :name="item.name" :hour="item.hour"
						 :minute='item.minute' :second='item.second' :color="color"></my-unit3>
					</view>

				</swiper-item>
			</swiper>
	</view>
</template>

<script>
	import myUnit3 from '@/components/myUnits/unit3.vue'; 
	import navTab from '@/components/uni-scroll/navTab.vue';
	var list = [{
			src: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3511544063,4112539952&fm=26&gp=0.jpg",
			url: "/pages/xuanma/shishicai",
			hour: Math.round(Math.random() * 10),
			minute: Math.round(Math.random() * 10),
			second: Math.round(Math.random() * 10),
			daojishi: "15:54:17",
			name: "时时彩直选",
		},
		{
			src: "../../../static/img/PK104.png",
			url: "/pages/xuanma/sizeSinglepair",
			hour: Math.round(Math.random() * 10),
			minute: Math.round(Math.random() * 10),
			second: Math.round(Math.random() * 10),
			daojishi: "15:54:17",
			name: "大小单双",
		},
		{
			src: "../../../static/img/PK10图标4.png",
			url: "/pages/xuanma/fenfencai",
			hour: Math.round(Math.random() * 10),
			minute: Math.round(Math.random() * 10),
			second: Math.round(Math.random() * 10),
			daojishi: "15:54:17",
			name: "单选",
		},
		{
			src: "../../../static/img/PK10图标4.png",
			url: "/pages/xuanma/hezhi",
			hour: Math.round(Math.random() * 10),
			minute: Math.round(Math.random() * 10),
			second: Math.round(Math.random() * 10),
			daojishi: "15:54:17",
			name: "时时彩和值",
		},
	];
	var tab_list = [{
			"id": 100,
			"gname": "时时彩",
			"isSale": true
		},
		{
			"id": 101,
			"gname": "11x5",
			"isSale": true
		},
		{
			"id": 102,
			"gname": "福彩3D",
			"isSale": true
		},
		{
			"id": 107,
			"gname": "排列三",
			"isSale": true
		}
	];
	var tabTitle = [];
	var color = "#ffffff";
	export default {
		components: {
			myUnit3,
			navTab
		},
		data() {
			return {
				toView: '', //回到顶部id
				currentTab: 0, //sweiper所在页
				tabTitle: tabTitle, //导航栏格式
				list,
				tab_list,
				color
			};
		},
		onLoad() {
		},
		methods: {
			changeTab(index) {
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
			request_test() {
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
			//尝试请求
			// this.request_test();
			// for (let key in tab_list) {
			// 	this.tabTitle.push(tab_list[key].gname);
			// }
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
		background: url(../../../static/img/content-background.png) repeat fixed center;
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
