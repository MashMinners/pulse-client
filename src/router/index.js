import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/info'
  },
  {
    path: '/start/:uuid',
    name: 'start',
    meta: {
      layout: 'Application'
    },
    component: function () {
      return import('../views/ReviewCollector/StartPageView.vue')
    },
  },
  {
    path: '/good-review',
    name: 'goodReview',
    meta: {
      layout: 'Application'
    },
    component: function () {
      return import('../views/ReviewCollector/GoodPageView.vue')
    },
  },
  {
    path: '/bad-review',
    name: 'badReview',
    meta: {
      layout: 'Application'
    },
    component: function () {
      return import('../views/ReviewCollector/BadPageView.vue')
    },
  },
  {
    path: '/finish',
    name: 'finish',
    meta: {
      layout: 'Application'
    },
    component: function () {
      return import('../views/ReviewCollector/FinishPageView.vue')
    },
  },
  {
    path: '/info',
    name: 'information',
    meta: {
      layout: 'Application'
    },
    component: function () {
      return import('../views/ReviewCollector/InformationPageView.vue')
    },
  },
    //DashBoard
  {
    path: '/dashboard',
    name: 'dashboardMain',
    meta: {
      layout: 'Dashboard'
    },
    component: function () {
      return import('../views/Dashboard/MainPageView.vue')
    },
  },
  {
    path: '/dashboard/reviews',
    name: 'dashboardReviews',
    meta: {
      layout: 'Dashboard'
    },
    component: function () {
      return import('../views/Dashboard/ReviewsPageView.vue')
    },
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
