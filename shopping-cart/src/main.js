import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import mint from 'mint-ui'
import VueResource from 'vue-resource'

Vue.use(mint)
Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
