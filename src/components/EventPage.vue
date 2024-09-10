<template>
    <div>
        <HeaderComponent/>
        <EventComponent/>
        <FooterComponent/>
    </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import EventComponent from '@/components/EventComponent.vue'

export default {
    components: {
        HeaderComponent,
        FooterComponent,
        EventComponent
    }
}

</script>

<style lang="sass"></style>