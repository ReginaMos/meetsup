<template>
    <div>
        <div class="login">
            <div class="container">
                <div class="login-box">
                    <div class="login-content">
                        <h3>{{ $t('header.login') }}</h3>
                        <span>E-mail</span>
                        <input type="e-mail" placeholder="demo@gmail.com" class="form-control mb-3" v-model="userEmail">
                        <span>{{ $t('loginPart.password') }}</span>
                        <input type="e-mail" placeholder="password" class="form-control mb-3" v-model="userPassword">
                        <button class="btn btn-primary" @click="openHome" :disabled="!userEmail || !userPassword">{{ $t('loginPart.loginDown') }}</button>
                        <p class="mt-3">{{ $t('loginPart.question') }}<router-link to="/register"> {{ $t('loginPart.routerText') }}</router-link></p>
                    </div>
                </div>
            </div>  
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            userEmail: '',
            userPassword: ''
        }
    },

    methods: {
        openHome() {
            let user = {
                email: this.userEmail,
                password: this.userPassword
            }

            sessionStorage.setItem('user', JSON.stringify(user))

            this.$router.push('/home');
        }
    }
}
</script>
<style lang="sass" scoped>
    .login
        background-color: #f2f7ff
        padding: 30px 0
        // min-height: 834px
        // display: flex
        // align-items: center

    .login-content
        display: flex
        flex-direction: column
        width: 350px

    .login-box
        display: flex
        justify-content: center
        text-align: center

    .login-box span
        text-align: left
</style>