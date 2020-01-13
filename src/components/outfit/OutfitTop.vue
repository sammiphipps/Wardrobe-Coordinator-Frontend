<template>
    <div class="top">
        <img 
            :src="top.image_url"
            :alt="top.clothing_type"
        />
    </div>
</template>

<script>
export default {
    props: {
        top: Object
    }
}
</script>

<style lang="scss">

    .top{
        display: flex;
        justify-content: center; 
        width: 100%;
        height: 100%;

        img {
            width: 30%;
            height: auto;
        }

        img:hover {
            opacity: 1;
        }
    }

</style>