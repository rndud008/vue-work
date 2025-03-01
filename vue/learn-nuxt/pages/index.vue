<template>
  <div class="app">
    <main>
      <SearchInput v-model="searchKeyword" @search="searchProducts"></SearchInput>
      <ul>
        <li
          class="item flex"
          v-for="product in products"
          :key="product.id"
          @click="moveToDetailPage(product.id)"
        >
          <img
            class="product-image"
            :src="product.imageUrl"
            :alt="product.name"
          />
          <p>{{ product.name }}</p>
          <span>{{ product.price }}</span>
        </li>
      </ul>
      <div class="cart-wrapper">
        <button class="btn" @click="routeToCartPage">장바구니 바로가기</button>
      </div>
    </main>
  </div>
</template>

<script setup>
const { $apiUseFetch, $apiFetch } = useNuxtApp();
const { data, pending, error } = await $apiUseFetch("/products");

const searchKeyword = ref('')
const products = ref([]) 

// const {
//   data: products,
//   pending,
//   error,
// } = await useFetch("http://localhost:3000/products");



products.value = data.value.map((item) => {
  return {
    ...item,
    imageUrl: `${item.imageUrl}?random=${Math.random()}`,
  };
});

const moveToDetailPage = (id) => {
  console.log(id);
  const router = useRouter();
  router.push(`/detail/${id}`);
};

const searchProducts = async() =>{

  const response = await $apiFetch('/products',{
    params:{
      name_like:searchKeyword.value
    }
  })

  products.value = response.map(item => ({
    ...item,
    imageUrl: `${item.imageUrl}?random=${Math.random()}`,
  }))
}

const routeToCartPage = () =>{
  useRouter().push('/cart')
}

</script>

<!-- <script setup>
const {
  data: products,
  pending,
  error,
} = useAsyncData("products", async () => {
  return await $fetch("http://localhost:3000/products");
});

onMounted(() => {
  products.value.map((item) => ({
    ...item,
    imageUrl: `${item.imageUrl}?random=${Math.random()}`,
  }));
});
</script> -->

<style scoped>
.flex {
  display: flex;
  justify-content: center;
}
.item {
  display: inline-block;
  width: 400px;
  height: 300px;
  text-align: center;
  margin: 0 0.5rem;
  cursor: pointer;
}
.product-image {
  width: 400px;
  height: 250px;
}
.app {
  position: relative;
}
.cart-wrapper {
  position: sticky;
  float: right;
  bottom: 50px;
  right: 50px;
}
.cart-wrapper .btn {
  display: inline-block;
  height: 40px;
  font-size: 1rem;
  font-weight: 500;
}
</style>
