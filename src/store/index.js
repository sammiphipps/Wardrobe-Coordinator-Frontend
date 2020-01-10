import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    clothing_items : [],
    top: {},
    bottom: {}
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
    }
  },
  modules: {
  }
})
