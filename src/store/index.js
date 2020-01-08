import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    clothing_items : [],
    clothing_category_displayed: "top"
  },
  getters: {
    clothing_items_by_category: (state) => (clothing_category) => {
      return state.clothing_items.filter(clothing_item => clothing_item.clothing_category.name == clothing_category)
    }
  },
  mutations: {
    setClothingItems(state, clothing_items){
      state.clothing_items = clothing_items
    }, 
    changeClothingCategoryDisplayed(state, new_clothing_category){
      state.clothing_category_displayed = new_clothing_category
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
    changeClothingCategoryDisplayed({commit}, new_clothing_category){
      commit("changeClothingCategoryDisplayed", new_clothing_category)
    }
  },
  modules: {
  }
})
