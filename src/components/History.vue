<template>
	<div class="history">
			<van-nav-bar class="nav-text" title="历史记录" left-text="返回" left-arrow
  @click-left="onClickLeft" ></van-nav-bar>
			<van-row v-for="(item,index) in history" :key='index' class="his-row">
				<van-col span="11" offset="1" @click.native="goDetail({name:item.router,params:{pid:item.id}})">
			<img  class =  "auto-img"  :src="item.imgs"/>
				</van-col>
				<van-col span="12" class="text-col">
					<div>{{item.name}}</div >
					<div class="time">浏览时间：{{item.time}}</div>
				</van-col>
			</van-row>
	</div>
</template>

<script>
	import {NavBar,Icon} from "vant";
	export default{
		name:'history',
		components:{
			[NavBar.name]:NavBar,
			[Icon.name]:Icon,
		},
		data(){
			return{
				history:null
			}
		},
		methods:{
			onClickLeft(){
				this.$router.go(-1)
			},
			goDetail(path){
				this.$router.push(path)
			}
		},
		created(){
			this.history=JSON.parse(localStorage.getItem('history'))
		}
	}
</script>

<style scoped="scoped">
	.van-row{
		padding-bottom: 0.468rem;
	}
	.text-col{
		padding-top: 3.468rem;
		padding-left: 0.469rem;
	}
	.time{
		margin-top: 0.546rem;
		font-size: 1;
	}
	.van-nav-bar {
    height: 2.22667rem;
    line-height: 2.22667rem;
}
.van-nav-bar__left, .van-nav-bar__right {
    font-size: 1rem;
}
.van-nav-bar__title {
    font-size: 1rem;
}
</style>