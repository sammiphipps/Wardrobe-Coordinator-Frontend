<template>
    <div class="login-screen">
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
        <p>Don't have an account: 
            <a href="#">Sign up here!</a>
        </p>
    </div>
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
@import '@/styles/_colors.scss';
    .login-screen {
        width: fit-content;
        padding: 1rem 4rem 1rem 4rem;
        border-radius: 1rem;
        background-color: $primary_color;
        margin: 0 25%;

        .login {
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
            }
        }
        p {
            text-align: center;
            margin: 0.5rem 0 0.5rem 0;

            a {
                text-decoration: none;
            }
        }
    }
</style>