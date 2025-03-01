<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError
})
</script>

<template>
   <div class="error-container">
    <h1 v-if="error.statusCode === 404">404 - 페이지를 찾을 수 없습니다 😢</h1>
    <h1 v-else>앗! 오류가 발생했어요 😵</h1>
    <p>{{ error.statusCode }} - {{ error.message }}</p>
    <NuxtLink to="/">홈으로 돌아가기</NuxtLink>
  </div>
</template>

<style scoped>
.error-container {
  text-align: center;
  padding: 50px;
}
</style>