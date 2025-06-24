<template>
    <section class="relative z-10 py-20 bg-white">
      <div class="max-w-screen-2xl mx-auto px-4 sm:px-8">
        <!-- Section Header -->
        <div class="text-center mb-20 animate-fade-in-up">
          <h2 class="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Votre <span class="bg-gradient-to-r from-emerald-500 to-green-500 bg-clip-text text-transparent">journal</span>
            <br />de bien-être complet
          </h2>
          <p class="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Suivez vos habitudes santé au quotidien et découvrez les corrélations 
            qui vous aident à optimiser votre bien-être.
          </p>
        </div>
  
        <!-- Central Chart Container -->
        <div class="relative max-w-6xl mx-auto mb-20 animate-fade-in-up delay-300">
          <!-- Background Glow Effect -->
          <div class="absolute -inset-4 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-3xl blur-xl"></div>
          
          <!-- Chart Card -->
          <div class="relative bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl shadow-emerald-500/10 overflow-hidden border border-emerald-100 hover:shadow-3xl transition-all duration-700 group">
            <!-- Chart Header -->
            <div class="p-8 pb-4 bg-gradient-to-r from-white to-emerald-50/30">
              <div class="flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                  <h3 class="text-2xl font-bold text-gray-800 mb-2">Analyse de votre bien-être</h3>
                  <p class="text-gray-600">Corrélations entre sommeil, humeur et activité physique</p>
                </div>
                <div class="flex items-center space-x-4">
                  <select class="bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500">
                    <option>7 derniers jours</option>
                    <option>30 derniers jours</option>
                    <option>3 derniers mois</option>
                  </select>
                  <button class="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300">
                    Exporter
                  </button>
                </div>
              </div>
            </div>
  
            <!-- Chart Area -->
            <div class="p-8 pt-4">
              <div class="h-[400px] md:h-[500px]">
                <LineChart :chartData="chartJsData" />
              </div>
            </div>
  
            <!-- Chart Info Bar -->
            <div class="px-8 pb-8">
              <div class="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-xl p-6">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div class="text-center">
                    <div class="flex items-center justify-center space-x-2 mb-2">
                      <div class="w-3 h-3 bg-indigo-500 rounded-full"></div>
                      <span class="font-semibold text-gray-800">Sommeil moyen</span>
                    </div>
                    <p class="text-2xl font-bold text-indigo-600">7h 32m</p>
                    <p class="text-sm text-gray-600">+12% cette semaine</p>
                  </div>
                  <div class="text-center">
                    <div class="flex items-center justify-center space-x-2 mb-2">
                      <div class="w-3 h-3 bg-emerald-500 rounded-full"></div>
                      <span class="font-semibold text-gray-800">Humeur moyenne</span>
                    </div>
                    <p class="text-2xl font-bold text-emerald-600">7.8/10</p>
                    <p class="text-sm text-gray-600">Très stable</p>
                  </div>
                  <div class="text-center">
                    <div class="flex items-center justify-center space-x-2 mb-2">
                      <div class="w-3 h-3 bg-amber-500 rounded-full"></div>
                      <span class="font-semibold text-gray-800">Activité moyenne</span>
                    </div>
                    <p class="text-2xl font-bold text-amber-600">42 min</p>
                    <p class="text-sm text-gray-600">Objectif atteint</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Daily Journal Features -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 animate-fade-in-up delay-500">
          <!-- Daily Journal Feature -->
          <div class="bg-gradient-to-br from-emerald-50 to-green-50 rounded-3xl p-8 border border-emerald-100 hover:shadow-xl transition-all duration-500 group">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-lg shadow-emerald-500/30">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"/>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-800 ml-4 group-hover:text-emerald-600 transition-colors duration-300">Journal quotidien</h3>
            </div>
            
            <p class="text-gray-600 mb-6 text-lg leading-relaxed">
              Enregistrez facilement vos données de santé chaque jour avec notre interface intuitive et mobile-friendly.
            </p>
  
            <!-- Daily Journal Items -->
            <div class="space-y-4">
              <div class="flex items-center space-x-4 p-4 bg-white/70 rounded-xl hover:bg-white transition-colors duration-300 group/item">
                <div class="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center group-hover/item:bg-indigo-200 transition-colors duration-300">
                  <svg class="w-4 h-4 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/>
                  </svg>
                </div>
                <div class="flex-1">
                  <h4 class="font-semibold text-gray-800">Sommeil</h4>
                  <p class="text-sm text-gray-600">Heures de coucher/lever et qualité du sommeil</p>
                </div>
              </div>
  
              <div class="flex items-center space-x-4 p-4 bg-white/70 rounded-xl hover:bg-white transition-colors duration-300 group/item">
                <div class="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center group-hover/item:bg-yellow-200 transition-colors duration-300">
                  <svg class="w-4 h-4 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <div class="flex-1">
                  <h4 class="font-semibold text-gray-800">Humeur</h4>
                  <p class="text-sm text-gray-600">Score quotidien ou emojis personnalisés</p>
                </div>
              </div>
  
              <div class="flex items-center space-x-4 p-4 bg-white/70 rounded-xl hover:bg-white transition-colors duration-300 group/item">
                <div class="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center group-hover/item:bg-orange-200 transition-colors duration-300">
                  <svg class="w-4 h-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <div class="flex-1">
                  <h4 class="font-semibold text-gray-800">Activité physique</h4>
                  <p class="text-sm text-gray-600">Durée, type d'exercice et intensité</p>
                </div>
              </div>
  
              <div class="flex items-center space-x-4 p-4 bg-white/70 rounded-xl hover:bg-white transition-colors duration-300 group/item">
                <div class="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center group-hover/item:bg-green-200 transition-colors duration-300">
                  <svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <div class="flex-1">
                  <h4 class="font-semibold text-gray-800">Alimentation</h4>
                  <p class="text-sm text-gray-600">Notes libres ou photos de vos repas</p>
                </div>
              </div>
            </div>
          </div>
  
          <!-- Smart Insights Feature -->
          <div class="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 border border-blue-100 hover:shadow-xl transition-all duration-500 group">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-lg shadow-blue-500/30">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-800 ml-4 group-hover:text-blue-600 transition-colors duration-300">Insights intelligents</h3>
            </div>
            
            <p class="text-gray-600 mb-6 text-lg leading-relaxed">
              Notre IA analyse vos habitudes et vous propose des conseils personnalisés pour améliorer votre bien-être.
            </p>
  
            <!-- Smart Insights -->
            <div class="space-y-4">
              <div class="bg-white/70 rounded-xl p-4 border-l-4 border-blue-500">
                <div class="flex items-start space-x-3">
                  <div class="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                    <svg class="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <p class="font-medium text-gray-800">"Tu dors mieux quand tu fais du sport le soir"</p>
                    <p class="text-sm text-gray-600 mt-1">Corrélation détectée avec 89% de précision</p>
                  </div>
                </div>
              </div>
  
              <div class="bg-white/70 rounded-xl p-4 border-l-4 border-emerald-500">
                <div class="flex items-start space-x-3">
                  <div class="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center mt-0.5">
                    <svg class="w-3 h-3 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <p class="font-medium text-gray-800">"Objectif sommeil atteint 6 jours sur 7"</p>
                    <p class="text-sm text-gray-600 mt-1">Continue comme ça ! Tu es sur la bonne voie</p>
                  </div>
                </div>
              </div>
  
              <div class="bg-white/70 rounded-xl p-4 border-l-4 border-amber-500">
                <div class="flex items-start space-x-3">
                  <div class="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center mt-0.5">
                    <svg class="w-3 h-3 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <p class="font-medium text-gray-800">"Ta humeur baisse les lundis"</p>
                    <p class="text-sm text-gray-600 mt-1">Essaie une activité relaxante le dimanche soir</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Bottom Features Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-up delay-700">
          <!-- Quick Widget -->
          <div class="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 border border-orange-100 hover:shadow-lg transition-all duration-300 group">
            <div class="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mb-4 transform transition-all duration-300 group-hover:scale-110 shadow-lg shadow-orange-500/30">
              <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors duration-300">Widget rapide</h3>
            <p class="text-gray-600">Ajout express de vos données quotidiennes, optimisé mobile</p>
          </div>
  
          <!-- Microsoft OAuth -->
          <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100 hover:shadow-lg transition-all duration-300 group">
            <div class="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mb-4 transform transition-all duration-300 group-hover:scale-110 shadow-lg shadow-blue-500/30">
              <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">Connexion Microsoft</h3>
            <p class="text-gray-600">Authentification OAuth sécurisée avec vos infos dans l'en-tête</p>
          </div>
  
          <!-- Health Integration -->
          <div class="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-6 border border-teal-100 hover:shadow-lg transition-all duration-300 group">
            <div class="w-10 h-10 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mb-4 transform transition-all duration-300 group-hover:scale-110 shadow-lg shadow-teal-500/30">
              <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-800 mb-2 group-hover:text-teal-600 transition-colors duration-300">Intégrations santé</h3>
            <p class="text-gray-600">Synchronisation Google Fit, Apple Health et export médical</p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import LineChart from './LineChart.vue'
  
  export default {
    name: 'FeaturesSection',
    components: { LineChart },
    data() {
      return {
        chartData: [
          { day: 'Lun', sommeil: 7.2, humeur: 6.5, activite: 30 },
          { day: 'Mar', sommeil: 8.1, humeur: 8.2, activite: 45 },
          { day: 'Mer', sommeil: 6.8, humeur: 6.8, activite: 20 },
          { day: 'Jeu', sommeil: 8.5, humeur: 9.1, activite: 60 },
          { day: 'Ven', sommeil: 7.9, humeur: 8.5, activite: 40 },
          { day: 'Sam', sommeil: 8.2, humeur: 8.8, activite: 55 },
          { day: 'Dim', sommeil: 7.6, humeur: 7.9, activite: 35 }
        ]
      }
    },
    computed: {
      chartJsData() {
        return {
          labels: this.chartData.map(d => d.day),
          datasets: [
            {
              label: 'Qualité du sommeil',
              data: this.chartData.map(d => d.sommeil),
              borderColor: '#6366f1',
              backgroundColor: 'rgba(99,102,241,0.1)',
              tension: 0.4
            },
            {
              label: 'Humeur',
              data: this.chartData.map(d => d.humeur),
              borderColor: '#10b981',
              backgroundColor: 'rgba(16,185,129,0.1)',
              tension: 0.4
            },
            {
              label: 'Activité (min)',
              data: this.chartData.map(d => d.activite),
              borderColor: '#f59e0b',
              backgroundColor: 'rgba(245,158,11,0.1)',
              tension: 0.4
            }
          ]
        }
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
  
  .delay-300 {
    animation-delay: 0.3s;
  }
  
  .delay-500 {
    animation-delay: 0.5s;
  }
  
  .delay-700 {
    animation-delay: 0.7s;
  }
  </style>