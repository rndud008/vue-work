
import { defineComponent, h, onMounted } from 'vue';
import ListView from './ListView'
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';

export default function createListView(name){
  return defineComponent({
    // 재사용할 인스턴스(컴포넌트) 옵션들이 들어갈 자리
    name,
    setup(){
      const store = useStore();
      const route = useRoute();

      onMounted(() =>{
        store.dispatch('START_SPINNER',true)
        store
          .dispatch('FETCH_LIST', route.name)
          .then(() => store.dispatch('END_SPINNER',false))
          .catch((error) => console.log(error))
      })
      return () => h(ListView);
    },
    
  })
}