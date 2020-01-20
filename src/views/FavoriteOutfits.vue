<template>
    <div class="favorite-outfits">
        <div class="closet">
            <div class="closet-details">
                <ul>
                    <li>
                        <router-link :to="{name: 'show outfit'}">
                            <img src="https://i.pinimg.com/originals/01/82/a3/0182a3e739a58f7f217a34eb7341d9e3.png" />
                            <img src="https://i.pinimg.com/originals/1a/65/5f/1a655f78d186fe1cdfcc331088c262d5.png" />
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{name: 'show outfit'}">
                            <img src="https://i.ya-webdesign.com/images/women-dress-png-6.png"/>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
        <router-view />
    </div>
</template>

<script>
</script>

<style lang="scss">
@import '@/styles/_colors.scss';

    .favorite-outfits{
        height: 100%;
        display: flex;

        .closet {
            .closet-details {
                max-height: calc(100% - 1.54rem);
                background-color: $primary-color;
                overflow: auto;
                margin-top: 1.9rem;

                ul {
                    li{
                        
                        a {
                            display: flex;
                            flex-direction: row;
                            border-radius: 0.75rem;
                            background-color: white;

                            img {
                                width: 6rem;
                                height: 6rem;
                                position: relative;
                            }

                            img:nth-of-type(1){
                                z-index: 1;
                            }

                            img:nth-of-type(2){
                                margin-left: -4.5rem;
                                margin-top: 4rem;
                            }

                            img:only-of-type {
                                width: calc(12rem - 4.5rem);
                                height: calc(4rem + 6rem);
                            }
                        }
                    }
                }
            }
        }
    }


</style>