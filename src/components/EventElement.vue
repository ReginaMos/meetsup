<template>
    <div>
        <div class="container p-0">
            <div class="event mt-4" @click="openEventPage">
                <div class="img-part">
                    <img v-if="info.image" :src="info.image">
                    <img v-else src="https://course-vue.javascript.ru/assets/undraw_conference_speaker_6nt7.3cd91942.svg" style="background-color: #fff;">
                    <h2>{{ info.title.toUpperCase() }}</h2>
                </div>
                <div class="info-part p-4">
                    <div class="status" 
                        :style="{
                            backgroundColor: info.type == 'register' ? '#b6ffb6' : '#ed9e9eb0',
                            color: info.type == 'register' ? 'black' : 'white'
                        }"
                    >
                        <span>{{ info.type=='register' ? $t('home.open') : $t('home.closedEvent') }}</span>
                    </div>

                    <div class="elem-part pb-2">
                        <i class="fa-regular fa-user mr-3"></i>
                        {{ info.organizer }}
                    </div>
                    <div class="elem-part pb-2">
                        <i class="fa-solid fa-location-dot mr-3"></i> 
                        <span>{{ info.place }}</span> 
                    </div>
                    <div class="elem-part pb-2">
                        <i class="fa-regular fa-calendar mr-3"></i>
                        <span>{{ info.dateIso }}</span>
                    </div>

                    <!-- https://course-vue.javascript.ru/assets/undraw_conference_speaker_6nt7.3cd91942.svg -->
                </div>
            </div>
        </div>
    </div>
        
</template>

<script>
export default {
    props: {
        info: Object
    },

    methods: {
        openEventPage() {
            this.$router.push('/event');
            sessionStorage.setItem('info', JSON.stringify(this.info));
        }
    }
}
</script>

<style lang="sass" scoped>

    .event
        display: flex
        box-shadow: 0px 0px 8px 3px rgba(34, 60, 80, 0.12)
        background-color: #fff

    .event:hover
        cursor: pointer
        box-shadow: 6px 5px 8px 8px rgba(34, 60, 80, 0.2)
        

    .event img
        width: 100%
        height: 300px
        opacity: 0.6

    .info-part
        display: flex
        flex-direction: column
        justify-content: center
        width: 50%
        font-size: 20px
        position: relative


    .fa-regular, .fa-solid
        color: #3b3bd7e8
    
    .img-part
        color: #fff
        position: relative
        display: flex
        justify-content: center
        align-items: center
        background: #000
        border-right: 4px solid #3b3bd7e8
        width: 50%

    .img-part h2
        position: absolute
        font-size: 35px
        margin: 0
        text-align: center

    .status
        position: absolute
        top: 0
        right: 0
        border-bottom-left-radius: 10px
        font-size: 17px
        padding: 3px 24px
</style>