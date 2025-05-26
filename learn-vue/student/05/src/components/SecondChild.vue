<script setup>
import { inject } from 'vue'

const count = inject('count')
const increment = inject('increment')
</script>
<template>
  <h1>{{ count }}</h1>
  <button @click="increment">증가</button>
</template>
<style scoped></style>
