<template>
	<div id="Home">
		<nav-bar class="homnavcolor">
	      <div id="navHomeShopStreet" slot='nav-center'>购 物 街</div>
	  </nav-bar>
    <tab-control :titles='["流行","新款","精选"]' @gettabcon='getcon' ref='tabcon1' v-show='!tabconshow'></tab-control>
    <scroll class='content' ref='scro' 
    :prob-type='2' 
    :pull-up-load='true' 
    @contentscroll='contsrol' 
    @loadmore='loadmore'>
      <home-banner :mydata='bannerData'></home-banner>
  		<commends :myrecomdata='recommendData'></commends>
  		<feature></feature>
  		<tab-control :titles='["流行","新款","精选"]' @gettabcon='getcon' ref='tabcon2' v-show='tabconshow'></tab-control>
      <product-list :goods='showgoods' :class='{"addmargin":!tabconshow}'></product-list>
    </scroll>
    <to-top @click.native='topclick' v-show='topshow'></to-top>
	</div>
</template>
<script>
  import NavBar from '@/components/common/navBar/NavBar'
  import HomeBanner from './homecomponents/homebanner'
  import commends from '@/views/home/homecomponents/homerecommend'
  import Feature from '@/views/home/homecomponents/feature'
  import TabControl from '@/components/content/tabControl/tabcontrol'
  import ProductList from '@/components/content/goods/productlist'
  import scroll from '@/components/common/scroll/myscroll'
  import ToTop from '@/components/common/scroll/totop'
  import BannerItem from '@/components/common/mybanner/BannerItem'

  import {homeRequest,requestgoods} from '@/network/homejs'
  import {totopMixin} from '@/components/content/mixin/mixin.js'

	export default {
		name:'Home',
    components:{
      NavBar,
      HomeBanner,
      commends,
      Feature,
      TabControl,
      ProductList,
      scroll,
      ToTop,
      BannerItem
    },
    data(){
      return {
        bannerData:[],
        recommendData:[],
        goods:{
        	pop:{page:0,list:[]},
        	new:{page:0,list:[]},
        	sell:{page:0,list:[]}
        },
      	controngoods:'pop',
        tabcontotop:0,
        tabconshow:true,
        saveScrollY:0
      }
    },
    mixins:[totopMixin],
    created(){
    	//创建好元素就进行网络请求
      this.gethomerequest();
      this.getgoodsreqquest('pop');
      this.getgoodsreqquest('new');
      this.getgoodsreqquest('sell');
    },
    mounted(){
      this.$bus.$on('bannerimgloaded',()=>{//轮播图图片加载好之后再拿tabControl的offsetTop
       this.tabcontotop = this.$refs.tabcon2.$el.offsetTop;
      })
    },
    destroyed(){//销毁
    },
    activated(){//keep-alive组件的钩子函数 每次进入组件时触发
      this.$refs.scro.scrollRefresh();//离开前先进行一次刷新
      this.$refs.scro.scrollTo(0,this.saveScrollY,0);
    },
    deactivated(){//keep-alive组件的钩子函数  离开组件时触发
      this.saveScrollY = this.$refs.scro.scroll.y;
    },
    computed:{
    	showgoods(){//展示的哪一类商品数据
    		return this.goods[this.controngoods].list
    	}
    },
    methods:{
    	gethomerequest(){//轮播图和推荐数据请求
    		homeRequest().then(
          res=>{
            this.bannerData = (res.data.data.banner.list);
            this.recommendData = (res.data.data.recommend.list);
          }
        )
    	},
    	getgoodsreqquest(type){//商品数据请求
    		let page=this.goods[type].page+1;
    		requestgoods(type,page).then(
      	res=>{
      		this.goods[type].list.push(...res.data.data.list);
      		this.goods[type].page+=1;
      	}
      	)
    	},
    	getcon(data){//tabcontrol点击事件
    		switch(data){
    			case 0:
    				this.controngoods="pop"
    				break
    			case 1:
    				this.controngoods="new"
    				break
    			case 2:
    				this.controngoods="sell"
    				break	
    		}
        this.$refs.tabcon1.currenttab = data;//tabcon1和tabcon2状态保持一致
        this.$refs.tabcon2.currenttab = data;//tabcon1和tabcon2状态保持一致
    	},
      contsrol(data){
        this.topisshow(500,data);//回到顶部混入
        this.tabconshow =  data.y>-this.tabcontotop? true :false;//tabcontrol是否隐藏
      },
      loadmore(){//上拉加载更多
        this.getgoodsreqquest(this.controngoods);
        this.$refs.scro.finishPullUp();//告知上拉已结束
        this.$refs.scro.scrollRefresh();//加载完之后要刷新
      }
    }
	}
</script>
<style lang="stylus" scoped>
#Home
  height 100vh
  position relative
.homnavcolor
  background deepPink
  color #fff
.content
  position absolute
  top 44px
  bottom 49px
  left 0
  right 0
  overflow hidden
.addmargin
  margin-top 40px
</style>