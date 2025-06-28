import { signInAndGetUser as msalSignIn } from '../../lib/microsoftGraph.js'

// État global de l'authentification
let currentUser = null
let isAuthenticated = false

// Récupérer l'utilisateur depuis le localStorage au démarrage
const savedUser = localStorage.getItem('goodloop_user')
if (savedUser) {
  try {
    currentUser = JSON.parse(savedUser)
    isAuthenticated = true
  } catch (error) {
    console.error('Erreur lors du parsing de l\'utilisateur sauvegardé:', error)
    localStorage.removeItem('goodloop_user')
  }
}

// Fonction pour sauvegarder l'utilisateur
const saveUser = (user) => {
  currentUser = user
  isAuthenticated = true
  localStorage.setItem('goodloop_user', JSON.stringify(user))
}

// Fonction pour supprimer l'utilisateur
const clearUser = () => {
  currentUser = null
  isAuthenticated = false
  localStorage.removeItem('goodloop_user')
}

// Connexion avec Microsoft
export const signInAndGetUser = async () => {
  try {
    const msalUser = await msalSignIn()
    
    // Créer un utilisateur formaté
    const user = {
      id: msalUser.localAccountId || Date.now().toString(),
      name: msalUser.name || msalUser.username?.split('@')[0] || 'Utilisateur',
      email: msalUser.username || msalUser.email,
      provider: 'microsoft',
      createdAt: new Date().toISOString(),
      ...msalUser
    }
    
    // Sauvegarder l'utilisateur
    saveUser(user)
    
    return {
      success: true,
      user: user
    }
  } catch (error) {
    console.error('Erreur lors de la connexion Microsoft:', error)
    throw new Error('Erreur lors de la connexion avec Microsoft')
  }
}

// Déconnexion
export const signOut = () => {
  clearUser()
  return {
    success: true
  }
}

// Vérifier si l'utilisateur est connecté
export const isUserAuthenticated = () => {
  return isAuthenticated && currentUser !== null
}

// Obtenir l'utilisateur actuel
export const getCurrentUser = () => {
  return currentUser
}

// Inscription avec email/mot de passe (simulation)
export const registerWithEmail = async (userData) => {
  try {
    // Simulation d'une API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Créer un utilisateur simulé
    const user = {
      id: Date.now().toString(),
      name: userData.name,
      email: userData.email,
      provider: 'email',
      createdAt: new Date().toISOString()
    }
    
    // Sauvegarder l'utilisateur
    saveUser(user)
    
    return {
      success: true,
      user: user
    }
  } catch (error) {
    console.error('Erreur lors de l\'inscription:', error)
    throw new Error('Erreur lors de la création du compte')
  }
}

// Connexion avec email/mot de passe (simulation)
export const signInWithEmail = async (credentials) => {
  try {
    // Simulation d'une API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Simuler une vérification des credentials
    if (!credentials.email || !credentials.password) {
      throw new Error('Email et mot de passe requis')
    }
    
    // Créer un utilisateur simulé
    const user = {
      id: Date.now().toString(),
      name: credentials.email.split('@')[0], // Utiliser la partie avant @ comme nom
      email: credentials.email,
      provider: 'email',
      createdAt: new Date().toISOString()
    }
    
    // Sauvegarder l'utilisateur
    saveUser(user)
    
    return {
      success: true,
      user: user
    }
  } catch (error) {
    console.error('Erreur lors de la connexion:', error)
    throw new Error('Email ou mot de passe incorrect')
  }
}

// Service d'authentification principal
const authService = {
  signInAndGetUser,
  signOut,
  isUserAuthenticated,
  getCurrentUser,
  registerWithEmail,
  signInWithEmail
}

export default authService 