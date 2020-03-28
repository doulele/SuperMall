<template>
  <banner  :mydata='mydata' ref='banner' :style='{height:"300px"}'>
    <banner-item ref=bannerulbox id='bannerheight'>
      <li v-for='(item,index) in mydatapush' :key='index' class="bannerli" :style='{width:setimgwidth}' >
          <a href=" ">
            <img :src="item" :ref='"img"+index'>
          </a>
      </li>
    </banner-item>
  </banner>
</template>
<script type="text/javascript">
  import Banner from '@/components/common/mybanner/Banner'
  import BannerItem from '@/components/common/mybanner/BannerItem'

  export default {
    name:'DetailsBanner',
    data(){
      return {
        mydatapush:[],
        flg:true
      }
    },
    props:{
      mydata:{//传过来的图片数据
        type:Array,
        default:[]
      }
    },
    components:{
      Banner,
      BannerItem
    },
    mounted(){
      if (this.mydata.length === 0) {//当有数据传回的时候再开始各种操作
        let datatimer = setInterval(()=>{
          if(this.mydata.length !== 0){
            clearInterval(datatimer);
            this.mydatapush.push(...this.mydata,this.mydata[0]);//再轮播图后面多加第一个图片，无缝轮播的关键 
            this.setimgwidth = this.$refs.banner.$el.offsetWidth + 'px';//根据banner的宽度设置图片的宽度
            this.$refs.bannerulbox.$el.style.width=this.$refs.banner.$el.offsetWidth * (this.mydata.length + 1) + 'px';//设置包裹img盒子的宽度
          }
        },20)
      }
    }
  }
</script>
<style lang="stylus" scoped>
  #bannerheight
    overflow hidden
</style>