<template>
    <section class="relative z-10 py-20 bg-gradient-to-br from-gray-50 to-emerald-50/30">
      <div class="max-w-screen-xl mx-auto px-4 sm:px-8">
        <!-- Section Header -->
        <div class="text-center mb-16 animate-fade-in-up">
          <h2 class="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Choisissez votre <span class="bg-gradient-to-r from-emerald-500 to-green-500 bg-clip-text text-transparent">formule</span>
          </h2>
          <p class="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Commencez gratuitement et évoluez selon vos besoins. 
            Votre bien-être n'a pas de prix, mais nos outils si !
          </p>
        </div>
  
        <!-- Billing Toggle -->
        <div class="flex items-center justify-center mb-12 animate-fade-in-up delay-200">
          <div class="bg-white/80 backdrop-blur-sm rounded-full p-1 border border-gray-200 shadow-lg">
            <div class="flex items-center">
              <button 
                @click="billingType = 'monthly'"
                :class="[
                  'px-6 py-3 rounded-full font-semibold transition-all duration-300',
                  billingType === 'monthly' 
                    ? 'bg-emerald-500 text-white shadow-lg' 
                    : 'text-gray-600 hover:text-gray-800'
                ]"
              >
                Mensuel
              </button>
              <button 
                @click="billingType = 'yearly'"
                :class="[
                  'px-6 py-3 rounded-full font-semibold transition-all duration-300 relative',
                  billingType === 'yearly' 
                    ? 'bg-emerald-500 text-white shadow-lg' 
                    : 'text-gray-600 hover:text-gray-800'
                ]"
              >
                Annuel
                <span class="absolute -top-2 -right-2 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs px-2 py-1 rounded-full">
                  -20%
                </span>
              </button>
            </div>
          </div>
        </div>
  
        <!-- Pricing Cards -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto animate-fade-in-up delay-300">
          
          <!-- Free Plan -->
          <div class="relative bg-white/95 backdrop-blur-xl rounded-3xl shadow-xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-500 group">
            <!-- Card Header -->
            <div class="p-8 pb-6">
              <div class="flex items-center justify-between mb-4">
                <h3 class="text-2xl font-bold text-gray-800">Gratuit</h3>
                <div class="w-12 h-12 bg-gradient-to-r from-gray-400 to-gray-500 rounded-full flex items-center justify-center shadow-lg">
                  <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
                  </svg>
                </div>
              </div>
              <p class="text-gray-600 mb-6">Parfait pour débuter votre parcours bien-être</p>
              
              <!-- Price -->
              <div class="flex items-baseline mb-6">
                <span class="text-5xl font-bold text-gray-800">0€</span>
                <span class="text-gray-600 ml-2">/ mois</span>
              </div>
  
              <!-- Features -->
              <ul class="space-y-4 mb-8">
                <li class="flex items-center space-x-3">
                  <div class="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center">
                    <svg class="w-3 h-3 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                  </div>
                  <span class="text-gray-700">Journal quotidien complet</span>
                </li>
                <li class="flex items-center space-x-3">
                  <div class="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center">
                    <svg class="w-3 h-3 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                  </div>
                  <span class="text-gray-700">Graphiques basiques (7 jours)</span>
                </li>
                <li class="flex items-center space-x-3">
                  <div class="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center">
                    <svg class="w-3 h-3 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                  </div>
                  <span class="text-gray-700">Widget mobile</span>
                </li>
                <li class="flex items-center space-x-3">
                  <div class="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center">
                    <svg class="w-3 h-3 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                  </div>
                  <span class="text-gray-700">Connexion Microsoft OAuth</span>
                </li>
                <li class="flex items-center space-x-3 opacity-50">
                  <div class="w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center">
                    <svg class="w-3 h-3 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>
                    </svg>
                  </div>
                  <span class="text-gray-400">Analyses IA avancées</span>
                </li>
                <li class="flex items-center space-x-3 opacity-50">
                  <div class="w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center">
                    <svg class="w-3 h-3 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>
                    </svg>
                  </div>
                  <span class="text-gray-400">Export & intégrations</span>
                </li>
              </ul>
  
              <!-- CTA Button -->
              <button 
                @click="$emit('select-plan', 'free')"
                class="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Commencer gratuitement
              </button>
            </div>
          </div>
  
          <!-- Premium Plan -->
          <div class="relative bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border-2 border-emerald-200 overflow-hidden hover:shadow-3xl transition-all duration-500 group">
            <!-- Popular Badge -->
            <div class="absolute top-0 right-0 bg-gradient-to-r from-emerald-500 to-green-500 text-white px-6 py-2 rounded-bl-2xl font-semibold shadow-lg">
              <span class="flex items-center space-x-1">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <span>Populaire</span>
              </span>
            </div>
  
            <!-- Card Header -->
            <div class="p-8 pb-6">
              <div class="flex items-center justify-between mb-4">
                <h3 class="text-2xl font-bold text-gray-800">Premium</h3>
                <div class="w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/30">
                  <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                </div>
              </div>
              <p class="text-gray-600 mb-6">Toutes les fonctionnalités pour optimiser votre bien-être</p>
              
              <!-- Price -->
              <div class="flex items-baseline mb-2">
                <span class="text-5xl font-bold text-emerald-600">
                  {{ billingType === 'monthly' ? '9€' : '72€' }}
                </span>
                <span class="text-gray-600 ml-2">
                  / {{ billingType === 'monthly' ? 'mois' : 'an' }}
                </span>
              </div>
              <div v-if="billingType === 'yearly'" class="text-sm text-emerald-600 font-medium mb-4">
                Soit 6€/mois • Économisez 36€/an
              </div>
              <div v-else class="mb-6"></div>
  
              <!-- Features -->
              <ul class="space-y-4 mb-8">
                <li class="flex items-center space-x-3">
                  <div class="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center">
                    <svg class="w-3 h-3 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                  </div>
                  <span class="text-gray-700 font-medium">Tout du plan Gratuit</span>
                </li>
                <li class="flex items-center space-x-3">
                  <div class="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center">
                    <svg class="w-3 h-3 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                  </div>
                  <span class="text-gray-700">Historique illimité</span>
                </li>
                <li class="flex items-center space-x-3">
                  <div class="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center">
                    <svg class="w-3 h-3 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                  </div>
                  <span class="text-gray-700">Analyses IA avancées</span>
                </li>
                <li class="flex items-center space-x-3">
                  <div class="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center">
                    <svg class="w-3 h-3 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                  </div>
                  <span class="text-gray-700">Suggestions personnalisées</span>
                </li>
                <li class="flex items-center space-x-3">
                  <div class="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center">
                    <svg class="w-3 h-3 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                  </div>
                  <span class="text-gray-700">Google Fit & Apple Health</span>
                </li>
                <li class="flex items-center space-x-3">
                  <div class="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center">
                    <svg class="w-3 h-3 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                  </div>
                  <span class="text-gray-700">Export rapport médical</span>
                </li>
              </ul>
  
              <!-- CTA Button -->
              <button 
                @click="$emit('select-plan', 'premium')"
                class="w-full bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/30 active:scale-95"
              >
                Commencer l'essai gratuit
              </button>
              
              <p class="text-center text-sm text-gray-500 mt-3">
                7 jours gratuits, puis {{ billingType === 'monthly' ? '9€/mois' : '72€/an' }}
              </p>
            </div>
          </div>
        </div>
  
        <!-- Money Back Guarantee -->
        <div class="text-center mt-12 animate-fade-in-up delay-500">
          <div class="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 border border-emerald-200 shadow-lg">
            <div class="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
              <svg class="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
            </div>
            <span class="text-gray-700 font-medium">
              Garantie satisfait ou remboursé 30 jours
            </span>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'PricingSection',
    emits: ['select-plan'],
    data() {
      return {
        billingType: 'monthly'
      }
    }
  }
  </script>
  
  <style scoped>
  /* Custom animations */
  @keyframes fade-in-up {
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
    animation: fade-in-up 0.8s ease-out forwards;
  }
  
  .delay-200 {
    animation-delay: 0.2s;
  }
  
  .delay-300 {
    animation-delay: 0.3s;
  }
  
  .delay-500 {
    animation-delay: 0.5s;
  }
  
  /* Hover effects for cards */
  .group:hover .transform {
    transform: translateY(-2px);
  }
  </style>