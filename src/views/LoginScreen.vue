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
            this.$store.dispatch("login", submissionData)
        }
    }
}
</script>

<style lang="scss">
</style>