<template>
    <div class="update-form">
        <p :class="{updateFormMessageShow: message, updateFormMessageHide: !message}"> {{message}}</p>
        <form @submit="updateItem">
            <h2>Update Item</h2>
            <ClothingForm 
                :default_values="default_values" 
                :category_selected="category_selected"
                :category_info="category_info"
            />
            <button type="submit">Update</button>
        </form>
    </div>
</template>

<script>
import ClothingForm from '@/components/manage_items/ClothingForm'

export default {
    components:{
        ClothingForm
    },
    props:{
        category_selected: String,
        default_values: Object,
        message: String,
        category_info: Object
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

@import '@/styles/_colors.scss';

    .update-form{
        margin-top: 1rem;
        margin-bottom: 1.5rem;
        width:calc(100% - 1.5rem - 1rem);
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

        form{
            display: flex;
            flex-direction: column;

            h2 {
                margin: 0.5rem 0 0.5rem 1.5rem;
            }

            button {
                width: fit-content;
                padding: 0.3rem 0.5rem 0.3rem 0.5rem;
                align-self: center;
                cursor: pointer;
            }
        }
    } 

    .updateFormMessageShow {
        display: block;
    }

    .updateFormMessageHide {
        display: none;
    }

</style>