# PRD — Portfolio Professionnel de Mohamed Abidi
### AI Engineer / Data Scientist — Version 1.0

---

## 0. Note de cadrage

Ce document est un **Product Requirements Document (PRD)** complet, conçu pour être transmis tel quel à un agent ou une équipe de développement pour implémentation. Il ne contient aucun code. Toutes les décisions techniques ont été **tranchées** (pas de liste d'options non résolues) et justifiées.

Informations réelles extraites du CV fourni et utilisées dans ce document :

- **Nom** : Mohamed Abidi
- **Titre actuel** : Étudiant ingénieur 3e année, Data Science & AI Engineering — ESPRIM
- **Formation** : ESPRIM (2024–présent), ESPRIT School of Business (2022–2023), Bac Sciences Expérimentales (2019)
- **GitHub** : github.com/Mohamed-abidi-95
- **Contact** : Mohamed.abidi@esprim.tn
- **Langues** : Français (B2), Anglais (B2), Arabe (natif)
- **Localisation** : Tunisie
- **Expérience clé** :
  - **DRÄXLMAIER** (2026) — IT & AI Engineering Intern → monitoring infra virtualisée + plateforme AI-GRC (.NET 8, PostgreSQL, Docker, RAG, ISO 27001)
  - **ETIC Europe** (2025–2026) — AI & Computer Vision Developer → inspection qualité industrielle (C#, .NET, OpenCvSharp, YOLOv8, ONNX Runtime, OCR, SQL Server)
  - **OMNutrition** (2026) — Data Scientist & Full-Stack → RandomForestRegressor R²=0.993, FastAPI, React
  - **CyberHunter** (2026) — Full-Stack → plateforme de threat detection, MITRE ATT&CK, Slim 4/PHP
  - Projets additionnels : gestion de cabinet médical (Symfony), ESPRIM Career (plateforme carrière)
- **Certifications** : AI Fundamentals, Data Governance Fundamentals, EU AI Act Literacy (DataCamp)

Le portfolio doit être honnête sur le statut actuel (étudiant-ingénieur avec expérience projet réelle en entreprise), tout en projetant une image d'ingénieur AI sérieux, capable de production. Il ne doit **jamais** sur-vendre un statut senior qui n'existe pas — un recruteur européen vérifie vite, et la crédibilité est l'actif le plus précieux ici.

---

## 1. Executive Summary

Le portfolio est un site statique (Astro) présentant Mohamed Abidi comme un **AI Engineer en devenir, déjà capable de livrer des systèmes AI/ML de bout en bout** (du pipeline data à l'architecture backend), avec une spécialisation double : **Generative AI / RAG / Agents** d'un côté, **Computer Vision industrielle** de l'autre.

Deux projets phares structurent la narration : **AI-GRC Platform** (DRÄXLMAIER) et **ETIC Label Inspection** (ETIC Europe), présentés comme de véritables études de cas d'ingénierie (problème → architecture → pipeline AI → résultats). Trois projets secondaires (OMNutrition, CyberHunter, ESPRIM Career) viennent démontrer la polyvalence (ML classique, cybersécurité, full-stack).

Le site est statique, rapide (Lighthouse ≥ 95), hébergé gratuitement sur Cloudflare Pages, sans backend serveur nécessaire pour la V1 (le formulaire de contact utilise un service tiers). Une fonctionnalité interactive unique — un **AI Architecture Visualizer** cliquable — sert de fil rouge entre la homepage et les études de cas, sans devenir un gadget superflu.

---

## 2. Goals

**Objectif primaire** : obtenir des réponses positives (entretien) de recruteurs et hiring managers en Allemagne, Suisse, Pays-Bas, pays scandinaves, pour des postes AI/ML Engineer, GenAI Engineer, Data Scientist, Computer Vision Engineer.

**Objectifs secondaires** :
- Crédibiliser un profil "étudiant-ingénieur" en le positionnant sur la valeur livrée (systèmes réels, pas des exercices académiques).
- Servir de point de référence unique (lien envoyé par email/LinkedIn) plus fort qu'un CV PDF seul.
- Démontrer, par la qualité du site lui-même, une compétence d'ingénierie logicielle (perf, architecture, code propre).

**Non-objectifs** : ce n'est pas un blog, pas une plateforme communautaire, pas un produit SaaS. Pas de compte utilisateur, pas de CMS lourd, pas de sur-ingénierie.

---

## 3. Target Audience

| Persona | Contexte | Ce qu'il/elle regarde en premier | Temps disponible |
|---|---|---|---|
| **Recruteur tech (non-ingénieur)** | Sourcing LinkedIn, volume élevé de profils | Titre, stack, projets visuels, CV | 20-30 sec |
| **Hiring manager / Lead AI** | Présélection technique | Architecture des projets, choix techniques, rigueur du raisonnement | 2-5 min |
| **Ingénieur senior (entretien)** | Préparation d'entretien technique | Détails d'implémentation, code GitHub, décisions d'architecture, limites assumées | 10+ min |

Le site doit satisfaire les trois avec une **profondeur progressive** : superficiel en 10 secondes (hero + stack), riche en 2 minutes (case studies), profond à la demande (liens GitHub, code, README détaillés).

---

## 4. Positioning

**Statement de positionnement** :
> "Mohamed Abidi conçoit des systèmes d'IA de bout en bout — du pipeline de données à l'architecture backend en production — à la croisée de la Generative AI (RAG, agents, LLMs) et de la Computer Vision industrielle."

**Différenciateurs réels (pas des éléments marketing vides)** :
1. Expérience concrète en environnement industriel/enterprise (DRÄXLMAIER, ETIC Europe), pas uniquement des projets académiques.
2. Double compétence rare : GenAI/RAG **et** Computer Vision industrielle avec contraintes réelles (calibration pixel→mm, caméras industrielles).
3. Sensibilité architecture/sécurité (RBAC, audit trail, ISO 27001) — signal fort pour les entreprises européennes régulées (DE/CH particulièrement sensibles à la compliance).
4. Capacité full-stack démontrée (FastAPI, Symfony, React, .NET) qui rassure sur l'autonomie de livraison.

**Ton** : factuel, technique, sobre. Aucune hyperbole ("passionate", "ninja", "rockstar" interdits). Les recruteurs européens séniors sont insensibles au marketing et sensibles à la précision.

---

## 5. Information Architecture

Décision : **6 pages**, pas plus. Chaque page supplémentaire dilue l'attention et complique la maintenance MDX. "Skills", "Experience" et "Education" sont **fusionnées dans /about** plutôt que séparées — un recruteur ne visite jamais 9 pages différentes.

```
/                      Home
/about                 About (profil, parcours, formation, compétences par domaine)
/projects              Projects index (grille des 5 projets)
/projects/ai-grc               Case study #1
/projects/etic-label-inspection Case study #2
/projects/omnutrition           Case study #3 (format court)
/projects/cyberhunter            Case study #4 (format court)
/lab                   AI Lab (démos interactives)
/contact               Contact
```

Navigation globale (header) : `Home · Projects · AI Lab · About · Contact` + bouton CTA "Download CV". 5 items maximum, conforme aux standards UX de navigation (règle des 7±2, mais plus c'est court, mieux c'est pour un portfolio).

Footer : liens sociaux (GitHub, LinkedIn, Email), mini sitemap, mention de la stack technique du site lui-même (signal de crédibilité technique — "Built with Astro, Tailwind, deployed on Cloudflare Pages").

---

## 6. UX Strategy

**Principe directeur : "Scannable first, deep on demand."**

- La homepage doit transmettre 80% du message même si le recruteur ne scrolle que 2 écrans.
- Chaque section a un seul objectif clair (pas de section qui mélange plusieurs messages).
- Les CTA sont hiérarchisés : CTA primaire unique visible par section (jamais 2 CTA de même poids côte à côte).
- Aucune interaction n'est requise pour comprendre le contenu — toute interactivité (Architecture Visualizer, démos AI Lab) est un **bonus optionnel**, jamais un passage obligé.
- Storytelling en entonnoir : Qui je suis → Ce que je sais construire (preuve) → Comment le vérifier (GitHub/case studies) → Comment me contacter.

**Parcours recruteur optimal (le "30 secondes")** :
1. Hero : nom, titre, spécialisation (3 sec)
2. Bandeau stack + 2 projets phares en aperçu visuel (10 sec)
3. Scroll jusqu'aux liens CV/LinkedIn/GitHub (10 sec)
4. Décision : cliquer sur une case study ou repartir avec le CV téléchargé (7 sec)

---

## 7. Visual Direction

**Références déclarées** : Linear, Vercel, Stripe, Raycast, Notion — **sans copier**. Direction retenue : **"Technical minimalism"**, proche de Linear/Vercel mais avec une identité propre construite sur le concept de "systèmes/couches" (cohérent avec le profil architecture AI).

**Décisions fermes** :
- **Palette** : fond neutre presque noir en dark mode (`#0A0A0B`), quasi-blanc cassé en light mode (`#FAFAFA`). Une seule couleur d'accent : un bleu-indigo technique (`#5B6EF5` approx.) utilisé avec parcimonie (CTA, liens actifs, highlights de diagramme). Pas de dégradés flashy, pas de violet/rose "AI startup cliché".
- **Typographie** : une police sans-serif géométrique moderne pour les titres (ex. Geist ou Inter), une police monospace pour tout ce qui touche au code/stack/architecture (ex. JetBrains Mono ou Geist Mono) — renforce le signal "engineering".
- **Dark mode par défaut**, light mode disponible (toggle), car le public cible (devs/recruteurs tech) est majoritairement en dark mode et cela renforce le positionnement "engineering produit".
- **Animations** : micro-interactions uniquement (fade-in au scroll, hover states, transitions 150-250ms). Aucune animation 3D, aucun parallax lourd, respect strict de `prefers-reduced-motion`.
- **Iconographie** : line icons fines et cohérentes (Lucide) plutôt que des emoji ou icônes 3D.
- **Diagrammes d'architecture** : style schématique épuré (boîtes + flèches, inspiré des diagrammes d'architecture cloud AWS/GCP modernes), pas de skeuomorphisme.

---

## 8. Page-by-Page Specification

### 8.1 Home (`/`)

**Objectif** : convaincre en 30 secondes + orienter vers les case studies ou le CV.

**Structure (ordre optimal, justifié en section 9)** :
1. Hero
2. Bandeau stack technique (bref, visuel)
3. Featured Projects (2 cartes : AI-GRC + ETIC, format riche)
4. AI Architecture Visualizer (interactif, condensé)
5. Autres projets (3 cartes plus compactes : OMNutrition, CyberHunter, ESPRIM Career)
6. Compétences par domaine (aperçu condensé, lien vers /about pour le détail)
7. Parcours bref (2-3 lignes + lien vers /about)
8. Contact / CTA final

**Composants UI** : `Hero`, `StackBadgeRow`, `FeaturedProjectCard`, `ArchitectureVisualizer`, `CompactProjectCard`, `SkillDomainGrid` (aperçu), `CTASection`.

**CTA** : "View Projects" (primaire, hero) + "Download CV" (secondaire, hero) + "Get in touch" (CTA final).

**Responsive** : sections en pile verticale sur mobile, Architecture Visualizer devient une liste verticale cliquable (voir 11.2) plutôt qu'un diagramme horizontal.

**Animations** : fade-in + translate-y léger (16px) au scroll, une seule fois (pas de re-trigger).

### 8.2 About (`/about`)

**Objectif** : donner la profondeur (parcours réel, formation, compétences détaillées) pour le hiring manager qui veut vérifier la cohérence du profil.

**Contenu** :
- Introduction courte (3-4 phrases, honnête sur le statut : étudiant-ingénieur 3e année ESPRIM, avec expérience projet en environnement industriel/enterprise).
- Timeline d'expérience (DRÄXLMAIER → ETIC Europe → OMNutrition/CyberHunter → projets antérieurs), format vertical avec dates, rôle, 2-3 bullets d'impact.
- Formation : ESPRIM (2024-présent), ESPRIT School of Business (2022-2023), Baccalauréat (2019).
- Certifications (DataCamp : AI Fundamentals, Data Governance Fundamentals, EU AI Act Literacy) avec liens de vérification.
- Compétences par domaine (grille complète, voir section 11).
- Langues (FR B2, EN B2, AR natif).

**Composants** : `Timeline`, `EducationCard`, `CertificationBadge`, `SkillDomainGrid` (version complète).

**CTA** : "Download full CV (PDF)".

### 8.3 Projects Index (`/projects`)

**Objectif** : vue d'ensemble filtrable des projets.

**Contenu** : grille de 5 projets. Filtres légers par domaine (`AI/GenAI`, `Computer Vision`, `Full-Stack`, `Cybersecurity`) — filtrage côté client, pas de backend.

**Composants** : `ProjectGrid`, `FilterTabs`, `ProjectCard` (variante liste, avec stack tags, statut, lien case study).

### 8.4 Case Study — AI-GRC Platform (`/projects/ai-grc`)

Voir section 9 (spécification détaillée). Format long, complet, toutes les sous-sections demandées.

### 8.5 Case Study — ETIC Label Inspection (`/projects/etic-label-inspection`)

Voir section 9. Format long, complet.

### 8.6 Case Study — OMNutrition (`/projects/omnutrition`) et CyberHunter (`/projects/cyberhunter`)

Format **court** (mini case study) : Problem, Architecture (diagramme simple), Technology, Results (métriques réelles : R²=0.993 pour OMNutrition), What I learned. Pas de sections Challenges/Solutions détaillées — ces deux projets soutiennent la polyvalence sans diluer l'attention portée aux deux projets phares.

### 8.7 AI Lab (`/lab`)

Voir section 10.

### 8.8 Contact (`/contact`)

**Objectif** : conversion finale, friction minimale.

**Contenu** : formulaire minimal (nom, email, message) + liens directs (email, LinkedIn, GitHub) + mention disponibilité (ex. "Available for internships / working student positions in Europe, remote or relocation") + localisation générale ("Based in Tunisia, open to relocation in the EU/CH").

**Composants** : `ContactForm` (voir section 19 pour la sécurité), `SocialLinksRow`, `AvailabilityBadge`.

**Pas de page séparée pour "Skills" ni "Experience" ni "Education"** — fusionnées dans About, comme décidé en section 5, pour éviter la fragmentation.

---

## 9. Project Case Study Specification

Gabarit obligatoire pour AI-GRC et ETIC Label Inspection (format long) :

| Section | Contenu attendu |
|---|---|
| **Header** | Titre, sous-titre en une ligne, tags stack, lien GitHub (si public), lien démo (si applicable), contexte (entreprise/date) |
| **Problem** | Le problème métier réel en 3-5 phrases. Ex. AI-GRC : "Les équipes de conformité perdent un temps considérable à croiser manuellement les politiques internes avec les exigences ISO 27001 et à détecter les écarts de compliance." |
| **Context** | Environnement (entreprise, contrainte industrielle/enterprise), équipe, rôle exact de Mohamed |
| **Architecture** | Diagramme (SVG statique, pas nécessairement interactif) : couches Frontend/API/Orchestration/Data/Infra |
| **Technology** | Tableau technologie → rôle (ex. PostgreSQL → stockage documentaire + audit trail ; Docker → isolation des services) |
| **AI Pipeline** | Pour AI-GRC : ingestion documentaire → chunking → embeddings → vector DB → retrieval → LLM → détection de gaps. Pour ETIC : acquisition caméra → preprocessing OpenCV → inference YOLOv8/ONNX → OCR → calibration pixel/mm → validation → persistance SQL Server |
| **Engineering** | Backend (architecture modulaire .NET), Database (schéma, RBAC, audit trail), APIs (REST), Security (RBAC, ISO 27001), Testing (approche), Deployment (Docker) |
| **Challenges** | 2-3 défis techniques réels et spécifiques (ex. calibration pixel→mm pour mesures fiables ; latence RAG vs pertinence) |
| **Solutions** | Comment résolus concrètement |
| **Results** | Métriques disponibles ; si aucune métrique chiffrée officielle n'existe, formuler en résultats qualitatifs honnêtes (ex. "solution intégrée dans le pipeline QA de production chez ETIC Europe") plutôt que d'inventer des chiffres |
| **Screenshots/Demo** | Captures d'écran ou GIFs courts (optimisés, lazy-loaded), ou diagramme si le code est confidentiel |
| **What I learned** | 3-4 phrases de recul technique honnête, y compris une limite assumée |

**Règle de crédibilité stricte** : ne jamais inventer de métriques (%, temps gagné, ROI) qui ne sont pas dans le CV ou vérifiables. Pour AI-GRC (confidentialité DRÄXLMAIER probable), formuler l'architecture et le rôle sans divulguer de données propriétaires — ajouter une mention discrète "Certains détails sont généralisés pour respecter la confidentialité du projet."

---

## 10. AI Lab Specification

**Décision** : l'AI Lab contient **une seule démo interactive réelle**, pas cinq gadgets à moitié finis. Une démo fonctionnelle et bien exécutée vaut infiniment plus que quatre démos bancales.

**Démo retenue : "Document Q&A (mini-RAG)"**
- Justification : cohérente avec le projet AI-GRC (RAG), démontre une compétence directement vérifiable, complexité raisonnable pour un site statique + une function serverless légère.
- Fonctionnement : l'utilisateur pose une question sur un corpus restreint et fixe (ex. 3-5 documents publics : CV, description des projets, un document technique neutre). Pipeline retrieval (embeddings pré-calculés, stockés en JSON statique, similarité cosinus calculée côté client en JS) + appel à un LLM via une **Cloudflare Worker function** qui masque la clé API.
- Contrainte de coût : requêtes limitées (ex. 5 requêtes / session via rate limiting IP côté Worker) pour éviter l'explosion de coût API.

**Éléments écartés (voir section 22, AVOID)** :
- AI Agent visualization en live (trop complexe pour la valeur ajoutée)
- Computer Vision demo en live dans le navigateur (poids des modèles ONNX en client-side, risque de lenteur/mauvaise première impression)
- Model inference générique (pas assez différenciant)

→ Le Computer Vision est démontré via **screenshots/vidéo courte dans la case study ETIC**, pas via une démo live dans l'AI Lab. C'est plus fiable et plus rapide à livrer.

---

## 11. Interactive Components

### 11.1 AI Architecture Visualizer — décision : **OUI, mais scoped strictement**

Après analyse (section 24), cette fonctionnalité est **pertinente et pas un gadget**, à condition de respecter 3 règles :
1. Un seul composant réutilisé (homepage en version condensée à 5 nœuds, case study AI-GRC en version complète à 8 nœuds) — pas de composant réinventé à chaque page.
2. Implémenté en SVG + JS vanilla léger (pas de librairie de diagramme lourde comme React Flow pour un cas d'usage aussi simple).
3. Dégradation gracieuse : sur mobile, le diagramme devient une **liste verticale accordéon** cliquable (même contenu, présentation adaptée), jamais un diagramme horizontal illisible en scroll latéral.

**Comportement** : clic/tap sur un nœud → panneau latéral (desktop) ou accordéon inline (mobile) affichant : rôle, technologie, input, output, responsabilité. Un nœud actif est visuellement mis en évidence (halo, couleur d'accent), les autres nœuds passent en opacité réduite.

**Contenu du flow (version AI-GRC, complète)** :
`User → API (.NET) → Orchestrator → Retriever → Vector DB → LLM → Compliance Gap Detector → Response`

### 11.2 Skill Domain Grid

Grille de cartes par domaine (voir section 12), chaque carte se déplie légèrement au hover pour révéler 1-2 lignes de contexte d'usage réel (ex. "OpenCV — utilisé pour le preprocessing d'images dans le système ETIC").

### 11.3 Filtrage des projets

Filtres client-side simples (pas de recherche plein texte, pas de backend) sur `/projects`.

---

## 12. Design System

**Typography**
- Titres : police géométrique sans-serif (ex. Geist Sans), tailles en échelle modulaire (1.25 ratio) : 14 / 16 / 20 / 25 / 31 / 39 / 49px.
- Corps de texte : 16px desktop / 15px mobile, line-height 1.6.
- Code/stack/labels techniques : police monospace (ex. Geist Mono ou JetBrains Mono), toujours en `uppercase` + `letter-spacing` léger pour les badges de tags.

**Spacing** : échelle en base 4px (4, 8, 12, 16, 24, 32, 48, 64, 96, 128). Pas de valeurs arbitraires hors échelle.

**Border radius** : cohérent à 3 niveaux — `6px` (badges, boutons), `12px` (cartes), `20px` (grands conteneurs/modales).

**Cards** : fond légèrement plus clair que le background (dark mode : `#111113`), bordure 1px subtile (`rgba(255,255,255,0.08)`), hover = légère élévation (shadow douce + bordure accent à 20% opacité), pas de scale au hover (évite l'effet "template Bootstrap").

**Buttons** :
- Primaire : fond accent plein, texte contrastant, radius 6px.
- Secondaire : bordure fine, fond transparent, texte couleur primaire.
- Jamais plus d'un bouton primaire visible par écran.

**Badges** (stack tags) : fond neutre discret, texte monospace, radius 6px, pas de couleurs multiples par techno (uniformité = crédibilité, évite l'effet "arc-en-ciel de logos").

**Navigation** : header sticky, fond avec `backdrop-blur`, hauteur 64px, transition d'opacité au scroll (transparent en haut de page → fond translucide après 50px).

**Dark/Light mode** : dark par défaut, toggle en header, persistance via variable CSS + `localStorage` côté navigateur (site statique, pas de dépendance backend), transition 200ms sur les couleurs.

**Code blocks** : thème sombre cohérent (ex. base du thème "GitHub Dark" ou équivalent), utilisés avec parcimonie (seulement si des extraits de code sont vraiment pertinents dans une case study — à éviter en excès).

**Diagrammes** : palette limitée à 3 couleurs (neutre, accent, succès/highlight), traits fins (1.5-2px), coins arrondis légers sur les boîtes (8px).

**Animations** : durée standard 150-250ms, easing `ease-out`, jamais de bounce/elastic (trop "startup app"), respect total de `prefers-reduced-motion: reduce` (toutes les animations désactivées, transitions instantanées).

---

## 13. Technical Architecture

**Décision de stack (tranchée)** :

| Couche | Choix | Justification |
|---|---|---|
| Framework | **Astro** | Génération statique par défaut, "islands architecture" = JS minimal, idéal pour un portfolio majoritairement statique avec quelques composants interactifs isolés |
| Composants interactifs | **React** (islands, `client:visible`) | Uniquement pour `ArchitectureVisualizer` et `RagDemo` ; le reste du site est en `.astro` pur (zéro JS) |
| Langage | **TypeScript** partout | Cohérence, sécurité de type, signal de rigueur pour un profil "software engineer" |
| Styling | **Tailwind CSS** | Vitesse de développement, cohérence avec le design system (config Tailwind = source de vérité des tokens) |
| Contenu | **MDX** (Content Collections Astro) | Les case studies sont écrites en MDX avec frontmatter typé (Zod schema) — pas de CMS externe |
| Hébergement | **Cloudflare Pages** | Gratuit à vie pour ce volume de trafic, CDN mondial performant en Europe (cible géographique), intégration native des Cloudflare Workers pour la fonction RAG demo, déploiement automatique depuis GitHub |
| Fonction serverless | **Cloudflare Worker** (1 seule fonction : `/api/rag-query`) | Nécessaire uniquement pour masquer la clé API du LLM dans la démo AI Lab |
| CI/CD | **GitHub Actions** (lint + build check) + déploiement natif Cloudflare Pages (Git integration) | Cloudflare Pages se branche directement sur GitHub sans Action de déploiement dédiée ; GitHub Actions sert uniquement à la vérification qualité (lint, typecheck, build) sur chaque PR |
| Analytics | **Cloudflare Web Analytics** | Gratuit, sans cookie, sans bannière RGPD nécessaire, natif à l'hébergeur déjà choisi |
| Formulaire de contact | **Web3Forms ou Cloudflare Turnstile + Worker** | Pas de backend dédié ; Turnstile pour l'anti-spam (gratuit, remplace reCAPTCHA sans dégrader l'UX) |

**Pourquoi Cloudflare Pages plutôt que Vercel** : les deux sont excellents pour Astro. Cloudflare Pages est retenu car (1) 100% gratuit sans limite de bande passante contraignante pour un portfolio, (2) le réseau Cloudflare a d'excellentes performances en Europe (cible géographique prioritaire), (3) l'intégration native avec Cloudflare Workers permet d'implémenter la démo RAG et la protection anti-spam **sans sortir de l'écosystème unique**, réduisant la complexité opérationnelle à un seul provider.

---

## 14. Repository Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── ui/                  # Boutons, badges, cards génériques (design system)
│   │   ├── sections/            # Hero, FeaturedProjects, SkillGrid, ContactSection...
│   │   ├── visualizer/          # ArchitectureVisualizer (React island)
│   │   └── lab/                 # RagDemo (React island)
│   ├── layouts/
│   │   ├── BaseLayout.astro     # <head>, SEO, fonts, header/footer
│   │   └── CaseStudyLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── projects/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro     # génère les 4 case studies depuis content collection
│   │   ├── lab.astro
│   │   ├── contact.astro
│   │   └── api/
│   │       └── rag-query.ts     # (si Cloudflare Pages Functions utilisées directement)
│   ├── content/
│   │   ├── config.ts            # Zod schemas des collections
│   │   └── projects/
│   │       ├── ai-grc.mdx
│   │       ├── etic-label-inspection.mdx
│   │       ├── omnutrition.mdx
│   │       └── cyberhunter.mdx
│   ├── data/
│   │   ├── skills.ts             # données structurées des compétences par domaine
│   │   ├── experience.ts         # timeline d'expérience
│   │   └── rag-corpus.json       # embeddings pré-calculés pour la démo RAG
│   └── styles/
│       └── global.css            # tokens Tailwind custom + variables CSS dark/light
├── public/
│   ├── cv/mohamed-abidi-cv.pdf
│   ├── images/                   # screenshots, optimisées en .webp/.avif
│   └── favicon, robots.txt, og-image.png
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

**Responsabilités** :
- `components/ui` : atomes purs, sans logique métier, réutilisables partout.
- `components/sections` : blocs de page complets, assemblés dans les fichiers `.astro` de `pages/`.
- `content/projects` : unique source de vérité pour les case studies — toute case study future s'ajoute en créant un fichier MDX, sans toucher au code.
- `data/` : données structurées non-éditoriales (compétences, expérience) séparées du contenu narratif MDX, pour permettre un rendu structuré (grilles, timelines) sans parsing de markdown.

---

## 15. SEO

**Title (home)** : `Mohamed Abidi — AI Engineer | Generative AI, RAG, Computer Vision`
**Meta description (home)** : `AI Engineer specialized in Generative AI, RAG, AI Agents and Computer Vision. Building production-grade AI systems — from enterprise GRC platforms to industrial inspection systems.`

**Mots-clés cibles** : AI Engineer, Machine Learning Engineer, Generative AI Engineer, RAG Engineer, LLM Engineer, Computer Vision Engineer, AI Agents, Python AI Developer, .NET AI Engineer, ISO 27001 AI, Data Scientist Tunisia Europe.

**Open Graph / Twitter Cards** : image OG dédiée (1200x630, générée statiquement, pas de génération dynamique côté serveur), title/description dupliqués depuis le frontmatter de chaque page.

**Structured Data (JSON-LD)** : type `Person` sur la homepage (name, jobTitle, url, sameAs: [GitHub, LinkedIn]), type `Article`/`CreativeWork` sur chaque case study.

**Sitemap** : généré automatiquement via `@astrojs/sitemap`.
**robots.txt** : autorise tout crawl, référence le sitemap.
**Canonical URLs** : générées automatiquement par page (évite duplication si domaine + sous-domaine Cloudflare Pages coexistent).

---

## 16. Performance

**Objectifs chiffrés** : Lighthouse Performance ≥ 95, Accessibility ≥ 95, Best Practices ≥ 95, SEO = 100. LCP < 1.5s, CLS < 0.05, INP < 200ms.

**Comment Astro y contribue** :
- Zéro JS par défaut sur les pages statiques (Home hors visualizer, About, Projects index, Contact) — seul le HTML/CSS est livré.
- **Islands architecture** : `ArchitectureVisualizer` et `RagDemo` sont chargés en `client:visible` (hydratation uniquement quand le composant entre dans le viewport), jamais en `client:load`.
- Images : format `.webp`/`.avif` via `astro:assets`, `loading="lazy"` par défaut sauf image LCP (hero), dimensions explicites pour éviter le CLS.
- Fonts : auto-hébergées (pas de Google Fonts CDN externe), `font-display: swap`, sous-ensemble de caractères latin uniquement.
- CSS : Tailwind purge automatique en production, un seul fichier CSS critique inliné pour le above-the-fold.
- Pas de librairie de diagramme lourde (React Flow, D3 complet) — SVG + JS vanilla pour le visualizer.

---

## 17. Accessibility

- HTML sémantique strict (`<nav>`, `<main>`, `<article>` pour les case studies, `<section>` avec `aria-label` explicites).
- Navigation clavier complète : tous les composants interactifs (visualizer, toggle dark mode, filtres projets) accessibles via Tab/Enter/Espace, avec `focus-visible` stylé (anneau accent 2px, jamais `outline: none` sans remplacement).
- Contraste : ratio minimum 4.5:1 vérifié sur toutes les combinaisons texte/fond du design system (dark et light mode).
- `alt` text descriptif sur tous les screenshots (pas de "image1.png", description fonctionnelle : "Dashboard de détection de compliance gaps affichant 3 écarts ISO 27001").
- `prefers-reduced-motion: reduce` : désactive toutes les transitions/animations, y compris dans le visualizer.
- Support lecteur d'écran : le contenu du visualizer (panneau de détail au clic) est annoncé via `aria-live="polite"`, et une alternative textuelle complète du flow AI est présente dans le DOM (pas seulement visuelle).

---

## 18. Security

| Surface | Risque | Mitigation |
|---|---|---|
| Formulaire de contact | Spam, injection | Cloudflare Turnstile (anti-bot invisible) + validation stricte côté Worker + honeypot field |
| Clé API LLM (démo RAG) | Exposition frontend | Jamais dans le bundle client — appel exclusivement via Cloudflare Worker qui détient le secret en variable d'environnement chiffrée |
| Endpoint `/api/rag-query` | Abus / explosion de coût | Rate limiting par IP (ex. 5 req/session via Cloudflare Rate Limiting ou logique KV), taille de requête plafonnée, corpus fixe (pas d'upload utilisateur) |
| Dépendances npm | Vulnérabilités | `npm audit` intégré au pipeline GitHub Actions, Dependabot activé |
| Domaine/DNS | Détournement | DNS géré directement chez Cloudflare (déjà l'hébergeur), DNSSEC activé |
| Contenu MDX | Aucun risque (pas d'input utilisateur dans le contenu) | N/A — contenu 100% éditorial, pas de génération dynamique basée sur input externe |

**Principe non négociable confirmé** : aucune clé API n'apparaît jamais dans le code frontend ni dans le bundle JS livré au navigateur.

---

## 19. Deployment

```
Développement local (Astro dev server)
        ↓
Push sur GitHub (branche main / PR)
        ↓
GitHub Actions : lint (ESLint) + typecheck (tsc) + build check
        ↓
Cloudflare Pages : build automatique déclenché par Git integration
        ↓
Déploiement sur *.pages.dev (preview pour chaque PR, production sur main)
        ↓
Domaine personnalisé (ex. mohamedabidi.dev) configuré en DNS chez Cloudflare
```

**Stratégie retenue** : Cloudflare Pages avec **Git integration native** (pas de workflow GitHub Actions custom pour le déploiement lui-même — Cloudflare gère le build et le déploiement directement depuis le repo GitHub à chaque push). GitHub Actions est utilisé uniquement en amont comme **garde-fou qualité** (bloque la fusion d'une PR si lint/typecheck/build échouent), pas comme pipeline de déploiement. C'est la solution la plus simple : deux outils, zéro configuration serveur, previews automatiques par branche incluses gratuitement.

---

## 20. Cost

### Gratuit (0 €/an)
- Hébergement Cloudflare Pages (illimité pour ce volume)
- Cloudflare Workers (100 000 requêtes/jour gratuites — largement suffisant pour la démo RAG et le contact form)
- GitHub (repo public ou privé gratuit) + GitHub Actions (minutes gratuites largement suffisantes)
- Cloudflare Web Analytics
- Polices auto-hébergées open source (Geist, JetBrains Mono — licences libres)
- Cloudflare Turnstile (anti-spam gratuit)

### Payant
- **Nom de domaine personnalisé** : ~10-15 €/an (ex. `.dev` ou `.com`) — seul poste de coût réellement nécessaire.
- **API LLM pour la démo RAG** (AI Lab) : coût variable selon le fournisseur et le rate limiting appliqué. En plafonnant strictement (5 requêtes/session, corpus court, modèle économique type petit modèle rapide), coût estimé **< 5 €/mois** dans un usage réaliste de portfolio (quelques dizaines de visites qualifiées par mois). Si le budget doit être strictement nul, la démo RAG peut être remplacée par une version "pré-calculée" (questions suggérées avec réponses déjà générées, sans appel API live) — option de repli documentée en section 22.

**Estimation totale réaliste** : **10 à 25 €/an**, essentiellement le domaine. La démo RAG live est un "should have", pas un "must have" — voir priorisation.

---

## 21. Feature Prioritization

### MUST HAVE
- Homepage complète (hero, stack, featured projects, skills, contact)
- 2 case studies complètes (AI-GRC, ETIC) au format long
- Page About avec timeline d'expérience et formation
- Page Contact avec formulaire fonctionnel + liens sociaux
- CV téléchargeable en PDF
- Dark mode par défaut
- SEO de base (meta, sitemap, OG)
- Performance : Lighthouse ≥ 90 sur toutes les pages
- Responsive complet (mobile/tablette/desktop)
- Déploiement Cloudflare Pages avec domaine personnalisé

### SHOULD HAVE
- 2 case studies courtes (OMNutrition, CyberHunter)
- AI Architecture Visualizer interactif (version homepage + case study AI-GRC)
- Light mode (toggle)
- Filtrage des projets sur `/projects`
- Structured data (JSON-LD)
- Cloudflare Web Analytics

### NICE TO HAVE
- AI Lab avec démo RAG live (peut être repoussé en v1.1 si contrainte de temps)
- Page ESPRIM Career en case study dédiée (actuellement absorbée dans "autres projets")
- Animation de transition de page (View Transitions API d'Astro)
- Export du CV en plusieurs langues (FR/EN)

### AVOID
- CMS traditionnel (WordPress, Sanity, Contentful) — inutile pour un contenu qui change 2-3 fois par an
- Système de blog complet — hors sujet du positionnement, dilue le message
- Démos Computer Vision live dans le navigateur (poids, fragilité, mauvaise première impression si ça rame)
- Multi-agent visualization complexe en AI Lab — trop de complexité pour la valeur perçue
- Compte utilisateur / authentification — aucune raison d'en avoir sur un portfolio
- Traduction complète multi-langue du site (FR/EN/DE) — un portfolio en anglais uniquement est le standard attendu par les recruteurs européens ciblés ; le multi-langue ajoute une charge de maintenance disproportionnée pour un gain marginal
- Effets 3D (Three.js, WebGL) — risque de sur-ingénierie et de ralentissement, aucune valeur ajoutée pour ce positionnement

---

## 22. Development Roadmap

| Phase | Tâches | Priorité | Dépendances | Résultat attendu |
|---|---|---|---|---|
| **1. Foundation** | Init Astro + TS + Tailwind, config repo, design tokens, layouts de base, config GitHub Actions | Must | — | Squelette technique fonctionnel, déployable |
| **2. Design** | Design system complet (composants UI atomiques), dark/light mode, typographie, responsive grid | Must | Phase 1 | Bibliothèque de composants validée visuellement |
| **3. Content** | Rédaction MDX des 4 case studies + contenu About/Skills/Experience, collecte des screenshots | Must | Phase 1 | Contenu final relu et validé |
| **4. Pages Core** | Home, About, Projects index, Contact assemblés avec vrais contenus | Must | Phases 2+3 | Site navigable de bout en bout |
| **5. Case Studies** | Intégration des 4 pages case study avec `CaseStudyLayout`, diagrammes d'architecture en SVG | Must | Phase 4 | 4 case studies publiées |
| **6. Interactive Features** | AI Architecture Visualizer (React island), filtrage projets | Should | Phase 5 | Interactivité fonctionnelle et testée clavier/mobile |
| **7. AI Lab** | Démo RAG (corpus, embeddings, Worker function, UI) ou repli "pré-calculé" si contrainte de temps | Nice | Phase 6 | Démo live ou fallback statique fonctionnel |
| **8. SEO & Performance** | Meta tags, sitemap, JSON-LD, optimisation images, audit Lighthouse, correction des régressions | Must | Toutes | Lighthouse ≥ 95 sur toutes les pages |
| **9. Accessibility & QA** | Audit clavier complet, contraste, `alt` text, tests cross-browser/device | Must | Phase 8 | Zéro erreur d'accessibilité critique |
| **10. Deployment** | Connexion Cloudflare Pages, domaine personnalisé, DNS, Turnstile, Web Analytics | Must | Phase 9 | Site en production, accessible publiquement |

---

## 23. Acceptance Criteria

- [ ] Lighthouse ≥ 95 (Performance/Accessibility/Best Practices), 100 (SEO), sur Home + 1 case study, mobile et desktop.
- [ ] Zéro clé API visible dans le code source livré au navigateur (vérifié via inspection du bundle).
- [ ] Le site est entièrement navigable au clavier, sans piège de focus.
- [ ] Le hero communique le nom, le titre et la spécialisation sans scroll, sur mobile et desktop.
- [ ] Les 2 case studies principales contiennent toutes les sections du gabarit (section 9), sans métrique inventée.
- [ ] Le CV PDF est téléchargeable depuis au moins 3 points d'entrée (hero, header, contact).
- [ ] `prefers-reduced-motion` désactive effectivement toutes les animations, vérifié manuellement.
- [ ] Le site fonctionne et reste lisible avec JavaScript désactivé (dégradation gracieuse — sauf visualizer et démo RAG qui peuvent afficher un fallback statique).
- [ ] Aucune page ne dépasse 200 Ko de JS transféré (hors démo RAG/visualizer chargés en lazy).
- [ ] Le formulaire de contact bloque un test de soumission automatisée basique (bot simple).

---

## 24. Risks (Critique du concept)

**Risques identifiés et arbitrages faits** :

1. **Risque "portfolio junior" #1 — sur-vendre le statut** : présenter DRÄXLMAIER/ETIC comme si Mohamed était un ingénieur senior autonome serait contre-productif (un entretien technique révélerait vite l'écart). → **Mitigation** : ton factuel assumant le statut d'étudiant-ingénieur en stage/projet, focalisé sur la contribution réelle et vérifiable, jamais sur un titre gonflé.

2. **Risque "portfolio junior" #2 — métriques inventées** : des faux pourcentages ("réduction de 40% du temps de traitement") sans preuve sont un classique repérable immédiatement par un hiring manager senior. → **Mitigation** : règle stricte en section 9, résultats qualitatifs honnêtes quand aucune métrique n'est disponible.

3. **Risque de sur-engineering** : la demande initiale envisageait de nombreuses features interactives (agent visualization live, CV démo live, multi-page skills/experience séparées). Un portfolio livré à 60% avec des features à moitié finies nuit plus qu'un portfolio complet et sobre. → **Mitigation** : arbitrages tranchés en section 22 (AVOID), une seule démo AI Lab bien exécutée plutôt que cinq bâclées.

4. **Risque UX — Architecture Visualizer qui devient un gadget** : un diagramme interactif mal exécuté (buggé, illisible sur mobile, sans valeur informative réelle) ferait plus de mal que son absence. → **Mitigation** : scope strict (section 11.1), fallback liste accordéon mobile obligatoire, contenu informatif réel (pas juste esthétique).

5. **Risque de performance — démo RAG** : un appel LLM live peut être lent (2-5 sec de latence perçue) et donner une mauvaise première impression si mal géré. → **Mitigation** : loading state clair, streaming de la réponse si possible, fallback vers questions pré-calculées en cas d'échec API, et la démo est positionnée en "should/nice to have", jamais sur le chemin critique du parcours recruteur (section 6).

6. **Risque de confidentialité** : le projet AI-GRC provient d'un contexte entreprise (DRÄXLMAIER) potentiellement confidentiel. Publier des détails propriétaires serait un risque professionnel et éthique. → **Mitigation** : formulation générique de l'architecture et du rôle, mention explicite de généralisation par confidentialité (section 9), pas de captures d'écran internes non autorisées.

7. **Élément qui pourrait réellement impressionner un recruteur senior** : la cohérence entre le discours du site et le code du site lui-même (perf réelle mesurée, accessibilité réelle, architecture Astro propre et documentée dans le repo GitHub public) — un hiring manager technique qui inspecte le code source du portfolio et le trouve rigoureux est une preuve d'ingénierie plus forte que n'importe quelle affirmation textuelle.

8. **Risque linguistique** : le CV et le profil montrent un niveau B2 en anglais. Un site entièrement en anglais avec des tournures trop sophistiquées créerait une dissonance en entretien. → **Mitigation** : rédaction en anglais clair, phrases courtes et précises (register technique simple), relecture pour éviter tout vocabulaire au-delà du niveau réellement maîtrisé — cohérence rassurante plutôt que sophistication artificielle.

---

## 25. Final Recommendations

1. **Prioriser radicalement les 2 case studies phares** (AI-GRC, ETIC) sur tout le reste — ce sont elles qui feront la décision d'un hiring manager, bien avant l'AI Lab ou le visualizer.
2. **Traiter le repository GitHub du portfolio lui-même comme une vitrine** : README soigné, code commenté, structure propre — certains recruteurs techniques iront voir le code source.
3. **Livrer en V1 sans la démo RAG live si le temps manque** : un fallback "questions pré-calculées" (section 22, Nice to have) permet de livrer un site complet, sobre et rapide plutôt que de retarder le lancement pour une fonctionnalité secondaire.
4. **Rester strictement dans l'écosystème Cloudflare** (Pages + Workers + Turnstile + Analytics) pour minimiser la complexité opérationnelle à un seul provider, gratuit, performant en Europe.
5. **Ne jamais dépasser 6 pages** et résister à la tentation d'ajouter des sections "Skills"/"Experience"/"Education" séparées — la fusion dans `/about` sert la lisibilité, pas l'inverse.
6. **Traiter la sobriété visuelle comme un argument de vente**, pas comme une contrainte : dans un marché saturé de portfolios "flashy AI startup", un site sobre, rapide et rigoureux se différencie immédiatement auprès d'un public senior européen.

---

*Fin du PRD. Document prêt à être transmis à un agent de développement pour implémentation, sans ambiguïté de décision restante.*
