<template>
    <div>
      <!-- Final CTA Section -->
      <section class="relative z-10 py-20 bg-gradient-to-br from-emerald-500 to-green-600 overflow-hidden">
        <!-- Background Elements -->
        <div class="absolute inset-0">
          <div class="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
          <div class="absolute bottom-10 right-10 w-48 h-48 bg-white/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div class="absolute top-1/2 left-1/3 w-24 h-24 bg-white/10 rounded-full blur-xl animate-pulse delay-500"></div>
        </div>
  
        <div class="relative max-w-screen-xl mx-auto px-4 sm:px-8 text-center">
          <!-- Main CTA Content -->
          <div class="animate-fade-in-up">
            <h2 class="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Prêt à transformer
              <br />votre <span class="text-emerald-200">bien-être</span> ?
            </h2>
            <p class="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto leading-relaxed mb-10">
              Rejoignez des milliers d'utilisateurs qui ont déjà amélioré leur qualité de vie 
              grâce à Goodloop. Votre parcours bien-être commence maintenant.
            </p>
  
            <!-- CTA Buttons -->
            <div class="flex flex-col sm:flex-row gap-6 justify-center mb-12 animate-fade-in-up delay-300">
              <button 
                @click="$emit('start-free')"
                class="bg-white text-emerald-600 px-12 py-5 rounded-full text-xl font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-black/20 active:scale-95 group"
              >
                <span class="flex items-center justify-center space-x-2">
                  <span>Commencer gratuitement</span>
                  <svg class="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
                  </svg>
                </span>
              </button>
              <button 
                @click="$emit('try-premium')"
                class="border-2 border-white text-white hover:bg-white hover:text-emerald-600 px-12 py-5 rounded-full text-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-black/10 active:scale-95 backdrop-blur-sm"
              >
                Essai Premium 7 jours
              </button>
            </div>
  
            <!-- Trust Indicators -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in-up delay-500">
              <div class="flex flex-col items-center space-y-2">
                <div class="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <p class="text-white font-semibold">Gratuit pour toujours</p>
                <p class="text-emerald-200 text-sm">Aucune carte requise</p>
              </div>
              <div class="flex flex-col items-center space-y-2">
                <div class="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <p class="text-white font-semibold">100% sécurisé</p>
                <p class="text-emerald-200 text-sm">Conformité RGPD</p>
              </div>
              <div class="flex flex-col items-center space-y-2">
                <div class="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <p class="text-white font-semibold">Support réactif</p>
                <p class="text-emerald-200 text-sm">Réponse < 2h</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Footer -->
      <footer class="bg-gray-900 text-white relative">
        <!-- Main Footer Content -->
        <div class="max-w-screen-xl mx-auto px-4 sm:px-8 py-16">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <!-- Brand Column -->
            <div class="lg:col-span-1">
              <div class="flex items-center space-x-2 mb-6 group">
                <div class="w-10 h-10 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:rotate-12 group-hover:scale-110 shadow-lg shadow-emerald-500/30">
                  <span class="text-white font-bold">G</span>
                </div>
                <span class="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
                  Goodloop
                </span>
              </div>
              <p class="text-gray-400 leading-relaxed mb-6">
                L'application qui transforme vos habitudes quotidiennes en parcours de bien-être personnalisé.
              </p>
              <!-- Social Links -->
              <div class="flex space-x-4">
                <a 
                  href="#" 
                  @click="$emit('social-link', 'twitter')"
                  class="w-10 h-10 bg-gray-800 hover:bg-emerald-500 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-emerald-500/30"
                >
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  @click="$emit('social-link', 'linkedin')"
                  class="w-10 h-10 bg-gray-800 hover:bg-emerald-500 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-emerald-500/30"
                >
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  @click="$emit('social-link', 'instagram')"
                  class="w-10 h-10 bg-gray-800 hover:bg-emerald-500 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-emerald-500/30"
                >
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clip-rule="evenodd"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  @click="$emit('social-link', 'youtube')"
                  class="w-10 h-10 bg-gray-800 hover:bg-emerald-500 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-emerald-500/30"
                >
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M2 6a6 6 0 1112 0v6a6 6 0 11-12 0V6zm10 5H8v-1h4v1z" clip-rule="evenodd"/>
                  </svg>
                </a>
              </div>
            </div>
  
            <!-- Product Column -->
            <div>
              <h3 class="text-lg font-semibold mb-6 text-emerald-400">Produit</h3>
              <ul class="space-y-3">
                <li>
                  <a href="#" @click="$emit('footer-link', 'features')" class="text-gray-400 hover:text-white transition-colors duration-300">
                    Fonctionnalités
                  </a>
                </li>
                <li>
                  <a href="#" @click="$emit('footer-link', 'pricing')" class="text-gray-400 hover:text-white transition-colors duration-300">
                    Tarifs
                  </a>
                </li>
                <li>
                  <a href="#" @click="$emit('footer-link', 'demo')" class="text-gray-400 hover:text-white transition-colors duration-300">
                    Démonstration
                  </a>
                </li>
                <li>
                  <a href="#" @click="$emit('footer-link', 'integrations')" class="text-gray-400 hover:text-white transition-colors duration-300">
                    Intégrations
                  </a>
                </li>
                <li>
                  <a href="#" @click="$emit('footer-link', 'changelog')" class="text-gray-400 hover:text-white transition-colors duration-300">
                    Nouveautés
                  </a>
                </li>
              </ul>
            </div>
  
            <!-- Support Column -->
            <div>
              <h3 class="text-lg font-semibold mb-6 text-emerald-400">Support</h3>
              <ul class="space-y-3">
                <li>
                  <a href="#" @click="$emit('footer-link', 'help')" class="text-gray-400 hover:text-white transition-colors duration-300">
                    Centre d'aide
                  </a>
                </li>
                <li>
                  <a href="#" @click="$emit('footer-link', 'contact')" class="text-gray-400 hover:text-white transition-colors duration-300">
                    Nous contacter
                  </a>
                </li>
                <li>
                  <a href="#" @click="$emit('footer-link', 'faq')" class="text-gray-400 hover:text-white transition-colors duration-300">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" @click="$emit('footer-link', 'community')" class="text-gray-400 hover:text-white transition-colors duration-300">
                    Communauté
                  </a>
                </li>
                <li>
                  <a href="#" @click="$emit('footer-link', 'status')" class="text-gray-400 hover:text-white transition-colors duration-300">
                    État des services
                  </a>
                </li>
              </ul>
            </div>
  
            <!-- Company Column -->
            <div>
              <h3 class="text-lg font-semibold mb-6 text-emerald-400">Entreprise</h3>
              <ul class="space-y-3">
                <li>
                  <a href="#" @click="$emit('footer-link', 'about')" class="text-gray-400 hover:text-white transition-colors duration-300">
                    À propos
                  </a>
                </li>
                <li>
                  <a href="#" @click="$emit('footer-link', 'blog')" class="text-gray-400 hover:text-white transition-colors duration-300">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" @click="$emit('footer-link', 'careers')" class="text-gray-400 hover:text-white transition-colors duration-300">
                    Carrières
                  </a>
                </li>
                <li>
                  <a href="#" @click="$emit('footer-link', 'press')" class="text-gray-400 hover:text-white transition-colors duration-300">
                    Presse
                  </a>
                </li>
                <li>
                  <a href="#" @click="$emit('footer-link', 'partnerships')" class="text-gray-400 hover:text-white transition-colors duration-300">
                    Partenariats
                  </a>
                </li>
              </ul>
            </div>
          </div>
  
          <!-- Newsletter Signup -->
          <div class="border-t border-gray-800 mt-12 pt-8">
            <div class="max-w-2xl mx-auto text-center">
              <h3 class="text-2xl font-bold text-white mb-4">
                Restez informé de nos nouveautés
              </h3>
              <p class="text-gray-400 mb-6">
                Recevez nos conseils bien-être et les dernières fonctionnalités directement dans votre boîte mail.
              </p>
              <div class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  v-model="email"
                  type="email" 
                  placeholder="Votre adresse email"
                  class="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-full text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                >
                <button 
                  @click="subscribeNewsletter"
                  class="bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/30 active:scale-95"
                >
                  S'abonner
                </button>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Bottom Footer -->
        <div class="border-t border-gray-800">
          <div class="max-w-screen-xl mx-auto px-4 sm:px-8 py-6">
            <div class="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div class="text-gray-400 text-sm">
                © 2025 Goodloop. Tous droits réservés.
              </div>
              <div class="flex items-center space-x-6 text-sm">
                <a href="#" @click="$emit('legal-link', 'privacy')" class="text-gray-400 hover:text-white transition-colors duration-300">
                  Politique de confidentialité
                </a>
                <a href="#" @click="$emit('legal-link', 'terms')" class="text-gray-400 hover:text-white transition-colors duration-300">
                  Conditions d'utilisation
                </a>
                <a href="#" @click="$emit('legal-link', 'cookies')" class="text-gray-400 hover:text-white transition-colors duration-300">
                  Cookies
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    name: 'FinalCTAAndFooter',
    emits: [
      'start-free', 
      'try-premium', 
      'social-link', 
      'footer-link', 
      'legal-link',
      'newsletter-subscribe'
    ],
    data() {
      return {
        email: ''
      }
    },
    methods: {
      subscribeNewsletter() {
        if (this.email && this.email.includes('@')) {
          this.$emit('newsletter-subscribe', this.email)
          this.email = ''
          // You could show a success message here
        }
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
  
  .animate-fade-in-up {
    animation: fade-in-up 0.8s ease-out forwards;
  }
  
  .delay-300 {
    animation-delay: 0.3s;
  }
  
  .delay-500 {
    animation-delay: 0.5s;
  }
  
  /* Smooth hover transitions */
  a {
    transition: all 0.3s ease;
  }
  
  /* Background animation */
  @keyframes pulse {
    0%, 100% {
      opacity: 0.3;
    }
    50% {
      opacity: 0.1;
    }
  }
  
  .animate-pulse {
    animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
  
  .delay-500 {
    animation-delay: 0.5s;
  }
  
  .delay-1000 {
    animation-delay: 1s;
  }
  </style>