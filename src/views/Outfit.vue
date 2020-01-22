<template>
    <aside class="outfit">
        <OutfitTop v-if="top.image_url" :top="top" />
        <OutfitBottom v-if="bottom.image_url" :bottom="bottom" />
        <div class="outfit-button-container" v-if="path != '/favorite_outfits/'">
            <button @click="clearOutfit">
                <font-awesome-icon icon="eraser"/>
                Clear
            </button>
            <button @click="favOutfit">
                <font-awesome-icon :icon="['far', 'star']"/>
                Favorite
            </button>
        </div>
    </aside>
</template>

<script>
import OutfitTop from '@/components/outfit/OutfitTop'
import OutfitBottom from '@/components/outfit/OutfitBottom'

export default {
    created(){
        this.clearOutfit()
    },
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
        },
        path(){
            return this.$route.path
        }
    },
    methods:{
        clearOutfit(){
            this.$store.dispatch("clearOutfit")
        },
        favOutfit(){
            this.$store.dispatch("favOutfit")
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

        .outfit-button-container{
            align-self: center;
            margin-top: 1rem;

            button {
                width: fit-content;
                padding: 0.25rem 0.5rem 0.25rem 0.5rem;
                margin: 0 0.5rem 0 0.5rem;
                align-self: center;
            }
        }

        .outfit-button-container:only-child{
            display: none;
        }
    } 
</style>