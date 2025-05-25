<script>
export default {
  data() {
    return {
      orders: [
        { id: 1, product: 'Notebook', price: 1000 },
        { id: 2, product: 'Mouse', price: 200 },
        { id: 3, product: 'Keyboard', price: 300 },
      ],
    }
  },

  computed: {
    totalPrice() {
      return this.orders.reduce((a, v) => a + v.price, 0)
    },
  },

  methods: {
    formatPrice(price) {
      return price.toLocaleString('en-US')
    },
  },
}
</script>
<template>
  <h1>주문 목록</h1>
  <table border="1">
    <thead>
      <tr>
        <th>번호</th>
        <th>상품명</th>
        <th>가격</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="order in orders" :key="order.id">
        <td>{{ order.id }}</td>
        <td>{{ order.product }}</td>
        <td>{{ formatPrice(order.price) }}</td>
      </tr>
    </tbody>
    <tfoot>
      <td colspan="3">총 합: {{ formatPrice(totalPrice) }}</td>
    </tfoot>
  </table>
</template>
