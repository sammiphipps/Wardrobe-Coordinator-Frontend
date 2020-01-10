<template>
    <div class="view-closet">
        <ViewCloset 
            :clothing_category_displayed="clothing_category_displayed"
            :clothing_items="clothing_items_by_category"
            @changeClothingCategory="changeClothingCategory"
            @outfitSelection="outfitSelection"
        />
        <router-view />
    </div>
</template>

<script>
import ViewCloset from '@/components/closet_items/ViewCloset'

export default {
    components: {
        ViewCloset,
    },
    computed: {
        clothing_category_displayed(){
            return this.$store.state.clothing_category_displayed
        },
        clothing_items_by_category(){
            return this.$store.getters.clothing_items_by_category(this.clothing_category_displayed)
        }
    },
    methods: {
        changeClothingCategory(new_clothing_category){
            this.$store.dispatch("changeClothingCategory", new_clothing_category)
        },
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