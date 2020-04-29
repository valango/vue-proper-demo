import Vue from 'vue'
import App from './App.vue'
import texts from './ui-texts'

Vue.config.productionTip = false

const proper = require('./ajut/index')

Vue.mixin(proper(require('./ui-settings')))

Vue.prototype.$p = (f, c = '') => proper.texts(f, c, false)
Vue.prototype.$p.set = (d) => proper.texts.set(d)
Vue.prototype.$p.lang = 'en'

Vue.prototype.properSave = function (v, f, c) {
  if (this.$p.lang !== 'en' && !texts.en[f]) {
    texts.en[c + '.' + f] = { innerHtml: v }
  }
  return true
}

new Vue({
  render: h => h(App)
}).$mount('#app')
