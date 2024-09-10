<template>
    <div>
        <HeaderComponent/>
        <LoginComponent/>
        <FooterComponent/>
    </div>
</template>
<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import LoginComponent from '@/components/LoginComponent.vue'

export default {
    components: {
        HeaderComponent,
        FooterComponent, 
        LoginComponent
    }
}
</script>
<style lang="sass">

    
</style>