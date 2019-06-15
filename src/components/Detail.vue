<template>
	<div class="detail">
	<van-nav-bar class="nav-text" title="菜谱详情" left-text="返回" left-arrow
@click-left="onClickLeft" @click-right="onClickRight">
<van-icon ref="color" class="color" name="like" color="#DFC64B" slot="right" />
	</van-nav-bar>
	<div class="messgs">
		<img  class= "auto-img" :src='allfoods.albums[0]'/>
		<div style="text-align: center; width: 80%;margin: 0 auto;">
			<h2>{{allfoods.title}}</h2>
		</div>
		<p style="line-height:2rem ;"><span style="color: red;">美食介绍：</span>{{allfoods.imtro}}</p>
		<p style="line-height:2rem ;"><span style="color: red;">食材准备：</span>{{allfoods.ingredients}}{{allfoods.burden}}</p>
		<span style="color: red;">制作步骤：</span>
		<div class="" v-for="(item,index) in allfoods.steps" :key="index">
			<div class="imgs">
				<p>{{item.step}}</p>
			</div>
			<div>
				<div class="imgs">
					<img  class= "auto-img" :src='item.img'/>
				</div>

			</div>
		</div>
	</div>

	<div class="collect" @click="onCollects" >
			<van-icon name='like-o' class="colle"></van-icon>&nbsp;&nbsp;<span>点击收藏</span>
	</div>
	<div class="gotop"><a class="top01" href="#">返回顶部</a></div>
	</div>
</template>

<script>
	import { NavBar, Toast ,Rate,Icon,Button} from 'vant';
	
	import tool from '../lib/tool.js'
	export default{
		name:'Detail',
		components:{
			[NavBar.name]:NavBar,
			[Toast.name]:Toast,
			[Rate.name]:Rate,
			[Icon.name]:Icon,
			[Button.name]:Button,
		},
		data(){
			return{
				value:4,
				coll:0,
				isHow:false,
				detailProduct:null,
				collects:null,
				historys:[],
				userLoginStatus:null,
				saveall:null,//所有的收藏
				allfoods:null,
				allfoods1:null,//总的540条数据
			}
		},
		mounted(){
			let savedata=localStorage.getItem('history');
			this.historys=savedata==undefined?[]:JSON.parse(savedata);
			for(var i=0;i<this.historys.length;i++){
			if (this.allfoods.id == this.historys[i].id ) {
				//console.log("已加入历史记录")
						return;
					}
				}
				var histroya={
							imgs:this.allfoods.albums[0],
						name:this.allfoods.title,
						id:this.allfoods.id,
					time:tool.format(new Date(), 'yyyy-MM-dd hh:mm:ss'),
							router:"Detail"
						};
							this.historys.push(histroya)
							localStorage.setItem("history",JSON.stringify(this.historys));
				
		},
		methods: {
			onRate(){
				this.isHow=true;
				Toast.success('评分成功！');
			
			},
			
			onClickLeft() {
				this.$router.go(-1);
			},
			
			onClickRight() {
				var color =this.$refs.color;
				color.style.color="red";
					Toast('点赞+1');
					this.coll++;
					if (this.coll>=2) {
						Toast('不能重复点赞！除非您是会员。');
					}
			},
			
			onCollects(){
				let userLogin = localStorage.getItem('userLogin');
				let savedata=localStorage.getItem('FoodSaveALL');
				this.saveall=savedata==undefined?[]:JSON.parse(savedata);
	//				//console.log(span1[0].style.backgroundColor)
					this.userLoginStatus = userLogin == undefined ? null : JSON.parse(userLogin);
					if (!this.userLoginStatus) {
					//如果未登录, 提示用户登录
	//  			this.$toast('您尚未登录');
						alert("先去登錄吧！")
					} else if (this.userLoginStatus.loginStatus) {
							for (var i=0;i<this.saveall.length;i++) {//如果这个id等于已经收藏有的id
								if (this.allfoods.id == this.saveall[i].id) {
									Toast("此菜谱加入收藏，请收藏其他")
									return
								}	
						}
						Toast("收藏成功")
						this.saveall.push(this.allfoods)
						var collectData=JSON.stringify(this.saveall);
						localStorage.setItem("FoodSaveALL",collectData);
					}
			}
		},
		created(){
		
			let arrrrr=window.localStorage.getItem('Allfoods');
			this.allfoods1=JSON.parse(arrrrr);
			for(let i=0;i<this.allfoods1.length;i++){
				if (this.$route.params.pid ==this.allfoods1[i].id ) {
						this.allfoods=this.allfoods1[i]
						break;
					}
			}
			//console.log(this.allfoods)
		}

}
</script>

<style scoped="scoped" lang="less">
.gotop{
	position: fixed;
	bottom: 15rem;
	right: 0.9rem;
	width: 100px;
	background: red;
	text-align: center;
	border-radius: 50%;
	overflow: hidden;
	opacity: .5;
	.top01{
		text-decoration: none;
		color: white;
	}
}

/*====================*/
.messgs{
	width: 80%;
	margin: 0 auto;
}
.auto-img{
	/*margin: 1rem;*/
	width: 80%;
	display: block;
	margin: 1rem auto;
}	
/*.imgs{
	width: 50%;
	height:9rem;
	float: left;
	margin-bottom: 1rem;
}	*/
/*=========================*/
.van-nav-bar__title{
	color: #F9CC9D;
}
.van-nav-bar__title {
    margin: 0 auto;
    max-width: 60%;
    color: #323233;
    font-size:1rem;
    font-weight: 500;
}
.van-nav-bar__left, .van-nav-bar__right {
    bottom: 0;
    font-size: 1rem;
    position: absolute;
}
.color{
	font-size: 1.5rem;
}
.name{
	text-align: center;
	font-size: 19px;
}
.sp{
		
	color: #FA7E3E;
	padding-left: 1.781rem;
	
}
.sb{
	display: inline-block;
	padding-top: 0.312rem;
	padding-left: 2.081rem;
}
.nav{
	padding: 0.468rem;
	margin-bottom: 0.39rem;
}
.content{
		margin-left: 0.625rem;
}
.cai{
	color: #A69F96;
}
.con{
	color: #FA7E3E;
}
.practice{
	color: #424242;
}
.collect{
	vertical-align: middle;
	font-size: 1rem;
	background-color: red;
	text-align: center;
	width: 50%;
	margin: 2rem auto;
	height: 1.5rem;
	line-height: 1.5rem;
	color: white;
}
.van-button--normal{
	margin-left: 8.343rem;
}
.colle{
	font-size: 20px;
}
.van-nav-bar {
	height: 2.22667rem;
	line-height: 2.22667rem;
}
</style>