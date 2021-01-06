<template>
  <view class="page">
    <cmd-nav-bar back title="用户注册"  left-text = "<"></cmd-nav-bar>
    <cmd-page-body type="top">
      <view class="register">
        <!-- 上部分 start -->
        <view class="register-title">{{ status ? '手机快捷注册': '账号密码注册'}}</view>
        <!-- <view class="register-explain">{{ status ? '用户可通过手机验证码直接注册': '使用账号密码注册后请绑定手机号'}}</view> -->
        <!-- 上部分 end -->
        <!-- 手机表单注册 start -->
        <!-- #ifdef H5 -->
        <cmd-transition name="fade-up">
          <view v-if="status">
            <view class="register-phone" :class="coloronoff3 == true?'login-username-color':''" @click="coloronoff3 =false" >
				<view>
					<image class="loginimage" src="/static/dianhua.png" mode=""></image>
				</view>
              <cmd-input v-model="mobile.phone" type="number" focus maxlength="11" placeholder="请输入手机号"></cmd-input>
              <view class="register-phone-getcode" @tap="!safety.state ? fnGetPhoneCode() : ''">{{!safety.state&&'获取验证码'||(safety.time+' s')}}</view>
            </view>
			
            <view class="register-code" :class="coloronoff4 == true?'login-username-color':''" @click="coloronoff4 =false" >
				<view>
					<image class="loginimage" src="/static/yanzheng.png" mode=""></image>
				</view>
              <cmd-input v-model="mobile.code" type="number" maxlength="6" placeholder="请输入短信验证码"></cmd-input>
            </view>			
			
			<view class="register-username" :class="coloronoff5 == true?'login-username-color':''" @click="coloronoff5 =false" >
				<view>
					<image class="loginimage" src="/static/yaoqing.png" mode=""></image>
				</view>
			  <cmd-input v-model="account.invitation_code" type="password" displayable maxlength="26" placeholder="请输入邀请码"></cmd-input>
			</view>

            <button class="btn-register" :class="registerMobile ? 'btn-register-active':''"
              hover-class="btn-register-hover" @tap="fnRegister" @click="fnRegister">注册1</button>
          </view>
        </cmd-transition>
        <!-- #endif -->
        <!-- #ifndef H5 -->
        <cmd-transition name="fade-up" v-if="status">
          <view class="register-phone" :class="coloronoff3 == true?'login-username-color':''" @click="coloronoff3 =false" >
			  <view>
					<image class="loginimage" src="/static/dianhua.png" mode=""></image>
				</view>
            <cmd-input v-model="mobile.phone" type="number" focus maxlength="11" placeholder="请输入手机号"></cmd-input>
            <view class="register-phone-getcode" @tap="!safety.state ? fnGetPhoneCode() : ''">{{!safety.state&&'获取验证码'||(safety.time+' s')}}</view>
          </view>
          <view class="register-code" :class="coloronoff4 == true?'login-username-color':''" @click="coloronoff4 =false" >
			  <view>
					<image class="loginimage" src="/static/yanzheng.png" mode=""></image>
				</view>
            <cmd-input v-model="mobile.code" type="number" maxlength="6" placeholder="请输入短信验证码"></cmd-input>
          </view>
			<view class="register-code" :class="coloronoff5 == true?'login-username-color':''" @click="coloronoff5 =false" >
			  <view>
					<image class="loginimage" src="/static/yaoqing.png" mode=""></image>
				</view>
			  <cmd-input v-model="account.invitation_code" type="password" displayable maxlength="26" placeholder="请输入邀请码"></cmd-input>
			</view>
			
          <button class="btn-register" :class="registerMobile ? 'btn-register-active':''" :disabled="!registerMobile"
            hover-class="btn-register-hover" @tap="fnRegister" @click="fnRegister">注册2</button>
        </cmd-transition>
        <!-- #endif -->
        <!-- 手机表单注册 end -->
        <!-- 账号表单注册 start -->
        <!-- #ifdef H5 -->
        <cmd-transition name="fade-up">
          <view v-if="!status">
            <view class="register-username" :class="coloronoff == true?'login-username-color':''" @click="coloronoff =false">
			  <view>
					<image class="loginimage" src="/static/team1.png" mode=""></image>
				</view>
              <cmd-input v-model="account.username" type="text" focus maxlength="26" placeholder="请输入账号"></cmd-input>
            </view>
            <view class="register-password" :class="coloronoff1 == true?'login-username-color':''" @click="coloronoff1 =false">
			  <view>
					<image class="loginimage" src="/static/mima.png" mode=""></image>
				</view>
              <cmd-input v-model="account.password" type="password" displayable maxlength="26" placeholder="请输入密码"></cmd-input>
            </view>
            <view class="register-username" :class="coloronoff2 == true?'login-username-color':''" @click="coloronoff2 =false">
			  <view>
					<image class="loginimage" src="/static/yaoqing.png" mode=""></image>
				</view>
              <cmd-input v-model="account.invitation_code" type="password" displayable maxlength="26" placeholder="请输入邀请码"></cmd-input>
            </view>
            <button class="btn-register" :class="registerAccount ? 'btn-register-active':''"
              hover-class="btn-register-hover" @tap="fnRegister" @click="fnRegister">注册3</button>
          </view>
        </cmd-transition>
        <!-- #endif -->
        <!-- #ifndef H5 -->
        <cmd-transition name="fade-up" v-if="!status">
          <view class="register-username" :class="coloronoff3 == true?'login-username-color':''" @click="coloronoff3 =false">
			  <view>
					<image class="loginimage" src="/static/team1.png" mode=""></image>
				</view>
            <cmd-input v-model="account.username" type="text" focus maxlength="26" placeholder="请输入账号"></cmd-input>
          </view>
          <view class="register-password" :class="coloronoff4 == true?'login-username-color':''" @click="coloronoff4 =false">
			  <view>
					<image class="loginimage" src="/static/mima.png" mode=""></image>
				</view>
            <cmd-input v-model="account.password" type="password" displayable maxlength="26" placeholder="请输入密码"></cmd-input>
          </view>
          <view class="register-username" style="opacity: 0;" :class="coloronoff5 == true?'login-username-color':''" @click="coloronoff5 =false">
			  <image class="loginimage"  mode=""></image>
          </view>
          <button class="btn-register" :class="registerAccount ? 'btn-register-active':''" :disabled="!registerAccount"
            hover-class="btn-register-hover" @tap="fnRegister" @click="fnRegister">注册4</button>
        </cmd-transition>
        <!-- #endif -->
        <!-- 账号表单注册 end -->
        <!-- 切换注册方式 -->
        <view class="register-mode" @tap="fnChangeStatus">{{status ? '账号密码注册' : '手机快捷注册'}}</view>
		<navigator url="/pages/login/login"  hover-class="other-navigator-hover">
		<view class="register-mode">登陆</view>
		</navigator>
      </view>
    </cmd-page-body>
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
		  coloronoff:false,
		  coloronoff1:false,
		  coloronoff2:false,
		  coloronoff3:false,
		  coloronoff4:false,
		  coloronoff5:false,
        account: {
          username: '',
          password: ''
        },
        usernameReg: /^[A-Za-z0-9]+$/,
        passwordReg: /^\w+$/,
        registerAccount: false,
        mobile: {
          phone: '',
          code: ''
        },
        phoneReg: /^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/,
        registerMobile: false,
        safety: {
          time: 60,
          state: false,
          interval: ''
        },
        status: true // true手机注册,false账号注册
      };
    },

    watch: {
      /**
       * 监听手机注册数值
       */
      mobile: {
        handler(newValue) {
          if (this.phoneReg.test(newValue.phone) && newValue.code.length === 6) {
            this.registerMobile = true;
          } else {
            this.registerMobile = false;
          }
        },
        deep: true
      },
      /**
       * 监听账号注册数值
       */
      account: {
        handler(newValue) {
          if ((this.usernameReg.test(newValue.username) && newValue.username.length >= 8) && (this.passwordReg.test(
              newValue
              .password) && newValue.password.length >= 8)) {
            this.registerAccount = true;
          } else {
            this.registerAccount = false
          }
        },
        deep: true
      }
    },

    methods: {
      /**
       * 注册按钮点击执行
       */
      fnRegister() {
        if (this.status) {
          // console.log(JSON.stringify(this.mobile));
		  if(this.mobile.phone == ''){
		  	this.coloronoff3 = true
		  	
		  		uni.showToast({
		  			title:"请输入手机号",
		  			icon:"none"
		  		})
		  	return
		  }
		  if(this.mobile.code == ''){
		  	this.coloronoff4 = true
		  	
		  		uni.showToast({
		  			title:"请输入验证码",
		  			icon:"none"
		  		})
		  	return
		  }
		  if(this.mobile.invitation_code == ''){
		  	this.coloronoff5 = true
		  	
		  		uni.showToast({
		  			title:"请输入邀请",
		  			icon:"none"
		  		})
		  	return
		  }
        } else {
          // console.log(JSON.stringify(this.account));
		  if(this.account.username == ''){
			this.coloronoff = true
			
				uni.showToast({
					title:"请输入账号",
					icon:"none"
				})
			return
		}
		if(this.account.password == ''){
			this.coloronoff1 = true
			
				uni.showToast({
					title:"请输入密码",
					icon:"none"
				})
			return
		}
        }
		
		this.$myRequest.post(
			'/user-info/v1/regist', 
			{
					fd: 0,
					loginPwd: this.account.password,
					parentId: 5,
					userName: this.account.username
			},
			{
			success: (res) => {
					if(res.data.code == 200){
						uni.switchTab({
						    url: '/pages/tabbar/tabbar-1/tabbar-1'
						});
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
       * 改变注册方式状态
       */
      fnChangeStatus() {
        this.mobile = {
          phone: '',
          code: ''
        }
        this.registerAccount = false
        this.account = {
          username: '',
          password: ''
        }
        this.registerMobile = false
        // 验证码时间状态还原
        clearInterval(this.safety.interval);
        this.safety.time = 60;
        this.safety.state = false;
        // 可以延迟3后切换
        this.status = !this.status;
      }
    },

    beforeDestroy() {
      /**
       * 关闭页面清除轮询器
       */
      clearInterval(this.safety.interval);
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
  .register {
	margin-top: 450upx;
    margin-right: 72upx;
    margin-left: 72upx;
	background-color:rgba(255,255,255,0.61);
	border-radius: 30upx;
  }

  .register-title {
    font-size: 38upx;
    padding: 10upx 0 0 0;
    font-weight: 500;
    color: #000000;
    text-align: center;
  }

  .register-explain {
    font-size: 28upx;
    color: #9E9E9E;
  }

  .register-phone {
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

  .register-phone-getcode {
	 margin-right: 20upx;
    color: #fff;
    text-align: center;
    min-width: 140upx;
	padding:0 10upx;
	border-radius: 20upx;
	background-color: rgba(217,93,0,0.9);
  }
  
  .login-username-color{
  	  box-shadow: 0 0 10upx 1upx red;
  }

  .register-code {
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
  
  .loginimage{
  	  width: 70upx;
  	  height: 70upx;
  	  margin:5upx 20upx 0 10upx;
  }

  .register-username {
    margin-top: 56upx;
    margin-bottom: 40upx;
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

  .register-password {
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

  .btn-register {
    margin-top: 10upx;
    margin-bottom: 30upx;
    border-radius: 50upx;
    font-size: 16px;
	width: 70%;
    color: #fff;
    background: linear-gradient(to right, #D95D00, #ff9e02);
  }

  .btn-register-active {
    background: linear-gradient(to right, #D95D00, #fca901);
  }

  .btn-register-hover {
    background: linear-gradient(to right, #D95D00, #fca901);
  }

  button[disabled] {
    color: #fff;
  }

  .register-mode {
    text-align: center;
    margin-top: 10upx;
  }
</style>
