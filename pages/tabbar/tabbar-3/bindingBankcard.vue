<template>
	<view>
		<view class="team-user-settings">
			<view class="team-user-content">
				<h2 class="user-register-title">验证提款密码</h2>
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

			};
		}
	}
</script>

<style lang="scss">
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
