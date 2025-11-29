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
      return import('../views/Dashboard/Main/DashboardMainPageView.vue')
    }
  },
  {
    path: '/dashboard/reviews',
    name: 'DashboardReviews',
    meta: {
      layout: 'Dashboard'
    },
    component: function () {
      return import('../views/Dashboard/Reviews/DashboardReviewsPageView.vue')
    },
  },
  {
    path: '/dashboard/reviews/:uuid',
    name: 'DashboardEmployeeReviews',
    meta: {
      layout: 'Dashboard'
    },
    component: function () {
      return import('../views/Dashboard/Reviews/DashboardEmployeeReviewsPageView.vue')
    },
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router