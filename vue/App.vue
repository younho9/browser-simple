<script setup lang="ts">
import { ref } from "vue";
import { useArrayEvery } from "@vueuse/core";

interface Todo {
  title: string;
  completed: boolean;
}

const todos = ref<Todo[]>([]);
const completed = useArrayEvery(todos, (todo) => todo.completed);

const todo = ref("");
</script>

<template>
  <input v-model="todo" />
  <button @click="todos.push({ title: todo, completed: false })">
    Add Todo
  </button>

  <div>
    <template v-for="(todo, idx) of todos" :key="idx">
      <section>
        <h1>{{ todo.title }}</h1>
        <input type="checkbox" v-model="todo.completed" />
      </section>
    </template>
  </div>

  <div data-testid="completed">
    <span>{{ completed ? "All completed" : "Not all completed" }}</span>
  </div>
</template>
