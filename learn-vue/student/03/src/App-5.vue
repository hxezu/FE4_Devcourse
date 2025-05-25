<script>
export default {
  name: 'App-5',
  data() {
    return { name: '철수' }
  },
  methods: {
    printHello() {
      console.log('hello')
    },
  },
}
</script>
<template>
  <!--사용자 정의 이벤트-->
  <FirstChild3 :name :print="printHello" @print-hello="() => console.log('click')" />
  <button @click="() => console.log('click')">클릭</button>
</template>
<style scoped></style>
