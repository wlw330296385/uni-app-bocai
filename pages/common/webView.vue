<template>
    <view>
        <web-view :webview-styles="webviewStyles" :src="url"></web-view>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                webviewStyles: {
                    progress: {
                        color: '#FF3333'
                    }
                },
				url:"baidu.com",
				title:"同乐娱乐"
            }
        }
		//页面接受传参
		,onLoad: function (option) { //option为object类型，会序列化上个页面传递的参数
			this.url = option.url??option.url;
			this.title = option.title??option.title;
		}
    }
</script>

<style>

</style>