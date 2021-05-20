import Vue from 'vue'
import VueRouter from 'vue-router'
import createTravel from '../components/newTravel.vue'
import sureTravel from '../components/sureTravel.vue'
import cancelTravel from '../components/cancelTravel.vue'
import confirmOrder from '../components/confirmOrder.vue'
import hasPayOrder from '../components/hasPayOrder.vue'
import cancelOrder from '../components/cancelOrder.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    // component: Home
  },{
    path:'/createTravel',
    name:'createTravel',
    // component: () => import('../components/newTravel.vue')
    component: createTravel
  },{
    path:'/sureTravel',
    name:'sureTravel',
    component: sureTravel
  }
  ,{
    path:'/cancelTravel',
    name:'cancelTravel',
    component: cancelTravel
  },{
    path:'/confirmOrder',
    name:'confirmOrder',
    component: confirmOrder
  },{
    path:'/hasPayOrder',
    name:'hasPayOrder',
    component: hasPayOrder
  },{
    path:'/cancelOrder',
    name:'cancelOrder',
    component: cancelOrder
  }
  // {
  //   // path: '/about',
  //   // name: 'About',
  //   // // route level code-splitting
  //   // // this generates a separate chunk (about.[hash].js) for this route
  //   // // which is lazy-loaded when the route is visited.
  //   // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
