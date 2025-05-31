<script setup>
import DetailInfo from '@/components/detail/DetailInfo.vue'
import DetailTrailer from '@/components/detail/DetailTrailer.vue'
import MainMovie from '@/components/main/MainMovie.vue'
import { useMovieStore } from '@/stores/movie'
import { storeToRefs } from 'pinia'
import { computed, onBeforeUnmount, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const movieStore = useMovieStore()
const {
  movieDetail,
  movieDetailLoading,
  movieTrailerList,
  movieTrailerListLoading,
  movieDiscoverList,
  movieDiscoverListLoading,
  movieCreditList,
  movieCreditListLoading,
} = storeToRefs(movieStore)

onMounted(() => {
  movieStore.getDetailsbyMovieId(route.params.id)
  movieStore.getMovieTrailerbyMovieID(route.params.id)
  movieStore.getMovieCredits(route.params.id)
})

const genre = computed(() => {
  return movieDetail.value.genres?.map((v) => v.id).join(',') || ''
})

watch(genre, (newValue) => {
  movieStore.getMovieDiscover(newValue, movieDetail.value.original_title)
})

const detailList = computed(() => {
  return movieDiscoverList.value.filter((v) => v.id !== Number(route.params.id))
})

onBeforeUnmount(() => {
  movieDetail.value = []
  movieDetailLoading.value = true
  movieDiscoverListLoading.value = true
})
</script>
<template>
  <DetailTrailer :trailer="movieTrailerList" :loading="movieTrailerListLoading" />
  <DetailInfo
    :movie="movieDetail"
    :loading="movieDetailLoading"
    :credit="movieCreditList"
    :credit-loading="movieCreditListLoading"
  />
  <MainMovie
    v-if="detailList && detailList.length > 0"
    title="비슷한 장르의 영화"
    sub-title="Relative Movies"
    type="relative"
    :movies="detailList"
    :loading="movieDiscoverListLoading"
  />
</template>
<style scoped></style>
