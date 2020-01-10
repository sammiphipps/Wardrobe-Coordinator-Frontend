import Vue from 'vue'
import VueRouter from 'vue-router'

import ViewCloset from "@/views/ViewCloset"
import OutfitArea from '@/views/OutfitArea'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: ViewCloset,
    children: [{
      name: "outfit",
      path: "/outfit",
      component: OutfitArea
    }]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
