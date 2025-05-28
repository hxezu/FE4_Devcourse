<script setup>
import { useTodoStore } from "@/stores/todo";
import TodoListItem from "./TodoListItem.vue";

const todoStore = useTodoStore();
</script>
<template>
  <ul class="divide-y divide-gray-200">
    <TodoListItem />
  </ul>
</template>
<style></style>
