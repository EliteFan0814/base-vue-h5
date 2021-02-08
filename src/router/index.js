import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from '../layout'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: layout,
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import('@/views/home'),
        meta: { title: '首页' }
      },
      {
        path: 'shopCart',
        name: 'ShopCart',
        component: () => import('@/views/shopCart'),
        meta: { title: '购物车' }
      },
      {
        path: 'order',
        name: 'Order',
        component: () => import('@/views/order'),
        meta: { title: '首页' }
      },
      {
        path: 'my',
        name: 'My',
        component: () => import('@/views/my'),
        meta: { title: '我的' }
      }
    ]
  }
]
export default new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
