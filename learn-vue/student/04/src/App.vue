<script>
import BaseCount from './components/BaseCount.vue'
import BaseTimer from './components/BaseTimer.vue'

export default {
  name: 'App',
  components: {
    BaseCount,
    BaseTimer,
  },
  data() {
    return {
      isShow: true,
    }
  },
  methods: {
    incrementParnet() {
      this.$refs.baseCount.increment()
    },
  },
}
</script>
<template>
  <BaseCount v-if="isShow" ref="baseCount" />
  <BaseTimer v-if="isShow" />
  <button @click="isShow = !isShow">클릭</button>
</template>
<style scoped></style>
