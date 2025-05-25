<script>
export default {
  name: 'App-4',
  data() {
    return {}
  },
  methods: {
    greet() {
      console.log('greet')
    },
    printHello(userObj) {
      console.log('Hello', userObj.name, userObj.age)
    },
  },
}
</script>
<template>
  <FirstChild2 name="hxezu" email="test@gmail.com" />
  <button @click="() => greet()">Greet</button>
  <SecondChild my-custom-value="hyeju" @greet="greet" @print-hello="printHello" />
  <SecondChild
    my-custom-value="hyeju"
    @greet="greet"
    @print-hello="({ name, age }) => printHello(name, age)"
  />
</template>
<style scoped></style>
