<template>
  <nav class="relative z-10 px-6 py-4 backdrop-blur-sm">
    <div class="max-w-7xl mx-auto flex items-center justify-between animate-fade-in-down">
      <div class="flex items-center space-x-2 group cursor-pointer" @click="goHome">
        <div class="w-8 h-8 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:rotate-12 group-hover:scale-110 shadow-lg shadow-emerald-500/30">
          <span class="text-white font-bold text-sm">G</span>
        </div>
        <span class="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
          Goodloop
        </span>
      </div>
      
      <!-- Navigation Links (visible only when not authenticated) -->
      <div v-if="!isAuthenticated" class="flex items-center space-x-6">
        <a href="#" class="text-gray-700 hover:text-emerald-600 transition-all duration-300 relative group">
          Fonctionnalités
          <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a href="#" class="text-gray-700 hover:text-emerald-600 transition-all duration-300 relative group">
          À propos
          <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a href="#" class="text-gray-700 hover:text-emerald-600 transition-all duration-300 relative group">
            Tarifs
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a href="#" class="text-gray-700 hover:text-emerald-600 transition-all duration-300 relative group">
            FAQ
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
        </a>
      </div>
      
      <!-- Auth Buttons (when not authenticated) -->
      <div v-if="!isAuthenticated" class="flex items-center space-x-4">
        <button @click="handleLogin" class="text-emerald-600 hover:text-emerald-700 font-medium transition-colors duration-300">
          Se connecter
        </button>
        <button @click="handleRegister" class="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/30 active:scale-95">
          S'inscrire
        </button>
      </div>
      
      <!-- User Menu (when authenticated) -->
      <div v-if="isAuthenticated" class="flex items-center space-x-4">
        <!-- User Info -->
        <div class="flex items-center space-x-3">
          <div class="w-8 h-8 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
            {{ userInitials }}
          </div>
          <div class="text-right">
            <p class="text-sm font-medium text-gray-800">{{ userName }}</p>
            <p class="text-xs text-gray-500">{{ userProvider }}</p>
          </div>
        </div>
        
        <!-- Dashboard Button -->
        <button @click="goToDashboard" class="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/30 active:scale-95">
          Dashboard
        </button>
        
        <!-- Logout Button -->
        <button @click="handleLogout" class="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          <span>Déconnexion</span>
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { isUserAuthenticated, getCurrentUser, signOut } from '@/services/auth'

export default {
  name: 'Header',
  setup() {
    const router = useRouter()
    const currentUser = ref(null)
    const isAuthenticated = ref(false)
    
    onMounted(() => {
      updateAuthState()
    })
    
    const updateAuthState = () => {
      isAuthenticated.value = isUserAuthenticated()
      currentUser.value = getCurrentUser()
    }
    
    const userName = computed(() => {
      return currentUser.value?.name || 'Utilisateur'
    })
    
    const userProvider = computed(() => {
      const provider = currentUser.value?.provider || 'email'
      return provider === 'microsoft' ? 'Microsoft' : 'Email'
    })
    
    const userInitials = computed(() => {
      return userName.value
        .split(' ')
        .map(word => word.charAt(0).toUpperCase())
        .slice(0, 2)
        .join('')
    })
    
    const goHome = () => {
      router.push('/')
    }
    
    const handleLogin = () => {
      router.push('/login')
    }
    
    const handleRegister = () => {
      router.push('/register')
    }
    
    const goToDashboard = () => {
      router.push('/dashboard')
    }
    
    const handleLogout = () => {
      signOut()
      updateAuthState()
      router.push('/')
    }
    
    return {
      isAuthenticated,
      userName,
      userProvider,
      userInitials,
      goHome,
      handleLogin,
      handleRegister,
      goToDashboard,
      handleLogout
    }
  }
}
</script> 