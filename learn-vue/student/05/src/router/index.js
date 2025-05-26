//import AboutView from '@/views/AboutView.vue'
import HomeView from '@/views/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '', name: 'home', component: HomeView },
    //{ path: '', name: 'home', component: HomeView, redirect: '/about' },
    //{ path: '/about', name: 'about', component: AboutView },
    // { path: '/about', name: 'about', component: () => import('../views/AboutView.vue') },
    {
      path: '/about',
      name: 'about',
      components: {
        header: import('../views/dashboard/DashboardView.vue'),
        default: () => import('../views/AboutView.vue'),
        footer: () => import('../views/dashboard/DashboardSettingView.vue'),
      },
      props: {
        header: true,
        default: false,
        footer: true,
      },
    },

    {
      path: '/dashboard',
      component: () => import('../views/dashboard/DashboardView.vue'),
      children: [
        { path: '', component: () => import('../views/dashboard/DashboardHomeView.vue') },
        {
          path: 'setting',
          component: () => import('../views/dashboard/DashboardSettingView.vue'),
          alias: ['/setting', 'u'],
        },
      ],
    },

    {
      path: '/product/:orderId(\\d+)', //숫자만 매칭하는 정규식
      name: 'productDetail',
      component: () => import('../views/OrderView.vue'),
      redirect: (to) => {
        return { path: '/detail', params: { id: to.params.orderId } }
      },
    },

    //동적 세그먼트
    { path: '/detail/:id', name: 'detail', component: () => import('../views/DetailView.vue') },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../views/NotFound.vue'),
    },
    {
      path: '/:aaaa(.*)*',
      name: 'NotFound',
      component: () => import('../views/NotFound.vue'),
    },
  ],
})

export default router
