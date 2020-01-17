<template>
    <div class="manage_items">
        <ViewCloset 
            @changeShowForm="changeShowForm" 
            @removeItem="removeItem"
            :clothing_items="clothing_items"
        />

        <UpdateClothingForm 
            v-if="showForm && clothing_item_id"
            @updateItem="updateItem"
            :category="this.category"
            :default_values="clothing_item"
        />

        <AddClothingForm 
            v-else-if="showForm && clothing_item_id == undefined"
            @addItem="addItem"
            :category="this.category"
        />
    </div>
</template>

<script>
import ViewCloset from '@/components/closet_items/ViewCloset'
import UpdateClothingForm from '@/components/manage_items/UpdateClothingForm'
import AddClothingForm from '@/components/manage_items/AddClothingForm'

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
        addItem(data){
            this.$store.dispatch("addClothingItem", data)
        },
        updateItem(id, data){
            const payload = {
                id: id,
                clothing_item: data
            }
            this.$store.dispatch("updateClothingItem", payload)
        },
        removeItem(id){
            this.showForm = false
            this.$store.dispatch("removeClothingItem", id)
        }
    },
    watch: {
        clothing_items(){
            if(this.clothing_items.length == 0){
                this.showForm = true
            }   
        }
    }
}

</script>

<style lang="scss">
    .manage_items {
        height: 100%;
        display: flex;
    }
</style>