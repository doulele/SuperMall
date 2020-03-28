<template>
  <div class="detailrate">
    <div v-if='Object.keys(detailratedata).length!==0'>
      <div class="detailratehead">
        <span>用户评价</span>
        <span>更多</span>
      </div>
      <div class="detailShowRate">
        <div class="rateuser">
          <img :src="detailratedata.user.avatar">
          <span>{{detailratedata.user.uname}}</span>
        </div>
        <p class="ratecontent">{{detailratedata.content}}</p>
        <div class="ratemessage">
          <div>
            <span>{{detailratedata.created}}</span>
            <span>{{detailratedata.style}}</span>
          </div>
          <div>
            <span v-for="(item,index) in detailratedata.extraInfo">{{item}}</span>
          </div>
        </div>
        <div class="rateimgshow">
          <img v-for="(item,index) in detailratedata.images" :src="item" :key='index'>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
  export default {
    name:"DetailRate",
    props:{
      detailratedata:{
        type:Object,
        default(){
          return {}
        }
      }
    }
  }
</script>
<style lang="stylus" scoped>
  .detailrate
    padding 0 20px 20px 20px
  .detailratehead
    height 60px
    font-size 16px
    border-bottom 1px solid #ddd
    line-height 60px
    color #000
    span
      float left
      &:last-child
        float right
  .rateuser
    margin-top 20px
    span
      vertical-align middle 
      margin-left 15px
      font-size 16px
      color #000
    img
      width 50px
      height @width
      border-radius @width
      vertical-align middle
  .ratecontent
    line-height 20px
  .ratemessage
    color #b4b4b4
    div
      span
        margin-right 10px
  .rateimgshow
    margin-top 15px
    img
      width 80px
      height @width
      margin-right 5px
</style>
