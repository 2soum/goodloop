<template>
    <div class="min-h-screen bg-gradient-to-br from-gray-50 to-emerald-50/30 flex">
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
                class="flex items-center space-x-2 text-gray-600 hover:text-emerald-600 transition-colors duration-200 group"
              >
                <svg class="w-5 h-5 transform transition-transform duration-200 group-hover:-translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd"/>
                </svg>
                <span class="font-medium">Dashboard</span>
              </button>
              
              <div class="w-px h-6 bg-gray-300"></div>
              
              <div class="flex items-center space-x-3">
                <div class="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                  <svg class="w-5 h-5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h1 class="text-2xl font-bold text-gray-900">Suivi de l'humeur</h1>
                  <p class="text-gray-600 text-sm">Enregistrez vos émotions quotidiennes</p>
                </div>
              </div>
            </div>
            
            <!-- Add Mood Button -->
            <button 
              @click="showMoodModal = true"
              class="bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/30 active:scale-95 flex items-center space-x-2"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd"/>
              </svg>
              <span>Noter mon humeur</span>
            </button>
          </div>
        </header>
  
        <!-- Dashboard Content -->
        <main class="flex-1 p-8">
          <!-- Stats Cards Row -->
          <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <!-- Average Mood -->
            <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div class="flex items-center justify-between mb-4">
                <div class="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                  <svg class="w-6 h-6 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <span class="text-2xl">😊</span>
              </div>
              <h3 class="text-lg font-semibold text-gray-800 mb-2">Moyenne</h3>
              <p class="text-3xl font-bold text-emerald-600 mb-1">7.8/10</p>
              <p class="text-sm text-gray-600">Cette semaine</p>
            </div>
  
            <!-- Mood Trend -->
            <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div class="flex items-center justify-between mb-4">
                <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg class="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <span class="text-2xl">📈</span>
              </div>
              <h3 class="text-lg font-semibold text-gray-800 mb-2">Tendance</h3>
              <p class="text-3xl font-bold text-blue-600 mb-1">+12%</p>
              <p class="text-sm text-gray-600">En amélioration</p>
            </div>
  
            <!-- Best Day -->
            <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div class="flex items-center justify-between mb-4">
                <div class="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                  <svg class="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                </div>
                <span class="text-2xl">🌟</span>
              </div>
              <h3 class="text-lg font-semibold text-gray-800 mb-2">Meilleur jour</h3>
              <p class="text-3xl font-bold text-yellow-600 mb-1">10/10</p>
              <p class="text-sm text-gray-600">Hier</p>
            </div>
  
            <!-- Streak -->
            <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div class="flex items-center justify-between mb-4">
                <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <svg class="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <span class="text-2xl">🔥</span>
              </div>
              <h3 class="text-lg font-semibold text-gray-800 mb-2">Série</h3>
              <p class="text-3xl font-bold text-purple-600 mb-1">12 jours</p>
              <p class="text-sm text-gray-600">Suivi quotidien</p>
            </div>
          </div>
  
          <!-- Main Content Grid -->
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <!-- Mood Chart -->
            <div class="lg:col-span-2">
              <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div class="flex items-center justify-between mb-6">
                  <h2 class="text-2xl font-bold text-gray-800">Évolution de l'humeur</h2>
                  <select class="bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500">
                    <option>7 derniers jours</option>
                    <option>30 derniers jours</option>
                    <option>3 derniers mois</option>
                  </select>
                </div>
                
                <!-- Chart Placeholder -->
                <div class="h-64 bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl flex items-center justify-center">
                  <div class="text-center">
                    <div class="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg class="w-8 h-8 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                      </svg>
                    </div>
                    <p class="text-gray-600 font-medium">Graphique d'humeur</p>
                    <p class="text-gray-500 text-sm mt-1">Score quotidien sur 7 jours</p>
                  </div>
                </div>
              </div>
            </div>
  
            <!-- Mood History -->
            <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h3 class="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <span class="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                Historique récent
              </h3>
              <div class="space-y-4">
                <div 
                  v-for="entry in moodHistory"
                  :key="entry.id"
                  class="flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl transition-colors duration-200 cursor-pointer group"
                >
                  <div class="flex items-center space-x-3">
                    <span class="text-2xl">{{ entry.emoji }}</span>
                    <div>
                      <p class="font-semibold text-gray-800 group-hover:text-emerald-600 transition-colors duration-200">{{ entry.date }}</p>
                      <p class="text-gray-500 text-sm">{{ entry.time }}</p>
                    </div>
                  </div>
                  <div class="text-right">
                    <p class="font-bold text-emerald-600">{{ entry.score }}/10</p>
                    <p class="text-gray-500 text-sm">{{ entry.feeling }}</p>
                  </div>
                </div>
              </div>
              
              <button class="w-full mt-6 text-emerald-600 hover:text-emerald-700 font-medium text-sm transition-colors duration-200 p-2 hover:bg-emerald-50 rounded-lg">
                Voir tout l'historique →
              </button>
            </div>
          </div>
        </main>
      </div>
  
      <!-- Mood Entry Modal -->
      <div 
        v-if="showMoodModal"
        class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
        @click="showMoodModal = false"
      >
        <div 
          class="bg-white rounded-2xl w-full max-w-md transform transition-all duration-300 scale-100"
          @click.stop
        >
          <!-- Modal Header -->
          <div class="bg-gradient-to-r from-emerald-500 to-green-500 text-white p-6 rounded-t-2xl">
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-3">
                <span class="text-2xl">😊</span>
                <h3 class="text-xl font-bold">Comment vous sentez-vous ?</h3>
              </div>
              <button 
                @click="showMoodModal = false"
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
            <form @submit.prevent="saveMood" class="space-y-6">
              <!-- Date and Time -->
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-2">Date</label>
                  <input 
                    v-model="moodForm.date"
                    type="date" 
                    class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    :max="today"
                    required
                  >
                </div>
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-2">Heure</label>
                  <input 
                    v-model="moodForm.time"
                    type="time" 
                    class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    required
                  >
                </div>
              </div>
  
              <!-- Mood Scale -->
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-4">Votre humeur (1-10)</label>
                <div class="space-y-4">
                  <!-- Mood Slider -->
                  <div class="relative">
                    <input 
                      v-model.number="moodForm.score"
                      type="range" 
                      min="1" 
                      max="10" 
                      step="1"
                      class="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer mood-slider"
                      @input="updateMoodEmoji"
                    >
                    <div class="flex justify-between text-xs text-gray-500 mt-2">
                      <span>1</span>
                      <span>5</span>
                      <span>10</span>
                    </div>
                  </div>
                  
                  <!-- Current Mood Display -->
                  <div class="text-center p-4 bg-emerald-50 rounded-xl border border-emerald-200">
                    <div class="text-4xl mb-2">{{ currentMoodEmoji }}</div>
                    <p class="text-emerald-600 font-medium">{{ moodForm.score }}/10</p>
                    <p class="text-emerald-700 text-sm">{{ currentMoodLabel }}</p>
                  </div>
                </div>
              </div>
  
              <!-- Quick Mood Buttons -->
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-3">Sélection rapide</label>
                <div class="grid grid-cols-5 gap-2">
                  <button
                    v-for="mood in quickMoods"
                    :key="mood.score"
                    type="button"
                    @click="selectQuickMood(mood)"
                    :class="[
                      'p-3 rounded-xl border-2 transition-all duration-300 text-center hover:scale-105',
                      moodForm.score === mood.score
                        ? 'border-emerald-500 bg-emerald-50'
                        : 'border-gray-200 hover:border-emerald-300'
                    ]"
                  >
                    <div class="text-2xl mb-1">{{ mood.emoji }}</div>
                    <div class="text-xs font-medium text-gray-600">{{ mood.score }}</div>
                  </button>
                </div>
              </div>
  
              <!-- Notes -->
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2">Notes (optionnel)</label>
                <textarea 
                  v-model="moodForm.notes"
                  placeholder="Qu'est-ce qui influence votre humeur aujourd'hui ?"
                  rows="3"
                  class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none"
                ></textarea>
              </div>
  
              <!-- Submit -->
              <div class="flex space-x-3 pt-4">
                <button 
                  type="button"
                  @click="showMoodModal = false"
                  class="flex-1 bg-gray-100 text-gray-700 py-3 rounded-xl font-medium hover:bg-gray-200 transition-colors duration-200"
                >
                  Annuler
                </button>
                <button 
                  type="submit"
                  :disabled="!isFormValid"
                  class="flex-1 bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 disabled:from-gray-400 disabled:to-gray-500 text-white py-3 rounded-xl font-semibold transition-all duration-300 disabled:cursor-not-allowed"
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
          <span class="font-medium">Humeur enregistrée ! 🎉</span>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import SideBar from '@/components/dashboard/SideBar.vue';
  
  export default {
    name: 'Mood',
    components: {
      SideBar
    },
    data() {
      return {
        showMoodModal: false,
        showSuccessToast: false,
        moodForm: {
          date: this.getTodayDate(),
          time: this.getCurrentTime(),
          score: 5,
          notes: ''
        },
        quickMoods: [
          { score: 2, emoji: '😢', label: 'Triste' },
          { score: 4, emoji: '😐', label: 'Moyen' },
          { score: 6, emoji: '😊', label: 'Bien' },
          { score: 8, emoji: '😄', label: 'Joyeux' },
          { score: 10, emoji: '🤩', label: 'Excellent' }
        ],
        moodLabels: {
          1: 'Très mal',
          2: 'Mal',
          3: 'Pas bien',
          4: 'Moyen',
          5: 'Neutre',
          6: 'Plutôt bien',
          7: 'Bien',
          8: 'Très bien',
          9: 'Excellent',
          10: 'Fantastique'
        },
        moodEmojis: {
          1: '😭', 2: '😢', 3: '😔', 4: '😐', 5: '😶',
          6: '🙂', 7: '😊', 8: '😄', 9: '😁', 10: '🤩'
        },
        moodHistory: [
          {
            id: 1,
            date: 'Aujourd\'hui',
            time: '14:30',
            score: 8,
            feeling: 'Joyeux',
            emoji: '😄'
          },
          {
            id: 2,
            date: 'Hier',
            time: '18:45',
            score: 9,
            feeling: 'Excellent',
            emoji: '😁'
          },
          {
            id: 3,
            date: '23 juin',
            time: '12:15',
            score: 6,
            feeling: 'Plutôt bien',
            emoji: '🙂'
          },
          {
            id: 4,
            date: '22 juin',
            time: '16:20',
            score: 7,
            feeling: 'Bien',
            emoji: '😊'
          }
        ]
      };
    },
    computed: {
      today() {
        return new Date().toISOString().split('T')[0];
      },
      currentMoodEmoji() {
        return this.moodEmojis[this.moodForm.score] || '😶';
      },
      currentMoodLabel() {
        return this.moodLabels[this.moodForm.score] || 'Neutre';
      },
      isFormValid() {
        return this.moodForm.date && 
               this.moodForm.time && 
               this.moodForm.score >= 1 && 
               this.moodForm.score <= 10;
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
      updateMoodEmoji() {
        // Method called when slider changes (already reactive)
      },
      selectQuickMood(mood) {
        this.moodForm.score = mood.score;
      },
      saveMood() {
        if (!this.isFormValid) return;
        
        console.log('Données d\'humeur:', {
          ...this.moodForm,
          emoji: this.currentMoodEmoji,
          label: this.currentMoodLabel
        });
        
        // Fermer modal et montrer succès
        this.showMoodModal = false;
        this.showSuccessToast = true;
        
        setTimeout(() => {
          this.showSuccessToast = false;
        }, 3000);
        
        // Reset form
        this.moodForm = {
          date: this.getTodayDate(),
          time: this.getCurrentTime(),
          score: 5,
          notes: ''
        };
      }
    }
  };
  </script>
  
  <style scoped>
  /* Custom mood slider */
  .mood-slider::-webkit-slider-thumb {
    appearance: none;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: #10b981;
    cursor: pointer;
    border: 2px solid white;
    box-shadow: 0 2px 6px rgba(16, 185, 129, 0.4);
  }
  
  .mood-slider::-moz-range-thumb {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: #10b981;
    cursor: pointer;
    border: 2px solid white;
    box-shadow: 0 2px 6px rgba(16, 185, 129, 0.4);
  }
  
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