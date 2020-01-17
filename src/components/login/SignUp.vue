<template>
    <form class="sign-up-form" @submit="loginSubmission">
        <fieldset>
            <label>Username: </label>
            <input 
                type="text" 
                id="username" 
                name="username" 
                required
            />
        </fieldset>
        <fieldset>
            <label>Password: </label>
            <input
                type="password"
                id="password"
                name="password" 
                required
            />
        </fieldset>
        <button type="submit">Login</button>
    </form>
</template>

<script>
</script>

<style lang="scss">
</style>