<script>
export default {
  data() {
    return {
      author: [
        {
          name: 'John',
          books: ['HTML Level Up!', 'CSS Level Up'],
        },
        {
          name: 'Kim',
          books: ['VueJS Master'],
        },
        {
          name: 'Han',
          books: ['React RoadMap'],
        },
      ],
    }
  },

  computed: {
    tableData() {
      return this.author.map((item) => {
        return {
          name: item.name,
          book: item.books.join(','),
          count: item.books.length,
        }
      })
    },
  },
}
</script>
<template>
  <h1>출판 목록</h1>
  <table border="1">
    <thead>
      <tr>
        <th>번호</th>
        <th>상품명</th>
        <th>가격</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in tableData" :key="item.key">
        <td>{{ item.name }}</td>
        <td>{{ item.book }}</td>
        <td>{{ item.count }}권</td>
      </tr>
    </tbody>
  </table>
</template>
