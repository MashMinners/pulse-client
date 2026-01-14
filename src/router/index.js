import { createRouter, createWebHistory } from 'vue-router'
import pipeline from "@/router/pipeline";
import AuthMiddleware from "@/router/Middleware/AuthMiddleware"
import IsLoggedMiddleware from "@/router/Middleware/IsLoggedMiddleware"

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
      path: '/app/review/positive/:uuid',
      name: 'positiveReview',
      meta: {
        layout: 'Application'
      },
      component: function () {
        return import('../views/ReviewCollector/PositiveReviewPageView.vue')
      },
    },
    {
      path: '/app/review/negative/:uuid',
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
        //return import('../views/ReviewCollector/InformationPageView.vue')
      },
    },
    //DASHBOARD
    {
      path: '/dashboard/main',
      name: 'DashboardMain',
      meta: {
        layout: 'Dashboard',
        middleware: [AuthMiddleware]
      },
      component: function () {
        return import('../views/Dashboard/Main/DashboardMainPageView.vue')
      }
    },
    {
      path: '/dashboard/reviews',
      name: 'DashboardReviews',
      meta: {
        layout: 'Dashboard',
        middleware: [AuthMiddleware]
      },
      component: function () {
        return import('../views/Dashboard/Reviews/DashboardReviewsPageView.vue')
      },
    },
    {
      path: '/dashboard/reviews/:uuid',
      name: 'DashboardEmployeeReviews',
      meta: {
        layout: 'Dashboard',
        middleware: [AuthMiddleware]
      },
      component: function () {
        return import('../views/Dashboard/Reviews/DashboardEmployeeReviewsPageView.vue')
      },
    },
  // CORE
    {
      path: '/auth/doAuth',
      name: 'core.authenticate',
      component: () => import('@/views/Core/AuthView.vue'),
      meta: {
        title: 'Авторизация',
        layout: 'Auth',
        middleware: [IsLoggedMiddleware]
      }
    }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  if (!to.meta.middleware) {
    return next()
  }
  const middleware = to.meta.middleware
  const context = {
    to,
    from,
    next,
    //store,
    router
  }
  return middleware[0]({
    ...context,
    next: pipeline(context, middleware, 1)
  })
})

export default router