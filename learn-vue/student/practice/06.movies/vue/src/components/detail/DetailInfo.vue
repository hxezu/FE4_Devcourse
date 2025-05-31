<script setup>
import { computed } from 'vue'

const props = defineProps({
  movie: Object,
  loading: Boolean,
  credit: Object,
  creditLoading: Boolean,
})

const convertMinutesToHours = (minutes) => {
  const hours = Math.floor(minutes / 60)
  const remainMinutes = minutes % 60

  let result = ''
  if (hours > 0) {
    result += `${hours}h `
  }
  if (remainMinutes > 0 || hours === 0) {
    result += `${remainMinutes}m`
  }
  return result
}

const director = computed(() => {
  if (props.credit && props.credit?.crew && props.credit?.crew?.length > 0)
    return props.credit.crew.filter((v) => v.job === 'Director').map((v) => v.name)[0]
  return null
})

const casting = computed(() => {
  if (props.credit && props.credit?.cast && props.credit?.cast.length > 0)
    return props.credit.cast
      .filter((v) => v.known_for_department === 'Acting' && v.order <= 4)
      .map((v) => v.name)
      .join(', ')
  return 'No Casting'
})

const production = computed(() => {
  if (props.movie && props.movie?.production_companies?.length > 0)
    return props.movie.production_companies.map((v) => v.name).join(', ')
  return '정보 없음'
})
</script>
<template>
  <section class="detail">
    <div v-if="loading">로딩 중...</div>
    <div v-else-if="movie" class="detail-wrap">
      <div class="detail-info">
        <h2 class="detail-title">{{ props.movie.title }}</h2>
        <ul class="detail-features">
          <li class="features-item">
            <div
              class="progress-circle"
              :class="[
                `p${Math.floor(props.movie.vote_average * 10)}`,
                { over50: Math.floor(props.movie.vote_average * 10) > 50 },
              ]"
            >
              <span>{{ Math.floor(props.movie.vote_average * 10) }}%</span>
              <div class="left-half-clipper">
                <div class="first50-bar"></div>
                <div class="value-bar"></div>
              </div>
            </div>
          </li>
          <li class="features-item">
            {{ props.movie.genres?.map((g) => g.name).join(', ') || '장르 정보 없음' }}
          </li>
          <li class="features-item">
            {{
              props.movie.runtime
                ? convertMinutesToHours(props.movie.runtime)
                : '상영시간 정보 없음'
            }}
          </li>
        </ul>
        <p class="detail-desc">
          {{ props.movie.overview }}
        </p>
        <ul class="detail-maker">
          <li>
            <strong>Director</strong>
            :
            <span>{{ director }}</span>
          </li>
          <li>
            <strong>Casting</strong>
            :
            <span>{{ casting }}</span>
          </li>
          <li>
            <strong>Production</strong>
            :
            <span>{{ production }}</span>
          </li>
        </ul>
      </div>
      <div class="detail-poster">
        <img :src="`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`" alt="" />
      </div>
    </div>
    <!-- <div class="detail-wrap">
      <div class="detail-info">
        <h2 class="detail-title skeleton-list-item ui3"></h2>
        <ul class="detail-features skeleton-list-item ui4"></ul>
        <p class="skeleton-list-item ui4"></p>
        <ul class="detail-maker">
          <li class="skeleton-list-item ui5"></li>
          <li class="skeleton-list-item ui5"></li>
          <li class="skeleton-list-item ui5"></li>
        </ul>
      </div>
      <div class="detail-poster">
        <a href="#" class="skeleton-list-item ui0"></a>
      </div>
    </div> -->
  </section>
</template>
<style scoped></style>
