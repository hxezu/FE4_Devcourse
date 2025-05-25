<!--컴포넌트-->
<script>
import BaseBox from './components/BaseBox.vue'
import FirstChild2 from './components/FirstChild2.vue'

export default {
  name: 'App-3',
  components: {
    FirstChild2,
    BaseBox,
  },
  data() {
    return {}
  },
}
</script>
<template>
  <h1>App Vue</h1>
  <FirstChild2 />
  <div class="wrap">
    <BaseBox bgcolor="red" size="25" />
    <BaseBox bgcolor="blue" size="50" />
    <BaseBox bgcolor="green" />
  </div>
</template>
<style scoped>
.wrap {
  display: inline-flex;
  justify-content: center;
  padding: 1rem;
  border: 1px solid #999;
}
</style>
