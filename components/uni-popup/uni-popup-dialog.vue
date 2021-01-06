<template>
	<view class="uni-popup-dialog">
		<view class="uni-dialog-title">
			<text class="uni-dialog-title-text" :class="['uni-popup__'+dialogType]">第{{title}}期</text>
		</view>
		<view class="uni-dialog-content">
			<view class="uni-dialog-content-new" v-if="list.length > 0">
				<view class="uni-dialog-content-title">投注若单挑注单,单挑注单盈利上限为3万元,是否继续投注?</view>
				<view class="uni-dialog-kuang">
					<view class="uni-dialog-neikuang" v-for="(item,index) in list" :key="index">
						<view class="uni-dialog-content-buttom flex-justify-content-center">
							<!-- <view class="uni-dialog-content-buttom-fen">分</view> -->
							<view>
								<view class="uni-dialog-content-buttom-type">
									<span class="uni-dialog-content-buttom-type-span">[{{item.type}}]</span>{{item.Colorseed}}  模式 : {{item.moShi}} 
								</view>
								<view class="uni-dialog-content-buttom-type">
									<span style="color: #009800;">{{item.content}}</span>
								</view>
							</view>
							<!-- <view class="uni-dialog-content-buttom-type-color">{{list.money}}</view> -->
						</view>
						<view class="uni-dialog-content-buttom flex-justify-content-space-around">
							<view>{{item.zhushu}}注*{{item.multiple}}倍*{{item.moneyUnit}}  </view>
							<span class="uni-dialog-content-buttom-type-span">  合计{{item.amt}}元</span>
						</view>
						<hr style="border-top:#999999;margin: 10upx auto;">
					</view>
				</view>
			</view>
			<text class="uni-dialog-content-text" v-if="mode === 'base'">{{content}}</text>
			<input v-else class="uni-dialog-input" v-model="val" type="text" :placeholder="placeholder" :focus="focus" >
			
		</view>
		<view class="uni-dialog-button-group">
			<view class="uni-dialog-button" @click="close" v-if="cancel== 'true' ">
				<text class="uni-dialog-button-text">取消</text>
			</view>
			<view class="uni-dialog-button uni-border-left" @click="onOk">
				<text class="uni-dialog-button-text uni-button-color">确定</text>
			</view>
		</view>

	</view>
</template>

<script>
	/**
	 * PopUp 弹出层-对话框样式
	 * @description 弹出层-对话框样式
	 * @tutorial https://ext.dcloud.net.cn/plugin?id=329
	 * @property {String} value input 模式下的默认值
	 * @property {String} placeholder input 模式下输入提示
	 * @property {String} type = [success|warning|info|error] 主题样式
	 *  @value success 成功
	 * 	@value warning 提示
	 * 	@value info 消息
	 * 	@value error 错误
	 * @property {String} mode = [base|input] 模式、
	 * 	@value base 基础对话框
	 * 	@value input 可输入对话框
	 * @property {String} content 对话框内容
	 * @property {Boolean} beforeClose 是否拦截取消事件
	 * @event {Function} confirm 点击确认按钮触发
	 * @event {Function} close 点击取消按钮触发
	 */

	export default {
		name: "uniPopupDialog",
		props: {
			value: {
				type: [String, Number],
				default: ''
			},
			placeholder: {
				type: [String, Number],
				default: '请输入内容'
			},
			/**
			 * 对话框主题 success/warning/info/error	  默认 success
			 */
			type: {
				type: String,
				default: 'error'
			},
			/**
			 * 对话框模式 base/input
			 */
			mode: {
				type: String,
				default: 'base'
			},
			/**
			 * 对话框标题
			 */
			title: {
				type: Number,
				default: '000'
			},
			/**
			 * 显示取消按钮
			 */
			cancel: {
				type: String,
				default: 'true'
			},
			/**
			 * 对话框内容
			 */
			content: {
				type: String,
				default: ''
			},
			/**
			 * 拦截取消事件 ，如果拦截取消事件，必须监听close事件，执行 done()
			 */
			beforeClose: {
				type: Boolean,
				default: false
			},
			/**
			 * 
			 */
			list: {}
		},
		data() {
			return {
				dialogType: 'error',
				focus: false,
				val: "",
			}
		},
		inject: ['popup'],
		watch: {
			type(val) {
				this.dialogType = val
			},
			mode(val) {
				if (val === 'input') {
					this.dialogType = 'info'
				}
			},
			value(val) {
				this.val = val
			}
		},
		created() {
			// 对话框遮罩不可点击
			this.popup.mkclick = true
			if (this.mode === 'input') {
				this.dialogType = 'info'
				this.val = this.value
			} else {
				this.dialogType = this.type
			}
		},
		mounted() {
			this.focus = true
		},
		methods: {
			/**
			 * 点击确认按钮
			 */
			onOk() {
				this.$emit('confirm', () => {
					this.popup.close()
					if (this.mode === 'input') this.val = this.value
				}, this.mode === 'input' ? this.val : '')
			},
			/**
			 * 点击取消按钮
			 */
			close() {
				if (this.beforeClose) {
					this.$emit('close', () => {
						this.popup.close()
					})
					return
				}
				this.popup.close()
			}
		}
	}
</script>

<style lang="scss" scoped>
	.uni-popup-dialog {
		width: 600upx;
		border-radius: 20upx;
		background-color: #fff;
	}

	.uni-dialog-title {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		justify-content: center;
		padding-top: 25upx;
		padding-bottom: 15upx;
	}

	.uni-dialog-title-text {
		font-size: 26upx;
		font-weight: bold;
		color: #000;
	}

	.uni-dialog-content {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		justify-content: center;
		align-items: center;
		padding: 15upx 25upx 25upx 25upx;
	}

	.uni-dialog-content-text {
		font-size: 24upx;
		color: #6e6e6e;
	}

	.uni-dialog-button-group {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		border-top-color: #f5f5f5;
		border-top-style: solid;
		border-top-width: 1px;
	}

	.uni-dialog-button {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */

		flex: 1;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		height: 75upx;
	}

	.uni-border-left {
		border-left-color: #f0f0f0;
		border-left-style: solid;
		border-left-width: 1px;
	}

	.uni-dialog-button-text {
		font-size: 34upx;
	}

	.uni-button-color {
		color: $uni-color-primary;
	}

	.uni-dialog-input {
		flex: 1;
		font-size: 24upx;
	}

	.uni-popup__success {
		color: $uni-color-success;
	}

	.uni-popup__warn {
		color: $uni-color-warning;
	}

	.uni-popup__error {
		color: $uni-color-error;
	}

	.uni-popup__info {
		color: #909399;
	}
	.uni-dialog-content-new{
		width: 100%;
	}
	.uni-dialog-content-title{
		width: 100%;
		color: red;
	}
	
	.uni-dialog-content-buttom{
		display: flex;
	}
	.uni-dialog-content-buttom-type{
		width: 500upx;
		padding:0 20upx;
		word-wrap: break-word;
		word-break: normal;
	}
	.uni-dialog-content-buttom-type-span{
		margin-right: 20upx;
		color: #ff0000;
	}
	.uni-dialog-content-buttom-type-color{
		color: #aaaaff;
		font-weight: bold;
	}
	
	.uni-dialog-kuang{
		width: 100%;
		height: 200upx;
		overflow-y: scroll;
		box-shadow: 0 0 5upx 3upx #ccc;
	}
	.uni-dialog-neikuang{
	}
</style>
