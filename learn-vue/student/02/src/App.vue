<!--Counter-->
<script>
export default {
  name: 'App',
  data() {
    return {
      num: 10,
      str: 'hello',
      bool: true,
      undi: undefined,
      nul: null,
      arr: [10],
      obj: { name: 'kim' },
      name: 'chulsu',
      gender: 'male',
      age: 20,
    }
  },
  methods: {
    increment() {
      this.num += 1
    },
    decrement() {
      this.num -= 1
    },
    dataChange() {
      this.str = 'hi'
      this.num = 20
      this.bool = false
      this.undi = 10
      this.nul = 10
      this.obj.name = 'John'
    },
    method() {
      console.log('method called')
      this.methodA()
      this.methodB()
    },
    methodA() {
      console.log('methodA called')
    },
    methodB() {
      console.log('methodB called')
    },
  },
}
</script>
<template>
  <h1>{{ num }}</h1>
  <!-- <button v-on:click="decrement">감소</button>
  <button v-on:click="increment">증가</button> -->
  <button v-on:click="num--">감소</button>
  <button v-on:click="num++">증가</button>
  <h1>{{ str }}</h1>
  <h1>{{ bool }}</h1>
  <h1>{{ undi === undefined ? 'undefined' : 'defined' }}</h1>
  <h1>{{ nul === null ? 'null' : 'not null' }}</h1>
  <button @click="dataChange">변경</button>
  <button @click="method">메소드 호출</button>
  <h1 v-once>{{ str }}</h1>
  <button @click="message = 'bye'">message 변경</button>

  <div v-memo="[name, gender]">
    <h1>{{ name }}</h1>
    <h1>{{ gender }}</h1>
    <h1>{{ age }}</h1>
  </div>
  <button @click="name = 'john'">name 변경</button>
  <button @click="gender = 'female'">gender 변경</button>
  <button @click="age = '30'">age 변경</button>
</template>
<style scoped></style>
