<template lang='pug'>
  #app
    v-app(toolbar='')
      home
</template>

<script>
import Vue from 'vue';
import Home from './home.vue';
import Vuetify from 'vuetify';
Vue.use(Vuetify);

export default {
  components: {
      Home
  },
  name: 'app',
  data () {
    return {
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

a {
  color: #42b983;
}
</style>
