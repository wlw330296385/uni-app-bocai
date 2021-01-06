<template>
	<view>
		{{result}}
	</view>
</template>

<script>
	
	import md5 from "@/common/myMd5.js";
	export default {
		data() {
			return {
				result:'123',
				// params:{cParam:"c",bParam:"b"}
				params:{id:"1",timestamp:1608620133, appId:"M0001","name": "gggg"}
			};
		},
		onLoad() {
			this.getSign(this.params, 1608620133);
		},
		methods:{
			getSign:function(params,timestamp){// params:{cParam:"c",bParam:"b"}
				//将参数按首字母排序并且拼接成url格式, 弃置空值 sign1:bParam=b&cParam=c
				let sign1 = this.encodeSearchParams(params);
				//最后拼上appSecret,sign2:bParam=b&cParam=c&appSecret=C683C7AC18566066228667EA802C06EF
				let sign2 = sign1 + "&appSecret=C683C7AC18566066228667EA802C06EF";
				console.log(sign2)
				let sign3 = md5(sign2); // sign:0ca06d43f6af11ee7f3a68e7c3e2eaf3
				console.log(sign3.toUpperCase())
			},
			encodeSearchParams : function(obj) {
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
				  return params.join('&');
			}
		}
	}
</script>

<style lang="scss">

</style>
