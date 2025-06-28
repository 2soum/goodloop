# Configuration de l'Authentification Microsoft OAuth

## Configuration requise

Pour que l'authentification Microsoft fonctionne, vous devez configurer les variables d'environnement suivantes :

### 1. Créer un fichier `.env` à la racine du projet

```bash
# Microsoft OAuth Configuration
VITE_OAUTH_CLIENT_ID=your_microsoft_client_id_here

# Application Configuration
VITE_APP_TITLE=Goodloop
VITE_APP_DESCRIPTION=Application de bien-être et de suivi personnel
```

### 2. Obtenir un Client ID Microsoft

1. Allez sur [Azure Portal](https://portal.azure.com)
2. Créez une nouvelle application ou utilisez une existante
3. Dans "Authentification", ajoutez les URLs de redirection :
   - `http://localhost:5173` (pour le développement)
   - `http://localhost:5173/` (avec slash final)
4. Copiez le Client ID et ajoutez-le dans votre fichier `.env`

### 3. Permissions requises

L'application demande les permissions suivantes :
- `User.Read` : Pour lire les informations de base du profil
- `Mail.Read` : Pour accéder aux emails (optionnel)

## Fonctionnalités implémentées

### ✅ Authentification Microsoft OAuth
- Connexion avec Microsoft Account
- Gestion des tokens et sessions
- Stockage sécurisé des informations utilisateur

### ✅ Authentification Email/Mot de passe (simulation)
- Inscription avec email et mot de passe
- Connexion avec email et mot de passe
- Validation des formulaires

### ✅ Protection des routes
- Routes protégées pour le dashboard et les pages de journal
- Redirection automatique vers la page de connexion
- Redirection vers le dashboard si déjà connecté

### ✅ Gestion de l'état utilisateur
- Affichage des informations utilisateur dans le dashboard
- Bouton de déconnexion fonctionnel
- Persistance de la session

## Utilisation

1. **Connexion Microsoft** : Cliquez sur "Continuer avec Microsoft" sur la page de connexion
2. **Inscription Email** : Remplissez le formulaire d'inscription avec vos informations
3. **Connexion Email** : Utilisez votre email et mot de passe pour vous connecter
4. **Déconnexion** : Cliquez sur le bouton "Déconnexion" dans le dashboard ou la sidebar

## Structure des fichiers

```
src/
├── services/
│   └── auth.js              # Service d'authentification principal
├── views/
│   ├── Login.vue            # Page de connexion
│   ├── Register.vue         # Page d'inscription
│   └── Dashboard.vue        # Dashboard principal
├── components/
│   └── dashboard/
│       └── SideBar.vue      # Sidebar avec info utilisateur
└── router/
    └── index.js             # Configuration des routes protégées

lib/
└── microsoftGraph.js        # Configuration MSAL et Microsoft Graph
```

## Notes importantes

- L'authentification email/mot de passe est simulée pour la démonstration
- Les données utilisateur sont stockées dans le localStorage
- Pour la production, implémentez une vraie API backend
- Configurez correctement les URLs de redirection dans Azure Portal 