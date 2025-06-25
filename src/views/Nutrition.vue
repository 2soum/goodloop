<template>
    <div class="min-h-screen bg-gradient-to-br from-gray-50 to-green-50/30 flex">
      <!-- Sidebar -->
      <SideBar />
  
      <!-- Main Content -->
      <div class="flex-1 flex flex-col">
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
        </header>
  
        <!-- Dashboard Content -->
        <main class="flex-1 p-8">
          <!-- Today's Meals Progress -->
          <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-8">
            <h2 class="text-xl font-bold text-gray-800 mb-4">Repas d'aujourd'hui</h2>
            <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
              <!-- Breakfast -->
              <div class="text-center p-4 rounded-xl bg-yellow-50 border border-yellow-200">
                <div class="text-3xl mb-2">🌅</div>
                <h3 class="font-semibold text-gray-800">Petit-déjeuner</h3>
                <p class="text-sm text-green-600 font-medium mt-1">✓ Pris</p>
              </div>
              <!-- Lunch -->
              <div class="text-center p-4 rounded-xl bg-orange-50 border border-orange-200">
                <div class="text-3xl mb-2">☀️</div>
                <h3 class="font-semibold text-gray-800">Déjeuner</h3>
                <p class="text-sm text-green-600 font-medium mt-1">✓ Pris</p>
              </div>
              <!-- Dinner -->
              <div class="text-center p-4 rounded-xl bg-purple-50 border border-purple-200">
                <div class="text-3xl mb-2">🌙</div>
                <h3 class="font-semibold text-gray-800">Dîner</h3>
                <p class="text-sm text-gray-500 font-medium mt-1">À venir</p>
              </div>
              <!-- Snacks -->
              <div class="text-center p-4 rounded-xl bg-green-50 border border-green-200">
                <div class="text-3xl mb-2">🍎</div>
                <h3 class="font-semibold text-gray-800">Collations</h3>
                <p class="text-sm text-green-600 font-medium mt-1">1 prise</p>
              </div>
            </div>
          </div>
  
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
              <p class="text-3xl font-bold text-green-600 mb-1">85%</p>
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
              <h3 class="text-lg font-semibold text-gray-800 mb-2">Hydratation</h3>
              <p class="text-3xl font-bold text-blue-600 mb-1">1.8L</p>
              <p class="text-sm text-gray-600">Objectif: 2L</p>
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
              <p class="text-3xl font-bold text-emerald-600 mb-1">4/5</p>
              <p class="text-sm text-gray-600">Portions/jour</p>
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
              <p class="text-3xl font-bold text-purple-600 mb-1">3.2</p>
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
                  <select class="bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500">
                    <option>7 derniers jours</option>
                    <option>30 derniers jours</option>
                    <option>3 derniers mois</option>
                  </select>
                </div>
                
                <!-- Chart Placeholder -->
                <div class="h-64 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl flex items-center justify-center">
                  <div class="text-center">
                    <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg class="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                      </svg>
                    </div>
                    <p class="text-gray-600 font-medium">Graphique nutritionnel</p>
                    <p class="text-gray-500 text-sm mt-1">Équilibre des repas sur 7 jours</p>
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
              
              <button class="w-full mt-6 text-green-600 hover:text-green-700 font-medium text-sm transition-colors duration-200 p-2 hover:bg-green-50 rounded-lg">
                Voir tout l'historique →
              </button>
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
          class="bg-white rounded-2xl w-full max-w-md transform transition-all duration-300 scale-100"
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
          <div class="p-6">
            <form @submit.prevent="saveNutrition" class="space-y-6">
              <!-- Date and Time -->
              <div class="grid grid-cols-2 gap-4">
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
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-2">Heure</label>
                  <input 
                    v-model="nutritionForm.time"
                    type="time" 
                    class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  >
                </div>
              </div>
  
              <!-- Meal Type -->
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-3">Type de repas</label>
                <div class="grid grid-cols-2 gap-3">
                  <button
                    v-for="meal in mealTypes"
                    :key="meal.type"
                    type="button"
                    @click="nutritionForm.mealType = meal.type"
                    :class="[
                      'p-4 rounded-xl border-2 transition-all duration-300 text-center hover:scale-105',
                      nutritionForm.mealType === meal.type
                        ? 'border-green-500 bg-green-50 text-green-700'
                        : 'border-gray-200 hover:border-green-300 text-gray-600'
                    ]"
                  >
                    <div class="text-2xl mb-2">{{ meal.emoji }}</div>
                    <div class="font-medium text-sm">{{ meal.label }}</div>
                  </button>
                </div>
              </div>
  
              <!-- Food Description -->
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2">Description du repas</label>
                <textarea 
                  v-model="nutritionForm.description"
                  placeholder="Décrivez votre repas (ex: Salade de quinoa aux légumes grillés)"
                  rows="3"
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
                      'p-3 rounded-xl border-2 transition-all duration-300 text-center',
                      nutritionForm.portion === portion.value
                        ? 'border-green-500 bg-green-50 text-green-700'
                        : 'border-gray-200 hover:border-green-300 text-gray-600'
                    ]"
                  >
                    <div class="text-lg mb-1">{{ portion.emoji }}</div>
                    <div class="font-medium text-xs">{{ portion.label }}</div>
                  </button>
                </div>
              </div>
  
              <!-- Nutritional Quality -->
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-3">Qualité nutritionnelle</label>
                <div class="grid grid-cols-3 gap-3">
                  <button
                    v-for="quality in nutritionalQualities"
                    :key="quality.value"
                    type="button"
                    @click="nutritionForm.quality = quality.value"
                    :class="[
                      'p-3 rounded-xl border-2 transition-all duration-300 text-center',
                      nutritionForm.quality === quality.value
                        ? 'border-green-500 bg-green-50 text-green-700'
                        : 'border-gray-200 hover:border-green-300 text-gray-600'
                    ]"
                  >
                    <div class="text-lg mb-1">{{ quality.emoji }}</div>
                    <div class="font-medium text-xs">{{ quality.label }}</div>
                  </button>
                </div>
              </div>
  
              <!-- Photo Upload Option -->
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2">Photo (optionnel)</label>
                <div class="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-green-400 transition-colors duration-200">
                  <svg class="w-8 h-8 text-gray-400 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd"/>
                  </svg>
                  <p class="text-gray-500 text-sm">Ajoutez une photo de votre repas</p>
                  <p class="text-gray-400 text-xs mt-1">JPG, PNG jusqu'à 5MB</p>
                </div>
              </div>
  
              <!-- Submit -->
              <div class="flex space-x-3 pt-4">
                <button 
                  type="button"
                  @click="showNutritionModal = false"
                  class="flex-1 bg-gray-100 text-gray-700 py-3 rounded-xl font-medium hover:bg-gray-200 transition-colors duration-200"
                >
                  Annuler
                </button>
                <button 
                  type="submit"
                  :disabled="!isFormValid"
                  class="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 disabled:from-gray-400 disabled:to-gray-500 text-white py-3 rounded-xl font-semibold transition-all duration-300 disabled:cursor-not-allowed"
                >
                  Enregistrer
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
  
      <!-- Success Toast -->
      <div 
        v-if="showSuccessToast"
        class="fixed bottom-8 right-8 bg-green-500 text-white px-6 py-4 rounded-xl shadow-lg transform transition-all duration-500"
      >
        <div class="flex items-center space-x-3">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
          </svg>
          <span class="font-medium">Repas enregistré ! 🎉</span>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import SideBar from '@/components/dashboard/SideBar.vue';

  export default {
    name: 'Nutrition',
    components: {
      SideBar
    },
    data() {
      return {
        showNutritionModal: false,
        showSuccessToast: false,
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
        ],
        nutritionHistory: [
          {
            id: 1,
            meal: 'Salade de quinoa',
            date: 'Aujourd\'hui',
            time: '12:30',
            type: 'Déjeuner',
            quality: 'Excellent',
            emoji: '🥗'
          },
          {
            id: 2,
            meal: 'Smoothie aux fruits',
            date: 'Aujourd\'hui',
            time: '08:00',
            type: 'Petit-déj',
            quality: 'Bon',
            emoji: '🥤'
          },
          {
            id: 3,
            meal: 'Saumon grillé',
            date: 'Hier',
            time: '19:15',
            type: 'Dîner',
            quality: 'Excellent',
            emoji: '🐟'
          },
          {
            id: 4,
            meal: 'Yaourt aux noix',
            date: 'Hier',
            time: '16:00',
            type: 'Collation',
            quality: 'Bon',
            emoji: '🥛'
          }
        ]
      };
    },
    computed: {
      today() {
        return new Date().toISOString().split('T')[0];
      },
      isFormValid() {
        return this.nutritionForm.date && 
               this.nutritionForm.time && 
               this.nutritionForm.mealType &&
               this.nutritionForm.description.trim() &&
               this.nutritionForm.portion &&
               this.nutritionForm.quality;
      }
    },
    methods: {
      getTodayDate() {
        return new Date().toISOString().split('T')[0];
      },
      getCurrentTime() {
        const now = new Date();
        return now.toTimeString().slice(0, 5);
      },
      saveNutrition() {
        if (!this.isFormValid) return;
        
        console.log('Données nutritionnelles:', this.nutritionForm);
        
        // Fermer modal et montrer succès
        this.showNutritionModal = false;
        this.showSuccessToast = true;
        
        setTimeout(() => {
          this.showSuccessToast = false;
        }, 3000);
        
        // Reset form
        this.nutritionForm = {
          date: this.getTodayDate(),
          time: this.getCurrentTime(),
          mealType: '',
          description: '',
          portion: '',
          quality: ''
        };
      }
    }
  };
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
  
  /* Hover effects */
  .hover\:scale-105:hover {
    transform: scale(1.05);
  }
  </style>