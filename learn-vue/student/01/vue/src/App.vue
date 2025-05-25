<script>
export default {
  //Options API 사용
  data() {
    return {
      condition: 'A',
      fruits: ['apple', 'banana', 'orange'],
      arrInObj: [
        { name: '철수', age: 20 },
        { name: '영희', age: 22 },
      ],
    }
  },
}
</script>
<template>
  <ul>
    <li v-for="item in arrInObj" :key="item.id">{{ item.name }}</li>
  </ul>
</template>
<style scoped></style>
