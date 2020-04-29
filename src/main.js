import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

const proper = require('./ajut/index')

Vue.mixin(proper(require('./ui-settings')))

Vue.prototype.$p = (f, c = '') => proper.texts(f, c, false)
Vue.prototype.$p.set = (d) => proper.texts.set(d)
Vue.prototype.$p.lang = 'en'

new Vue({
  render: h => h(App)
}).$mount('#app')
