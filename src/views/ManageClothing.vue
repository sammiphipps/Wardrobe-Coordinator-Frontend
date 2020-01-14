<template>
    <div class="manage_items">
        <ViewCloset 
            @changeShowForm="changeShowForm" 
            :clothing_items="clothing_items"
        />
        <ClothingForm 
            v-if="showForm" 
            @submitHandler="submitClothingItem"
            :category="this.category"
            :default_values="clothing_item"
        />
    </div>
</template>

<script>
import ViewCloset from '@/components/closet_items/ViewCloset'
import ClothingForm from '@/components/manage_items/ClothingForm'

export default {
    components: {
        ViewCloset,
        ClothingForm
    },
    data(){
        return {
            showForm: false,
            category: ""
        }
    },
    computed: {
        clothing_items(){
            return this.$store.state.clothing_items
        },
        clothing_item_id(){
            return this.$route.params.id
        },
        clothing_item(){
            return this.$store.getters.clothing_item(this.clothing_item_id)
        }
    },
    methods:{
        changeShowForm(category){
            this.showForm = true
            this.category = category
        },
        submitClothingItem(data){
            this.$store.dispatch("addClothingItem", data)
        }
    },
}

</script>

<style lang="scss">
    .manage_items {
        height: 100%;
        display: flex;
    }
</style>