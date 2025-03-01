<template>
  <div>
    <input type="text" v-model="todoInput">
    <button @click="addTodo">추가</button>
  </div>
</template>

<script>
import { ref } from 'vue';

  export default {
    setup(props, context){
      // data
      const todoInput = ref('');
      //input 태그에 있는 v-model 속성을 이용하여 데이터를 조작.

      //methods
      function addTodo(){
        const todo = todoInput.value
        localStorage.setItem(todo,todo)
        // 로컬스토리지에 키와 값의 형태로 저장.
        context.emit('add',todo)
        clearTodo()
      }

      const clearTodo = () => todoInput.value = ''

      return {todoInput, addTodo}
    }
  }
</script>

<style scoped>

</style>