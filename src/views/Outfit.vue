<template>
    <div class="outfit">
        <OutfitTop v-if="top.image_url" :top="top" />
        <OutfitBottom v-if="bottom.image_url" :bottom="bottom" />
    </div>
</template>

<script>
import OutfitTop from '@/components/outfit/OutfitTop'
import OutfitBottom from '@/components/outfit/OutfitBottom'

export default {
    components:{
        OutfitTop,
        OutfitBottom
    },
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
        height: 96%;
        width: 48%;

        div:only-child{
            img{
                width: 40%;
                height: 50%;
            }
        }
    } 
</style>