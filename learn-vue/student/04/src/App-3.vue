<!--slot-->
<script>
import BaseButton from './components/BaseButton.vue'
import DefaultLayout from './layout/DefaultLayout.vue'

export default {
  name: 'App-3',
  data() {
    return { text: 'SignUp' }
  },
  components: {
    BaseButton,
    DefaultLayout,
  },
}
</script>
<template>
  <BaseButton
    ><span>{{ text }}</span></BaseButton
  >
  <br />

  <DefaultLayout>
    <template v-slot:header>
      <header><h1>Header</h1></header>
    </template>
    <template v-slot:main>
      <main><h1>main</h1></main>
    </template>
    <template v-slot:footer>
      <footer><h1>Footer</h1></footer>
    </template>
  </DefaultLayout>
</template>
<style scoped>
span {
  color: red;
}
</style>
