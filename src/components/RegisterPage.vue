<template>
    <div>
        <HeaderComponent/>
        <RegisterComponent/>
        <FooterComponent/>
    </div>
</template>
<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import RegisterComponent from '@/components/RegisterComponent.vue'

export default {
    components: {
        HeaderComponent,
        FooterComponent,
        RegisterComponent
    }
}
</script>
<style lang="">
    
</style>