<template>
    <div class="bottom">
        <img 
            :src="bottom.image_url"
            :alt="bottom.clothing_type"
        />
    </div>
</template>

<script>
export default {
    props: {
        bottom: Object
    }
}
</script>

<style lang="scss">

    .bottom {
        display: flex;
        justify-content: center;
        width: 100%;
        height: 100%;
        margin-top: 2%;

        img {
            width: 30%;
            height: auto;
        }
    }

</style>