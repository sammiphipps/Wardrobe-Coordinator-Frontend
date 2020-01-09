<template>
    <div class="closet-details">
        <ul>
            <li v-for="item in clothing_items" :key="item.id">
                <ClothingCard :item="item" />
            </li>
        </ul>
    </div>
</template>

<script>
import ClothingCard from '@/components/ClothingCard'

export default {
    components:{
        ClothingCard
    },
    props:{
        clothing_items: Array
    }
}
</script>

<style lang="scss">
@import '@/styles/_colors.scss';

.closet-details {
    
    background-color: $primary-color2;

    ul {
        list-style: none;
        display: flex;
        flex-flow: row wrap;
        padding: 0;
        margin: 0;

        li{
            padding: 0.5rem;
            margin: 0.5rem;
            background-color: darkgray;
            border-radius: 0.75rem;
        }
    }
}
</style>