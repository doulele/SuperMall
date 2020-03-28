<template>
  <div class="cattotal">
    <div class="cattotalleft">
      <check-box class='checkbox' :checkboxwidth='12' :checkornot='gettertotals.allchecked' @click.native='isclick' ref='allcheck'></check-box>
      <span>全选</span>
      <span>合计: {{(gettertotals.totalprice==0||gettertotals.totalprice==undefined)? 0:'￥'+gettertotals.totalprice}}</span>
    </div>
    <div class="cattotalright">
      提交({{gettertotals.checkedlength||0}})
    </div>
  </div>
</template>
<script>
  import CheckBox from '@/components/common/checkbox/checkbox'
  import {mapGetters} from 'vuex'

  export default {
    name:'CarTotal',
    components:{
      CheckBox
    },
    computed:{
      ...mapGetters(['currentlength','currentlist','gettertotals']),
      checkedlength(){
        let checkedlength = 0
        return this.currentlist.forEach(item => item.check===true? checkedlength++:checkedlength)
      }
    },
    methods:{
      isclick(){//点击全选从新计算所有属性
        this.gettertotals.allchecked = !this.gettertotals.allchecked;
        if(this.gettertotals.allchecked){
          this.currentlist.forEach(item => {
            item.check=true;
            this.gettertotals.totalprice = parseInt(this.gettertotals.totalprice) + parseInt(item.price*item.counst);
          });
          this.gettertotals.checkedlength = this.currentlength;
        }else{
          this.currentlist.forEach(item => item.check=false);
          this.gettertotals.checkedlength = 0;
          this.gettertotals.totalprice = 0
        }
      }
    }
  }
</script>
<style lang="stylus" scoped>
  .cattotal
    div
      float left
      text-align center
      line-height 40px
    .cattotalleft
      span
        font-size 12px
        margin-right 15px
        line-height 40px
        float left
    .cattotalright
      width 100px
      color #fff
      background red
      float right
  .checkbox
    margin 0px 5px
</style>