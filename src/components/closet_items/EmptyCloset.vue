<template>
    <div class="empty-closet">
        <img src="@/assets/empty.jpeg"/>
        <p>{{message}}</p>
    </div>
</template>

<script>
export default {
    props: {
        message: String
    }
}
</script>

<style lang="scss">
@import '@/styles/_colors.scss';

.empty-closet{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100%;

    img {
        width: 35%;
        height: 90%;
    }

    p {
        width: calc(50% - 1rem);
        height: fit-content;
        padding: 1rem;
        margin-left: 1rem;
        text-align: center;
        background-color: $primary_color;
        border-radius: 1rem;
    }

}
</style>