<template>
    <div>
        <div class="header">
            <div class="container">
                <div class="header-box">
                   <img class="logo mb-3" src="@/assets/logo.5583e3eb.svg" @click="logo">
                    <ul class="info-part m-0">
                        <li v-if="this.$route.name == 'event'"><router-link to="home" class="router">&larr; {{ $t('header.back') }}</router-link></li>
                        <div v-if="this.$route.name == 'event'" class="dot"></div>
                        <li><router-link to="/" class="router">{{ $t('header.login') }}</router-link></li>
                        <div class="dot"></div>
                        <li><router-link to="/register" class="router">{{ $t('header.register') }}</router-link></li>
                        <div class="dot"></div>
                        <li>
                            <div class="languages">
                                <select name="lang" id="lang" @click="changeLanguage" v-model="selectedLanguage">
                                    <option value="ru">RU</option>
                                    <option value="en" >EN</option>
                                </select>
                                <img v-if="selectedLanguage === 'ru'" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgvCLfV8QN1R_IGA8_NZHbW7MpYW94XWoNUQ&s" alt="ru">
                                <img v-else src="https://thumb.ac-illust.com/ed/eddf2ccba16703f8033b57c30d42b0fa_t.jpeg" alt="en">
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            user: JSON.parse(sessionStorage.getItem("user")),
            selectedLanguage: this.$i18n.locale,
        }
    },

    methods: {
        logo() {
            if (this.user !== null) {                
                this.$router.push('home')
            }
        },

        changeLanguage(e) {
            if(e.target.value === 'ru') {
                this.selectedLanguage = this.$i18n.locale = 'ru';
                
            }

            else {
                this.selectedLanguage = this.$i18n.locale = 'en';
                
            }
            
        }
            
    }
}
</script>
<style lang="sass" scoped>
    .header
        position: relative
        box-shadow: 0px 5px 6px -2px rgba(34, 60, 80, 0.25)

    .header img
        width: 200px

    .info-part
        display: flex
        align-items: center
        gap: 20px
        font-size: 20px

    .info-part li
        list-style: none

    .router
        color: black

    .header-box
        display: flex
        justify-content: center
        flex-direction: column
        align-items: center
        padding: 20px 0

    .dot
        width: 5px
        height: 5px
        border-radius: 50%
        background-color: grey

    .logo
        cursor: pointer

    .languages
        display: flex
        justify-content: center
        text-align: center

    .languages img
        max-height: 35px
        max-width: 40px

</style>