<template>
    <form v-on:submit="addItem">
        <h2>Add Item</h2>
        <ClothingForm :category="category"/>
        <button type="submit">Add Clothing Item</button>
    </form>
</template>

<script>
import ClothingForm from '@/components/manage_items/ClothingForm.vue'

export default {
    components:{
        ClothingForm
    },
    props:{
        category: String
    },
    methods:{
        addItem(event){
            event.preventDefault()
            const formData = new FormData(event.target)
            const data = {
                image_url: formData.get('image_url'),
                clothing_type: formData.get('clothing_type'),
                color: formData.get('color'),
                clothing_category_id: formData.get('clothing_category')
            }
            event.target.reset
            this.$emit("addItem", data)
        }
    }
}
</script>

<style lang="scss">

    form{
        margin-left: 2%;
        margin-top: 3%;
        height: 97%;
        width: 48%;
        display: flex;
        flex-direction: column;

        h2 {
            margin: 0.5rem 0 0.5rem 0;
        }

        button {
            width: fit-content;
            padding: 0.3rem 0.5rem 0.3rem 0.5rem;
            align-self: center;
            cursor: pointer;
        }
    } 

</style>