import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from '../layout'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: layout
  }
]
export default new VueRouter({
  mode: 'history',
  routes
})
