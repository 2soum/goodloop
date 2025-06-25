// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/LandingPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LandingPage
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/Dashboard.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/journal/sleep',
      name: 'sleep',
      component: () => import('../views/Sleep.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/journal/mood',
      name: 'mood',
      component: () => import('../views/Mood.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/journal/activity',
      name: 'activity',
      component: () => import('../views/Activity.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/journal/nutrition',
      name: 'nutrition',
      component: () => import('../views/Nutrition.vue'),
      meta: { requiresAuth: true }
    },
    // {
    //   path: '/journal',
    //   name: 'journal',
    //   component: () => import('../views/Journal.vue'),
    //   meta: { requiresAuth: true }
    // },
    // {
    //   path: '/analytics',
    //   name: 'analytics',
    //   component: () => import('../views/Analytics.vue'),
    //   meta: { requiresAuth: true }
    // },
    // {
    //   path: '/profile',
    //   name: 'profile',
    //   component: () => import('../views/Profile.vue'),
    //   meta: { requiresAuth: true }
    // }
  ]
})

// Navigation guard pour l'authentification
router.beforeEach((to, from, next) => {
  // Pour l'instant on laisse passer, on implémentera l'auth plus tard
  if (to.meta.requiresAuth) {
    // TODO: Vérifier si l'utilisateur est connecté
    // Pour l'instant on redirige vers la landing page
    console.log('Route protégée, auth à implémenter')
  }
  next()
})

export default router