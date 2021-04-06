<template>
    <div class="favorite-outfits" v-if="outfits.length !== 0">
        <div class="closet">
            <FavOutfitClosetDetails 
                @removeFavOutfit="removeFavOutfit"
                @viewOutfit="viewOutfit" 
                :outfits="outfits"
            />
        </div>
        <router-view />
    </div>
    <EmptyCloset 
        v-else 
        message="You currently don't have any outfits saved. 
                To save an outfit please go to the Closet tab and favorite those outfits 
                that you like. If there is nothing within your closet, please go to the Manage 
                Clothing tab to add your items."
    />
</template>

<script>
import FavOutfitClosetDetails from '@/components/favorite_outfit/FavOutfitClosetDetails'
import EmptyCloset from '@/components/closet_items/EmptyCloset'
import store from '@/store'

export default {
    created(){
        const token = localStorage.getItem('token')
        if(token == null){
            this.$router.replace({name: 'login'})
        }
    },
    components:{
        FavOutfitClosetDetails,
        EmptyCloset
    },
    beforeRouteEnter: (to, from, next) => {
        store.dispatch("fetchFavOutfits").then(res => {
            if(res == "Finished Loading"){
                next()
            } else {
                next(false)
            }
        })
    },
    computed: {
        outfits(){
            return this.$store.state.fav_outfits
        }
    },
    methods:{
        viewOutfit(clothing_items){
            this.$store.dispatch("clearOutfit")
            clothing_items.map(clothing_item => {
                this.$store.dispatch("outfitSelected", clothing_item)
            })
        },
        removeFavOutfit(outfit_id){
            this.$store.dispatch("removeFavOutfit", outfit_id)
        }
    }
}
</script>

<style lang="scss">
    .favorite-outfits{
        height: 100%;
        display: flex;
    }
</style>