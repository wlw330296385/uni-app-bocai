import myEncryption from './myEncryption.js'
//请求库
export default {
	config: {
		// baseUrl: "https://unidemo.dcloud.net.cn/",
		baseUrl : "http://120.79.54.74:8051",
		// baseUrl : "http://localhost:8080/",
		header: {
			'Content-Type':'application/json;charset=UTF-8',
			'Content-Type':'application/x-www-form-urlencoded'
		},  
		data: {},
		method: "GET",
		dataType: "json",  /* 如设为json，会对返回的数据做一次 JSON.parse */
		responseType: "text",
		success() {},
		fail() {},
		complete() {}
	},
	request(options) {
		options.baseUrl = options.baseUrl || this.config.baseUrl;
		options.dataType = options.dataType || this.config.dataType;
		options.url = options.baseUrl + options.url;
		options.data = options.data || {};
		options.method = options.method || this.config.method;
		let timestamp =  (new Date()).valueOf();
		let appId =  "M0001";
		//拼接加密串
		var signObj = {};
		signObj = {...options.data};
		signObj.appId = appId;
		signObj.timestamp = timestamp;
		signObj.appSecret = "C683C7AC18566066228667EA802C06EF";
		let sign = myEncryption.encodeSearchParams(signObj)
		// 设置请求头
		options.header = {
					appId		: appId ,//自定义请求头信息
					sign		: sign,
					timestamp	: timestamp
				};
		if	(!options.success) {
			options.success = (res) => {
				console.log("myrequest.js.success", res );
			}
		}
		if	(!options.fail) {
			options.fail = (res) => {
				uni.showToast({
							title: '网络错误',
							icon: 'loading',
							mask: true
						});
			}
		}
		if	(!options.complete) {
			options.complete = (res) => {
				console.log("myrequest.js.complete", res );
			}
		}
		return uni.request(options)	
	},
	get(url, data, options) {
		if (!options) {
			options = {}
		}
		options.url = url
		options.data = data
		options.method = 'GET'  
		return this.request(options)
	},
	post(url, data, options) {
		if (!options) {
			options = {}
		}
		options.url = url
		options.data = data
		options.method = 'POST'
		return this.request(options)
	},
	put(url, data, options) {
		if (!options) {
			options = {}
		}
		options.url = url
		options.data = data
		options.method = 'PUT'
		return this.request(options)
	},
	delete(url, data, options) {
		if (!options) {
			options = {}
		}
		options.url = url
		options.data = data
		options.method = 'DELETE'
		return this.request(options)
	}
}