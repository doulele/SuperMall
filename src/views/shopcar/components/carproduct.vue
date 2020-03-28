<template>
  <div class="carproduct">
     <div v-for='(item,index) in productdata' :key='index' class="productitem">
      <div class="productitemleft">
        <check-box class='checkbox' :checkboxwidth='16' @click.native='isclick(index)' :checkornot='item.check'></check-box>
        <img :src="item.image">
      </div>
      <div class="productitemright">
        <div class="productitemrightdec">
          <span>{{item.title}}</span>
          <span>{{item.desc}}</span>
        </div>
         <div class="productitemrightprice">
           <span>￥{{item.price}}</span>
           <span>×{{item.counst}}</span>
         </div>
      </div>
     </div>
  </div>
</template>
<script>
  import CheckBox from '@/components/common/checkbox/checkbox'

  export default {
    name:'CarProduct',
    components:{
      CheckBox
    },
    props:{
      productdata:{
        type:Array,
        default(){
          return []
        }
      }
    },
    methods:{
      isclick(data){//商品的checkbox点击的时候
        this.productdata[data].check = !this.productdata[data].check;//点击一次商品的check属性取反一次
        let itemprice =[];
        for(let item of this.productdata){
          if(item.check){
            itemprice.push(item.price*item.counst);//点击一次把checked的商品价格放在一个空数组一次
          }
        }
        let cartotaldata = {};
        cartotaldata.totalprice = itemprice.reduce((bef,now)=> bef+now,0);//选中商品的总价格
        cartotaldata.checkedlength = itemprice.length;//被选中商品的个数
        cartotaldata.allchecked = this.productdata.length===itemprice.length? true:false;//商品是否被全选中
        this.$store.dispatch('cartotal',cartotaldata)
      }
    }
  }
</script>
<style lang="stylus" scoped>
  .productitem
    width 100%
    height 80px;
    border-bottom 1px solid #bbb
    padding 10px
    position relative
    display flex
    div
      float left
    .productitemleft
      width 100px
      input
        line-height 70px
      img
        width 70px
        height 80px
        border-radius 5px
        margin-left 15px
    .productitemright
      width calc(100% - 120px)
      .productitemrightdec
        width 100%
        span
          display block
          overflow hidden
          text-overflow ellipsis
          white-space nowrap
          &:first-child
            font-size 16px
            color #000
          &:last-child
            font-size 12px
            line-height 40px
      .productitemrightprice
        width 100%
        margin-top 8px
        span
          &:first-child
            float left
            color rgb(245,132,34)
          &:last-child
            float right
  .checkbox
    position absolute
    top 50%
    left 5px
    transform translateY(-50%)
</style>