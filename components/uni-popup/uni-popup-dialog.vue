<template>
	<view class="uni-popup-dialog">
		<view class="uni-dialog-title">
			<text class="uni-dialog-title-text" :class="['uni-popup__'+dialogType]">{{title}}</text>
		</view>
		<view class="uni-dialog-content">
			<view class="uni-dialog-content-new" v-if="list">
				<view class="uni-dialog-content-title">{{list.title}}</view>
				<view class="uni-dialog-content-buttom">
					<view class="uni-dialog-content-buttom-fen">分</view>
					<view>
						<view class="uni-dialog-content-buttom-type"><span class="uni-dialog-content-buttom-type-span">{{list.type}}</span>{{list.Colorseed}}</view>
					<view class="uni-dialog-content-buttom-type">号码:{{list.number}}</view>
					</view>
					<view class="uni-dialog-content-buttom-type-color">{{list.money}}</view>
				</view>
				<hr style="border-top:#999999;margin: 10upx auto;">
				<view class="uni-dialog-content-bottom">
					<view>{{list.zhushu}}注*{{list.beishu}}倍*{{list.moneyUnit}}--模式:{{list.jiangjinmoshi}} <span class="uni-dialog-content-buttom-type-span">合计{{list.money}}</span></view>
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
				type: String,
				default: '提示'
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
		justify-content: left;
	}
	.uni-dialog-content-buttom-fen{
		width: 60upx;
		height: 60upx;
		border-radius: 50%;
		text-align: center;
		color: #fff;
		line-height: 60upx;
		background-color: #aaaaff;
	}
	.uni-dialog-content-buttom-type{
		padding:0 20upx;
	}
	.uni-dialog-content-buttom-type-span{
		padding-right: 20upx;
		color: #aaaaff;
	}
	.uni-dialog-content-buttom-type-color{
		color: #aaaaff;
		font-weight: bold;
	}
</style>
