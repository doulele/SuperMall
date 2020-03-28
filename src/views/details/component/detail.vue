<template>
  <div id="Detail">
    <div class="detailTitle">
      <p class="detailTitleTopLine"></p>
      <span class="detaildatadesc">{{detaildata.desc}}</span><br>
      <p class="detailTitleBottomLine"></p>
    </div>
    <div v-for='(item,index) in detaildata.detailImage'>
      <p class="detailimgTitle" >{{item.key}}</p>
      <img v-for='(item2,index2) in item.list' :src="item2" class="detailimg" @load="detailimgload">
      <p class="detaildatadesc">{{item.desc}}</p>
    </div>
  </div>
</template>
<script>
  export default {
    name:"Detail",
    props:{
      detaildata:{
        type:Object,
        default:{}
      }
    },
    methods:{
      detailimgload(){
        this.$emit('detailimgload');
      }
    }
  }
</script>
<style lang="stylus" scoped>
  .detailTitle
    padding 0 20px
    p
      width 30%
      height 1px
      border-bottom 1px solid #bbb
      position relative 
  .detailTitleTopLine
    &::before
      content '▪'
      top -8px
      left -1px
      position absolute
  .detailTitleBottomLine
    float right
    &::after
      content '▪'
      top -8px
      right -1px
      position absolute
  .detailimgTitle
    font-size 16px
    margin 40px 0px 10px 20px
    color #000
  .detailimg
    width 100%
  .detaildatadesc
    padding 0 20px
</style>