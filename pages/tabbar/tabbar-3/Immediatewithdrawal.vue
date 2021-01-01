<template>
	<view>
		<view class="content">
			<h3>请选择提款方式</h3>
			<p @click="lijixiugai">银行卡提款</p>
			<p @click="lijixiugai">USDT提款</p>
		</view>
		<uni-popup ref="popup" type="dialog">
			<uni-popup-dialog type="info" mode="base" message="成功消息" title="正在开发,敬请期待" :duration="2000" :before-close="true" @close="close"
			 @confirm="confirm">
			 </uni-popup-dialog>
		</uni-popup>
	</view>
</template>

<script>
	import uniPopupDialog from '@/components/uni-popup/uni-popup-dialog.vue';
	export default {
		components:{
			uniPopupDialog
		},
		data() {
			return {
				
			};
		},
		methods:{
			lijixiugai(){
					this.$refs.popup.open()
			},
			// 立即投注
			close(done) {
				// TODO 做一些其他的事情，before-close 为true的情况下，手动执行 done 才会关闭对话框
				// ...
				done()
			},
			confirm(done, value) {
				// 输入框的值
				console.log(value)
				// TODO 做一些其他的事情，手动执行 done 才会关闭对话框
				// ...
				done()
			},
		}
	}
</script>

<style lang="scss">
	.content{
		
		h3{
			padding-top: 10rem;
			    width: 100%;
			    text-align: center;
			    font-size: 1.4rem;
			    color: #514e57;
		}
		p{
			    width: 80%;
			    height: 3.5rem;
			    text-align: center;
			    border-radius: .5rem;
			    line-height: 3.5rem;
			    background-image: -linear-gradient(top,#bb51de,#b720b9);
			    background-image: -webkit-linear-gradient(top,#bb51de,#b720b9);
			    font-size: 1.6rem;
			    margin: 4rem auto 0;
			    color: #fff;
		}
	}
</style>
