import Vue from 'vue';
import App from './App';
import myRequest from "./common/myRequest.js";
Vue.prototype.$myRequest = myRequest;
Vue.config.productionTip = false;
App.mpType = 'app';
Vue.prototype.$messageData = {
			"body": "",
			"id": 0,
			"msgType": 0,
			"read": true,
			"readTime": "",
			"sendTime": "",
			"showFormat": 0,
			"title": "",
			"toUserName": ""
		};
Vue.prototype.$wanfas = {
	SSC_1mBuDingWei:		{url:""},	//一码不定胆
	SSC_2mBudingwei:		{url:""},	//二码不定胆
	SSC_3mBudingwei:		{url:""},	//三码不定胆
	SSC_DaxiaoDanshuang:	{url:"/pages/xuanma/daxiaodanshuang"}, 	//大小单双
	SSC_Dingwei:			{url:"/pages/xuanma/shishicai"}, 	//定位		
	SSC_HaoshiChengshuang:	{url:"/pages/xuanma/daxiaodanshuang"},	//好事成双
	SSC_HezhiWeishu:		{url:""},	//和值位数
	SSC_SanxingBaoxi:		{url:"/pages/xuanma/daxiaodanshuang"},	//三星报喜
	SSC_SijiFacai:			{url:"/pages/xuanma/daxiaodanshuang"},	//四季发财
	SSC_TeshuHaoma:			{url:"/pages/xuanma/sizeSinglepair"},	//特殊号码
	SSC_YifanFengshun:		{url:"/pages/xuanma/daxiaodanshuang"},	//一帆风顺
	SSC_ZhixuanDanshi:		{url:"/pages/xuanma/fenfencai"},	//直选单式
	SSC_ZhixuanFushi:		{url:"/pages/xuanma/shishicai"},	//直选复式
	SSC_ZhixuanHezhi:		{url:""},	//直选和值
	SSC_ZhixuanKuadu:		{url:""},	//直选跨度
	SSC_ZhixuanZuhe:		{url:""},	//直选组合
	SSC_Zuliu:				{url:""},	//组六
	SSC_Zusan:				{url:""},	//组三
	SSC_Zuxuan6:			{url:""},	//组选6
	SSC_Zuxuan10:			{url:""},	//组选10
	SSC_Zuxuan12:			{url:""},	//组选12
	SSC_Zuxuan20:			{url:""},	//组选20
	SSC_Zuxuan24:			{url:""},	//组选24
	SSC_Zuxuan30:			{url:""},	//组选30
	SSC_Zuxuan60:			{url:""},	//组选60
	SSC_Zuxuan120:			{url:""},	//组选120
	SSC_ZuxuanBaodan:		{url:""},	//组选包胆
	SSC_ZuxuanHezhi:		{url:""}, 	//组选和值
	SSC_ZuxuanHunhe:		{url:""}	//组选混合
};
myRequest.get('/user-msg/v1/notReadByType', {
		msgType: 2,
		userName : "root"
	},{
	complete: (res) => {
		// uni.showToast({
		// 			title: '请求成功',
		// 			icon: 'success',
		// 			mask: true
		// 		});
	}
})	




const app = new Vue({
    ...App
})

app.$mount();