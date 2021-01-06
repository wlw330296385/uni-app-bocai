<template>
	<view>
		<view v-for="(item, index) in codebox" :key="index" @click="Zongindex(index)">
			<view class="uni-flex uni-row codebox">
				<view class="r-top-buttom uni-bg-blue">{{item.title}}</view>
				<view class="flex-item top-button" :class="item.zongOnoff1.quanonoff?'uni-bg-red':''" @click="all_choose(index)">全</view>
				<view class="flex-item top-button" :class="item.zongOnoff1.daonoff?'uni-bg-red':''" @click="big_choose(index)">大</view>
				<view class="flex-item top-button" :class="item.zongOnoff1.xiaoonoff?'uni-bg-red':''" @click="small_choose(index)">小</view>
				<view class="flex-item top-button" :class="item.zongOnoff1.jionoff?'uni-bg-red':''" @click="odd_choose(index)">奇</view>
				<view class="flex-item top-button" :class="item.zongOnoff1.ouonoff?'uni-bg-red':''" @click="even_choose(index)">偶</view>
				<view class="flex-item top-button" :class="item.zongOnoff1.qingonoff?'uni-bg-red':''" @click="none_choose(index)">清</view>
			</view>

			<view class="buttom">
				<view v-for="(item1, index1) in item.code" :key="index1" @click="clickbuttom(index,index1)" class="button-list"
				 :class=" item1.onoff ?'uni-bg-red':'button-light'">
					{{item1.number}}
				</view>
			</view>
		</view>
	</view>

</template>

<script>
	export default {
		props: ["keyindex", 'title', "codebox","list2onoff"],
		data() {
			return {
				zongindex: 0,
				list1: [],
				list2: [
					[],
					[],
					[],
					[],
					[]
				],
			};
		},
		methods: {
			Zongindex(index) {
				this.zongindex = index;
			},
			//数字选择
			clickbuttom(index, index1) {
			
				let quanonoff = true;
				let daonoff = true;
				let xiaoonoff = true;
				let jionoff = true;
				let ouonoff = true;
				for (let i = 0; i < this.codebox[index].code.length; i++) {
					if (i == index1) {
						this.codebox[index].code[index1].onoff = !this.codebox[index].code[index1].onoff;
						if (this.codebox[index].code[index1].onoff == true) {
							this.list2[index].push(this.codebox[index].code[index1].number)
						}else {
							this.$myJs.array_remove(this.codebox[index].code[index1].number,this.list2[index])
						}
					}
					// 判断是否全选code
					if(this.codebox[index].code[i].onoff == false){
						quanonoff = false;
					}
					// 判断是否全选属于大的code
					if(i>=6){
						if(this.codebox[index].code[i].onoff == false){
						daonoff = false;
						}
					}else if(i<6){
						if(this.codebox[index].code[i].onoff == true){
						daonoff = false;
						}
					}
					// 判断是否全选属于小的code
					if(i<6){
						if(this.codebox[index].code[i].onoff == false){
						xiaoonoff = false;
						}
					}else if(i>=6){
						if(this.codebox[index].code[i].onoff == true){
						xiaoonoff = false;
						}
					}
					// 判断是否全选属于奇的code
					if(i%2 == 1){
						if(this.codebox[index].code[i].onoff == false){
						jionoff = false;
						}
					}else if(i%2 == 0){
						if(this.codebox[index].code[i].onoff == true){
						jionoff = false;
						}
					}
					// 判断是否全选属于偶的code
					if(i%2 == 0){
						if(this.codebox[index].code[i].onoff == false){
						ouonoff = false;
						}
					}else if(i%2 == 1){
						if(this.codebox[index].code[i].onoff == true){
						ouonoff = false;
						}
					}
				}
				let layan = []
				this.list2.forEach(res=>{
					if(res.length == '0'){
						layan.push('-')
					}else{layan.push(res.join(''))}
					
				})
				this.codebox[index].zongOnoff1.quanonoff = quanonoff
				this.codebox[index].zongOnoff1.daonoff = daonoff
				this.codebox[index].zongOnoff1.xiaoonoff = xiaoonoff
				this.codebox[index].zongOnoff1.jionoff = jionoff
				this.codebox[index].zongOnoff1.ouonoff = ouonoff
				this.$emit('click_list2', layan)
			}
			// 奇偶选择.
			,
			all_choose(index) {
				this.list2[index] = [];
				if (this.codebox[index].zongOnoff1.quanonoff == false) {
					// 将全大小清奇偶关闭
					for (let key in this.codebox[index].zongOnoff1) {
						this.codebox[index].zongOnoff1[key] = false;
					}
					// 循环每个12345789列表
					for (let key in this.codebox[index].code) {
						// 将点击对应的code列表开关打开
						this.codebox[index].code[key].onoff = true;
						// 将点击的数字赋值到list2
						if (this.codebox[index].code[key].onoff == true) {
							this.list2[index].push(this.codebox[index].code[key].number)
						} else {
							this.$myJs.array_remove(this.codebox[index].code[key].number,this.list2[index])
						}
					}
				}else{
					for (let key in this.codebox[index].code) {
						this.codebox[index].code[key].onoff = false;
					}
				}
				let layan = []
				this.list2.forEach(res=>{
					if(res.length == '0'){
						layan.push('-')
					}else{layan.push(res.join(''))}
					
				})
				this.codebox[index].zongOnoff1.quanonoff = !this.codebox[index].zongOnoff1.quanonoff;
				this.$emit('click_list2', layan)
			},
			big_choose(index) {
				//把list2[index]清空
				this.list2[index] = [];
				//得到大的数字
				let len = Math.floor(this.codebox[index].code.length / 2);
				//把zongOnoff1全关掉只有bigonoff是true
				if(this.codebox[index].zongOnoff1.daonoff == false){
					for(let i in this.codebox[index].zongOnoff1){
					this.codebox[index].zongOnoff1[i] = false;
					}
					//把选上的数字加入到list2[index]
					for(let i = 0; i < this.codebox[index].code.length; i++){
						if(i>len){
							this.codebox[index].code[i].onoff = true;
							if (this.codebox[index].code[i].onoff == true) {
								this.list2[index].push(this.codebox[index].code[i].number)
							} else {
								this.$myJs.array_remove(this.codebox[index].code[i].number,this.list2[index])
							}
						}else{
							// 把属于小的onoff = false
								this.codebox[index].code[i].onoff = false;
						}
					}
				}else{
					//把codebox[index].code里面的onoff全关掉
					for(let i in this.codebox[index].code){
						this.codebox[index].code[i].onoff = false;
					}
				}
				//把list2[index]传到shishicai
				let layan = []
				this.list2.forEach(res=>{
					if(res.length == '0'){
						layan.push('-')
					}else{layan.push(res.join(''))}
					
				})
				this.codebox[index].zongOnoff1.daonoff = !this.codebox[index].zongOnoff1.daonoff
				this.$emit('click_list2', layan)
			},
			small_choose(index) {
				//把list2[index]清空
				this.list2[index] = [];
				//得到大的数字
				let len = Math.floor(this.codebox[index].code.length / 2);
				//把zongOnoff1全关掉只有bigonoff是true
				if(this.codebox[index].zongOnoff1.xiaoonoff == false){
					for(let i in this.codebox[index].zongOnoff1){
					this.codebox[index].zongOnoff1[i] = false;
					}
					//把选上的数字加入到list2[index]
					for(let i = 0; i < this.codebox[index].code.length; i++){
						if(i<=len){
							this.codebox[index].code[i].onoff = true;
							if (this.codebox[index].code[i].onoff == true) {
								this.list2[index].push(this.codebox[index].code[i].number)
							} else {
								this.$myJs.array_remove(this.codebox[index].code[i].number,this.list2[index])
							}
						}else{
							// 把属于小的onoff = false
								this.codebox[index].code[i].onoff = false;
						}
					}
				}else{
					//把codebox[index].code里面的onoff全关掉
					for(let i in this.codebox[index].code){
						this.codebox[index].code[i].onoff = false;
					}
				}
				//把list2[index]传到shishicai
				let layan = []
				this.list2.forEach(res=>{
					if(res.length == '0'){
						layan.push('-')
					}else{layan.push(res.join(''))}
					
				})
				this.codebox[index].zongOnoff1.xiaoonoff = !this.codebox[index].zongOnoff1.xiaoonoff
				this.$emit('click_list2', layan)
			},
			odd_choose(index) {
				//把list2[index]清空
				this.list2[index] = [];
				//把zongOnoff1全关掉只有bigonoff是true
				if(this.codebox[index].zongOnoff1.jionoff == false){
					for(let i in this.codebox[index].zongOnoff1){
					this.codebox[index].zongOnoff1[i] = false;
					}
					//把选上的数字加入到list2[index]
					for(let i = 0; i < this.codebox[index].code.length; i++){
						if(i%2 == 1){
							this.codebox[index].code[i].onoff = true;
							if (this.codebox[index].code[i].onoff == true) {
								this.list2[index].push(this.codebox[index].code[i].number)
							} else {
								this.$myJs.array_remove(this.codebox[index].code[i].number,this.list2[index])
							}
						}else{
							// 把属于小的onoff = false
								this.codebox[index].code[i].onoff = false;
						}
					}
				}else{
					//把codebox[index].code里面的onoff全关掉
					for(let i in this.codebox[index].code){
						this.codebox[index].code[i].onoff = false;
					}
				}
				//把list2[index]传到shishicai
				let layan = []
				this.list2.forEach(res=>{
					if(res.length == '0'){
						layan.push('-')
					}else{layan.push(res.join(''))}
					
				})
				this.codebox[index].zongOnoff1.jionoff = !this.codebox[index].zongOnoff1.jionoff
				this.$emit('click_list2', layan)
			},
			even_choose(index) {
				//把list2[index]清空
				this.list2[index] = [];
				//把zongOnoff1全关掉只有bigonoff是true
				if(this.codebox[index].zongOnoff1.ouonoff == false){
					for(let i in this.codebox[index].zongOnoff1){
					this.codebox[index].zongOnoff1[i] = false;
					}
					//把选上的数字加入到list2[index]
					for(let i = 0; i < this.codebox[index].code.length; i++){
						if(i%2 == 0){
							this.codebox[index].code[i].onoff = true;
							if (this.codebox[index].code[i].onoff == true) {
								this.list2[index].push(this.codebox[index].code[i].number)
							} else {
								this.$myJs.array_remove(this.codebox[index].code[i].number,this.list2[index])
							}
						}else{
							// 把属于小的onoff = false
								this.codebox[index].code[i].onoff = false;
						}
					}
				}else{
					//把codebox[index].code里面的onoff全关掉
					for(let i in this.codebox[index].code){
						this.codebox[index].code[i].onoff = false;
					}
				}
				//把list2[index]传到shishicai
				let layan = []
				this.list2.forEach(res=>{
					if(res.length == '0'){
						layan.push('-')
					}else{layan.push(res.join(''))}
					
				})
				this.codebox[index].zongOnoff1.ouonoff = !this.codebox[index].zongOnoff1.ouonoff
				this.$emit('click_list2', layan)
			},
			none_choose(index) {
				//把list2[index]清空
				this.list2[index] = [];
				//把zongOnoff1全关掉只有bigonoff是true
				if(this.codebox[index].zongOnoff1.qingonoff == false){
					for(let i in this.codebox[index].zongOnoff1){
					this.codebox[index].zongOnoff1[i] = false;
					}}
				for(let i in this.codebox[index].code){
						this.codebox[index].code[i].onoff = false;
					}
				//把list2[index]传到shishicai
				let layan = []
				this.list2.forEach(res=>{
					if(res.length == '0'){
						layan.push('-')
					}else{layan.push(res.join(''))}
					
				})
				// this.codebox[index].zongOnoff1.qingonoff = !this.codebox[index].zongOnoff1.qingonoff
				this.$emit('click_list2', layan)
			}
			//其他
		}
	};
</script>

<style lang='scss'>
	.codebox {
		margin: $uni-spacing-col-base 0;
		font-size: $uni-font-size-lg;
		text-align: center;

		text {
			flex: 3;
		}

		.r-top-buttom {
			width: $uni-xuanxiang-width-normal;
			height: $uni-xuanxiang-height-normal;
			color: #fff;
			text-align: center;
			line-height: $uni-xuanxiang-height-normal;
			margin: $uni-xuanxiang-margin-top-bottom $uni-xuanxiang-margin-left-right;
			border-radius: $uni-xuanxiang-radiu-normal;
		}

		.top-button {
			line-height: $uni-xuanxiang-height-normal;
			font-size: $uni-font-size-lg;
			height: $uni-xuanxiang-height-normal;
			flex: 2;
			margin: $uni-xuanxiang-margin-top-bottom $uni-xuanxiang-margin-left-right;
			/* background-color: $u-type-info-light; */
			/* color: $uni-bg-color-darkgray; */
			border: 1px $uni-border-color solid;
			border-radius: $uni-border-radius-xxl;
		}

		.mbs {
			line-height: 60upx;
			height: 60upx;
			width: 300upx;
			flex-wrap: wrap;
			flex: 3;
			border-radius: 50upx;
		}
	}

	.buttom {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		text-align: center;
		width: 95%;
		margin: auto;

		.button-list {
			width: $uni-xuanma-width-normal;
			line-height: $uni-xuanma-height-normal;
			height: $uni-xuanma-height-normal;
			margin: 10upx $uni-xuanma-margin-top-bottom;
			/* margin: auto; */
			border: 1px $uni-border-color solid;
			border-radius: $uni-xuanma-radiu-normal;
		}
	}

	.button-light {
		background-color: $u-type-info-light;
	}
</style>
