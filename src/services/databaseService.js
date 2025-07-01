class JsonDatabaseService {
  constructor() {
    this.initialized = false
    this.storageKey = 'wellness_data'
    this.data = this.getDefaultData()
    this.listeners = new Set()
    this.autoSaveEnabled = true
    this.saveTimeout = null
  }
  // ===================== MÉTHODES NUTRITION =====================

addNutritionData(nutritionData) {
  if (!this.initialized) return false

  try {
    const { date, time, mealType, description, portion, quality } = nutritionData

    const entry = {
      id: this.generateId(),
      date,
      time,
      meal_type: mealType,
      description: description.trim(),
      portion,
      quality,
      created_at: new Date().toISOString()
    }

    this.data.nutrition.push(entry)
    this.data.nutrition.sort((a, b) => new Date(b.date + 'T' + b.time) - new Date(a.date + 'T' + a.time))

    this.saveToMemoryStorage()
    this.emitEvent('nutritionDataAdded', entry)
    return true
  } catch (error) {
    console.error('Error adding nutrition data:', error)
    return false
  }
}

getNutritionChartData(days = 7) {
  if (!this.initialized) return []

  try {
    const startDate = new Date()
    startDate.setDate(startDate.getDate() - days + 1)
    const startDateStr = this.formatDate(startDate)

    const filteredData = this.data.nutrition.filter(entry => entry.date >= startDateStr)

    // Créer un tableau avec toutes les dates de la période
    const dateRange = []
    for (let i = 0; i < days; i++) {
      const date = new Date()
      date.setDate(date.getDate() - days + 1 + i)
      dateRange.push(this.formatDate(date))
    }

    // Grouper les données par date
    const groupedData = {}
    filteredData.forEach(entry => {
      if (!groupedData[entry.date]) {
        groupedData[entry.date] = {
          date: entry.date,
          meals: [],
          qualities: [],
          mealTypes: []
        }
      }
      groupedData[entry.date].meals.push(entry)
      groupedData[entry.date].qualities.push(this.getQualityScore(entry.quality))
      groupedData[entry.date].mealTypes.push(entry.meal_type)
    })

    // Créer le résultat avec toutes les dates
    const results = dateRange.map(date => {
      if (groupedData[date]) {
        const group = groupedData[date]
        const avgQuality = group.qualities.reduce((a, b) => a + b, 0) / group.qualities.length
        const balance = this.calculateNutritionalBalance(group.mealTypes)
        
        return {
          date: date,
          meal_count: group.meals.length,
          avg_quality: avgQuality,
          balance_score: balance,
          has_breakfast: group.mealTypes.includes('breakfast'),
          has_lunch: group.mealTypes.includes('lunch'),
          has_dinner: group.mealTypes.includes('dinner')
        }
      } else {
        return {
          date: date,
          meal_count: 0,
          avg_quality: 0,
          balance_score: 0,
          has_breakfast: false,
          has_lunch: false,
          has_dinner: false
        }
      }
    })

    results.sort((a, b) => a.date.localeCompare(b.date))
    return results
  } catch (error) {
    console.error('Error getting nutrition chart data:', error)
    return []
  }
}

getNutritionStats() {
  if (!this.initialized) return null

  try {
    const weekAgo = new Date()
    weekAgo.setDate(weekAgo.getDate() - 7)
    const weekAgoStr = this.formatDate(weekAgo)

    const recentData = this.data.nutrition.filter(entry => entry.date >= weekAgoStr)
    if (recentData.length === 0) return null

    // Calculer les statistiques
    const qualities = recentData.map(entry => this.getQualityScore(entry.quality))
    const avgQuality = qualities.reduce((a, b) => a + b, 0) / qualities.length

    // Grouper par date pour calculer l'équilibre
    const dateGroups = {}
    recentData.forEach(entry => {
      if (!dateGroups[entry.date]) {
        dateGroups[entry.date] = []
      }
      dateGroups[entry.date].push(entry.meal_type)
    })

    // Calculer l'équilibre moyen
    const balanceScores = Object.values(dateGroups).map(mealTypes => 
      this.calculateNutritionalBalance(mealTypes)
    )
    const avgBalance = balanceScores.length > 0 ? 
      balanceScores.reduce((a, b) => a + b, 0) / balanceScores.length : 0

    // Compter les portions de fruits/légumes (approximation basée sur la qualité)
    const fruitVegPortions = recentData.filter(entry => 
      entry.quality === 'excellent' && 
      (entry.description.toLowerCase().includes('salade') ||
       entry.description.toLowerCase().includes('légume') ||
       entry.description.toLowerCase().includes('fruit'))
    ).length

    // Calculer la régularité des repas
    const mealsPerDay = Object.values(dateGroups).map(meals => meals.length)
    const avgMealsPerDay = mealsPerDay.length > 0 ? 
      mealsPerDay.reduce((a, b) => a + b, 0) / mealsPerDay.length : 0

    return {
      avg_quality: avgQuality,
      balance_score: avgBalance,
      fruit_veg_portions: fruitVegPortions,
      avg_meals_per_day: avgMealsPerDay,
      total_meals: recentData.length,
      days_tracked: Object.keys(dateGroups).length
    }
  } catch (error) {
    console.error('Error getting nutrition stats:', error)
    return null
  }
}

getRecentNutritionEntries(limit = 5) {
  if (!this.initialized) return []

  try {
    return this.data.nutrition.slice(0, limit).map(entry => ({
      id: entry.id,
      meal: entry.description,
      date: this.formatDisplayDate(entry.date),
      time: entry.time,
      type: this.getMealTypeLabel(entry.meal_type),
      quality: this.getQualityLabel(entry.quality),
      emoji: this.getMealEmoji(entry.meal_type, entry.description),
      portion: this.getPortionLabel(entry.portion)
    }))
  } catch (error) {
    console.error('Error getting recent nutrition entries:', error)
    return []
  }
}

// Méthodes utilitaires pour la nutrition
getQualityScore(quality) {
  const scores = {
    'excellent': 3,
    'good': 2,
    'average': 1
  }
  return scores[quality] || 1
}

getQualityLabel(quality) {
  const labels = {
    'excellent': 'Excellent',
    'good': 'Bon',
    'average': 'Moyen'
  }
  return labels[quality] || 'Moyen'
}

getMealTypeLabel(mealType) {
  const labels = {
    'breakfast': 'Petit-déj',
    'lunch': 'Déjeuner',
    'dinner': 'Dîner',
    'snack': 'Collation'
  }
  return labels[mealType] || 'Repas'
}

getPortionLabel(portion) {
  const labels = {
    'small': 'Petite',
    'medium': 'Normale',
    'large': 'Grande'
  }
  return labels[portion] || 'Normale'
}

getMealEmoji(mealType, description) {
  // Emoji basé sur le type de repas et la description
  const desc = description.toLowerCase()
  
  if (desc.includes('salade')) return '🥗'
  if (desc.includes('smoothie') || desc.includes('jus')) return '🥤'
  if (desc.includes('poisson') || desc.includes('saumon')) return '🐟'
  if (desc.includes('yaourt') || desc.includes('yogurt')) return '🥛'
  if (desc.includes('pain') || desc.includes('toast')) return '🍞'
  if (desc.includes('fruit')) return '🍎'
  if (desc.includes('légume')) return '🥬'
  if (desc.includes('viande') || desc.includes('bœuf')) return '🥩'
  if (desc.includes('poulet')) return '🍗'
  if (desc.includes('pâtes') || desc.includes('pasta')) return '🍝'
  if (desc.includes('riz')) return '🍚'
  if (desc.includes('soupe')) return '🍲'
  
  // Fallback basé sur le type de repas
  const typeEmojis = {
    'breakfast': '🌅',
    'lunch': '☀️',
    'dinner': '🌙',
    'snack': '🍎'
  }
  return typeEmojis[mealType] || '🍽️'
}

calculateNutritionalBalance(mealTypes) {
  // Score d'équilibre basé sur la variété des repas
  const uniqueMeals = new Set(mealTypes)
  let score = 0
  
  if (uniqueMeals.has('breakfast')) score += 25
  if (uniqueMeals.has('lunch')) score += 25
  if (uniqueMeals.has('dinner')) score += 25
  if (uniqueMeals.size >= 3) score += 25 // Bonus pour la variété
  
  return Math.min(score, 100)
}
// ===================== MÉTHODES ACTIVITÉ =====================

addActivityData(activityData) {
  if (!this.initialized) return false

  try {
    const { date, time, type, hours, minutes, intensity, notes } = activityData
    
    const totalMinutes = (hours * 60) + minutes
    const calories = this.calculateCalories(type, totalMinutes, intensity)

    const entry = {
      id: this.generateId(),
      date,
      time,
      type,
      duration_minutes: totalMinutes,
      intensity,
      calories,
      notes: notes || '',
      created_at: new Date().toISOString()
    }

    this.data.activity.push(entry)
    this.data.activity.sort((a, b) => new Date(b.date + 'T' + b.time) - new Date(a.date + 'T' + a.time))

    this.saveToMemoryStorage()
    this.emitEvent('activityDataAdded', entry)
    return true
  } catch (error) {
    console.error('Error adding activity data:', error)
    return false
  }
}

getActivityChartData(days = 7) {
  if (!this.initialized) return []

  try {
    const startDate = new Date()
    startDate.setDate(startDate.getDate() - days + 1)
    const startDateStr = this.formatDate(startDate)

    const filteredData = this.data.activity.filter(entry => entry.date >= startDateStr)

    // Créer un tableau avec toutes les dates de la période
    const dateRange = []
    for (let i = 0; i < days; i++) {
      const date = new Date()
      date.setDate(date.getDate() - days + 1 + i)
      dateRange.push(this.formatDate(date))
    }

    // Grouper les données par date
    const groupedData = {}
    filteredData.forEach(entry => {
      if (!groupedData[entry.date]) {
        groupedData[entry.date] = {
          date: entry.date,
          durations: [],
          calories: []
        }
      }
      groupedData[entry.date].durations.push(entry.duration_minutes)
      groupedData[entry.date].calories.push(entry.calories)
    })

    // Créer le résultat avec toutes les dates (incluant celles sans données)
    const results = dateRange.map(date => {
      if (groupedData[date]) {
        const group = groupedData[date]
        return {
          date: date,
          total_duration: group.durations.reduce((a, b) => a + b, 0),
          total_calories: group.calories.reduce((a, b) => a + b, 0),
          sessions: group.durations.length
        }
      } else {
        return {
          date: date,
          total_duration: 0,
          total_calories: 0,
          sessions: 0
        }
      }
    })

    results.sort((a, b) => a.date.localeCompare(b.date))
    return results
  } catch (error) {
    console.error('Error getting activity chart data:', error)
    return []
  }
}

getActivityStats() {
  if (!this.initialized) return null

  try {
    const weekAgo = new Date()
    weekAgo.setDate(weekAgo.getDate() - 7)
    const weekAgoStr = this.formatDate(weekAgo)

    const recentData = this.data.activity.filter(entry => entry.date >= weekAgoStr)
    if (recentData.length === 0) return null

    const totalDuration = recentData.reduce((sum, entry) => sum + entry.duration_minutes, 0)
    const totalCalories = recentData.reduce((sum, entry) => sum + entry.calories, 0)
    
    // Activité favorite (la plus fréquente)
    const activityCounts = {}
    recentData.forEach(entry => {
      activityCounts[entry.type] = (activityCounts[entry.type] || 0) + 1
    })
    
    const favoriteActivity = Object.entries(activityCounts).reduce((a, b) => 
      activityCounts[a[0]] > activityCounts[b[0]] ? a : b, ['', 0])

    // Objectif: 5h par semaine (300 minutes)
    const goalMinutes = 300
    const goalProgress = Math.min((totalDuration / goalMinutes) * 100, 100)

    return {
      total_duration: totalDuration,
      total_calories: totalCalories,
      total_sessions: recentData.length,
      favorite_activity: {
        type: favoriteActivity[0],
        count: favoriteActivity[1],
        label: this.getActivityLabel(favoriteActivity[0])
      },
      goal_progress: goalProgress
    }
  } catch (error) {
    console.error('Error getting activity stats:', error)
    return null
  }
}

getRecentActivityEntries(limit = 5) {
  if (!this.initialized) return []

  try {
    return this.data.activity.slice(0, limit).map(entry => ({
      id: entry.id,
      activity: this.getActivityLabel(entry.type),
      date: this.formatDisplayDate(entry.date),
      time: entry.time,
      duration: this.formatDuration(entry.duration_minutes),
      calories: entry.calories,
      emoji: this.getActivityEmoji(entry.type),
      intensity: this.getIntensityLabel(entry.intensity)
    }))
  } catch (error) {
    console.error('Error getting recent activity entries:', error)
    return []
  }
}

// Calcul des calories basé sur le type d'activité et l'intensité
calculateCalories(type, durationMinutes, intensity) {
  const baseCaloriesPerMinute = {
    'running': 12,
    'cycling': 8,
    'swimming': 11,
    'gym': 6,
    'yoga': 3,
    'walking': 4,
    'tennis': 8,
    'football': 10
  }

  const intensityMultiplier = {
    'light': 0.8,
    'moderate': 1.0,
    'intense': 1.3
  }

  const base = baseCaloriesPerMinute[type] || 5
  const multiplier = intensityMultiplier[intensity] || 1.0
  
  return Math.round(base * durationMinutes * multiplier)
}

getActivityLabel(type) {
  const labels = {
    'running': 'Course',
    'cycling': 'Vélo',
    'swimming': 'Natation',
    'gym': 'Musculation',
    'yoga': 'Yoga',
    'walking': 'Marche',
    'tennis': 'Tennis',
    'football': 'Football'
  }
  return labels[type] || 'Activité'
}

getActivityEmoji(type) {
  const emojis = {
    'running': '🏃‍♂️',
    'cycling': '🚴‍♀️',
    'swimming': '🏊‍♂️',
    'gym': '🏋️‍♀️',
    'yoga': '🧘‍♀️',
    'walking': '🚶‍♂️',
    'tennis': '🎾',
    'football': '⚽'
  }
  return emojis[type] || '🏃‍♂️'
}

getIntensityLabel(intensity) {
  const labels = {
    'light': 'Légère',
    'moderate': 'Modérée',
    'intense': 'Intense'
  }
  return labels[intensity] || 'Modérée'
}
  getDefaultData() {
    return {
      sleep: [],
      mood: [],
      activity: [],
      nutrition: [],
      meta: {
        created: new Date().toISOString(),
        lastUpdated: new Date().toISOString(),
        version: '1.0.0'
      }
    }
  }

  // Système d'événements pour la réactivité
  addEventListener(type, listener) {
    this.listeners.add({ type, listener })
  }

  removeEventListener(type, listener) {
    this.listeners.forEach(item => {
      if (item.type === type && item.listener === listener) {
        this.listeners.delete(item)
      }
    })
  }

  emitEvent(type, data) {
    this.listeners.forEach(item => {
      if (item.type === type) {
        try {
          item.listener(data)
        } catch (error) {
          console.error('Error in event listener:', error)
        }
      }
    })
  }

  async init() {
    if (this.initialized) return

    try {
      // Charger depuis le stockage en mémoire d'abord
      this.loadFromMemoryStorage()

      // Si pas de données, générer des exemples
      if (this.data.sleep.length === 0) {
        this.generateSampleData()
      }

      this.initialized = true
      this.emitEvent('initialized', this.data)
      console.log('✅ Database service initialized successfully')
    } catch (error) {
      console.error('Error initializing database:', error)
      this.data = this.getDefaultData()
      this.initialized = true
    }
  }

  // Stockage en mémoire avec sauvegarde automatique vers fichier
  loadFromMemoryStorage() {
    try {
      // Simuler le chargement depuis un fichier
      const saved = this.getStoredData()
      if (saved) {
        this.data = { ...this.getDefaultData(), ...saved }
      } else {
        this.data = this.getDefaultData()
        this.saveToMemoryStorage()
      }
    } catch (error) {
      console.error('Error loading from storage:', error)
      this.data = this.getDefaultData()
    }
  }

  saveToMemoryStorage() {
    try {
      this.data.meta.lastUpdated = new Date().toISOString()
      
      // Sauvegarder en mémoire
      this.setStoredData(this.data)
      
      // Sauvegarder vers fichier avec debounce
      if (this.autoSaveEnabled) {
        this.debouncedFileSave()
      }
      
      this.emitEvent('dataSaved', this.data)
    } catch (error) {
      console.error('Error saving to storage:', error)
    }
  }

  // Méthodes de stockage (peuvent être remplacées selon l'environnement)
  getStoredData() {
    // En environnement navigateur, utiliser sessionStorage ou variable globale
    if (typeof window !== 'undefined') {
      if (window.wellnessData) {
        return window.wellnessData
      }
      // Fallback vers sessionStorage si localStorage n'est pas disponible
      try {
        const stored = sessionStorage.getItem(this.storageKey)
        return stored ? JSON.parse(stored) : null
      } catch {
        return null
      }
    }
    return null
  }

  setStoredData(data) {
    if (typeof window !== 'undefined') {
      // Stocker dans une variable globale
      window.wellnessData = data
      
      // Également en sessionStorage comme backup
      try {
        sessionStorage.setItem(this.storageKey, JSON.stringify(data))
      } catch (error) {
        console.warn('SessionStorage not available:', error)
      }
    }
  }

  // Sauvegarde vers fichier avec debounce
  debouncedFileSave() {
    if (this.saveTimeout) {
      clearTimeout(this.saveTimeout)
    }
    
    this.saveTimeout = setTimeout(() => {
      this.saveToFile()
    }, 1000) // Attendre 1 seconde avant de sauvegarder
  }

  // Sauvegarde vers fichier JSON
  saveToFile() {
    try {
      const dataStr = JSON.stringify(this.data, null, 2)
      const blob = new Blob([dataStr], { type: 'application/json' })
      const url = URL.createObjectURL(blob)
      
      // Créer un lien de téléchargement automatique
      const a = document.createElement('a')
      a.href = url
      a.download = `wellness-data-${new Date().toISOString().split('T')[0]}.json`
      a.style.display = 'none'
      
      // Auto-téléchargement en arrière-plan
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      
      URL.revokeObjectURL(url)
      
      console.log('📁 Data saved to file successfully')
      this.emitEvent('fileSaved', { filename: a.download })
    } catch (error) {
      console.error('Error saving to file:', error)
    }
  }

  // Charger depuis un fichier
  async loadFromFile(file) {
    try {
      const text = await file.text()
      const importedData = JSON.parse(text)
      
      // Valider la structure des données
      if (this.validateDataStructure(importedData)) {
        this.data = { ...this.getDefaultData(), ...importedData }
        this.saveToMemoryStorage()
        this.emitEvent('dataLoaded', this.data)
        return true
      } else {
        throw new Error('Invalid data structure')
      }
    } catch (error) {
      console.error('Error loading from file:', error)
      return false
    }
  }

  validateDataStructure(data) {
    return data && 
           typeof data === 'object' &&
           Array.isArray(data.sleep) &&
           Array.isArray(data.mood) &&
           Array.isArray(data.activity) &&
           Array.isArray(data.nutrition)
  }

  generateId() {
    return Date.now() + Math.random().toString(36).substr(2, 9)
  }

  formatDate(date) {
    return new Date(date).toISOString().split('T')[0]
  }

  // ===================== MÉTHODES SOMMEIL =====================

  addSleepData(sleepData) {
    if (!this.initialized) return false

    try {
      const { date, bedtime, wakeup, quality } = sleepData

      const bedtimeParts = bedtime.split(':')
      const wakeupParts = wakeup.split(':')
      
      let bedtimeDate = new Date()
      bedtimeDate.setHours(parseInt(bedtimeParts[0]), parseInt(bedtimeParts[1]), 0, 0)
      
      let wakeupDate = new Date()
      wakeupDate.setHours(parseInt(wakeupParts[0]), parseInt(wakeupParts[1]), 0, 0)
      
      if (wakeupDate <= bedtimeDate) {
        wakeupDate.setDate(wakeupDate.getDate() + 1)
      }
      
      const durationMinutes = (wakeupDate - bedtimeDate) / 60000

      const entry = {
        id: this.generateId(),
        date,
        bedtime,
        wakeup,
        duration_minutes: Math.round(durationMinutes),
        quality: parseInt(quality),
        created_at: new Date().toISOString()
      }

      // Supprimer l'entrée existante pour cette date
      this.data.sleep = this.data.sleep.filter(item => item.date !== date)
      this.data.sleep.push(entry)
      this.data.sleep.sort((a, b) => new Date(b.date) - new Date(a.date))

      this.saveToMemoryStorage()
      this.emitEvent('sleepDataAdded', entry)
      return true
    } catch (error) {
      console.error('Error adding sleep data:', error)
      return false
    }
  }

  getSleepChartData(days = 7) {
    if (!this.initialized) return []

    try {
      const startDate = new Date()
      startDate.setDate(startDate.getDate() - days + 1)
      const startDateStr = this.formatDate(startDate)

      const filteredData = this.data.sleep.filter(entry => entry.date >= startDateStr)

      // Créer un tableau avec toutes les dates de la période
      const dateRange = []
      for (let i = 0; i < days; i++) {
        const date = new Date()
        date.setDate(date.getDate() - days + 1 + i)
        dateRange.push(this.formatDate(date))
      }

      // Grouper les données par date
      const groupedData = {}
      filteredData.forEach(entry => {
        if (!groupedData[entry.date]) {
          groupedData[entry.date] = {
            date: entry.date,
            durations: [],
            qualities: []
          }
        }
        groupedData[entry.date].durations.push(entry.duration_minutes)
        groupedData[entry.date].qualities.push(entry.quality)
      })

      // Créer le résultat avec toutes les dates (incluant celles sans données)
      const results = dateRange.map(date => {
        if (groupedData[date]) {
          const group = groupedData[date]
          return {
            date: date,
            avg_duration: group.durations.reduce((a, b) => a + b, 0) / group.durations.length,
            avg_quality: group.qualities.reduce((a, b) => a + b, 0) / group.qualities.length
          }
        } else {
          return {
            date: date,
            avg_duration: 0,
            avg_quality: 0
          }
        }
      })

      results.sort((a, b) => a.date.localeCompare(b.date))
      return results
    } catch (error) {
      console.error('Error getting sleep chart data:', error)
      return []
    }
  }

  getSleepStats() {
    if (!this.initialized) return null

    try {
      const weekAgo = new Date()
      weekAgo.setDate(weekAgo.getDate() - 7)
      const weekAgoStr = this.formatDate(weekAgo)

      const recentData = this.data.sleep.filter(entry => entry.date >= weekAgoStr)
      if (recentData.length === 0) return null

      const totalDuration = recentData.reduce((sum, entry) => sum + entry.duration_minutes, 0)
      const avgQuality = recentData.reduce((sum, entry) => sum + entry.quality, 0) / recentData.length
      const bestNight = recentData.reduce((best, current) => 
        current.duration_minutes > best.duration_minutes ? current : best, recentData[0])

      return {
        avg_duration: totalDuration / recentData.length,
        avg_quality: avgQuality,
        total_nights: recentData.length,
        best_night: bestNight
      }
    } catch (error) {
      console.error('Error getting sleep stats:', error)
      return null
    }
  }

  getRecentSleepEntries(limit = 5) {
    if (!this.initialized) return []

    try {
      return this.data.sleep.slice(0, limit).map(entry => ({
        id: entry.id,
        date: this.formatDisplayDate(entry.date),
        bedtime: entry.bedtime,
        wakeup: entry.wakeup,
        duration: this.formatDuration(entry.duration_minutes),
        quality: this.getQualityLabel(entry.quality),
        emoji: this.getQualityEmoji(entry.quality)
      }))
    } catch (error) {
      console.error('Error getting recent sleep entries:', error)
      return []
    }
  }

  // ===================== MÉTHODES HUMEUR =====================

  addMoodData(moodData) {
    if (!this.initialized) return false

    try {
      const { date, time, score, notes } = moodData

      const entry = {
        id: this.generateId(),
        date,
        time,
        score: parseInt(score),
        notes: notes || '',
        emoji: this.getMoodEmoji(score),
        label: this.getMoodLabel(score),
        created_at: new Date().toISOString()
      }

      // Ajouter l'entrée (permet plusieurs entrées par jour)
      this.data.mood.push(entry)
      this.data.mood.sort((a, b) => new Date(b.date + 'T' + b.time) - new Date(a.date + 'T' + a.time))

      this.saveToMemoryStorage()
      this.emitEvent('moodDataAdded', entry)
      return true
    } catch (error) {
      console.error('Error adding mood data:', error)
      return false
    }
  }

  getMoodChartData(days = 7) {
    if (!this.initialized) return []

    try {
      const startDate = new Date()
      startDate.setDate(startDate.getDate() - days + 1)
      const startDateStr = this.formatDate(startDate)

      const filteredData = this.data.mood.filter(entry => entry.date >= startDateStr)

      // Créer un tableau avec toutes les dates de la période
      const dateRange = []
      for (let i = 0; i < days; i++) {
        const date = new Date()
        date.setDate(date.getDate() - days + 1 + i)
        dateRange.push(this.formatDate(date))
      }

      // Grouper les données par date
      const groupedData = {}
      filteredData.forEach(entry => {
        if (!groupedData[entry.date]) {
          groupedData[entry.date] = {
            date: entry.date,
            scores: []
          }
        }
        groupedData[entry.date].scores.push(entry.score)
      })

      // Créer le résultat avec toutes les dates (incluant celles sans données)
      const results = dateRange.map(date => {
        if (groupedData[date]) {
          const group = groupedData[date]
          return {
            date: date,
            avg_score: group.scores.reduce((a, b) => a + b, 0) / group.scores.length,
            count: group.scores.length
          }
        } else {
          return {
            date: date,
            avg_score: 0,
            count: 0
          }
        }
      })

      results.sort((a, b) => a.date.localeCompare(b.date))
      return results
    } catch (error) {
      console.error('Error getting mood chart data:', error)
      return []
    }
  }

  getMoodStats() {
    if (!this.initialized) return null

    try {
      const weekAgo = new Date()
      weekAgo.setDate(weekAgo.getDate() - 7)
      const weekAgoStr = this.formatDate(weekAgo)

      const recentData = this.data.mood.filter(entry => entry.date >= weekAgoStr)
      if (recentData.length === 0) return null

      const scores = recentData.map(entry => entry.score)
      const avgScore = scores.reduce((sum, score) => sum + score, 0) / scores.length
      
      const bestDay = recentData.reduce((best, current) => 
        current.score > best.score ? current : best, recentData[0])

      // Calculer la tendance (différence entre les 3 derniers jours et les 3 précédents)
      const sortedData = recentData.sort((a, b) => new Date(a.date) - new Date(b.date))
      let trend = 0
      if (sortedData.length >= 6) {
        const firstHalf = sortedData.slice(0, 3).map(e => e.score)
        const secondHalf = sortedData.slice(-3).map(e => e.score)
        const firstAvg = firstHalf.reduce((a, b) => a + b, 0) / firstHalf.length
        const secondAvg = secondHalf.reduce((a, b) => a + b, 0) / secondHalf.length
        trend = (secondAvg - firstAvg) / firstAvg
      }

      // Calculer la série (jours consécutifs avec des entrées)
      const uniqueDates = [...new Set(recentData.map(entry => entry.date))].sort()
      let streak = 0
      const today = this.formatDate(new Date())
      
      for (let i = 0; i < 7; i++) {
        const checkDate = new Date()
        checkDate.setDate(checkDate.getDate() - i)
        const checkDateStr = this.formatDate(checkDate)
        
        if (uniqueDates.includes(checkDateStr)) {
          streak++
        } else {
          break
        }
      }

      return {
        avg_score: avgScore,
        trend: trend,
        best_day: bestDay,
        streak: streak,
        total_entries: recentData.length
      }
    } catch (error) {
      console.error('Error getting mood stats:', error)
      return null
    }
  }

  getRecentMoodEntries(limit = 5) {
    if (!this.initialized) return []

    try {
      return this.data.mood.slice(0, limit).map(entry => ({
        id: entry.id,
        date: this.formatDisplayDate(entry.date),
        time: entry.time,
        score: entry.score,
        feeling: entry.label,
        emoji: entry.emoji,
        notes: entry.notes
      }))
    } catch (error) {
      console.error('Error getting recent mood entries:', error)
      return []
    }
  }

  getMoodEmoji(score) {
    const emojis = {
      1: '😭', 2: '😢', 3: '😔', 4: '😐', 5: '😶',
      6: '🙂', 7: '😊', 8: '😄', 9: '😁', 10: '🤩'
    }
    return emojis[score] || '😶'
  }

  getMoodLabel(score) {
    const labels = {
      1: 'Très mal',
      2: 'Mal',
      3: 'Pas bien',
      4: 'Moyen',
      5: 'Neutre',
      6: 'Plutôt bien',
      7: 'Bien',
      8: 'Très bien',
      9: 'Excellent',
      10: 'Fantastique'
    }
    return labels[score] || 'Neutre'
  }

  // ===================== UTILITAIRES =====================

  formatDuration(minutes) {
    if (!minutes) return '0h 00m'
    const hours = Math.floor(minutes / 60)
    const mins = minutes % 60
    return `${hours}h ${mins.toString().padStart(2, '0')}m`
  }

  formatDisplayDate(dateStr) {
    if (!dateStr) return ''
    const date = new Date(dateStr)
    const today = new Date()
    const yesterday = new Date(today)
    yesterday.setDate(yesterday.getDate() - 1)

    if (dateStr === this.formatDate(today)) return "Aujourd'hui"
    if (dateStr === this.formatDate(yesterday)) return "Hier"
    return date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' })
  }

  getQualityLabel(quality) {
    return {
      1: 'Excellent',
      2: 'Bon',
      3: 'Moyen',
      4: 'Mauvais'
    }[quality] || 'Inconnu'
  }

  getQualityEmoji(quality) {
    return {
      1: '😴',
      2: '😊',
      3: '😐',
      4: '😵'
    }[quality] || '❓'
  }

  generateSampleData() {
    const existingDates = new Set(this.data.sleep.map(entry => entry.date))
    const existingMoodDates = new Set(this.data.mood.map(entry => entry.date))
    
    // Générer des données de sommeil
    for (let i = 0; i < 7; i++) {
      const date = new Date()
      date.setDate(date.getDate() - i)
      const dateStr = this.formatDate(date)
      
      // Ne pas générer de données si elles existent déjà
      if (existingDates.has(dateStr)) continue

      const sleepHours = 6.5 + Math.random() * 2.5
      const sleepMinutes = Math.round(sleepHours * 60)
      const quality = Math.floor(Math.random() * 4) + 1

      const bedtimeHour = 22 + Math.floor(Math.random() * 3)
      const bedtimeMin = Math.floor(Math.random() * 4) * 15
      const bedtime = `${bedtimeHour.toString().padStart(2, '0')}:${bedtimeMin.toString().padStart(2, '0')}`

      const wakeupTime = new Date(`2000-01-01T${bedtime}`)
      wakeupTime.setMinutes(wakeupTime.getMinutes() + sleepMinutes)
      const wakeup = wakeupTime.toTimeString().substr(0, 5)

      const sleepEntry = {
        id: this.generateId(),
        date: dateStr,
        bedtime,
        wakeup,
        duration_minutes: sleepMinutes,
        quality,
        created_at: new Date().toISOString()
      }

      this.data.sleep.push(sleepEntry)
    }

    // Générer des données d'humeur
    for (let i = 0; i < 7; i++) {
      const date = new Date()
      date.setDate(date.getDate() - i)
      const dateStr = this.formatDate(date)
      
      // Ne pas générer de données si elles existent déjà
      if (existingMoodDates.has(dateStr)) continue

      // Générer 1-3 entrées d'humeur par jour
      const entriesPerDay = Math.floor(Math.random() * 3) + 1
      
      for (let j = 0; j < entriesPerDay; j++) {
        const hour = 8 + Math.floor(Math.random() * 12) // Entre 8h et 20h
        const minute = Math.floor(Math.random() * 60)
        const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`
        
        const score = Math.floor(Math.random() * 10) + 1 // 1-10
        
        const notes = [
          '', // Parfois pas de notes
          'Bonne journée !',
          'Un peu fatigué',
          'Très productif',
          'Belle météo',
          'Stress au travail',
          'Soirée relaxante',
          'Activité sportive'
        ][Math.floor(Math.random() * 8)]

        const moodEntry = {
          id: this.generateId(),
          date: dateStr,
          time,
          score,
          notes,
          emoji: this.getMoodEmoji(score),
          label: this.getMoodLabel(score),
          created_at: new Date().toISOString()
        }

        this.data.mood.push(moodEntry)
      }
    }
    
    this.data.sleep.sort((a, b) => new Date(b.date) - new Date(a.date))
    this.data.mood.sort((a, b) => new Date(b.date + 'T' + b.time) - new Date(a.date + 'T' + a.time))
    
    this.saveToMemoryStorage()
    this.emitEvent('sampleDataGenerated', {
      sleep: this.data.sleep.length,
      mood: this.data.mood.length
    })
  }

  // ===================== IMPORT/EXPORT =====================

  exportData() {
    return JSON.parse(JSON.stringify(this.data))
  }

  async importData(newData) {
    try {
      if (this.validateDataStructure(newData)) {
        this.data = { ...this.getDefaultData(), ...newData }
        this.saveToMemoryStorage()
        this.emitEvent('dataImported', this.data)
        return true
      }
      return false
    } catch (error) {
      console.error('Error importing data:', error)
      return false
    }
  }

  clearData() {
    this.data = this.getDefaultData()
    this.saveToMemoryStorage()
    this.emitEvent('dataCleared', this.data)
  }

  // ===================== GESTION DES PRÉFÉRENCES =====================

  setAutoSave(enabled) {
    this.autoSaveEnabled = enabled
  }

  getAutoSave() {
    return this.autoSaveEnabled
  }
}

const databaseService = new JsonDatabaseService()

// Helpers globaux pour debug
if (typeof window !== 'undefined') {
  window.databaseService = databaseService
  
  window.wellnessHelpers = {
    downloadData: () => databaseService.saveToFile(),
    loadFromFile: (file) => databaseService.loadFromFile(file),
    clearAll: () => databaseService.clearData(),
    generateSample: () => databaseService.generateSampleData(),
    getStats: () => databaseService.exportData()
  }
}


export default databaseService