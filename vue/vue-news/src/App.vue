<template>
  <ToolBar></ToolBar>
  <Transition name="page">
    <RouterView :key="$route.fullPath"></RouterView>
  </Transition>
  <LoadingSpinner :loading="loading"></LoadingSpinner>
</template>

<script>
import { mapGetters } from 'vuex';
import LoadingSpinner from './components/LoadingSpinner.vue';
import ToolBar from './components/ToolBar.vue';

export default {
  components:{
    ToolBar,
    LoadingSpinner
  },
  computed:{
    ...mapGetters(['loading'])
  },
  created(){
    this.$store.dispatch('START_SPINNER',true)
    setTimeout(() => {
      
      this.$store.dispatch('END_SPINNER',false)
    }, 3000);
  }
}
</script>

<style>
  body{
    padding: 0;
    margin: 0;
  }

  a{
    color: #34495e;
    text-decoration: none;
  }

  a.router-link-exact-active{
    text-decoration: underline;
  }
  a:hover{
    color: #42b883;
    text-decoration: underline;
  }

  .page-enter-active, .page-leave-active{
    transition: opacity .5s;
  }
  .page-enter, .page-leave-to{
    opacity: 0;
  }
</style>

