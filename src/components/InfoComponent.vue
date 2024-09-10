<template>
    <div>
        <div class="more-info mt-5">
            <div class="elem-part pb-2">
                <i class="fa-regular fa-user mr-3"></i>
                <span>{{ organizer }}</span> 
            </div>
            <div class="elem-part pb-2">
            <i class="fa-solid fa-location-dot mr-3"></i> 
                <span>{{ place }}</span> 
            </div>
            <div class="elem-part pb-2">
                <i class="fa-regular fa-calendar mr-3"></i>
                <span>{{ date }}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            organizer: String,
            place: String,
            date: String
        }
    }
</script>
<style lang="sass" scoped>
    .elem-part i
        color: #3b3bd7e8
</style>