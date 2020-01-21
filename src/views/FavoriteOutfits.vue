<template>
    <div class="favorite-outfits">
        <div class="closet">
            <FavOutfitClosetDetails :outfits="outfits"/>
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

}
</script>

<style lang="scss">
    .favorite-outfits{
        height: 100%;
        display: flex;
    }


</style>