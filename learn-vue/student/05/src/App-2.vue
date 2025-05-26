<script setup>
import { RouterView, RouterLink, useRoute, useRouter } from 'vue-router'

const route = useRoute() //동적 세그먼트, 쿼리 스트링
console.log(route)
const router = useRouter() //페이지 전환
</script>
<template>
  <nav style="display: flex; gap: 10px">
    <RouterLink to="/">Home</RouterLink>
    <!-- <RouterLink to="/about">About</RouterLink> -->
    <!--named route 기법-->
    <RouterLink :to="{ name: 'about' }">About</RouterLink>
    <RouterLink to="/product/1">Product 1</RouterLink>
    <RouterLink :to="{ name: 'productDetail', params: { orderId: 1 } }"> Product 1 </RouterLink>
    <RouterLink to="/detail/2">Detail 2</RouterLink>

    <button @click="router.push('/about')">이동</button>
    <button @click="router.push({ name: 'about' })">이동</button>
    <!--replace : 브라우저 히스토리에 안남음 -->
    <button @click="router.replace({ name: 'about' })">이동</button>
    <button @click="router.go(-1)">이동</button>
  </nav>
  <RouterView />
</template>
<style scoped></style>
