<script setup>
const props = defineProps({
  name: String,
  age: {
    type: Number,
    required: true,
  },
})

const emit = defineEmits(['increment'])
</script>
<template>
  <h1>{{ props.name }}</h1>
  <h1>{{ props.age }}</h1>
  <button @click="emit('increment')">클릭</button>
</template>
<style scoped></style>
