<template>
  <ul> 
    <li v-for="(item, index) in items" :key="index">{{ item }}</li>
  </ul>
  <button @click="$emit('renew')">reNew</button>
</template>

<script>
  export default {
    props:{
      items:{
        type: Array,
        required: true
      }
    }
    // ,methods:{
    //   newItems(){
    //     this.$emit('renew')
    //   }
    // }
  }
</script>

<style scoped>

</style>