<template>
    <div class="outfit">
        <div v-if="top.image_url" class="top">
            <img 
                :src="top.image_url"
                :alt="top.clothing_type"
            />
        </div>
        <div v-if="bottom.image_url" class="bottom">
            <img 
                :src="bottom.image_url"
                :alt="bottom.clothing_type"
            />
        </div>
    </div>
</template>

<script>
export default {
    computed:{
        top(){
            return this.$store.state.top
        },
        bottom(){
            return this.$store.state.bottom
        }
    }
}
</script>

<style lang="scss">
.outfit{
    margin-left: 2%;
    margin-top: 3%;
    display: flex;
    flex-direction: column;


}
</style>