<template>
    <div>
        <div class="home">
            <div class="container pt-4">
                <nav class="nav-box">
                    <div class="nav-content">
                        <p :class="{'active' : isActiveAll}" @click="clickedAll">{{ $t('home.all') }}</p>
                        <p :class="{'active' : isActiveEnd}" @click="clickedEnd">{{ $t('home.closed') }}</p>
                        <p :class="{'active' : isActiveFuture}" @click="clickedFuture">{{ $t('home.future') }}</p>
                    </div> 

                    <div class="other-box">
                        <div class="finder">
                            <input type="text" class="form-control" placeholder="Поиск" v-model="inputFilter">
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </div>

                        <div class="icons">
                            <div :class="['left-part', {'not-active-nav': pageStatus}]" @click="changePage">
                                <i class="fa-solid fa-bars"></i>
                            </div>
                            <div :class="['right-part', {'active-nav' : pageStatus}]" @click="changePage">
                                <i class="fa-regular fa-calendar"></i>
                            </div>
                            
                        </div>
                    </div>      
                </nav>

                <div class="if-part" v-if="!pageStatus">
                    <div class="elements" v-if="filterInput.length">
                        <EventElement v-for="item in filterInput"
                        :key = item.id 
                        :info = item
                        />
                    </div>
                    <div v-else>
                        <h2 class="mt-4 mb-0">{{ $t('home.text') }}</h2>
                    </div>
                    
                </div>

                <div class="else-part" v-else>
                    <CalendarComponent/>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
import EventElement from '@/components/EventElement.vue'
import meetups from '@/mixins/meetups'
import CalendarComponent from '@/components/CalendarComponent.vue'

export default {
    mixins: [meetups],
    components: {
        EventElement,
        CalendarComponent
    },

    data() {
        return {
            pageStatus: false,
            clickedPart: '',
            isActiveAll: true,
            isActiveEnd: false,
            isActiveFuture: false,
            inputFilter: ''
        }
    },

    methods: {
        changePage() {
            this.pageStatus = !this.pageStatus;
        },

        clickedAll() {
            this.clickedPart = '';
            this.isActiveAll = true;
            this.isActiveEnd = this.isActiveFuture = false;
        },

        clickedEnd() {
            this.clickedPart = 'register';
            this.isActiveEnd = true;
            this.isActiveAll = this.isActiveFuture = false;
        },

        clickedFuture() {
            this.clickedPart = 'closed';
            this.isActiveFuture = true;
            this.isActiveAll = this.isActiveEnd = false;
        }
    },

    computed: {
        filterNav() {
            return this.meetups.filter(item => item.type != this.clickedPart)
        },

        filterInput() {
            return this.filterNav.filter(item => {
                return item.title.toLowerCase().includes(this.inputFilter.toLowerCase()) || item.organizer.toLowerCase().includes(this.inputFilter.toLowerCase())
            })
        }
    }
}

</script>

<style lang="sass" scoped>
    .home
        background-color: #f2f7ff

    .nav-box
        display: flex
        justify-content: space-between
        align-items: center

    .nav-content
        display: flex
        color: #3b3bd7e8
        justify-content: space-between
        width: 30%
        align-items: center

    .nav-content p
        margin-bottom: 0
        cursor: pointer

    .active
        border-radius: 15px
        border: 2px solid #3b3bd7e8
        padding: 4px 13px 

    .other-box
        display: flex
        align-items: center
        justify-content: space-between
        width: 45%

    .active-nav
        background-color: #3b3bd7e8
        color: #fff
        
    .finder
        position: relative

    .finder i 
        position: absolute
        bottom: 10px
        left: 10px
        color: #5f5fe9a6

    .finder input
        width: 300px
        height: 36px
        padding-left: 35px
        color: #5f5fe9a6
        border-radius: 20px

    .icons
        display: flex

    .right-part
        border-top-right-radius: 15px
        border-bottom-right-radius: 15px
        border: 2px solid #3b3bd7e8
        padding: 4px 13px 
        cursor: pointer


    .left-part
        border-top-left-radius: 15px
        border-bottom-left-radius: 15px
        border: 2px solid #3b3bd7e8
        background-color: #3b3bd7e8
        padding: 4px 13px 
        cursor: pointer
        color: #fff

        
    .not-active-nav
        cursor: pointer
        background-color: #fff
        color: black
</style>