<template lang="pug">
    div
        navbar

</template>

<script>
import Vue from 'vue';
import VueSocketIO from 'vue-socket.io'
Vue.use(VueSocketIO, 'http://localhost');
import Navbar from './navbar.vue';

export default {
    components: {
        Navbar
    },
    data () {
        return {
        }
    },
    methods: {
    },
    sockets:{
        connect: function(){
          console.log('socket connected');
        }
    },
    mounted(){

  }
}
</script>

<style lang="css">
.marginTop{
    margin-top: 70px;
}
#filters{
    margin-top: 30px;
}
</style>
