<template>
    <div>
        <div class="programm">
            <div v-if="schedule.length">
                <div class="programm-part mb-3" v-for="item in schedule" :key=item.id>
                    <div class="icon mr-2" v-html="getIcon(item.type)"> 
                        <i class="fa-solid fa-lock"></i> 
                    </div>
                    <div class="time mr-2">{{ item.startsAt }} - {{ item.endsAt }}</div>
                    <div class="text mr-2">
                        <h5 v-if="item.title">{{ item.title }}</h5>
                        <h5 v-else>{{ getTitle(item.type) }}</h5>
                        <p>{{ item.description }}</p>
                    </div>
                        <hr>
                </div>
            </div>
            <div v-else><p>Информация дополняется</p></div>
         </div>
    </div>
</template>

<script>
    export default {
        props: {
            schedule: Array
        },

        methods: {
            getIcon(type) {
                if(type === 'registration'  || type === 'closing') return '<i class="fa-solid fa-key">';
                else if(type === 'coffee' || type === 'break') return '<i class="fa-solid fa-mug-hot"></i>';
                else if(type === 'talk') return '<i class="fa-solid fa-comments"></i>';
                else if(type === 'afterparty') return '<i class="fa-solid fa-champagne-glasses"></i>'
                else return '<i class="fa-regular fa-folder-open"></i>'
            },

            getTitle(type) {
                if(type === 'registration') return "Регистрация";
                else if(type === 'closing') return 'Закрытие';
                else if(type === 'afterparty') return 'Afterparty';
                else if(type === 'coffee') return 'Coffee-break';
            }
        }
    }
</script>

<style lang="sass">
    .programm-part
        display: flex
        gap: 40px 20px
        font-size: 15px
        border-bottom: 1px solid #d7d4d4


    .time, .item, .icon
        color: #3b3bd7e8
    .time
        display: flex
        justify-content: center
        min-width: 15%
        font-weight: 700          
</style>
