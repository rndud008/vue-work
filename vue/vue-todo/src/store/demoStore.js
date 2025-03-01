import { createStore } from "vuex";

export const store = createStore({
  state: {
    price: 100,
  },
  getters: {
    originalPrice(state) {
      return state.price;
    },
    doublePrice(state) {
      return state.price * 2;
    },
    triplePrice(stae) {
      return state.price * 3;
    },
  },
});
