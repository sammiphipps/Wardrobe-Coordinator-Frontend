<template>
    <div class="closet-details">
        <ul>
            <li 
                v-for="item in clothing_items" 
                :key="item.id" 
                v-on:click="changeShowForm"
            >
                <router-link :to="{
                    name: 'edit clothing', 
                    params: { id: item.id }
                }">
                    <ClothingCard :item="item" />
                </router-link>
            </li>
            <li class="add_item" v-on:click="changeShowForm">
                <router-link :to="{
                    name: 'manage clothing'
                }">
                    <span>
                        <font-awesome-icon icon="plus" class="icon"/>
                    </span>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import ClothingCard from '@/components/closet_items/ClothingCard'

export default {
    components:{
        ClothingCard
    },
    props:{
        clothing_items: Array
    },
    methods: {
        changeShowForm(){
            this.$emit("changeShowForm")
        }
    }
}
</script>

<style lang="scss">
@import '@/styles/_colors.scss';

.closet-details {

    background-color: $primary-color;
    height: 96%;
    overflow: auto;

    ul {
        list-style: none;
        display: flex;
        flex-flow: row wrap;
        padding: 0;
        margin: 0;

        li{
            padding: 0.5rem;
            margin: 0.5rem;
            background-color: $card_color;
            border-radius: 0.75rem;
            cursor: pointer; 
        }

        .add_item{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            align-self:center;
            width: fit-content;
            height: fit-content;
            padding: 0;
            margin-left: 3.25rem;

            span: {
                width: 100%;
                height: 100%;
            }

            .icon{
                padding: 1rem;
            }
        }

        .add_item:hover {
            opacity: 0.85;
        }
    }
}
</style>