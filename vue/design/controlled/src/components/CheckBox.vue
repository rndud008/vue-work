<template>
 <!-- <input type="checkbox" v-model="checked"> -->
  <!-- 잘못된 방법 밑에서 상위컴포넌트의 데이터를 바꾸려함. -->
 <input type="checkbox" :value="value" @click="toggleCheckBox">
</template>

<script>
  export default {
    props:['value'],
    methods:{
      toggleCheckBox(){
        this.$emit('input', !this.value)
      }
    }
  }
</script>

<style scoped>

</style>