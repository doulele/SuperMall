<template>
	<div class="NavBar">
		<div class="left">
			<slot name='nav-left'></slot>
		</div>
		<div class="center">
			<slot name='nav-center'></slot>
		</div>
		<div class="right">
			<slot name='nav-right'></slot>
		</div>
	</div>
</template>
<script>
	export default {
		name:'NavBar',
	}
</script>
<style lang="stylus" scoped>
	.NavBar
		line-height 45px
		background-color #fff
		display flex
		font-weight 500
		text-align center
		box-shadow 0 1px 1px rgba(100,100,100,.2)
		position relative
		z-index 99
	.left,.right
		width 60px
	.center
		flex 1
</style>