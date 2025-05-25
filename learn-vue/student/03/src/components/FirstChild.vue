<script>
export default {
  name: 'FirstChild',
  data() {
    return { color: 'blue', isLoggedIn: true }
  },
}
</script>
<template>
  <h1 :class="{ isLoggedIn }" :style="{ color, textDecoration: 'underline' }">FirstChild Vue</h1>
  <h2>FirstChild Vue</h2>
</template>
<style scoped>
.isLoggedIn {
  font-size: 50px;
}
</style>
