import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible/index.js'
import 'modern-css-reset/src/reset.css'
import '@/assets/js/iconfont.js'
// 引入基础组件库
import baseComponents from './components/baseComponentsList'
Vue.use(baseComponents)

Vue.config.productionTip = false
// 全局组件
new Vue({
  render: (h) => h(App),
  router,
  store
}).$mount('#app')
