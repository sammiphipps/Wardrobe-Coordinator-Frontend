<template>
    <LoginScreen @loginSubmission="loginSubmission"/>
</template>

<script>
import LoginScreen from '@/components/login/LoginScreen'

export default {
    components:{
        LoginScreen
    },
    methods: {
        loginSubmission(submissionData){
            fetch("http://localhost:3000/login", {
                method: "POST",
                headers: {
                "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username: submissionData.username,
                    password: submissionData.password
                })
            }).then(response => response.json())
                .then(information => {
                if(!information.error){
                    localStorage.setItem("token", information.token)
                    this.$router.replace({name: "closet"})
                } else {
                    alert("Username or password is incorrect.")
                }
                }).catch(error => console.log("error", error))
        }
    }
}
</script>

<style lang="scss">
</style>