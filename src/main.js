import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import VuexStore from './store'
import vuetify from './plugins/vuetify';
import axios from "axios"
import '@fortawesome/fontawesome-free/css/all.css'

Vue.use(vuetify, {
    iconfont: 'fa'
})
Vue.use(Vuex)

Vue.config.productionTip = false

import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

const store = new Vuex.Store(VuexStore)
let {state} = VuexStore.modules.sw

state.$api  = axios.create({
    baseURL: 'https://swapi.dev/api/'
})

state.$api.interceptors.request.use( config => {
    config.headers.common['Authorization'] = state.token
return config
}, error => {
    return Promise.reject(error)
})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
