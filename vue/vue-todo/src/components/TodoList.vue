<template>
  <div>
    <TransitionGroup name="list" tag="ul" class="container">
      <!-- <li
        v-for="(todoItem, index) in this.$store.state.todoItems"
        v-bind:key="todoItem.item"
        class="shadow"
      > -->
      <!-- <li
        v-for="(todoItem, index) in this.$store.getters.storedTodoItems"
        v-bind:key="todoItem.item"
        class="shadow"
      > -->
      <!-- <li
        v-for="(todoItem, index) in this.todoItems"
        v-bind:key="todoItem.item"
        class="shadow"
      > -->
      <li
        v-for="(todoItem, index) in this.storedTodoItems"
        v-bind:key="todoItem.item"
        class="shadow"
      >
        <i
          class="checkBtn fas fa-check"
          v-bind:class="{ checkBtnCompleted: todoItem.completed }"
          v-on:click="toggleComplete({todoItem, index})"
        ></i>
        <span v-bind:class="{ textCompleted: todoItem.completed }">{{
          todoItem.item
        }}</span>
        <span class="removeBtn" v-on:click="removeTodo({todoItem, index})">
          <i class="fas fa-trash-alt"></i>
        </span>
      </li>
    </TransitionGroup>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  methods: {
    ...mapMutations({
        removeTodo: 'removeOneItem',
        toggleComplete: 'toggleOneItem'
    })
    // removeTodo(todoItem, index) {
    // //   this.$emit("removeItem", todoItem, index);
    // this.$store.commit('removeOneItem',{todoItem, index})

    //   // console.log(todoItem, index);
    // },
    // toggleComplete(todoItem, index) {
    // //   this.$emit("toggleItem", todoItem, index);
    // this.$store.commit('toggleOneItem',{todoItem, index})
    // },
  },
  computed:{
    // todoItems(){
    //     return this.$store.getters.storedTodoItems
    // }
    ...mapGetters(['storedTodoItems'])
  }
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
}
.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}
.checkBtnCompleted {
  color: #63adad;
}
.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}

/* 리스트 아이템 트랜지션 효과 */
/* 1. declare transition */
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

/* 2. declare enter from and leave to state */
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

/* 3. ensure leaving items are taken out of layout flow so that moving
      animations can be calculated correctly. */
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
</style>
