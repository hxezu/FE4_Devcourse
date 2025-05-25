<script>
export default {
  name: 'SecondChild',
  data() {
    return {}
  },
  emits: ['greet', 'printHello'],
  props: {
    myCustomValue: {
      type: String,
    },
  },
  methods: {
    clickHandler() {
      this.$emit('greet')
    },
  },
}
</script>
<template>
  <h1>SecondChild</h1>
  <h1>{{ myCustomValue }}</h1>
  <button @click="$emit('greet')">클릭</button>
  <button @click="clickHandler">클릭</button>
  <button @click="$emit('printHello')">클릭</button>
  <button @click="$emit('printHello', { name: 'sucoding', age: 30 })">클릭</button>
</template>
<style scoped></style>
