<script setup></script>
<template>
  <section class="detail">
    <div v-if="loading">로딩 중...</div>
    <div v-else-if="movie" class="detail-wrap">
      <div class="detail-info">
        <h2 class="detail-title">{{ movie.title }}</h2>
        <ul class="detail-features">
          <li class="features-item">
            <div class="progress-circle p50">
              <span>10%</span>
              <div class="left-half-clipper">
                <div class="first50-bar"></div>
                <div class="value-bar"></div>
              </div>
            </div>
          </li>
          <li class="features-item">
            {{ movie.genres?.map((g) => g.name).join(', ') || '장르 정보 없음' }}
          </li>
          <li class="features-item">
            {{ movie.runtime ? movie.runtime + '분' : '상영시간 정보 없음' }}
          </li>
        </ul>
        <p class="detail-desc">
          {{ movie.overview }}
        </p>
        <ul class="detail-maker">
          <li>
            <strong>Director</strong>
            :
            <span>Chirst Michels</span>
          </li>
          <li>
            <strong>Casting</strong>
            :
            <span>Tom Blyth•Rachel Zegler•Peter Dinklage•Jason Schwartzman•Hunter Schafer</span>
          </li>
          <li>
            <strong>Production</strong>
            :
            <span>{{
              movie.production_companies?.map((p) => p.name).join(', ') || '정보 없음'
            }}</span>
          </li>
        </ul>
      </div>
      <div class="detail-poster">
        <img :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`" alt="" />
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
