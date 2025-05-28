<script setup>
import ListMovie from '@/components/list/ListMovie.vue'
import { useMovieStore } from '@/stores/movie'
import { storeToRefs } from 'pinia'
import { onBeforeUnmount, onMounted } from 'vue'
import { useRoute } from 'vue-router'

let page = 1
const route = useRoute()
const movieType = route.params.type
const keyword = route.query.keyword

const movieStore = useMovieStore()
const { movieMoreList, movieMoreListLoading, newMoreLoading } = storeToRefs(movieStore)

onMounted(() => {
  movieStore.getMovieMore(page, movieType, keyword)
  window.addEventListener('scroll', onScroll)
})

//스크롤 최적화
let debounceTimer = null
const onScroll = () => {
  if (debounceTimer) clearTimeout(debounceTimer)
  debounceTimer = setTimeout(() => {
    const nearBottom =
      window.innerHeight + window.screenY + 100 > document.documentElement.offsetHeight
    if (nearBottom) {
      movieStore.getMovieMore(++page, movieType, keyword)
    }
  }, 200)
}

onBeforeUnmount(() => {
  movieMoreList.value = []
  window.removeEventListener('scroll', onScroll)
})
</script>
<template>
  <ListMovie
    :movies="movieMoreList"
    :loading="movieMoreListLoading"
    :more-loading="newMoreLoading"
  />
</template>
<style scoped></style>
