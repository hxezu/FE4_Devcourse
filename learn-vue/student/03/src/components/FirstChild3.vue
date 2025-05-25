<script>
export default {
  name: 'FirstChild3',
  data() {
    return {}
  },
  emits: ['printHello'],
  props: {
    name: {
      type: String,
    },
    print: {
      type: Function,
    },
  },
}
</script>
<template>
  <h1>{{ name }}</h1>
  <button @click="$emit('printHello')">자식 버튼</button>
  <button @click="print">자식 버튼(props)</button>
</template>
<style scoped></style>
