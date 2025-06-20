import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: () => import('../views/DetailView.vue'),
    },
    {
      path: '/movie/:type',
      name: 'movieList',
      component: () => import('../views/ListView.vue'),
    },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
