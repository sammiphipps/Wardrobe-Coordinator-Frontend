<template>
    <div class="empty-closet">
        <img src="@/assets/empty.jpeg"/>
        <p>You currently don't have anything in your closet. Please go to the Manage Clothing tab 
        to add your items.</p>
    </div>
</template>

<script>
</script>

<style lang="scss">
@import '@/styles/_colors.scss';

.empty-closet{
    display: flex;
    flex-direction: row;
    justify-content: center;


    img {

    }

    p {

        height: fit-content;
        padding: 1rem;
        margin-left: 1rem;
        align-self: center;
        text-align: center;
        background-color: $primary_color;
        border-radius: 1rem;
    }

}
</style>