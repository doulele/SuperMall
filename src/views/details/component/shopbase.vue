<template>
  <div id="shopbase">
    <p class="detailsShopBaseTitle" >{{shopbasedata.title}}</p>
    <div class="detailsShopBasePrice">
      <span class="detailsShopBaseNowPrice" :style="{color:shopbasedata.discountBgColor}">{{shopbasedata.price}}</span>
      <span class="detailsShopBaseOldPrice">{{shopbasedata.oldPrice}}</span>
      <sup :style='{backgroundColor:shopbasedata.discountBgColor}'>{{shopbasedata.discountDesc}}</sup>
    </div>
    <div class="detailsShopBaseSales">
      <span v-for='(item,index) in shopbasedata.columns' >{{item}}</span>
    </div>
    <div class="detailsShopBasePromise">
      <li v-for='(item2,index2) in shopbasedata.shopInfo' >
        <img :src="item2.icon">
        <span>{{item2.name}}</span>
      </li>
    </div>
  </div>
</template>
<script>
  
  export default {
    name:'ShopBase',
    components:{
      
    },
    props:{
      shopbasedata:Object,
      default:{}
    }
  }
</script>
<style lang="stylus" scoped>
  #shopbase
    padding 0px 10px
  .detailsShopBaseTitle
    font-size 16px
    font-weight 700
  .detailsShopBaseNowPrice
    font-size 20px
    line-height 12px
  .detailsShopBaseOldPrice
    font-size 12px
    color rgb(180,180,180)
    margin 0 3px 
    text-decoration line-through
  .detailsShopBasePrice sup
    font-size 12px
    padding 0 5px
    color #fff
    border-radius 6px
  .detailsShopBaseSales
    width 100%
    display flex
    color rgb(180,180,180)
    text-align center
    margin 20px 0 8px 0 
    span
      flex 1
      &:first-child
        text-align left
      &:last-child
        text-align right
  .detailsShopBasePromise
    font-size 14px
    height 50px
    border-top 1px solid #eee
    border-bottom 1px solid #ddd
    display flex
    li
      flex auto
      list-style none
      line-height 50px
      &:last-child
        text-align right
      span
        vertical-align middle
      img
        width 12px
        height @width
        vertical-align middle
</style>