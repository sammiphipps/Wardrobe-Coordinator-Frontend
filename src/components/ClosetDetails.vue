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
.closet-details {
    ul {
        list-style: none;
        display: flex;
        flex-flow: row wrap;
        padding: 0;
        margin: 0;
    }
}
</style>