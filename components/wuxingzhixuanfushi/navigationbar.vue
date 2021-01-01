<template>
	<view class="tabbar_content">
		<view class="nonetop"></view>
		<view class="header">
			<view class="header-left" @click="goto">
				<image style="width: 30upx; height: 30upx;" :src="src">
				</image>
			</view>
			<view class="header-center" @click="itemlink">
				<span class="header-center-span">{{caizhong}}</span>
				{{playmode}}:{{playmode1}} 
				<image style="width: 30upx; height: 20upx; padding: 10upx 10upx 0 10upx ;" src="/static/down.png">
				</image>
			</view>
			<view class="header-right"></view>
		</view>
		<s-popup ref="popup" type="top" height="950upx">
			<view class="page">
				<!-- 占位 -->
				<view class="category-list">
					<!-- 左侧分类导航 -->
					<scroll-view scroll-y="true" class="left">
						<view class="row" v-for="(category,index) in categoryList" :key="category.id" :class="[index==showCategoryIndex?'on':'']"
						 @tap="showCategory(index,category.name)">
							<view class="text">
								{{category.name}}
							</view>
						</view>

					</scroll-view>
					<!-- 右侧子导航 -->
					<scroll-view scroll-y="true" class="right">
						<view class="category" v-for="(item,index) in categoryList" :key="item.id" v-show="index==showCategoryIndex">
							<view class="list">
								<Wuxing :list="item.childs" @send="getSonValue"></Wuxing>
							</view>
						</view>
					</scroll-view>
				</view>

			</view>
		</s-popup>
	</view>
</template>
<script>
	import sPopup from "@/components/lee-popup/lee-popup.vue";
	import Wuxing from "@/components/wuxingzhixuanfushi/wuxingzhixuanfushi.vue";
	export default {
		components: {
			Wuxing,
			sPopup
		},
		props: ["caizhong"],
		data() {
			return {
				src: "/static/fanhui.png",
				showCategoryIndex: 0,
				headerPosition: "fixed",
				visible: false,
				gameId : 105,
				playmode:'',
				playmode1:'',
				//分类列表
				categoryList: [{
						"name": "前三",
						"childs": [{
								"name": "直选",
								"wfs": [{
										"id": 1000038,
										"name": "直选复式"
									},
									{
										"id": 1000039,
										"name": "直选单式"
									},
									{
										"id": 1000101,
										"name": "直选组合"
									}
								]
							}
						]
					},
				]
			}
		},
		mounted() {
			this.getList(this.gameId);	
		},
		methods: {
			getList(gameId) {
				this.$myRequest.get("/wanfa/v1/wfcls", {gameId:gameId}, {
					success: (res) => {
						if (res.data.data.gameId == 0) {
							//跳转'
							alert('玩法暂时关闭');
							uni.switchTab({
							    url: '/pages/tabbar/tabbar-1/tabbar-1'
							});
						} else {							
							this.categoryList = res.data.data.cls;
							this.playmode = this.categoryList[0].name;
							this.playmode1 = this.categoryList[0].childs[0].wfs[0].name;
						}
					},
					fail: (res) => {
						//跳转'
						alert('玩法暂时关闭');
						uni.switchTab({
							url: '/pages/tabbar/tabbar-1/tabbar-1'
						});
					}
				});
			},
			//分类切换显示
			showCategory(index, name) {
				this.showCategoryIndex = index;
				this.playmode = name;
			},
			toCategory(e) {
				// uni.setStorageSync('catName', e.name);
				// uni.navigateTo({
				// 	url: '../../goods/goods-list/goods-list?cid=' + e.id + '&name=' + e.name
				// });
			},

			getSonValue(res) {
				this.playmode1 = res.name;
				this.$refs.popup.close()
			},
			itemlink() {
				this.$refs.popup.open()
			},
			goto() {
				uni.navigateBack();
			}
		}
	}
</script>
<style lang="scss">
	.tabbar_content {
		margin-bottom: 5upx;
	}

	.nonetop {
		height: var(--status-bar-height);
		width: 100%;
	}

	
	/* #ifdef  APP-PLUS-NVUE || MP-WEIXIN || APP-PLUS */  
	.header {
		position: fixed;
		top: 50upx;
		background-color: #fff;
		width: 100%;
		height: 45upx;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}  	
	/deep/.lee-popup-mask{
		margin-top: 50upx;
	}

	/* #endif */  
	
	/* #ifdef  H5 */  
	.header {
		position: fixed;
		top: 10upx;
		background-color: #fff;
		width: 100%;
		height: 45upx;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	/* #endif */  
	

	.header-left,
	.header-right {
		margin: 5upx 10upx;
		font-size: 20upx;
	}

	.header-left-img {
		width: 30upx;
		height: 30upx;
	}

	.header-center {
		font-weight: bold;
		font-size: 30upx;
		text-align: center;
		padding-top: 20upx;
		line-height: 1.4;
	}
	
	.header-center-span{
		font-size: 26upx;
		width: 100%;
		display: inline-block;
	}
	
	/* #ifdef  APP-PLUS-NVUE || MP-WEIXIN || APP-PLUS */  
	.page {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background-image: linear-gradient(to right, #efefef, #ababab);
	}
	/* #endif */  

	/* #ifdef  H5 */  
	.page {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background-image: linear-gradient(to right, #efefef, #ababab);
	}
	/* #endif */  

	

	.category-list {
		width: 100%;
		background-color: #fff;
		display: flex;
		.left,
		.right {
			position: absolute;
			top: 0upx;
			/*  #ifdef  APP-PLUS || APP-PLUS-NVUE */
			// top: calc(100upx + var(--status-bar-height));
			/*  #endif  */
			bottom: 0upx;
		}

		.left {
			width: 20%;
			left: 1%;

			.row {
				width: 100%;
				height: 90upx;
				border-radius: 10px;
				box-shadow: 10upx 10upx 5upx #d3d3d3 ;
				display: flex;
				margin-bottom: 2.5px;
				align-items: center;
				background-color: #ffffff;
				
				.text {
					width: 100%;
					position: relative;
					font-size: 28upx;
					display: flex;
					justify-content: center;
					color: #000000;

					.block {
						position: absolute;
						width: 0upx;
						left: 0;
					}
				}

				&.on {
					height: 100upx;
					background: #F76260;
					border-radius: 10px;
					
					.text {
						font-size: 30upx;
						font-weight: 600;
						color: #fff;
					}
				}
			}
		}

		.right {
			width: 80%;
			left: 21%;

			.category {
				width: 94%;
				margin: 0upx 1%;

				.list {
					margin-top: 0upx;
					width: 100%;
					display: flex;
					flex-wrap: wrap;

					.box {
						width: calc(71.44vw / 3);
						margin-bottom: 30upx;
						display: flex;
						justify-content: center;
						align-items: center;
						flex-wrap: wrap;

						image {
							width: 80%;
							height: calc(71.44vw / 3 * 0.6);
						}

						.text {
							margin-top: 5upx;
							width: 100%;
							display: flex;
							justify-content: center;
							font-size: 26upx;
						}
					}
				}
			}
		}
	}
</style>
