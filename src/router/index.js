import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/home/Index.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/extrato',
    name: 'bankstatement',
    component: () => import('@/views/bank-statement/Index.vue'),
  },
  {
    path: '/pagar',
    name: 'pay',
    component: () => import('@/views/pay/Index.vue'),
  },
  {
    path: '/pix',
    name: 'pix',
    component: () => import('@/views/pix/Index.vue'),
  },
  {
    path: '/transferencias',
    name: 'transfer',
    component: () => import('@/views/transfer/Index.vue'),
  },
  {
    path: '/cofrinho',
    name: 'saving',
    component: () => import('@/views/saving/Index.vue'),
  },
  {
    path: '/cobrar',
    name: 'charge',
    component: () => import('@/views/charge/Index.vue')
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;