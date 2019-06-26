import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// Global filters
Vue.filter('cuttingUntil50', value => {
  if (!value || typeof(value) != 'string') {
    return ''
  }
  value = value.slice(0, 50)
  return value
})

new Vue({
  render: h => h(App),
}).$mount('#app')
