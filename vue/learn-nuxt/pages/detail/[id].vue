<template>
  <div>
    <div class="container">
      <div class="main-panel">
        <img
          class="product-image"
          :src="product.imageUrl"
          :alt="product.name"
        />
      </div>
      <div class="side-panel">
        <p class="name">{{ product.name }}</p>
        <p class="price">{{ product.price }}</p>
        <button type="button" @click="addToCart">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script setup>
// import { fetchProductById } from "@/api/index";
import {useCartStore} from '@/store/cart'
const { $apiUseFetch, $apiFetch } = useNuxtApp();
const id = useRoute().params.id;
const {data:product} = await $apiUseFetch(`/products/${id}`)

const addToCart = async () =>{
  await createCartItem(product.value)
  useCartStore().addCartItem(product.value);
  useRouter().push('/cart')
}

const createCartItem = async (value) =>{
 return await $apiFetch('/carts',{
    method:"POST",
    body:value
  })
}



useHead({
  title: 'About Us - Nuxt 3 Detail Page',
  meta: [
    { name: 'description', content: '우리는 Nuxt 3을 이용한 Detail Page' },
    { name: 'keywords', content: 'nuxt3, shopping, vue, pinia' },
    { property: 'og:title', content: 'Nuxt 3 쇼핑몰' },
    { property: 'og:description', content: 'Nuxt 3을 이용한 쇼핑몰입니다.' },
    { property: 'og:image', content: 'https://example.com/thumbnail.jpg' }
  ],
  link: [
    { rel: 'icon', type: 'image/png', href: '/favicon.png' }
  ]
});



// const route = useRoute();
// const {data:product} = $apiUseFetch(`http://localhost:3000/products/${route.params.id}`)

// error..
// const { data: product } = useAsyncData(
//   "product",
//   async () => {
//     if (!route.params.id) return null;
//     return await fetchProductById(route.params.id);
//   },
//   {
//     watch: [route],
//   }
// );

// onMounted(()=>{
//   product.value.data.map(item => ({...item}))
// })


</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  margin: 2rem 0;
}
.product-image {
  width: 500px;
  height: 375px;
}
.side-panel {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 220px;
  text-align: center;
  padding: 0 1rem;
}
</style>