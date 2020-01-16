<template>
    <form class="login" @submit="loginSubmission">
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
export default {
    methods: {
        loginSubmission(event){
            event.preventDefault()
            const formData = new FormData(event.target)
            const submissionData = {
                username: formData.get("username"),
                password: formData.get("password")
            }
            this.$emit("loginSubmission", submissionData)
        }
    }
}
</script>

<style lang="scss">
    .login {
        display: flex;
        flex-direction: column;
        align-items: center;

        fieldset {
            border:none; 
            width: 45%;

            label {
                display: inline-block;
                width: 17%;
            }

            input{
                margin-left: 1%;
                width: 50%;
            }
        }

        button {
            align-self: flex-start;
            padding: 0.25rem 0.5rem 0.25rem 0.5rem;
            margin-left: 44%;
        }
    }
</style>