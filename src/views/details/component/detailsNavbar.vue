<template>
  <div class="DetailsNavbar">
    <nav-bar>
      <div class="back" slot='nav-left' @click='back'>
        <img src="@/assets/images/common/back.svg">
      </div>
        <div slot="nav-center" class="detanavtit">
          <div class="detailsnavtitle" v-for='(item,index) in navtitle' :class='{"active":current===index}' @click='navclick(index)'>{{item}}</div>
        </div>
      </nav-bar>
  </div>
</template>
<script type="text/javascript">
  import NavBar from '@/components/common/navBar/NavBar'

  export default {
    name:'DetailsNavbar',
    components:{
      NavBar
    },
    data(){
      return {
        navtitle:['商品','参数','评论','推荐'],
        current:0
      }
    },
    methods:{
      back(){
        this.$router.back()
      },
      navclick(index){
        this.current=index;
        this.$emit('currentindex',index)
      }
    }
  }
</script>
<style lang="stylus" scoped>
.active
  color deepPink
.back
  img
    transform: translateY(5px)
.detanavtit
  display flex
  .detailsnavtitle
    flex 1
</style>