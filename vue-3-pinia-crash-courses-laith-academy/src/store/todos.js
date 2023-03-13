import {defineStore} from "pinia";

export const useTodosStore = defineStore("todos", {
    state: () => ({
        todos: [
            {
                id: 1,
                name: "Clean room",
                isFinished: false,
            },
            {
                id: 2,
                name: "Clean kitchen",
                isFinished: true,
            },
            {
                id: 3,
                name: "Clean toilet",
                isFinished: false,
            },
        ],
        filterTerm: "all",
    }),
    getters: {
        filteredTodos() {
            if (this.filterTerm === "finished") {
                return this.todos.filter((todo) => todo.isFinished)
            } else if (this.filterTerm === "unfinished") {
                return this.todos.filter((todo) => !todo.isFinished)
            } else {
                return this.todos;
            }
        }
    },
    actions: {
        addTodo(text) {
            if (!text) return;
            this.todos.push({
                id: Math.floor(Math.random()*100000),
                name: text,
                isFinished: false,
            });
        },
        toggleTodo(id) {
            const todoIndex = this.todos.findIndex((todo) => todo.id === id);
            this.todos[todoIndex].isFinished = !this.todos[todoIndex].isFinished;
        },
        updateFilterTerm(value) {
            this.filterTerm = value.toLowerCase();
        }
    }
});