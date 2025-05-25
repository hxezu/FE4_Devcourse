<script>
export default {
  name: 'CountDisplay',
  props: {
    count: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {}
  },
}
</script>
<template>
  <h1>Count: {{ count }}</h1>
</template>
<style scoped></style>
