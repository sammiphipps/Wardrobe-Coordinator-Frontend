<template>
    <div class="add-form">
        <p :class="{addFormMessageShow: message, addFormMessageHide: !message}"> {{message}}</p>
        <form @submit="addItem">
            <h2>Add Item</h2>
            <ClothingForm 
                ref="insideForm" 
                :category="category"
                :categories="categories"
            />
            <button type="submit">Add Clothing Item</button>
        </form>
    </div>
</template>

<script>
import ClothingForm from '@/components/manage_items/ClothingForm.vue'

export default {
    components:{
        ClothingForm
    },
    props:{
        category: String,
        message: String,
        categories: Object
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
            this.$emit("addItem", data)   
            this.$refs.insideForm.setData()
        }
    }
}
</script>

<style lang="scss">
@import '@/styles/_colors.scss';
    .add-form{
        margin-top: 1rem;
        margin-bottom: 1.5rem;
        width: calc(100% - 1.5rem - 1rem);
        max-height: calc(87vh - 1.5rem);
        display: flex;
        flex-direction: column;

        p{
            margin: 0.85rem 0 0.5rem 0;
            padding: 0.5rem;
            width: fit-content;
            align-self: center;
            text-align: center;
            background-color: $primary_color;
        }

        form {
            display: flex;
            flex-direction: column;

            h2 {
                margin: 0.75rem 0 0.5rem 1.5rem;
            }

            button {
                width: fit-content;
                padding: 0.3rem 0.5rem 0.3rem 0.5rem;
                align-self: center;
                cursor: pointer;
            }
        }

    } 

    .addFormMessageShow {
        display: block;
    }

    .addFormMessageHide {
        display: none;
    }

</style>