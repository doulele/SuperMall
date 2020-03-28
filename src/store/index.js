import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'

//1.安装vuex插件
Vue.use(Vuex)

//2.创建Store对象
let state = {
  currentproductlist:[],//购物车列表数据
  cartotal:{}
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
//3.挂载在vue实例上
export default store