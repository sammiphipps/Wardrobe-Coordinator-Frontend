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
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;



        img {
            width: 9rem;
            height: auto;
        }

        img:hover {
            opacity: 1;
        }
    }

</style>