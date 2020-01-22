<template>
    <aside class="outfit">
        <p :class="{outfitMessageShow: message, outfitMessageHide: !message}">{{message}}</p>
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
    data(){
        return {
            message: ""
        }
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
            this.$store.dispatch("favOutfit").then(() => this.message = "Item has been saved in your Favorite Outfits tab.")
        }
    },
    watch:{
        top(){
            this.message = ""
        },
        bottom(){
            this.message = ""
        }
    }
}
</script>

<style lang="scss">
@import '@/styles/_colors.scss';
    .outfit{
        width: 100%;
        height: calc(87vh - 1.5rem);
        display: flex;
        flex-direction: column;
        justify-content: center;

        p{
            margin: 0.85rem 0 0.5rem 0;
            padding: 0.5rem;
            width: fit-content;
            align-self: center;
            text-align: center;
            background-color: $primary_color;
        }

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

        .outfit-button-container:only-of-type{
            display: none;
        }
    } 

    .outfitMessageShow{
        display: block;
    }

    .outfitMessageHide{
        display: none;
    }
</style>