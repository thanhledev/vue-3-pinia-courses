<script setup>
import {ref} from "vue";
import {useTodosStore} from "./store/todos";
import {storeToRefs} from "pinia";

const newTodo = ref("");

const todoStore = useTodosStore();
const {filteredTodos} = storeToRefs(todoStore);
const {addTodo, toggleTodo, updateFilterTerm} = todoStore;

const addNewTodo = () => {
  addTodo(newTodo.value);
  newTodo.value = "";
}

</script>

<template>
  <main>
    <div>
      <button @click="() => updateFilterTerm('all')">All</button>
      <button @click="() => updateFilterTerm('finished')">Finished</button>
      <button @click="() => updateFilterTerm('unfinished')">Unfinished</button>
    </div>
    <input type="text" name="todo" id="todo" placeholder="Todo name..." v-model="newTodo">
    <button @click="addNewTodo">Add</button>
    <div v-for="todo in filteredTodos" style="display: flex">
      <h4 :style="todo.isFinished && {textDecoration: 'line-through'}">{{todo.name}}</h4>
      <button @click="toggleTodo(todo.id)">Toggle</button>
    </div>
  </main>
</template>

<style scoped>

</style>
