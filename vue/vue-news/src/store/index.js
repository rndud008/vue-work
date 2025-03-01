
import { createStore } from "vuex";
import mutations from "./mutations";
import actions from "./actions";

export const store = createStore({
  state: {
    news: [],
    jobs:[],
    ask:[],
    user:{},
    item:{},
    loading:false,
    list:[]
  },
  getters:{
    fetchedAsk(state){
      return state.ask
    },
    fetchedItem(state){
      return state.item
    },
    loading(state){
      return state.loading
    }
  },
  mutations,
  actions
});
