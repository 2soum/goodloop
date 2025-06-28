<template>
    <div class="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30 flex">
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
                class="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-200 group"
              >
                <svg class="w-5 h-5 transform transition-transform duration-200 group-hover:-translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd"/>
                </svg>
                <span class="font-medium">Dashboard</span>
              </button>
              
              <div class="w-px h-6 bg-gray-300"></div>
              
              <div class="flex items-center space-x-3">
                <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg class="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h1 class="text-2xl font-bold text-gray-900">Assistant Santé IA</h1>
                  <p class="text-gray-600 text-sm flex items-center">
                    <span class="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                    Dr. Luna - En ligne
                  </p>
                </div>
              </div>
            </div>
            
            <!-- Chat Actions -->
            <div class="flex items-center space-x-3">
              <!-- Voice Toggle -->
              <button 
                @click="toggleVoiceMode"
                :class="[
                  'p-3 rounded-full transition-all duration-300 transform hover:scale-105',
                  voiceMode 
                    ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30' 
                    : 'bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                ]"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clip-rule="evenodd"/>
                </svg>
              </button>
              
              <!-- Clear Chat -->
              <button 
                @click="clearChat"
                class="p-3 rounded-full bg-gray-100 text-gray-600 hover:bg-red-50 hover:text-red-600 transition-all duration-300 transform hover:scale-105"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" clip-rule="evenodd"/>
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 012 0v4a1 1 0 11-2 0V7zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V7a1 1 0 00-1-1z" clip-rule="evenodd"/>
                </svg>
              </button>
              
              <!-- Settings -->
              <button 
                @click="showSettings = true"
                class="p-3 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"/>
                </svg>
              </button>
            </div>
          </div>
        </header>
  
        <!-- Chat Interface -->
        <main class="flex-1 flex">
          <!-- Chat Area -->
          <div class="flex-1 flex flex-col">
            <!-- Welcome/Info Panel -->
            <div v-if="messages.length === 0" class="flex-1 flex items-center justify-center p-8">
              <div class="max-w-2xl text-center">
                <!-- AI Avatar -->
                <div class="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl shadow-blue-500/30">
                  <svg class="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                
                <h2 class="text-3xl font-bold text-gray-800 mb-4">Bonjour ! Je suis Dr. Luna 👋</h2>
                <p class="text-gray-600 text-lg mb-8 leading-relaxed">
                  Votre assistant personnel de santé et bien-être. Je suis là pour vous aider avec vos questions sur la santé, 
                  l'alimentation, le sommeil, l'exercice et plus encore.
                </p>
                
                <!-- Quick Actions -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <button 
                    v-for="suggestion in quickSuggestions"
                    :key="suggestion.id"
                    @click="sendMessage(suggestion.text)"
                    class="p-4 bg-white border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-md transition-all duration-300 text-left group"
                  >
                    <div class="flex items-center space-x-3">
                      <span class="text-2xl">{{ suggestion.emoji }}</span>
                      <div>
                        <h3 class="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-200">
                          {{ suggestion.title }}
                        </h3>
                        <p class="text-sm text-gray-500">{{ suggestion.description }}</p>
                      </div>
                    </div>
                  </button>
                </div>
                
                <!-- Disclaimer -->
                <div class="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800">
                  <div class="flex items-start space-x-2">
                    <svg class="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
                    </svg>
                    <p>
                      <strong>Important :</strong> Je fournis des informations générales de santé et bien-être. 
                      Pour des conseils médicaux spécifiques, consultez toujours un professionnel de santé qualifié.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Messages -->
            <div v-else class="flex-1 overflow-y-auto p-6 space-y-4" ref="messagesContainer">
              <div 
                v-for="message in messages"
                :key="message.id"
                :class="[
                  'flex',
                  message.sender === 'user' ? 'justify-end' : 'justify-start'
                ]"
              >
                <!-- AI Message -->
                <div v-if="message.sender === 'ai'" class="flex items-start space-x-3 max-w-4xl">
                  <div class="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <div class="bg-white rounded-2xl rounded-tl-md p-4 shadow-sm border border-gray-100">
                    <div class="prose prose-sm max-w-none" v-html="formatMessage(message.text)"></div>
                    <div class="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
                      <span class="text-xs text-gray-500">{{ formatTime(message.timestamp) }}</span>
                      <div class="flex items-center space-x-2">
                        <button 
                          @click="copyMessage(message.text)"
                          class="p-1 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                        >
                          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"/>
                            <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z"/>
                          </svg>
                        </button>
                        <button 
                          @click="likeMessage(message)"
                          :class="[
                            'p-1 transition-colors duration-200',
                            message.liked ? 'text-red-500' : 'text-gray-400 hover:text-red-500'
                          ]"
                        >
                          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"/>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <!-- User Message -->
                <div v-else class="flex items-start space-x-3 max-w-2xl">
                  <div class="bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-2xl rounded-tr-md p-4 shadow-sm">
                    <p class="whitespace-pre-wrap">{{ message.text }}</p>
                    <span class="text-xs text-blue-100 mt-2 block">{{ formatTime(message.timestamp) }}</span>
                  </div>
                  <div class="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                    <span class="text-sm font-semibold text-gray-600">{{ userInitials }}</span>
                  </div>
                </div>
              </div>
              
              <!-- Typing Indicator -->
              <div v-if="isTyping" class="flex justify-start">
                <div class="flex items-start space-x-3">
                  <div class="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                    <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <div class="bg-white rounded-2xl rounded-tl-md p-4 shadow-sm border border-gray-100">
                    <div class="flex space-x-1">
                      <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.1s"></div>
                      <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Input Area -->
            <div class="border-t border-gray-200 bg-white p-6">
              <form @submit.prevent="handleSendMessage" class="flex items-end space-x-4">
                <!-- Text Input -->
                <div class="flex-1 relative">
                  <textarea
                    v-model="currentMessage"
                    ref="messageInput"
                    @keydown.enter.exact.prevent="handleSendMessage"
                    @keydown.enter.shift.exact="newLine"
                    placeholder="Posez votre question sur la santé et le bien-être..."
                    rows="1"
                    class="w-full px-4 py-3 pr-12 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none max-h-32 min-h-[48px]"
                    :disabled="isTyping"
                  ></textarea>
                  
                  <!-- Voice Input Button -->
                  <button
                    v-if="voiceMode"
                    type="button"
                    @mousedown="startVoiceInput"
                    @mouseup="stopVoiceInput"
                    @mouseleave="stopVoiceInput"
                    :class="[
                      'absolute right-3 top-1/2 transform -translate-y-1/2 p-2 rounded-full transition-all duration-200',
                      isRecording 
                        ? 'bg-red-500 text-white animate-pulse' 
                        : 'bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                    ]"
                  >
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clip-rule="evenodd"/>
                    </svg>
                  </button>
                </div>
                
                <!-- Send Button -->
                <button
                  type="submit"
                  :disabled="!currentMessage.trim() || isTyping"
                  class="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 disabled:from-gray-400 disabled:to-gray-500 text-white p-3 rounded-2xl transition-all duration-300 transform hover:scale-105 disabled:hover:scale-100 disabled:cursor-not-allowed flex items-center justify-center min-w-[48px]"
                >
                  <svg v-if="!isTyping" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"/>
                  </svg>
                  <svg v-else class="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                </button>
              </form>
              
              <!-- Voice Recording Indicator -->
              <div v-if="isRecording" class="mt-2 flex items-center justify-center text-red-500 text-sm">
                <div class="flex items-center space-x-2">
                  <div class="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  <span>Enregistrement en cours... Relâchez pour envoyer</span>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Sidebar -->
          <div class="w-80 border-l border-gray-200 bg-gray-50/50 flex flex-col">
            <!-- Health Context -->
            <div class="p-6 border-b border-gray-200">
              <h3 class="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <span class="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Contexte santé
              </h3>
              <div class="space-y-3">
                <div class="bg-white p-3 rounded-lg border border-gray-200">
                  <div class="flex items-center justify-between mb-2">
                    <span class="text-sm font-medium text-gray-700">Sommeil moyen</span>
                    <span class="text-sm text-blue-600 font-semibold">7h 30m</span>
                  </div>
                  <div class="w-full bg-gray-200 rounded-full h-1.5">
                    <div class="bg-blue-500 h-1.5 rounded-full" style="width: 85%"></div>
                  </div>
                </div>
                
                <div class="bg-white p-3 rounded-lg border border-gray-200">
                  <div class="flex items-center justify-between mb-2">
                    <span class="text-sm font-medium text-gray-700">Activité physique</span>
                    <span class="text-sm text-green-600 font-semibold">45min/jour</span>
                  </div>
                  <div class="w-full bg-gray-200 rounded-full h-1.5">
                    <div class="bg-green-500 h-1.5 rounded-full" style="width: 75%"></div>
                  </div>
                </div>
                
                <div class="bg-white p-3 rounded-lg border border-gray-200">
                  <div class="flex items-center justify-between mb-2">
                    <span class="text-sm font-medium text-gray-700">Nutrition</span>
                    <span class="text-sm text-emerald-600 font-semibold">8/10</span>
                  </div>
                  <div class="w-full bg-gray-200 rounded-full h-1.5">
                    <div class="bg-emerald-500 h-1.5 rounded-full" style="width: 80%"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Conversation History -->
            <div class="flex-1 p-6">
              <h3 class="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <span class="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                Conversations récentes
              </h3>
              <div class="space-y-2">
                <div 
                  v-for="conversation in conversationHistory"
                  :key="conversation.id"
                  @click="loadConversation(conversation)"
                  class="p-3 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-sm transition-all duration-200 cursor-pointer group"
                >
                  <div class="flex items-start space-x-3">
                    <span class="text-lg">{{ conversation.emoji }}</span>
                    <div class="flex-1">
                      <h4 class="text-sm font-medium text-gray-800 group-hover:text-blue-600 transition-colors duration-200">
                        {{ conversation.title }}
                      </h4>
                      <p class="text-xs text-gray-500 mt-1">{{ conversation.date }}</p>
                      <p class="text-xs text-gray-600 mt-1 truncate">{{ conversation.preview }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
  
      <!-- Settings Modal -->
      <div 
        v-if="showSettings"
        class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
        @click="showSettings = false"
      >
        <div 
          class="bg-white rounded-2xl w-full max-w-md transform transition-all duration-300 scale-100"
          @click.stop
        >
          <!-- Modal Header -->
          <div class="bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-6 rounded-t-2xl">
            <div class="flex items-center justify-between">
              <h3 class="text-xl font-bold">Paramètres du chat</h3>
              <button 
                @click="showSettings = false"
                class="text-white/80 hover:text-white transition-colors duration-200"
              >
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>
                </svg>
              </button>
            </div>
          </div>
          
          <!-- Modal Content -->
          <div class="p-6 space-y-6">
            <!-- Voice Mode -->
            <div class="flex items-center justify-between">
              <div>
                <h4 class="font-semibold text-gray-800">Mode vocal</h4>
                <p class="text-sm text-gray-600">Activer l'entrée vocale</p>
              </div>
              <button 
                @click="voiceMode = !voiceMode"
                :class="[
                  'relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200',
                  voiceMode ? 'bg-blue-600' : 'bg-gray-200'
                ]"
              >
                <span 
                  :class="[
                    'inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200',
                    voiceMode ? 'translate-x-6' : 'translate-x-1'
                  ]"
                ></span>
              </button>
            </div>
            
            <!-- Response Style -->
            <div>
              <h4 class="font-semibold text-gray-800 mb-3">Style de réponse</h4>
              <div class="space-y-2">
                <label class="flex items-center space-x-3">
                  <input type="radio" v-model="responseStyle" value="detailed" class="text-blue-600">
                  <span class="text-gray-700">Détaillé</span>
                </label>
                <label class="flex items-center space-x-3">
                  <input type="radio" v-model="responseStyle" value="concise" class="text-blue-600">
                  <span class="text-gray-700">Concis</span>
                </label>
                <label class="flex items-center space-x-3">
                  <input type="radio" v-model="responseStyle" value="friendly" class="text-blue-600">
                  <span class="text-gray-700">Amical</span>
                </label>
              </div>
            </div>
            
            <!-- Theme -->
            <div>
              <h4 class="font-semibold text-gray-800 mb-3">Thème</h4>
              <select v-model="theme" class="w-full p-2 border border-gray-300 rounded-lg">
                <option value="light">Clair</option>
                <option value="dark">Sombre</option>
                <option value="auto">Automatique</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Success Toast -->
      <div 
        v-if="showToast"
        class="fixed bottom-8 right-8 bg-blue-500 text-white px-6 py-4 rounded-xl shadow-lg transform transition-all duration-500 z-50"
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
    name: 'Chat',
    components: {
      SideBar
    },
    data() {
      return {
        currentMessage: '',
        messages: [],
        isTyping: false,
        isRecording: false,
        voiceMode: false,
        showSettings: false,
        showToast: false,
        toastMessage: '',
        responseStyle: 'friendly',
        theme: 'light',
        quickSuggestions: [
          {
            id: 1,
            emoji: '😴',
            title: 'Améliorer mon sommeil',
            description: 'Conseils pour mieux dormir',
            text: 'Comment puis-je améliorer la qualité de mon sommeil ?'
          },
          {
            id: 2,
            emoji: '🏃‍♂️',
            title: 'Programme d\'exercice',
            description: 'Routine adaptée à mon niveau',
            text: 'Peux-tu me suggérer un programme d\'exercice pour débutant ?'
          },
          {
            id: 3,
            emoji: '🥗',
            title: 'Nutrition équilibrée',
            description: 'Conseils alimentaires personnalisés',
            text: 'Quels sont les principes d\'une alimentation équilibrée ?'
          },
          {
            id: 4,
            emoji: '🧘‍♀️',
            title: 'Gestion du stress',
            description: 'Techniques de relaxation',
            text: 'Comment puis-je mieux gérer mon stress au quotidien ?'
          }
        ],
        conversationHistory: [
          {
            id: 1,
            title: 'Conseils sommeil',
            emoji: '😴',
            date: 'Hier',
            preview: 'Comment améliorer la qualité de mon sommeil...'
          },
          {
            id: 2,
            title: 'Nutrition sportif',
            emoji: '🏃‍♂️',
            date: 'Il y a 2 jours',
            preview: 'Alimentation avant et après l\'exercice...'
          },
          {
            id: 3,
            title: 'Méditation débutant',
            emoji: '🧘‍♀️',
            date: 'Il y a 3 jours',
            preview: 'Techniques de méditation pour commencer...'
          },
          {
            id: 4,
            title: 'Hydratation optimale',
            emoji: '💧',
            date: 'Il y a 5 jours',
            preview: 'Combien d\'eau boire par jour...'
          }
        ],
        healthResponses: {
          sommeil: "Excellente question ! Pour améliorer votre sommeil, voici mes recommandations principales :\n\n**🌙 Routine du soir :**\n• Couchez-vous et levez-vous à heures fixes\n• Évitez les écrans 1h avant le coucher\n• Créez un environnement frais (18-20°C) et sombre\n\n**☕ Habitudes alimentaires :**\n• Évitez la caféine après 14h\n• Dîner léger 2-3h avant le coucher\n• Limitez l'alcool qui perturbe le sommeil profond\n\n**🧘 Relaxation :**\n• Pratiquez la respiration profonde (4-7-8)\n• Essayez la méditation ou l'écoute de musique douce\n• Tenez un journal pour vider votre esprit\n\nVoulez-vous que je détaille l'une de ces recommandations ?",
          
          exercice: "Parfait pour commencer ! Voici un programme progressif adapté aux débutants :\n\n**🏃‍♂️ Semaine 1-2 (3x/semaine) :**\n• 20 min de marche rapide\n• 10 squats, 5 pompes (genoux au sol), 30s de planche\n• 5 min d'étirements\n\n**💪 Semaine 3-4 :**\n• 25 min cardio (marche/vélo)\n• 15 squats, 8 pompes, 45s de planche\n• Ajoutez des fentes (10 par jambe)\n\n**📈 Progression :**\n• Augmentez l'intensité de 10% par semaine\n• Écoutez votre corps - repos si douleur\n• Hydratez-vous bien avant/pendant/après\n\n**⚠️ Sécurité :**\n• Échauffement de 5 min obligatoire\n• Consultez un médecin si problèmes de santé\n\nQuel type d'activité vous attire le plus ?",
          
          nutrition: "Excellente initiative ! Voici les fondements d'une alimentation équilibrée :\n\n**🍽️ Répartition idéale par repas :**\n• 50% légumes et fruits (variez les couleurs !)\n• 25% protéines (viande, poisson, œufs, légumineuses)\n• 25% céréales complètes (quinoa, riz brun, avoine)\n\n**⏰ Rythme alimentaire :**\n• 3 repas principaux + 1-2 collations si besoin\n• Petit-déjeuner copieux, dîner plus léger\n• Mangez lentement, mastiquez bien\n\n**💧 Hydratation :**\n• 1.5-2L d'eau par jour minimum\n• Thés, tisanes comptent aussi\n• Limitez sodas et alcool\n\n**🚫 À limiter :**\n• Aliments ultra-transformés\n• Excès de sucre et sel\n• Portions trop importantes\n\nAvez-vous des objectifs nutritionnels spécifiques (perte de poids, prise de muscle, etc.) ?",
          
          stress: "Le stress fait partie de la vie, mais on peut apprendre à mieux le gérer ! Voici mes techniques favorites :\n\n**🫁 Techniques respiratoires :**\n• Respiration 4-7-8 : Inspirez 4s, retenez 7s, expirez 8s\n• Cohérence cardiaque : 5s inspiration, 5s expiration pendant 5 min\n• Respiration abdominale profonde\n\n**🧘‍♀️ Pratiques de relaxation :**\n• Méditation de pleine conscience (5-10 min/jour)\n• Yoga ou stretching doux\n• Bain chaud avec huiles essentielles\n\n**🏃‍♂️ Activité physique :**\n• Marche en nature (très efficace !)\n• Sport pour évacuer les tensions\n• Danse, natation selon vos goûts\n\n**🎯 Organisation :**\n• Priorisez vos tâches importantes\n• Apprenez à dire non\n• Planifiez des moments de détente\n\nQuelle technique aimeriez-vous essayer en premier ?"
        }
      };
    },
    computed: {
      userInitials() {
        // Simuler les initiales de l'utilisateur connecté
        return 'TV'; // Thomas Veillard
      }
    },
    methods: {
      async handleSendMessage() {
        if (!this.currentMessage.trim() || this.isTyping) return;
        
        const userMessage = {
          id: Date.now(),
          text: this.currentMessage.trim(),
          sender: 'user',
          timestamp: new Date()
        };
        
        this.messages.push(userMessage);
        const messageText = this.currentMessage.trim();
        this.currentMessage = '';
        
        // Scroll to bottom
        this.$nextTick(() => {
          this.scrollToBottom();
        });
        
        // Simulate AI typing
        this.isTyping = true;
        
        // Generate AI response
        setTimeout(() => {
          const aiResponse = this.generateAIResponse(messageText);
          const aiMessage = {
            id: Date.now() + 1,
            text: aiResponse,
            sender: 'ai',
            timestamp: new Date(),
            liked: false
          };
          
          this.messages.push(aiMessage);
          this.isTyping = false;
          
          this.$nextTick(() => {
            this.scrollToBottom();
          });
        }, 1000 + Math.random() * 2000); // 1-3 seconds delay
      },
      
      sendMessage(text) {
        this.currentMessage = text;
        this.handleSendMessage();
      },
      
      generateAIResponse(message) {
        const lowerMessage = message.toLowerCase();
        
        // Keywords mapping to responses
        const keywords = {
          sommeil: ['sommeil', 'dormir', 'insomnie', 'repos', 'nuit', 'réveil'],
          exercice: ['sport', 'exercice', 'musculation', 'fitness', 'entrainement', 'activité physique'],
          nutrition: ['nutrition', 'alimentation', 'manger', 'régime', 'nourriture', 'repas'],
          stress: ['stress', 'anxiété', 'relaxation', 'méditation', 'zen', 'calme']
        };
        
        // Find matching category
        for (const [category, words] of Object.entries(keywords)) {
          if (words.some(word => lowerMessage.includes(word))) {
            return this.healthResponses[category];
          }
        }
        
        // Generic health response
        return `Je comprends votre question sur "${message}". En tant qu'assistant santé, je peux vous aider avec des conseils sur l'alimentation, l'exercice, le sommeil, la gestion du stress et le bien-être général.\n\n**🩺 Voici comment je peux vous aider :**\n• Conseils nutritionnels personnalisés\n• Programmes d'exercice adaptés\n• Techniques d'amélioration du sommeil\n• Stratégies de gestion du stress\n• Conseils de prévention santé\n\n**⚠️ Important :** Mes conseils sont informatifs et ne remplacent pas l'avis d'un professionnel de santé.\n\nPouvez-vous préciser votre demande ou choisir un domaine spécifique qui vous intéresse ?`;
      },
      
      newLine() {
        this.currentMessage += '\n';
      },
      
      clearChat() {
        if (confirm('Êtes-vous sûr de vouloir effacer toute la conversation ?')) {
          this.messages = [];
          this.showToastMessage('Conversation effacée');
        }
      },
      
      toggleVoiceMode() {
        this.voiceMode = !this.voiceMode;
        this.showToastMessage(this.voiceMode ? 'Mode vocal activé' : 'Mode vocal désactivé');
      },
      
      startVoiceInput() {
        if (!this.voiceMode) return;
        this.isRecording = true;
        // Ici vous pourriez intégrer l'API Web Speech ou une solution similaire
        console.log('Démarrage de l\'enregistrement vocal');
      },
      
      stopVoiceInput() {
        if (!this.isRecording) return;
        this.isRecording = false;
        // Simulation d'une transcription
        this.currentMessage += ' [Message vocal transcrit]';
        console.log('Arrêt de l\'enregistrement vocal');
      },
      
      scrollToBottom() {
        const container = this.$refs.messagesContainer;
        if (container) {
          container.scrollTop = container.scrollHeight;
        }
      },
      
      formatMessage(text) {
        // Convert markdown-like formatting to HTML
        return text
          .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
          .replace(/\*(.*?)\*/g, '<em>$1</em>')
          .replace(/\n/g, '<br>')
          .replace(/^• (.*$)/gm, '<li>$1</li>')
          .replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>');
      },
      
      formatTime(timestamp) {
        return new Intl.DateTimeFormat('fr-FR', {
          hour: '2-digit',
          minute: '2-digit'
        }).format(timestamp);
      },
      
      copyMessage(text) {
        navigator.clipboard.writeText(text.replace(/\*\*(.*?)\*\*/g, '$1'));
        this.showToastMessage('Message copié !');
      },
      
      likeMessage(message) {
        message.liked = !message.liked;
        this.showToastMessage(message.liked ? 'Message aimé ❤️' : 'Like retiré');
      },
      
      loadConversation(conversation) {
        // Simulate loading a previous conversation
        this.showToastMessage(`Chargement: ${conversation.title}`);
        // Ici vous pourriez charger les messages de cette conversation
      },
      
      showToastMessage(message) {
        this.toastMessage = message;
        this.showToast = true;
        setTimeout(() => {
          this.showToast = false;
        }, 3000);
      }
    },
    
    mounted() {
      // Auto-focus on message input
      this.$nextTick(() => {
        if (this.$refs.messageInput) {
          this.$refs.messageInput.focus();
        }
      });
    }
  };
  </script>
  
  <style scoped>
  /* Custom scrollbar for messages */
  .overflow-y-auto::-webkit-scrollbar {
    width: 6px;
  }
  
  .overflow-y-auto::-webkit-scrollbar-track {
    background: #f1f5f9;
    border-radius: 3px;
  }
  
  .overflow-y-auto::-webkit-scrollbar-thumb {
    background: #3b82f6;
    border-radius: 3px;
  }
  
  .overflow-y-auto::-webkit-scrollbar-thumb:hover {
    background: #2563eb;
  }
  
  /* Message animations */
  .space-y-4 > div {
    animation: slideInMessage 0.3s ease-out;
  }
  
  @keyframes slideInMessage {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  /* Typing indicator animation */
  .animate-bounce {
    animation: bounce 1s infinite;
  }
  
  @keyframes bounce {
    0%, 20%, 53%, 80%, 100% {
      transform: translate3d(0,0,0);
    }
    40%, 43% {
      transform: translate3d(0,-8px,0);
    }
    70% {
      transform: translate3d(0,-4px,0);
    }
    90% {
      transform: translate3d(0,-2px,0);
    }
  }
  
  /* Prose styling for AI messages */
  .prose {
    color: #374151;
    line-height: 1.6;
  }
  
  .prose strong {
    font-weight: 600;
    color: #1f2937;
  }
  
  .prose em {
    font-style: italic;
    color: #4b5563;
  }
  
  .prose ul {
    list-style: none;
    padding-left: 0;
    margin: 0.5rem 0;
  }
  
  .prose li {
    padding-left: 1rem;
    position: relative;
    margin: 0.25rem 0;
  }
  
  .prose li:before {
    content: "•";
    color: #3b82f6;
    font-weight: bold;
    position: absolute;
    left: 0;
  }
  
  /* Auto-resize textarea */
  textarea {
    field-sizing: content;
    min-height: 48px;
    max-height: 128px;
  }
  
  /* Recording animation */
  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }
  
  .animate-pulse {
    animation: pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
  
  /* Toggle switch */
  .relative.inline-flex {
    transition: background-color 0.2s ease-in-out;
  }
  
  /* Hover effects */
  .group:hover .group-hover\:text-blue-600 {
    color: #2563eb;
  }
  
  .group:hover .group-hover\:border-blue-300 {
    border-color: #93c5fd;
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
  
  /* Toast animation */
  .fixed.bottom-8 {
    animation: slideUp 0.5s ease-out;
  }
  
  /* Responsive adjustments */
  @media (max-width: 1024px) {
    .w-80 {
      width: 0;
      overflow: hidden;
    }
  }
  </style>