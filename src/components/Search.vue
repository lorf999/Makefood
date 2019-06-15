<template>
	<div class="search">
		<van-nav-bar class="nav-text" title="搜索页面" left-text="返回" left-arrow @click-left="onClickLeft" ></van-nav-bar>
		<form>
			<van-search ref="search" class="search" placeholder="输入商品名称关键字" show-action  v-model="count"  >
				<div slot="action" @click="search"><van-icon name="search" size="20px"  /></div>
			</van-search>
		</form>
		<div class="table" v-show="isHow" >
			<van-row>
				<van-col span="11" offset="1" v-for="(item,index) in serchData" :key="index" @click.native="goDaint({name:'Detail',params:{pid:item.id}})">
					<div><img class= " auto-img" :src="item.albums[0]"/></div>
					<div>{{item.title}}</div>
				</van-col>
			</van-row>
		</div>
	</div>
</template>

<script>
	import {Search,Icon,Toast,Button,NavBar} from 'vant'
	export default {
		name:"Search",
		components:{
			[NavBar.name]:NavBar,
			[Search.name]:Search,
			[Icon.name]:Icon,
			[Toast.name]:Toast,
			[Button.name]:Button,
		},
		data(){
			return{
				isHow:false,
				count:"",
				serchData:[],
			}
		},
		methods:{
			onClickLeft(){
				this.$router.go(-1)
			},
			search(){
				this.isHow=false;
				if (this.count=='' || this.count==undefined) {
					this.$toast("搜索不能为空")
					return;
				}
				this.serchData=[];
				var match = new RegExp('(' + this.count + ')', 'img');
			var productDats=JSON.parse(localStorage.getItem("Allfoods"))
			
			productDats.forEach(v=>{
				if(match.test(v.title)||match.test(v.tags)){
					this.serchData.push(v);
					this.isHow=true;
				}
				if (!match.test(v.name)) {
					this.$toast("未能搜索到相关信息！")
					this.count='';
				}
				
			})
		},
			goDaint(path){
				this.$router.push(path)
			},
//			goIndex(){
//				this.$router.go(-1)
//			},
		}
	}
</script>

<style scoped="scoped">
	.search{
		position: sticky;
		top: 0;
		z-index: 100;
	}
	.van-search__content{
		border-radius: 18px;
	}
	.table{
		margin-top: 0.781rem;
	}
	.btn{
		position: fixed;
		bottom: 0;
		right: 0;
	}
	.btn1{
		position: fixed;
		bottom: 0;
		left: 7.812rem;
	}
	.btn2{
		position: fixed;
		bottom: 0;
		left: 0;
	}
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