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
      return import('../views/Dashboard/DashboardMainPageView.vue')
    }
  },
  {
    path: '/dashboard/reviews',
    name: 'DashboardReviews',
    meta: {
      layout: 'Dashboard'
    },
    component: function () {
      return import('../views/Dashboard/DashboardReviewsPageView.vue')
    },
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router