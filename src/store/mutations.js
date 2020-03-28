export default {
  sameProductchange(state,sameProduct){
    sameProduct.counst++;
    //sameProduct.price = parseInt(sameProduct.price) + parseInt(sameProduct.price)/(sameProduct.counst-1);
  },
  addproduct(state,payload){
    payload.check = false;
    payload.counst = 1;
    state.currentproductlist.push(payload)
  },
  cartotal(state,payload){
    state.cartotal = payload
  }
}