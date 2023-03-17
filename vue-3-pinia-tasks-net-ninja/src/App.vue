<script setup>
import {ref} from "vue";
import {useTaskStore} from "./stores/TaskStore";

import TaskForm from "./components/TaskForm.vue";
import TaskDetails from "./components/TaskDetails.vue";

const taskFilter = ref('all');
const taskStore = useTaskStore();
</script>

<template>
  <main>
    <!-- heading -->
    <header>
      <img src="./assets/pinia-logo.svg" alt="Pinia Logo">
      <h1>Pinia Tasks</h1>
    </header>

    <!-- new task form -->
    <div class="new-task-form">
      <TaskForm />
    </div>

    <!-- filter -->
    <nav class="filter">
      <button @click="taskFilter = 'all'">All tasks</button>
      <button @click="taskFilter = 'favs'">Favs tasks</button>
    </nav>

    <!-- tasks list -->
    <div class="task-list" v-if="taskFilter === 'all'">
      <p>You have {{taskStore.totalCount}} tasks left to do</p>
      <div v-for="task in taskStore.tasks">
        <TaskDetails :task="task" />
      </div>
    </div>

    <div class="task-list" v-if="taskFilter === 'favs'">
      <p>You have {{taskStore.favCount}} tasks left to do</p>
      <div v-for="task in taskStore.favs">
        <TaskDetails :task="task" />
      </div>
    </div>
  </main>
</template>

<style scoped>

</style>
