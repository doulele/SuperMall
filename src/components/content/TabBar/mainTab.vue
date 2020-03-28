<template>
	<tab-bar>
		<tab-bar-item path='/home' activecolor='rgb(255,87,119)'>
			<img src="@/assets/images/tabbar/home.svg" slot='item-icon'>
			<img src="@/assets/images/tabbar/home_active.svg" slot='item-icon_active'>
			<div slot='item-text'>首页</div>
		</tab-bar-item>
		<tab-bar-item path='/category' activecolor='rgb(255,87,119)'>
			<img src="@/assets/images/tabbar/category.svg" slot='item-icon'>
			<img src="@/assets/images/tabbar/category_active.svg" slot='item-icon_active'>
			<div slot='item-text'>分类</div>
		</tab-bar-item>
		<tab-bar-item path='/car' activecolor='rgb(255,87,119)'>
			<img src="@/assets/images/tabbar/shopcart.svg" slot='item-icon'>
			<img src="@/assets/images/tabbar/shopcart_active.svg" slot='item-icon_active'>
			<div slot='item-text' activecolor='rgb(255,87,119)'>购物车</div>
		</tab-bar-item>
		<tab-bar-item path='/profile'>
			<img src="@/assets/images/tabbar/profile.svg" slot='item-icon'>
			<img src="@/assets/images/tabbar/profile_active.svg" slot='item-icon_active'>
			<div slot='item-text'>我的</div>
		</tab-bar-item>
	</tab-bar>
</template>
<script >
	import TabBar from '@/components/common/TabBar/TabBar'
	import TabBarItem from '@/components/common/TabBar/TabBarItem'

	export default {
		name : "mainTab",
		components:{
			TabBar,
			TabBarItem
		}
	}
</script>
<style scoped>
	
</style>