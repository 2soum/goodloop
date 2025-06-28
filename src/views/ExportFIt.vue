<template>
    <div class="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50/30 flex">
      <!-- Sidebar -->
      <SideBar />
  
      <!-- Main Content -->
      <div class="flex-1 flex flex-col ml-64">
        <!-- Header -->
        <header class="bg-white/80 backdrop-blur-sm border-b border-gray-200 px-8 py-4">
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-4">
              <!-- Back to Dashboard -->
              <button 
                @click="$router.push('/dashboard')"
                class="flex items-center space-x-2 text-gray-600 hover:text-indigo-600 transition-colors duration-200 group"
              >
                <svg class="w-5 h-5 transform transition-transform duration-200 group-hover:-translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd"/>
                </svg>
                <span class="font-medium">Dashboard</span>
              </button>
              
              <div class="w-px h-6 bg-gray-300"></div>
              
              <div class="flex items-center space-x-3">
                <div class="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                  <svg class="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h1 class="text-2xl font-bold text-gray-900">Export & Synchronisation</h1>
                  <p class="text-gray-600 text-sm">Connectez vos applications de santé et exportez vos données</p>
                </div>
              </div>
            </div>
            
            <!-- Status Indicator -->
            <div class="flex items-center space-x-3">
              <div class="flex items-center space-x-2 bg-green-100 text-green-700 px-3 py-2 rounded-full text-sm font-medium">
                <div class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>{{ connectedServices }} service(s) connecté(s)</span>
              </div>
            </div>
          </div>
        </header>
  
        <!-- Main Content -->
        <main class="flex-1 p-8">
          <!-- Quick Stats -->
          <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <!-- Total Data Points -->
            <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div class="flex items-center justify-between mb-4">
                <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg class="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <span class="text-2xl">📊</span>
              </div>
              <h3 class="text-lg font-semibold text-gray-800 mb-2">Données totales</h3>
              <p class="text-3xl font-bold text-blue-600 mb-1">{{ totalDataPoints }}</p>
              <p class="text-sm text-gray-600">Points collectés</p>
            </div>
  
            <!-- Last Sync -->
            <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div class="flex items-center justify-between mb-4">
                <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <svg class="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <span class="text-2xl">🔄</span>
              </div>
              <h3 class="text-lg font-semibold text-gray-800 mb-2">Dernière sync</h3>
              <p class="text-3xl font-bold text-green-600 mb-1">{{ lastSync }}</p>
              <p class="text-sm text-gray-600">{{ lastSyncStatus }}</p>
            </div>
  
            <!-- Export Count -->
            <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div class="flex items-center justify-between mb-4">
                <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <svg class="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <span class="text-2xl">📤</span>
              </div>
              <h3 class="text-lg font-semibold text-gray-800 mb-2">Exports</h3>
              <p class="text-3xl font-bold text-purple-600 mb-1">{{ exportCount }}</p>
              <p class="text-sm text-gray-600">Ce mois-ci</p>
            </div>
  
            <!-- Data Size -->
            <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div class="flex items-center justify-between mb-4">
                <div class="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <svg class="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"/>
                  </svg>
                </div>
                <span class="text-2xl">💾</span>
              </div>
              <h3 class="text-lg font-semibold text-gray-800 mb-2">Taille des données</h3>
              <p class="text-3xl font-bold text-orange-600 mb-1">{{ dataSize }}</p>
              <p class="text-sm text-gray-600">Stockage utilisé</p>
            </div>
          </div>
  
          <!-- Main Grid -->
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <!-- Services Connection -->
            <div class="lg:col-span-2">
              <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div class="flex items-center justify-between mb-6">
                  <h2 class="text-2xl font-bold text-gray-800">Services de santé</h2>
                  <button 
                    @click="refreshConnections"
                    :disabled="isRefreshing"
                    class="bg-gray-100 hover:bg-gray-200 text-gray-600 px-4 py-2 rounded-lg transition-colors duration-200 flex items-center space-x-2"
                  >
                    <svg :class="['w-4 h-4', isRefreshing ? 'animate-spin' : '']" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd"/>
                    </svg>
                    <span>Actualiser</span>
                  </button>
                </div>
                
                <!-- Health Services -->
                <div class="space-y-6">
                  <div 
                    v-for="service in healthServices"
                    :key="service.id"
                    class="border border-gray-200 rounded-xl p-6 hover:border-indigo-300 hover:shadow-md transition-all duration-300"
                  >
                    <div class="flex items-center justify-between">
                      <div class="flex items-center space-x-4">
                        <!-- Service Icon -->
                        <div :class="['w-12 h-12 rounded-xl flex items-center justify-center', service.bgColor]">
                          <img v-if="service.icon" :src="service.icon" :alt="service.name" class="w-8 h-8" />
                          <span v-else class="text-2xl">{{ service.emoji }}</span>
                        </div>
                        
                        <!-- Service Info -->
                        <div>
                          <h3 class="text-lg font-semibold text-gray-800">{{ service.name }}</h3>
                          <p class="text-sm text-gray-600">{{ service.description }}</p>
                          <div v-if="service.connected" class="flex items-center space-x-4 mt-2 text-sm">
                            <span class="flex items-center text-green-600">
                              <div class="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                              Connecté
                            </span>
                            <span class="text-gray-500">{{ service.lastSync }}</span>
                            <span class="text-indigo-600">{{ service.dataCount }} données</span>
                          </div>
                        </div>
                      </div>
                      
                      <!-- Connection Controls -->
                      <div class="flex items-center space-x-3">
                        <div v-if="service.connected" class="flex items-center space-x-2">
                          <!-- Sync Button -->
                          <button 
                            @click="syncService(service)"
                            :disabled="service.syncing"
                            class="bg-indigo-100 hover:bg-indigo-200 text-indigo-700 px-4 py-2 rounded-lg transition-colors duration-200 flex items-center space-x-2"
                          >
                            <svg :class="['w-4 h-4', service.syncing ? 'animate-spin' : '']" fill="currentColor" viewBox="0 0 20 20">
                              <path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd"/>
                            </svg>
                            <span>{{ service.syncing ? 'Sync...' : 'Sync' }}</span>
                          </button>
                          
                          <!-- Disconnect Button -->
                          <button 
                            @click="disconnectService(service)"
                            class="bg-red-100 hover:bg-red-200 text-red-700 px-4 py-2 rounded-lg transition-colors duration-200"
                          >
                            Déconnecter
                          </button>
                        </div>
                        
                        <!-- Connect Button -->
                        <button 
                          v-else
                          @click="connectService(service)"
                          :disabled="service.connecting"
                          class="bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-600 hover:to-blue-700 disabled:from-gray-400 disabled:to-gray-500 text-white px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:hover:scale-100 flex items-center space-x-2"
                        >
                          <svg v-if="service.connecting" class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          <span>{{ service.connecting ? 'Connexion...' : 'Connecter' }}</span>
                        </button>
                      </div>
                    </div>
                    
                    <!-- Data Types (for connected services) -->
                    <div v-if="service.connected && service.dataTypes" class="mt-4 pt-4 border-t border-gray-100">
                      <h4 class="text-sm font-semibold text-gray-700 mb-2">Types de données synchronisées :</h4>
                      <div class="flex flex-wrap gap-2">
                        <span 
                          v-for="dataType in service.dataTypes"
                          :key="dataType"
                          class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {{ dataType }}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Export Options -->
            <div class="space-y-6">
              <!-- Quick Export -->
              <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h3 class="text-xl font-bold text-gray-800 mb-6 flex items-center">
                  <span class="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                  Export rapide
                </h3>
                
                <div class="space-y-4">
                  <button 
                    v-for="exportOption in quickExportOptions"
                    :key="exportOption.id"
                    @click="quickExport(exportOption)"
                    class="w-full p-4 border border-gray-200 rounded-xl hover:border-indigo-300 hover:shadow-md transition-all duration-300 text-left group"
                  >
                    <div class="flex items-center space-x-3">
                      <span class="text-2xl">{{ exportOption.emoji }}</span>
                      <div class="flex-1">
                        <h4 class="font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors duration-200">
                          {{ exportOption.title }}
                        </h4>
                        <p class="text-sm text-gray-500">{{ exportOption.description }}</p>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
              
              <!-- Advanced Export -->
              <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h3 class="text-xl font-bold text-gray-800 mb-6 flex items-center">
                  <span class="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Export personnalisé
                </h3>
                
                <form @submit.prevent="customExport" class="space-y-4">
                  <!-- Date Range -->
                  <div>
                    <label class="block text-sm font-semibold text-gray-700 mb-2">Période</label>
                    <div class="grid grid-cols-2 gap-2">
                      <input 
                        v-model="exportForm.startDate"
                        type="date" 
                        class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                        :max="exportForm.endDate || today"
                      >
                      <input 
                        v-model="exportForm.endDate"
                        type="date" 
                        class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                        :min="exportForm.startDate"
                        :max="today"
                      >
                    </div>
                  </div>
                  
                  <!-- Data Types -->
                  <div>
                    <label class="block text-sm font-semibold text-gray-700 mb-2">Types de données</label>
                    <div class="space-y-2 max-h-32 overflow-y-auto">
                      <label 
                        v-for="dataType in availableDataTypes"
                        :key="dataType.id"
                        class="flex items-center space-x-2"
                      >
                        <input 
                          type="checkbox" 
                          v-model="exportForm.dataTypes"
                          :value="dataType.id"
                          class="text-indigo-600 rounded focus:ring-indigo-500"
                        >
                        <span class="text-sm text-gray-700">{{ dataType.name }}</span>
                      </label>
                    </div>
                  </div>
                  
                  <!-- Format -->
                  <div>
                    <label class="block text-sm font-semibold text-gray-700 mb-2">Format</label>
                    <select 
                      v-model="exportForm.format"
                      class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                    >
                      <option value="csv">CSV</option>
                      <option value="json">JSON</option>
                      <option value="pdf">PDF</option>
                      <option value="xlsx">Excel</option>
                    </select>
                  </div>
                  
                  <!-- Submit -->
                  <button 
                    type="submit"
                    :disabled="!exportForm.dataTypes.length || exporting"
                    class="w-full bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 disabled:from-gray-400 disabled:to-gray-500 text-white py-3 rounded-lg font-semibold transition-all duration-300 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    <svg v-if="exporting" class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>{{ exporting ? 'Export en cours...' : 'Exporter' }}</span>
                  </button>
                </form>
              </div>
              
              <!-- Recent Exports -->
              
            </div>
          </div>
        </main>
      </div>
      
      <!-- Success Toast -->
      <div 
        v-if="showToast"
        class="fixed bottom-8 right-8 bg-indigo-500 text-white px-6 py-4 rounded-xl shadow-lg transform transition-all duration-500 z-50"
      >
        <div class="flex items-center space-x-3">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
          </svg>
          <span class="font-medium">{{ toastMessage }}</span>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import SideBar from '@/components/dashboard/SideBar.vue';
  
  export default {
    name: 'Export',
    components: {
      SideBar
    },
    data() {
      return {
        showToast: false,
        toastMessage: '',
        isRefreshing: false,
        exporting: false,
        exportForm: {
          startDate: this.getDateWeeksAgo(4),
          endDate: this.getToday(),
          dataTypes: ['sleep', 'activity', 'heart_rate'],
          format: 'csv'
        },
        healthServices: [
          {
            id: 'google_fit',
            name: 'Google Fit',
            description: 'Synchronisez vos données d\'activité, de pas et de santé',
            emoji: '🔵',
            bgColor: 'bg-blue-100',
            connected: true,
            syncing: false,
            connecting: false,
            lastSync: 'Il y a 2h',
            dataCount: '1,247',
            dataTypes: ['Pas', 'Activité', 'Rythme cardiaque', 'Poids', 'Calories']
          },
          {
            id: 'apple_health',
            name: 'Apple Health',
            description: 'Importez toutes vos données de santé depuis HealthKit',
            emoji: '🍎',
            bgColor: 'bg-gray-100',
            connected: false,
            syncing: false,
            connecting: false,
            lastSync: null,
            dataCount: null,
            dataTypes: null
          },
          {
            id: 'fitbit',
            name: 'Fitbit',
            description: 'Connectez votre compte Fitbit pour la synchronisation automatique',
            emoji: '⚫',
            bgColor: 'bg-teal-100',
            connected: true,
            syncing: false,
            connecting: false,
            lastSync: 'Il y a 6h',
            dataCount: '892',
            dataTypes: ['Sommeil', 'Pas', 'Rythme cardiaque', 'Exercices']
          },
          {
            id: 'samsung_health',
            name: 'Samsung Health',
            description: 'Synchronisez vos données Samsung Health',
            emoji: '📱',
            bgColor: 'bg-purple-100',
            connected: false,
            syncing: false,
            connecting: false,
            lastSync: null,
            dataCount: null,
            dataTypes: null
          },
          {
            id: 'strava',
            name: 'Strava',
            description: 'Importez vos activités sportives depuis Strava',
            emoji: '🏃‍♂️',
            bgColor: 'bg-orange-100',
            connected: false,
            syncing: false,
            connecting: false,
            lastSync: null,
            dataCount: null,
            dataTypes: null
          },
          {
            id: 'myfitnesspal',
            name: 'MyFitnessPal',
            description: 'Synchronisez vos données nutritionnelles',
            emoji: '🍽️',
            bgColor: 'bg-green-100',
            connected: false,
            syncing: false,
            connecting: false,
            lastSync: null,
            dataCount: null,
            dataTypes: null
          }
        ],
        quickExportOptions: [
          {
            id: 'last_week',
            title: 'Dernière semaine',
            description: 'Toutes les données des 7 derniers jours',
            emoji: '📅'
          },
          {
            id: 'last_month',
            title: 'Dernier mois',
            description: 'Résumé complet du mois passé',
            emoji: '📊'
          },
          {
            id: 'health_report',
            title: 'Rapport santé',
            description: 'Rapport PDF avec graphiques',
            emoji: '🏥'
          },
          {
            id: 'backup',
            title: 'Sauvegarde complète',
            description: 'Toutes vos données Goodloop',
            emoji: '💾'
          }
        ],
        availableDataTypes: [
          { id: 'sleep', name: 'Sommeil' },
          { id: 'activity', name: 'Activité physique' },
          { id: 'heart_rate', name: 'Rythme cardiaque' },
          { id: 'steps', name: 'Pas quotidiens' },
          { id: 'weight', name: 'Poids' },
          { id: 'nutrition', name: 'Alimentation' },
          { id: 'mood', name: 'Humeur' },
          { id: 'stress', name: 'Niveau de stress' },
          { id: 'goals', name: 'Objectifs' },
          { id: 'habits', name: 'Habitudes' }
        ],
        recentExports: [
          {
            id: 1,
            name: 'Rapport_Juin_2025.pdf',
            date: 'Il y a 2 jours',
            emoji: '📄'
          },
          {
            id: 2,
            name: 'Donnees_Sommeil.csv',
            date: 'Il y a 5 jours',
            emoji: '💤'
          },
          {
            id: 3,
            name: 'Activites_Mai.json',
            date: 'Il y a 1 semaine',
            emoji: '🏃‍♂️'
          },
          {
            id: 4,
            name: 'Backup_Complete.zip',
            date: 'Il y a 2 semaines',
            emoji: '📦'
          }
        ]
      };
    },
    computed: {
      today() {
        return new Date().toISOString().split('T')[0];
      },
      connectedServices() {
        return this.healthServices.filter(service => service.connected).length;
      },
      totalDataPoints() {
        return this.healthServices
          .filter(service => service.connected)
          .reduce((total, service) => {
            const count = parseInt(service.dataCount?.replace(',', '') || '0');
            return total + count;
          }, 0)
          .toLocaleString();
      },
      lastSync() {
        const connectedServices = this.healthServices.filter(service => service.connected);
        if (connectedServices.length === 0) return 'Jamais';
        
        // Simuler la sync la plus récente
        return 'Il y a 2h';
      },
      lastSyncStatus() {
        return this.connectedServices > 0 ? 'Synchronisé' : 'Aucune connexion';
      },
      exportCount() {
        return 8; // Simulation
      },
      dataSize() {
        return '247 MB'; // Simulation
      }
    },
    methods: {
      getToday() {
        return new Date().toISOString().split('T')[0];
      },
      getDateWeeksAgo(weeks) {
        const date = new Date();
        date.setDate(date.getDate() - (weeks * 7));
        return date.toISOString().split('T')[0];
      },
      
      async connectService(service) {
        service.connecting = true;
        
        try {
          // Simuler la connexion
          await new Promise(resolve => setTimeout(resolve, 2000));
          
          service.connected = true;
          service.connecting = false;
          service.lastSync = 'À l\'instant';
          service.dataCount = Math.floor(Math.random() * 1000 + 500).toString();
          
          // Définir les types de données selon le service
          const dataTypeMapping = {
            google_fit: ['Pas', 'Activité', 'Rythme cardiaque', 'Poids', 'Calories'],
            apple_health: ['Sommeil', 'Pas', 'Rythme cardiaque', 'Nutrition', 'Poids'],
            fitbit: ['Sommeil', 'Pas', 'Rythme cardiaque', 'Exercices'],
            samsung_health: ['Pas', 'Activité', 'Stress', 'Sommeil'],
            strava: ['Course', 'Vélo', 'Natation', 'Randonnée'],
            myfitnesspal: ['Calories', 'Macronutriments', 'Repas', 'Poids']
          };
          
          service.dataTypes = dataTypeMapping[service.id] || ['Données générales'];
          
          this.showToastMessage(`${service.name} connecté avec succès ! 🎉`);
        } catch (error) {
          service.connecting = false;
          this.showToastMessage(`Erreur de connexion à ${service.name}`);
        }
      },
      
      async disconnectService(service) {
        if (confirm(`Êtes-vous sûr de vouloir déconnecter ${service.name} ?`)) {
          service.connected = false;
          service.lastSync = null;
          service.dataCount = null;
          service.dataTypes = null;
          this.showToastMessage(`${service.name} déconnecté`);
        }
      },
      
      async syncService(service) {
        service.syncing = true;
        
        try {
          await new Promise(resolve => setTimeout(resolve, 1500));
          
          service.lastSync = 'À l\'instant';
          const currentCount = parseInt(service.dataCount?.replace(',', '') || '0');
          service.dataCount = (currentCount + Math.floor(Math.random() * 50 + 10)).toLocaleString();
          service.syncing = false;
          
          this.showToastMessage(`${service.name} synchronisé ! Nouvelles données importées`);
        } catch (error) {
          service.syncing = false;
          this.showToastMessage(`Erreur de synchronisation avec ${service.name}`);
        }
      },
      
      async refreshConnections() {
        this.isRefreshing = true;
        
        try {
          await new Promise(resolve => setTimeout(resolve, 1000));
          
          // Simuler une mise à jour des statuts
          this.healthServices.forEach(service => {
            if (service.connected) {
              service.lastSync = 'À l\'instant';
            }
          });
          
          this.isRefreshing = false;
          this.showToastMessage('Connexions mises à jour');
        } catch (error) {
          this.isRefreshing = false;
          this.showToastMessage('Erreur lors de la mise à jour');
        }
      },
      
      async quickExport(option) {
        this.exporting = true;
        
        try {
          await new Promise(resolve => setTimeout(resolve, 2000));
          
          // Simuler la génération du fichier
          const fileName = this.generateFileName(option);
          
          // Ajouter à l'historique des exports
          this.recentExports.unshift({
            id: Date.now(),
            name: fileName,
            date: 'À l\'instant',
            emoji: option.emoji
          });
          
          // Garder seulement les 4 derniers
          if (this.recentExports.length > 4) {
            this.recentExports = this.recentExports.slice(0, 4);
          }
          
          this.exporting = false;
          this.showToastMessage(`Export "${option.title}" terminé ! Téléchargement en cours...`);
          
          // Simuler le téléchargement
          this.simulateDownload(fileName);
        } catch (error) {
          this.exporting = false;
          this.showToastMessage('Erreur lors de l\'export');
        }
      },
      
      async customExport() {
        if (!this.exportForm.dataTypes.length) return;
        
        this.exporting = true;
        
        try {
          await new Promise(resolve => setTimeout(resolve, 2500));
          
          const fileName = `Export_${this.exportForm.startDate}_${this.exportForm.endDate}.${this.exportForm.format}`;
          
          this.recentExports.unshift({
            id: Date.now(),
            name: fileName,
            date: 'À l\'instant',
            emoji: '📊'
          });
          
          if (this.recentExports.length > 4) {
            this.recentExports = this.recentExports.slice(0, 4);
          }
          
          this.exporting = false;
          this.showToastMessage('Export personnalisé terminé ! Téléchargement en cours...');
          
          this.simulateDownload(fileName);
        } catch (error) {
          this.exporting = false;
          this.showToastMessage('Erreur lors de l\'export personnalisé');
        }
      },
      
      generateFileName(option) {
        const date = new Date().toISOString().split('T')[0];
        const fileNames = {
          last_week: `Semaine_${date}.csv`,
          last_month: `Mois_${date}.xlsx`,
          health_report: `Rapport_Sante_${date}.pdf`,
          backup: `Backup_Goodloop_${date}.zip`
        };
        return fileNames[option.id] || `Export_${date}.csv`;
      },
      
      simulateDownload(fileName) {
        // Créer un lien de téléchargement factice
        const link = document.createElement('a');
        link.href = '#';
        link.download = fileName;
        link.style.display = 'none';
        document.body.appendChild(link);
        
        // Simuler le clic (dans un vrai projet, vous auriez une vraie URL)
        setTimeout(() => {
          console.log(`Téléchargement simulé : ${fileName}`);
          document.body.removeChild(link);
        }, 100);
      },
      
      downloadExport(export_) {
        this.simulateDownload(export_.name);
        this.showToastMessage(`Téléchargement de ${export_.name}...`);
      },
      
      showToastMessage(message) {
        this.toastMessage = message;
        this.showToast = true;
        setTimeout(() => {
          this.showToast = false;
        }, 3000);
      }
    }
  };
  </script>
  
  <style scoped>
  /* Animations */
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  @keyframes slideUp {
    from { 
      opacity: 0;
      transform: translateY(20px);
    }
    to { 
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  
  .animate-spin {
    animation: spin 1s linear infinite;
  }
  
  /* Hover effects */
  .hover\:scale-105:hover {
    transform: scale(1.05);
  }
  
  .group:hover .group-hover\:text-indigo-600 {
    color: #4f46e5;
  }
  
  .group:hover .group-hover\:border-indigo-300 {
    border-color: #a5b4fc;
  }
  
  /* Custom scrollbar */
  .overflow-y-auto::-webkit-scrollbar {
    width: 4px;
  }
  
  .overflow-y-auto::-webkit-scrollbar-track {
    background: #f1f5f9;
    border-radius: 2px;
  }
  
  .overflow-y-auto::-webkit-scrollbar-thumb {
    background: #6366f1;
    border-radius: 2px;
  }
  
  .overflow-y-auto::-webkit-scrollbar-thumb:hover {
    background: #4f46e5;
  }
  
  /* Service connection status */
  .bg-blue-100 { background-color: #dbeafe; }
  .bg-gray-100 { background-color: #f3f4f6; }
  .bg-teal-100 { background-color: #ccfbf1; }
  .bg-purple-100 { background-color: #e9d5ff; }
  .bg-orange-100 { background-color: #fed7aa; }
  .bg-green-100 { background-color: #dcfce7; }
  
  /* Button states */
  .disabled\:cursor-not-allowed:disabled {
    cursor: not-allowed;
  }
  
  .disabled\:hover\:scale-100:disabled:hover {
    transform: scale(1);
  }
  
  /* Form elements */
  input[type="checkbox"]:checked {
    background-color: #4f46e5;
    border-color: #4f46e5;
  }
  
  input[type="checkbox"]:focus {
    box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.2);
  }
  
  /* Toast animation */
  .fixed.bottom-8 {
    animation: slideUp 0.5s ease-out;
  }
  
  /* Responsive adjustments */
  @media (max-width: 1024px) {
    .lg\:col-span-2 {
      grid-column: span 1;
    }
    
    .grid.grid-cols-1.lg\:grid-cols-3 {
      grid-template-columns: 1fr;
    }
  }
  
  @media (max-width: 768px) {
    .grid.grid-cols-1.md\:grid-cols-4 {
      grid-template-columns: repeat(2, 1fr);
    }
    
    .px-8 {
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }
  </style>