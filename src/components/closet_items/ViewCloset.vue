<template>
    <div class="closet">

    <!-- Tabs for Tops, Bottoms and possibly Accessories, which match up to the Clothing Categories --> 
        <div class="tabs">
            <button class="tablink" @click="changeClothingCategoryDisplayed('top')">Tops</button>
            <button class="tablink" @click="changeClothingCategoryDisplayed('bottom')">Bottoms</button>
        </div>

        <ClosetDetails :clothing_items="clothing_items" />
    </div>
</template>

<script>
import ClosetDetails from "@/components/closet_items/ClosetDetails"

export default {
    components:{
        ClosetDetails
    },
    props: {
        clothing_category_displayed: String,
        clothing_items: Array,
    },
    methods: {
        changeClothingCategoryDisplayed(new_clothing_category){
            this.$emit("changeClothingCategoryDisplayed", new_clothing_category)
        }
    }
}
</script>

<style lang="scss">
@import '@/styles/_colors.scss';

    .closet {
        height: 100%;

        .tab {
            overflow:hidden;
        }

        .tablink {
            border-top-left-radius: 26%;
            border-top-right-radius: 26%; 
            border: 1px solid $primary_color1;
            cursor: pointer; 
            padding: 0.3rem;
            margin-right: 0.4rem;
            transition: 0.3s;
            font-size: 1rem;
            font-weight: 250;
            font-family: 'Cormorant', serif;
            background-color: $primary_color1;
        }

        .tablink:hover{
            background-color: #ddd;
        }

        .tablink:active{
            background-colo: #ccc;
        }

    }

</style>