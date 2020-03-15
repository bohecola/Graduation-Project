import Vue from 'vue'
import App from './App.vue'
import router from './router'

// font-awesome
import './fontawesome.js'

// import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'



Vue.config.productionTip = false

// 解决移动端300ms延迟
// FastClick.attach(document.body)

// 使用懒加载插件
// Vue.use(VueLazyLoad,{
//   loading: require('')
// })

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
