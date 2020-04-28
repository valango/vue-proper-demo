import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

const proper = require('vue-proper')

Vue.mixin(proper(require('./ui-settings')))

Vue.prototype.$t = (f, c = '') => proper.texts(f, c, false)
Vue.prototype.$t.set = (d) => proper.texts.set(d)

new Vue({
  render: h => h(App)
}).$mount('#app')
