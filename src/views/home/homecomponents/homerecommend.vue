<template>
	<div id="Commends">
		<li v-for='(item,i) in myrecomdata' :key='i'>
			<a :href="item.link">
				<img :src="item.image">
				<p>{{item.title}}</p>
			</a>
		</li>
	</div>
</template>
<script>
	export default {
		name:'Commends',
		props:['myrecomdata']
	}
</script>
<style lang="stylus" scoped>
	#Commends
		display flex
		text-align center
		padding 15px 0 60px 0;
		border-bottom 10px solid #eee
		li
			width 75px
			height 75px
			list-style none
			float left
			flex 1
			font-size 14px
			line-height 8px
			a
				text-decoration none
				color #000
			img
				width 75px
				height 75px
</style>
