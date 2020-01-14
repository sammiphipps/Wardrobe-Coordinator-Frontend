<template>
    <form>
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