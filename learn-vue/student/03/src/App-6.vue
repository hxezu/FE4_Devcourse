<!--Counter-->
<script>
import CountGroup from './components/CountGroup.vue'

export default {
  name: 'App-6',
  components: {
    CountGroup,
  },
  data() {
    return { count: 0 }
  },
  methods: {
    decrement() {
      this.count -= 1
    },
    reset() {
      this.count = 0
    },
    increment() {
      this.count += 1
    },
    incrementByAmount(value) {
      this.count += value
    },
  },
}
</script>
<template>
  <CountGroup :count="count" @increment="increment" @reset="reset" @decrement="decrement" />
</template>
<style scoped></style>
