<script setup>
import { RouterView, useRoute } from 'vue-router'
import DefaultLayout from './layout/DefaultLayout.vue'

const route = useRoute()
</script>

<template>
  <DefaultLayout>
    <RouterView :key="route.fullPath" />
  </DefaultLayout>
</template>
