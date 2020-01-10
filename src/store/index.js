import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    clothing_items : [],
    clothing_category_displayed : "top",
    outfit : {}
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
    setClothingCategoryDisplayed(state, new_category){
      state.clothing_category_displayed = new_category
    },
    setOutfit(state, payload){
      state.outfit[payload.category] = payload.id
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
    changeClothingCategory({commit}, new_clothing_category){
      commit("setClothingCategoryDisplayed", new_clothing_category)
    },
    outfitSelected({commit}, item){
      if(item.clothing_type.includes("dress")){
        commit("setOutfit", {
          category: item.clothing_category.name,
          id: item.id
        })
        commit("setOutfit", {
          category: "bottom",
          id: -1
        })
      } else {
        commit("setOutfit", {
          category: item.clothing_category.name,
          id: item.id
        })
      }
    }
  },
  modules: {
  }
})
