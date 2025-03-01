<template>
  <li>
   <!-- {{ item }} -->
     <slot></slot>
  </li>
</template>

<script>
  export default {
    props:['item']
  }
</script>

<style scoped>

</style>