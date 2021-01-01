//请求库
export default {
	escapedlhcCodeVos(lhcCodeVos) {
		let result = [];
		for(let i in lhcCodeVos) {
			lhcCodeVos[i].onoff = false;
			result.push(lhcCodeVos[i]);
		}
		return result;
	} 
}