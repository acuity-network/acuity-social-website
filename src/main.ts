import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import i18n from './i18n'

Vue.config.productionTip = false

import activeAccount from './lib/activeAccount'
Vue.prototype.$activeAccount = activeAccount

import AcuityClient from './lib/AcuityClient'
Vue.prototype.$acuityClient = new AcuityClient()

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount('#app')
