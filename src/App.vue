<template>
  <div id="app">
    <!-- 一级路由 -->
   <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'app',
 
}
</script>

<style>
.auto-img{
	width: 100%;
	height: 100%;
	display: block;
}
.van-tabs--line .van-tabs__wrap {
    height: 2.17333rem !important;
}
.van-tab {
    line-height: 2.17333rem !important;
}
.van-field__label {
		max-width: 5.3rem !important;
}
.van-cell {
    font-size: 1rem!important;
    /* margin-bottom: 1rem; */
    line-height: 1.64rem !important;
    padding: .5rem .3rem;
}
.van-button--large {
    height: 2.33333rem !important;
}
.van-button--small {
	height: 1.8rem;
}
.van-button--large {
	height: 2.33333rem;
}
.van-tabbar-item__icon {
	font-size: 1rem !important;
}

</style>
