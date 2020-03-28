<template>
  <div class="checkbox">
    <input type="checkbox" :style='{width:checkboxwidth+"px",height:checkboxwidth+"px"}' class="checkboxipt" :checked="checkornot">
  </div>
</template>
<script>
  export default {
    name:'CheckBox',
    props:{
      checkornot:{
        type:Boolean,
        default:false
      },
      checkboxwidth:{
        type:Number,
        default:16
      }
    },
    methods:{
    }
  }
</script>
<style lang="stylus" scoped>
  .checkboxipt
    border-radius 50%
    border 1px solid #999
    outline none
    zoom 1
    background-color none
    appearance none;/*去除默认样式*/
  .checkboxipt[type=checkbox]:checked
    background red
    background-image url('~@/assets/images/checked.png')
    background-size 100% 100%
    border 0
</style>