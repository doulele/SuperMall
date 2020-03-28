<template>
	<div class="MyScroll" ref='mysc'>
		<div class="content">
			<slot></slot>
		</div>
	</div>
</template>
<script type="text/javascript">
	import BScroll from 'better-scroll'
  import {debounce} from '../tools/untils.js'

	export default {
		name:'scroll',
    data(){
      return {
        scroll:null
      }
    },
    props:{
      probType:{
        type:Number,
        default:0
      },
      pullUpLoad:{
        type:Boolean,
        default:false
      }
    },
		mounted(){
      //创建betterscroll
      this.scroll=new BScroll(this.$refs.mysc,{
        click:true,
        probeType:this.probType,//可在父级设置加载类型
        pullUpLoad:this.pullUpLoad//可在父级设置要不要加载更多功能
      });

      //监听betterscroll
      this.scroll.on('scroll',(position)=>{
        this.$emit('contentscroll',position)
      });

      //上拉加载更多 一定要设置pullUpLoad为true才行 请求完之后要调用finishPullUp 然后刷新一下scroll
      this.scroll.on('pullingUp',()=>{
        this.$emit('loadmore');//将需要加载更多状态提交给父级
      });
      
		},
    methods:{
      scrollTo(x,y,time=300){
        this.scroll.scrollTo(x,y,time)
      },
      finishPullUp(){
         this.scroll.finishPullUp();
       },
      scrollRefresh(){
        this.$bus.$on('imgloaded',()=>{//监听总线里的imgload事件
          //this.scroll.refresh();
          debounce(this.scroll.refresh(),50);//添加防抖函数，优化refresh次数
        });
      }
    }
	}
</script>
<style lang="stylus" scoped>
  .MyScroll
    width 100% 
</style>