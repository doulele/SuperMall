<template>
  <div class="detailstoos">
    <div class="detailstoosserve">
      <li v-for='(item,index) in detailstoosservetext' :key='index' @click='serveclick(index)'>
        <div class="detailstoosserveImg" :style="{backgroundPositionY:-index*25+'px'}" :ref='"serveitem"+index'></div>
        <span>{{item}}</span>
      </li>
    </div>
    <div class="detailstoosbuy">
      <li @click='addshopcar'>加入购物车</li>
      <li>购买</li>
    </div>
  </div>
</template>
<script>
  export default {
    name:'DetailsBottomtools',
    data(){
      return {
        detailstoosservetext:['客服','店铺','收藏'],
        toogle:true
      }
    },
    methods:{
      serveclick(index){
        if (index===2) {
            if (this.toogle) {//收藏图标改变 模拟toogle
              this.$refs.serveitem2[0].style.backgroundPositionY = -3*25 +'px';
              this.toogle=!this.toogle
            }else{
              this.$refs.serveitem2[0].style.backgroundPositionY = -2*25 +'px';
              this.toogle=!this.toogle;
            }
        }
      },
      addshopcar(){
        console.log(this)
        this.$emit('addshopcar');
      }
    }
  }
</script>
<style lang="stylus" scoped>
  .detailstoos
    width 100%
    height 49px
    box-shadow 0 -1px 2px #eee
    background #fff
    position fixed
    bottom 0
    left 0
    right 0
    z-index 99
    display flex
    text-align center
    div
      flex 1
  .detailstoosserve,.detailstoosbuy
    display flex
    li
      flex 1
      div
        margin 3px auto
  .detailstoosserveImg
    width 25px
    height @width
    background url('~@/assets/images/detail/detail_bottom.png')
    background-size 100%
  .detailstoosbuy
    li
      line-height 49px
      color #000
      &:first-child
        background-color rgb(255,223,14)
      &:last-child
        color #fff
        background-color rgb(255,119,154)
</style>