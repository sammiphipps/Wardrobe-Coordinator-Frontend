<template>
    <div class="favorite-outfits">
        <div class="closet">
            <FavOutfitClosetDetails @viewOutfit="viewOutfit" :outfits="outfits"/>
        </div>
        <router-view />
    </div>
</template>

<script>
import FavOutfitClosetDetails from '@/components/favorite_outfit/FavOutfitClosetDetails'

export default {
    created(){
        const token = localStorage.getItem('token')
        if(token == null){
            this.$router.replace({name: 'login'})
        } else {
            this.$store.dispatch("fetchFavOutfits")
        }
    },
    components:{
        FavOutfitClosetDetails
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