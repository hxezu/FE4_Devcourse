<script setup>
import TodoEditor from "./TodoEditor.vue";
import TodoHeader from "./TodoHeader.vue";
import TodoList from "./TodoList.vue";

import { ref, watch, onMounted } from "vue";

const todos = ref([]);
const addTodo = (text) => {
  todos.value.push({
    id: Date.now(),
    text,
    done: false,
  });
};

const toggleTodo = (id) => {
  todos.value = todos.value.map((todo) =>
    todo.id === id ? { ...todo, done: !todo.done } : todo
  );
};

const deleteTodo = (id) => {
  todos.value = todos.value.filter((todo) => todo.id !== id);
};

onMounted(() => {
  const saved = sessionStorage.getItem("vue_todo");
  if (saved) {
    todos.value = JSON.parse(saved);
  }
});

watch(
  todos,
  (newTodos) => {
    sessionStorage.setItem("vue_todo", JSON.stringify(newTodos));
  },
  {
    deep: true,
  }
);
</script>
<template>
  <div class="max-w-md mx-auto shadow-lg rounded-lg overflow-hidden">
    <TodoHeader />
    <TodoEditor @add-todo="addTodo" />
    <TodoList
      :todos="todos"
      @toggle-todo="toggleTodo"
      @delete-todo="deleteTodo"
    />
  </div>
</template>
<style></style>
