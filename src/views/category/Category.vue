<template>
	<div id="Category">
		<check-box></check-box>
		<v-touch 
		v-on:panstart='start'
		v-on:panmove='move'
		v-on:panedn='end'>
			<div id="move" ref='div'></div>
		</v-touch>
	</div>
</template>
<script>
	import BScroll from 'better-scroll'
	import CheckBox from '@/components/common/checkbox/checkbox'
	export default {
		name:'Category',
		data(){
			return {
				timer:null
			}
		},
		components:{
			CheckBox
		},
		methods:{
			start(){
				this.$refs.div.style.transitionDuration = '0s'
			},
			move(data){
				this.$refs.div.style.left=data.deltaX+'px';
				this.$refs.div.style.top=data.deltaY+'px';
				console.log(this.$refs.div.style.left,data.deltaX)
			},
			end(){
				this.$refs.div.style.transitionDuration = '1s';
				this.$refs.div.style.left='500px'
			}
		}
	}
</script>
<style lang="stylus" scoped>
#move
	position absolute
	width 100px
	height 100px 
	background red
	transition all 1s ease
</style>