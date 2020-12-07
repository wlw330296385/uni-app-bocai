<script>
export default {
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
	},
	onShow: function() {
		console.log('App Show');
	},
	onHide: function() {
		console.log('App Hide');
	}
};
</script>

<style>
	/* 全局样式 */
	@import url("./common/uni/uni.css");
	@import url("./common/style.css");
</style>
