<script>
export default {
  name: 'BaseTimer',
  data() {
    return {
      count: 0,
      interval: null,
    }
  },
  created() {
    this.interval = setInterval(() => {
      this.count += 1
    }, 1000)
  },
  beforeUnmount() {
    clearInterval(this.interval)
  },
}
</script>
<template>
  <h1>count: {{ count }}</h1>
</template>
<style scoped></style>
