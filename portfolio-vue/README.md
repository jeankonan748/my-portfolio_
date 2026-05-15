# Portfolio — Kouassi Jean Nathanaël

Portfolio personnel développé avec **Vue 3** et **Vite**, présentant mon parcours, mes compétences, et mes projets en Data Science / IA et Développement Web.

---

## Aperçu des sections

| Section | Description |
|---|---|
| **Intro** | Présentation rapide avec les rôles |
| **À Propos** | Biographie, parcours académique et expérience |
| **Compétences** | Grille des technologies maîtrisées |
| **Projets** | Vidéos et descriptions des réalisations |
| **Contact** | Email, téléphone et réseaux sociaux |

---

## Stack technique

| Outil | Version | Rôle |
|---|---|---|
| [Vue 3](https://vuejs.org/) | ^3.5 | Framework UI (Composition API) |
| [Vite](https://vitejs.dev/) | ^8.0 | Bundler / dev server |
| [AOS](https://michalsnik.github.io/aos/) | ^2.3 | Animations au scroll |
| [Font Awesome 5](https://fontawesome.com/) | 5.15.4 (CDN) | Icônes |

> **Node.js requis : 18 ou supérieur** (testé sur v24)

---

## Prérequis

- [Node.js](https://nodejs.org/) ≥ 18 — si tu utilises [nvm](https://github.com/nvm-sh/nvm) :
  ```bash
  nvm use 24
  ```
- [npm](https://www.npmjs.com/) ≥ 9

---

## Installation

```bash
# Cloner le dépôt
git clone https://github.com/jean-konan/my-portfolio.git
cd my-portfolio/portfolio-vue

# Installer les dépendances
npm install
```

---

## Commandes

```bash
# Lancer le serveur de développement (http://localhost:5173)
npm run dev

# Construire pour la production
npm run build

# Prévisualiser le build de production
npm run preview
```

---

## Structure du projet

```
portfolio-vue/
├── public/                  # Fichiers statiques servis tels quels
│   ├── images/              # Icônes SVG des compétences + photo
│   ├── project/             # Vidéos des projets (.mp4)
│   └── CV_...pdf            # CV téléchargeable
│
├── src/
│   ├── assets/
│   │   └── css/             # Feuilles de style globales
│   │       ├── base.css     # Reset + grille + typographie
│   │       ├── main.css     # Styles spécifiques au portfolio
│   │       └── vendor.css   # Librairies tierces (AOS, etc.)
│   │
│   ├── components/
│   │   ├── AppHeader.vue    # Navigation + réseaux sociaux
│   │   ├── AppFooter.vue    # Pied de page
│   │   └── sections/
│   │       ├── IntroSection.vue
│   │       ├── AboutSection.vue
│   │       ├── SkillsSection.vue
│   │       ├── ProjectsSection.vue
│   │       └── ContactSection.vue
│   │
│   ├── data/                # Contenu découplé du code (JSON)
│   │   ├── profile.json     # Infos personnelles
│   │   ├── skills.json      # Liste des compétences
│   │   ├── projects.json    # Projets réalisés
│   │   ├── timeline.json    # Parcours & expériences
│   │   └── social.json      # Liens réseaux sociaux
│   │
│   ├── App.vue              # Composant racine
│   └── main.js              # Point d'entrée
│
├── index.html               # Template HTML principal
├── vite.config.js           # Configuration Vite
├── package.json
└── README.md
```

---

## Personnalisation

Tout le contenu est centralisé dans `src/data/`. Aucune modification de code Vue n'est nécessaire pour mettre à jour les informations.

### Modifier le profil
```json
// src/data/profile.json
{
  "name": "Ton Nom",
  "email": "ton@email.com",
  "phone": "00-00-00-00-00",
  "cv": "/ton-cv.pdf"
}
```

### Ajouter un projet
```json
// src/data/projects.json
{
  "id": 3,
  "title": "Nom du projet",
  "categoryLabel": "Data Science / IA",
  "video": "/project/mon-projet.mp4",
  "thumbnail": null,
  "description": "Description du projet.",
  "technologies": ["Python", "TensorFlow"],
  "github": "https://github.com/...",
  "demo": null
}
```

### Ajouter une compétence
```json
// src/data/skills.json
{
  "name": "Docker",
  "icon": "/images/Docker.svg",
  "category": "cloud",
  "level": 70,
  "description": "Conteneurisation d'applications."
}
```

---

## Déploiement

### Build statique

```bash
npm run build
# Le dossier dist/ contient les fichiers à déployer
```

### Plateformes recommandées

| Plateforme | Config |
|---|---|
| **Vercel** | `vercel --prod` (détection automatique Vite) |
| **Netlite** | Build command : `npm run build` — Publish dir : `dist` |
| **GitHub Pages** | Voir [vite-plugin-gh-pages](https://github.com/sfktrkl/vite-plugin-gh-pages) |

---

## Licences tierces

| Ressource | Licence |
|---|---|
| Vue 3 | [MIT](https://github.com/vuejs/core/blob/main/LICENSE) |
| Vite | [MIT](https://github.com/vitejs/vite/blob/main/LICENSE) |
| AOS | [MIT](https://github.com/michalsnik/aos/blob/next/LICENSE) |
| Font Awesome 5 Free | [Icons : CC BY 4.0 — Fonts : SIL OFL 1.1 — Code : MIT](https://fontawesome.com/license/free) |
| Template CSS Epitome | Usage personnel — voir crédits dans `main.css` |

---

## Licence

Le **code source** de ce portfolio est sous licence [MIT](./LICENSE).

> **Note :** Les contenus personnels (photo, CV, vidéos de projets, textes biographiques) restent la propriété exclusive de Kouassi Jean Nathanaël et ne sont **pas** couverts par la licence MIT.

---

## Auteur

**Kouassi Jean Nathanaël**
- LinkedIn : [linkedin.com/in/jean-konan](https://www.linkedin.com/in/jean-konan)
- Twitter/X : [@Jean_Kouassi_k](https://x.com/Jean_Kouassi_k)
- Email : jean.konan@epitech.eu
