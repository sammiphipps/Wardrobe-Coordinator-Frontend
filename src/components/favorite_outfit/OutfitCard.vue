<template>
    <div class="outfit-card">
        <img 
            v-for="item in outfit.clothing_items" 
            :key="item.id" 
            :src="item.image_url" 
            :alt="item.clothing_type"
        />
    </div>
</template>

<script>
export default {
    props:{
        outfit: Object,
    }
}
</script> 

<style lang="scss">
    .outfit-card{
        display: flex;
        flex-direction: row;
        border-radius: 0.75rem;
        background-color: white;

        img {
            width: 6rem;
            height: 6rem;
            position: relative;
        }

        img:nth-of-type(1){
            z-index: 1;
        }

        img:nth-of-type(2){
            margin-left: -4.5rem;
            margin-top: 4rem;
        }

        img:only-of-type {
            width: calc(12rem - 4.5rem);
            height: calc(4rem + 6rem);
        }
    }
</style>