import Vue from 'vue'
import App from './App.vue'
import './plugins/vuetify'

import VueRouter from 'vue-router'
import routes from '@/router/index'

Vue.config.productionTip = false

Vue.use(VueRouter)
const router = new VueRouter({routes});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
