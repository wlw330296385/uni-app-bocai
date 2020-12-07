<template>
	<view>
		<view>
			<view class="report_xc">
				<ul>
					<li v-for="(item,index) in 2" :key="index" @click="cilckpopup">
						<span class="content">
							<img class="image" src="@/static/logo.png" alt="">
							<i>1231</i>
							彩票报表
						</span>
						<span class="icon_gt">></span>
					</li>
				</ul>
			</view>
			<uni-popup ref="popup" type="bottom">底部弹出 Popup</uni-popup>
		</view>
	</view>
</template>

<script>
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	export default {
		components:{
			uniPopup
		},
		data() {
			return {
				
			}
		},
		methods: {
			cilckpopup(){
				 this.$refs.popup.open()
			}
		}
	}
</script>

<style>
	.report_xc {
		padding-top: 2rem;
		padding-bottom: 5rem;
		background: #f7f7fc;
		width: 100%;
		margin: 0 auto;
	}
	
	.report_xc ul {
		width: 96%;
		border-radius: .57rem;
		box-shadow: 0 4px 10px #e5d5f5;
		margin: 0 auto .8rem;
		padding-left: 0;
	}
	
	.report_xc ul li:first-of-type {
		border-top-left-radius: .4rem;
		border-top-right-radius: .4rem;
	}
	
	.report_xc ul li {
		width: 100%;
		line-height: 3rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid #f0f0f0;
		background: #fff;
		box-sizing: border-box;
		padding: 0 1rem;
	}
	.icon_gt {
		color: #c878d5;
		font-size: 20px;
	}
	.content{
		display: flex;
		align-items: center;
	}
	.image{
		width: 25px;
		height: 25px;
	}
</style>
