<template>
  <div class="app">
    <AppHeader></AppHeader>
    <div class="app-contents">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script>
import AppHeader from "@/components/common/AppHeader.vue";

export default {
  components: {
    AppHeader,
  },
};
</script>

<style>
@import "./css/reset.css";
@import "./css/common.css";
</style>

<!-- nvm use 22.14.0 -->
<!-- node -v 버전 확인 -->
