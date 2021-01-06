import md5 from	"./myMd5.js";
/**
 * 设所有发送或者接收到的数据为集合M，将集合M内非空参数值的参数按照参数名ASCII码从小到大排序（字典序），使用URL键值对的格式（即key1=value1&key2=value2…）拼接成字符串stringA。
 * 特别注意以下重要规则：

	◆ 参数名ASCII码从小到大排序（字典序）；

	◆ 如果参数的值为空不参与签名；

	◆ 参数名区分大小写；

	◆ 传送的sign参数不参与签名，将生成的签名与该sign值作校验。
 * @param {Object} obj - 待拼接的对象
 * @returns {string} - 拼接成的请求字符串
 */
export default{
	encodeSearchParams(obj) {
	  const params = []
	  Object.keys(obj).sort().forEach((key) => {
		let value = obj[key]
		// 如果值为undefined或者空值我们将其弃置
		if (typeof value === 'undefined' || value == "") {
			return ;
		}
		// 对于需要编码的文本（比如说中文）我们要进行编码
		params.push([key, encodeURIComponent(value)].join('='))
	  })
	  return md5(params.join('&'));
	}
} 
  
