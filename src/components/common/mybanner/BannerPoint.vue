<template>
	<!-- get重要知识点:几个对象中判断哪个点需要改变样式v-for="(item,i) in obj" :class="{'classname':i===witch}" --> 
  <div id="BannerPoint" ref='poinbox'>
    <li v-for='n in pointnumber' :key='n' class="bannerpoint" :class='{"active":(n-1)===witpon}' @click="opintclick(n-1)"></li>
  </div>
</template>
<script>
  export default {
    name:'BannerPoint',
    props:['pointnumber','witchpoint'],
    data(){
    	return{
    		witpon:0
    	}
    },
    watch:{//这里要用watch监听
    	witchpoint(va){//从父组件得到现在应该显示那张图片对应上的point
    		this.witpon=this.witchpoint;
    	}
    },
    methods:{
    	pointcontrol(){//向父组件传回li数组
    		return this.$refs.poinbox.children
    	},
    	opintclick(data){//因为官方不建议直接修改props里的值(props值只读)所以这里再有子组件得到的值重新传给父组件再由父组件进行修改
    		this.witpon=data;
    		this.$emit('poinchangeindex',data);
    	}
    }
  }
</script>
<style lang="stylus" scoped>
	#BannerPoint
		position absolute
		padding-left 6px                  
		left 50%
		bottom 10px
		transform translateX(-50%)
		text-align center
	.bannerpoint
		list-style none
		display inline-block
		width 8px
		height 8px
		background-color #ddd
		margin-right 6px
		margin-bottom 5px 
		border-radius 4px
		position relative
		z-index 9
	.active
		background-color red!important
</style>