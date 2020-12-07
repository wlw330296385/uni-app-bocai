<template>
	<scroll-view scroll-y="true"  refresher-enabled="true" :refresher-triggered="refreshering" @refresherrefresh="refresher">
		<view class="content">
			<Search></Search>
			<!-- 将导航栏数据放入navData中,默认为{[name: 'XXX']}，可到componets/Nav.vue中修改 -->
			<Nav :navData="navData" @changeTab='changeTab' :changeNavIndex="current"></Nav>
			<!-- 内容页 -->
			<swiper :current="current" :autoplay="false" ::duration="100" @change="changeSwiper">
				<swiper-item  v-for="(item, index) in classifyData" >
					<!-- 内容页面位置 -->
					<view class="swiper-item">
						{{item.content}}
					</view>
				</swiper-item>
			</swiper>
		</view>
	</scroll-view>
</template>

<script>
	import Nav from '@/components/zq-Nav/zq-Nav'
	import Search from '@/components/zq-Nav/zq-Search'
	export default {
		data() {
			return {
				// 导航栏数据
				navData: [
					{
						name: '导航一'
					},{
						name: '导航二'
					},{
						name: '导航三'
					},{
						name: '导航四'
					},{
						name: '导航五'
					},{
						name: '导航六'
					},{
						name: '导航七'
					},{
						name: '导航八'
					},{
						name: '导航九'
					}
				],
				// 分类数据
				classifyData: [
					{
						content: '内容一'
					},
					{
						content: '内容二'
					},
					{
						content: '内容三'
					},
					{
						content: '内容四'
					},
					{
						content: '内容五'
					},
					{
						content: '内容六'
					},
					{
						content: '内容七'
					},
					{
						content: '内容八'
					},
					{
						content: '内容九'
					},
				],
				// swiper动态高度
				swiperHeight: 0,
				current: 0,
				refreshering: true
			}
		},
		components:{
			Nav: Nav,
			Search: Search
		},
		onLoad() {
			
		},
		methods: {
			// 选择导航栏事件
			changeTab(index){
				this.current = index
			},
			// 滑动内容页事件
			changeSwiper(e) {
				this.current = e.detail.current
				this.$emit('changeNavIndex', e.detail.current)
			},
			// 下拉刷新事件
			refresher() {
				var that = this
				that.refreshering = true
				console.log('下拉刷新')
				setTimeout(function() {
					that.refreshering = false
					console.log('刷新成功')
				},2000)
			}
		}
	}
</script>

<style lang="scss">
	::-webkit-scrollbar {
       width: 0;
       height: 0;
       color: transparent;
    }
	scroll-view {
		height: 100%;
		.content {
			box-sizing: border-box;
			height: 100%;
			padding: 20rpx;                            //页面内边距
			swiper {
				height: calc(100% - 150rpx);
				swiper-item {                         // 内容页样式
					box-sizing: border-box;
					padding: 20rpx;
					.swiper-item {
						text-align: center;
						height: 100%;
						border-radius: 20px;
						background-color: #d7d7d7;
					}
				}
			}
		}
	}
	
</style>
