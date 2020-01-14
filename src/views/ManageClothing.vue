<template>
    <div class="manage_items">
        <ViewCloset 
            @changeShowForm="changeShowForm" 
            :clothing_items="clothing_items"
        />

        <UpdateClothingForm 
            v-if="showForm && clothing_item_id"
            @submitHandler="submitClothingItem"
            :category="this.category"
            :default_values="clothing_item"
        />

        <AddClothingForm 
            v-else-if="showForm && clothing_item_id == undefined"
            @submitHandler="submitClothingItem"
            :category="this.category"
        />
    </div>
</template>

<script>
import ViewCloset from '@/components/closet_items/ViewCloset'
import UpdateClothingForm from '@/components/manage_items/UpdateClothingForm'
import AddClothingForm from '@/components/manage_items/AddClothingForm'

export default {
    components: {
        ViewCloset,
        UpdateClothingForm,
        AddClothingForm
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