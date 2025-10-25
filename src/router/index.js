import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/start',
    redirect: '/'
  },
  {
    path: '/',
    name: 'start',
    meta: {
      layout: 'Application'
    },
    component: function () {
      return import('../views/StartPageView.vue')
    },
  },
  {
    path: '/good-review',
    name: 'goodReview',
    meta: {
      layout: 'Application'
    },
    component: function () {
      return import('../views/GoodPageView.vue')
    },
  },
  {
    path: '/bad-review',
    name: 'badReview',
    meta: {
      layout: 'Application'
    },
    component: function () {
      return import('../views/BadPageView.vue')
    },
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
