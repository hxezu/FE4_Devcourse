import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {
    'Content-Type': 'application/json',
  },
})

export const fetchPosts = async () => {
  const { data } = await axiosInstance.get('/posts')
  return data
}

export const fetchPostById = async (id) => {
  const { data } = await axiosInstance.get('/posts/' + id)
  return data
}

export const fetchUserById = async (id) => {
  const { data } = await axiosInstance.get('/users/' + id)
  return data
}

export const fetchCommentsByPostId = async (id) => {
  const { data } = await axiosInstance.get('/post/' + id + '/comments/')
  return data
}
