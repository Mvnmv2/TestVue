import Vue from "vue";
import VueRouter from "vue-router";
import Vuetify from "vuetify/lib";

import 'vuetify/dist/vuetify.css';

import Main from './Main';

import components from './components/UI/libraly'

Vue.use(VueRouter);
Vue.use(Vuetify, { iconfont: 'mdi' });


//Глобальная регистрация компонентов
components.forEach(item => {
    Vue.component(item.name, item)
})

new Vue({
    vuetify : new Vuetify(),
    router  : new VueRouter(),
    render  : (h) => h(Main)
}).$mount('#app');

