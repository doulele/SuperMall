<template>
  <banner :mydata='mydata' ref='banner' :style='{height:bannerheight}'>
    <banner-item ref=bannerulbox>
      <li v-for='(item,i) in mydatapush' :key='i' class="bannerli" :style='{width:setimgwidth}' >
          <a :href="item.link">
            <img :src="item.image" @load='bannerimgload' :ref='"img"+i'>
          </a>
      </li>
    </banner-item>
  </banner>
</template>
<script type="text/javascript">
  import Banner from '@/components/common/mybanner/Banner'
  import BannerItem from '@/components/common/mybanner/BannerItem'

  export default {
    name:'HomeBanner',
    data(){
      return {
        mydatapush:[],
        flg:true,
        bannerheight:0
      }
    },
    props:{
      mydata:{
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
    },
    updated(){
      if (this.$refs.img0) {//设置banner的高度：先获取img的高度再把他传给banner  $refs.img0在mounted里面可能拿不到
        this.bannerheight = this.$refs.img0[0].offsetHeight + 'px'
      }
    },
    methods:{
      bannerimgload(){//判断是否滚动到了tabcontrol
        if (this.flg) {
          this.$bus.$emit('bannerimgloaded');
          this.flg=false;
        }
      }
    }
  }
</script>
<style lang="stylus" scoped="">

</style>