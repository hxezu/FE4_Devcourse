<script setup>
import { computed } from 'vue'

const props = defineProps({
  movies: Array,
  loading: Boolean,
})

const randomMovie = computed(() => {
  if (!props.movies || props.movies.length === 0) return null

  const movieFilter = props.movies.filter((movie) => movie.overview && movie.overview.trim() !== '')
  if (movieFilter.length === 0) return null

  const randomIndex = Math.floor(Math.random() * movieFilter.length)
  return movieFilter[randomIndex]
})
</script>
<template>
  <section v-if="!props.loading && randomMovie" class="release">
    <div
      class="release-item"
      :style="`background-image: url('https://image.tmdb.org/t/p/w500/${randomMovie.poster_path}')`"
    >
      <div class="release__text">
        <strong class="release__category">NEW RELEASE</strong>
        <h2 class="release__title">{{ randomMovie.title }}</h2>
        <p class="release__desc">
          {{ randomMovie.overview }}
        </p>
        <router-link class="release__btn" :to="`/detail/${randomMovie.id}`">자세히보기</router-link>
      </div>
    </div>
  </section>
</template>
<style scoped></style>
