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
		options.baseUrl = options.baseUrl || this.config.baseUrl
		options.dataType = options.dataType || this.config.dataType
		options.url = options.baseUrl + options.url
		options.data = options.data || {}
		options.method = options.method || this.config.method;
		options.header = {
					appId		: 'M0001' ,//自定义请求头信息
					sign		: "iaL1LJM1mF9aRKPZJkmG8xXhiaHqkKSVMMWeN3hLut7X7hicFNjakmxibMLGWpXrEXB33367o7zHN0CwngnQY7zb7g",
					appSecret	: "C683C7AC18566066228667EA802C06EF",
					timestamp: (new Date()).valueOf()
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