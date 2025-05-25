<script>
import CountButtons from './CountButtons.vue'
import CountDisplay from './CountDisplay.vue'

export default {
  name: 'CountGroup',
  components: {
    CountDisplay,
    CountButtons,
  },
  props: {
    count: {
      type: Number,
    },
  },
  emits: ['increment', 'decrement', 'reset', 'incrementByAmount'],
}
</script>
<template>
  <CountDisplay :count="count" />
  <CountButtons
    @increment="$emit('increment')"
    @reset="$emit('reset')"
    @decrement="$emit('decrement')"
    @incrementByAmount="$emit('incrementByAmount')"
  />
  <!-- <CountButtonsWithProp :increment="increment" :reset="reset" :decrement="decrement" /> -->
</template>
<style scoped></style>
