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
</style>