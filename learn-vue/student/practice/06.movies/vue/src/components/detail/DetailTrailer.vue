<script setup>
import { computed } from 'vue'

const props = defineProps({
  trailer: Object,
  loading: Boolean,
})

const movieTrailer = computed(() => {
  if (props.trailer.site && props.trailer.key) {
    return props.trailer.site.toLowerCase() === 'youtube'
      ? `https://www.youtube.com/embed/${props.trailer.key}`
      : `https://www.vimeo.com/embed/${props.trailer.key}`
  }
  return null
})
</script>
<template>
  <section class="trailer">
    <iframe
      v-if="loading"
      class="skeleton-list-item"
      width="900"
      height="506"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
    <iframe
      v-else
      width="900"
      height="506"
      :src="movieTrailer"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
  </section>
</template>
<style scoped></style>
