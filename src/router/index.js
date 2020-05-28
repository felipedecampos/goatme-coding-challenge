import Vue from 'vue'
import VueRouter from 'vue-router'
import Swapi from '../views/Swapi.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Swapi',
    component: Swapi
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
