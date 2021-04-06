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
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;

        img {
            width: 9rem;
            height: auto;
        }

        img:hover {
            opacity: 1;
        }
    }

</style>