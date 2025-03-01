<template>
  <div class="container">
    <h1 class="list-title">담긴 상품 목록</h1>
    <CartList></CartList>
    <div class="extra-panel">
      <button>구매하기</button>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from "@/store/cart";
const { $apiUseFetch, $apiFetch } = useNuxtApp();

const response = await $apiUseFetch('/carts') 

useCartStore().fetchCartItems(response.data.value)

useHead({
  title: 'About Us - Nuxt 3 Cart Page',
  meta: [
    { name: 'description', content: '우리는 Nuxt 3을 이용한 Cart Page' },
    { name: 'keywords', content: 'nuxt3, shopping, vue, pinia' },
    { property: 'og:title', content: 'Nuxt 3 쇼핑몰' },
    { property: 'og:description', content: 'Nuxt 3을 이용한 쇼핑몰입니다.' },
    { property: 'og:image', content: 'https://example.com/thumbnail.jpg' }
  ],
  link: [
    { rel: 'icon', type: 'image/png', href: '/favicon.png' }
  ]
});


</script>

<style scoped>
.container {
  margin: 2rem 10rem;
}
.list-title {
  font-weight: 700;
  font-size: 1.4rem;
}
.list-wrapper {
  margin: 0.4rem 0;
}
.list-item {
  display: flex;
}
.thumbnail {
  width: 100px;
  height: 100px;
}
.description {
  padding: 2rem 1rem;
}
.extra-panel {
  text-align: right;
  padding: 0.2rem 0;
}
</style>
