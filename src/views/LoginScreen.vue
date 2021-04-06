<template>
    <LoginScreen 
        v-if="!showSignup"
        @signup="signup" 
        @loginSubmission="loginSubmission"
    />
    <SignUp 
        v-else
        @createAccountSubmission="createAccountSubmission"
    />
</template>

<script>
import LoginScreen from '@/components/login/LoginScreen'
import SignUp from '@/components/login/SignUp'

export default {
    components:{
        LoginScreen,
        SignUp
    },
    data(){
        return {
            showSignup: false
        }
    },
    methods: {
        loginSubmission(submissionData){
            fetch("https://wardrobe-coordinator.herokuapp.com/login", {
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
                    this.$router.replace({name: "outfit"})
                } else {
                    alert("Username or password is incorrect.")
                }
                }).catch(error => console.log("error", error))
        },
        signup(){
            this.showSignup = true
        },
        createAccountSubmission(submissionData){
            fetch("https://wardrobe-coordinator.herokuapp.com/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                }, 
                body: JSON.stringify({user: submissionData})
            }).then(response => response.json())
              .then(() => {
                this.loginSubmission(submissionData)
            }).catch(error => console.log(error))
        }
    }
}
</script>

<style lang="scss">

</style>