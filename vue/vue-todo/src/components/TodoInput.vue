<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo" />
    <!-- <button v-on:click="addTodo">add</button> -->
    <span class="addContainer" v-on:click="addTodo">
      <i class="fas fa-plus addBtn"></i>
    </span>

    <BaseModal v-if="showModal" @close="showModal = false">
      <template #header >
            <h3 >
                경고!
                <i class="fas fa-times closeModalBtn" @click="showModal = false"></i>
            </h3>
      </template>
      <template #body>
        <h3>아무것도 입력하지 않았습니다.</h3>
      </template>

    </BaseModal>

  </div>
</template>

<script>
import BaseModal from "./common/BaseModal.vue";

export default {
  data() {
    return {
      newTodoItem: "",
      showModal: false,
    };
  },
  methods: {
    addTodo() {
      if (this.newTodoItem !== "") {
        // console.log(this.newTodoItem);
        // this.$('이벤트이름',인자1, 인자2, ....)
        // this.$emit("addTodoItem", this.newTodoItem);

        this.$store.commit('addOneItem',this.newTodoItem.trim())
        this.clearInput();
      } else {
        this.showModal = !this.showModal;
      }
    },
    clearInput() {
      this.newTodoItem = "";
    },
  },
  components: {
    BaseModal,
  },
};
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9em;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478fb, #8763fb);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
.closeModalBtn{
    color: #42b983;
}
</style>
