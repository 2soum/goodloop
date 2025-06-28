<template>
    <div class="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50/30 flex ">
      <!-- Sidebar -->
      <SideBar />
  
      <!-- Main Content -->
      <div class="flex-1 flex flex-col ml-64 overflow-hidden">
        <!-- Header -->
        <header class="bg-white/80 backdrop-blur-sm border-b border-gray-200 px-8 py-4 ">
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
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/>
                  </svg>
                </div>
                <div>
                  <h1 class="text-2xl font-bold text-gray-900">Suivi du sommeil</h1>
                  <p class="text-gray-600 text-sm">Analysez vos habitudes de repos</p>
                </div>
              </div>
            </div>
            
            <!-- Add Sleep Button -->
            <button 
              @click="showSleepModal = true"
              class="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/30 active:scale-95 flex items-center space-x-2"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd"/>
              </svg>
              <span>Ajouter une nuit</span>
            </button>
          </div>
        </header>
  
        <!-- Dashboard Content -->
        <main class="flex-1 p-6">
          <!-- Stats Cards Row -->
          <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <!-- Average Sleep -->
            <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div class="flex items-center justify-between mb-4">
                <div class="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                  <svg class="w-6 h-6 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <span class="text-2xl">😴</span>
              </div>
              <h3 class="text-lg font-semibold text-gray-800 mb-2">Moyenne</h3>
              <p class="text-3xl font-bold text-indigo-600 mb-1">7h 32m</p>
              <p class="text-sm text-gray-600">Cette semaine</p>
            </div>
  
            <!-- Sleep Quality -->
            <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div class="flex items-center justify-between mb-4">
                <div class="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                  <svg class="w-6 h-6 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                </div>
                <span class="text-2xl">⭐</span>
              </div>
              <h3 class="text-lg font-semibold text-gray-800 mb-2">Qualité</h3>
              <p class="text-3xl font-bold text-emerald-600 mb-1">Bonne</p>
              <p class="text-sm text-gray-600">7 derniers jours</p>
            </div>
  
            <!-- Best Night -->
            <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div class="flex items-center justify-between mb-4">
                <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <svg class="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <span class="text-2xl">🏆</span>
              </div>
              <h3 class="text-lg font-semibold text-gray-800 mb-2">Meilleure nuit</h3>
              <p class="text-3xl font-bold text-purple-600 mb-1">8h 45m</p>
              <p class="text-sm text-gray-600">Il y a 3 jours</p>
            </div>
  
            <!-- Goal Progress -->
            <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div class="flex items-center justify-between mb-4">
                <div class="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <svg class="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <span class="text-2xl">🎯</span>
              </div>
              <h3 class="text-lg font-semibold text-gray-800 mb-2">Objectif</h3>
              <p class="text-3xl font-bold text-orange-600 mb-1">8h 00m</p>
              <p class="text-sm text-gray-600">6/7 jours atteints</p>
            </div>
          </div>
  
          <!-- Main Content Grid -->
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <!-- Sleep Chart -->
            <div class="lg:col-span-2">
              <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div class="flex items-center justify-between mb-6">
                  <h2 class="text-2xl font-bold text-gray-800">Évolution du sommeil</h2>
                  <select class="bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    <option>7 derniers jours</option>
                    <option>30 derniers jours</option>
                    <option>3 derniers mois</option>
                  </select>
                </div>
                
                <!-- Chart Placeholder -->
                <div class="h-64 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl flex items-center justify-center">
                  <div class="text-center">
                    <div class="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg class="w-8 h-8 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                      </svg>
                    </div>
                    <p class="text-gray-600 font-medium">Graphique de sommeil</p>
                    <p class="text-gray-500 text-sm mt-1">Durée et qualité sur 7 jours</p>
                  </div>
                </div>
              </div>
            </div>
  
            <!-- Sleep History -->
            <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h3 class="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <span class="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                Historique récent
              </h3>
              <div class="space-y-4">
                <div 
                  v-for="entry in sleepHistory"
                  :key="entry.id"
                  class="flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl transition-colors duration-200 cursor-pointer group"
                >
                  <div class="flex items-center space-x-3">
                    <span class="text-2xl">{{ entry.emoji }}</span>
                    <div>
                      <p class="font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors duration-200">{{ entry.date }}</p>
                      <p class="text-gray-500 text-sm">{{ entry.bedtime }} - {{ entry.wakeup }}</p>
                    </div>
                  </div>
                  <div class="text-right">
                    <p class="font-bold text-indigo-600">{{ entry.duration }}</p>
                    <p class="text-gray-500 text-sm">{{ entry.quality }}</p>
                  </div>
                </div>
              </div>
              
              <button class="w-full mt-6 text-indigo-600 hover:text-indigo-700 font-medium text-sm transition-colors duration-200 p-2 hover:bg-indigo-50 rounded-lg">
                Voir tout l'historique →
              </button>
            </div>
          </div>
        </main>
      </div>
  
      <!-- Sleep Entry Modal -->
      <div 
        v-if="showSleepModal"
        class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
        @click="showSleepModal = false"
      >
        <div 
          class="bg-white rounded-2xl w-full max-w-md transform transition-all duration-300 scale-100"
          @click.stop
        >
          <!-- Modal Header -->
          <div class="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-6 rounded-t-2xl">
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-3">
                <span class="text-2xl">😴</span>
                <h3 class="text-xl font-bold">Ajouter une nuit</h3>
              </div>
              <button 
                @click="showSleepModal = false"
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
            <form @submit.prevent="saveSleep" class="space-y-6">
              <!-- Date -->
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2">Date</label>
                <input 
                  v-model="sleepForm.date"
                  type="date" 
                  class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  :max="today"
                  required
                >
              </div>
  
              <!-- Times -->
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-2">Coucher</label>
                  <input 
                    v-model="sleepForm.bedtime"
                    type="time" 
                    class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    required
                  >
                </div>
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-2">Réveil</label>
                  <input 
                    v-model="sleepForm.wakeup"
                    type="time" 
                    class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    required
                  >
                </div>
              </div>
  
              <!-- Duration Display -->
              <div v-if="calculatedDuration" class="bg-indigo-50 rounded-xl p-4 text-center border border-indigo-200">
                <p class="text-indigo-600 font-medium">Durée calculée</p>
                <p class="text-2xl font-bold text-indigo-800">{{ calculatedDuration }}</p>
              </div>
  
              <!-- Quality -->
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-3">Qualité du sommeil</label>
                <div class="grid grid-cols-2 gap-3">
                  <button
                    v-for="quality in sleepQualities"
                    :key="quality.value"
                    type="button"
                    @click="sleepForm.quality = quality.value"
                    :class="[
                      'p-3 rounded-xl border-2 transition-all duration-300 text-center',
                      sleepForm.quality === quality.value
                        ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
                        : 'border-gray-200 hover:border-indigo-300 text-gray-600'
                    ]"
                  >
                    <div class="text-lg mb-1">{{ quality.emoji }}</div>
                    <div class="font-medium text-xs">{{ quality.label }}</div>
                  </button>
                </div>
              </div>
  
              <!-- Submit -->
              <div class="flex space-x-3 pt-4">
                <button 
                  type="button"
                  @click="showSleepModal = false"
                  class="flex-1 bg-gray-100 text-gray-700 py-3 rounded-xl font-medium hover:bg-gray-200 transition-colors duration-200"
                >
                  Annuler
                </button>
                <button 
                  type="submit"
                  :disabled="!isFormValid"
                  class="flex-1 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 text-white py-3 rounded-xl font-semibold transition-all duration-300 disabled:cursor-not-allowed"
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
          <span class="font-medium">Sommeil enregistré ! 🎉</span>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import SideBar from '@/components/dashboard/SideBar.vue'
  
  export default {
    name: 'Sleep',
    components: {
      SideBar
    },
    data() {
      return {
        showSleepModal: false,
        showSuccessToast: false,
        sleepForm: {
          date: this.getTodayDate(),
          bedtime: '',
          wakeup: '',
          quality: ''
        },
        sleepQualities: [
          { value: 'excellent', label: 'Excellent', emoji: '😴' },
          { value: 'good', label: 'Bon', emoji: '😊' },
          { value: 'average', label: 'Moyen', emoji: '😐' },
          { value: 'poor', label: 'Mauvais', emoji: '😵' }
        ],
        sleepHistory: [
          {
            id: 1,
            date: 'Hier',
            bedtime: '23:30',
            wakeup: '07:15',
            duration: '7h 45m',
            quality: 'Excellent',
            emoji: '😴'
          },
          {
            id: 2,
            date: '23 juin',
            bedtime: '23:00',
            wakeup: '07:15',
            duration: '8h 15m',
            quality: 'Bon',
            emoji: '😊'
          },
          {
            id: 3,
            date: '22 juin',
            bedtime: '00:30',
            wakeup: '07:00',
            duration: '6h 30m',
            quality: 'Moyen',
            emoji: '😐'
          },
          {
            id: 4,
            date: '21 juin',
            bedtime: '23:15',
            wakeup: '06:35',
            duration: '7h 20m',
            quality: 'Bon',
            emoji: '😊'
          }
        ]
      };
    },
    computed: {
      today() {
        return new Date().toISOString().split('T')[0];
      },
      calculatedDuration() {
        if (!this.sleepForm.bedtime || !this.sleepForm.wakeup) return null;
        
        const bedtime = new Date(`2000-01-01T${this.sleepForm.bedtime}`);
        let wakeup = new Date(`2000-01-01T${this.sleepForm.wakeup}`);
        
        if (wakeup <= bedtime) {
          wakeup.setDate(wakeup.getDate() + 1);
        }
        
        const diff = wakeup - bedtime;
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        
        return `${hours}h ${minutes.toString().padStart(2, '0')}m`;
      },
      isFormValid() {
        return this.sleepForm.bedtime && 
               this.sleepForm.wakeup && 
               this.sleepForm.quality &&
               this.sleepForm.date;
      }
    },
    methods: {
      getTodayDate() {
        return new Date().toISOString().split('T')[0];
      },
      saveSleep() {
        if (!this.isFormValid) return;
        
        console.log('Données de sommeil:', this.sleepForm);
        console.log('Durée:', this.calculatedDuration);
        
        // Fermer modal et montrer succès
        this.showSleepModal = false;
        this.showSuccessToast = true;
        
        setTimeout(() => {
          this.showSuccessToast = false;
        }, 3000);
        
        // Reset form
        this.sleepForm = {
          date: this.getTodayDate(),
          bedtime: '',
          wakeup: '',
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
  </style>