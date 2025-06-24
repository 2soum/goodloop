<template>
  <main class="relative z-10">
    <div class="max-w-screen-2xl mx-auto px-4 sm:px-8 py-10">
      <div class="text-center">
        <h1 class="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-8 animate-fade-in-up">
          Votre <span class="bg-gradient-to-r from-emerald-500 to-green-500 bg-clip-text text-transparent">bien-être</span>
          <br />au quotidien
        </h1>
        <p class="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200">
          Suivez votre sommeil, votre humeur et vos habitudes de vie. 
          Découvrez les corrélations qui vous aident à mieux vivre.
        </p>
        <div class="flex flex-col sm:flex-row gap-6 mb-12 justify-center animate-fade-in-up delay-300">
          <button @click="$emit('get-started')" class="bg-emerald-500 hover:bg-emerald-600 text-white px-10 py-5 rounded-full text-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/30 active:scale-95 group">
            <span class="relative">
              Commencer gratuitement
            </span>
          </button>
          <button @click="$emit('demo')" class="border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-50 px-10 py-5 rounded-full text-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg backdrop-blur-sm">
            Voir la démo
          </button>
        </div>
      </div>

      <!-- Hero Cards with animations -->
      <div class="mt-14 relative animate-fade-in-up delay-500">
        <div class="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl shadow-emerald-500/10 p-10 max-w-5xl mx-auto border border-emerald-100 hover:shadow-3xl transition-all duration-500">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Sleep Card -->
            <div class="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-2xl transform transition-all duration-500 hover:scale-105 hover:rotate-1 hover:shadow-xl group cursor-pointer animate-slide-in-left border border-indigo-100">
              <div class="flex items-center mb-4">
                <div class="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:rotate-12 group-hover:scale-110 shadow-lg shadow-indigo-500/30">
                  <svg class="w-4 h-4 text-white transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                </div>
                <h3 class="ml-3 font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors duration-300">Sommeil</h3>
              </div>
              <p class="text-2xl font-bold text-indigo-600 group-hover:scale-110 transition-transform duration-300">7h 45m</p>
              <p class="text-sm text-gray-600">Qualité excellente</p>
              <div class="mt-3 h-1 bg-indigo-200 rounded-full overflow-hidden">
                <div class="h-full bg-indigo-500 rounded-full w-0 group-hover:w-5/6 transition-all duration-1000 delay-200"></div>
              </div>
            </div>

            <!-- Mood Card -->
            <div class="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-2xl transform transition-all duration-500 hover:scale-105 hover:-rotate-1 hover:shadow-xl group cursor-pointer animate-slide-in-up delay-200 border border-emerald-100">
              <div class="flex items-center mb-4">
                <div class="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:rotate-12 group-hover:scale-110 shadow-lg shadow-emerald-500/30">
                  <svg class="w-4 h-4 text-white transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z" clip-rule="evenodd" />
                  </svg>
                </div>
                <h3 class="ml-3 font-semibold text-gray-800 group-hover:text-emerald-600 transition-colors duration-300">Humeur</h3>
              </div>
              <p class="text-2xl font-bold text-emerald-600 group-hover:scale-110 transition-transform duration-300">8/10</p>
              <p class="text-sm text-gray-600">Très bonne journée</p>
              <div class="mt-3 h-1 bg-emerald-200 rounded-full overflow-hidden">
                <div class="h-full bg-emerald-500 rounded-full w-0 group-hover:w-4/5 transition-all duration-1000 delay-200"></div>
              </div>
            </div>

            <!-- Activity Card -->
            <div class="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-2xl transform transition-all duration-500 hover:scale-105 hover:rotate-1 hover:shadow-xl group cursor-pointer animate-slide-in-right delay-100 border border-orange-100">
              <div class="flex items-center mb-4">
                <div class="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:rotate-12 group-hover:scale-110 shadow-lg shadow-orange-500/30">
                  <svg class="w-4 h-4 text-white transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clip-rule="evenodd" />
                  </svg>
                </div>
                <h3 class="ml-3 font-semibold text-gray-800 group-hover:text-orange-600 transition-colors duration-300">Activité</h3>
              </div>
              <p class="text-2xl font-bold text-orange-600 group-hover:scale-110 transition-transform duration-300">45 min</p>
              <p class="text-sm text-gray-600">Course à pied</p>
              <div class="mt-3 h-1 bg-orange-200 rounded-full overflow-hidden">
                <div class="h-full bg-orange-500 rounded-full w-0 group-hover:w-3/4 transition-all duration-1000 delay-200"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Hero',
  emits: ['get-started', 'demo']
}
</script> 