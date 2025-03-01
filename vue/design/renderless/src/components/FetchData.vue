<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";

// eslint-disable-next-line
const props = defineProps(["url"]);
const response = ref(null);
const loading = ref(false);

onMounted(async () => {
  loading.value = true;
  try {
    const res = await axios.get(props.url);
    response.value = res.data;
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
});
</script>


<template>
  <slot :response="response" :loading="loading"></slot>
</template>


<!-- FetchData.vue Component -->