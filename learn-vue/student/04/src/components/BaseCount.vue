<!--라이프사이클 훅-->
<script>
export default {
  name: 'BaseCount',
  data() {
    return {
      count: 0,
    }
  },
  //생성 단계
  beforeCreate() {
    console.log('before create', this.count)
  },
  created() {
    console.log('created', this.count)
  },
  //연결 단계
  mounted() {
    console.log('mounted')
  },
  beforeMount() {
    console.log('before mount')
  },
  //변경 단계
  updated() {
    console.log('updated', this.count)
  },
  beforeUpdate() {
    console.log('before updated', this.count)
  },
  //해제 단계
  unmounted() {
    console.log('unmounted')
  },
  beforeUnmount() {
    console.log('before unmounted')
  },
  computed: {
    doubleCount() {
      return this.count * 2
    },
  },
  methods: {
    increment() {
      this.count += 1
    },
  },
}
</script>
<template>
  <h1>count : {{ count }}</h1>
  <button @click="count += 1">count</button>
</template>
<style scoped></style>
