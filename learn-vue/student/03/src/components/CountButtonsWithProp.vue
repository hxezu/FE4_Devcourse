<script>
export default {
  name: 'CountButtonsWithProp',
  props: {
    decrement: {
      type: Function,
    },
    reset: {
      type: Function,
    },
    increment: {
      type: Function,
    },
    incrementByAmount: {
      type: Function,
    },
  },
  data() {
    return {}
  },
}
</script>
<template>
  <button @click="decrement">-</button>
  <button @click="reset">0</button>
  <button @click="increment">+</button>
  <button @click="incrementByAmount(10)">++</button>
</template>
<style scoped></style>
