<template>
	<view class="content">
		<view class="page-body">
			<view class="user-list">
				<myHead :title = "title"></myHead>
				<view class="c-flex">
					<view class="avatar"></view>
					<view class="userInfo">
						<p class="user-p">用户昵称：<span>{{userInfo.nickName}}</span></p>
						<p class="yu-e">余额
							<span class="number" v-if="onoff">￥{{balanceInfo.balance}}</span>
							<span class="number" v-if="!onoff">￥*******</span>
							<span class="refresh" v-if="onoff" @click="getBalance()" >1</span>
							<span :class="onoff===true ? 'eys2' : 'eys1'" @click="onoffclick">12</span>
						</p>
					</view>
				</view>
			</view>
			<view class="btn-area">
				<navigator class="botton-flex" url="/pages/tabbar/tabbar-3/Immediatewithdrawal">
					<view class="btn-area-img">
						<image mode="scaleToFill" style="width: 100upx; height: 100upx;" src="@/static/yinhangka.png" alt=""></image>
					</view>
					<view>立即提现</view>
				</navigator>
				<navigator @click="clickdialog" class="botton-flex" url="/#">
					<view class="btn-area-img">
						<image mode="scaleToFill" style="width: 100upx; height: 100upx;" src="@/static/qianbao.png" alt=""></image>
					</view>
					<view>立即充值</view>
				</navigator>
				<navigator class="botton-flex" url="/pages/tabbar/tabbar-3/accountRecord">
					<view class="btn-area-img">
						<image mode="scaleToFill" style="width: 100upx; height: 100upx;" src="@/static/jilu.png" alt=""></image>
					</view>
					<view>结算日报</view>
				</navigator>
			</view>

			<view class="report_xc">
				<ul>
					<li>
						<navigator class="report_xc_flex" url="/pages/tabbar/tabbar-3/lotteryReport">
							<span class="report_xc-span">
								<image mode="scaleToFill" style="width: 50upx; height: 50upx;" class="report_sc-img" src="@/static/lottery.png"
								 alt=""></image>
									个人报表
							</span>
							<span class="icon_gt">></span>
						</navigator>
					</li>
					<li  class="">
						<navigator class="report_xc_flex" url="/pages/tabbar/tabbar-3/withdraw">
						<span class="report_xc-span">
							<image mode="scaleToFill" style="width: 50upx; height: 50upx;" class="report_sc-img" src="@/static/bank_card.png"
							 alt=""></image>
								提现记录
						</span>
						<span class="icon_gt">></span>
						</navigator>
					</li>
					<li>
						<navigator class="report_xc_flex" url="/pages/tabbar/tabbar-3/humanSports">
						<span class="report_xc-span">
							<image mode="scaleToFill" style="width: 50upx; height: 50upx;" class="report_sc-img" src="@/static/crown.png"
							 alt=""></image>
								真人电子体育
						</span>
						<span class="icon_gt">></span>
						</navigator>
					</li>
					<li @click="clickdialog" class="report_xc_flex">
						<!-- <navigator class="report_xc_flex" url="/pages/tabbar/tabbar-3/detailsList"> -->
						<span class="report_xc-span">
							<image mode="scaleToFill" style="width: 50upx; height: 50upx;" class="report_sc-img" src="@/static/zhuanzhang.png"
							 alt=""></image>
								第三方转账
						</span>
						<span class="icon_gt">></span>
						<!-- </navigator> -->
					</li>
				</ul>
				<ul>
					<li>
						<navigator class="report_xc_flex" url="/pages/tabbar/tabbar-3/teamIndex">
						<span class="report_xc-span">
							<image mode="scaleToFill" style="width: 50upx; height: 50upx;" class="report_sc-img" src="@/static/team.png"
							 alt=""></image>
								代理管理/团队日报
						</span>
						<span class="icon_gt">></span>
						</navigator>
					</li>
					<li>
						<navigator class="report_xc_flex" url="/pages/tabbar/tabbar-3/promotion">
						<span class="report_xc-span">
							<image mode="scaleToFill" style="width: 50upx; height: 50upx;" class="report_sc-img" src="@/static/share.png"
							 alt=""></image>
								注册推广
						</span>
						<span class="icon_gt">></span>
						</navigator>
					</li>
				</ul>
				<ul>
					<li>
						<navigator class="report_xc_flex" url="/pages/tabbar/tabbar-3/ChangePassword">
						<span class="report_xc-span">
							<image mode="scaleToFill" style="width: 50upx; height: 50upx;" class="report_sc-img" src="@/static/password.png"
							 alt=""></image>
								密码修改
						</span>
						<span class="icon_gt">></span>
						</navigator>
					</li>
					<li  class="">
						<navigator class="report_xc_flex" url="/pages/tabbar/tabbar-3/bankcard">
						<span class="report_xc-span">
							<image mode="scaleToFill" style="width: 50upx; height: 50upx;" class="report_sc-img" src="@/static/bank_card.png"
							 alt=""></image>
								银行卡管理
						</span>
						<span class="icon_gt">></span>
						</navigator>
					</li>
					<li>
						<navigator class="report_xc_flex" url="/pages/tabbar/tabbar-3/Securitysettings">
						<span class="report_xc-span">
							<image mode="scaleToFill" style="width: 50upx; height: 50upx;" class="report_sc-img" src="@/static/secret.png"
							 alt=""></image>
								密保设定
						</span>
						<span class="icon_gt">></span>
						</navigator>
					</li>
					<li @click="clickdialog" class="report_xc_flex">
						<!-- <navigator class="report_xc_flex" url="/pages/tabbar/tabbar-3/detailsList"> -->
						<span class="report_xc-span">
							<image mode="scaleToFill" style="width: 50upx; height: 50upx;" class="report_sc-img" src="@/static/BagOfMoney.png"
							 alt=""></image>
								数字钱包
						</span>
						<span class="icon_gt">></span>
						<!-- </navigator> -->
					</li>
					<li>
						<navigator class="report_xc_flex" url="/pages/tabbar/tabbar-3/sysMessage">
						<span class="report_xc-span">
							<image mode="scaleToFill" style="width: 50upx; height: 50upx;" class="report_sc-img" src="@/static/notice.png"
							 alt=""></image>
								公告
						</span>
						<span class="icon_gt">></span>
						</navigator>
					</li>
					<li>
						<navigator class="report_xc_flex" url="/pages/tabbar/tabbar-3/colorInformation">
						<span class="report_xc-span">
							<image mode="scaleToFill" style="width: 50upx; height: 50upx;" class="report_sc-img" src="@/static/info.png"
							 alt=""></image>
								彩种信息
						</span>
						<span class="icon_gt">></span>
						</navigator>
					</li>
					<li>
						<navigator class="report_xc_flex" url="/pages/tabbar/tabbar-3/IntroductionGame">
						<span class="report_xc-span">
							<image mode="scaleToFill" style="width: 50upx; height: 50upx;" class="report_sc-img" src="@/static/rule.png"
							 alt=""></image>
								玩法介绍
						</span>
						<span class="icon_gt">></span>
						</navigator>
					</li>
					<li>
						<navigator class="report_xc_flex" url="/pages/tabbar/tabbar-3/commonProblem">
						<span class="report_xc-span">
							<image mode="scaleToFill" style="width: 50upx; height: 50upx;" class="report_sc-img" src="@/static/question.png"
							 alt=""></image>
								常见问题
						</span>
						<span class="icon_gt">></span>
						</navigator>
					</li>
				</ul>
				<ul>
					<li @click="clickdialog1" class="report_xc_flex">
						<span class="report_xc-span">
							<image mode="scaleToFill" style="width: 50upx; height: 50upx;" class="report_sc-img" src="@/static/log-out.png"
							 alt=""></image>
								退出登录
						</span>
						<span class="icon_gt">></span>
					</li>
				</ul>

			</view>
			<uni-popup ref="popup" type="dialog">
				<uni-popup-dialog type="input" mode="base" message="成功消息" title="提示" 
				content="正在开发,敬请期待" cancel="false" :duration="2000" :list="[]"
				 :before-close="true" @close="close" @confirm="confirm"></uni-popup-dialog>
			</uni-popup>
			<uni-popup ref="popup1" type="dialog">
				<uni-popup-dialog type="input" mode="base" message="成功消息" title="提示" content="确认退出?"
				 cancel="false" :duration="2000" :list="[]"
				 :before-close="true" @close="close1" @confirm="confirm1"></uni-popup-dialog>
			</uni-popup>
		</view>
	</view>
</template>

<script>
	import uniPopupDialog from '@/components/uni-popup/uni-popup-dialog.vue'
	import myHead from "@/components/myHead/my-head.vue";
	export default {
		components: {
			uniPopupDialog,
			myHead
		},
		data() {
			return {
				title: "我的",
				onoff: false,
				userInfo:{},
				balanceInfo : {}
			}
		},
		onLoad() {
			this.balanceInfo = getApp().globalData.balanceInfo;
			this.userInfo = getApp().globalData.userInfo;
			this.getBalance();
		},
		methods: {
			getUserinfo(){
				try {
				    const value = uni.getStorageSync('userInfo');
				    if (value) {
						getApp().globalData.userInfo = value;
				    }
				} catch (e) {
				    // error
				}
			},
			getBalance () {
				this.$myRequest.get("/user-wallet/v1", {userName: getApp().globalData.userInfo.userName},
					{
						success:(res) => {
							this.balanceInfo = res.data.data;
							getApp().globalData.balanceInfo = res.data.data;
						}
					}
				);
			},
			onoffclick() {
				this.onoff = !this.onoff
			},
			onNavigationBarButtonTap(val) {
				
			},
			// 弹窗
			clickdialog() {
				this.$refs.popup.open()
			},
			close(done) {
				// TODO 做一些其他的事情，before-close 为true的情况下，手动执行 done 才会关闭对话框
				// ...
				done()
			},
			confirm(done, value) {
				// 输入框的值
				console.log(value)
				// TODO 做一些其他的事情，手动执行 done 才会关闭对话框
				// ...
				done()
			},
			// 退出登录
			clickdialog1(){
				this.$refs.popup1.open()
			},
			close1(done) {
				// TODO 做一些其他的事情，before-close 为true的情况下，手动执行 done 才会关闭对话框
				// ...
				done()
			},
			confirm1(done, value) {
				this.$myRequest.get(
					'/user-info/v1/logout', 
					{
							userName: this.userInfo.userName
					},
					{
					success: (res) => {
							if(res.data.code == 200){
								uni.navigateTo({
									url:"/pages/login/login"
								})
							}else{
								uni.showToast({
									title:res.data.message,
									icon:"none"
								})
							}
						}
					}
				)
				// 输入框的值
				console.log(value)
				// TODO 做一些其他的事情，手动执行 done 才会关闭对话框
				// ...
				done()
			},
		}
	}
</script>

<style>
	.content {
		background-color: #f9f9fe;
		height: 1200upx;
	}

	.btn-area {
		display: flex;
		margin-left: 3%;
		background: #fff;
		bottom: -1.5rem;
		border-radius: .57rem;
		width: 100%;
		box-shadow: 0 0.14rem 0.43rem rgba(77, 119, 152, .1);
	}

	.botton-flex {
		position: relative;
		height: 2.86rem;
		color: #666;
		font-size: .86rem;
		font-weight: 700;
		text-align: center;
		flex: 1;
	}

	.user-list {
		width: 93%;
		margin: 0 auto;
		position: relative;
		padding: 5upx 0 5upx;
		background-color: #fff;
		box-shadow: 0 0.14rem 0.43rem rgba(77, 119, 152, .1);
	}

	.c-flex {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.avatar {
		width: 3.79rem;
		height: 3.79rem;
		padding: 0 .85rem 0 1rem;
		background: url(../../../static/img/QQ20201126162211.jpg) no-repeat 50%;
		background-size: contain;
	}

	.userInfo {
		flex: 1;
		font-size: 1rem;
	}

	.user-p {
		font-size: .92rem;
		color: #867e9c;
	}

	.yu-e {
		line-height: 1.8;
		font-size: .92rem;
		color: #867e9c;
	}

	.number {
		font-size: 1rem;
		font-weight: 550;
		color: #cf00b0;
	}

	.refresh {
		padding-left: 1rem;
		background: url(../../../static/img/shuaxin.png) no-repeat;
		background-position: 3px 3px;
		background-size: 70% 70%;
		color: rgba(255, 255, 255, 0)
	}

	.report_xc {
		padding-top: 10upx;
		padding-bottom: 5rem;
		background: #f9f9fe;
		width: 100%;
		margin: 0 auto;
	}

	.report_xc ul {
		width: 93%;
		border-radius: .57rem;
		box-shadow: 0 4px 10px #e5d5f5;
		margin: 0 auto .8rem;
		padding-left: 0;
	}

	.report_xc ul li:first-of-type {
		border-top-left-radius: .4rem;
		border-top-right-radius: .4rem;
	}

	.report_xc ul li {
		width: 100%;
		line-height: 3rem;
		border-bottom: 1px solid #f0f0f0;
		background: #fff;
		box-sizing: border-box;
		padding: 0 1rem;
		list-style: none;
	}

	.report_xc_flex {
		display: flex;
		justify-content: space-between;
	}

	.icon_gt {
		color: $theme-color-text;
		font-size: 20px;
	}

	.eys2 {
		background: url(../../../static/img/eyes.png) repeat;
		background-size: 100% 100%;
		color: rgba(255, 255, 255, 0)
	}

	.eys1 {
		background: url(../../../static/img/yincang.png) repeat;
		background-size: 100% 100%;
		color: rgba(255, 255, 255, 0)
	}

	.btn-area {
		width: 93%;
		margin: 20upx auto;
		padding: 25upx 0;
		background-color: #fff;
		height: 150upx;
		box-shadow: 0 0.14rem 0.43rem rgba(77, 119, 152, .1);
	}

	.btn-area-img img {
		width: 100upx;
		height: 80upx;
	}

	.report_sc-img {
		width: 40upx;
		height: 40upx;
		margin-right: 20upx;
	}

	.report_xc-span {
		display: flex;
		align-items: center;
		color: #999999;
	}
</style>
 