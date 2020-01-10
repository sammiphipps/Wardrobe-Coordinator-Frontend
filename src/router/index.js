import Vue from 'vue'
import VueRouter from 'vue-router'

import ViewCloset from "@/views/ViewCloset"
import Outfit from '@/views/Outfit'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: ViewCloset,
    children: [{
      name: "outfit",
      path: "/outfit",
      component: Outfit
    }]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
