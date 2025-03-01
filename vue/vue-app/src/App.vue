<template>
  <AppHeader :appTitle="message" @change="changeMessage"></AppHeader>

</template>

<script>

  import AppHeader from './components/AppHeader.vue';

  export default {
    components:{
      // 'app-header':AppHeader
      // 'AppHeader':AppHeader
      // AppHeader:AppHeader
      AppHeader
    },
    data() {
      return {
        message: '앱 헤더 컴포넌트'
      }
    },
    methods:{
      changeMessage(){
        this.message='변경됨'
      }
    }
  }
</script>

<style scoped>

</style>