// store/cart.ts
import { defineStore } from 'pinia';


export const useCartStore = defineStore('cart', {
  state: () => ({
    cartItems: [] as { id: number; name: string; imageUrl: string, price: string }[]
  }),
  actions: {
    addCartItem(item: { id: number; name: string; imageUrl: string, price: string }) {
      this.cartItems.push(item);
    },
    fetchCartItems (fetchCartItems: { id: number; name: string; imageUrl: string, price: string }[]){
      this.cartItems = fetchCartItems
    }
  },
  getters:{
    getCartItems: (state): { id: number; name: string; imageUrl: string, price: string }[] => state.cartItems
  }
});
