<template>
    <aside class="outfit">
        <OutfitTop v-if="top.image_url" :top="top" />
        <OutfitBottom v-if="bottom.image_url" :bottom="bottom" />
        <button @click="clearOutfit">
            <font-awesome-icon icon="eraser"/>
            Clear
        </button>
    </aside>
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
    },
    methods:{
        clearOutfit(){
            this.$store.dispatch("clearOutfit")
        }
    }
}
</script>

<style lang="scss">

    .outfit{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;

        img {
            padding: 0;
            background-color: transparent;
        }

        button {
            width: fit-content;
            padding: 0.25rem 0.5rem 0.25rem 0.5rem;
            margin: 1rem;
            align-self: center;
        }

        button:only-child{
            display: none;
        }
    } 
</style>