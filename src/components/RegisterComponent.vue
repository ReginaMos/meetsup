<template>
    <div>
        <div class="register">
            <div class="container">
                <div class="register-box">
                    <div class="register-content">
                        <h3>{{ $t('header.register') }}</h3>
                        <span class="text-bottom">{{ $t('registerPage.name') }}</span>
                        <input type="e-mail" placeholder="Name" :class="['form-control mb-3', {'form-control-danger': isIncorrectName}]" v-model="userName">
                        <p v-if="isIncorrectName">{{ $t('registerPage.inCorrectComments[0]') }}</p>

                        <span class="text-bottom">E-mail</span>
                        <input type="e-mail" placeholder="demo@gmail.com" :class="['form-control mb-3', {'form-control-danger': isIncorrectEmail}]" v-model="userEmail">
                        <p v-if="isIncorrectEmail">{{ $t('registerPage.inCorrectComments[1]') }}</p>

                        <span class="text-bottom">{{ $t('loginPart.password') }}</span>
                        <input type="e-mail" placeholder="password" :class="['form-control mb-3', {'form-control-danger': isIncorrectPassword}]" v-model="userPassword">
                        <p v-if="isIncorrectPassword">{{ $t('registerPage.inCorrectComments[2]') }}</p>

                        <span class="text-bottom">{{ $t('registerPage.againPassword') }}</span>
                        <input type="e-mail" placeholder="password" :class="['form-control mb-3', {'form-control-danger': isIncorrectPasswordAgain}]" v-model="userPasswordAgain">
                        <p v-if="isIncorrectPasswordAgain">{{ $t('registerPage.inCorrectComments[3]') }}</p>

                        <div class="form-check mb-2">
                            <input type="checkbox" class="form-check-input" @click="checkValue = !checkValue">
                            <label class="form-check-label" for="check">{{ $t('registerPage.termOfUse') }}</label>
                            <p v-if="!termsOfUse">{{ $t('registerPage.inCorrectComments[4]') }}</p>
                        </div>
                        

                        <button class="btn btn-primary" @click="tryRegister">{{ $t('registerPage.registerDown') }}</button>
                        <span class="mt-3">{{ $t('registerPage.question') }}<router-link to="/"> {{ $t('registerPage.routerText') }}</router-link></span>
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
            userName:'',
            userPassword: '',
            userPasswordAgain: '',
            isIncorrectName: false,
            isIncorrectEmail: false,
            isIncorrectPassword: false,
            isIncorrectPasswordAgain: false,
            checkValue: false,
            termsOfUse: true
        }
    },
    methods: {
        tryRegister() {
            this.termsOfUse = this.checkValue;


            if(!this.userName) {
                this.isIncorrectName = true;
            }
            if(!this.userEmail) {
                this.isIncorrectEmail = true;
            }
            if(!this.userPassword) {
                this.isIncorrectPassword = true;
            }
            if(!this.userPasswordAgain) {
                this.isIncorrectPasswordAgain = true;
            }

            if(this.userName && this.userEmail && this.userPassword && this.userPasswordAgain && this.checkValue) {
                let user = {
                    name: this.userName,
                    termsOfUse: this.checkValue,
                    email: this.userEmail,
                    password: this.userPassword,
                    repeatpassword: this.userPasswordAgain
                }

                sessionStorage.setItem('user', JSON.stringify(user));
                this.$router.push('/home');
            }
        },
    },
    watch: {
        userName(val) {
            if (val) this.isIncorrectName = false;
        },
        userEmail(val) {
            if (val) this.isIncorrectEmail = false;
        },
        userPassword(val) {
            if (val) this.isIncorrectPassword = false;
        },
        userPasswordAgain(val) {
            if (val) this.isIncorrectPasswordAgain = false;
        },
        checkValue(val) {
            if (val) this.termsOfUse = true;
            if (!val) this.termsOfUse = false;
        }
    }
}
</script>

<style lang="sass" scoped>
    .register
        background-color: #f2f7ff
        padding: 30px 0
        // min-height: 834px
        // display: flex
        // align-items: center

    .register-content
        display: flex
        flex-direction: column
        width: 350px

    .register-content p
        text-align: left
        color: red

    .register-box
        display: flex
        justify-content: center
        text-align: center

    .form-control-danger
        background-color: #ffc7c7
        border-color: red

    .form-control-danger:focus
        box-shadow: 0 0 0 0.2rem rgb(255 44 44 / 25%)
       
    
    .text-bottom
        text-align: left
</style>