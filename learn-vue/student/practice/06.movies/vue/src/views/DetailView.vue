<script setup>
import DetailInfo from '@/components/detail/DetailInfo.vue'
import DetailTrailer from '@/components/detail/DetailTrailer.vue'
import MainMovie from '@/components/main/MainMovie.vue'
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const movieId = computed(() => {
  const id = Number(route.params.id)
  return isNaN(id) ? -1 : id
})

const loading = ref(true)
const movie = ref(null)

const loadDetail = async () => {
  if (movieId.value === -1) {
    loading.value = false
  }
  loading.value = true
  try {
    movie.value = []
  } catch (e) {
    console.error(e)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  loadDetail()
})

watch(() => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
})
</script>
<template>
  <DetailTrailer :movieId="movieId" />
  <DetailInfo :movieId="movieId" />
  <MainMovie />
</template>
<style scoped></style>
