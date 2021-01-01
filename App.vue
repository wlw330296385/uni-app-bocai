<script>
export default {
	globalData: {  
	    userInfo: {
			"email": "",
			"fanDian": 0,
			"id": 0,
			"isLine": 0,
			"loginDate": "",
			"nickName": "游客",
			"pid": 0,
			"regDate": "",
			"state": 0,
			"tel": "",
			"userName": ""
		},
		balanceInfo : {
			"balance": 0,
			"frozen": 0,
			"id": 0,
			"userName": "",
			"version": 0
		}
	},  
	onLaunch: function() {
		setTimeout(() => {
			uni.setTabBarBadge({
				index: 1,
				text: 999
			});
			uni.showTabBarRedDot({
				index: 3,
				text: 999
			});
		}, 1000);
		const value = uni.getStorageSync('userInfo');
		if (value) {
			this.globalData.userInfo = value;
		}
		if(!value.id) {
			uni.showToast({
			    title: '请先登录',
			    duration: 2000,
				icon:"loading"
			});
			setTimeout(() => {
				uni.reLaunch({url:'/pages/login/login'});
			},2000);
			
		}
	},
	onShow: function() {
	},
	onHide: function() {
		console.log('App Hide');
	},
	onUniNViewMessage: function() {
		console.log("页面数据通讯:");
	}
	
};
</script>

<style>
	/* 全局样式 */
	@import url("./common/uni/uni.css");
	@import url("./common/style.css");
</style>
