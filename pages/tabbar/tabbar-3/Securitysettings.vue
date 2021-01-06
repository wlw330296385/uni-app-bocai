<template>
	<view>
		<view class="input-list" v-if="0">
			<view class="title">手机号:</view>
			<input class="uni-input" type="number" placeholder="18377572500" disabled="true"/>
		</view>
		<view v-if="1">
			<view class="input-list">
			<input class="uni-input" v-model="formdata.tel" type="number" placeholder="请输入手机号" />
			<view class="title buttom-yzm" @click="yzmclick">验证码</view>
			</view>
			<view class="input-list input-list-1">
				<view class="title">请输入验证码</view>
				<input class="uni-input"  v-model="formdata.yzm" type="number" placeholder="请输入验证码" />
			</view>
			<view class="bd-click">绑定</view>
		</view>
		<hr class="hr">
		
		
		<view class="input-list">
			<view class="title">手机号:</view>
			<input class="uni-input" type="number" placeholder="******" v-if="1"/>
			<input class="uni-input" type="number" placeholder="18377572500" disabled="true" v-if="0"/>
		</view>
		<view class="input-list">
			<view class="title">提现密码:</view>
			<input class="uni-input" type="number" placeholder="******" v-if="1"/>
			<input class="uni-input" type="number" placeholder="18377572500" disabled="true" v-if="0"/>
		</view>
		<view v-if="0">
			<view class="bd-click">立即设定</view>
		</view>
		
		
		
		
		
		
		
		<view class="team-user-settings">
			<view class="team-user-content">
				<h2 class="user-register-title">手机号:</h2>
			</view>
			<view class="user-register-cont">
				<view class="register-list">
					<label class="list-left" for="">手机号：</label>
					<view class="list-right">
						<input class="input" type="text">
					</view>
				</view>
				<view class="register-list">
					 <button class="buttom" type="warn">提交</button>
					 <button class="buttom" type="primary" plain="true">重置</button>
				</view>
			</view>
		</view>
		<view v-if="0">
			<view class="bd-click">立即设定</view>
		</view>
		<view class="team-user-settings">
			<view class="team-user-content">
				<h2 class="user-register-title">提现密码</h2>
			</view>
			<view class="user-register-cont">
				<view class="register-list">
					<label class="list-left" for="">提款密码：</label>
					<view class="list-right">
						<input class="input" type="text">
					</view>
				</view>
				<view class="register-list">
					 <button class="buttom" type="warn">提交</button>
					 <button class="buttom" type="primary" plain="true">重置</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				formdata:{
					tel:'',
					yzm:''
				}
			}
		},
		methods: {
			bdsjhget(){
				this.$myRequest.get(
					'/user-info/v1/bindTel', 
					{
							tel: this.formdata.tel,
							userName: 'root',
							verCode: this.formdata.yzm
					},
					{
					success: (res) => {
							if(res.data.code == 200){
							
							}else{
								
								uni.showToast({
									title:res.data.message,
									icon:"none"
								})
							}
						}
					}
				)
			},
			yzmclick(){
				this.$myRequest.get(
					'/user-info/v1/sendTextMessage', 
					{
							tel: this.formdata.tel,
					},
					{
					success: (res) => {
							if(res.data.code == 200){
							
							}else{
								
								uni.showToast({
									title:res.data.message,
									icon:"none"
								})
							}
						}
					}
				)
			}
		}
	}
</script>

<style lang="scss">
	.input-list{
		display: flex;
		width: 70%;
		margin: 0 auto;
		margin-top: 100upx;
	}
	.title{
		padding: 0 12px;
	}
	.uni-input{
		border: 1px solid #999;
		padding: 0;
	}
	.buttom-yzm{
		margin: 0 10upx;
		border-radius: 20upx;
		background-color: #ffaa7f;
		color: #fff;
	}
	.input-list-1{
		margin-top: 10upx;
	}
	.bd-click{
		width: 50%;
		height: 70upx;
		line-height: 70upx;
		background-color: #ffaa7f;
		margin: 20upx auto;
		text-align: center;
		color: #fff;
		border-radius: 20upx;
	}
	.hr{
		width: 90%;
		margin: 0 auto;
		border-top: 1px solid #ccc;
	}
	
		.team-user-settings {
			padding-top: .57rem;
			padding-bottom: 3.5rem;
	
			.team-user-content {
				width: 94%;
				box-sizing: border-box;
				margin: 0 3% 1rem;
	
				.user-register-title {
					font-size: 1rem;
					color: #333;
					position: relative;
					padding-left: .79rem;
					margin: 1rem 0;
					height: 1.43rem;
					line-height: 1.43rem;
				}
				.user-register-title:before{
					position: absolute;
					    content: "";
					    width: .36rem;
					    height: 100%;
					    background-color: #7a5ffb;
					    left: 0;
					    top: 0;
					    border-radius: .29rem;
				}
			}
			.user-register-cont{
				background: #fff;
				    box-shadow: 0 2px 6px rgba(77,119,152,.1);
				    border-radius: .57rem;
					padding: 1.79rem 1.6rem;
					.register-list{
						margin-bottom: 1.07rem;
						    display: flex;
						    justify-content: center;
							.list-left{
								font-size: .86rem;
								    color: #333;
								    text-align: right;
							}
							.list-right{
								    float: right;
								    flex: 1;
								    position: relative;
								    color: #666;
									.input{
										    width: 100%;
										    height: 2.14rem;
										    color: #3b476a;
										    border: 1px solid #dadee6;
										    border-radius: 4px;
										    padding: 0 10px;
										    box-sizing: border-box;
									}
							}
							.buttom{
								height: 70upx;
								line-height: 70upx;
								width: 30%;
							}
					}
			}
		}
</style>
