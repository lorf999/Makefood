<template>
	<div class="recommend">
	<van-nav-bar class="nav-text" title="菜谱详情" left-text="返回" left-arrow
  @click-left="onClickLeft" @click-right="onClickRight">
 <van-icon ref="color" class="color" name="like" color="#DFC64B" slot="right" />
	</van-nav-bar>
	<van-row>
		<van-col span="24">
			<div class="nav-img"> <img class="auto-img" :src="menu.albums"/></div>
		</van-col>
		<van-col span="24">
			<p>{{menu.title}}</p>
		</van-col>
		<van-col span="3"><van-tag size="large" color='#FF8B17'>介绍</van-tag></van-col>
		<van-col span="20"><div class="abstract">{{menu.intro}}</div>
		</van-col>
		<van-col span="1"></van-col>
		<van-col span="3"><van-tag size="large" color='#FF8B17'>主料</van-tag></van-col>
		<van-col span="20" class="li">{{menu.ingredients}}</van-col>
		<van-col span="1"></van-col>
		<van-col span="3"><van-tag size="large" color='#FF8B17'>辅料</van-tag></van-col>
		<van-col span="20" class="li">{{menu.burden}}</van-col>
		<van-col span="1"></van-col>
		<van-col span="3" class="ul"><van-tag size="large" color='#FF8B17'>做法</van-tag></van-col>
		<van-col span="21"></van-col>
	
		<van-col span="23" class="li" v-for="(item,index) in steps" :key="index">
			<img class="img-end" :src="steps[index].img" />
			<p class="p">{{steps[index].step}}</p>
		</van-col>
		<van-col span="1"></van-col>
	</van-row>
	</div>
</template>

<script>
	import {NavBar,Icon,Toast,Rate,Button,Tag} from 'vant';
	export default{
		name:'recommend',
		data(){
			return {
				imgs:null,
				menu:null,
				steps:[],
				allfoods:null,
			}
		},
		components:{
			[NavBar.name]:NavBar,
			[Toast.name]:Toast,
			[Rate.name]:Rate,
			[Icon.name]:Icon,
			[Button.name]:Button,
			[Tag.name]:Tag,
		},
		methods:{
			onClickLeft(){
				this.$router.go(-1)
			},
			onClickRight(){
				Toast("点")
			}
		},
		created(){
//			let arrrrr=window.localStorage.getItem('Allfoods');
//			let allfoods1=JSON.parse(arrrrr);
//			for(let i=0;i<allfoods1.length;i++){
//				if (this.$route.params.pid ==allfoods1[i].id ) {
//						this.allfoods=allfoods1[i]
//						break;
//					}
//			}
			
			
			var menu = JSON.parse(localStorage.getItem("menu"));
			for (var i=0;i<menu.result.length;i++) {
				if (this.$route.params.pid ==menu.result[i].id ) {
						this.menu=menu.result[i]
						break;
					}				
			}
			this.menu.steps.forEach(v3=>{
				this.steps.push(v3)
			})

		},
	}
</script>

<style scoped="scoped">
	.nav-img{
		height: 13.5rem;
	}
	p{
		text-indent: 2em;
	}
	.p{
		color: #07080A ;
	}
	.abstract{
		font-size: 0.918rem;
		color: #7D7D7D;
	}
	.van-col--20{
		padding-bottom: 1.39rem;
	}
	.li{
		color: #FA7E3E;
	}
	.img-end{
		padding-left:2.343rem;
		height: 10.156rem;
	}
	.ul{
		padding-bottom: 1.312rem;
	}
	.nav-text{
		position: sticky;
	top: 0;
	}
	.van-tag--large{
		font-size: 0.775rem;
	}
	.van-nav-bar {
    height: 2.22667rem;
    line-height: 2.22667rem;
}
</style>