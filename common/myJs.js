export default {
	// 计算阶乘-非递归写法
	factorial_for(n) {
	    if (0 === n) {
	        return 1;
	    }
	    let res = 1;
	    for (let i = 1; i <= n; ++i) {
	        res *= i;
	    }
	    return res;
	},
	
	// 计算阶乘-递归写法
	factorial_recurrence(n) {
	    if (0 === n) {
	        return 1;
	    }
	    return n*this.factorial_recurrence(n-1);
	},

	//
	array_indexOf(arr) {
		for (var i = 0; i < arr.length; i++) {
			if (arr[i] == arr) return i;
		}
		return -1;
	},
	array_remove(val, arr) {
		var Index = this.array_indexOf(val);
		if (Index > -1) {
			arr.splice(Index, 1);
		}
	},
	
	//时间转换
	date_format(format, date) {
		           var args = {
		               "M+": date.getMonth() + 1,
		               "d+": date.getDate(),
		               "h+": date.getHours(),
		               "m+": date.getMinutes(),
		               "s+": date.getSeconds(),
		               "q+": Math.floor((date.getMonth() + 3) / 3),  //quarter
		               "S": date.getMilliseconds()
		           };
		           if (/(y+)/.test(format))
		               format = format.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
		           for (var i in args) {
		               var n = args[i];
		               if (new RegExp("(" + i + ")").test(format))
		                   format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? n : ("00" + n).substr(("" + n).length));
		           }
		           return format;
	}
}