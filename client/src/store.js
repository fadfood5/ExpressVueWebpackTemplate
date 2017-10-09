import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        User: null,
        tester: 'test'
    },
    getters: {
        getUser: function(state){
            return state.User;
        }
    },
    mutations: {
        UpdateUser: (state, payload) => {
            state.User = payload;
        }
    },
    actions: {

    }
});
