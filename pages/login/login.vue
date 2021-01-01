<template>
  <view class="page">
    <cmd-nav-bar  title="用户登录" right-text=""></cmd-nav-bar>
    <cmd-page-body type="top">
      <view class="login">
        <!-- 上部分 start -->
        <view class="login-title">{{ status ? '手机快捷登录': '账号密码登录'}}</view>
        <!-- <view class="login-explain">{{ status ? '已注册用户可通过手机验证码直接登录': '未注册用户可通过点击下方[注册]进行注册'}}</view> -->
        <!-- 上部分 end -->
        <!-- 手机表单登录 start -->
        <!-- #ifdef H5 -->
        <cmd-transition name="fade-up">
          <view v-if="status">
			  
            <view class="login-phone">
				<view>
					<image class="loginimage" src="@/static/dianhua.png" mode=""></image>
				</view>
              <cmd-input v-model="mobile.phone" type="number" focus maxlength="11" placeholder="请输入手机号"></cmd-input>
              <view class="login-phone-getcode" @tap="!safety.state ? fnGetPhoneCode() : ''">{{!safety.state&&'获取验证码'||(safety.time+' s')}}</view>
            </view>
			
            <view class="login-code">
				<view>
					<image class="loginimage" src="@/static/yanzheng.png" mode=""></image>
				</view>
              <cmd-input v-model="mobile.code" type="number" maxlength="6" placeholder="请输入短信验证码"></cmd-input>
            </view>
			
			<view class="login-phone" style="opacity: 0;">
				<view>
					<image class="loginimage" src="" mode=""></image>
				</view>
			  
			</view>
			
			
			  <navigator url="/pages/tabbar/tabbar-1/tabbar-1" open-type="switchTab" hover-class="other-navigator-hover">
				<button class="btn-login" :class="loginMobile ? 'btn-login-active':''" :disabled="!loginMobile" hover-class="btn-login-hover"
			 @click="fnLogin()" @tap="fnLogin()">登录</button>
			  </navigator>
          </view>
        </cmd-transition>
        <!-- #endif -->
        <!-- #ifndef H5 -->
        <cmd-transition name="fade-up" v-if="status">
          <view class="login-phone">
			  <view>
			  	<image class="loginimage" src="@/static/dianhua.png" mode=""></image>
			  </view>
            <cmd-input v-model="mobile.phone" type="number" focus maxlength="11" placeholder="请输入手机号"></cmd-input>
            <view class="login-phone-getcode" @tap="!safety.state ? fnGetPhoneCode() : ''">{{!safety.state&&'获取验证码'||(safety.time+' s')}}</view>
          </view>
          <view class="login-code">
			  <view>
			  	<image class="loginimage" src="@/static/yanzheng.png" mode=""></image>
			  </view>
            <cmd-input v-model="mobile.code" type="number" maxlength="6" placeholder="请输入短信验证码"></cmd-input>
          </view>
		  
		  
		  <view class="login-phone" style="opacity: 0;">
		  	<view>
		  		<image class="loginimage" src="" mode=""></image>
		  	</view>
		    
		  </view>
		  <navigator url="/pages/tabbar/tabbar-1/tabbar-1" open-type="switchTab" hover-class="other-navigator-hover">
          <button class="btn-login" :class="loginMobile ? 'btn-login-active':''" :disabled="!loginMobile" hover-class="btn-login-hover"
           @click="fnLogin">登录</button>
			</navigator>
        </cmd-transition>
        <!-- #endif -->
        <!-- 手机表单登录 end -->
        <!-- 账号表单登录 start -->
        <!-- #ifdef H5 -->
        <cmd-transition name="fade-up">
          <view v-if="!status">
            <view class="login-username">
				<view>
					<image class="loginimage1" src="@/static/team1.png" mode=""></image>
				</view>
              <cmd-input v-model="account.username" type="text" focus maxlength="26" placeholder="请输入账号"></cmd-input>
            </view>
            <view class="login-password">
				<view>
					<image class="loginimage1" src="@/static/mima.png" mode=""></image>
				</view>
              <cmd-input v-model="account.password" type="password" displayable maxlength="26" placeholder="请输入密码"></cmd-input>
            </view>
			
			<view class="login-phone" style="opacity: 0;">
				<view>
					<image class="loginimage" src="" mode=""></image>
				</view>
			  
			</view>
			
			<!-- <navigator url="/pages/tabbar/tabbar-1/tabbar-1" open-type="switchTab" hover-class="other-navigator-hover"> -->
            <button class="btn-login" :class="loginAccount ? 'btn-login-active':''" 
              hover-class="btn-login-hover" @tap="fnLogin" @click="fnLogin">登录</button>
			  <!-- </navigator> -->
          </view>
        </cmd-transition>
        <!-- #endif -->
        <!-- #ifndef H5 -->
       <cmd-transition name="fade-up" v-if="!status">
          <view class="login-username">
				<view>
					<image class="loginimage1" src="@/static/team1.png" mode=""></image>
				</view>
            <cmd-input v-model="account.username" type="text" focus maxlength="26" placeholder="请输入账号"></cmd-input>
          </view>
          <view class="login-password">
				<view>
					<image class="loginimage1" src="@/static/mima.png" mode=""></image>
				</view>
            <cmd-input v-model="account.password" type="password" displayable maxlength="26" placeholder="请输入密码"></cmd-input>
          </view>
			
			<view class="login-phone" style="opacity: 0;">
				<view>
					<image class="loginimage" src="" mode=""></image>
				</view>
			  
			</view>
		  <!-- <navigator url="/pages/tabbar/tabbar-1/tabbar-1" open-type="switchTab" hover-class="other-navigator-hover"> -->
          <button class="btn-login" :class="loginAccount ? 'btn-login-active':''" :disabled="!loginAccount" hover-class="btn-login-hover"
          @click="fnLogin">登录</button>
			<!-- </navigator> -->
        </cmd-transition>
        <!-- #endif -->
        <!-- 账号表单登录 end -->
        <!-- 切换登录方式 -->
        <view class="login-mode" @tap="fnChangeStatus(false)">{{status ?	'账号密码登录' : '手机快捷登录'}}</view>
		
		<navigator url="/pages/login/register"  hover-class="other-navigator-hover">
		<view class="login-mode">注册</view>
		</navigator>
      </view>
    </cmd-page-body>
	<view class="uni-padding-wrap uni-common-mt">
		<view class="uni-common-mt">
			<textarea :value="res"></textarea>
		</view>
	</view>
	
  </view>
</template>

<script>
  import cmdNavBar from "@/components/cmd-nav-bar/cmd-nav-bar.vue"
  import cmdPageBody from "@/components/cmd-page-body/cmd-page-body.vue"
  import cmdTransition from "@/components/cmd-transition/cmd-transition.vue"
  import cmdInput from "@/components/cmd-input/cmd-input.vue"

  export default {
    components: {
      cmdNavBar,
      cmdPageBody,
      cmdTransition,
      cmdInput
    },

    data() {
      return {
		loading: false,
		res: '',
        // 账号登录部分数据
        account: {
          username: '',
          password: ''
        },
        usernameReg: /^[A-Za-z0-9]+$/,
        passwordReg: /^\w+$/,
        loginAccount: false,
        // 手机登录部分数据
        mobile: {
          phone: '',
          code: ''
        },
        phoneReg: /^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/,
        loginMobile: false,
        // 验证码
        safety: {
          time: 60,
          state: false,
          interval: ''
        },
        status: false // true手机登录,false账号登录
      };
    },

    watch: {
      /**
       * 监听手机登录数值
       */
      mobile: {
        handler(newValue) {
          if (this.phoneReg.test(newValue.phone) && newValue.code.length === 6) {
            this.loginMobile = true;
          } else {
            this.loginMobile = false;
          }
        },
        deep: true
      },
      /**
       * 监听账号登录数值
       */
      account: {
        handler(newValue) {
          if ((this.usernameReg.test(newValue.username) && newValue.username.length >= 8) && (this.passwordReg.test(
              newValue.password) && newValue.password.length >= 8)) {
            this.loginAccount = true;
          } else {
            this.loginAccount = false
          }
        },
        deep: true
      }
    },

    methods: {
		
		
      /**
       * 登录按钮点击执行
       */
      fnLogin() {
      			this.$myRequest.post(
      			'/user-info/v1/login', 
      			{pwd:this.account.password,userName : this.account.username},
      			{
      			success: (res) => {
      					if(res.data.code == 200){
      						uni.setStorage({
      							key: 'userInfo',
      							data: res.data.data,
      							success: function () {
      								uni.showToast({
      									title: res.message,
      									icon: "success"
      								})
      								uni.switchTab({
      								    url: '/pages/tabbar/tabbar-1/tabbar-1'
      								});
      							}
      						})
      					}else{
      						alert(res.data.message)
      					}
      				}
      			}
      		)
            },

      /**
       * 获取验证码
       */
      fnGetPhoneCode() {
        if (this.phoneReg.test(this.mobile.phone)) {
          uni.showToast({
            title: "正在发送验证码",
            icon: "loading",
            success: () => {
              // 成功后显示倒计时60s后可在点击
              this.safety.state = true;
              // 倒计时
              this.safety.interval = setInterval(() => {
                if (this.safety.time-- <= 0) {
                  this.safety.time = 60;
                  this.safety.state = false;
                  clearInterval(this.safety.interval);
                }
              }, 1000);
              uni.showToast({
                title: "发送成功",
                icon: "success"
              })
            }
          })
        } else {
          uni.showToast({
            title: "手机号不正确",
            icon: "none"
          })
        }
      },
      /**
       * 改变登录方式状态 reset作为重置标识
       */
      fnChangeStatus(reset) {
        // 手机登录部分
        this.mobile = {
          phone: '',
          code: ''
        }
        this.loginMobile = false
        // 账号登录部分
        this.account = {
          username: '',
          password: ''
        }
		console.log(this.account)
        this.loginAccount = false
        // 验证码时间状态还原
        clearInterval(this.safety.interval);
        this.safety.time = 60;
        this.safety.state = false;
        if (!reset) {
          // 可以延迟3毫秒后切换
          this.status = !this.status;
        }
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
      }
    },

    beforeDestroy() {
      /**
       * 关闭页面清除轮询器
       */
      clearInterval(this.safety.interval);
    },
	onNavigationBarButtonTap(val) {
	 
	  if (val.index == 0) {
	    uni.redirectTo({
	        url: '/pages/login/register'
	    })
	  }
	 }
  }
</script>

<style>
	.page{
		 position:absolute;
	     top: 0;
	     left: 0;
		 bottom: 0;
	     width:100%;
	     height:100%;
	     z-index:90000;
	     background-color: #fff;
	     background: url(@/static/img/denglu.png) no-repeat;
	     background-size: 100%;
	     -webkit-background-size: 100%;
	     -o-background-size: 100%;
	     background-position:center;
	}
  .login {
    margin-top: 450upx;
    margin-right: 72upx;
    margin-left: 72upx;
	background-color:rgba(255,255,255,0.61);
	border-radius: 30upx;
  }
  
  .loginimage{
	  width: 70upx;
	  height: 70upx;
	  margin:5upx 20upx 0 10upx;
  }
   .loginimage1{
	   width: 60upx;
	   height: 60upx;
	  margin:10upx 20upx 0 10upx;
   }

  .login-title {
    font-size: 38upx;
	padding: 10upx 0 0 0;
    font-weight: 500;
	color: #000000;
	text-align: center;
  }

  .login-explain {
    font-size: 28upx;
    color: #fff;
  }

  .login-phone {
	  margin: 0 auto;
	  width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
	border-radius: 50upx;
    margin-top: 20upx;
    margin-bottom: 20upx;
	background-color:rgba(0,0,0,0.41);
  }

  .login-phone-getcode {
	 margin-right: 20upx;
    color: #fff;
    text-align: center;
    min-width: 140upx;
	padding:0 10upx;
	border-radius: 20upx;
	background-color: rgba(217,93,0,0.9);
  }

  .login-code {
	  margin: 0 auto;
	  width: 90%;
	border-radius: 50upx;
	display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
	background-color:rgba(0,0,0,0.41);
  }

  .login-username {
	  margin: 0 auto;
	  width: 90%;
    margin-top: 36upx;
    margin-bottom: 40upx;
	background-color:rgba(0,0,0,0.41);
	border-radius: 50upx;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
  }

  .login-password {
	  margin: 0 auto;
	  width: 90%;
	background-color:rgba(0,0,0,0.41);
	border-radius: 50upx;
	display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .btn-login {
    margin-top: 10upx;
    margin-bottom: 30upx;
    border-radius: 50upx;
    font-size: 16px;
	width: 70%;
    color: #fff;
    background: linear-gradient(to right, #D95D00, #ff9e02);
  }

  .btn-login-active {
    background: linear-gradient(to right, #D95D00, #fca901);
  }

  .btn-login-hover {
    background: linear-gradient(to right, #D95D00, #fca901);
  }

  button[disabled] {
    color: #fff;
  }

  .login-mode {
    text-align: center;
    margin-top: 20upx;
  }
</style>
