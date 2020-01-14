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
    },
    addClothingItem(state, clothing_item){
      state.clothing_items = [...this.state.clothing_items, clothing_item]
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
          console.log("fetch success")
          commit("addClothingItem", item)
        })
        .catch(error => console.log(error))
    }
  },
  modules: {
  }
})
