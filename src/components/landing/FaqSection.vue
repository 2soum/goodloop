<template>
    <section class="relative z-10 py-20 bg-white">
      <div class="max-w-screen-xl mx-auto px-4 sm:px-8">
        <!-- Section Header -->
        <div class="text-center mb-16 animate-fade-in-up">
          <h2 class="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Questions <span class="bg-gradient-to-r from-emerald-500 to-green-500 bg-clip-text text-transparent">fréquentes</span>
          </h2>
          <p class="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Tout ce que vous devez savoir sur Goodloop pour commencer 
            votre parcours bien-être en toute sérénité.
          </p>
        </div>
  
        <!-- FAQ Grid -->
        <div class="max-w-4xl mx-auto">
          <div class="space-y-6 animate-fade-in-up delay-300">
            <!-- FAQ Item 1 -->
            <div class="bg-gradient-to-r from-white to-emerald-50/30 rounded-2xl border border-gray-200 hover:border-emerald-200 transition-all duration-300 group">
              <button 
                @click="toggleFAQ(0)"
                class="w-full px-8 py-6 text-left flex items-center justify-between focus:outline-none"
              >
                <h3 class="text-xl font-semibold text-gray-800 group-hover:text-emerald-600 transition-colors duration-300">
                  Comment fonctionne Goodloop ?
                </h3>
                <div class="flex-shrink-0 ml-4">
                  <div :class="[
                    'w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300',
                    openFAQ === 0 
                      ? 'bg-emerald-500 text-white rotate-45' 
                      : 'bg-gray-100 text-gray-600 group-hover:bg-emerald-100 group-hover:text-emerald-600'
                  ]">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd"/>
                    </svg>
                  </div>
                </div>
              </button>
              <div 
                v-show="openFAQ === 0"
                class="px-8 pb-6 animate-fade-in"
              >
                <div class="border-t border-gray-100 pt-6">
                  <p class="text-gray-600 leading-relaxed mb-4">
                    Goodloop vous accompagne dans le suivi de votre bien-être quotidien à travers 4 domaines clés : 
                    <strong class="text-emerald-600">sommeil, humeur, activité physique et alimentation</strong>.
                  </p>
                  <p class="text-gray-600 leading-relaxed">
                    Chaque jour, vous enregistrez vos données via notre interface intuitive ou notre widget mobile. 
                    Notre IA analyse ensuite vos habitudes pour identifier les corrélations et vous proposer des conseils personnalisés.
                  </p>
                </div>
              </div>
            </div>
  
            <!-- FAQ Item 2 -->
            <div class="bg-gradient-to-r from-white to-blue-50/30 rounded-2xl border border-gray-200 hover:border-blue-200 transition-all duration-300 group">
              <button 
                @click="toggleFAQ(1)"
                class="w-full px-8 py-6 text-left flex items-center justify-between focus:outline-none"
              >
                <h3 class="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  Mes données sont-elles sécurisées ?
                </h3>
                <div class="flex-shrink-0 ml-4">
                  <div :class="[
                    'w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300',
                    openFAQ === 1 
                      ? 'bg-blue-500 text-white rotate-45' 
                      : 'bg-gray-100 text-gray-600 group-hover:bg-blue-100 group-hover:text-blue-600'
                  ]">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd"/>
                    </svg>
                  </div>
                </div>
              </button>
              <div 
                v-show="openFAQ === 1"
                class="px-8 pb-6 animate-fade-in"
              >
                <div class="border-t border-gray-100 pt-6">
                  <p class="text-gray-600 leading-relaxed mb-4">
                    <strong class="text-blue-600">Absolument !</strong> Nous utilisons l'authentification Microsoft OAuth 
                    pour garantir la sécurité de votre connexion. Vos données de santé sont chiffrées et stockées 
                    selon les standards européens RGPD.
                  </p>
                  <div class="bg-blue-50 rounded-xl p-4">
                    <div class="flex items-center space-x-2 mb-2">
                      <svg class="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                      </svg>
                      <span class="font-medium text-blue-800">Vos données vous appartiennent</span>
                    </div>
                    <p class="text-blue-700 text-sm">
                      Vous pouvez exporter ou supprimer vos données à tout moment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
  
            <!-- FAQ Item 3 -->
            <div class="bg-gradient-to-r from-white to-purple-50/30 rounded-2xl border border-gray-200 hover:border-purple-200 transition-all duration-300 group">
              <button 
                @click="toggleFAQ(2)"
                class="w-full px-8 py-6 text-left flex items-center justify-between focus:outline-none"
              >
                <h3 class="text-xl font-semibold text-gray-800 group-hover:text-purple-600 transition-colors duration-300">
                  Puis-je essayer avant de payer ?
                </h3>
                <div class="flex-shrink-0 ml-4">
                  <div :class="[
                    'w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300',
                    openFAQ === 2 
                      ? 'bg-purple-500 text-white rotate-45' 
                      : 'bg-gray-100 text-gray-600 group-hover:bg-purple-100 group-hover:text-purple-600'
                  ]">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd"/>
                    </svg>
                  </div>
                </div>
              </button>
              <div 
                v-show="openFAQ === 2"
                class="px-8 pb-6 animate-fade-in"
              >
                <div class="border-t border-gray-100 pt-6">
                  <p class="text-gray-600 leading-relaxed mb-4">
                    Bien sûr ! Nous proposons <strong class="text-purple-600">deux façons d'essayer Goodloop</strong> :
                  </p>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="bg-gray-50 rounded-xl p-4">
                      <h4 class="font-semibold text-gray-800 mb-2">Plan Gratuit</h4>
                      <p class="text-gray-600 text-sm">
                        Accès permanent aux fonctionnalités de base : journal quotidien, graphiques 7 jours, widget mobile.
                      </p>
                    </div>
                    <div class="bg-purple-50 rounded-xl p-4">
                      <h4 class="font-semibold text-purple-800 mb-2">Essai Premium</h4>
                      <p class="text-purple-700 text-sm">
                        7 jours gratuits avec toutes les fonctionnalités avancées, puis 9€/mois.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  
            <!-- FAQ Item 4 -->
            <div class="bg-gradient-to-r from-white to-orange-50/30 rounded-2xl border border-gray-200 hover:border-orange-200 transition-all duration-300 group">
              <button 
                @click="toggleFAQ(3)"
                class="w-full px-8 py-6 text-left flex items-center justify-between focus:outline-none"
              >
                <h3 class="text-xl font-semibold text-gray-800 group-hover:text-orange-600 transition-colors duration-300">
                  Comment fonctionne l'IA de Goodloop ?
                </h3>
                <div class="flex-shrink-0 ml-4">
                  <div :class="[
                    'w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300',
                    openFAQ === 3 
                      ? 'bg-orange-500 text-white rotate-45' 
                      : 'bg-gray-100 text-gray-600 group-hover:bg-orange-100 group-hover:text-orange-600'
                  ]">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd"/>
                    </svg>
                  </div>
                </div>
              </button>
              <div 
                v-show="openFAQ === 3"
                class="px-8 pb-6 animate-fade-in"
              >
                <div class="border-t border-gray-100 pt-6">
                  <p class="text-gray-600 leading-relaxed mb-4">
                    Notre IA analyse vos données pour identifier des <strong class="text-orange-600">patterns et corrélations</strong> 
                    entre vos différentes habitudes de vie.
                  </p>
                  <div class="space-y-3">
                    <div class="flex items-start space-x-3">
                      <div class="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mt-0.5">
                        <span class="text-orange-600 font-bold text-xs">1</span>
                      </div>
                      <div>
                        <h4 class="font-medium text-gray-800">Analyse des corrélations</h4>
                        <p class="text-gray-600 text-sm">"Tu dors mieux quand tu fais du sport le soir"</p>
                      </div>
                    </div>
                    <div class="flex items-start space-x-3">
                      <div class="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mt-0.5">
                        <span class="text-orange-600 font-bold text-xs">2</span>
                      </div>
                      <div>
                        <h4 class="font-medium text-gray-800">Suggestions personnalisées</h4>
                        <p class="text-gray-600 text-sm">Conseils adaptés à vos habitudes et objectifs</p>
                      </div>
                    </div>
                    <div class="flex items-start space-x-3">
                      <div class="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mt-0.5">
                        <span class="text-orange-600 font-bold text-xs">3</span>
                      </div>
                      <div>
                        <h4 class="font-medium text-gray-800">Amélioration continue</h4>
                        <p class="text-gray-600 text-sm">Plus vous utilisez l'app, plus les conseils sont précis</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  
            <!-- FAQ Item 5 -->
            <div class="bg-gradient-to-r from-white to-teal-50/30 rounded-2xl border border-gray-200 hover:border-teal-200 transition-all duration-300 group">
              <button 
                @click="toggleFAQ(4)"
                class="w-full px-8 py-6 text-left flex items-center justify-between focus:outline-none"
              >
                <h3 class="text-xl font-semibold text-gray-800 group-hover:text-teal-600 transition-colors duration-300">
                  Goodloop s'intègre-t-il avec d'autres apps santé ?
                </h3>
                <div class="flex-shrink-0 ml-4">
                  <div :class="[
                    'w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300',
                    openFAQ === 4 
                      ? 'bg-teal-500 text-white rotate-45' 
                      : 'bg-gray-100 text-gray-600 group-hover:bg-teal-100 group-hover:text-teal-600'
                  ]">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd"/>
                    </svg>
                  </div>
                </div>
              </button>
              <div 
                v-show="openFAQ === 4"
                class="px-8 pb-6 animate-fade-in"
              >
                <div class="border-t border-gray-100 pt-6">
                  <p class="text-gray-600 leading-relaxed mb-4">
                    Oui ! Goodloop Premium s'intègre avec les principales plateformes de santé :
                  </p>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div class="flex items-center space-x-3 p-3 bg-teal-50 rounded-lg">
                      <div class="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                        <svg class="w-4 h-4 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                        </svg>
                      </div>
                      <span class="font-medium text-teal-800">Google Fit</span>
                    </div>
                    <div class="flex items-center space-x-3 p-3 bg-teal-50 rounded-lg">
                      <div class="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                        <svg class="w-4 h-4 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                        </svg>
                      </div>
                      <span class="font-medium text-teal-800">Apple Health</span>
                    </div>
                  </div>
                  <p class="text-gray-600 text-sm">
                    Vous pouvez également exporter vos données au format PDF pour les partager avec votre médecin 
                    ou professionnel de santé.
                  </p>
                </div>
              </div>
            </div>
  
            <!-- FAQ Item 6 -->
            <div class="bg-gradient-to-r from-white to-pink-50/30 rounded-2xl border border-gray-200 hover:border-pink-200 transition-all duration-300 group">
              <button 
                @click="toggleFAQ(5)"
                class="w-full px-8 py-6 text-left flex items-center justify-between focus:outline-none"
              >
                <h3 class="text-xl font-semibold text-gray-800 group-hover:text-pink-600 transition-colors duration-300">
                  Comment annuler mon abonnement ?
                </h3>
                <div class="flex-shrink-0 ml-4">
                  <div :class="[
                    'w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300',
                    openFAQ === 5 
                      ? 'bg-pink-500 text-white rotate-45' 
                      : 'bg-gray-100 text-gray-600 group-hover:bg-pink-100 group-hover:text-pink-600'
                  ]">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd"/>
                    </svg>
                  </div>
                </div>
              </button>
              <div 
                v-show="openFAQ === 5"
                class="px-8 pb-6 animate-fade-in"
              >
                <div class="border-t border-gray-100 pt-6">
                  <p class="text-gray-600 leading-relaxed mb-4">
                    <strong class="text-pink-600">Très simple !</strong> Vous pouvez annuler votre abonnement à tout moment 
                    depuis les paramètres de votre compte, sans aucune contrainte.
                  </p>
                  <div class="bg-pink-50 rounded-xl p-4">
                    <h4 class="font-semibold text-pink-800 mb-2">Ce qui se passe après l'annulation :</h4>
                    <ul class="space-y-1 text-pink-700 text-sm">
                      <li>• Vous gardez l'accès Premium jusqu'à la fin de votre période payée</li>
                      <li>• Vos données restent sauvegardées</li>
                      <li>• Vous basculez automatiquement vers le plan gratuit</li>
                      <li>• Garantie satisfait ou remboursé 30 jours</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Contact Support -->
        <div class="text-center mt-16 animate-fade-in-up delay-500">
          <div class="bg-gradient-to-r from-emerald-50 to-green-50 rounded-3xl p-8 border border-emerald-100 max-w-2xl mx-auto">
            <div class="flex items-center justify-center mb-4">
              <div class="w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/30">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clip-rule="evenodd"/>
                </svg>
              </div>
            </div>
            <h3 class="text-2xl font-bold text-gray-800 mb-4">
              Une autre question ?
            </h3>
            <p class="text-gray-600 mb-6">
              Notre équipe support est là pour vous aider. Nous répondons généralement en moins de 2 heures.
            </p>
            <button 
              @click="$emit('contact-support')"
              class="bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/30 active:scale-95"
            >
              Contacter le support
            </button>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'FAQSection',
    emits: ['contact-support'],
    data() {
      return {
        openFAQ: null
      }
    },
    methods: {
      toggleFAQ(index) {
        this.openFAQ = this.openFAQ === index ? null : index
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
  
  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
  .animate-fade-in-up {
    animation: fade-in-up 0.8s ease-out forwards;
  }
  
  .animate-fade-in {
    animation: fade-in 0.3s ease-out forwards;
  }
  
  .delay-300 {
    animation-delay: 0.3s;
  }
  
  .delay-500 {
    animation-delay: 0.5s;
  }
  
  /* Smooth transitions for FAQ items */
  .group:hover {
    transform: translateY(-1px);
  }
  </style>