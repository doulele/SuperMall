<template>
  <div id="TabBarItem" class="tab-bar-item" @click='change'>
  	<div v-if='!isActive'>
  		<slot name='item-icon'></slot>
  	</div>
  	<div v-else>
  		<slot name='item-icon_active'></slot>
  	</div>
  	<div :style='customColor'>
  		<slot name='item-text'></slot>
  	</div>
  </div>
</template>

<script>

export default {
  name: 'TabBarItem',
  components:{
  },
  props:{
  	path:String,
  	activecolor:{
  		type:String,
  		default:'red'
  	}
  },
  computed:{
  	isActive(){
  		return this.$route.path.includes(this.path)
  	},
  	customColor(){
  		return this.isActive? {color:this.activecolor}:{}
  	}
  },
  methods:{
  	change(){
  		if(!this.isActive){
  			this.$router.replace(this.path)
  		}
  		
  	}
  }
}
</script>
<style  lang="stylus" scoped>
	.tab-bar-item
	  flex 1
	  text-align center
	  height 49px
	  font-size 14px
	.tab-bar-item img
	 	width 24px
	 	height 24px
	 	margin-top 3px
	 	vertical-align middle
	 	margin-bottom 2px
</style>
