<template>
    <div class="outfit">
        <div class="top">
            <h1>Top</h1>
        </div>
        <div class="bottom">
            <h1>Bottom</h1>
        </div>
    </div>
</template>

<script>
export default {
    computed:{
        outfit(){
            return this.$store.state.outfit
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

    .top {
        background-color: red;
    }

    .bottom {
        background-color: blue;
    }

    img {
        width: 100%;
        height: 40%;
    }
}
</style>