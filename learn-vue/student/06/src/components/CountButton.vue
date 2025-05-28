<script setup>
import { useCountStore } from '@/stores/count'

const countStore = useCountStore()
</script>
<template>
  <button @click="countStore.decrement">감소</button>
  <button @click="countStore.reset">0</button>
  <button @click="countStore.increment">증가</button>
</template>
<style scoped></style>
