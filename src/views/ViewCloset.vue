<template>
    <div class="view-closet">
        <ViewCloset 
            :clothing_category_displayed="clothing_category_displayed"
            :clothing_items="clothing_items_by_category"
            @changeClothingCategoryDisplayed="changeClothingCategoryDisplayed"
        />
    </div>
</template>

<script>
import ViewCloset from '@/components/closet_items/ViewCloset'

export default {
    components: {
        ViewCloset,
    },
    mounted(){
        this.$store.dispatch("fetchClothingItems")
    },
    computed: {
        clothing_items(){
            return this.$store.state.clothing_items
        },
        clothing_category_displayed(){
            return this.$store.state.clothing_category_displayed
        },
        clothing_items_by_category(){
            return this.$store.getters.clothing_items_by_category(this.clothing_category_displayed)
        }
    },
    methods: {
        changeClothingCategoryDisplayed(new_clothing_category){
            this.$store.dispatch("changeClothingCategoryDisplayed", new_clothing_category)
        }
    }
}
</script>

<style lang="scss">

    .view-closet{
        height: 100%;
    }

</style>