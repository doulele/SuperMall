export default {
  addshopcar(context,payload){//动态添加购物车列表
    let sameProduct = context.state.currentproductlist.find(item => payload.iid===item.iid);//当有相同产品的时候就返回相同产品
    if (sameProduct) {
      context.commit('sameProductchange',sameProduct);
    }else{//判断payload是否存在,存在就设置个数属性并添加到购物车列表
      context.commit('addproduct',payload)
    }
  },
  cartotal(context,payload){
    context.commit('cartotal',payload);
  }
}