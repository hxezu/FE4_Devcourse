import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MGEwNmQ0ZjVkZmJkNjQ3NTMzYjY0Yzk2YzY4NTIxNiIsIm5iZiI6MTc0NTQ2MzA0MC4wNzQsInN1YiI6IjY4MDlhNzAwYzVjODAzNWZiMDhhZjgwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YuEOVpGoYoJtZH3uNmll65p-xpsyGDvHmsV3LY75ito',
  },
})

export async function useFetch(url, method = 'get', payload, headers = {}) {
  try {
    const options = {
      url,
      method,
      headers,
    }

    if (method === 'get' && payload) options.params = payload
    if (method !== 'get' && payload) options.data = payload

    const response = await axiosInstance(options)
    return response
  } catch (e) {
    console.error(e)
  }
}
