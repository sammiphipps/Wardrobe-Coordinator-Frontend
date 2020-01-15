<template>
    <form class="update-form" @submit="updateItem">
        <h2>Update Item</h2>
        <ClothingForm :default_values="default_values" :category="category"/>
        <button type="submit">Update</button>
    </form>
</template>

<script>
import ClothingForm from '@/components/manage_items/ClothingForm'

export default {
    components:{
        ClothingForm
    },
    props:{
        category: String,
        default_values: Object
    },
    methods:{
        updateItem(event){
            event.preventDefault()
            const formData = new FormData(event.target)
            const data = {
                image_url: formData.get('image_url'),
                clothing_type: formData.get('clothing_type'),
                color: formData.get('color'),
                clothing_category_id: formData.get('clothing_category')
            }
            this.$emit("updateItem", this.default_values.id, data)
        }
    }
}
</script>

<style lang="scss">

    .update-form{
        margin-left: 2%;
        margin-top: 3%;
        height: 97%;
        width: 48%;
        display: flex;
        flex-direction: column;

        h2 {
            margin: 0.75rem 0 0.5rem 0;
        }

        button {
            width: fit-content;
            padding: 0.3rem 0.5rem 0.3rem 0.5rem;
            align-self: center;
            cursor: pointer;
        }
    } 

</style>