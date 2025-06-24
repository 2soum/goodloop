<template>
  <nav class="relative z-10 px-6 py-4 backdrop-blur-sm">
    <div class="max-w-7xl mx-auto flex items-center justify-between animate-fade-in-down">
      <div class="flex items-center space-x-2 group">
        <div class="w-8 h-8 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:rotate-12 group-hover:scale-110 shadow-lg shadow-emerald-500/30">
          <span class="text-white font-bold text-sm">G</span>
        </div>
        <span class="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
          Goodloop
        </span>
      </div>
      <div class="flex items-center space-x-6">
        <a href="#" class="text-gray-700 hover:text-emerald-600 transition-all duration-300 relative group">
          Fonctionnalités
          <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a href="#" class="text-gray-700 hover:text-emerald-600 transition-all duration-300 relative group">
          À propos
          <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a href="#" class="text-gray-700 hover:text-emerald-600 transition-all duration-300 relative group">
            Tarifs
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a href="#" class="text-gray-700 hover:text-emerald-600 transition-all duration-300 relative group">
            FAQ
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
        </a>
        <button @click="$emit('login')" class="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/30 active:scale-95">
          Se connecter
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header',
  emits: ['login']
}
</script> 