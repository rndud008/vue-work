<template>
  <TodoHeader :appTitle="title"></TodoHeader>
  <!-- <TodoInput @하위컴포넌트 이벤트 이름 = '상위컴포넌트의 메서드 이름'></TodoInput> -->
  <TodoInput @add= 'addTodoItem'></TodoInput>
  <!-- <TodoList :프롭스이름="상위 컴포넌트의 데이터이름"></TodoList> -->
  <TodoList :todoItems="todoItems" @remove="removeTodoItem"></TodoList>
</template>

<script>
import TodoHeader from "@/components/TodoHeader.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";
import { useTodo } from "./hooks/useTodo";
import { onBeforeMount } from "vue";


export default {
  components: {
    TodoHeader,
    TodoInput,
    TodoList
  },
  data(){
    return {
      title:'할일 앱'
    }
  },
  setup(){
    const {todoItems, addTodoItem, fetchTodos } = useTodo();

    // //data
    // const todoItems = ref([]);

    // // methods
    // function fetchTodos(){
    //     const result =[];
    //     for (let i = 0; i < localStorage.length; i++) {
    //       const todoItem = localStorage.key(i);
    //       // todoItems.value.push(todoItem)
    //       result.push(todoItem)
          
    //     }

    //     return result;
    //   }
      // 라이프 사이클 api와 같은 동작 -beforeCreate, created
      // console.log('1: setup called')
      
      onBeforeMount(()=>{
        // console.log('2: onBeforeMount called')
        // 컴포넌트가 화면에 부착되기전의 상태

        // 라이프 사이클  api 가 적용된 구간
        todoItems.value = fetchTodos();
      })


      // function addTodoItem(todo){
      //   todoItems.value.push(todo)
      //   localStorage.setItem(todo,todo)

      // }

      return {todoItems, addTodoItem}
  },
  methods:{
    removeTodoItem(item,index){
      this.todoItems.splice(index,1)
      localStorage.removeItem(item,item)
    }
  }
};
</script>

<style scoped></style>
