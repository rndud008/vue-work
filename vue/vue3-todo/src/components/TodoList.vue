<template>
  <ul>
    <li v-for="(item,index) in todoItems" :key="index">
      {{ item }}
      <button @click="removeTodo(item,index)">삭제</button>
    </li>
  </ul>
</template>

<script>
import { watch } from 'vue';


  export default {
    props:['todoItems', 'userId'],
    setup(props, context){
      function removeTodo(item,index){
        context.emit('remove', item, index)
      }

      watch(props.todoItems, (newValue)=>{
        console.log({newValue})
      })

      return {removeTodo}
    }
  }
</script>

<style scoped>

</style>