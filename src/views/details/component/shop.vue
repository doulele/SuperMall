<template>
  <div class="detailsshop">
    <div class="detailsshopHead">
      <img :src="shopdata.shopLogo">
      <span>{{shopdata.name}}</span>
    </div>
    <div class="detailsshopContent">
      <div class="detailsshopContentTota">
        <div class="detailsshopContentTotalSell">
          <span>{{shopdata.cSells}}</span><br/>
          总销量
        </div>
        <div class="detailsshopContentTotalGoods">
          <span>{{shopdata.cGoods}}</span><br/>
          全部宝贝
        </div>
      </div>
      <table class="detailsshopContentAssess">
        <tr v-for='(item,index) in shopdata.score'>
          <td class='assessName'>{{item.name}}</td>
          <td :style='{color:item.isBetter? "red":"green"}'>{{item.score}}</td>
          <td class="isBetter">
            <span :style='{background:item.isBetter? "red":"green"}'>{{item.isBetter? '高':'低'}}</span>
          </td>
        </tr>
      </table>
    </div>
    <input type="button" value="进店逛逛" class="enterShop">
  </div>
</template>
<script>
  export default {
    name:"Shop",
    data(){
      return {
      }
    },
    props:{
      shopdata:{
        type:Object,
        default:{}
      }
    },
    created(){
      
    }
  }
</script>
<style lang="stylus" scoped>
  .detailsshop
    padding 20px 10px 20px 10px
    color #555
    border-bottom 1px solid #ddd
  .detailsshopHead
    img
      width 50px
      height @width
      border-radius 50px
      vertical-align middle
    span
      font-size 16px
      margin-left 5px
      vertical-align middle
  .detailsshopContent
    padding 15px
    display flex
    div,table
      flex 1
  .detailsshopContentTota
    border-right 1px solid #ddd
    display flex
    align-items center
    div
      padding-right 10px
      text-align center
      flex 1
      span
        font-size 16px
        line-height 30px
  .detailsshopContentAssess
    margin-left 10px
    line-height 20px
  .assessName
    text-align center
  .isBetter
    span
      height 10px
      color #fff
  .enterShop
    border 0
    outline none
    background-color #eee
    height 30px
    color #555
    padding 0 20px
    border-radius 5px
    display block
    margin 0 auto
</style>