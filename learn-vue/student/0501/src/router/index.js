import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      beforeEnter: () => {
        return false
      },
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

// 전역 가드
router.beforeEach((to, from, next) => {
  const isAuthenticated = !!sessionStorage.getItem('access_token')
  if (!isAuthenticated && to.name !== 'Login') {
    return { name: 'login' }
  }
  next()
})

router.beforeResolve((to, from, next) => {
  console.log(to)
  console.log(from)
  next()
})

router.afterEach((to, from, failure) => {
  console.log(to)
  console.log(from)
  console.log(failure)
})

export default router
