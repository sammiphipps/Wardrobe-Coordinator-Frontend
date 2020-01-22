<template>
    <div class="closet-details">
        <ul>
            <li v-for="item in clothing_items" :key="item.id">
                <router-link
                    :to="{
                        name: 'outfit'
                    }"
                >
                    <ClothingCard @click.native="outfitSelection(item)" :item="item" />
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import ClothingCard from '@/components/closet_items/ClothingCard'

export default {
    components:{
        ClothingCard
    },
    props:{
        clothing_items: Array
    },
    methods: {
        outfitSelection(item){
            this.$emit("outfitSelection", item)
        }
    }
}
</script>

<style lang="scss">
@import '@/styles/_colors.scss';

.closet-details {
    min-height: 12rem;
    max-height: calc(100% - 1.54rem);
    background-color: $primary-color;
    overflow: auto;

    ul {
        list-style: none;
        display: flex;
        flex-flow: row wrap;
        padding: 0;
        margin: 0;

        li{
            padding: 0.5rem;
            margin: 0.5rem;
            background-color: $card_color;
            border-radius: 0.75rem;
            display: flex;
            flex-direction: column;
            height: fit-content;
            cursor: pointer; 
        }

    }
}
</style>