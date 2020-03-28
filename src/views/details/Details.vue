<template>
  <div class="Details">
    <details-navbar @currentindex='navclick' ref='detailsnav'></details-navbar>
    <scroll 
      class='detailsContent'  
      @contentscroll='contsrol'
      :prob-type='3' 
      ref='scroll'>
      <details-banner :mydata='detailsbannerdata' ref='banner'></details-banner>
      <shop-base :shopbasedata='shopbasemessage'></shop-base>
      <shop :shopdata='shopInfo'></shop>
      <detail :detaildata='detailInfo' @detailimgload='imgload'></detail>
      <detail-size :detailsizedata='itemParams' ref='detailssize'></detail-size>
      <detail-rate :detailratedata='detailrate' ref='rate'></detail-rate>
      <product-list :goods='recommendgoods' ref='recommend'></product-list>
    </scroll>
    <to-top @click.native='topclick' v-show='topshow'></to-top>
    <details-bottomtools @addshopcar='addshopcarclick'></details-bottomtools>
  </div>
</template>
<script>
  import DetailsNavbar from './component/detailsNavbar'
  import scroll from '@/components/common/scroll/myscroll'
  import DetailsBanner from './component/detailsbanner'
  import ShopBase from './component/shopbase'
  import Shop from './component/shop'
  import Detail from './component/detail'
  import DetailSize from './component/detailsize'
  import DetailRate from './component/detailrate'
  import ProductList from '@/components/content/goods/productlist'
  import DetailsBottomtools from './component/detailsbottomtools'
  import ToTop from '@/components/common/scroll/totop'

  import {detailsData,ShopBaceIfm,recommendData} from '@/network/details'

  import {dateFormat,debounce} from '@/components/common/tools/untils.js'
  import {totopMixin} from '@/components/content/mixin/mixin.js'
  export default {
    name:'Details',
    components:{
      DetailsNavbar,
      scroll,
      DetailsBanner,
      ShopBase,
      Shop,
      Detail,
      DetailSize,
      DetailRate,
      ProductList,
      DetailsBottomtools,
      ToTop
    },
    mixins:[totopMixin],
    data(){
      return {
        iid:null,
        detailsbannerdata:[],
        shopbasemessage:{},
        shopInfo:{},
        detailInfo:{},
        itemParams:{},
        detailrate:{},
        topshow:false,
        recommendgoods:[],
        wherearrive:[]
      }
    },
    created(){
      this.iid = this.$route.params.iid;
      detailsData(this.iid).then(res=>{
        let result = res.data.result;
        console.log(result);
        //轮播图数据
        this.detailsbannerdata = result.itemInfo.topImages;
        //商品基本信息数据
        this.shopbasemessage = new ShopBaceIfm(result.columns,result.itemInfo,result.shopInfo.services);
        //店铺基本信息
        this.shopInfo = result.shopInfo;
        this.shopInfo.cSells = this.shopInfo.cSells>=10000? (this.shopInfo.cSells/10000).toFixed(2)+'万':this.shopInfo.cSells
        //详情也数据
        this.detailInfo = result.detailInfo;
        //尺寸数据
        this.itemParams = result.itemParams;
        //评论信息
        if (result.rate.cRate>0) {
          this.detailrate  = result.rate.list[0];
          this.detailrate.created = dateFormat('yyyy-MM-dd hh:mm:ss',new Date(result.rate.list[0].created*1000));//利用format处理日期数据
        }
      });
      recommendData().then(res=>{
        this.recommendgoods = res.data.data.list
      })
    },
    methods:{
      navclick(data){//navbar点击时移动到相应的位置
        this.$refs.scroll.scrollTo(0,this.wherearrive[data],300);
      },
      imgload(){//每个详情图片加载完执行
        console.log('loaded')
        debounce(()=>{
          this.wherearrive = [];
          this.wherearrive.push(-this.$refs.banner.$el.offsetTop);
          this.wherearrive.push(-this.$refs.detailssize.$el.offsetTop);
          this.wherearrive.push(-this.$refs.rate.$el.offsetTop);
          this.wherearrive.push(-this.$refs.recommend.$el.offsetTop);
          console.log(this.wherearrive);
          this.$refs.scroll.scroll.refresh();
        },100);
      },
      contsrol(data){//scroll滚动的时候触发
        console.log('这里可以使用节流函数')
        if((data.y<=this.wherearrive[0])&&(data.y>this.wherearrive[1])){
          this.$refs.detailsnav.current = 0;
        }else if ((data.y>this.wherearrive[2])) {
          this.$refs.detailsnav.current = 1;
        }else if ((data.y>this.wherearrive[3])) {
          this.$refs.detailsnav.current = 2;
        }else{
          this.$refs.detailsnav.current = 3;
        };
        this.topisshow(500,data);//调用并设置回到顶部
      },
      addshopcarclick(data){//点击购物车获取数据
        //1.设置商品数据
        const currentproduct = {};
        currentproduct.iid = this.iid;
        currentproduct.image = this.detailsbannerdata[0];
        currentproduct.title = this.shopbasemessage.title;
        currentproduct.desc = this.shopbasemessage.desc;
        currentproduct.price = this.shopbasemessage.nowprice;
        console.log(currentproduct);
        //2.向vuex发送数据
        this.$store.dispatch('addshopcar',currentproduct);
      }
    }
  }
</script>
<style lang="stylus" scoped>
  .Details
    height 100vh
    position relative
    z-index 1
    color #555
  .detailsContent
    position absolute
    top 45px
    bottom 49px
    left 0
    right 0
    background #fff
</style>