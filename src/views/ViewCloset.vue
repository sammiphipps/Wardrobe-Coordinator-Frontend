<template>
    <div class="view-closet" v-if="clothing_items.length !== 0">
        <ViewCloset 
            :clothing_items="clothing_items"
            @outfitSelection="outfitSelection"
        />
        <router-view />
    </div>
    <EmptyCloset v-else/>
</template>

<script>
import ViewCloset from '@/components/closet_items/ViewCloset'
import EmptyCloset from '@/components/closet_items/EmptyCloset'

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
        EmptyCloset
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