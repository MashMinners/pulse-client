import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  //DASHBOARD
  {
    path: '/dashboard/main',
    name: 'DashboardMain',
    meta: {
      layout: 'Dashboard'
    },
    component: function () {
      return import('../views/DashboardMainPageView')
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router