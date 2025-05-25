<!--스타일링-->
<script>
import FirstChild from '@/components/FirstChild.vue'

export default {
  name: 'App-2',
  components: {
    FirstChild,
  },
  data() {
    return {}
  },
}
</script>
<template>
  <h1>App Vue</h1>
  <h2 class="text-blue-500">h2</h2>
  <FirstChild />
</template>
<style scoped>
h1 {
  color: red;
}
</style>
