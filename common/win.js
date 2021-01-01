// 是否中奖
export const getWin = (data, url) => {
	uni.request({
	    url: url, //仅为示例，并非真实接口地址。
	    data: {
	        'appId': 'bzSfFv496TRBvw0fvWQTbqcIK3MRB5I6fgbtedUnqdHKPyZCK8' //自定义请求头信息
	        ,'sign': "iaL1LJM1mF9aRKPZJkmG8xXhiaHqkKSVMMWeN3hLut7X7hicFNjakmxibMLGWpXrEXB33367o7zHN0CwngnQY7zb7g"
	    },
	    header: {
	        'appId': 'bzSfFv496TRBvw0fvWQTbqcIK3MRB5I6fgbtedUnqdHKPyZCK8'//自定义请求头信息
			,'sign': "iaL1LJM1mF9aRKPZJkmG8xXhiaHqkKSVMMWeN3hLut7X7hicFNjakmxibMLGWpXrEXB33367o7zHN0CwngnQY7zb7g"
	    },
	    success: (res) => {
	        console.log(res.data);
	        this.text = 'request success';
	    }
	});
}


// 默认全部导出  import api from '@/common/vmeitime-http/'
export default {
	getWin
}