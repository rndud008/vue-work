<template>
  <div>
    <h1>Vue 3 FetchData Example</h1>
    <FetchData url="https://jsonplaceholder.typicode.com/users/1">
      <template v-slot:default="{ response, loading }">
        <div v-if="loading">Loading...</div>
        <div v-else-if="response">
          <h2>{{ response.name }}</h2>
          <p>Email: {{ response.email }}</p>
          <p>Phone: {{ response.phone }}</p>
        </div>
        <div v-else>Error fetching data.</div>
      </template>
    </FetchData>
  </div>
</template>

<script setup>
import FetchData from "./components/FetchData.vue";
</script>

<!-- <template>
  <div>
    <FetchData url="https://jsonplaceholder.typicode.com/users/1"></FetchData>
  </div>
</template>

<script>
import FetchData from './components/FetchData.vue';

export default {
  components: {
    FetchData
  }
}
</script> -->

<!-- App.vue -->