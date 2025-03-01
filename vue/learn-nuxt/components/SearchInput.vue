<template>
   <div class="input-wrapper flex">
    <input type="text"  class="search-input" :value="modelValue"  @input="update($event.target.value)" @keyup.enter.exact="search"/>
    <button class="btn" type="button" @click="search">search</button>
  </div>
</template>

<script setup>
defineProps({
  modelValue: String
})

const emit = defineEmits(['update:modelValue', 'search'])
const update = (value)=>{
  emit('update:modelValue',value)
}

const search = () =>{
  emit('search')
}
</script>

<style scoped>
.input-wrapper {
  height: 40px;
  margin: 1rem 0;
}
.search-input {
  width: 200px;
  font-size: 1.2rem;
  font-weight: 500;
}
.btn {
  font-size: 1.2rem;
  font-weight: 500;
}
</style>