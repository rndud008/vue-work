<template>
     <div class="list-wrapper">
      <ul>
        <li
          v-for="cartItem in useCartStore().cartItems"
          :key="cartItem.id"
          class="list-item"
        >
          <img
            class="thumbnail"
            :src="cartItem.imageUrl"
            :alt="cartItem.name"
          />
          <div class="description">
            <p>{{ cartItem.name }}</p>
            <span>{{ cartItem.price }}</span>
          </div>
        </li>
      </ul>
    </div>
</template>

<script setup>
import { useCartStore } from "@/store/cart";

</script>

<style scoped>

</style>