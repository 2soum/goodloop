<template>
    <section class="relative z-10 py-20 bg-gradient-to-br from-gray-50 to-emerald-50/30">
      <div class="max-w-screen-2xl mx-auto px-4 sm:px-8">
        <!-- Section Header -->
        <div class="text-center mb-16 animate-fade-in-up">
          <h2 class="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Découvrez <span class="bg-gradient-to-r from-emerald-500 to-green-500 bg-clip-text text-transparent">Goodloop</span>
            <br />en action
          </h2>
          <p class="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Regardez comment notre application peut transformer votre routine quotidienne 
            en parcours de bien-être personnalisé.
          </p>
        </div>
  
        <!-- Video Container -->
        <div class="relative max-w-5xl mx-auto animate-fade-in-up delay-300">
          <!-- Background Glow Effect -->
          <div class="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-3xl blur-xl"></div>
          
          <!-- Video Card -->
          <div class="relative bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl shadow-emerald-500/10 overflow-hidden border border-emerald-100 hover:shadow-3xl transition-all duration-700 group">
            <!-- Video Wrapper -->
            <div class="relative aspect-video bg-gradient-to-br from-gray-900 to-gray-700 overflow-hidden">
              <!-- Placeholder Video Background -->
              <div class="absolute inset-0 bg-gradient-to-br from-emerald-900/50 to-green-900/50"></div>
              
              <!-- Play Button Overlay -->
              <div 
                v-if="!isPlaying" 
                @click="playVideo"
                class="absolute inset-0 flex items-center justify-center cursor-pointer group/play"
              >
                <div class="relative">
                  <!-- Pulse rings -->
                  <div class="absolute inset-0 rounded-full bg-white/20 animate-ping"></div>
                  <div class="absolute inset-0 rounded-full bg-white/10 animate-ping delay-75"></div>
                  
                  <!-- Play button -->
                  <div class="relative w-24 h-24 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center transform transition-all duration-300 group-hover/play:scale-110 group-hover/play:bg-white shadow-2xl shadow-black/20">
                    <svg class="w-8 h-8 text-emerald-600 ml-1 transition-colors duration-300" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                    </svg>
                  </div>
                </div>
                
                <!-- Overlay Text -->
                <div class="absolute bottom-8 left-8 right-8 text-center">
                  <h3 class="text-2xl md:text-3xl font-bold text-white mb-2 drop-shadow-lg">
                    Voir Goodloop en action
                  </h3>
                  <p class="text-white/90 text-lg drop-shadow-md">
                    3 minutes pour comprendre comment améliorer votre bien-être
                  </p>
                </div>
              </div>
  
              <!-- Actual Video Element (hidden initially) -->
              <video 
                ref="videoPlayer"
                v-show="isPlaying"
                class="w-full h-full object-cover"
                controls
                @ended="onVideoEnd"
                @pause="onVideoPause"
              >
                <source src="/src/demo-video.mp4" type="video/mp4">
                <p class="text-white p-8">
                  Votre navigateur ne supporte pas la lecture vidéo. 
                  <a href="/src/demo-video.mp4" class="text-emerald-400 underline">Télécharger la vidéo</a>
                </p>
              </video>
  
              <!-- Loading State -->
              <div 
                v-if="isLoading" 
                class="absolute inset-0 bg-black/50 flex items-center justify-center"
              >
                <div class="flex flex-col items-center text-white">
                  <div class="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin mb-4"></div>
                  <p class="text-lg">Chargement de la vidéo...</p>
                </div>
              </div>
            </div>
  
            <!-- Video Info Bar -->
            <div class="p-6 bg-gradient-to-r from-white to-emerald-50/50">
              <div class="flex flex-col md:flex-row items-center justify-between gap-4">
                <div class="flex items-center space-x-4">
                  <div class="flex items-center space-x-2 text-gray-600">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
                    </svg>
                    <span class="font-medium">3:24</span>
                  </div>
                  <div class="flex items-center space-x-2 text-gray-600">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                      <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"/>
                    </svg>
                    <span class="font-medium">12.5k vues</span>
                  </div>
                </div>
                
                <div class="flex items-center space-x-4">
                  <button 
                    @click="shareVideo"
                    class="flex items-center space-x-2 text-emerald-600 hover:text-emerald-700 transition-colors duration-300 group/share"
                  >
                    <svg class="w-5 h-5 transform transition-transform duration-300 group-hover/share:scale-110" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"/>
                    </svg>
                    <span class="font-medium">Partager</span>
                  </button>
                  
                  <button 
                    @click="$emit('get-started')"
                    class="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/30 active:scale-95"
                  >
                    Essayer maintenant
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Feature Highlights -->
        
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'VideoDemo',
    emits: ['get-started'],
    data() {
      return {
        isPlaying: false,
        isLoading: false
      }
    },
    methods: {
      async playVideo() {
        this.isLoading = true
        
        try {
          // Simulate loading time
          await new Promise(resolve => setTimeout(resolve, 1000))
          
          this.isPlaying = true
          this.isLoading = false
          
          // Start playing the video
          await this.$nextTick()
          if (this.$refs.videoPlayer) {
            await this.$refs.videoPlayer.play()
          }
        } catch (error) {
          console.error('Erreur lors de la lecture de la vidéo:', error)
          this.isLoading = false
          // Fallback: show video controls anyway
          this.isPlaying = true
        }
      },
      
      onVideoEnd() {
        // Video finished, could show replay button or call to action
        this.$emit('get-started')
      },
      
      onVideoPause() {
        // Optional: handle pause events
      },
      
      shareVideo() {
        if (navigator.share) {
          navigator.share({
            title: 'Découvrez Goodloop',
            text: 'Une application révolutionnaire pour votre bien-être quotidien',
            url: window.location.href
          })
        } else {
          // Fallback: copy to clipboard
          navigator.clipboard.writeText(window.location.href)
          // You could show a toast notification here
          alert('Lien copié dans le presse-papier !')
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
  
  /* Video container hover effects */
  .group:hover .absolute.inset-0.flex {
    backdrop-filter: blur(1px);
  }
  
  /* Smooth video transitions */
  video {
    transition: opacity 0.3s ease;
  }
  </style>