import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/home/Index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: "/bank-statement",
      name: "bankstatement",
      component: () => import('@/views/bank-statement/Index.vue')
    },
    {
      path: "/pagar",
      name: "pay",
      component: () => import('@/views/pay/Index.vue')
    },
    {
      path: "/pix",
      name: "pix",
      component: () => import('@/views/pix/Index.vue')
    },
    {
      path: "/transferencias",
      name: "transfer",
      component: () => import('@/views/transfer/Index.vue')
    },
  ]
})

export default router
