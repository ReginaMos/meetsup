<template>
    <div>
        <div class="info mt-4">
            <div class="img-part">
                <img v-if="info.image" :src="info.image">
                <img v-else src="https://course-vue.javascript.ru/assets/undraw_conference_speaker_6nt7.3cd91942.svg" style="background-color: #fff;">
                <h2>{{ info.title.toUpperCase() }}</h2>
            </div>
            <div class="container">
                <div class="text-part p-5">
                    <div class="description">
                        <ul class="p-0">
                            <li :class="{'active' : isActive}" @click="clickLeftPart">{{ $t('event.description') }}</li>
                            <li :class="{'active' : !isActive}" @click="clickRightPart">{{ $t('event.schedule') }}</li>
                        </ul>
                        <hr class="p-0">
                        <KeepAlive>
                            <component :is="currentComponent" :description="info.description" :schedule="info.agenda"/>
                        </KeepAlive>
                    </div>

                    <InfoComponent
                        :organizer="info.organizer"
                        :date="info.dateIso"
                        :place="info.place"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import DescriptionComponent from '@/components/DescriptionComponent.vue'
import ScheduleComponent from '@/components/ScheduleComponent.vue'
import InfoComponent from '@/components/InfoComponent.vue'

export default {
    components: {
        ScheduleComponent,
        DescriptionComponent,
        InfoComponent
    },

    data() {
        return {
            info: JSON.parse(sessionStorage.getItem("info")),
            isActive: true,
            currentComponent: 'descriptionComponent',
        }
    },

    methods: {
        clickLeftPart() {
            this.isActive = true;

            this.currentComponent === 'descriptionComponent' ? 'DescriptionComponent.vue' : 'ScheduleComponent.vue';
            this.currentComponent = 'descriptionComponent';
        },

        clickRightPart() {
            this.isActive = false;


            this.currentComponent === 'scheduleComponent' ? 'ScheduleComponent.vue' : 'DescriptionComponent.vue';
            this.currentComponent = 'scheduleComponent';
        }
    }
    
}

</script>

<style lang="sass" scoped>
    .img-part
        position: relative
        display: flex
        justify-content: center
        align-items: center
        background-color: #000

    .img-part h2
        position: absolute
        color: white
        text-align: center
        font-size: 60px

    .img-part img
        width: 100%
        max-height: 350px
        object-fit: cover
        opacity: 0.6

    .text-part
        display: flex
        justify-content: space-between
        align-items: top
        gap: 40px

    .description
        width: 80%
        font-size: 17px

    .description ul
        display: flex
        list-style: none
        gap: 20px
        cursor: pointer

    .description li:hover
        text-decoration: underline
        text-underline-offset: 23px
        text-decoration-color: #3b3bd7e8 

    .active
        color: #3b3bd7e8
        text-decoration: underline
        text-underline-offset: 23px
</style>