<script>
export default {
  name: 'CountButtons',
  emits: ['increment', 'reset', 'decrement'],
  data() {
    return {}
  },
}
</script>
<template>
  <button @click="$emit('decrement')">-</button>
  <button @click="$emit('reset')">0</button>
  <button @click="$emit('increment')">+</button>
</template>
<style scoped></style>
