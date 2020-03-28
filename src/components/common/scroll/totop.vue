<template>
  <div class="ToTop">
    <img src="@/assets/images/common/top.png">
  </div>
</template>
<script type="text/javascript">
  export default {
    name:'ToTop'
  }
</script>
<style lang="stylus" scoped>
  .ToTop
    position fixed
    bottom 60px
    right 10px
    z-index 999
    img
      width 40px
      height 40px
</style>