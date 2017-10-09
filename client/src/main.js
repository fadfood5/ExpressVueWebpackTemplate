import Vue from 'vue';
import App from './App.vue';
import Vuex from 'vuex';
import { store } from './store.js';
Vue.use(Vuex);

new Vue({
    store,
    el: '#app',
    render: h => h(App)
});
