import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus, faTimes, faEraser} from '@fortawesome/free-solid-svg-icons'
import { faImages, faStar } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {Plugin} from 'vue-fragment'

library.add(faPlus, faTimes, faEraser, faImages, faStar)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use (Plugin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
