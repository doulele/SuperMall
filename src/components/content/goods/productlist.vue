<template>
	<div id="ProductList">
		<goods-item v-for='(item,i) in goods' :goodsitem='item'></goods-item>
	</div>
</template>
<script type="text/javascript">
	import GoodsItem from './goodsitem'

	export default {
		name:"ProductList",
		components:{
			GoodsItem
		},
		props:{
			goods:{
				type:Array,
				default:[]
			}
		}
	}
</script>
<style lang="stylus" scoped>
	#ProductList
		display flex
		flex-wrap wrap
		justify-content space-evenly
</style>