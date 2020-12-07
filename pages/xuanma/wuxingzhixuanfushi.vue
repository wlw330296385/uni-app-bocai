<template>
	<view>
		<view class="header">
			<view class="header-left" @click="goto">
				<</view> <view class="header-center" @click="itemlink">{{Title}}
			</view>
			<view class="header-right">注册</view>
		</view>

		<s-popup ref="popup" type="top" height="50%">
			<view class="page">
				<!-- 占位 -->
				<view class="category-list">
					<!-- 左侧分类导航 -->
					<scroll-view scroll-y="true" class="left">
						<view class="row" v-for="(category,index) in categoryList" :key="category.id" :class="[index==showCategoryIndex?'on':'']"
						 @tap="showCategory(index)">
							<view class="text">
								{{category.title}}
							</view>
						</view>

					</scroll-view>
					<!-- 右侧子导航 -->
					<scroll-view scroll-y="true" class="right">
						<view class="category" v-for="(category,index) in categoryList" :key="category.id" v-show="index==showCategoryIndex">
							<view class="list">
								<Wuxing :list="category.list" @send="getSonValue"></Wuxing>
							</view>
						</view>
					</scroll-view>
				</view>

			</view>
		</s-popup>
		        <view>
		            <MyTextarea :label='2' :max="99" :val="0" :step="1" :min="0" @change="stepper3"></MyTextarea>
		        </view>
	</view>
</template>
<script>
	import MyTextarea from "@/components/myUnits/OnekeyBetting.vue";
	import sPopup from "@/components/lee-popup/lee-popup.vue";
	import Wuxing from "@/components/wuxingzhixuanfushi/wuxingzhixuanfushi.vue";
	import cmdNavBar from "@/components/cmd-nav-bar/cmd-nav-bar.vue";
	export default {
		components: {
			Wuxing,
			cmdNavBar,
			MyTextarea,
			sPopup
		},
		data() {
			return {
				showCategoryIndex: 0,
				headerPosition: "fixed",
				Title: '彩种',
				visible: false,
				//分类列表
				categoryList: [{
						id: 1,
						title: '五星',
						banner: '/static/img/category/banner.jpg',
						list: [{
								title: '直选1',
								textlist: [
									'直选复式1',
									'直选复式1',
									'直选复式1',
									'直选复式1',
								]
							},
							{
								title: '直选2',
								textlist: [
									'直选复式1',
									'直选复式1',
									'直选复式1',
									'直选复式1',
								]
							},
						]
					},
					{
						id: 2,
						title: '前四',
						banner: '/static/img/category/banner.jpg',
						list: [{
							title: '直选2',
							textlist: [
								'直选复式2',
								'直选复式2',
								'直选复式2',
								'直选复式2',
							]
						}, ]
					},
					{
						id: 3,
						title: '后四',
						banner: '/static/img/category/banner.jpg',
						list: [{
							title: '直选3',
							textlist: [
								'直选复式3',
								'直选复式3',
								'直选复式3',
								'直选复式3',
							]
						}, ]
					},
					{
						id: 4,
						title: '前三',
						banner: '/static/img/category/banner.jpg',
						list: [{
							title: '直选4',
							textlist: [
								'直选复式4',
								'直选复式4',
								'直选复式4',
								'直选复式4',
							]
						}, ]
					},
				]
			}
		},
		onPageScroll(e) {
			//兼容iOS端下拉时顶部漂移
			if (e.scrollTop >= 0) {
				this.headerPosition = "fixed";
			} else {
				this.headerPosition = "absolute";
			}
		},
		methods: {
			//消息列表
			toMsg() {
				uni.navigateTo({
					url: '../../msg/msg'
				})
			},
			//分类切换显示
			showCategory(index) {
				this.showCategoryIndex = index;
			},
			toCategory(e) {
				uni.setStorageSync('catName', e.name);
				uni.navigateTo({
					url: '../../goods/goods-list/goods-list?cid=' + e.id + '&name=' + e.name
				});
			},
			//搜索跳转
			toSearch() {
				uni.showToast({
					title: "建议跳转到新页面做搜索功能"
				});
			},
			/**
			 * 跳转注册页面
			 */
			fnRegisterWin() {
				uni.navigateTo({
					url: "/pages/login/register"
				})
				/**
				 * 改变状态重置，跳转不会摧毁实例
				 */
				this.fnChangeStatus(true);
			},
			getSonValue(res) {
				this.Title = res;
			},
			itemlink(){
				 this.$refs.popup.open()
			},
			goto() {
				uni.navigateBack()
			},
			 stepper3(e) {
			                console.log(e);
			            }
		}
	}
</script>
<style lang="scss">
	.header {
		width: 100%;
		height: 45px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.header-left,
	.header-right {
		padding: 5px 10px;
		font-size: 20px;
	}

	.header-left {}

	.header-center {
		font-weight: bold;
		font-size: 18px;
	}

	.page {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background-image: linear-gradient(to right, #202044, #0c0828);
	}

	/deep/.demo-popup {
		.s-popup-wrap {
			top: 45px;
		}
	}

	.category-list {
		width: 100%;
		background-color: #fff;
		display: flex;

		.left,
		.right {
			position: absolute;
			top: 0upx;
			/*  #ifdef  APP-PLUS  */
			top: calc(100upx + var(--status-bar-height));
			/*  #endif  */
			bottom: 0upx;
		}

		.left {
			width: 24%;
			left: 0upx;

			.row {
				width: 100%;
				height: 90upx;
				border-radius: 10px;
				display: flex;
				margin-bottom: 2.5px;
				align-items: center;
				background-color: #6B6D7F;

				.text {
					width: 100%;
					position: relative;
					font-size: 28upx;
					display: flex;
					justify-content: center;
					color: #fff;

					.block {
						position: absolute;
						width: 0upx;
						left: 0;
					}
				}

				&.on {
					height: 100upx;
					background-image: linear-gradient(to right, #510686, #0331af);
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
			width: 76%;
			left: 24%;

			.category {
				width: 94%;
				padding: 0upx 3%;

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
							width: 60%;
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
