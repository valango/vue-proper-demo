import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.mixin(require('vue-proper')(require('./ui-settings')))

new Vue({
  render: h => h(App),
}).$mount('#app')
