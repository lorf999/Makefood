<template>
	<div class="index">
		<header>
			<ul>
				<li class="bglogo" ></li>
				<li @click="getdata">食谱天下</li>

				<li @click="goDatail({name: 'Search'})">搜索更多</li>
			</ul>
			<div class="tab">
				<span style="color: black;">分类:</span>
				<span @click="goDatail({name:'Fen',params:{pid:101}})">粤菜</span>
				<span @click="goDatail({name:'Fen',params:{pid:102}})">川菜</span>
				<span @click="goDatail({name:'Fen',params:{pid:103}})">鲁菜</span>
				<span @click="goDatail({name:'Fen',params:{pid:104}})">京菜</span>
				<span @click="goDatail({name:'Fen',params:{pid:105}})">湘菜</span>
				<span @click="goDatail({name:'Fen',params:{pid:106}})">法式料理</span>
				<span @click="goDatail({name:'Fen',params:{pid:107}})">日式料理</span>
				<span @click="goDatail({name:'Fen',params:{pid:108}})">韩式料理</span>
				<span @click="goDatail({name:'Fen',params:{pid:109}})">特色小吃</span>
			</div>
		</header>
		<!--<van-search ref="search" class="search" @focus="goDatail({name: 'Search'})" placeholder="输入商品名称关键字"  v-show="false"/>-->
		<!--轮播图-->
		<div class="nve-p">
			<span>今日推荐>></span>
			<span class="more">明目清火 . 滋补养生</span>
		</div>
		<van-swipe :autoplay="3000" indicator-color="white">
			<van-swipe-item class="box-img" v-for="(item,index) in images" :key="index">
				<img class="auto-img" :src="item.url" />
			</van-swipe-item>
		</van-swipe>
		<van-notice-bar text="本网站是免费开放的，欢迎各位美食用户在这相互交流。共同进步，把中华5000千年的美食文化传承下去！！" left-icon="volume-o" />
		<!--不必要的-->
		<!--<van-row class="recommend" @click.native="goDatail({name:'Recommend',params:{pid:meun.id}})" v-show="false">
			<p class="nve-p">每次推荐</p>
			<van-col span="24">
				<div class="icon" :style="{backgroundImage: 'url(' + meun.albums + ')', backgroundRepeat:'no-repeat',backgroundSize:'100% 100%'}">
				</div>

				<div class="recommend-p">
					<p class="p-title">{{meun.title}}</p><span> <van-icon name="fire" color="#FE3026" class="fire"></van-icon></span></div>
				<div class="abstract">{{meun.intro}}</div>
			</van-col>
		</van-row>-->
		<van-tabs v-model="active" sticky :swipeable="true" ref="vtabs">
			<van-tab title="早点">
				<p>1</p>
				<van-row>
					<van-col span='12' v-for="(item,index) in breakfast" class="box-col" @click.native="goDatail({name:'Detail',params:{pid:item.id}})" :key="index">
						<div class="box-big" style="width: 95%;margin: 0 auto;">
							<div><img class="auto-img" :src="item.albums[0]" /></div>
							<div class="index-name">
								<div class="tex-title">{{item.title}}</div>
							</div>
						</div>
					</van-col>
				</van-row>
				<div style="text-align: center;"><p @click="count1" id="notex1">加载更多</p></div>
			</van-tab>
			<van-tab title="主菜">
				<p>1</p>
				<van-row>
					<van-col span='12' v-for="(item,index) in homgcooking" class="box-col" @click.native="goDatail({name:'Detail',params:{pid:item.id}})" :key="index">
						<div><img class="auto-img" :src="item.albums[0]" /></div>
						<div class="index-name">
							<div class="tex-title">{{item.title}}</div>
						</div>
					</van-col>
				</van-row>
				<div style="text-align: center;"><p @click="count2" id="notex2">加载更多</p></div>
			</van-tab>
			<van-tab title="甜品">
				<p>1</p>
				<van-row>
					<van-col span='12' v-for="(item,index) in sweet" class="box-col" @click.native="goDatail({name:'Detail',params:{pid:item.id}})" :key="index">
						<div><img class="auto-img" :src="item.albums[0]" /></div>
						<div class="index-name">
							<div class="tex-title">{{item.title}}</div>
						</div>
					</van-col>
				</van-row>
				<div style="text-align: center;"><p @click="count3" id="notex3">加载更多</p></div>
			</van-tab>
			<van-tab title="靓汤">
				<p>1</p>
				<van-row>
					<van-col span='12' v-for="(item,index) in soup" class="box-col" @click.native="goDatail({name:'Detail',params:{pid:item.id}})" :key="index">
						<div><img class="auto-img" :src="item.albums[0]" /></div>
						<div class="index-name">
							<div class="tex-title">{{item.title}}</div>
						</div>
					</van-col>
				</van-row>
				<div style="text-align: center;"><p @click="count4" id="notex4">加载更多</p></div>
			</van-tab>
			<van-tab title="粥">
				<p>1</p>
				<van-row>
					<van-col span='12' v-for="(item,index) in porridge" class="box-col" @click.native="goDatail({name:'Detail',params:{pid:item.id}})" :key="index">
						<div><img class="auto-img" :src="item.albums[0]" /></div>
						<div class="index-name">
							<div class="tex-title">{{item.title}}</div>
						</div>
					</van-col>
				</van-row>
				<div style="text-align: center;"><p @click="count5" id="notex5">加载更多</p></div>
			</van-tab>
			<van-tab title="小吃">
				<p>1</p>
				<van-row>
					<van-col span='12' v-for="(item,index) in snack" class="box-col" @click.native="goDatail({name:'Detail',params:{pid:item.id}})" :key="index">
						<div><img class="auto-img" :src="item.albums[0]" /></div>
						<div class="index-name">
							<div class="tex-title">{{item.title}}</div>
						</div>
					</van-col>
				</van-row>
				<div style="text-align: center;"><p @click="count6" id="notex6">加载更多</p></div>
			</van-tab>
		</van-tabs>

		<!--<p @click="tex">点击这里</p>-->
	</div>
</template>

<script>
	import { Search, Swipe, SwipeItem, NoticeBar, Tab, Tabs, Rate, Icon, Loading } from 'vant';
	import AllData from '../data/AllFinishData.js'
	
	export default {
		name: "Index",

		components: {
			[Search.name]: Search,
			[Swipe.name]: Swipe,
			[SwipeItem.name]: SwipeItem,
			[NoticeBar.name]: NoticeBar,
			[Tab.name]: Tab,
			[Tabs.name]: Tabs,
			[Rate.name]: Rate,
			[Icon.name]: Icon,
			[Loading.name]: Loading,
		},
		data() {
			return {
				b:1,
				c:1,
				d:1,
				e:1,
				f:1,
				g:1,
				trues:false,
				add:0,
				foods:null,
				active: 0,
				products: {},
				meun: null,
				imgs: null,
				images: [
					{url: 'http://s8.sinaimg.cn/middle/4ac0a7ccg7767b9393877&690'},
					{url: 'http://www.ddmeishi.com/uploads/allimg/171103/2-1G103112047.jpg'},
					{url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=301104359,454293495&fm=26&gp=0.jpg'},
				],
				getdatas:null,
				breakfast:null,
				homgcooking:null,
				sweet:null,
				snack:null,
				porridge:null,
				soup:null,

			}
		},
		created() {
			//初始化数据
			AllData.getdata()
			this.getdata()
//			var types = JSON.parse(localStorage.getItem("types"));
//			var products = JSON.parse(localStorage.getItem("products"));
//			var menu = JSON.parse(localStorage.getItem("menu"))
//			var j = parseInt(Math.random() * (9 - 0 + 1)) + 0;
//			this.meun = menu.result[j]
//			types.types.forEach(v1 => {
//				this.products[v1.type] = [];
//				products.products.forEach(v2 => {
//					if(v1.type == v2.type) {
//						this.products[v1.type].push(v2);
//					}
//				})
//			})

			//			//console.log(this.products)
		},

		methods: {
			tex(){
				let getmsg=document.getElementsByClassName('van-ellipsis')
				for(let i=0;i<getmsg.length;i++){
					//console.log(getmsg[i].innerText)
				}
			},
			goDatail(path) {
				this.$router.push(path)
			},
			//获取更多信息展示
			count1() {
				//可以考虑从内存上取出来，每次点击就取一次
				let getmsg=document.getElementsByClassName('van-ellipsis')
				
					if(getmsg[0].innerText=='早点'){
						this.b++
						let a=this.b*10;
						let arrrrr=window.localStorage.getItem('breakfast')
						let food=JSON.parse(arrrrr)
						this.breakfast=food
						this.breakfast.length=a<=food.length?a:food.length;
						let notex=document.getElementById('notex1')
						if(this.breakfast.length==JSON.parse(arrrrr).length){
							notex.innerText=`到底部了喔!`
						}
					}
			},
			count2() {
				//可以考虑从内存上取出来，每次点击就取一次
					let getmsg=document.getElementsByClassName('van-ellipsis')
					if(getmsg[1].innerText=='主菜'){
						this.c++
						let a=this.c*10;
						let arrrrr=window.localStorage.getItem('homgcooking')
						let food=JSON.parse(arrrrr)
						this.homgcooking=food
						this.homgcooking.length=a<=food.length?a:food.length;
						let notex=document.getElementById('notex2')
						if(this.homgcooking.length==JSON.parse(arrrrr).length){
							notex.innerText=`到底部了喔!`
						}
					}
			},
			count3() {
				//可以考虑从内存上取出来，每次点击就取一次
					let getmsg=document.getElementsByClassName('van-ellipsis')
					if(getmsg[2].innerText=='甜品'){
						this.d++
						let a=this.d*10;
						let arrrrr=window.localStorage.getItem('sweet')
						let food=JSON.parse(arrrrr)
						this.sweet=food
						this.sweet.length=a<=food.length?a:food.length;
						let notex=document.getElementById('notex3')
						if(this.sweet.length==JSON.parse(arrrrr).length){
							notex.innerText=`到底部了喔!`
						}
					}
			},
			count4() {
				//可以考虑从内存上取出来，每次点击就取一次
				let getmsg=document.getElementsByClassName('van-ellipsis')
					if(getmsg[3].innerText=='靓汤'){
						this.e++
						let a=this.e*10;
						let arrrrr=window.localStorage.getItem('soup')
						let food=JSON.parse(arrrrr)
						this.soup=food
						this.soup.length=a<=food.length?a:food.length;
						let notex=document.getElementById('notex4')
						if(this.soup.length==JSON.parse(arrrrr).length){
							notex.innerText=`到底部了喔!`
						}
					}
			},
			count5() {
				//可以考虑从内存上取出来，每次点击就取一次
				let getmsg=document.getElementsByClassName('van-ellipsis')
					if(getmsg[4].innerText=='粥'){
						this.f++
						let a=this.f*10;
						let arrrrr=window.localStorage.getItem('porridge')
						let food=JSON.parse(arrrrr)
						this.porridge=food
						this.porridge.length=a<=food.length?a:food.length;
						let notex=document.getElementById('notex5')
						if(this.porridge.length==JSON.parse(arrrrr).length){
							notex.innerText=`到底部了喔!`
						}
					}
			},
			count6() {
				//可以考虑从内存上取出来，每次点击就取一次
				let getmsg=document.getElementsByClassName('van-ellipsis')
					if(getmsg[5].innerText=='小吃'){
						this.g++
						let a=this.g*10;
						let arrrrr=window.localStorage.getItem('snack')
						let food=JSON.parse(arrrrr)
						this.snack=food
						this.snack.length=a<=food.length?a:food.length;
						let notex=document.getElementById('notex6')
						if(this.snack.length==JSON.parse(arrrrr).length){
							notex.innerText=`到底部了喔!`
						}
					}
			},
			getdata() {
//				数据初始化
//				早点
				let arr1=window.localStorage.getItem('breakfast');
                let food1=JSON.parse(arr1);
                this.breakfast=food1;
				this.breakfast.length=10;
//				主菜
				let arr2=window.localStorage.getItem('homgcooking');
                let food2=JSON.parse(arr2);
                this.homgcooking=food2;
				this.homgcooking.length=10;
//				甜品
				let arr3=window.localStorage.getItem('sweet');
                let food3=JSON.parse(arr3);
                this.sweet=food3;
				this.sweet.length=10;
//				靓汤
				let arr4=window.localStorage.getItem('snack');
                let food4=JSON.parse(arr4);
                this.snack=food4;
				this.snack.length=10;
//				粥
				let arr5=window.localStorage.getItem('porridge');
                let food5=JSON.parse(arr5);
                this.porridge=food5;
//				this.porridge.length=10;
//				小吃
				let arr6=window.localStorage.getItem('soup');
				let food6=JSON.parse(arr6);
                this.soup=food6;
				this.soup.length=10;
				//console.log(this.breakfast)
				//console.log(this.homgcooking)
				//console.log(this.sweet)
				//console.log(this.snack)
				//console.log(this.porridge)
				//console.log(this.soup)
//				let arr7=window.localStorage.getItem('Allfoods');
//				let food7=JSON.parse(arr7);
				//console.log(food7)
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
	/*头部导航栏*/
	.bglogo{
		color: red;
		position: absolute;
		top: 0;
		left: -0.2rem;
	}
.tex-title{
	margin: .5rem 0;
	text-align: center;
	text-overflow: ellipsis;
	overflow: hidden;
}
	header ul {
		list-style: none;
		display: block;
		width: 100%;
		height: 3rem;
		/*background:url(../assets/0002.jpg) no-repeat;
		background-size: cover;*/
		background-color: #520e0e;
		li {
			list-style: none;
			display: inline-block;
			margin-left:5.16rem;
			font-size: 1.3remx;
			/*margin-right: 115px;*/ 
			color: white;
			line-height: 3rem;
			/* margin: 0 auto; */
		}
		li:first-child {
			margin-left: 10px;
			width: 4.6667rem;
			height: 3rem;
			background: url(../assets/logo1.jpg) no-repeat;
			background-size: cover;
		}
		li:last-child {
			/*margin-left: 20px;*/
			position: absolute;
			right: 20px;
		}
	}
	
	.tab {
		background-color: #bfbaba;
		line-height: 2;
		color: white;
		/*margin: 0 auto;*/
		/*text-align: center;*/
		span {
			margin: 0 20px;
		}
	}
	/*今日推荐*/
	
	.todayrecommend {
		background-color: lightcoral;
	}
	/*=========*/
	/*	/*
	.search {
		position: sticky;
		top: 0;
		z-index: 100;
	}*/
	
	.van-search__content {
		border-radius: 18px;
	}
	
	.vtabs {
		padding-top: 0;
	}
	
	.van-swipe {
		height: 9.375rem
	}
	
	.box-col {
		padding: 0.156rem;
	}
	
	.index-name {
		text-align: center;
		color: #5A6E86;
	}
	
	.van-tabs--line {
		padding-bottom: 0.687rem;
		padding-top: 0;
	}
	
	.box-col[data-v-82b7485c] {
		/*padding-bottom: 2.5rem;*/
	}
	
	.rate {
		text-align: center;
	}
	
	.van-col--24 {
		height: 18.687rem;
	}
	
	.recommend {
		margin-bottom: 8.781rem;
	}
	
	.recommend-p {
		text-align: center;
		font-size: 18px;
		color: #2E2D2D;
	}
	
	.nve-p {
		color: #FA894F;
		font-size: 18px;
		padding: 0.61rem 0;
		background: lavender;
		/*10px=0.2666rem*/
		padding-left: 0.2rem;
		position: relative;
		.more {
			display: block;
			position: absolute;
			top: 25%;
			right: 0.999rem;
		}
	}
	
	.fire {
		padding-left: 1.156rem;
	}
	
	.p-title {
		display: inline-block;
	}
	
	.abstract {
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		padding-left: 15px;
		text-indent: 2em;
		color: #7D7D7D;
	}
	
	.abstract[data-v-82b7485c] {
		font-size: 0.837333rem;
		color: #000000;
		overflow: scroll;
		line-height: 1.269333rem;
		position: relative;
	}
	
	.abstract:after {
		content: '...';
		text-align: right;
		position: absolute;
		bottom: 0;
		right: 0;
		width: 10%;
		height: 1.8em;
		background: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1) 50%);
	}
	
	.icon {
		height: 18.812rem;
	}
</style>