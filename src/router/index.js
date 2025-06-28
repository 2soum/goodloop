// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import { isUserAuthenticated } from '@/services/auth'
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
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/Register.vue')
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
    {
      path: '/goals',
      name: 'goals',
      component: () => import('../views/Goals.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/chat',
      name: 'chat',
      component: () => import('../views/Chat.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/export',
      name: 'export',
      component: () => import('../views/ExportFIt.vue'),
      meta: { requiresAuth: true }
    }

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
  // Vérifier si la route nécessite une authentification
  if (to.meta.requiresAuth) {
    // Vérifier si l'utilisateur est connecté
    if (!isUserAuthenticated()) {
      // Rediriger vers la page de connexion
      next('/login')
      return
    }
  }
  
  // Si l'utilisateur est connecté et essaie d'accéder aux pages de connexion/inscription
  if (isUserAuthenticated() && (to.name === 'login' || to.name === 'register')) {
    // Rediriger vers le dashboard
    next('/dashboard')
    return
  }
  
  next()
})

export default router