<!--computed-->
<script>
export default {
  name: 'App-5',
  data() {
    return { message: 'Hello, Vue', firstName: 'Hyeju', lastName: 'Hyun' }
  },
  computed: {
    //computed 연산은 한번만 수행
    //참조하고 있는 데이터가 변경되면 다시 수행
    reverseMessage: function () {
      return this.message.split('').reverse().join('')
    },

    currentDate() {
      return new Date()
    },

    fullName: {
      get() {
        return `${this.lastName} ${this.firstName}`
      },
      set(newValue) {
        const [last, first] = newValue.split(' ')
        this.lastName = last
        this.firstName = first
      },
    },
  },

  methods: {
    changeName() {
      this.fullName = 'Kim Chulsu'
    },
  },

  created() {
    setTimeout(() => {
      this.message = 'change vue'
    }, 5000)
  },
}
</script>
<template>
  <h1>원본 메세지: {{ message }}</h1>
  <h2>역순 메세지: {{ reverseMessage }}</h2>
  <p>{{ currentDate }}</p>
  <p>{{ fullName }}</p>
  <button @click="changeName">이름 변경</button>
</template>
<style scoped></style>
