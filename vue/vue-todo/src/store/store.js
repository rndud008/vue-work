import { createStore } from 'vuex'
import todoApp from './modules/todoApp'
// import * as getters from './getters'
// import * as mutations from './mutations'

// const storage = {
//   fetch(){
//     const arr =[];
//       // 인스턴스가 생성되자 마자 호출되는 파이프 사이클 훅.
//       // console.log('created');
//       if (localStorage.length > 0) {
//         for (let i = 0; i < localStorage.length; i++) {
//           // this.todoItems.push(localStorage.key(i));
//           // console.log(localStorage.key(i));
//           arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
//         }
//       }
//     return arr;
//   }
// }


export const store = createStore({

  modules:{
    todoApp
  }


  // state:{
  //   headerText:'TODO IT',
  //   todoItems: storage.fetch()
  // },
  // getters:getters
  // {
  //   storedTodoItems(state){
  //     return state.todoItems;
  //   }
  // }
  ,
  // mutations:mutations
  // {
  //   addOneItem(state, todoItem) {
  //     console.log('re');
  //     const obj = { completed: false, item: todoItem };
  //     localStorage.setItem(todoItem, JSON.stringify(obj));
  //     state.todoItems.push(obj);
  //   },
  //   removeOneItem(state, payload) {
  //     localStorage.removeItem(payload.todoItem.item);
  //     state.todoItems.splice(payload.index, 1);
  //   },
  //   toggleOneItem(state, payload) {
  //     state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
  //     // 로컬 스토리지의 데이터를 갱신
  //     localStorage.removeItem(payload.todoItem.item);
  //     localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
  //   },
  //   clearAllItems(state){
  //     localStorage.clear();
  //     state.todoItems = [];
  //   }
  // }
 
});
