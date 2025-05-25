<!--form-->
<script>
export default {
  name: 'App-2',
  data() {
    return { id: 'test', pw: '1234' }
  },
  methods: {
    login() {
      console.log(`id: ${this.id}`)
      console.log(`pw: ${this.pw}`)
    },
    // onChangeHandler(e) {
    //   console.log('event called : ', e.target.value)
    //   this.id = e.target.value
    // },
  },
}
</script>
<template>
  <form>
    <!-- <input type="text" name="uid" @change="($event) => onChangeHandler($event)" /> -->
    <!-- <input type="text" name="uid" @change="id = $event.target.value" :value="id" /> -->
    <input type="text" name="uid" v-model="id" />
    <input type="password" name="pw" v-model="pw" />
    <button type="button" @click="login">로그인</button>
  </form>
</template>
<style scoped></style>
