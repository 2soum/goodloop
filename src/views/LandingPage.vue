<template>
    <div class="min-h-screen bg-white overflow-hidden relative">
      <!-- Glowing green background effects -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute top-24 right-10 w-80 h-80 bg-emerald-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div class="absolute -top-32 -left-32 w-64 h-64 bg-green-300/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div class="absolute bottom-24 left-1/3 w-56 h-56 bg-emerald-300/25 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div class="absolute top-1/2 -right-24 w-60 h-60 bg-green-400/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div class="absolute -bottom-16 right-1/4 w-64 h-64 bg-emerald-500/15 rounded-full blur-3xl animate-pulse delay-1500"></div>
      </div>
  
      <!-- Header -->
      <Header @login="handleLogin" />
  
      <!-- Hero Section -->
      <Hero @get-started="handleGetStarted" @demo="handleDemo" />

      <!-- Video Demo Section -->
      <VideoDemo />

      <!-- Feature Section -->
      <FeatureSection />

      <!-- Pricing Section -->
      <PricingSection />

      <!-- FAQ Section -->
      <FaqSection />

      <!-- Final CTA Footer -->
      <FinalCTAFooter />
    </div>
  </template>
  
  <script>
  import Header from '../components/landing/Header.vue';
  import Hero from '../components/landing/Hero.vue';
  import VideoDemo from '../components/landing/VideoDemo.vue';
  import FeatureSection from '../components/landing/FeatureSection.vue';
  import PricingSection from '../components/landing/PricingSection.vue';
  import FaqSection from '../components/landing/FaqSection.vue';
  import FinalCTAFooter from '../components/landing/FinalCTAFooter.vue';
  export default {
    name: 'LandingPage',
    components: {
      Header,
      Hero,
      VideoDemo,
      FeatureSection,
      PricingSection,
      FaqSection,
      FinalCTAFooter
    },
    methods: {
      handleLogin() {
        console.log('Connexion à implémenter')
        // TODO: Rediriger vers Microsoft OAuth
      },
      handleGetStarted() {
        console.log('Commencer - redirection vers inscription')
        // TODO: Rediriger vers le dashboard ou inscription
      },
      handleDemo() {
        console.log('Voir la démo - à implémenter')
        // TODO: Rediriger ou afficher la démo
      }
    }
  }
  </script>
  
  <style scoped>
  @keyframes fade-in-down {
    0% { opacity: 0; transform: translateY(-20px); }
    100% { opacity: 1; transform: translateY(0); }
  }
  
  @keyframes fade-in-up {
    0% { opacity: 0; transform: translateY(20px); }
    100% { opacity: 1; transform: translateY(0); }
  }
  
  @keyframes slide-in-left {
    0% { opacity: 0; transform: translateX(-30px); }
    100% { opacity: 1; transform: translateX(0); }
  }
  
  @keyframes slide-in-right {
    0% { opacity: 0; transform: translateX(30px); }
    100% { opacity: 1; transform: translateX(0); }
  }
  
  @keyframes slide-in-up {
    0% { opacity: 0; transform: translateY(30px); }
    100% { opacity: 1; transform: translateY(0); }
  }
  
  .animate-fade-in-down { animation: fade-in-down 0.8s ease-out; }
  .animate-fade-in-up { animation: fade-in-up 0.8s ease-out; }
  .animate-slide-in-left { animation: slide-in-left 0.8s ease-out; }
  .animate-slide-in-right { animation: slide-in-right 0.8s ease-out; }
  .animate-slide-in-up { animation: slide-in-up 0.8s ease-out; }
  
  .delay-200 { animation-delay: 0.2s; }
  .delay-300 { animation-delay: 0.3s; }
  .delay-500 { animation-delay: 0.5s; }
  .delay-1000 { animation-delay: 1s; }
  .delay-1500 { animation-delay: 1.5s; }
  .delay-2000 { animation-delay: 2s; }
  </style>