<script setup>
import CountGroup from '@/components/CountGroup.vue'
import CountOutside from '@/components/CountOutside.vue'
</script>
<template>
  <!-- <div style="height: 5000px">
    <h1>HomeView Vue</h1>
  </div> -->
  <CountGroup :count @increment="increment" @decrement="decrement" @reset="reset" />
  <CountOutside :count />
</template>
<style scoped></style>
