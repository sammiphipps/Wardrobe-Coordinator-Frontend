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
</style>