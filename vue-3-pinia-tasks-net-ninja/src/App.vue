<script setup>
import {useTaskStore} from "./stores/TaskStore";
import TaskDetails from "./components/TaskDetails.vue";

const taskStore = useTaskStore();
</script>

<template>
  <main>
    <!-- heading -->
    <header>
      <img src="./assets/pinia-logo.svg" alt="Pinia Logo">
      <h1>Pinia Tasks</h1>
    </header>

    <!-- tasks list -->
    <div class="task-list">
      <div v-for="task in taskStore.tasks">
        <TaskDetails :task="task" />
      </div>
    </div>
  </main>
</template>

<style scoped>

</style>
