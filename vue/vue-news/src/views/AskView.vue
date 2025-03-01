<template>
  <ListItem></ListItem>
</template>

<script>
import ListItem from "@/components/ListItem.vue";
import ListMixin from "@/mixins/ListMixin";

export default {
  components: {
    ListItem,
  },
  // mounted(){
  //   this.$store.dispatch("END_SPINNER", false)
  // }
  // ,
  mixins: [ListMixin]
};
</script>

<style scoped></style>
