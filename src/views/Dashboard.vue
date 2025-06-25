<template>
    <div class="min-h-screen bg-gradient-to-br from-gray-50 to-emerald-50/30">
      <!-- Dashboard Layout -->
      <div class="flex">
        <!-- Sidebar -->
        <SideBar 
          @quick-add="openQuickAdd"
          @upgrade-plan="handleUpgradePlan"
        />
  
        <!-- Main Dashboard Content -->
        <div class="flex-1">
          <!-- Top Header -->
          <header class="bg-white/80 backdrop-blur-sm border-b border-gray-200 px-8 py-4">
            <div class="flex items-center justify-between">
              <div>
                <h1 class="text-3xl font-bold text-gray-900">
                  Bonjour, <span class="text-emerald-600">{{ userName }}</span> 👋
                </h1>
                <p class="text-gray-600 mt-1">Voici un aperçu de votre bien-être aujourd'hui</p>
              </div>
              <div class="flex items-center space-x-4">
                <!-- Quick Add Button -->
                <button 
                  @click="openQuickAdd"
                  class="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/30 active:scale-95 flex items-center space-x-2"
                >
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd"/>
                  </svg>
                  <span>Ajouter une entrée</span>
                </button>
                
                <!-- Date -->
                <div class="text-right">
                  <p class="text-sm text-gray-500">Aujourd'hui</p>
                  <p class="font-semibold text-gray-800">{{ currentDate }}</p>
                </div>
              </div>
            </div>
          </header>
  
          <!-- Dashboard Content -->
          <main class="p-8">
            <!-- Quick Stats Cards -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <!-- Sleep Card -->
              <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                <div class="flex items-center justify-between mb-4">
                  <div class="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center group-hover:bg-indigo-200 transition-colors duration-300">
                    <svg class="w-6 h-6 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/>
                    </svg>
                  </div>
                  <span class="text-2xl">😴</span>
                </div>
                <h3 class="text-lg font-semibold text-gray-800 mb-2">Sommeil</h3>
                <p class="text-3xl font-bold text-indigo-600 mb-1">{{ todayStats.sleep }}</p>
                <p class="text-sm text-gray-600">Qualité: {{ todayStats.sleepQuality }}</p>
              </div>
  
              <!-- Mood Card -->
              <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                <div class="flex items-center justify-between mb-4">
                  <div class="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center group-hover:bg-emerald-200 transition-colors duration-300">
                    <svg class="w-6 h-6 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z" clip-rule="evenodd"/>
                    </svg>
                  </div>
                  <span class="text-2xl">{{ todayStats.moodEmoji }}</span>
                </div>
                <h3 class="text-lg font-semibold text-gray-800 mb-2">Humeur</h3>
                <p class="text-3xl font-bold text-emerald-600 mb-1">{{ todayStats.mood }}/10</p>
                <p class="text-sm text-gray-600">{{ todayStats.moodDescription }}</p>
              </div>
  
              <!-- Activity Card -->
              <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                <div class="flex items-center justify-between mb-4">
                  <div class="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center group-hover:bg-orange-200 transition-colors duration-300">
                    <svg class="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clip-rule="evenodd"/>
                    </svg>
                  </div>
                  <span class="text-2xl">🏃‍♂️</span>
                </div>
                <h3 class="text-lg font-semibold text-gray-800 mb-2">Activité</h3>
                <p class="text-3xl font-bold text-orange-600 mb-1">{{ todayStats.activity }}</p>
                <p class="text-sm text-gray-600">{{ todayStats.activityType }}</p>
              </div>
  
              <!-- Nutrition Card -->
              <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                <div class="flex items-center justify-between mb-4">
                  <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors duration-300">
                    <svg class="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd"/>
                    </svg>
                  </div>
                  <span class="text-2xl">🥗</span>
                </div>
                <h3 class="text-lg font-semibold text-gray-800 mb-2">Alimentation</h3>
                <p class="text-3xl font-bold text-green-600 mb-1">{{ todayStats.nutrition }}</p>
                <p class="text-sm text-gray-600">Repas équilibrés</p>
              </div>
            </div>
  
            <!-- Main Content Grid -->
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <!-- Weekly Overview Chart -->
              <div class="lg:col-span-2">
                <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <div class="flex items-center justify-between mb-6">
                    <h2 class="text-2xl font-bold text-gray-800">Aperçu de la semaine</h2>
                    <select class="bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500">
                      <option>7 derniers jours</option>
                      <option>30 derniers jours</option>
                      <option>3 derniers mois</option>
                    </select>
                  </div>
                  
                  <!-- Simple Chart Placeholder -->
                  <div class="h-64 bg-gradient-to-br from-emerald-50 to-blue-50 rounded-xl flex items-center justify-center">
                    <div class="text-center">
                      <div class="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg class="w-8 h-8 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                        </svg>
                      </div>
                      <p class="text-gray-600 font-medium">Graphique détaillé sera ici</p>
                      <p class="text-gray-500 text-sm mt-1">Visualisation de vos données de bien-être</p>
                    </div>
                  </div>
                </div>
              </div>
  
              <!-- Right Column -->
              <div class="space-y-6">
                <!-- Quick Insights -->
                <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <h3 class="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <span class="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                    Insights du jour
                  </h3>
                  <div class="space-y-4">
                    <div class="p-4 bg-blue-50 rounded-xl border-l-4 border-blue-500">
                      <p class="text-blue-800 font-medium">💡 Conseil</p>
                      <p class="text-blue-700 text-sm mt-1">Vous dormez mieux après une activité physique le soir</p>
                    </div>
                    <div class="p-4 bg-emerald-50 rounded-xl border-l-4 border-emerald-500">
                      <p class="text-emerald-800 font-medium">🎯 Objectif</p>
                      <p class="text-emerald-700 text-sm mt-1">Plus que 15 min d'exercice pour atteindre votre objectif!</p>
                    </div>
                    <div class="p-4 bg-purple-50 rounded-xl border-l-4 border-purple-500">
                      <p class="text-purple-800 font-medium">📈 Progrès</p>
                      <p class="text-purple-700 text-sm mt-1">Votre humeur s'améliore de 12% cette semaine</p>
                    </div>
                  </div>
                </div>
  
                <!-- Recent Activity -->
                <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <h3 class="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <span class="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                    Activité récente
                  </h3>
                  <div class="space-y-3">
                    <div class="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                      <div class="flex items-center space-x-3">
                        <span class="text-lg">😴</span>
                        <div>
                          <p class="font-medium text-gray-800">Sommeil ajouté</p>
                          <p class="text-sm text-gray-500">Il y a 2h</p>
                        </div>
                      </div>
                      <span class="text-indigo-600 font-semibold">7h 30m</span>
                    </div>
                    
                    <div class="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                      <div class="flex items-center space-x-3">
                        <span class="text-lg">😊</span>
                        <div>
                          <p class="font-medium text-gray-800">Humeur mise à jour</p>
                          <p class="text-sm text-gray-500">Il y a 4h</p>
                        </div>
                      </div>
                      <span class="text-emerald-600 font-semibold">8/10</span>
                    </div>
                    
                    <div class="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                      <div class="flex items-center space-x-3">
                        <span class="text-lg">🏃‍♂️</span>
                        <div>
                          <p class="font-medium text-gray-800">Course matinale</p>
                          <p class="text-sm text-gray-500">Hier</p>
                        </div>
                      </div>
                      <span class="text-orange-600 font-semibold">45 min</span>
                    </div>
                  </div>
                  
                  <button class="w-full mt-4 text-emerald-600 hover:text-emerald-700 font-medium text-sm transition-colors duration-200">
                    Voir toute l'activité →
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
  
      <!-- Quick Add Modal (placeholder) -->
      <div 
        v-if="showQuickAdd" 
        class="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
        @click="showQuickAdd = false"
      >
        <div class="bg-white rounded-2xl p-8 max-w-md w-full mx-4" @click.stop>
          <h3 class="text-2xl font-bold text-gray-800 mb-6">Ajouter une entrée rapide</h3>
          <p class="text-gray-600 mb-6">Modal pour ajout rapide sera ici...</p>
          <div class="flex space-x-4">
            <button 
              @click="showQuickAdd = false"
              class="flex-1 bg-gray-100 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-200"
            >
              Annuler
            </button>
            <button 
              @click="showQuickAdd = false"
              class="flex-1 bg-emerald-500 text-white py-3 rounded-lg font-medium hover:bg-emerald-600 transition-colors duration-200"
            >
              Ajouter
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import SideBar from '@/components/dashboard/SideBar.vue';
  
  export default {
    name: 'Dashboard',
    components: {
      SideBar
    },
    data() {
      return {
        userName: 'Thomas',
        showQuickAdd: false,
        todayStats: {
          sleep: '7h 30m',
          sleepQuality: 'Excellente',
          mood: 8,
          moodEmoji: '😊',
          moodDescription: 'Très bonne humeur',
          activity: '45 min',
          activityType: 'Course à pied',
          nutrition: '3/3'
        }
      };
    },
    computed: {
      currentDate() {
        const options = { 
          weekday: 'long', 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        };
        return new Date().toLocaleDateString('fr-FR', options);
      }
    },
    methods: {
      openQuickAdd() {
        this.showQuickAdd = true;
      },
      handleUpgradePlan() {
        // Gérer l'upgrade du plan
        console.log('Upgrade plan clicked');
        // Ici vous pouvez ajouter la logique pour l'upgrade
      }
    }
  };
  </script>
  
  <style scoped>
  /* Custom scrollbar for webkit browsers */
  ::-webkit-scrollbar {
    width: 6px;
  }
  
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  
  ::-webkit-scrollbar-thumb {
    background: #10b981;
    border-radius: 3px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: #059669;
  }
  </style>