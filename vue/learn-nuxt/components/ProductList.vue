<template>
  <div>
    {{  products }}
  </div>
</template>

<!-- <script setup>
 const { data: products, pending, error } = await useFetch("http://localhost:3000/products");
</script> -->

<script setup>
const { data: products, pending, error } = useAsyncData("products", async () => {
  return await $fetch("http://localhost:3000/products");
});
</script>

<style scoped>

</style>