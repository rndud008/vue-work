<template>
 <!-- <CheckBox :checked="checked"></CheckBox> -->
 <CheckBox v-model="checked"></CheckBox>
</template>

<script>
import CheckBox from './components/CheckBox.vue';

export default {
  components: {
    CheckBox
  },
  data(){
    return{
      // checkBoxes: []
      checked: false
    }
  },
  // created(){
  //   fetchCheckBox()
  //   .then(result => this.checkBoxes = result.data)
  // }
}
</script>



