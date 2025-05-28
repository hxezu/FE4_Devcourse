<script setup>
const props = defineProps({
  movie: Object,
})
</script>
<template>
  <router-link :to="`/detail/${props.movie.id}`">
    <figure>
      <img :src="`https://image.tmdb.org/t/p/w500${props.movie.poster_path}`" alt="" />
    </figure>
    <div class="movie-list__txt">
      <div
        class="progress-circle"
        :class="[
          `p${Math.floor(movie.vote_average * 10)}`,
          { over50: Math.floor(movie.vote_average * 10) > 50 },
        ]"
      >
        <span>{{ Math.floor(movie.vote_average * 10) }}</span>
        <div class="left-half-clipper">
          <div class="first50-bar"></div>
          <div class="value-bar"></div>
        </div>
      </div>
      <strong class="movie-list__title">{{ props.movie.original_title }}</strong>
      <span class="release_date">{{ props.movie.release_date }}</span>
    </div>
  </router-link>
</template>
<style scoped></style>
