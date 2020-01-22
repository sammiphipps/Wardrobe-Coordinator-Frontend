<template>
    <img 
        class="clothing-card"
        :src="item.image_url"
        :alt="item.clothing_type"
    />
</template>

<script>
export default {
    props: {
        item: Object
    },
}
</script>

<style lang="scss">
    .clothing-card{
        width: 7rem;
        height: 10rem;
        border-radius: 0.75rem;
        background-color: white;
    }

    .clothing-card:hover{
        opacity: 0.85;
    }
    
</style>