<script>
export default {
  name: 'App-3',
  data() {
    return {
      str: '',
      field: '80',
      combo: 'female',
      fruit: ['banana'],
      gender: '',
      files: null,
    }
  },
  methods: {
    onInputHanlder(e) {
      this.str = e.target.value
    },
    printData() {
      console.log(this.field)
      console.log(this.combo)
      console.log(this.fruit)
      console.log(this.gender)
    },
    onChangeHandler(e) {
      console.log(e)
      this.files = e.target.files[0]
    },
  },
}
</script>
<template>
  <!-- <textarea v-model="str" /> -->
  <textarea @input="onInputHanlder($event)" />
  <p>글자 수 : {{ str.length }}</p>

  <textarea v-model="field" />

  <select v-model="combo">
    <option value="male">male</option>
    <option value="female">female</option>
  </select>

  <input type="checkbox" v-model="fruit" value="banana" />banana <br />
  <input type="checkbox" v-model="fruit" value="orange" />orange <br />

  <input type="radio" value="male" name="gender" v-model="gender" />male<br />
  <input type="radio" value="female" name="gender" v-model="gender" />female<br />

  <progress max="100" :value="field">{{ field }}%</progress><br />

  <input type="file" @change="($event) => onChangeHandler($event)" />

  <button @click="printData">출력</button>
</template>
<style scoped></style>
