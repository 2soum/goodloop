<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-green-50/30 flex">
    <!-- Sidebar -->
    <SideBar />

    <!-- Main Content -->
    <div class="flex-1 flex flex-col ml-64 overflow-hidden">
      <!-- Header -->
      <header class="bg-white/80 backdrop-blur-sm border-b border-gray-200 px-8 py-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-4">
            <!-- Back to Dashboard -->
            <button 
              @click="$router.push('/dashboard')"
              class="flex items-center space-x-2 text-gray-600 hover:text-green-600 transition-colors duration-200 group"
            >
              <svg class="w-5 h-5 transform transition-transform duration-200 group-hover:-translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd"/>
              </svg>
              <span class="font-medium">Dashboard</span>
            </button>
            
            <div class="w-px h-6 bg-gray-300"></div>
            
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <svg class="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd"/>
                </svg>
              </div>
              <div>
                <h1 class="text-2xl font-bold text-gray-900">Suivi alimentaire</h1>
                <p class="text-gray-600 text-sm">Enregistrez vos repas et habitudes nutritionnelles</p>
              </div>
            </div>
          </div>
          
          <!-- Actions Header -->
          <div class="flex items-center space-x-3">
            <!-- Download Data Button -->
            <button 
              @click="downloadData"
              class="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2"
              title="Télécharger les données"
            >
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd"/>
              </svg>
              <span>Sauvegarder</span>
            </button>
            
            <!-- Add Meal Button -->
            <button 
              @click="showNutritionModal = true"
              class="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/30 active:scale-95 flex items-center space-x-2"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd"/>
              </svg>
              <span>Ajouter un repas</span>
            </button>
          </div>
        </div>
      </header>

      <!-- Dashboard Content -->
      <main class="flex-1 p-6">
        <!-- Loading State -->
        <div v-if="loading" class="flex items-center justify-center h-64">
          <div class="flex items-center space-x-3">
            <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
            <span class="text-gray-600 font-medium">Chargement des données...</span>
          </div>
        </div>

        <!-- Content -->
        <div v-else>
          <!-- Stats Cards Row -->
          <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <!-- Balanced Meals -->
            <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div class="flex items-center justify-between mb-4">
                <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <svg class="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <span class="text-2xl">⚖️</span>
              </div>
              <h3 class="text-lg font-semibold text-gray-800 mb-2">Équilibre</h3>
              <p class="text-3xl font-bold text-green-600 mb-1">
                {{ nutritionStats ? Math.round(nutritionStats.balance_score) + '%' : '--' }}
              </p>
              <p class="text-sm text-gray-600">Cette semaine</p>
            </div>

            <!-- Water Intake -->
            <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div class="flex items-center justify-between mb-4">
                <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg class="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M5.05 3.636a1 1 0 010 1.414 7 7 0 000 9.9 1 1 0 11-1.414 1.414 9 9 0 010-12.728 1 1 0 011.414 0zm9.9 0a1 1 0 011.414 0 9 9 0 010 12.728 1 1 0 11-1.414-1.414 7 7 0 000-9.9 1 1 0 010-1.414zM7.879 6.464a1 1 0 010 1.414 3 3 0 000 4.243 1 1 0 11-1.415 1.414 5 5 0 010-7.07 1 1 0 011.415 0zm4.242 0a1 1 0 011.415 0 5 5 0 010 7.072 1 1 0 01-1.415-1.415 3 3 0 000-4.242 1 1 0 010-1.415zM10 8a2 2 0 100 4 2 2 0 000-4z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <span class="text-2xl">💧</span>
              </div>
              <h3 class="text-lg font-semibold text-gray-800 mb-2">Qualité</h3>
              <p class="text-3xl font-bold text-blue-600 mb-1">
                {{ nutritionStats ? (nutritionStats.avg_quality * 33.3).toFixed(0) + '%' : '--' }}
              </p>
              <p class="text-sm text-gray-600">Moyenne</p>
            </div>

            <!-- Fruits & Vegetables -->
            <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div class="flex items-center justify-between mb-4">
                <div class="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                  <svg class="w-6 h-6 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/>
                  </svg>
                </div>
                <span class="text-2xl">🥬</span>
              </div>
              <h3 class="text-lg font-semibold text-gray-800 mb-2">Fruits & Légumes</h3>
              <p class="text-3xl font-bold text-emerald-600 mb-1">
                {{ nutritionStats ? nutritionStats.fruit_veg_portions + '/5' : '--' }}
              </p>
              <p class="text-sm text-gray-600">Portions/semaine</p>
            </div>

            <!-- Meal Frequency -->
            <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div class="flex items-center justify-between mb-4">
                <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <svg class="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <span class="text-2xl">🕐</span>
              </div>
              <h3 class="text-lg font-semibold text-gray-800 mb-2">Régularité</h3>
              <p class="text-3xl font-bold text-purple-600 mb-1">
                {{ nutritionStats ? nutritionStats.avg_meals_per_day.toFixed(1) : '--' }}
              </p>
              <p class="text-sm text-gray-600">Repas/jour</p>
            </div>
          </div>

          <!-- Main Content Grid -->
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <!-- Nutrition Chart -->
            <div class="lg:col-span-2">
              <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div class="flex items-center justify-between mb-6">
                  <h2 class="text-2xl font-bold text-gray-800">Équilibre nutritionnel</h2>
                  <select 
                    v-model="selectedTimeRange"
                    @change="updateTimeRange"
                    class="bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <option value="7">7 derniers jours</option>
                    <option value="30">30 derniers jours</option>
                    <option value="90">3 derniers mois</option>
                  </select>
                </div>
                
                <!-- Chart Container -->
                <div class="h-64 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl">
                  <NutritionChart 
                    v-if="nutritionChartData.length > 0" 
                    :chart-data="nutritionChartData" 
                    :key="chartKey"
                  />
                  <div v-else class="h-full flex items-center justify-center">
                    <div class="text-center">
                      <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg class="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                        </svg>
                      </div>
                      <p class="text-gray-600 font-medium">Aucune donnée disponible</p>
                      <p class="text-gray-500 text-sm mt-1">Ajoutez des repas pour voir le graphique</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Meal History -->
            <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h3 class="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <span class="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Repas récents
              </h3>
              <div class="space-y-4">
                <div v-if="nutritionHistory.length === 0" class="text-center py-8">
                  <div class="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd"/>
                    </svg>
                  </div>
                  <p class="text-gray-500 font-medium">Aucune donnée</p>
                  <p class="text-gray-400 text-sm">Ajoutez votre premier repas</p>
                </div>
                
                <div 
                  v-for="entry in nutritionHistory"
                  :key="entry.id"
                  class="flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl transition-colors duration-200 cursor-pointer group"
                >
                  <div class="flex items-center space-x-3">
                    <span class="text-2xl">{{ entry.emoji }}</span>
                    <div>
                      <p class="font-semibold text-gray-800 group-hover:text-green-600 transition-colors duration-200">{{ entry.meal }}</p>
                      <p class="text-gray-500 text-sm">{{ entry.date }} • {{ entry.time }}</p>
                    </div>
                  </div>
                  <div class="text-right">
                    <p class="font-bold text-green-600">{{ entry.type }}</p>
                    <p class="text-gray-500 text-sm">{{ entry.quality }}</p>
                  </div>
                </div>
              </div>
              
              <button 
                v-if="nutritionHistory.length > 0"
                class="w-full mt-6 text-green-600 hover:text-green-700 font-medium text-sm transition-colors duration-200 p-2 hover:bg-green-50 rounded-lg"
              >
                Voir tout l'historique →
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>

    <!-- Nutrition Entry Modal -->
    <div 
      v-if="showNutritionModal"
      class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      @click="showNutritionModal = false"
    >
      <div 
        class="bg-white rounded-2xl w-full max-w-4xl transform transition-all duration-300 scale-100"
        @click.stop
      >
        <!-- Modal Header -->
        <div class="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-6 rounded-t-2xl">
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-3">
              <span class="text-2xl">🍽️</span>
              <h3 class="text-xl font-bold">Nouveau repas</h3>
            </div>
            <button 
              @click="showNutritionModal = false"
              class="text-white/80 hover:text-white transition-colors duration-200"
            >
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>
              </svg>
            </button>
          </div>
        </div>

        <!-- Modal Content -->
        <div class="p-8">
          <form @submit.prevent="saveNutrition" class="space-y-8">
            <!-- First Row: Date, Time, and Meal Type -->
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <!-- Date -->
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2">Date</label>
                <input 
                  v-model="nutritionForm.date"
                  type="date" 
                  class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  :max="today"
                  required
                >
              </div>
              
              <!-- Time -->
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2">Heure</label>
                <input 
                  v-model="nutritionForm.time"
                  type="time" 
                  class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                >
              </div>
              
              <!-- Meal Type -->
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-3">Type de repas</label>
                <div class="grid grid-cols-2 gap-2">
                  <button
                    v-for="meal in mealTypes"
                    :key="meal.type"
                    type="button"
                    @click="nutritionForm.mealType = meal.type"
                    :class="[
                      'p-3 rounded-xl border-2 transition-all duration-300 text-center hover:scale-105',
                      nutritionForm.mealType === meal.type
                        ? 'border-green-500 bg-green-50 text-green-700'
                        : 'border-gray-200 hover:border-green-300 text-gray-600'
                    ]"
                  >
                    <div class="text-xl mb-1">{{ meal.emoji }}</div>
                    <div class="font-medium text-xs">{{ meal.label }}</div>
                  </button>
                </div>
              </div>
            </div>

            <!-- Second Row: Description and Portion -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <!-- Food Description -->
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2">Description du repas</label>
                <textarea 
                  v-model="nutritionForm.description"
                  placeholder="Décrivez votre repas (ex: Salade de quinoa aux légumes grillés)"
                  rows="4"
                  class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                  required
                ></textarea>
              </div>
              
              <!-- Portion Size -->
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-3">Taille de la portion</label>
                <div class="grid grid-cols-3 gap-3">
                  <button
                    v-for="portion in portionSizes"
                    :key="portion.value"
                    type="button"
                    @click="nutritionForm.portion = portion.value"
                    :class="[
                      'p-4 rounded-xl border-2 transition-all duration-300 text-center',
                      nutritionForm.portion === portion.value
                        ? 'border-green-500 bg-green-50 text-green-700'
                        : 'border-gray-200 hover:border-green-300 text-gray-600'
                    ]"
                  >
                    <div class="text-2xl mb-2">{{ portion.emoji }}</div>
                    <div class="font-medium text-sm">{{ portion.label }}</div>
                  </button>
                </div>
              </div>
            </div>

            <!-- Third Row: Quality -->
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-3">Qualité nutritionnelle</label>
              <div class="grid grid-cols-3 gap-4">
                <button
                  v-for="quality in nutritionalQualities"
                  :key="quality.value"
                  type="button"
                  @click="nutritionForm.quality = quality.value"
                  :class="[
                    'p-4 rounded-xl border-2 transition-all duration-300 text-center',
                    nutritionForm.quality === quality.value
                      ? 'border-green-500 bg-green-50 text-green-700'
                      : 'border-gray-200 hover:border-green-300 text-gray-600'
                  ]"
                >
                  <div class="text-2xl mb-2">{{ quality.emoji }}</div>
                  <div class="font-medium text-sm">{{ quality.label }}</div>
                </button>
              </div>
            </div>

            <!-- Submit Buttons -->
            <div class="flex space-x-4 pt-6 border-t border-gray-200">
              <button 
                type="button"
                @click="showNutritionModal = false"
                class="flex-1 bg-gray-100 text-gray-700 py-4 rounded-xl font-medium hover:bg-gray-200 transition-colors duration-200"
              >
                Annuler
              </button>
              <button 
                type="submit"
                :disabled="!isFormValid || submitting"
                class="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 disabled:from-gray-400 disabled:to-gray-500 text-white py-4 rounded-xl font-semibold transition-all duration-300 disabled:cursor-not-allowed flex items-center justify-center"
              >
                <div v-if="submitting" class="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                {{ submitting ? 'Enregistrement...' : 'Enregistrer' }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <!-- Success Toast -->
    <div 
      v-if="showSuccessToast"
      class="fixed bottom-8 right-8 bg-green-500 text-white px-6 py-4 rounded-xl shadow-lg transform transition-all duration-500 z-50"
    >
      <div class="flex items-center space-x-3">
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
        </svg>
        <span class="font-medium">{{ toastMessage }}</span>
      </div>
    </div>

    <!-- Error Toast -->
    <div 
      v-if="showErrorToast"
      class="fixed bottom-8 right-8 bg-red-500 text-white px-6 py-4 rounded-xl shadow-lg transform transition-all duration-500 z-50"
    >
      <div class="flex items-center space-x-3">
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
        </svg>
        <span class="font-medium">{{ errorMessage }}</span>
      </div>
    </div>
  </div>
</template>
<script>
import SideBar from '@/components/dashboard/SideBar.vue'
import NutritionChart from '@/components/NutritionChart.vue'
import databaseService from '@/services/databaseService'

export default {
  name: 'Nutrition',
  components: {
    SideBar,
    NutritionChart
  },
  data() {
    return {
      loading: true,
      submitting: false,
      showNutritionModal: false,
      showSuccessToast: false,
      showErrorToast: false,
      toastMessage: '',
      errorMessage: '',
      selectedTimeRange: '7',
      chartKey: 0, // Force chart re-render
      
      // Données de nutrition
      nutritionHistory: [],
      nutritionChartData: [],
      nutritionStats: null,
      today: this.getTodayDate(),
      
      // Event listeners pour la réactivité
      dataListeners: [],
      
      nutritionForm: {
        date: this.getTodayDate(),
        time: this.getCurrentTime(),
        mealType: '',
        description: '',
        portion: '',
        quality: ''
      },
      mealTypes: [
        { type: 'breakfast', label: 'Petit-déjeuner', emoji: '🌅' },
        { type: 'lunch', label: 'Déjeuner', emoji: '☀️' },
        { type: 'dinner', label: 'Dîner', emoji: '🌙' },
        { type: 'snack', label: 'Collation', emoji: '🍎' }
      ],
      portionSizes: [
        { value: 'small', label: 'Petite', emoji: '🥄' },
        { value: 'medium', label: 'Normale', emoji: '🍽️' },
        { value: 'large', label: 'Grande', emoji: '🍴' }
      ],
      nutritionalQualities: [
        { value: 'excellent', label: 'Excellent', emoji: '🌟' },
        { value: 'good', label: 'Bon', emoji: '😊' },
        { value: 'average', label: 'Moyen', emoji: '😐' }
      ]
    }
  },
  async created() {
    await this.initializeData()
    this.setupEventListeners()
  },
  beforeUnmount() {
    this.removeEventListeners()
  },
  computed: {
    isFormValid() {
      return this.nutritionForm.date && 
             this.nutritionForm.time && 
             this.nutritionForm.mealType &&
             this.nutritionForm.description.trim() &&
             this.nutritionForm.portion &&
             this.nutritionForm.quality
    }
  },
  methods: {
    async initializeData() {
      this.loading = true
      try {
        if (!databaseService.initialized) {
          await databaseService.init()
        }
        await this.loadNutritionData()
      } catch (error) {
        console.error('Error initializing data:', error)
        this.showError('Erreur lors du chargement des données')
      } finally {
        this.loading = false
      }
    },

    setupEventListeners() {
      // Écouter les événements du service de base de données
      const onDataChange = () => {
        this.loadNutritionData()
      }
      
      databaseService.addEventListener('nutritionDataAdded', onDataChange)
      databaseService.addEventListener('dataImported', onDataChange)
      databaseService.addEventListener('dataCleared', onDataChange)
      databaseService.addEventListener('sampleDataGenerated', onDataChange)
      
      this.dataListeners = [
        { type: 'nutritionDataAdded', listener: onDataChange },
        { type: 'dataImported', listener: onDataChange },
        { type: 'dataCleared', listener: onDataChange },
        { type: 'sampleDataGenerated', listener: onDataChange }
      ]
    },

    removeEventListeners() {
      this.dataListeners.forEach(({ type, listener }) => {
        databaseService.removeEventListener(type, listener)
      })
      this.dataListeners = []
    },

    getTodayDate() {
      const today = new Date()
      return today.toISOString().split('T')[0]
    },

    getCurrentTime() {
      const now = new Date()
      return now.toTimeString().slice(0, 5)
    },

    async loadNutritionData() {
      try {
        this.nutritionHistory = databaseService.getRecentNutritionEntries()
        this.nutritionStats = databaseService.getNutritionStats()
        await this.updateChartData()
      } catch (error) {
        console.error('Error loading nutrition data:', error)
        this.showError('Erreur lors du chargement des données nutritionnelles')
      }
    },

    async updateChartData() {
      try {
        this.nutritionChartData = databaseService.getNutritionChartData(parseInt(this.selectedTimeRange))
        this.chartKey++ // Force chart re-render
      } catch (error) {
        console.error('Error updating chart data:', error)
      }
    },

    updateTimeRange() {
      this.updateChartData()
    },

    async saveNutrition() {
      if (!this.isFormValid) return
      
      this.submitting = true
      try {
        const nutritionData = {
          date: this.nutritionForm.date,
          time: this.nutritionForm.time,
          mealType: this.nutritionForm.mealType,
          description: this.nutritionForm.description,
          portion: this.nutritionForm.portion,
          quality: this.nutritionForm.quality
        }
        
        const success = databaseService.addNutritionData(nutritionData)
        
        if (success) {
          this.showNutritionModal = false
          this.showSuccess('Repas enregistré ! 🎉')
          
          // Reset form
          this.nutritionForm = {
            date: this.getTodayDate(),
            time: this.getCurrentTime(),
            mealType: '',
            description: '',
            portion: '',
            quality: ''
          }
        } else {
          this.showError('Erreur lors de l\'enregistrement')
        }
      } catch (error) {
        console.error('Error saving nutrition data:', error)
        this.showError('Erreur lors de l\'enregistrement')
      } finally {
        this.submitting = false
      }
    },

    downloadData() {
      try {
        databaseService.saveToFile()
        this.showSuccess('Fichier téléchargé ! 📁')
      } catch (error) {
        console.error('Error downloading data:', error)
        this.showError('Erreur lors du téléchargement')
      }
    },

    showSuccess(message) {
      this.toastMessage = message
      this.showSuccessToast = true
      setTimeout(() => {
        this.showSuccessToast = false
      }, 3000)
    },

    showError(message) {
      this.errorMessage = message
      this.showErrorToast = true
      setTimeout(() => {
        this.showErrorToast = false
      }, 4000)
    }
  }
}
</script>

<style scoped>
/* Modal animations */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from { 
    opacity: 0;
    transform: translateY(20px) scale(0.95);
  }
  to { 
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.fixed.inset-0 {
  animation: fadeIn 0.3s ease-out;
}

.bg-white.rounded-2xl {
  animation: slideUp 0.3s ease-out;
}

/* Loading animation */
@keyframes spin {
  to { transform: rotate(360deg); }
}

.animate-spin {
  animation: spin 1s linear infinite;
}

/* Hover effects */
.hover\:scale-105:hover {
  transform: scale(1.05);
}
</style>