 <template>
	<view class="content">
		<!-- 标签列表 -->
			<navTab ref="navTab" :tabTitle="tab_list" @changeTab='changeTab'></navTab>
			<swiper style="min-height: 100%;" :current="currentTab" @change="swiperTab"><!-- 原来是min-height:80vh -->
				<swiper-item v-for="(listItem,listIndex) in tab_list" :key="listIndex">
					<scroll-view style="height: 100%;" scroll-y="true" scroll-with-animation :scroll-into-view="toView">
					<view class='content swiper-flex'>
						<my-unit3 v-for="(item, idx) in listItem.items" :key="idx" 
						:src="item.icon" 
						:url="item.url" 
						:isSale = "item.isSale"
						:name="item.gname" 
						:hour = "parseInt(item.hour)"
						:minute = "parseInt(item.minute)" :second = "parseInt(item.second)" :color="color"></my-unit3>
					</view>
					</scroll-view>
				</swiper-item>
			</swiper>
	</view>
</template>

<script>
	const util = require('@/util/util.js');
	import myUnit3 from '@/components/myUnits/unit3.vue'; 
	import navTab from '@/components/uni-scroll/navTab.vue';
	export default {
		components: {
			myUnit3,
			navTab
		},
		data() {
			return {
				color: "#ffffff",
				toView: '', //回到顶部id
				currentTab: 0, //sweiper所在页
				tab_list:[]
			};
		},
		onLoad() {
			this.navtablist();
		},
		methods: {
			navtablist(){
			this.$myRequest.get(
				'/game/v1/getAllGames', {},
				{
				success: (res) => {
						if(res.data.code == 200){
							console.log(res.data.data);
							this.tab_list = res.data.data
						}else{
							alert(res.massage)
						}
					}
				})
			},
			// 加载更多 util.throttle为防抖函数
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
				// for (let key in this.tab_list) {
				// 	this.tabTitle.push(this.tab_list[key].cname);
				// }
			},
			// swiper 滑动
			swiperTab: function(e) {
				var index = e.detail.current //获取索引
				this.$refs.navTab.longClick(index);
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
		background-image: linear-gradient(#151b4a, #0d0827);
		/* background: url(/static/img/content-background.png) repeat fixed center; */
		background-size: 100% 100%;
	}

	.nuter {
		width: 100%;
		height: 80rpx;
		display: flex;
		justify-content: space-around;
		font-size: $uni-font-size-sm;
	}

	.nuter view {
		flex: 1;
		font-size: $uni-font-size-ssm;
		line-height: 40upx;
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
		box-shadow: 3upx 3upx 5upx #888888;
	}

	.swiper-flex {
		display: flex;
		flex-wrap: wrap;
		align-content: flex-start;
	}
	

</style>
