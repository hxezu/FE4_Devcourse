<script setup>
import { onMounted, ref } from 'vue'

const posts = ref([])
const loading = ref(true)
const error = ref(null)

onMounted(async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    if (!response.ok) throw new Error('Network not a failed')
    const data = await response.json()
    posts.value = data
    loading.value = false
  } catch (e) {
    console.error(e)
    error.value = e
  }
})
</script>
<template>
  <h1>HomeView Vue</h1>
  <div v-if="loading">Loading...</div>
  <div v-else-if="error">{{ error }}</div>
  <ul>
    <li v-for="post in posts" :key="post.id">
      <strong>{{ post.title }}</strong>
      <p>{{ post.body }}</p>
    </li>
  </ul>
</template>
<style scoped></style>
