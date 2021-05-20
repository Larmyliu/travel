import Vue from 'vue'
import Vuex from 'vuex'
import aboutTravel from './module/aboutTravel'
import aboutOrder from './module/aboutOrder'
Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    aboutTravel,
    aboutOrder
  }
})