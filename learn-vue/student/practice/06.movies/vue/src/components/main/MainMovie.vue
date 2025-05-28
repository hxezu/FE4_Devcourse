<script setup>
import MovieCard from '../MovieCard.vue'

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'

const props = defineProps({
  title: String,
  subTitle: String,
  type: String,
  movies: Array,
  loading: Boolean,
})
</script>
<template>
  <section class="movie">
    <h3 class="movie-category">{{ props.subTitle }}</h3>
    <h4 class="movie-subtext">
      {{ props.title }} <RouterLink :to="`/movie/${props.type}`">더보기</RouterLink>
    </h4>
    <div class="movie-list">
      <template v-if="props.loading">
        <div class="movie-list__item">
          <a href="#" class="skeleton-list-item ui0"> </a>
        </div>
      </template>
      <template v-else>
        <swiper
          :slides-per-view="1"
          :breakpoints="{
            '380': { slidesPerView: 2 },
            '480': { slidesPerView: 3 },
            '740': { slidesPerView: 4 },
            '980': { slidesPerView: 5 },
          }"
        >
          <swiper-slide v-for="movie in movies" :key="movie.id">
            <div class="movie-list__item">
              <MovieCard :movie="movie" />
            </div>
          </swiper-slide>
        </swiper>
      </template>
    </div>
  </section>
</template>
<style scoped></style>
