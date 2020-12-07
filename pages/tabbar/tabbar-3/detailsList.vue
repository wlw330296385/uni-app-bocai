<template>
	<view>
		<view class="selection">
			<view class="selection-top">
				<view class="selection-top-title">日期:
					<view class="selection-top-span" 
					:class="clickonoff == index?'selection-top-color':''" 
					v-for="(item,index) in list"
					 :key="index" @click="clickindex(index)">{{item}}</view>
				</view>
			</view>
			<view class="selection-bottom">
				<view class="selection-bottom-left">彩种:
					<picker class="item-picker" mode="multiSelector" range-key="name" @change="classifyChange" @columnchange="columnchange"
					 :value="classifyIndex" :range="classifyArr">
						<view>{{ name }}</view>
					</picker>
				</view>
			</view>
		</view>

		<view>
			<view class="Box1-list">
				<view class="Box1-list-1">
					<h2 class="history-code-item item-flex">
						<view class="Box1-p Box1-p-color">腾讯分分彩</view>
						<!-- <view class="Box1-p">玩法:后二直选</view> -->
						<view class="Box1-p Box1-p-details" @click="goto">详情</view>
					</h2>
					<view class="history-code-item item-flex">
						<view class="Box1-p Box1-center">投注金额:0.0180</view>
						<view class="Box1-p Box1-center">奖金:0.0000</view>
					</view>
					<view class="hr"></view>
					<view class="history-code-item item-flex">
						<view class="Box1-p">期号:0.0180</view>
						<view class="Box1-p">状态:未中奖</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		components: {},
		data() {
			return {
				clickonoff: 0,
				list: ['今日', '近三天', '近七天', '近半月'],
				dataSource: [{
						id: 1,
						name: '星期一',
						child: [{
								id: 2,
								name: '星期一晴天'
							},
							{
								id: 3,
								name: '星期一雨天'
							},
						],
					},
					{
						id: 4,
						name: '星期二',
						child: [{
								id: 5,
								name: '星期二暴雨'
							},
							{
								id: 6,
								name: '星期二转晴'
							},
							{
								id: 7,
								name: '星期二冰雹'
							},
						],
					},
					{
						id: 8,
						name: '星期三',
						child: []
					},
					{
						id: 9,
						name: '星期四',
						child: [{
							id: 10,
							name: '星期四大太阳'
						}]
					},
					{
						id: 11,
						name: '星期五',
						child: [{
								id: 12,
								name: '星期五快了'
							},
							{
								id: 13,
								name: '星期五又下雨'
							}
						]
					},
				],

				name: '请选择彩种',

				classifyArr: [
					[],
					[]
				],
				// picker - 数据源
				classifyIndex: [0, 0], // picker - 索引

				childArr: [], // 二级分类数据源
			};
		},
		onLoad: function(options) {
			// 获取数据源并分出一级二级分类
			this.getAllClassify()
		},
		methods: {
			goto() {
				uni.navigateTo({
					url: '/pages/tabbar/tabbar-3/prizeDetails'
				});
			},
			clickindex(index) {
				for (let i = 0; i < this.list.length; i++) {
					if (index == i) {
						this.clickonoff = index;
					}
				}
			},
			// 获取数据源并分出一级二级
			getAllClassify() {
				let dataLen = this.dataSource.length;

				for (let i = 0; i < dataLen; i++) {
					// 将数据源中的二级分类 push 进 childArr，作为二级分类的数据源
					this.childArr.push(this.dataSource[i].child)
				};

				// 一级分类的数据源
				this.classifyArr[0] = this.dataSource;

				// 第一次打开时，默认给一级分类添加它的二级分类
				this.classifyArr[1] = this.childArr[0]
			},

			// 选择商品分类
			classifyChange(e) {
				let value = e.target.value;
				this.classifyIndex = value;

				if (this.classifyArr[0].length != 0) {
					this.name = this.classifyArr[0][this.classifyIndex[0]].name
				};

				if (this.classifyArr[1].length != 0) {
					this.name += ',' + this.classifyArr[1][this.classifyIndex[1]].name
				}
			},

			// 获取二级分类
			columnchange(e) {
				// 当滚动切换一级分类时，为当前的一级分类添加它的子类
				if (e.detail.column == 0) {
					// #ifdef H5
					// 在小程序中直接赋值无效  H5 可直接赋值
					this.classifyArr[1] = this.childArr[e.detail.value]
					// #endif

					// #ifdef MP-WEIXIN
					// 在 H5 环境下 $set 会导致一级分类无法滚动， 小程序正常运行
					this.$set(this.classifyArr, 1, this.childArr[e.detail.value])
					// #endif
				}
			}
		}
	}
</script>

<style lang="scss">
	.history-code-item {
		min-height: 30px;
		font-size: 12px;
		font-weight: 500;
		color: #97a6c5;
		height: 30px;
		line-height: 30px;
		padding: 0 5px;
		display: flex;
		align-items: center;
	}

	.item-flex1 {
		justify-content: space-evenly;
	}

	.item-flex {
		justify-content: space-between;
	}

	.Box1-list {
		margin: 0 auto;
		width: 100%;
	}

	.Box1-list-1 {
		width: 95%;
		padding: 5px 0;
		margin: 10px auto;
		background-color: #fff;
		box-shadow: 1px 1px 10px #cccccc;
	}

	.Box1-center {
		width: 45%;
	}

	.hr {
		width: 90%;
		margin: 0 auto;
		height: 1px;
		background-color: #e5e5e5;
	}

	.Box1-buttom {
		width: 100%;
		padding: 10px 5px;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		box-shadow: 0 20px 60px #cccccc;
	}

	.Box1-buttom-1 {
		border: 1px solid #aa00ff;
		color: #aa00ff;
		border-radius: 5px;
		padding: 0 10px;
	}

	.Box1-p {
		margin: 0 5px;
	}

	.Box1-p-color {
		color: #5500ff;
	}

	.Box1-p-details {
		width: 40px;
		height: 18px;
		text-align: center;
		border-radius: 5px;
		line-height: 30upx;
		background-color: #dce7e4;
	}

	.selection-top {
		padding: 5px;
	}

	.selection-top-title {
		border-left: 4px solid #007AFF;
		padding: 0 10px;
		display: flex;
		justify-content: space-between;
	}

	.selection-top-span {
		width: 18%;
		height: 25px;
		border-radius: 10px;
		display: block;
		text-align: center;
	}

	.selection-top-color {
		background-color: #ffaaff;
		color: #fff;
	}

	.selection-bottom {
		margin: 0 auto;
		width: 95%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.selection-bottom-left {
		display: flex;
	}

	.content {
		.content-box {
			padding: 23upx 20upx 0 20upx;

			.box {
				padding: 25upx;
				background: rgba(255, 255, 255, 1);
				border-radius: 25upx;
				box-shadow: 0 5upx 16upx 0 rgba(20, 104, 255, 0.07);

				.box-item {
					margin-top: 25upx;
					position: relative;

					.item-picker {
						width: 100%;
						margin-top: 10upx;
						height: 60upx !important;
						border-bottom: 2upx solid #EDEDED;
					}
				}
			}
		}
	}
</style>
