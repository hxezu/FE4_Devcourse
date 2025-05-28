<script setup>
import { useTodoStore } from "@/stores/todo";

const todoStore = useTodoStore();
</script>
<template>
  <li
    v-for="todo in todoStore.todos"
    :key="todo.id"
    class="flex items-center justify-between p-3 border-b hover:bg-gray-100 transition-colors"
  >
    <div class="flex items-center">
      <input
        type="checkbox"
        :class="`mr-3 h-4 w-4 text-blue-500 focus:ring-blue-400`"
        :checked="todo.done"
        @change="todoStore.toggleTodo(todo.id)"
      />
      <span>{{ todo.text }}</span>
    </div>
    <button
      class="text-red-500 hover:text-red-700 ml-4"
      @click="todoStore.deleteTodo(todo.id)"
    >
      Delete
    </button>
  </li>
</template>
