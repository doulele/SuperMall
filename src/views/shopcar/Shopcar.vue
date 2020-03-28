<template>
	<div class="shopcar">
    <nav-bar class='shopcarnav'>
      <div slot='nav-center'>购物车({{currentlength}})</div>
    </nav-bar>
    <scroll class='content' ref='scroll' :prob-type='2'>
      <car-product :productdata='currentlist'></car-product>
    </scroll>
		<car-total class='bottomtotal'></car-total>
	</div>
</template>
<script>
  import NavBar from "@/components/common/navBar/NavBar"
  import CarProduct from './components/carproduct'
  import CarTotal from './components/cartotal'
  import scroll from '@/components/common/scroll/myscroll'
  import {mapGetters} from 'vuex'

	export default {
		name:'Shopcar',
    components:{
      NavBar,
      CarProduct,
      CarTotal,
      scroll
    },
    computed:{
      ...mapGetters(['currentlength','currentlist'])
    },
    activated(){
      this.$refs.scroll.scrollRefresh()
    }
	}
</script>
<style lang="stylus" scoped>
  .shopcar
    height 100vh
    position relative
  .shopcarnav
    background deepPink
    color #fff
  .content
    position absolute
    top 44px
    bottom 89px
    left 0
    right 0
    overflow hidden
  .bottomtotal
    height 40px
    background #eee
    position fixed
    bottom 49px
    left 0
    right 0
  </style>