<template>
    <form class="signup-form" @submit="createAccountSubmission">
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
                type="type"
                id="password"
                name="password" 
                required
            />
        </fieldset>
        <button type="submit">Create Account</button>
    </form>
</template>

<script>
export default {
    methods:{
        createAccountSubmission(event){
            event.preventDefault()
            const formData = new FormData(event.target)
            const submissionData = {
                username: formData.get("username"),
                password: formData.get("password")
            }
            this.$emit("createAccountSubmission", submissionData)
        }
    }
}
</script>

<style lang="scss">
@import '@/styles/_colors.scss';
    .signup-form {
        width: fit-content;
        padding: 1rem 4rem 1rem 4rem;
        border-radius: 1rem;
        background-color: $primary_color;
        margin: 0 25%;

        display: flex;
        flex-direction: column;
        align-items: center;

        fieldset{
            border: none;

            label{
                display: inline-block;
                width: 5.5rem;
            }

            input {
                display: inline-block;
                width: 12rem;
            }
        }

        button {
            width: fit-content;
            padding: 0.25rem 1rem 0.25rem 1rem;
            cursor: pointer;
        }
    }
</style>