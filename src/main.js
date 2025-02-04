import Vue from 'vue';
import Vuelidate from 'vuelidate';
import App from '@/App.vue';
import vuetify from '@/plugins/vuetify';
import router from '@/router';
import store from '@/store';
import i18n from '@/plugins/i18n';

Vue.use(Vuelidate);

Vue.config.productionTip = false;

new Vue({
    vuetify,
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount('#app')