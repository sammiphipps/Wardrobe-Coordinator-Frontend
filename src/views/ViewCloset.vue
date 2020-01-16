<template>
    <div class="view-closet">
        <ViewCloset 
            :clothing_items="clothing_items"
            @outfitSelection="outfitSelection"
        />
        <router-view />
    </div>
</template>

<script>
import ViewCloset from '@/components/closet_items/ViewCloset'

export default {
    created(){
        const token = localStorage.getItem('token')
        if(token == null){
            this.$router.replace({name: 'login'})
        } else {
            this.$store.dispatch("fetchClothingItems")
        }
    },
    components: {
        ViewCloset,
    },
    computed: {
        clothing_items(){
            return this.$store.state.clothing_items
        }
    },
    methods: {
        outfitSelection(item){
            this.$store.dispatch("outfitSelected", item)
        }
    }
}
</script>

<style lang="scss">

    .view-closet{
        height: 100%;
        display: flex;
    }

</style>