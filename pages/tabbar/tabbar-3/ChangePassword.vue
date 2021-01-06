<template>
	<view class="zai-box">
		<view class="zai-form">
			<input class="zai-input" v-model="jiupwd" placeholder="请输入旧密码" />
			<input class="zai-input" v-model="pwd"  password placeholder="请输入密码"/>
			<input class="zai-input" v-model="pwds"  password placeholder="请再输入一次密码"/>
			<button class="zai-btn" @click="lijixiugai">立即修改</button>
		</view>
		<uni-popup ref="popup" type="dialog">
			<uni-popup-dialog type="info" mode="base" message="成功消息" title="确定修改?" 
			:duration="2000" :before-close="true" @close="close" :list="[]"
			 @confirm="confirm">
			 </uni-popup-dialog>
		</uni-popup>
	</view>
</template>

<script>
	import uniPopupDialog from '@/components/uni-popup/uni-popup-dialog.vue';
	export default {
		components: {
			uniPopupDialog,
		},
		data(){
			return{
				pwd:'',
				pwds:'',
				jiupwd:'',
			}
		},
		methods:{
			lijixiugai(){
				if(this.jiupwd == ''){
					uni.showToast({
						title:'请输入旧密码'
					})
					return
				}
				if(this.pwd == ''){
					uni.showToast({
						title:'请输入密码'
					})
					return
				}
				if(this.pwds == ''){
					uni.showToast({
						title:'请再次输入密码'
					})
					return
				}
				if(this.pwd !== this.pwds){
					uni.showToast({
						title:'两次输入的密码不一致'
					})
					return
				}
					this.$refs.popup.open()
			},
			// 立即投注
			close(done) {
				
				// TODO 做一些其他的事情，before-close 为true的情况下，手动执行 done 才会关闭对话框
				// ...
				done()
			},
			confirm(done, value) {
				this.$myRequest.post(
					'/user-info/v1/ckpwd', 
					{
							userName: getApp().globalData.userInfo.userName,
							pwdType: 0,
							pwd:this.pwd
					},
					{
					success: (res) => {
							if(res.data.code == 200){
								console.log(111111)
							}else{
								
									uni.showToast({
										title:res.data.message,
										icon:"none"
									})
							}
						}
					}
				)
				// TODO 做一些其他的事情，手动执行 done 才会关闭对话框
				// ...
				done()
			},
		}
		}
</script>

<style>
	body,html{
		padding: 0;margin: 0;height: 0!important;
	}
	.zai-box{
		padding: 0 100upx;
	}
	.zai-logo{
		width: 100%;
		height: 310upx;
	}
	.zai-form{
		margin-top: 300upx;
	}
	.zai-input{
		background: #e2f5fc;
		margin-top: 30upx;
		border-radius: 100upx;
		padding: 20upx 40upx;
		font-size: 36upx;
	}
	.input-placeholder, .zai-input{
		color: #94afce;
	}
	.zai-label{
		padding: 60upx 0;
		text-align: center;
		font-size: 30upx;
		color: #a7b6d0;
	}
	.zai-btn{
		background: #ff65a3;
		color: #fff;
		border: 0;
		border-radius: 100upx;
		font-size: 36upx;
		margin-top: 60upx;
	}
	.zai-btn:after{
		border: 0;
	}
	/*按钮点击效果*/
	.zai-btn.button-hover{
		transform: translate(1upx, 1upx);
	}
</style>

