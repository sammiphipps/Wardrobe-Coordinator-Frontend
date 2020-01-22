import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    clothing_items : [],
    top: {},
    bottom: {},
    fav_outfits: []
  },
  getters: {
    clothing_items_by_category: (state) => (clothing_category) => {
      return state.clothing_items.filter(item => item.clothing_category.name == clothing_category)
    },
    clothing_item: (state) => (id) => {
      return state.clothing_items.find(item => item.id == id)
    },
    currentOutfit: (state) => {
      const currentOufit = []
      if(state.top.id !== undefined){
        currentOufit.push(state.top)
      }
      if(state.bottom.id !== undefined){
        currentOufit.push(state.bottom)
      }
      return currentOufit
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
    setFavOutfits(state, outfits){
      outfits.forEach(outfit => {
        outfit.clothing_items.sort(item => {
          if(item.clothing_category.name == "top"){
            return -1 
          } else {
            return 1
          }
        })
      })
      state.fav_outfits = outfits
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
    addFavOutfit(state, outfit){
      state.fav_outfits = [...this.state.fav_outfits, outfit]
    },
    removeFavOutfit(state, id){
      const newFavOutfitArray = state.fav_outfits.filter(item => {
        return item.id !== id
      })
      state.fav_outfits = newFavOutfitArray
    }
  },
  actions: {
    fetchClothingItems({commit}){
      const token = localStorage.getItem("token")
      return fetch("http://localhost:3000/user_clothing_items", {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      })
        .then(response => response.json())
        .then(clothing_items => {
          commit("setClothingItems", clothing_items)
        }).then(() => "Finished Loading")
    },
    fetchFavOutfits({commit}){
      const token = localStorage.getItem("token")
      return fetch("http://localhost:3000/user_outfits", {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      }).then(response => response.json())
        .then(outfits => {
          commit("setFavOutfits", outfits)
        }).then(() => "Finished Loading")
    },
    outfitSelected({commit}, item){
      if(item.clothing_category.name == 'top'){
        commit("setTop", item)
      } else {
        commit("setBottom", item)
      }
    },
    addClothingItem({commit}, clothing_item){
      const token = localStorage.getItem("token")
      fetch("http://localhost:3000/clothing_items", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`,
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
      const token = localStorage.getItem("token")
      fetch(`http://localhost:3000/clothing_items/${information.id}`, {
        method: "PUT",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({clothing_item: information.clothing_item})
      }).then(response => response.json())
        .then(item => {
          commit("updateClothingItem", item)
        }).then(() => alert("Item has been updated."))
    },
    removeClothingItem({commit}, id){
      const token = localStorage.getItem("token")
      fetch(`http://localhost:3000/clothing_items/${id}`, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      }).then(() => {
        commit("removeClothingItem", id)
      }).catch(error => console.log(error))
    },
    clearOutfit({commit}){
      commit("setTop", {})
      commit("setBottom", {})
    },
    favOutfit({getters, commit}){
      const token = localStorage.getItem("token")
      const currentOutfit = getters.currentOutfit 
      const currentOutfitIds = currentOutfit.map(item => item.id)
      fetch("http://localhost:3000/outfits", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json"
        },
      }).then(response => response.json())
        .then(outfit => {
          fetch("http://localhost:3000/multiple_outfit_items", {
            method: "POST",
            headers: {
              "Authorization": `Bearer ${token}`,
              "Content-Type": "application/json"
            },
            body: JSON.stringify({outfit_item: {
              outfit_id: outfit.id,
              items: currentOutfitIds
            }})
          }).then(response => response.json())
            .then(outfitItemReturn => {
              commit("addFavOutfit", outfitItemReturn)
            }).then(() => alert("Item has been saved."))
        })
    },
    removeFavOutfit({commit}, outfit_id){
      const token = localStorage.getItem("token")
      fetch(`http://localhost:3000/outfits/${outfit_id}`, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json"
        },
      }).then(() => {
        commit("removeFavOutfit", outfit_id)
      })
    }
  },
  modules: {
  }
})
