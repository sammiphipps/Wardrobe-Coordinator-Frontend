import Vue from 'vue'
import VueRouter from 'vue-router'

import ViewCloset from "@/views/ViewCloset"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: ViewCloset
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
