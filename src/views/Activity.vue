<template>
    <div class="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50/30 flex">
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
                class="flex items-center space-x-2 text-gray-600 hover:text-orange-600 transition-colors duration-200 group"
              >
                <svg class="w-5 h-5 transform transition-transform duration-200 group-hover:-translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd"/>
                </svg>
                <span class="font-medium">Dashboard</span>
              </button>
              
              <div class="w-px h-6 bg-gray-300"></div>
              
              <div class="flex items-center space-x-3">
                <div class="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                  <svg class="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h1 class="text-2xl font-bold text-gray-900">Suivi d'activité</h1>
                  <p class="text-gray-600 text-sm">Enregistrez vos exercices et performances</p>
                </div>
              </div>
            </div>
            
            <!-- Add Activity Button -->
            <button 
              @click="showActivityModal = true"
              class="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30 active:scale-95 flex items-center space-x-2"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd"/>
              </svg>
              <span>Ajouter une activité</span>
            </button>
          </div>
        </header>
  
        <!-- Dashboard Content -->
        <main class="flex-1 p-8">
          <!-- Stats Cards Row -->
          <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <!-- Weekly Total -->
            <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div class="flex items-center justify-between mb-4">
                <div class="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <svg class="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <span class="text-2xl">⏱️</span>
              </div>
              <h3 class="text-lg font-semibold text-gray-800 mb-2">Cette semaine</h3>
              <p class="text-3xl font-bold text-orange-600 mb-1">4h 15m</p>
              <p class="text-sm text-gray-600">7 séances</p>
            </div>
  
            <!-- Calories Burned -->
            <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div class="flex items-center justify-between mb-4">
                <div class="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <svg class="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <span class="text-2xl">🔥</span>
              </div>
              <h3 class="text-lg font-semibold text-gray-800 mb-2">Calories</h3>
              <p class="text-3xl font-bold text-red-600 mb-1">1,850</p>
              <p class="text-sm text-gray-600">Cette semaine</p>
            </div>
  
            <!-- Favorite Activity -->
            <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div class="flex items-center justify-between mb-4">
                <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg class="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                </div>
                <span class="text-2xl">🏃‍♂️</span>
              </div>
              <h3 class="text-lg font-semibold text-gray-800 mb-2">Favori</h3>
              <p class="text-3xl font-bold text-blue-600 mb-1">Course</p>
              <p class="text-sm text-gray-600">3x cette semaine</p>
            </div>
  
            <!-- Goal Progress -->
            <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div class="flex items-center justify-between mb-4">
                <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <svg class="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <span class="text-2xl">🎯</span>
              </div>
              <h3 class="text-lg font-semibold text-gray-800 mb-2">Objectif</h3>
              <p class="text-3xl font-bold text-green-600 mb-1">85%</p>
              <p class="text-sm text-gray-600">5h / semaine</p>
            </div>
          </div>
  
          <!-- Main Content Grid -->
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <!-- Activity Chart -->
            <div class="lg:col-span-2">
              <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div class="flex items-center justify-between mb-6">
                  <h2 class="text-2xl font-bold text-gray-800">Évolution des activités</h2>
                  <select class="bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500">
                    <option>7 derniers jours</option>
                    <option>30 derniers jours</option>
                    <option>3 derniers mois</option>
                  </select>
                </div>
                
                <!-- Chart Placeholder -->
                <div class="h-64 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl flex items-center justify-center">
                  <div class="text-center">
                    <div class="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg class="w-8 h-8 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                      </svg>
                    </div>
                    <p class="text-gray-600 font-medium">Graphique d'activité</p>
                    <p class="text-gray-500 text-sm mt-1">Durée et intensité sur 7 jours</p>
                  </div>
                </div>
              </div>
            </div>
  
            <!-- Activity History -->
            <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h3 class="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <span class="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                Activités récentes
              </h3>
              <div class="space-y-4">
                <div 
                  v-for="entry in activityHistory"
                  :key="entry.id"
                  class="flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl transition-colors duration-200 cursor-pointer group"
                >
                  <div class="flex items-center space-x-3">
                    <span class="text-2xl">{{ entry.emoji }}</span>
                    <div>
                      <p class="font-semibold text-gray-800 group-hover:text-orange-600 transition-colors duration-200">{{ entry.activity }}</p>
                      <p class="text-gray-500 text-sm">{{ entry.date }} • {{ entry.time }}</p>
                    </div>
                  </div>
                  <div class="text-right">
                    <p class="font-bold text-orange-600">{{ entry.duration }}</p>
                    <p class="text-gray-500 text-sm">{{ entry.calories }} cal</p>
                  </div>
                </div>
              </div>
              
              <button class="w-full mt-6 text-orange-600 hover:text-orange-700 font-medium text-sm transition-colors duration-200 p-2 hover:bg-orange-50 rounded-lg">
                Voir tout l'historique →
              </button>
            </div>
          </div>
        </main>
      </div>
  
      <!-- Activity Entry Modal -->
      <div 
        v-if="showActivityModal"
        class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
        @click="showActivityModal = false"
      >
        <div 
          class="bg-white rounded-2xl w-full max-w-md transform transition-all duration-300 scale-100"
          @click.stop
        >
          <!-- Modal Header -->
          <div class="bg-gradient-to-r from-orange-500 to-red-500 text-white p-6 rounded-t-2xl">
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-3">
                <span class="text-2xl">🏃‍♂️</span>
                <h3 class="text-xl font-bold">Nouvelle activité</h3>
              </div>
              <button 
                @click="showActivityModal = false"
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
            <form @submit.prevent="saveActivity" class="space-y-6">
              <!-- Date and Time -->
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-2">Date</label>
                  <input 
                    v-model="activityForm.date"
                    type="date" 
                    class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    :max="today"
                    required
                  >
                </div>
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-2">Heure</label>
                  <input 
                    v-model="activityForm.time"
                    type="time" 
                    class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                  >
                </div>
              </div>
  
              <!-- Activity Type -->
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-3">Type d'activité</label>
                <div class="grid grid-cols-2 gap-3">
                  <button
                    v-for="activity in activityTypes"
                    :key="activity.type"
                    type="button"
                    @click="selectActivity(activity)"
                    :class="[
                      'p-4 rounded-xl border-2 transition-all duration-300 text-center hover:scale-105',
                      activityForm.type === activity.type
                        ? 'border-orange-500 bg-orange-50 text-orange-700'
                        : 'border-gray-200 hover:border-orange-300 text-gray-600'
                    ]"
                  >
                    <div class="text-2xl mb-2">{{ activity.emoji }}</div>
                    <div class="font-medium text-sm">{{ activity.label }}</div>
                  </button>
                </div>
              </div>
  
              <!-- Duration -->
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-3">Durée</label>
                <div class="grid grid-cols-2 gap-4">
                  <div>
                    <label class="block text-xs text-gray-500 mb-1">Heures</label>
                    <select 
                      v-model.number="activityForm.hours"
                      class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    >
                      <option v-for="h in 24" :key="h-1" :value="h-1">{{ h-1 }}</option>
                    </select>
                  </div>
                  <div>
                    <label class="block text-xs text-gray-500 mb-1">Minutes</label>
                    <select 
                      v-model.number="activityForm.minutes"
                      class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      required
                    >
                      <option v-for="m in 12" :key="(m-1)*5" :value="(m-1)*5">{{ (m-1)*5 }}</option>
                    </select>
                  </div>
                </div>
                <div v-if="totalDuration" class="mt-3 text-center p-3 bg-orange-50 rounded-xl border border-orange-200">
                  <p class="text-orange-600 font-medium">Durée totale: {{ totalDuration }}</p>
                </div>
              </div>
  
              <!-- Intensity -->
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-3">Intensité</label>
                <div class="grid grid-cols-3 gap-3">
                  <button
                    v-for="intensity in intensityLevels"
                    :key="intensity.value"
                    type="button"
                    @click="activityForm.intensity = intensity.value"
                    :class="[
                      'p-3 rounded-xl border-2 transition-all duration-300 text-center',
                      activityForm.intensity === intensity.value
                        ? 'border-orange-500 bg-orange-50 text-orange-700'
                        : 'border-gray-200 hover:border-orange-300 text-gray-600'
                    ]"
                  >
                    <div class="text-lg mb-1">{{ intensity.emoji }}</div>
                    <div class="font-medium text-xs">{{ intensity.label }}</div>
                  </button>
                </div>
              </div>
  
              <!-- Notes -->
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2">Notes (optionnel)</label>
                <textarea 
                  v-model="activityForm.notes"
                  placeholder="Comment s'est passée votre séance ?"
                  rows="3"
                  class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                ></textarea>
              </div>
  
              <!-- Submit -->
              <div class="flex space-x-3 pt-4">
                <button 
                  type="button"
                  @click="showActivityModal = false"
                  class="flex-1 bg-gray-100 text-gray-700 py-3 rounded-xl font-medium hover:bg-gray-200 transition-colors duration-200"
                >
                  Annuler
                </button>
                <button 
                  type="submit"
                  :disabled="!isFormValid"
                  class="flex-1 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 disabled:from-gray-400 disabled:to-gray-500 text-white py-3 rounded-xl font-semibold transition-all duration-300 disabled:cursor-not-allowed"
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
          <span class="font-medium">Activité enregistrée ! 🎉</span>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import SideBar from '@/components/dashboard/SideBar.vue';
  
  export default {
    name: 'Activity',
    components: {
      SideBar
    },
    data() {
      return {
        showActivityModal: false,
        showSuccessToast: false,
        activityForm: {
          date: this.getTodayDate(),
          time: this.getCurrentTime(),
          type: '',
          hours: 0,
          minutes: 30,
          intensity: '',
          notes: ''
        },
        activityTypes: [
          { type: 'running', label: 'Course', emoji: '🏃‍♂️' },
          { type: 'cycling', label: 'Vélo', emoji: '🚴‍♀️' },
          { type: 'swimming', label: 'Natation', emoji: '🏊‍♂️' },
          { type: 'gym', label: 'Musculation', emoji: '🏋️‍♀️' },
          { type: 'yoga', label: 'Yoga', emoji: '🧘‍♀️' },
          { type: 'walking', label: 'Marche', emoji: '🚶‍♂️' },
          { type: 'tennis', label: 'Tennis', emoji: '🎾' },
          { type: 'football', label: 'Football', emoji: '⚽' }
        ],
        intensityLevels: [
          { value: 'light', label: 'Légère', emoji: '😌' },
          { value: 'moderate', label: 'Modérée', emoji: '😊' },
          { value: 'intense', label: 'Intense', emoji: '🔥' }
        ],
        activityHistory: [
          {
            id: 1,
            activity: 'Course matinale',
            date: 'Aujourd\'hui',
            time: '07:30',
            duration: '45 min',
            calories: '380',
            emoji: '🏃‍♂️'
          },
          {
            id: 2,
            activity: 'Séance yoga',
            date: 'Hier',
            time: '18:00',
            duration: '60 min',
            calories: '210',
            emoji: '🧘‍♀️'
          },
          {
            id: 3,
            activity: 'Musculation',
            date: '23 juin',
            time: '19:15',
            duration: '75 min',
            calories: '420',
            emoji: '🏋️‍♀️'
          },
          {
            id: 4,
            activity: 'Vélo',
            date: '22 juin',
            time: '16:45',
            duration: '90 min',
            calories: '650',
            emoji: '🚴‍♀️'
          }
        ]
      };
    },
    computed: {
      today() {
        return new Date().toISOString().split('T')[0];
      },
      totalDuration() {
        if (this.activityForm.hours === 0 && this.activityForm.minutes === 0) return null;
        if (this.activityForm.hours === 0) return `${this.activityForm.minutes} min`;
        if (this.activityForm.minutes === 0) return `${this.activityForm.hours}h`;
        return `${this.activityForm.hours}h ${this.activityForm.minutes}m`;
      },
      isFormValid() {
        return this.activityForm.date && 
               this.activityForm.time && 
               this.activityForm.type &&
               (this.activityForm.hours > 0 || this.activityForm.minutes > 0) &&
               this.activityForm.intensity;
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
      selectActivity(activity) {
        this.activityForm.type = activity.type;
      },
      saveActivity() {
        if (!this.isFormValid) return;
        
        console.log('Données d\'activité:', {
          ...this.activityForm,
          duration: this.totalDuration
        });
        
        // Fermer modal et montrer succès
        this.showActivityModal = false;
        this.showSuccessToast = true;
        
        setTimeout(() => {
          this.showSuccessToast = false;
        }, 3000);
        
        // Reset form
        this.activityForm = {
          date: this.getTodayDate(),
          time: this.getCurrentTime(),
          type: '',
          hours: 0,
          minutes: 30,
          intensity: '',
          notes: ''
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