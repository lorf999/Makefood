<template>
	<div class="main">
		<div>
			<!--二级路由-->
			<router-view></router-view>
		</div>
		<van-tabbar v-model="active" class="tabbar">
			<van-tabbar-item :icon="item.icon" v-for="(item,index) in tabx" @click="goThb(item.path)" :key="index">{{item.title}}</van-tabbar-item>
		</van-tabbar>
	</div>
</template>

<script>
	import products from '../data/data.js'
	import types from '../data/types.js'
	import menu from '../data/data2.js'
	import { Tabbar, TabbarItem } from 'vant';
	export default {
		name: 'Main',
		components:{
			[Tabbar.name]:Tabbar,
			
			[TabbarItem.name]:TabbarItem
		},
		data() {
			return {
				active:0,
				tabx:[
					{title:'首页',icon:"home-o",path:{name:'Index'},},
					{title:"收藏",icon:"coupon-o",path:{name:'Collect'},},
					{title:"我的",icon:"manager-o",path:{name:"My"},}
				]
			};
		},
		methods:{
			goThb(path){
				this.$router.push(path)
			}
		},
		created() {
			localStorage.setItem('products',JSON.stringify(products));
			localStorage.setItem("types",JSON.stringify(types));
			localStorage.setItem("menu",JSON.stringify(menu));
		}
	}
</script>

<style scoped>
.main{
	padding-bottom: 1.33333rem;
}
.van-tabbar[data-v-54d3a52e] {
    z-index: 99 !important;
    padding: .3rem 0 !important;
}
	.tabbar{
		max-width: 640PX;
		margin: 0 auto;
		right: 0;
	}
	.van-tabbar {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    width: 100%;
    height: 2.33333rem !important;
    background-color: #fff;
}
.van-tabbar-item {
	font-size: 1rem;
}
.van-button {
	font-size: 1rem;
}


</style>