<script setup>
import {useTodosStore} from "./store/todos";

const {todos} = useTodosStore();

</script>

<template>
  <main>
    <input type="text" name="todo" id="todo" placeholder="Todo name...">
    <button>Add</button>
    <div v-for="todo in todos">
      <h4>{{todo.name}}</h4>
      <button>Toggle</button>
    </div>
  </main>
</template>

<style scoped>

</style>
