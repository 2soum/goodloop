<template>
    <div class="fixed inset-y-0 left-0 w-64 bg-white shadow-xl border-r border-gray-200 flex flex-col z-50">
      <!-- Header with Logo and User -->
      <div class="p-6 border-b border-gray-200">
        <!-- Logo -->
        <div class="flex items-center space-x-3 mb-6 group cursor-pointer">
          <div class="w-10 h-10 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:rotate-12 group-hover:scale-110 shadow-lg shadow-emerald-500/30">
            <span class="text-white font-bold">G</span>
          </div>
          <span class="text-xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
            Goodloop
          </span>
        </div>
  
       
      </div>
  
      <!-- Navigation -->
      <nav class="flex-1 overflow-y-auto px-4 py-6">
        <!-- Dashboard Section -->
        <div class="mb-8">
          <h3 class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4 px-3">
            Tableau de bord
          </h3>
          <ul class="space-y-2">
            <li>
              <router-link 
                to="/dashboard" 
                :class="[
                  'flex items-center space-x-3 px-3 py-3 rounded-xl text-sm font-medium transition-all duration-200 group',
                  $route.path === '/dashboard' 
                    ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/30' 
                    : 'text-gray-700 hover:bg-emerald-50 hover:text-emerald-600'
                ]"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"/>
                </svg>
                <span>Vue d'ensemble</span>
                <div 
                  v-if="$route.path === '/dashboard'"
                  class="ml-auto w-2 h-2 bg-white rounded-full"
                ></div>
              </router-link>
            </li>
            
          </ul>
        </div>
  
        <!-- Journal Section -->
        <div class="mb-8">
          <h3 class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4 px-3">
            Mon journal
          </h3>
          <ul class="space-y-2">
            <li>
              <router-link 
                to="/journal/sleep" 
                :class="[
                  'flex items-center space-x-3 px-3 py-3 rounded-xl text-sm font-medium transition-all duration-200 group',
                  $route.path === '/journal/sleep' 
                    ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/30' 
                    : 'text-gray-700 hover:bg-indigo-50 hover:text-indigo-600'
                ]"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/>
                </svg>
                <span>Sommeil</span>
                <div class="ml-auto flex items-center space-x-2">
                  <span class="text-xs text-gray-500">7h 30m</span>
                  <div class="w-2 h-2 bg-indigo-400 rounded-full"></div>
                </div>
              </router-link>
            </li>
            <li>
              <router-link 
                to="/journal/mood" 
                :class="[
                  'flex items-center space-x-3 px-3 py-3 rounded-xl text-sm font-medium transition-all duration-200 group',
                  $route.path === '/journal/mood' 
                    ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/30' 
                    : 'text-gray-700 hover:bg-emerald-50 hover:text-emerald-600'
                ]"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z" clip-rule="evenodd"/>
                </svg>
                <span>Humeur</span>
                <div class="ml-auto flex items-center space-x-2">
                  <span class="text-xs text-gray-500">8/10</span>
                  <span class="text-sm">😊</span>
                </div>
              </router-link>
            </li>
            <li>
              <router-link 
                to="/journal/activity" 
                :class="[
                  'flex items-center space-x-3 px-3 py-3 rounded-xl text-sm font-medium transition-all duration-200 group',
                  $route.path === '/journal/activity' 
                    ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30' 
                    : 'text-gray-700 hover:bg-orange-50 hover:text-orange-600'
                ]"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clip-rule="evenodd"/>
                </svg>
                <span>Activité</span>
                <div class="ml-auto flex items-center space-x-2">
                  <span class="text-xs text-gray-500">45min</span>
                  <div class="w-2 h-2 bg-orange-400 rounded-full"></div>
                </div>
              </router-link>
            </li>
            <li>
              <router-link 
                to="/journal/nutrition" 
                :class="[
                  'flex items-center space-x-3 px-3 py-3 rounded-xl text-sm font-medium transition-all duration-200 group',
                  $route.path === '/journal/nutrition' 
                    ? 'bg-green-500 text-white shadow-lg shadow-green-500/30' 
                    : 'text-gray-700 hover:bg-green-50 hover:text-green-600'
                ]"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd"/>
                </svg>
                <span>Alimentation</span>
                <div class="ml-auto flex items-center space-x-2">
                  <span class="text-xs text-gray-500">3/3</span>
                  <span class="text-sm">🥗</span>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
  
        <!-- Tools Section -->
        <div class="mb-8">
          <h3 class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4 px-3">
            Outils
          </h3>
          <ul class="space-y-2">
            <li>
              <router-link 
                to="/goals" 
                :class="[
                  'flex items-center space-x-3 px-3 py-3 rounded-xl text-sm font-medium transition-all duration-200 group',
                  $route.path === '/goals' 
                    ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/30' 
                    : 'text-gray-700 hover:bg-purple-50 hover:text-purple-600'
                ]"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <span>Objectifs</span>
                <div class="ml-auto">
                  <span class="bg-purple-100 text-purple-600 text-xs px-2 py-1 rounded-full font-semibold">
                    3
                  </span>
                </div>
              </router-link>
            </li>
            <li>
              <router-link 
                to="/chat" 
                :class="[
                  'flex items-center space-x-3 px-3 py-3 rounded-xl text-sm font-medium transition-all duration-200 group',
                  $route.path === '/chat' 
                    ? 'bg-pink-500 text-white shadow-lg shadow-pink-500/30' 
                    : 'text-gray-700 hover:bg-pink-50 hover:text-pink-600'
                ]"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM15.657 6.343a1 1 0 011.414 0A9.972 9.972 0 0119 12a9.972 9.972 0 01-1.929 5.657 1 1 0 11-1.414-1.414A7.971 7.971 0 0017 12c0-2.21-.896-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 12a5.984 5.984 0 01-.757 2.828 1 1 0 01-1.415-1.414A3.984 3.984 0 0013 12a3.983 3.983 0 00-.172-1.172 1 1 0 010-1.415z" clip-rule="evenodd"/>
                </svg>
                <span> AI assistant</span>
                <div class="ml-auto">
                  <div class="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
                </div>
              </router-link>
            </li>
            <li>
              <router-link 
                to="/export" 
                :class="[
                  'flex items-center space-x-3 px-3 py-3 rounded-xl text-sm font-medium transition-all duration-200 group',
                  $route.path === '/export' 
                    ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30' 
                    : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                ]"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd"/>
                </svg>
                <span>Export/ Watch Connect</span>
                <span class="ml-auto bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full font-semibold">
                  Pro
                </span>
              </router-link>
            </li>
          </ul>
        </div>
  

      </nav>
  
      <!-- Bottom Section -->
      <div class="p-4 border-t border-gray-200">

        
  
        <!-- Logout -->
        <div>
          <button 
            @click="handleLogout"
            class="w-full flex items-center space-x-3 px-3 py-3 rounded-xl text-sm font-medium text-red-600 hover:bg-red-50 hover:text-red-700 transition-all duration-200 group"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            <span>Déconnexion</span>
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, computed, onMounted } from 'vue'
  import { useRouter } from 'vue-router'
  import { getCurrentUser, signOut } from '@/services/auth'
  
  export default {
    name: 'Sidebar',
    emits: ['quick-add', 'upgrade-plan'],
    setup() {
      const router = useRouter()
      const currentUser = ref(null)
      
      onMounted(() => {
        currentUser.value = getCurrentUser()
      })
      
      const userName = computed(() => {
        return currentUser.value?.name || 'Utilisateur'
      })
      
      const userEmail = computed(() => {
        return currentUser.value?.email || 'email@example.com'
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
      
      const openQuickAdd = () => {
        // Émettre l'événement vers le parent
        // this.$emit('quick-add')
      }
      
      const upgradePlan = () => {
        // this.$emit('upgrade-plan')
      }
      
      const handleLogout = () => {
        signOut()
        router.push('/')
      }
      
      return {
        userName,
        userEmail,
        userProvider,
        userInitials,
        openQuickAdd,
        upgradePlan,
        handleLogout
      }
    }
  }
  </script>
  
  <style scoped>
  /* Custom scrollbar */
  nav::-webkit-scrollbar {
    width: 4px;
  }
  
  nav::-webkit-scrollbar-track {
    background: transparent;
  }
  
  nav::-webkit-scrollbar-thumb {
    background: #10b981;
    border-radius: 2px;
  }
  
  nav::-webkit-scrollbar-thumb:hover {
    background: #059669;
  }
  
  /* Active route indicator animation */
  .router-link-active {
    position: relative;
  }
  
  .router-link-active::before {
    content: '';
    position: absolute;
    left: -12px;
    top: 50%;
    transform: translateY(-50%);
    width: 4px;
    height: 20px;
    background: currentColor;
    border-radius: 0 2px 2px 0;
  }
  </style>