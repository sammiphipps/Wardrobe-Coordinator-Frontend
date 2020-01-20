<template>
    <div class="closet-details">
        <ul>
            <li 
                class="manage-card"
                v-for="item in clothing_items" 
                :key="item.id" 
            >
                <span class="remove-button" @click="removeItem(item.id)">
                    <font-awesome-icon icon="times" size="xs"/>
                </span>
                <section @click="changeShowForm">
                    <router-link :to="{
                        name: 'edit clothing', 
                        params: { id: item.id }
                    }">
                        <ClothingCard :item="item" />
                    </router-link>
                </section>
            </li>
            <li class="add_item" @click="changeShowForm">
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
        },
        removeItem(id){
            this.$emit("removeItem", id)
        }
    }
}
</script>

<style lang="scss">
@import '@/styles/_colors.scss';

.closet-details {
    max-height: calc(100% - 1.54rem);
    background-color: $primary-color;
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
            display: flex;
            flex-direction: column;
            height: fit-content;
            cursor: pointer; 

            .remove-button {
                align-self: flex-end;
                padding: 0;
                width: 1rem;
                height: 1rem;
                display: flex;
                justify-content: center;
                margin-top: -0.5rem;
            }

            section{
                a {
                    display: inline-block;
                }
            }
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

            a {
                color: black;

                .icon{
                    padding: 1rem;
                }
            }
        }

        .add_item:only-child{
            margin: 0.5rem 0 0 0.5rem;
        }

        .add_item:hover {
            opacity: 0.85;
        }
    }
}
</style>