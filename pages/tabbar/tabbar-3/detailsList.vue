<template>
	<view>
		<view class="selection">
			<dataChapter>
				
			</dataChapter>
			<selectCaizhong>
				
			</selectCaizhong>
		</view>
		
		 <view class="example" @touchmove.stop.prevent>
		        <hr-pull-load
		         @refresh='refresh'
		         @loadMore='loadMore'
		         :height='700'
		         :pullHeight='50'
		         :maxHeight='100'
		         :lowerThreshold='20'
		         :bottomTips='bottomTips'
		         :isAllowPull="true"
		         :isTab='false'
		         ref='hrPullLoad'>
		         <!-- 插入自己的数据-->
		            <view class="list" v-for="(item,index) in exampleInfo" :key='index'>
						<touzhuListUnit>
						</touzhuListUnit>
		            </view>
		        </hr-pull-load>
		    </view>
		
	</view>
</template>

<script>
	import touzhuListUnit from	"@/components/myCommon/touzhu-list-unit.vue";
	import dataChapter from "@/components/myCommon/date-chapter.vue";
	import selectCaizhong from "@/components/myCommon/select-caizhong.vue";
	import hrPullLoad from '@/components/hr-pull-load/hr-pull-load.vue';
	export default {
		components: {touzhuListUnit,dataChapter,selectCaizhong,hrPullLoad},
		data() {
			return {
				exampleInfo:[],
				bottomTips:'',
				pageIndex:1,
				pageSize:10
			};
		},
		onLoad: function(options) {
		},
        onLoad(){
            this.getExampleData(1);
        },
		methods: {
		/*
		            调用接口从后台获取数据，这里的逻辑处理大家可以参考，具体的处理大家可以自定义，需要注意的是：
		            1.bottomTips用来控制触发加载更多时的底部提示
		            2.this.$refs.hrPullLoad.reSet()用来重置下拉刷新状态
		            */
		            getExampleData(type){
		            /* type 1代表下拉刷新 2代表加载更多 */
		                setTimeout(()=>{
		                    /* 接口获取到的数据 */
							let url = "/sales-order/v1/getSalesOrderPage";
							let data =[]
							this.$myRequest.post(url,
							{
								beginDate: "2021-10-03 07:13:18",
								endDate: "2022-01-06 07:13:18",
								orderStatus: 1,
								pageIndex: this.pageIndex,
								pageSize: 10,
								userName: getApp().globalData.userInfo.userName
							},
							{
								success:(res) => {
									if(res.data.code == 200) {
									 data = res.data.data
									} else {
										uni.showToast({
											title:res.data.message
										})
									}
								}
							})
		                    /* 拿到数据后的处理 */
		                    if(data.length>0){
		                        if(type==1){
		                            this.exampleInfo = data;
		                        }
		                        else if(type==2){
		                            this.exampleInfo = this.exampleInfo.concat(data);
		                        }
		                        /* 这里的20是每次调用后台接口返回的最大数据条数，可以自定义 */
		                        if(this.exampleInfo.length<20){
		                            this.bottomTips = "nomore";
		                        }
		                        else{
		                            this.bottomTips = "more";
		                        }
		                    }
		                    else{
		                        if(type==1){
		                            this.exampleInfo = [];
		                        }
		                        else if(type==2){
		                            this.pageIndex--;
		                        }
		                        this.bottomTips = "nomore";
		                    }
		                    /* 这里300毫秒的延时，主要是为了优化视觉效果 */
		                    setTimeout(()=>{
		                        this.$refs.hrPullLoad.reSet();
		                    },300);
		                },500);
		            },
		            //自定义上拉加载更多
		            loadMore(){
		                this.pageIndex++;
		                this.bottomTips = "loading";
		                this.getExampleData(2);
		            },
		            //自定义下拉刷新
		            refresh(){
		                this.pageIndex = 1;
		                this.getExampleData(1);
		            }
		}
	}
</script>

<style lang="scss">

</style>
