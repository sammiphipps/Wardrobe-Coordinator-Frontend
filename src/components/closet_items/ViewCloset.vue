<template>
    <div class="closet">

    <!-- Tabs for Tops, Bottoms and possibly Accessories, which match up to the Clothing Categories --> 
        <div class="tabs">
            <button 
                class="tablink" 
                @click="changeClothingCategory('top')"
            >Tops</button>
            <button 
                class="tablink" 
                @click="changeClothingCategory('bottom')"
            >Bottoms</button>
        </div>

        <ManageClosetDetails 
            v-if="path.includes('/manage_clothing')" 
            @changeShowForm="changeShowForm" 
            @removeItem="removeItem"
            :clothing_items="clothing_items_by_category" 
        />
        <ClosetDetails 
            v-else 
            @outfitSelection="outfitSelection" 
            :clothing_items="clothing_items_by_category" 
        />
    </div>
</template>

<script>
import ClosetDetails from "@/components/closet_items/ClosetDetails"
import ManageClosetDetails from "@/components/manage_items/ManageClosetDetails"

export default {
    components:{
        ClosetDetails,
        ManageClosetDetails
    },
    props: {
        clothing_items: Array,
    },
    data(){
        return {
            category: "top"
        }
    },
    computed: {
        clothing_items_by_category(){
            return this.$store.getters.clothing_items_by_category(this.category)
        },
        path(){
            return this.$route.path
        }
    },
    methods: {
        changeClothingCategory(new_clothing_category){
            this.category = new_clothing_category
        },
        outfitSelection(item){
            this.$emit("outfitSelection", item)
        },
        changeShowForm(){
            this.$emit("changeShowForm", this.category)
        },
        removeItem(id){
            this.$emit("removeItem", id)
        }
    }
}
</script>

<style lang="scss">
@import '@/styles/_colors.scss';

    .closet {
        margin: 0 0 1.5rem 1.5rem;
        width: calc(100% - 1.5rem);
        max-height: calc(87vh - 1.5rem);

        .tabs{
            overflow:hidden;
        }

        .tablink {
            border-top-left-radius: 0.5rem;
            border-top-right-radius: 0.5rem; 
            border: 1px solid $primary_color;
            cursor: pointer; 
            padding: 0.3rem;
            margin-right: 0.4rem;
            transition: 0.3s;
            font-size: 1rem;
            font-weight: 250;
            font-family: 'Cormorant', serif;
            background-color: $primary_color;
        }

        .tablink:hover{
            background-color: $highlight_color;
        }

    }

    .closet:only-child{
        width: calc(50% - 1.5rem);
    }

</style>