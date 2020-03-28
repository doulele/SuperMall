import {debounce} from '@/components/common/tools/untils.js'
//回到顶部混入
export const totopMixin = {
  data(){
    return {
      topshow:false
    }
  },
  methods:{
    topclick(){//totop点击事件
      this.$refs.scroll.scrollTo(0,0,500)
    },
    topisshow(height,position){//显示事件
      debounce(()=>{//防抖
           this.topshow = position.y>-height? false : true;//totop是否隐藏
       },100)
    }
  }
}