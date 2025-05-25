<script>
import BaseCount from './components/BaseCount.vue'

export default {
  name: 'App-2',
  data() {
    return {}
  },
  components: {
    BaseCount,
  },
  mounted() {
    const h1El = document.querySelector('h1')
    const text = h1El.innerText
    console.log(text)
    console.log(this.$refs.h1El.innerText)
  },
  methods: {
    incrementParnet() {
      this.$refs.baseCount.increment()
    },
  },
}
</script>
<template>
  <h1 ref="h1El">App-2 Vue</h1>
  <BaseCount ref="baseCount" />
  <button @click="incrementParnet">외부 버튼</button>
</template>
<style scoped></style>
