<template>
    <div class="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50/30 flex">
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
                class="flex items-center space-x-2 text-gray-600 hover:text-purple-600 transition-colors duration-200 group"
              >
                <svg class="w-5 h-5 transform transition-transform duration-200 group-hover:-translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd"/>
                </svg>
                <span class="font-medium">Dashboard</span>
              </button>
              
              <div class="w-px h-6 bg-gray-300"></div>
              
              <div class="flex items-center space-x-3">
                <div class="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <svg class="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                </div>
                <div>
                  <h1 class="text-2xl font-bold text-gray-900">Mes Objectifs</h1>
                  <p class="text-gray-600 text-sm">Définissez et suivez vos objectifs de vie</p>
                </div>
              </div>
            </div>
            
            <!-- Add Goal Button -->
            <button 
              @click="showGoalModal = true"
              class="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30 active:scale-95 flex items-center space-x-2"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd"/>
              </svg>
              <span>Nouvel objectif</span>
            </button>
          </div>
        </header>
  
        <!-- Dashboard Content -->
        <main class="flex-1 p-8">
          <!-- Progress Overview -->
          <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <!-- Total Goals -->
            <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div class="flex items-center justify-between mb-4">
                <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg class="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <span class="text-2xl">🎯</span>
              </div>
              <h3 class="text-lg font-semibold text-gray-800 mb-2">Objectifs totaux</h3>
              <p class="text-3xl font-bold text-blue-600 mb-1">{{ totalGoals }}</p>
              <p class="text-sm text-gray-600">En cours: {{ activeGoals }}</p>
            </div>
  
            <!-- Completed -->
            <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div class="flex items-center justify-between mb-4">
                <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <svg class="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <span class="text-2xl">✅</span>
              </div>
              <h3 class="text-lg font-semibold text-gray-800 mb-2">Réalisés</h3>
              <p class="text-3xl font-bold text-green-600 mb-1">{{ completedGoals }}</p>
              <p class="text-sm text-gray-600">{{ completionRate }}% de réussite</p>
            </div>
  
            <!-- This Month -->
            <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div class="flex items-center justify-between mb-4">
                <div class="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <svg class="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <span class="text-2xl">📅</span>
              </div>
              <h3 class="text-lg font-semibold text-gray-800 mb-2">Ce mois-ci</h3>
              <p class="text-3xl font-bold text-orange-600 mb-1">{{ monthlyGoals }}</p>
              <p class="text-sm text-gray-600">Échéances prochaines</p>
            </div>
  
            <!-- Motivation -->
            <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div class="flex items-center justify-between mb-4">
                <div class="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                  <svg class="w-6 h-6 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <span class="text-2xl">⚡</span>
              </div>
              <h3 class="text-lg font-semibold text-gray-800 mb-2">Motivation</h3>
              <p class="text-3xl font-bold text-pink-600 mb-1">{{ motivationScore }}/10</p>
              <p class="text-sm text-gray-600">Niveau d'énergie</p>
            </div>
          </div>
  
          <!-- Main Content Grid -->
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <!-- Goals List -->
            <div class="lg:col-span-2">
              <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div class="flex items-center justify-between mb-6">
                  <h2 class="text-2xl font-bold text-gray-800">Mes objectifs</h2>
                  <div class="flex space-x-2">
                    <button 
                      v-for="category in goalCategories"
                      :key="category.id"
                      @click="selectedCategory = category.id"
                      :class="[
                        'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                        selectedCategory === category.id
                          ? 'bg-purple-100 text-purple-700'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      ]"
                    >
                      {{ category.emoji }} {{ category.name }}
                    </button>
                  </div>
                </div>
                
                <!-- Goals List -->
                <div class="space-y-4">
                  <div 
                    v-for="goal in filteredGoals"
                    :key="goal.id"
                    class="p-6 border border-gray-200 rounded-xl hover:shadow-md transition-all duration-300 group cursor-pointer"
                    :class="goal.completed ? 'bg-green-50 border-green-200' : 'bg-white hover:border-purple-300'"
                    @click="openGoalDetails(goal)"
                  >
                    <div class="flex items-start justify-between">
                      <div class="flex-1">
                        <div class="flex items-center space-x-3 mb-2">
                          <span class="text-2xl">{{ goal.emoji }}</span>
                          <h3 class="text-lg font-semibold text-gray-800 group-hover:text-purple-600 transition-colors duration-200">
                            {{ goal.title }}
                          </h3>
                          <span 
                            :class="[
                              'px-2 py-1 rounded-full text-xs font-medium',
                              getPriorityClass(goal.priority)
                            ]"
                          >
                            {{ getPriorityLabel(goal.priority) }}
                          </span>
                        </div>
                        <p class="text-gray-600 mb-4">{{ goal.description }}</p>
                        
                        <!-- Progress Bar -->
                        <div class="mb-3">
                          <div class="flex justify-between text-sm mb-1">
                            <span class="text-gray-600">Progression</span>
                            <span class="font-semibold text-purple-600">{{ goal.progress }}%</span>
                          </div>
                          <div class="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              class="bg-gradient-to-r from-purple-500 to-indigo-500 h-2 rounded-full transition-all duration-500"
                              :style="{ width: goal.progress + '%' }"
                            ></div>
                          </div>
                        </div>
                        
                        <!-- Goal Meta -->
                        <div class="flex items-center justify-between text-sm text-gray-500">
                          <div class="flex items-center space-x-4">
                            <span>📅 {{ formatDate(goal.deadline) }}</span>
                            <span>🏷️ {{ getCategoryName(goal.category) }}</span>
                          </div>
                          <div class="flex items-center space-x-2">
                            <button 
                              @click.stop="toggleGoalComplete(goal)"
                              :class="[
                                'p-2 rounded-lg transition-all duration-200',
                                goal.completed 
                                  ? 'bg-green-100 text-green-600 hover:bg-green-200' 
                                  : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
                              ]"
                            >
                              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                              </svg>
                            </button>
                            <button 
                              @click.stop="editGoal(goal)"
                              class="p-2 rounded-lg bg-gray-100 text-gray-400 hover:bg-purple-100 hover:text-purple-600 transition-all duration-200"
                            >
                              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"/>
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  
            <!-- Sidebar Content -->
            <div class="space-y-6">
              <!-- Motivation Quote -->
              <div class="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl p-6 text-white">
                <div class="flex items-center mb-4">
                  <span class="text-2xl mr-3">💪</span>
                  <h3 class="text-lg font-bold">Citation du jour</h3>
                </div>
                <blockquote class="text-purple-100 italic mb-4">
                  "{{ dailyQuote.text }}"
                </blockquote>
                <p class="text-purple-200 text-sm">— {{ dailyQuote.author }}</p>
              </div>
  
              <!-- Quick Stats -->
              <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h3 class="text-xl font-bold text-gray-800 mb-6 flex items-center">
                  <span class="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Statistiques rapides
                </h3>
                <div class="space-y-4">
                  <div class="flex items-center justify-between">
                    <span class="text-gray-600">Objectifs cette semaine</span>
                    <span class="font-bold text-purple-600">{{ weeklyGoals }}</span>
                  </div>
                  <div class="flex items-center justify-between">
                    <span class="text-gray-600">Moyenne de progression</span>
                    <span class="font-bold text-indigo-600">{{ averageProgress }}%</span>
                  </div>
                  <div class="flex items-center justify-between">
                    <span class="text-gray-600">Objectifs en retard</span>
                    <span class="font-bold text-red-600">{{ overdueGoals }}</span>
                  </div>
                  <div class="flex items-center justify-between">
                    <span class="text-gray-600">Série de réussite</span>
                    <span class="font-bold text-green-600">{{ streak }} jours</span>
                  </div>
                </div>
              </div>
  
              <!-- Recent Activity -->
              <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h3 class="text-xl font-bold text-gray-800 mb-6 flex items-center">
                  <span class="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                  Activité récente
                </h3>
                <div class="space-y-4">
                  <div 
                    v-for="activity in recentActivities"
                    :key="activity.id"
                    class="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                  >
                    <span class="text-lg">{{ activity.emoji }}</span>
                    <div class="flex-1">
                      <p class="text-sm font-medium text-gray-800">{{ activity.title }}</p>
                      <p class="text-xs text-gray-500">{{ activity.time }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
  
      <!-- Goal Creation/Edit Modal -->
      <div 
        v-if="showGoalModal"
        class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
        @click="showGoalModal = false"
      >
        <div 
          class="bg-white rounded-2xl w-full max-w-2xl transform transition-all duration-300 scale-100 max-h-[90vh] overflow-y-auto"
          @click.stop
        >
          <!-- Modal Header -->
          <div class="bg-gradient-to-r from-purple-500 to-indigo-500 text-white p-6 rounded-t-2xl">
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-3">
                <span class="text-2xl">🎯</span>
                <h3 class="text-xl font-bold">{{ editingGoal ? 'Modifier l\'objectif' : 'Nouvel objectif' }}</h3>
              </div>
              <button 
                @click="closeGoalModal"
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
            <form @submit.prevent="saveGoal" class="space-y-6">
              <!-- Goal Title & Emoji -->
              <div class="grid grid-cols-4 gap-4">
                <div class="col-span-1">
                  <label class="block text-sm font-semibold text-gray-700 mb-2">Emoji</label>
                  <input 
                    v-model="goalForm.emoji"
                    type="text" 
                    class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-center text-2xl"
                    placeholder="🎯"
                    maxlength="2"
                  >
                </div>
                <div class="col-span-3">
                  <label class="block text-sm font-semibold text-gray-700 mb-2">Titre de l'objectif</label>
                  <input 
                    v-model="goalForm.title"
                    type="text" 
                    class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Ex: Perdre 5kg, Apprendre l'espagnol..."
                    required
                  >
                </div>
              </div>
  
              <!-- Description -->
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2">Description détaillée</label>
                <textarea 
                  v-model="goalForm.description"
                  placeholder="Décrivez votre objectif en détail..."
                  rows="3"
                  class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                  required
                ></textarea>
              </div>
  
              <!-- Category & Priority -->
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-3">Catégorie</label>
                  <div class="grid grid-cols-2 gap-2">
                    <button
                      v-for="category in goalCategories.slice(1)"
                      :key="category.id"
                      type="button"
                      @click="goalForm.category = category.id"
                      :class="[
                        'p-3 rounded-xl border-2 transition-all duration-300 text-center text-sm',
                        goalForm.category === category.id
                          ? 'border-purple-500 bg-purple-50 text-purple-700'
                          : 'border-gray-200 hover:border-purple-300 text-gray-600'
                      ]"
                    >
                      <div class="text-lg mb-1">{{ category.emoji }}</div>
                      <div class="font-medium">{{ category.name }}</div>
                    </button>
                  </div>
                </div>
                
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-3">Priorité</label>
                  <div class="space-y-2">
                    <button
                      v-for="priority in priorities"
                      :key="priority.value"
                      type="button"
                      @click="goalForm.priority = priority.value"
                      :class="[
                        'w-full p-3 rounded-xl border-2 transition-all duration-300 text-left flex items-center space-x-3',
                        goalForm.priority === priority.value
                          ? 'border-purple-500 bg-purple-50 text-purple-700'
                          : 'border-gray-200 hover:border-purple-300 text-gray-600'
                      ]"
                    >
                      <span class="text-lg">{{ priority.emoji }}</span>
                      <span class="font-medium">{{ priority.label }}</span>
                    </button>
                  </div>
                </div>
              </div>
  
              <!-- Deadline & Duration -->
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-2">Échéance</label>
                  <input 
                    v-model="goalForm.deadline"
                    type="date" 
                    class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    :min="today"
                    required
                  >
                </div>
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-2">Durée estimée</label>
                  <select 
                    v-model="goalForm.duration"
                    class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="1">1 semaine</option>
                    <option value="2">2 semaines</option>
                    <option value="4">1 mois</option>
                    <option value="12">3 mois</option>
                    <option value="24">6 mois</option>
                    <option value="52">1 an</option>
                  </select>
                </div>
              </div>
  
              <!-- Steps/Milestones -->
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-3">Étapes clés (optionnel)</label>
                <div class="space-y-2">
                  <div 
                    v-for="(step, index) in goalForm.steps"
                    :key="index"
                    class="flex items-center space-x-2"
                  >
                    <input 
                      v-model="step.title"
                      type="text" 
                      class="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      :placeholder="`Étape ${index + 1}`"
                    >
                    <button 
                      type="button"
                      @click="removeStep(index)"
                      class="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors duration-200"
                    >
                      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>
                      </svg>
                    </button>
                  </div>
                  <button 
                    type="button"
                    @click="addStep"
                    class="w-full p-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-purple-400 hover:text-purple-600 transition-colors duration-200"
                  >
                    + Ajouter une étape
                  </button>
                </div>
              </div>
  
              <!-- Motivation -->
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2">Pourquoi cet objectif ? (motivation)</label>
                <textarea 
                  v-model="goalForm.motivation"
                  placeholder="Qu'est-ce qui vous motive à atteindre cet objectif ?"
                  rows="2"
                  class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                ></textarea>
              </div>
  
              <!-- Submit -->
              <div class="flex space-x-3 pt-4">
                <button 
                  type="button"
                  @click="closeGoalModal"
                  class="flex-1 bg-gray-100 text-gray-700 py-3 rounded-xl font-medium hover:bg-gray-200 transition-colors duration-200"
                >
                  Annuler
                </button>
                <button 
                  type="submit"
                  :disabled="!isGoalFormValid"
                  class="flex-1 bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 disabled:from-gray-400 disabled:to-gray-500 text-white py-3 rounded-xl font-semibold transition-all duration-300 disabled:cursor-not-allowed"
                >
                  {{ editingGoal ? 'Modifier' : 'Créer l\'objectif' }}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
  
      <!-- Success Toast -->
      <div 
        v-if="showSuccessToast"
        class="fixed bottom-8 right-8 bg-purple-500 text-white px-6 py-4 rounded-xl shadow-lg transform transition-all duration-500"
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
    name: 'Goals',
    components: {
      SideBar
    },
    data() {
      return {
        showGoalModal: false,
        showSuccessToast: false,
        toastMessage: '',
        editingGoal: null,
        selectedCategory: 'all',
        goalForm: {
          title: '',
          description: '',
          emoji: '🎯',
          category: 'health',
          priority: 'medium',
          deadline: '',
          duration: '4',
          steps: [],
          motivation: '',
          progress: 0
        },
        goalCategories: [
          { id: 'all', name: 'Tous', emoji: '📋' },
          { id: 'health', name: 'Santé', emoji: '💪' },
          { id: 'career', name: 'Carrière', emoji: '🚀' },
          { id: 'education', name: 'Éducation', emoji: '📚' },
          { id: 'relationships', name: 'Relations', emoji: '❤️' },
          { id: 'finance', name: 'Finance', emoji: '💰' },
          { id: 'personal', name: 'Personnel', emoji: '🌟' }
        ],
        priorities: [
          { value: 'high', label: 'Élevée', emoji: '🔥' },
          { value: 'medium', label: 'Moyenne', emoji: '⚡' },
          { value: 'low', label: 'Faible', emoji: '🌱' }
        ],
        goals: [
          {
            id: 1,
            title: 'Perdre 10kg en 6 mois',
            description: 'Adopter une alimentation équilibrée et faire du sport 3x par semaine',
            emoji: '💪',
            category: 'health',
            priority: 'high',
            deadline: '2025-12-31',
            progress: 65,
            completed: false,
            createdAt: '2025-01-15',
            motivation: 'Me sentir mieux dans mon corps et améliorer ma santé générale'
          },
          {
            id: 2,
            title: 'Apprendre l\'espagnol',
            description: 'Atteindre un niveau conversationnel en espagnol',
            emoji: '🇪🇸',
            category: 'education',
            priority: 'medium',
            deadline: '2025-08-30',
            progress: 40,
            completed: false,
            createdAt: '2025-01-10',
            motivation: 'Pouvoir communiquer lors de mes voyages en Amérique latine'
          },
          {
            id: 3,
            title: 'Économiser 10 000€',
            description: 'Mettre de côté 1500€ par mois pour mes projets futurs',
            emoji: '💰',
            category: 'finance',
            priority: 'high',
            deadline: '2025-07-01',
            progress: 80,
            completed: false,
            createdAt: '2025-01-01',
            motivation: 'Avoir un fond d\'urgence et financer mes projets'
          },
          {
            id: 4,
            title: 'Lire 24 livres cette année',
            description: 'Lire 2 livres par mois pour enrichir mes connaissances',
            emoji: '📚',
            category: 'education',
            priority: 'medium',
            deadline: '2025-12-31',
            progress: 25,
            completed: false,
            createdAt: '2025-01-01',
            motivation: 'Développer ma culture générale et mes compétences'
          },
          {
            id: 5,
            title: 'Méditer 30 jours consécutifs',
            description: 'Pratiquer la méditation quotidienne pendant un mois complet',
            emoji: '🧘',
            category: 'personal',
            priority: 'medium',
            deadline: '2025-02-28',
            progress: 100,
            completed: true,
            createdAt: '2025-01-20',
            motivation: 'Réduire mon stress et améliorer ma concentration'
          }
        ],
        dailyQuote: {
          text: "Le succès, c'est tomber sept fois et se relever huit fois.",
          author: "Proverbe japonais"
        },
        recentActivities: [
          {
            id: 1,
            title: 'Objectif "Méditer 30 jours" terminé',
            emoji: '✅',
            time: 'Il y a 2h'
          },
          {
            id: 2,
            title: 'Progression sur "Perdre 10kg"',
            emoji: '📈',
            time: 'Hier'
          },
          {
            id: 3,
            title: 'Nouveau livre lu (livre 6/24)',
            emoji: '📖',
            time: 'Il y a 3 jours'
          },
          {
            id: 4,
            title: 'Économies du mois atteintes',
            emoji: '💰',
            time: 'Il y a 5 jours'
          }
        ]
      };
    },
    computed: {
      today() {
        return new Date().toISOString().split('T')[0];
      },
      filteredGoals() {
        if (this.selectedCategory === 'all') {
          return this.goals;
        }
        return this.goals.filter(goal => goal.category === this.selectedCategory);
      },
      totalGoals() {
        return this.goals.length;
      },
      activeGoals() {
        return this.goals.filter(goal => !goal.completed).length;
      },
      completedGoals() {
        return this.goals.filter(goal => goal.completed).length;
      },
      completionRate() {
        return this.totalGoals > 0 ? Math.round((this.completedGoals / this.totalGoals) * 100) : 0;
      },
      monthlyGoals() {
        const now = new Date();
        const currentMonth = now.getMonth();
        const currentYear = now.getFullYear();
        return this.goals.filter(goal => {
          const deadline = new Date(goal.deadline);
          return deadline.getMonth() === currentMonth && deadline.getFullYear() === currentYear;
        }).length;
      },
      weeklyGoals() {
        const now = new Date();
        const weekFromNow = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
        return this.goals.filter(goal => {
          const deadline = new Date(goal.deadline);
          return deadline >= now && deadline <= weekFromNow;
        }).length;
      },
      averageProgress() {
        if (this.goals.length === 0) return 0;
        const totalProgress = this.goals.reduce((sum, goal) => sum + goal.progress, 0);
        return Math.round(totalProgress / this.goals.length);
      },
      overdueGoals() {
        const now = new Date();
        return this.goals.filter(goal => {
          const deadline = new Date(goal.deadline);
          return deadline < now && !goal.completed;
        }).length;
      },
      motivationScore() {
        // Calcul basé sur les objectifs récents et la progression
        const recentProgress = this.goals
          .filter(goal => !goal.completed)
          .reduce((sum, goal) => sum + goal.progress, 0) / this.activeGoals || 0;
        return Math.min(10, Math.round(recentProgress / 10 + 3));
      },
      streak() {
        // Simulation d'une série de jours avec progression
        return 12;
      },
      isGoalFormValid() {
        return this.goalForm.title.trim() && 
               this.goalForm.description.trim() && 
               this.goalForm.category &&
               this.goalForm.priority &&
               this.goalForm.deadline;
      }
    },
    methods: {
      openGoalDetails(goal) {
        // Pour l'instant, on édite directement
        this.editGoal(goal);
      },
      editGoal(goal) {
        this.editingGoal = goal;
        this.goalForm = {
          ...goal,
          steps: goal.steps || []
        };
        this.showGoalModal = true;
      },
      toggleGoalComplete(goal) {
        goal.completed = !goal.completed;
        goal.progress = goal.completed ? 100 : goal.progress;
        
        this.toastMessage = goal.completed 
          ? `Objectif "${goal.title}" terminé ! 🎉` 
          : `Objectif "${goal.title}" réactivé`;
        this.showToast();
      },
      saveGoal() {
        if (!this.isGoalFormValid) return;
        
        if (this.editingGoal) {
          // Mise à jour
          Object.assign(this.editingGoal, this.goalForm);
          this.toastMessage = 'Objectif mis à jour avec succès !';
        } else {
          // Création
          const newGoal = {
            ...this.goalForm,
            id: Date.now(),
            progress: 0,
            completed: false,
            createdAt: new Date().toISOString().split('T')[0]
          };
          this.goals.unshift(newGoal);
          this.toastMessage = 'Nouvel objectif créé avec succès !';
        }
        
        this.closeGoalModal();
        this.showToast();
      },
      closeGoalModal() {
        this.showGoalModal = false;
        this.editingGoal = null;
        this.resetGoalForm();
      },
      resetGoalForm() {
        this.goalForm = {
          title: '',
          description: '',
          emoji: '🎯',
          category: 'health',
          priority: 'medium',
          deadline: '',
          duration: '4',
          steps: [],
          motivation: '',
          progress: 0
        };
      },
      addStep() {
        this.goalForm.steps.push({ title: '', completed: false });
      },
      removeStep(index) {
        this.goalForm.steps.splice(index, 1);
      },
      showToast() {
        this.showSuccessToast = true;
        setTimeout(() => {
          this.showSuccessToast = false;
        }, 3000);
      },
      formatDate(dateString) {
        const date = new Date(dateString);
        const now = new Date();
        const diffTime = date.getTime() - now.getTime();
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        
        if (diffDays < 0) {
          return `En retard de ${Math.abs(diffDays)} jour(s)`;
        } else if (diffDays === 0) {
          return 'Aujourd\'hui';
        } else if (diffDays === 1) {
          return 'Demain';
        } else if (diffDays <= 7) {
          return `Dans ${diffDays} jours`;
        } else {
          return date.toLocaleDateString('fr-FR', { 
            day: 'numeric', 
            month: 'short', 
            year: 'numeric' 
          });
        }
      },
      getCategoryName(categoryId) {
        const category = this.goalCategories.find(cat => cat.id === categoryId);
        return category ? category.name : 'Non défini';
      },
      getPriorityClass(priority) {
        switch (priority) {
          case 'high':
            return 'bg-red-100 text-red-800';
          case 'medium':
            return 'bg-yellow-100 text-yellow-800';
          case 'low':
            return 'bg-green-100 text-green-800';
          default:
            return 'bg-gray-100 text-gray-800';
        }
      },
      getPriorityLabel(priority) {
        const priorityObj = this.priorities.find(p => p.value === priority);
        return priorityObj ? priorityObj.label : 'Non défini';
      }
    },
    mounted() {
      // Initialiser la date par défaut (dans 1 mois)
      const nextMonth = new Date();
      nextMonth.setMonth(nextMonth.getMonth() + 1);
      this.goalForm.deadline = nextMonth.toISOString().split('T')[0];
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
  
  /* Progress bar animation */
  .bg-gradient-to-r {
    transition: width 0.5s ease-in-out;
  }
  
  /* Custom scrollbar for modal */
  .max-h-\[90vh\]::-webkit-scrollbar {
    width: 6px;
  }
  
  .max-h-\[90vh\]::-webkit-scrollbar-track {
    background: #f1f5f9;
    border-radius: 3px;
  }
  
  .max-h-\[90vh\]::-webkit-scrollbar-thumb {
    background: #a855f7;
    border-radius: 3px;
  }
  
  .max-h-\[90vh\]::-webkit-scrollbar-thumb:hover {
    background: #9333ea;
  }
  
  /* Goal cards animation */
  .group {
    transition: all 0.3s ease;
  }
  
  .group:hover {
    transform: translateY(-2px);
  }

  
  
  /* Priority indicators */
  .bg-red-100 { background-color: #fee2e2; }
  .text-red-800 { color: #991b1b; }
  .bg-yellow-100 { background-color: #fef3c7; }
  .text-yellow-800 { color: #92400e; }
  .bg-green-100 { background-color: #dcfce7; }
  .text-green-800 { color: #166534; }
  
  /* Toast animation */
  .fixed.bottom-8 {
    animation: slideUp 0.5s ease-out;
  }
  </style>