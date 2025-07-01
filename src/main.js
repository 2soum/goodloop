import './assets/global.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

// Import du service de base de données amélioré
import databaseService from './services/databaseService'

// Configuration globale
window.DEBUG_MODE = process.env.NODE_ENV === 'development'
window.databaseReady = false

const app = createApp(App)

// Configuration des plugins
app.use(createPinia())
app.use(router)

// Gestion d'erreur globale pour Vue
app.config.errorHandler = (err, vm, info) => {
  console.error('❌ Vue Error:', err)
  console.error('📍 Component:', info)
  if (window.DEBUG_MODE) {
    console.error('🔍 Vue Instance:', vm)
  }
}

// Configuration globale de l'app
app.config.globalProperties.$database = databaseService
app.config.globalProperties.$debugMode = window.DEBUG_MODE

// Messages de démarrage
console.log('🚀 Starting Wellness App...')
console.log('🏗️ Environment:', process.env.NODE_ENV)
console.log('🔧 Debug mode:', window.DEBUG_MODE)

// Monter l'application
app.mount('#app')
console.log('✅ App mounted successfully')

// Initialisation de la base de données
async function initializeDatabase() {
  console.log('📊 Initializing database service...')
  
  try {
    await databaseService.init()
    window.databaseReady = true
    
    // Rendre le service disponible globalement
    window.databaseService = databaseService
    
    // Émettre un événement personnalisé
    window.dispatchEvent(new CustomEvent('databaseReady', {
      detail: { 
        service: databaseService,
        timestamp: new Date().toISOString()
      }
    }))
    
    console.log('✅ Database service initialized successfully')
    
    // Statistiques en mode debug
    if (window.DEBUG_MODE) {
      const stats = databaseService.exportData()
      console.log('📈 Database stats:', {
        sleep: stats.sleep?.length || 0,
        mood: stats.mood?.length || 0,
        activity: stats.activity?.length || 0,
        nutrition: stats.nutrition?.length || 0,
        lastUpdated: stats.meta?.lastUpdated,
        version: stats.meta?.version
      })
    }
    
  } catch (error) {
    console.error('❌ Database initialization failed:', error)
    window.databaseReady = false
    
    // Émettre un événement d'erreur
    window.dispatchEvent(new CustomEvent('databaseError', {
      detail: { 
        error: error.message || 'Unknown error',
        timestamp: new Date().toISOString()
      }
    }))
    
    // En production, continuer sans base de données
    if (process.env.NODE_ENV === 'production') {
      console.warn('⚠️ App will continue with limited functionality')
    }
  }
}

// Lancer l'initialisation de la base de données
initializeDatabase()

// Gestionnaires d'événements globaux
window.addEventListener('error', (event) => {
  console.error('❌ Global error:', event.error)
  if (window.DEBUG_MODE) {
    console.error('📍 Error details:', {
      message: event.message,
      filename: event.filename,
      lineno: event.lineno,
      colno: event.colno,
      stack: event.error?.stack
    })
  }
})

window.addEventListener('unhandledrejection', (event) => {
  console.error('❌ Unhandled promise rejection:', event.reason)
  if (window.DEBUG_MODE) {
    console.error('📍 Promise details:', {
      reason: event.reason,
      promise: event.promise
    })
  }
})

// Utilitaires globaux améliorés
window.wellnessHelpers = {
  // Vérifier l'état de la base de données
  checkStatus: () => {
    const status = {
      ready: window.databaseReady,
      initialized: databaseService.initialized,
      autoSave: databaseService.getAutoSave(),
      dataCount: {
        sleep: 0,
        mood: 0,
        activity: 0,
        nutrition: 0
      }
    }
    
    if (window.databaseReady) {
      const data = databaseService.exportData()
      status.dataCount = {
        sleep: data.sleep?.length || 0,
        mood: data.mood?.length || 0,
        activity: data.activity?.length || 0,
        nutrition: data.nutrition?.length || 0
      }
    }
    
    console.log('🔍 Wellness App Status:', status)
    return status
  },
  
  // Télécharger les données
  downloadData: () => {
    if (!window.databaseReady) {
      console.warn('⚠️ Database not ready')
      return false
    }
    
    try {
      databaseService.saveToFile()
      console.log('📁 Data download initiated')
      return true
    } catch (error) {
      console.error('❌ Download failed:', error)
      return false
    }
  },
  
  // Charger des données depuis un fichier
  loadFromFile: async (file) => {
    if (!window.databaseReady) {
      console.warn('⚠️ Database not ready')
      return false
    }
    
    if (!file || !(file instanceof File)) {
      console.error('❌ Invalid file provided')
      return false
    }
    
    try {
      const success = await databaseService.loadFromFile(file)
      if (success) {
        console.log('📤 Data loaded successfully from file')
      } else {
        console.error('❌ Failed to load data from file')
      }
      return success
    } catch (error) {
      console.error('❌ Error loading file:', error)
      return false
    }
  },
  
  // Générer des données d'exemple
  generateSampleData: () => {
    if (!window.databaseReady) {
      console.warn('⚠️ Database not ready')
      return false
    }
    
    try {
      databaseService.generateSampleData()
      console.log('🧪 Sample data generated')
      return true
    } catch (error) {
      console.error('❌ Failed to generate sample data:', error)
      return false
    }
  },
  
  // Nettoyer toutes les données
  clearAllData: () => {
    if (!window.databaseReady) {
      console.warn('⚠️ Database not ready')
      return false
    }
    
    if (confirm('⚠️ Êtes-vous sûr de vouloir supprimer toutes les données ? Cette action est irréversible.')) {
      try {
        databaseService.clearData()
        console.log('🗑️ All data cleared')
        return true
      } catch (error) {
        console.error('❌ Failed to clear data:', error)
        return false
      }
    }
    return false
  },
  
  // Basculer la sauvegarde automatique
  toggleAutoSave: () => {
    if (!window.databaseReady) {
      console.warn('⚠️ Database not ready')
      return false
    }
    
    const current = databaseService.getAutoSave()
    databaseService.setAutoSave(!current)
    console.log(`🔄 Auto-save ${!current ? 'enabled' : 'disabled'}`)
    return !current
  },
  
  // Exporter les statistiques
  getStats: () => {
    if (!window.databaseReady) {
      console.warn('⚠️ Database not ready')
      return null
    }
    
    try {
      const data = databaseService.exportData()
      const stats = {
        totalEntries: (data.sleep?.length || 0) + (data.mood?.length || 0) + 
                     (data.activity?.length || 0) + (data.nutrition?.length || 0),
        sleep: {
          total: data.sleep?.length || 0,
          recentStats: databaseService.getSleepStats()
        },
        lastUpdated: data.meta?.lastUpdated,
        version: data.meta?.version,
        created: data.meta?.created
      }
      
      console.log('📊 Wellness Statistics:', stats)
      return stats
    } catch (error) {
      console.error('❌ Failed to get stats:', error)
      return null
    }
  },
  
  // Créer un fichier d'entrée pour l'upload
  createFileInput: () => {
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = '.json'
    input.style.display = 'none'
    
    input.onchange = async (event) => {
      const file = event.target.files[0]
      if (file) {
        const success = await window.wellnessHelpers.loadFromFile(file)
        if (success) {
          alert('✅ Données importées avec succès !')
        } else {
          alert('❌ Erreur lors de l\'importation des données')
        }
      }
      document.body.removeChild(input)
    }
    
    document.body.appendChild(input)
    input.click()
  }
}

// Messages de debug et aide
if (window.DEBUG_MODE) {
  console.log('🛠️ Debug helpers available at window.wellnessHelpers')
  console.log('📝 Available commands:')
  console.log('  🔍 window.wellnessHelpers.checkStatus() - Check app status')
  console.log('  📁 window.wellnessHelpers.downloadData() - Download data')
  console.log('  📤 window.wellnessHelpers.createFileInput() - Upload data')
  console.log('  🧪 window.wellnessHelpers.generateSampleData() - Generate sample data')
  console.log('  🗑️ window.wellnessHelpers.clearAllData() - Clear all data')
  console.log('  🔄 window.wellnessHelpers.toggleAutoSave() - Toggle auto-save')
  console.log('  📊 window.wellnessHelpers.getStats() - Get statistics')
}

// Écouter les événements de l'application
window.addEventListener('databaseReady', (event) => {
  console.log('🎉 Database ready event received:', event.detail)
})

window.addEventListener('databaseError', (event) => {
  console.error('💥 Database error event received:', event.detail)
})

console.log('🎉 Wellness App startup complete!')

// Export pour les tests et l'utilisation externe
export { app, databaseService }

// Ajouter des métadonnées à l'objet global
window.wellnessApp = {
  version: '2.0.0',
  environment: process.env.NODE_ENV,
  debugMode: window.DEBUG_MODE,
  startTime: new Date().toISOString(),
  vue: app,
  database: databaseService,
  helpers: window.wellnessHelpers
}