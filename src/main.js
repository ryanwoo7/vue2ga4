// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import VueAnalytics from 'vue-analytics'
import VueGtag from 'vue-gtag'

Vue.config.productionTip = false
Vue.use(VueGtag, {
  config: { id: "G-QR323DRMSZ" }
}, router);
/* // GA初始化
if (process.env.GA) {
  Vue.use(VueAnalytics, {
    id: process.env.GA, // 从配置中读取
    disableScriptLoader: true, // 必须在html中完成初始化，这里显式禁止去下载ga脚本
    router, // 确保路由切换时可以自动统计
    autoTracking: {
      pageviewOnLoad: false // 当通过网址进来时已经GA在初始化时就发起一次pageview的统计，这里不要重复统计
    }
  })
} */

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
})
