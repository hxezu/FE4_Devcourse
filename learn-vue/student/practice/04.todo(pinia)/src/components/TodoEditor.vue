<script setup>
import { useTodoStore } from "@/stores/todo";
import { ref } from "vue";

const text = ref("");
const todoStore = useTodoStore();

const handleSubmit = () => {
  todoStore.addTodo(text.value);
  text.value = "";
};
</script>
<template>
  <form class="flex p-4" @submit.prevent="handleSubmit">
    <input
      v-model="text"
      type="text"
      placeholder="Enter a new todo"
      class="flex-grow p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <button
      class="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition-colors"
    >
      Add Todo
    </button>
  </form>
</template>
<style></style>
