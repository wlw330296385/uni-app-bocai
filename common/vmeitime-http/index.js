import http from './interface'

/**
 * 将业务所有接口统一起来便于维护
 * 如果项目很大可以将 url 独立成文件，接口分成不同的模块
 * 
 */

// 单独导出(测试接口) import {test} from '@/common/vmeitime-http/'
export const test = (data) => {
	http.config.baseUrl = "http://http://120.79.54.74:8051/"
	//设置请求前拦截器
	http.interceptor.request = (config) => {
		config.header = {
			"token": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
		}
	}
	//设置请求结束后拦截器
	http.interceptor.response = (response) => {
		console.log('个性化response....')
		//判断返回状态 执行相应操作
		return response;
	}
    return http.request({
		baseUrl: 'https://unidemo.dcloud.net.cn/',
        url: 'ajax/echo/text?name=uni-app',
		dataType: 'text',
        data,
    })
}

// 获取玩法
export const getApi = (url, data) => {
	//设置请求前拦截器
	http.interceptor.request = (config) => {
		config.header = {
			appId:"M0001",
			sign:"iaL1LJM1mF9aRKPZJkmG8xXhiaHqkKSVMMWeN3hLut7X7hicFNjakmxibMLGWpXrEXB33367o7zHN0CwngnQY7zb7g",
			timestamp: (new Date()).valueOf()
		}
	}
	//设置请求结束后拦截器
	http.interceptor.response = (response) => {
		//判断返回状态 执行相应操作
		return response;
	}
    return http.request({
        "url": url,
		"dataType": "GET",
        "data":data
    })
}

// 获取玩法
export const postApi = (url, data) => {
	//设置请求前拦截器
	http.interceptor.request = (config) => {
		config.header = {
			appId:"M0001",
			sign:"iaL1LJM1mF9aRKPZJkmG8xXhiaHqkKSVMMWeN3hLut7X7hicFNjakmxibMLGWpXrEXB33367o7zHN0CwngnQY7zb7g",
			timestamp: (new Date()).valueOf()
		}
	}
	//设置请求结束后拦截器
	http.interceptor.response = (response) => {
		//判断返回状态 执行相应操作
		return response;
	}
    return http.request({
        "url": url,
		"method": "POST",
        data
    })
}

// 获取玩法
export const putApi = (url, data) => {
	//设置请求前拦截器
	http.interceptor.request = (config) => {
		config.header = {
			appId:"M0001",
			sign:"iaL1LJM1mF9aRKPZJkmG8xXhiaHqkKSVMMWeN3hLut7X7hicFNjakmxibMLGWpXrEXB33367o7zHN0CwngnQY7zb7g",
			timestamp: (new Date()).valueOf()
		}
	}
	//设置请求结束后拦截器
	http.interceptor.response = (response) => {
		//判断返回状态 执行相应操作
		return response;
	}
    return http.request({
        "url": url,
		"dataType": "PUT",
        data
    })
}



// 获取获奖信息
export const myMessage = ( url , data, method) => {
	var mtd = method ? method : "GET";
	http.config.method = mtd;
	return http.request({
	    "url": url,
	    data
	})
}


export const myTest = ( url , data, method) => {
	http.config.baseUrl = "";
	var mtd = method?method:"GET";
	http.config.method = mtd;
	return http.request({
	    "url": url,
	    data
	});
}



// 轮播图
export const banner = (data) => {
    return http.request({
        url: '/banner/36kr',
        method: 'GET', 
        data,
		// handle:true
    })
}

// 默认全部导出  import api from '@/common/vmeitime-http/'
export default {
	test,
    banner,
	myMessage,
	myTest,
	getApi,
	postApi,
	putApi
}