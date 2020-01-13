<template>
    <div class="manage_items">
        <ViewCloset :clothing_items="clothing_items"/>
        <ClothingForm />
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
    computed: {
        clothing_items(){
            return this.$store.state.clothing_items
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