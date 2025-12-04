import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    //APPLICATION
  {
    path: '/',
    redirect: '/info'
  },
  {
    path: '/app/start/:uuid',
    name: 'start',
    meta: {
      layout: 'Application'
    },
    component: function () {
      return import('../views/ReviewCollector/StartPageView.vue')
    },
  },
  {
    path: '/app/review/positive',
    name: 'positiveReview',
    meta: {
      layout: 'Application'
    },
    component: function () {
      //return import('../views/ReviewCollector/GoodPageView.vue')
    },
  },
  {
    path: '/app/review/negative',
    name: 'negativeReview',
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
     //return import('../views/ReviewCollector/FinishPageView.vue')
    },
  },
  {
    path: '/info',
    name: 'information',
    meta: {
      layout: 'Application'
    },
    component: function () {
      //return import('../views/ReviewCollector/InformationPageView.vue')
    },
  },
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