<template>
  <div id="app">
    <keep-alive exclude='Details'><!-- 除了details外跳转页面不销毁 -->
      <router-view></router-view>
    </keep-alive>
  	<main-tab></main-tab>
  </div>
</template>

<script> 
import mainTab from '@/components/content/TabBar/mainTab'

export default {
  name: 'App',
  components:{
  	mainTab
  }
}
</script>

<style  lang="stylus">
	@import 'assets/css/bace.styl' 
	#app
		font-size 14px
</style>