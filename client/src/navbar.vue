<template lang="pug">
    div
        v-navigation-drawer(dark, fixed, persistent='', v-model='drawer')
          v-toolbar.transparent(flat='')
            v-list.pa-0
              v-list-tile(avatar='')
                v-list-tile-avatar
                    img(src='https://randomuser.me/api/portraits/men/85.jpg')
                v-list-tile-content
                    v-list-tile-title Name
          v-list.pa-1
            v-list-tile-content
          v-list.pt-0(dense='')
            v-divider
        v-toolbar.blue(fixed='', dark='')
          v-toolbar-side-icon(@click.stop='drawer = !drawer')
          v-toolbar-title Template
</template>

<script>
export default {
    components: {
    },
    data (){
        return{
            drawer: false
        }
    },
    methods: {
    },
    mounted(){
    }
}
</script>

<style lang="css">
nav{
    background-color: #1c84b5;
}
.nav-item{
    color: white;
}
#collapser{
    color: white;
}
</style>
