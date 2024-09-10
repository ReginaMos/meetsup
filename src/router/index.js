import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/home',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */ '../views/HomeView.vue')
    },

    {
        path: '/',
        name: 'login',
        component: () => import(/* webpackChunkName: "home" */ '../views/LoginView.vue')
    },

    {
        path: '/register',
        name: 'register',
        component: () => import(/* webpackChunkName: "home" */ '../views/RegisterView.vue')
    },

    {
        path: '/event',
        name: 'event',
        component: () => import(/* webpackChunkName: "home" */ '../views/EventView.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router