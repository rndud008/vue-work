<template>
  <div>
    <ul>
      <ItemItem>아이템 1</ItemItem>
      <ItemItem>아이템 2 <button>click</button></ItemItem>
      <ItemItem>아이템 3 <div>kkkk</div></ItemItem>
      <ItemItem>아이템 4 <p style="color: blue;">check</p></ItemItem>
      <ItemItem>아이템 5</ItemItem>

      <!-- <ItemItem v-for="(item, index) in items" :item="item" :key="index"></ItemItem> -->
      <ItemItem v-for="(item, index) in items" :key="index">{{ item }}</ItemItem>
    </ul>
  </div>
</template>

<script>
import ItemItem from './ItemItem.vue'

export default {
  components: {
    ItemItem
  },data(){
    return{
      items:['아이템 1', '아이템 2', '아이템 3', '아이템 4', '아이템 5']
    }
  }
}
</script>

<style>

</style>
