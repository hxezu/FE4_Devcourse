<script setup>
import MainBanner from '@/components/main/MainBanner.vue'
import MainMovie from '@/components/main/MainMovie.vue'
import { useMovieStore } from '@/stores/movie'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'

const movieStore = useMovieStore()
const {
  movieNowPlayingList,
  movieNowPlayingListLoading,
  moviePopularList,
  moviePopularListLoading,
  movieUpcomingList,
  movieUpcomingListLoading,
  movieTopRatedList,
  movieTopRatedListLoading,
} = storeToRefs(movieStore)
onMounted(() => {
  movieStore.getMovieNowPlaying()
  movieStore.getMoviePopular()
  movieStore.getMovieUpcoming()
  movieStore.getMovieTopRated()
})
</script>
<template>
  <MainBanner :movies="movieUpcomingList" :loading="movieUpcomingListLoading" />
  <MainMovie
    title="상영중인 영화"
    sub-title="Now Playing"
    type="now_playing"
    :movies="movieNowPlayingList"
    :loading="movieNowPlayingListLoading"
  />
  <MainMovie
    title="인기있는 영화"
    sub-title="Popular"
    type="popular"
    :movies="moviePopularList"
    :loading="moviePopularListLoading"
  />
  <MainMovie
    title="개봉예정 영화"
    sub-title="Upcoming"
    type="upcoming"
    :movies="movieUpcomingList"
    :loading="movieUpcomingListLoading"
  />
  <MainMovie
    title="높은 평점을 받은 영화"
    sub-title="Top Rated"
    type="top_rated"
    :movies="movieTopRatedList"
    :loading="movieTopRatedListLoading"
  />
</template>
<style scoped></style>
