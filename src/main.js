import Vue from 'vue'
import App from './App.vue'
import Router from './router'
// 引入基础组件库
import baseComponents from './components/baseComponentsList'
Vue.use(baseComponents)

Vue.config.productionTip = false
// 全局组件
new Vue({
  render: (h) => h(App),
  Router
}).$mount('#app')
