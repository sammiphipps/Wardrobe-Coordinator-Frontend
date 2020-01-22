<template>
    <div class="fav-closet-details">
        <ul>
            <li v-for="outfit in outfits" :key="outfit.id">
                <span class="remove-button" @click="removeOutfit(outfit.id)">
                    <font-awesome-icon icon="times" size="xs"/>
                </span>
                <router-link :to="{name: 'show outfit'}">
                    <OutfitCard @click.native="viewOutfit(outfit.clothing_items)" :outfit="outfit" />
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import OutfitCard from '@/components/favorite_outfit/OutfitCard'

export default {
    components:{
        OutfitCard,
    },
    props: {
        outfits: Array,
    },
    methods:{
        viewOutfit(clothing_items){
            this.$emit("viewOutfit", clothing_items)
        },
        removeOutfit(outfit_id){
            this.$emit("removeFavOutfit", outfit_id)
        }
    }
}
</script>

<style lang="scss">
@import '@/styles/_colors.scss';

    .fav-closet-details {
        height: 85vh;
        background-color: $primary-color;
        overflow: auto;
        margin-top: 1.9rem;

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
                
                .remove-button {
                    align-self: flex-end;
                    padding: 0;
                    width: 1rem;
                    height: 1rem;
                    display: flex;
                    justify-content: center;
                    margin-top: -0.5rem;
                }
            }
        }
    }
</style>