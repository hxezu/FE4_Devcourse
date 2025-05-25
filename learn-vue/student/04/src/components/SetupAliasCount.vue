<script setup>
import { reactive, computed, ref, watchEffect, watch } from 'vue'

const count = ref(0)
const numArrs = ref([1, 2, 3])
const doubleCount = computed(() => count.value * 2)
const decrement = () => (count.value -= 1)
const reset = () => (count.value = 0)
const increment = () => (count.value += 1)

const userObj = reactive({ name: 'hyeju' })
console.log(userObj)

watchEffect(() => {
  console.log(count.value)
})

watch(numArrs, (n, o) => console.log(n, o), {
  deep: true,
  immediate: true,
  flush: 'post',
})
</script>
<template>
  <h1>SetupAliasCount : {{ count }}</h1>
  <button @click="decrement">-</button>
  <button @click="reset">0</button>
  <button @click="increment">+</button>
  <button @click="doubleCount">x2</button>
  <h1>{{ numArrs }}</h1>
  <button @click="numArrs.push(4)">추가</button>
</template>
<style scoped></style>
