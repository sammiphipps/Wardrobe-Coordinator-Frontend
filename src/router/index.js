import Vue from 'vue'
import VueRouter from 'vue-router'

import ViewCloset from "@/views/ViewCloset"
import Outfit from '@/views/Outfit'
import ManageClothing from '@/views/ManageClothing'
import LoginScreen from '@/views/LoginScreen'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: "login",
    component: LoginScreen,
  },
  {
    path: '/closet',
    name: 'closet',
    component: ViewCloset,
    children: [{
      name: "outfit",
      path: "/outfit",
      component: Outfit
    }]
  }, {
    path: '/manage_clothing',
    name: 'manage clothing',
    component: ManageClothing,
    children: [{
      name: 'edit clothing',
      path: '/manage_clothing/:id',
      component: ManageClothing
    }]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
