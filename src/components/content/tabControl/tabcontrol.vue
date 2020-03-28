<template>
	<div class="TabControl">
		<div class="tabcont" v-for='(item,i) in titles' :key='i' @click='tabclick(i)'>
			<span :class="{'active':i===currenttab}">{{item}}</span>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		name:"TabControl",
		data(){
			return {
				currenttab:0
			}
		},
		props:{
			titles:{
				type:Array,
				default:[]
			}
		},
		methods:{
			tabclick(index){
				this.currenttab=index;
				this.$emit('gettabcon',index);
			}
		}
	}
</script>
<style lang="stylus" scoped>
	.TabControl
		height 40px
		display flex
		text-align center
		line-height 35px
		background-color #fff
		position relative
		top 0
		z-index 99
		.tabcont
			flex 1
			font-size 16px
			span 
				padding 0 3px 5px 3px
	.active
		color deeppink
		border-bottom 2px solid deeppink 
</style>