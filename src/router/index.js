import { createRouter, createWebHistory } from 'vue-router';
 // 導入主頁組件

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: "/services",
      name: "services",
      component: () => import('../components/Service.vue'),
    },
  ]
})

export default router
