<template>
    <div>
        <HeaderComponent/>
        <HomeComponent/>
        <FooterComponent/>
    </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import HomeComponent from '@/components/HomeComponent.vue'

export default {
    components: {
        HeaderComponent,
        FooterComponent,
        HomeComponent
    }
}
</script>
<style lang="">
    
</style>