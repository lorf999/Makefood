<template>
<div class="fen">
	<van-nav-bar class="nav-text" title="Menu" left-text="返回" left-arrow @click-left="onClickLeft" ></van-nav-bar>
	<p style="background-color: lavender; padding: 0.3rem 0">这是最地道的:<span style="margin:0 0.5rem;font-size: 1.3rem;color: red;">{{menu}}</span>喔！</p>
	<van-row>
		<van-col span='12' v-for="(item,index) in data2" class="box-col" @click.native="goDatail({name:'Detail',params:{pid:item.id}})" :key="index">
			<div class="box-big" style="width: 95%;margin: 0 auto;">
				<div><img class="auto-img" :src="item.albums[0]" /></div>
					<div class="index-name">
						<div class="tex-title" style="text-align: center; margin: 0.3rem auto; color: #000000; overflow: hidden;">
							<span style="text-overflow: ellipsis; white-space: nowrap;">{{item.title}}</span>
						</div>
					</div>
				</div>
			</van-col>
	</van-row>
	<div style="text-align: center;"><p @click="count1" id="notex1">加载更多</p></div>
			
</div>
</template>

<script>
		import {Toast,NavBar} from 'vant'
	export default {
		name: "Fen",
		components:{
			[NavBar.name]:NavBar,
			[Toast.name]:Toast,
		},
		data(){
			return{
				b:1,
				menu:null,
				data:null,
				data2:null,
				
			}
		},
		created(){
			if(this.$route.params.pid==101){
				this.menu="粤菜";
				let yue=localStorage.getItem('Yue')
				this.data=JSON.parse(yue)
				this.data2=JSON.parse(yue)
				////console.log(this.data)
			}
			if(this.$route.params.pid==102){
				this.menu="川菜";
				let yue=localStorage.getItem('Chuan')
				this.data=JSON.parse(yue)
				this.data2=JSON.parse(yue)
				////console.log(this.data)
			}
			if(this.$route.params.pid==103){
				this.menu="鲁菜";
				let yue=localStorage.getItem('Lu')
				this.data=JSON.parse(yue)
				this.data2=JSON.parse(yue)
				////console.log(this.data)
			}
			if(this.$route.params.pid==104){
				this.menu="京菜";
				let yue=localStorage.getItem('Jing')
				this.data=JSON.parse(yue)
				this.data2=JSON.parse(yue)
				////console.log(this.data)
			}
			if(this.$route.params.pid==105){
				this.menu="湘菜";
				let yue=localStorage.getItem('Xiang')
				this.data=JSON.parse(yue)
				this.data2=JSON.parse(yue)
//				////console.log(this.data)
			}
			if(this.$route.params.pid==106){
				this.menu="法国菜";
				let yue=localStorage.getItem('French')
				this.data=JSON.parse(yue)
				this.data2=JSON.parse(yue)
//				////console.log(this.data)
			}
			if(this.$route.params.pid==107){
				this.menu="日本菜";
				let yue=localStorage.getItem('Japan')
				this.data=JSON.parse(yue)
				this.data2=JSON.parse(yue)
//				////console.log(this.data)
			}
			if(this.$route.params.pid==108){
				this.menu="韩国菜";
				let yue=localStorage.getItem('Korea')
				this.data=JSON.parse(yue)
				this.data2=JSON.parse(yue)
//				////console.log(this.data)
			}
			if(this.$route.params.pid==109){
				this.menu="特色小吃";
				let yue=localStorage.getItem('special')
				this.data=JSON.parse(yue)
				this.data2=JSON.parse(yue)
				////console.log(this.data)
			}
			this.data2.length=10;
		},
		methods:{
			goDatail(path){
				this.$router.push(path)
			},
			onClickLeft(){
				this.$router.go(-1)
			},
			count1() {
				//可以考虑从内存上取出来，每次点击就取一次
//				let getmsg=document.getElementsByClassName('van-ellipsis')
				this.b++
				let a=this.b*10;
				const aaa=this.data;//固定长度
				this.data2.length=a<=aaa.length?a:aaa.length;
//				截取固定长度中的索引
				this.data2=aaa.slice(0,this.data2.length)
				let notex=document.getElementById('notex1')
				if(this.data2.length==aaa.length){
					notex.innerText=`到底部了喔!`
				}
//				////console.log(this.data2.length)
			},
		},
		
	}
</script>

<style scoped lang="less">
.van-nav-bar {
	height: 2.22667rem;
	line-height: 2.22667rem;
}
.van-nav-bar__left, .van-nav-bar__right {
	font-size: 1rem;
}
.van-nav-bar__title {
	font-size: 1;
}
</style>