import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    clothing_items : [],
    top: {},
    bottom: {},
    user: {}
  },
  getters: {
    clothing_items_by_category: (state) => (clothing_category) => {
      return state.clothing_items.filter(item => item.clothing_category.name == clothing_category)
    },
    clothing_item: (state) => (id) => {
      return state.clothing_items.find(item => item.id == id)
    }
  },
  mutations: {
    setClothingItems(state, clothing_items){
      state.clothing_items = clothing_items
    }, 
    setTop(state, clothing_item){
      state.top = clothing_item
    },
    setBottom(state, clothing_item){
      state.bottom = clothing_item
    },
    addClothingItem(state, clothing_item){
      state.clothing_items = [...this.state.clothing_items, clothing_item]
    },
    updateClothingItem(state, information){
     const newClothingItemArray = state.clothing_items.map(item => {
       if(item.id == information.id){
         Object.assign(item, information)
       }
       return item
     })
     state.clothing_items = newClothingItemArray
    },
    removeClothingItem(state, id){
      const newClothingItemArray = state.clothing_items.filter(item => {
        return item.id !== id
      })
      state.clothing_items = newClothingItemArray
    },
    login(state, userinfo){
      state.user = {
        id: userinfo.user_id,
        username: userinfo.username
      }
      localStorage.setItem("token", userinfo.token)
      router.replace({name: "closet"})
    }
  },
  actions: {
    fetchClothingItems({commit}){
      fetch("http://localhost:3000/clothing_items")
        .then(response => response.json())
        .then(clothing_items => {
          commit("setClothingItems", clothing_items)
        })
    },
    outfitSelected({commit}, item){
      if(item.clothing_category.name == 'top'){
        commit("setTop", item)
      } else {
        commit("setBottom", item)
      }
    },
    addClothingItem({commit}, clothing_item){
      fetch("http://localhost:3000/clothing_items", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({clothing_item: clothing_item})
      }).then(response => response.json())
        .then(item => {
          commit("addClothingItem", item)
        })
        .catch(error => console.log(error))
    },
    updateClothingItem({commit}, information){
      fetch(`http://localhost:3000/clothing_items/${information.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({clothing_item: information.clothing_item})
      }).then(response => response.json())
        .then(item => {
          commit("updateClothingItem", item)
        }).catch(error => console.log(error))
    },
    removeClothingItem({commit}, id){
      fetch(`http://localhost:3000/clothing_items/${id}`, {
        method: "DELETE"
      }).then(() => {
        commit("removeClothingItem", id)
      }).catch(error => console.log(error))
    },
    login({commit}, submissionData){
      fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: submissionData.username,
          password: submissionData.password
        })
      }).then(response => response.json())
        .then(information => {
          commit("login", information)
        }).catch(error => console.log("error", error))
    }
  },
  modules: {
  }
})
