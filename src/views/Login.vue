<template>
    <div class="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50 flex items-center justify-center px-4 py-8">
      <!-- Background decorative elements -->
      <div class="fixed inset-0 overflow-hidden pointer-events-none">
        <div class="absolute -top-40 -right-40 w-80 h-80 bg-emerald-200/20 rounded-full blur-3xl"></div>
        <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-green-200/20 rounded-full blur-3xl"></div>
      </div>
  
      <div class="w-full max-w-md relative z-10">
        <!-- Header -->
        <div class="text-center mb-8">
          <div class="flex items-center justify-center space-x-3 mb-6 group">
            <div class="w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:rotate-12 group-hover:scale-110 shadow-lg shadow-emerald-500/30">
              <span class="text-white font-bold text-lg">G</span>
            </div>
            <span class="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
              Goodloop
            </span>
          </div>
          <h1 class="text-2xl font-bold text-gray-900 mb-2">Bon retour !</h1>
          <p class="text-gray-600">Connectez-vous à votre compte pour continuer votre parcours bien-être</p>
        </div>
  
        <!-- Login Form -->
        <div class="bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl shadow-emerald-500/10 p-8 border border-emerald-100">
          <form @submit.prevent="handleLogin" class="space-y-6">
            <!-- Email Input -->
            <div class="space-y-2">
              <label for="email" class="block text-sm font-semibold text-gray-700">
                Adresse email
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                </div>
                <input
                  id="email"
                  type="email"
                  v-model="form.email"
                  :class="[
                    'w-full pl-10 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300',
                    errors.email ? 'border-red-300 bg-red-50' : 'border-gray-300 bg-gray-50 focus:bg-white'
                  ]"
                  placeholder="votre@email.com"
                  required
                />
              </div>
              <p v-if="errors.email" class="text-sm text-red-600 mt-1">{{ errors.email }}</p>
            </div>
  
            <!-- Password Input -->
            <div class="space-y-2">
              <label for="password" class="block text-sm font-semibold text-gray-700">
                Mot de passe
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <input
                  id="password"
                  :type="showPassword ? 'text' : 'password'"
                  v-model="form.password"
                  :class="[
                    'w-full pl-10 pr-12 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300',
                    errors.password ? 'border-red-300 bg-red-50' : 'border-gray-300 bg-gray-50 focus:bg-white'
                  ]"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  @click="showPassword = !showPassword"
                  class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                >
                  <svg v-if="!showPassword" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L12 12m-2.122-2.122L7.76 7.76m6.018 6.018L12 12m1.878 1.878l2.122 2.122" />
                  </svg>
                </button>
              </div>
              <p v-if="errors.password" class="text-sm text-red-600 mt-1">{{ errors.password }}</p>
            </div>
  
            <!-- Remember Me & Forgot Password -->
            <div class="flex items-center justify-between">
              <label class="flex items-center">
                <input
                  type="checkbox"
                  v-model="form.rememberMe"
                  class="w-4 h-4 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500 focus:ring-2"
                />
                <span class="ml-2 text-sm text-gray-600">Se souvenir de moi</span>
              </label>
              <router-link to="/forgot-password" class="text-sm text-emerald-600 hover:text-emerald-700 font-medium">
                Mot de passe oublié ?
              </router-link>
            </div>
  
            <!-- Error Message -->
            <div v-if="loginError" class="bg-red-50 border border-red-200 rounded-xl p-4">
              <div class="flex items-center">
                <svg class="w-5 h-5 text-red-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p class="text-sm text-red-700">{{ loginError }}</p>
              </div>
            </div>
  
            <!-- Submit Button -->
            <button
              type="submit"
              :disabled="loading"
              class="w-full bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/30 active:scale-95 disabled:hover:scale-100 disabled:cursor-not-allowed flex items-center justify-center"
            >
              <svg v-if="loading" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              {{ loading ? 'Connexion...' : 'Se connecter' }}
            </button>
          </form>
  
          <!-- Divider -->
          <div class="my-6">
            <div class="relative">
              <div class="absolute inset-0 flex items-center">
                <div class="w-full border-t border-gray-300"></div>
              </div>
              <div class="relative flex justify-center text-sm">
                <span class="px-2 bg-white text-gray-500">ou</span>
              </div>
            </div>
          </div>
  
          <!-- Social Login -->
          <div class="space-y-3">
            <button
              @click="handleMicrosoftLogin"
              class="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-xl shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-all duration-300 transform hover:scale-105"
            >
              <svg class="w-5 h-5 mr-3" viewBox="0 0 24 24">
                <path fill="#f25022" d="M11.4 11.4H0V0h11.4v11.4z"/>
                <path fill="#00a4ef" d="M24 11.4H12.6V0H24v11.4z"/>
                <path fill="#7fba00" d="M11.4 24H0V12.6h11.4V24z"/>
                <path fill="#ffb900" d="M24 24H12.6V12.6H24V24z"/>
              </svg>
              Continuer avec Microsoft
            </button>
            
            <button
              @click="handleGoogleLogin"
              class="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-xl shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-all duration-300 transform hover:scale-105"
            >
              <svg class="w-5 h-5 mr-3" viewBox="0 0 24 24">
                <path fill="#4285f4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34a853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#fbbc05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#ea4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Continuer avec Google
            </button>
          </div>
        </div>
  
        <!-- Sign Up Link -->
        <div class="text-center mt-6">
          <p class="text-gray-600">
            Pas encore de compte ?
            <router-link to="/register" class="text-emerald-600 hover:text-emerald-700 font-medium transition-colors duration-300">
              Créer un compte
            </router-link>
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, reactive } from 'vue'
  import { useRouter } from 'vue-router'
  import { signInAndGetUser, signInWithEmail } from '@/services/auth'
  
  export default {
    name: 'Login',
    setup() {
      const router = useRouter()
      
      const form = reactive({
        email: '',
        password: '',
        rememberMe: false
      })
      
      const errors = ref({})
      const loginError = ref('')
      const loading = ref(false)
      const showPassword = ref(false)
      
      const validateForm = () => {
        errors.value = {}
        
        if (!form.email) {
          errors.value.email = 'L\'adresse email est requise'
        } else if (!/\S+@\S+\.\S+/.test(form.email)) {
          errors.value.email = 'L\'adresse email n\'est pas valide'
        }
        
        if (!form.password) {
          errors.value.password = 'Le mot de passe est requis'
        } else if (form.password.length < 6) {
          errors.value.password = 'Le mot de passe doit contenir au moins 6 caractères'
        }
        
        return Object.keys(errors.value).length === 0
      }
      
      const handleLogin = async () => {
        loginError.value = ''
        
        if (!validateForm()) {
          return
        }
        
        loading.value = true
        
        try {
          const result = await signInWithEmail({
            email: form.email,
            password: form.password
          })
          
          if (result.success) {
            // Redirection vers le dashboard
            router.push('/dashboard')
          }
        } catch (error) {
          console.error('Erreur de connexion:', error)
          loginError.value = error.message || 'Email ou mot de passe incorrect'
        } finally {
          loading.value = false
        }
      }
      
      const handleMicrosoftLogin = async () => {
        try {
          loading.value = true
          loginError.value = ''
          
          const result = await signInAndGetUser()
          
          if (result.success) {
            router.push('/dashboard')
          }
        } catch (error) {
          console.error('Erreur d\'inscription Microsoft:', error)
          loginError.value = error.message || 'Erreur lors de la connexion avec Microsoft'
        } finally {
          loading.value = false
        }
      }
      
      const handleGoogleLogin = async () => {
        try {
          loading.value = true
          loginError.value = ''
          
          // Implémentation Google OAuth à venir
          throw new Error('Connexion Google non disponible pour le moment')
        } catch (error) {
          console.error('Erreur d\'inscription Google:', error)
          loginError.value = error.message || 'Erreur lors de la connexion avec Google'
        } finally {
          loading.value = false
        }
      }
      
      return {
        form,
        errors,
        loginError,
        loading,
        showPassword,
        handleLogin,
        handleMicrosoftLogin,
        handleGoogleLogin
      }
    }
  }
  </script>
  
  <style scoped>
  /* Animations personnalisées */
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .animate-fade-in-up {
    animation: fadeInUp 0.6s ease-out;
  }
  </style>