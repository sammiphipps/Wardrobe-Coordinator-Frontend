import Vue from 'vue'
import VueRouter from 'vue-router'

import ViewCloset from "@/views/ViewCloset"
import Outfit from '@/views/Outfit'
import ManageClothing from '@/views/ManageClothing'
import LoginScreen from '@/views/LoginScreen'
import FavoriteOutfits from '@/views/FavoriteOutfits'

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
      path: "",
      name: "outfit",
      component: Outfit
    }]
  }, {
    path: '/manage_clothing',
    name: 'manage clothing',
    component: ManageClothing,
    children: [{
      path: '/manage_clothing/:id',
      name: 'edit clothing',
      component: ManageClothing
    }]
  },{
    path: '/favorite_outfits',
    name: "favorite outfits",
    component: FavoriteOutfits,
    children: [{
      path: "",
      name: "show outfit",
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
