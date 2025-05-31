import { useFetch } from '@/composables/useFetch'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMovieStore = defineStore('movie', () => {
  const movieNowPlayingList = ref([])
  const movieNowPlayingListLoading = ref(false)

  const getMovieNowPlaying = async (page = 1) => {
    try {
      movieNowPlayingListLoading.value = true
      const response = await useFetch('/movie/now_playing', 'get', {
        language: 'ko',
        page,
      })
      movieNowPlayingList.value = response.data.results
      movieNowPlayingListLoading.value = false
    } catch (e) {
      console.error(e)
    }
  }

  const moviePopularList = ref([])
  const moviePopularListLoading = ref(false)
  const getMoviePopular = async (page = 1) => {
    try {
      moviePopularListLoading.value = true
      const response = await useFetch('/movie/popular', 'get', {
        language: 'ko',
        page,
      })
      moviePopularList.value = response.data.results
      moviePopularListLoading.value = false
    } catch (e) {
      console.error(e)
    }
  }

  const movieUpcomingList = ref([])
  const movieUpcomingListLoading = ref(false)
  const getMovieUpcoming = async (page = 1) => {
    try {
      movieUpcomingListLoading.value = true
      const response = await useFetch('/movie/upcoming', 'get', {
        language: 'ko',
        page,
      })
      movieUpcomingList.value = response.data.results
      movieUpcomingListLoading.value = false
    } catch (e) {
      console.error(e)
    }
  }

  const movieTopRatedList = ref([])
  const movieTopRatedListLoading = ref(false)
  const getMovieTopRated = async (page = 1) => {
    try {
      movieTopRatedListLoading.value = true
      const response = await useFetch('/movie/top_rated', 'get', {
        language: 'ko',
        page,
      })
      movieTopRatedList.value = response.data.results
      movieTopRatedListLoading.value = false
    } catch (e) {
      console.error(e)
    }
  }

  const movieDiscoverList = ref([])
  const movieDiscoverListLoading = ref(false)
  const getMovieDiscover = async (genres) => {
    try {
      movieDiscoverListLoading.value = true
      const response = await useFetch('/discover/movie', 'get', {
        language: 'ko',
        with_genres: genres,
      })
      movieDiscoverList.value = response.data.results
      movieDiscoverListLoading.value = false
    } catch (e) {
      console.error(e)
    }
  }

  let movieTotalPages = 500
  const movieMoreList = ref([])
  const newMoreLoading = ref(false)
  const movieMoreListLoading = ref(false)

  const getMovieMore = async (page = 1, type = 'now_playing', query = '') => {
    if (movieTotalPages < page) return
    if (page > 1) newMoreLoading.value = true
    if (page === 1) movieMoreListLoading.value = true
    try {
      let response = null

      if (query === '') {
        response = await useFetch(`/movie/${type}`, 'get', {
          language: 'ko',
          page,
        })
      } else {
        response = await useFetch(`/search/movie`, 'get', {
          language: 'ko',
          query,
          page,
        })
      }
      movieTotalPages = Math.min(500, response.data.total_pages)
      movieMoreList.value = [...movieMoreList.value, ...response.data.results]
      movieMoreListLoading.value = false
      newMoreLoading.value = false
    } catch (e) {
      console.error(e)
    }
  }

  const movieDetail = ref([])
  const movieDetailLoading = ref(false)

  const getDetailsbyMovieId = async (movieID) => {
    try {
      movieDetailLoading.value = true
      const response = await useFetch('/movie/' + movieID, 'get', {
        language: 'ko',
      })
      movieDetail.value = response.data
      movieDetailLoading.value = false
    } catch (e) {
      console.error(e)
    }
  }

  const movieTrailerList = ref([])
  const movieTrailerListLoading = ref(false)

  const getMovieTrailerbyMovieID = async (movieId) => {
    try {
      movieTrailerListLoading.value = true
      const response = await useFetch(`/movie/${movieId}/videos`, 'get')
      movieTrailerList.value = response.data.results[0]
      movieTrailerListLoading.value = false
    } catch (e) {
      console.error(e)
    }
  }

  const movieCreditList = ref([])
  const movieCreditListLoading = ref(false)

  const getMovieCredits = async (id) => {
    try {
      movieCreditListLoading.value = true
      const response = await useFetch(`/movie/${id}/credits`, 'get', {
        language: 'ko',
      })
      movieCreditList.value = response.data
      movieCreditListLoading.value = false
    } catch (e) {
      console.error(e)
    }
  }

  return {
    movieNowPlayingList,
    movieNowPlayingListLoading,
    getMovieNowPlaying,

    moviePopularList,
    moviePopularListLoading,
    getMoviePopular,

    movieUpcomingList,
    movieUpcomingListLoading,
    getMovieUpcoming,

    movieTopRatedList,
    movieTopRatedListLoading,
    getMovieTopRated,

    movieMoreList,
    movieMoreListLoading,
    getMovieMore,
    newMoreLoading,

    movieDetail,
    movieDetailLoading,
    getDetailsbyMovieId,

    movieTrailerList,
    movieTrailerListLoading,
    getMovieTrailerbyMovieID,

    movieDiscoverList,
    movieDiscoverListLoading,
    getMovieDiscover,

    movieCreditList,
    movieCreditListLoading,
    getMovieCredits,
  }
})
