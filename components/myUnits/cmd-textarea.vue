<!-- 手动输入框组件 -->
<template>
	<view class="r-top">
		<view class="title">
			<view class="title-p">
				<span class="title-span">?</span>
				<span>手动输入2个号码组成一注,所选号码的第一位,第二位与开奖号码相同,即为中奖</span>
			</view>
			<view class="right-buttom">
				<view class="right-buttom-list" @click="clickhelp">帮助</view>
				<view class="right-buttom-list" @click="clickExamples">示例</view>
			</view>
		</view>
		<view v-if="weishu" class="uni-flex uni-row">
			<view class="flex-item r-top-buttom" v-for="(item, index) in weishu_list" :key="index" @click="buttonclick(index,item)"
			 :class="item.clickonoff ? 'uni-bg-red' : 'uni-bg-blue'">
				{{item.title}}
			</view>
		</view>
		<textarea class="textarea-class" @keyup="keyupclick()" placeholder-style="color:rgba(153,153,153,1);" v-model="content" />
		<view class="r-top-t">
		 	<view class="r-top-buttom r-top-buttom-color" @click="Delete">删除重复号</view>
			<view class="r-top-buttom r-top-buttom-color" @click="empty">清空</view>
		 </view>
		 <view class="r-botom">
			 <span>每注号码之间请用一个空格[   ],逗号[ , ]或者分号[ : ]隔开</span>
		 </view>
		 <uni-popup ref="popup1" type="message">
		     <uni-popup-message type="success" message="成功消息" :duration="2000"></uni-popup-message>
		 </uni-popup>
		 <uni-popup ref="popup2" type="dialog">
		 	<uni-popup-dialog type="input" mode="base" message="成功消息" title="示例" content="你好啊" cancel="false" :duration="2000" :before-close="true" @close="close2"
		 	 @confirm="confirm2"></uni-popup-dialog>
		 </uni-popup>
	</view>
</template>
<script>
	import uniPopupDialog from '@/components/uni-popup/uni-popup-dialog.vue';
	import uniPopupMessage from '@/components/uni-popup/uni-popup-message.vue';
	export default {
		components: {
			uniPopupDialog,
			uniPopupMessage
		},
		computed:{
		},
		props:{
			pl:{
				type: String,
				default: "请输入"
			},
			weishu: {
				type: Boolean
			},
			weishu_list : {
				type: Array
			}
		},
		data() {
			return {
				content:'',
				visible1: false,
				visible2: false,
				wanfas:[],
				item_list1:[],
				item_list2:[],
			}
		},
		methods:{
			Delete(){
				let array = this.content.split(/[,]+/);
				this.content =Array.from(new Set(array)).join(",");
				array = this.content.split(/[,]+/);
				this.$emit('click_list2',array)
			},
			keyupclick(){
				let array1 = this.content.split(/[,]+/)
				this.$emit('click_list2',array1)
			},
			empty(){
				this.content = '';
				let array1 = this.content.split(/[,]+/)
				this.$emit('click_list2',array1)
			},
			clickhelp(){
					this.$refs.popup1.open()
			},
			clickExamples(){
					this.$refs.popup2.open()
			},
			buttonclick (index,item) {
				Array.prototype.indexOf = function(val) { 
				for (var i = 0; i < this.length; i++) { 
				if (this[i] == val) return i; 
				} 
				return -1; 
				};
				Array.prototype.remove = function(val) { 
				var index = this.indexOf(val); 
				if (index > -1) { 
				this.splice(index, 1); 
				} 
				};
				for(let i=0;i<this.weishu_list.length;i++){
					if(index == i){
						this.weishu_list[index].clickonoff = !this.weishu_list[index].clickonoff
						if(this.weishu_list[index].clickonoff == true){
								this.item_list1.push(item.title)
						}else{
							this.item_list1.remove(item.title); 
						}
					}
				}
				this.$emit('click_list1',this.item_list1)
			},
			close1(done) {
				// TODO 做一些其他的事情，before-close 为true的情况下，手动执行 done 才会关闭对话框
				// ...
				done()
			},
			confirm1(done, value) {
				// 输入框的值
				console.log(value)
				// TODO 做一些其他的事情，手动执行 done 才会关闭对话框
				// ...
				done()
			},
			close2(done) {
				// TODO 做一些其他的事情，before-close 为true的情况下，手动执行 done 才会关闭对话框
				// ...
				done()
			},
			confirm2(done, value) {
				// 输入框的值
				console.log(value)
				// TODO 做一些其他的事情，手动执行 done 才会关闭对话框
				// ...
				done()
			}
		}
	}
</script>

<style lang="scss">
	.title{
		display: flex;
		padding: 5px;
	}
	.right-buttom{
		display: flex;
	}
	.right-buttom-list{
		width: 50px;
		height: 25px;
		border: 1px solid #cccccc;
		border-radius: 5px;
		color: #999;
		text-align: center;
		margin-left: 5px;
	}
	.r-top{
		padding: 10rpx;
		background: #FFFFFF;
		border-radius: 20rpx;
	}
	.r-top-t{
		display: flex;
		justify-content: space-between;
		font-family:PingFang SC;
		font-weight:400;
		line-height:20px;
		color:rgba(153,153,153,1);
		opacity:1;
	}
	.r-top-buttom{
		width: 80px;
		height: 30px;
		color: #fff;
		text-align: center;
		line-height: 30px;
		margin:15px 10px;
		border-radius: 5px;
	}
	.r-top-buttom-color{
		width: 80px;
		height: 30px;
		color: #fff;
		text-align: center;
		line-height: 30px;
		margin:15px 10px;
		border-radius: 5px;
		background-image:linear-gradient(#8d9c9f, #2c4343);
	}
	.title-p{
		width: 70%;
		font-size: 12px;
		display: flex;
		color: #9c9c9c;
	}
	.title-span{
		display: block;
		width: 25px;
		height: 15px;
		text-align: center;
		line-height: 14px;
		color: #fff;
		border: 1px solid #cccccc;
		border-radius: 50%;
		background-color: #ccc;
	}
	.textarea-class{
		margin: 0 auto;
		width: 95%;
		border-radius: 10px;
		border:1px solid #cccccc;
		padding: 5px;
	}
	.r-botom{
		padding:0 10px;
		color: #a5a5a5;
		}
	/deep/.demo-popup1{
	  .s-popup-wrap{
			top : $uni-pop-top;
			left : $uni-pop-left;
			right : $uni-pop-right;
			bottom : $uni-pop-bottom;
	  }
	}
	/deep/.demo-popup2{
	  .s-popup-wrap{
			top : $uni-pop-top;
			left : $uni-pop-left;
			right : $uni-pop-right;
			bottom : $uni-pop-bottom;
	  }
	}
	
	.uni-bg-red {
		background-image: $u-type-info-light;
	}
</style>
