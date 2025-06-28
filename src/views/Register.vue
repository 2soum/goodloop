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
          <h1 class="text-2xl font-bold text-gray-900 mb-2">Créer votre compte</h1>
          <p class="text-gray-600">Commencez votre parcours bien-être dès aujourd'hui</p>
        </div>
  
        <!-- Register Form -->
        <div class="bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl shadow-emerald-500/10 p-8 border border-emerald-100">
          <form @submit.prevent="handleRegister" class="space-y-6">
            <!-- Name Input -->
            <div class="space-y-2">
              <label for="name" class="block text-sm font-semibold text-gray-700">
                Nom complet
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <input
                  id="name"
                  type="text"
                  v-model="form.name"
                  :class="[
                    'w-full pl-10 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300',
                    errors.name ? 'border-red-300 bg-red-50' : 'border-gray-300 bg-gray-50 focus:bg-white'
                  ]"
                  placeholder="Jean Dupont"
                  required
                />
              </div>
              <p v-if="errors.name" class="text-sm text-red-600 mt-1">{{ errors.name }}</p>
            </div>
  
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
              <!-- Password strength indicator -->
              <div class="mt-2">
                <div class="flex space-x-1">
                  <div :class="['h-1 w-full rounded-full transition-colors duration-300', getPasswordStrengthColor(0)]"></div>
                  <div :class="['h-1 w-full rounded-full transition-colors duration-300', getPasswordStrengthColor(1)]"></div>
                  <div :class="['h-1 w-full rounded-full transition-colors duration-300', getPasswordStrengthColor(2)]"></div>
                  <div :class="['h-1 w-full rounded-full transition-colors duration-300', getPasswordStrengthColor(3)]"></div>
                </div>
                <p class="text-xs text-gray-500 mt-1">{{ getPasswordStrengthText() }}</p>
              </div>
              <p v-if="errors.password" class="text-sm text-red-600 mt-1">{{ errors.password }}</p>
            </div>
  
            <!-- Confirm Password Input -->
            <div class="space-y-2">
              <label for="confirmPassword" class="block text-sm font-semibold text-gray-700">
                Confirmer le mot de passe
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <input
                  id="confirmPassword"
                  :type="showConfirmPassword ? 'text' : 'password'"
                  v-model="form.confirmPassword"
                  :class="[
                    'w-full pl-10 pr-12 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300',
                    errors.confirmPassword ? 'border-red-300 bg-red-50' : 'border-gray-300 bg-gray-50 focus:bg-white'
                  ]"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  @click="showConfirmPassword = !showConfirmPassword"
                  class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                >
                  <svg v-if="!showConfirmPassword" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L12 12m-2.122-2.122L7.76 7.76m6.018 6.018L12 12m1.878 1.878l2.122 2.122" />
                  </svg>
                </button>
              </div>
              <p v-if="errors.confirmPassword" class="text-sm text-red-600 mt-1">{{ errors.confirmPassword }}</p>
            </div>
  
            <!-- Terms and Privacy -->
            <div class="space-y-4">
              <label class="flex items-start">
                <input
                  type="checkbox"
                  v-model="form.acceptTerms"
                  class="w-4 h-4 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500 focus:ring-2 mt-1"
                  required
                />
                <span class="ml-3 text-sm text-gray-600">
                  J'accepte les 
                  <a href="#" class="text-emerald-600 hover:text-emerald-700 font-medium">conditions d'utilisation</a>
                  et la 
                  <a href="#" class="text-emerald-600 hover:text-emerald-700 font-medium">politique de confidentialité</a>
                </span>
              </label>
              
              <label class="flex items-start">
                <input
                  type="checkbox"
                  v-model="form.newsletter"
                  class="w-4 h-4 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500 focus:ring-2 mt-1"
                />
                <span class="ml-3 text-sm text-gray-600">
                  Je souhaite recevoir des conseils bien-être et les actualités Goodloop par email
                </span>
              </label>
            </div>
  
            <!-- Error Message -->
            <div v-if="registerError" class="bg-red-50 border border-red-200 rounded-xl p-4">
              <div class="flex items-center">
                <svg class="w-5 h-5 text-red-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p class="text-sm text-red-700">{{ registerError }}</p>
              </div>
            </div>
  
            <!-- Submit Button -->
            <button
              type="submit"
              :disabled="loading || !form.acceptTerms"
              class="w-full bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/30 active:scale-95 disabled:hover:scale-100 disabled:cursor-not-allowed flex items-center justify-center"
            >
              <svg v-if="loading" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              {{ loading ? 'Création du compte...' : 'Créer mon compte' }}
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
  
          <!-- Social Registration -->
          <div class="space-y-3">
            <button
              @click="handleMicrosoftRegister"
              class="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-xl shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-all duration-300 transform hover:scale-105"
            >
              <svg class="w-5 h-5 mr-3" viewBox="0 0 24 24">
                <path fill="#f25022" d="M11.4 11.4H0V0h11.4v11.4z"/>
                <path fill="#00a4ef" d="M24 11.4H12.6V0H24v11.4z"/>
                <path fill="#7fba00" d="M11.4 24H0V12.6h11.4V24z"/>
                <path fill="#ffb900" d="M24 24H12.6V12.6H24V24z"/>
              </svg>
              S'inscrire avec Microsoft
            </button>
          </div>
        </div>
  
        <!-- Login Link -->
        <div class="text-center mt-6">
          <p class="text-gray-600">
            Déjà un compte ?
            <router-link to="/login" class="text-emerald-600 hover:text-emerald-700 font-medium transition-colors duration-300">
              Se connecter
            </router-link>
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, reactive, computed } from 'vue'
  import { useRouter } from 'vue-router'
  import authService, { registerWithEmail, signInAndGetUser } from '@/services/auth'
  
  export default {
    name: 'Register',
    setup() {
      const router = useRouter()
      
      // État réactif
      const form = reactive({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        acceptTerms: false,
        newsletter: false
      })
      
      const errors = ref({})
      const registerError = ref('')
      const loading = ref(false)
      const showPassword = ref(false)
      const showConfirmPassword = ref(false)
      
      // Calcul de la force du mot de passe
      const passwordStrength = computed(() => {
        const password = form.password
        let strength = 0
        
        if (password.length >= 8) strength++
        if (/[A-Z]/.test(password)) strength++
        if (/[a-z]/.test(password)) strength++
        if (/[0-9]/.test(password)) strength++
        if (/[^A-Za-z0-9]/.test(password)) strength++
        
        return Math.min(strength, 4)
      })
      
      // Validation du formulaire
      const validateForm = () => {
        errors.value = {}
        
        if (!form.name.trim()) {
          errors.value.name = 'Le nom complet est requis'
        } else if (form.name.trim().length < 2) {
          errors.value.name = 'Le nom doit contenir au moins 2 caractères'
        }
        
        if (!form.email) {
          errors.value.email = 'L\'adresse email est requise'
        } else if (!/\S+@\S+\.\S+/.test(form.email)) {
          errors.value.email = 'L\'adresse email n\'est pas valide'
        }
        
        if (!form.password) {
          errors.value.password = 'Le mot de passe est requis'
        } else if (form.password.length < 8) {
          errors.value.password = 'Le mot de passe doit contenir au moins 8 caractères'
        } else if (passwordStrength.value < 2) {
          errors.value.password = 'Le mot de passe est trop faible'
        }
        
        if (!form.confirmPassword) {
          errors.value.confirmPassword = 'La confirmation du mot de passe est requise'
        } else if (form.password !== form.confirmPassword) {
          errors.value.confirmPassword = 'Les mots de passe ne correspondent pas'
        }
        
        if (!form.acceptTerms) {
          errors.value.acceptTerms = 'Vous devez accepter les conditions d\'utilisation'
        }
        
        return Object.keys(errors.value).length === 0
      }
      
      // Couleur de l'indicateur de force du mot de passe
      const getPasswordStrengthColor = (index) => {
        if (index >= passwordStrength.value) {
          return 'bg-gray-200'
        }
        
        const colors = ['bg-red-400', 'bg-orange-400', 'bg-yellow-400', 'bg-green-400']
        return colors[Math.min(passwordStrength.value - 1, 3)]
      }
      
      // Texte de l'indicateur de force du mot de passe
      const getPasswordStrengthText = () => {
        const texts = [
          'Très faible',
          'Faible', 
          'Moyen',
          'Fort',
          'Très fort'
        ]
        return form.password ? texts[passwordStrength.value] : ''
      }
      
      // Gestion de l'inscription avec email/mot de passe
      const handleRegister = async () => {
        registerError.value = ''
        
        if (!validateForm()) {
          return
        }
        
        loading.value = true
        
        try {
          const userData = {
            name: form.name.trim(),
            email: form.email,
            password: form.password,
            newsletter: form.newsletter
          }
          
          const result = await registerWithEmail(userData)
          
          if (result.success) {
            // Redirection vers le dashboard
            router.push('/dashboard')
          }
        } catch (error) {
          console.error('Erreur d\'inscription:', error)
          registerError.value = error.message || 'Une erreur est survenue lors de la création du compte'
        } finally {
          loading.value = false
        }
      }
      
      // Gestion de l'inscription avec Microsoft
      const handleMicrosoftRegister = async () => {
        try {
          loading.value = true
          registerError.value = ''
          
          const result = await signInAndGetUser()
          
          if (result.success) {
            router.push('/dashboard')
          }
        } catch (error) {
          console.error('Erreur d\'inscription Microsoft:', error)
          registerError.value = error.message || 'Erreur lors de l\'inscription avec Microsoft'
        } finally {
          loading.value = false
        }
      }
      
      return {
        form,
        errors,
        registerError,
        loading,
        showPassword,
        showConfirmPassword,
        passwordStrength,
        handleRegister,
        handleMicrosoftRegister,
        getPasswordStrengthColor,
        getPasswordStrengthText
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
  
  /* Styles pour l'indicateur de force du mot de passe */
  .transition-colors {
    transition-property: color, background-color, border-color;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms;
  }
  
  /* Focus states pour l'accessibilité */
  input:focus {
    outline: none;
  }
  
  button:focus {
    outline: 2px solid #10b981;
    outline-offset: 2px;
  }
  
  /* Hover effects */
  .hover\:bg-gray-50:hover {
    background-color: #f9fafb;
  }
  
  .hover\:text-emerald-700:hover {
    color: #047857;
  }
  
  .hover\:text-gray-600:hover {
    color: #4b5563;
  }
  
  /* Animation pour les boutons */
  .transform {
    transform: translate3d(0, 0, 0);
  }
  
  .hover\:scale-105:hover {
    transform: scale(1.05);
  }
  
  .active\:scale-95:active {
    transform: scale(0.95);
  }
  
  /* Styles pour les checkboxes */
  input[type="checkbox"]:checked {
    background-color: #10b981;
    border-color: #10b981;
  }
  
  input[type="checkbox"]:focus {
    box-shadow: 0 0 0 2px #10b981;
  }
  </style>