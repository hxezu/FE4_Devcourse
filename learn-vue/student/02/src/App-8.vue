<!--watch-->
<script>
export default {
  name: 'App-8',
  data() {
    return {
      count: 0,
      message: '',
      blockWords: ['hate', '바보'],
      arrData: ['banana', 'apple'],
      objData: {
        name: 'hey',
        gender: 'female',
      },
      count2: 0,
      unwatch: null,
    }
  },
  watch: {
    message(newValue) {
      const regex = new RegExp(this.blockWords.join('|'), 'i')
      if (regex.test(newValue)) {
        alert('금칙어를 입력하였습니다.')
        this.message = this.message.replace(regex, '')
      }
    },

    arrData: {
      handler(newValue) {
        console.log(newValue)
      },
      deep: true,
      immediate: true,
    },

    objData: {
      handler(newValue) {
        console.log(newValue)
      },
      deep: true,
    },

    count: {
      handler(newValue) {
        console.log(newValue)
        if (document.querySelector('p')) document.querySelector('p').style.color = 'red'
      },
      flush: 'post',
    },
  },
  methods: {
    onInputHandler(e) {
      const str = e.target.value
      this.message = str
    },
    onClickHandler() {
      this.unwatch()
    },
  },

  //$watch 인스턴스
  created() {
    this.unwatch = this.$watch(
      'count2',
      (newValue) => {
        console.log(newValue)
      },
      { deep: true },
    )
  },
}
</script>
<template>
  <!-- <input type="text" @input="onInputHandler" :value="message" /> -->
  <input type="text" @input="message = $event.target.value" :value="message" />

  <br />

  <h1>{{ arrData }}</h1>
  <button @click="arrData.push('orange')">배열 데이터 추가</button>
  <h1>{{ objData }}</h1>
  <button @click="objData.age = 30">객체 데이터 추가</button>
  <h1>{{ count }}</h1>
  <p v-if="count >= 5">count 5보다 크거나 같습니다</p>
  <button @click="count++">+ count</button>

  <h1>$watch count</h1>
  <h2>{{ count2 }}</h2>
  <button @click="count2++">+ count2</button>
  <button @click="onClickHandler">해제</button>
</template>
<style scoped></style>
