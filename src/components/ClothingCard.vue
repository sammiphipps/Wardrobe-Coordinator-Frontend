<template>
    <img 
        :src="item.image_url"
        :alt="item.clothing_type"
    />
</template>

<script>
export default {
    props: {
        item: Object
    }
}
</script>

<style lang="scss">
    img{
        width: 8rem;
        height: 10rem;
    }
</style>