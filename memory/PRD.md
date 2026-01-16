# Groupe Neema - Landing Page PRD

## Problem Statement
Créer un site vitrine pour Groupe Neema (SIRET: 981765399) conformément aux exigences d'Apple. Landing page professionnelle uniquement.

## Company Information
- **Name**: Groupe Neema
- **SIRET**: 981765399
- **Location**: Paris, France
- **Business**: Services professionnels et conseil d'entreprise

## User Personas
- **Primary**: Clients potentiels cherchant des services de conseil et accompagnement d'entreprise
- **Secondary**: Partenaires B2B et prospects corporate

## Core Requirements (Static)
1. Landing page moderne et professionnelle
2. Sections: Hero, Services, À Propos, Équipe, Témoignages, Contact, Footer
3. Design responsive et élégant
4. Navigation fluide avec smooth scrolling
5. Formulaire de contact fonctionnel
6. Contenu en français
7. Images professionnelles de qualité

## Implementation Completed (December 2025)

### Phase 1: Frontend with Mock Data ✅
**Date**: January 16, 2026

**Components Created**:
- `/app/frontend/src/mock.js` - Données mockées pour tout le contenu
- `/app/frontend/src/pages/Landing.jsx` - Page principale
- `/app/frontend/src/components/landing/Header.jsx` - Header fixe avec navigation
- `/app/frontend/src/components/landing/Hero.jsx` - Section hero avec CTAs
- `/app/frontend/src/components/landing/Services.jsx` - Grille de 6 services
- `/app/frontend/src/components/landing/About.jsx` - Section à propos avec stats et valeurs
- `/app/frontend/src/components/landing/Team.jsx` - Présentation de l'équipe (3 membres)
- `/app/frontend/src/components/landing/Testimonials.jsx` - Témoignages clients (3 items)
- `/app/frontend/src/components/landing/Contact.jsx` - Formulaire de contact + coordonnées
- `/app/frontend/src/components/landing/Footer.jsx` - Footer complet

**Design Features**:
- Color scheme: Teal (600/700) avec tons neutres gris
- Typographie: Font sizes 4xl-7xl pour headings, xl pour body
- Animations: Fade-in, hover effects, transitions douces
- Shadcn components: Button, Card, Input, Textarea, Avatar, etc.
- Lucide-react icons: Briefcase, TrendingUp, Users, etc.
- Images professionnelles via vision_expert_agent (8 images Unsplash)

**Technical Stack**:
- React 19.0.0
- Tailwind CSS avec shadcn/ui components
- React Router pour navigation
- Sonner pour toasts
- Responsive design (mobile-first)

## Architecture & Data Model

### Mock Data Structure
```javascript
- companyInfo: Nom, tagline, coordonnées, SIRET
- heroContent: Titre, sous-titre, description, image, CTA
- services: 6 services avec icon, title, description, image
- aboutContent: Description, highlights (stats), values (3), image
- team: 3 membres avec name, role, bio, image
- testimonials: 3 témoignages avec name, role, content, rating
- contactInfo: Title, subtitle, 3 methods (phone, email, address)
```

## Next Tasks / Prioritized Backlog

### P0 (Future - If Needed)
- [ ] Backend development (si formulaire de contact nécessite envoi email réel)
- [ ] Base de données MongoDB pour stocker les soumissions de formulaire
- [ ] API endpoints pour contact form

### P1 (Enhancements)
- [ ] Ajouter animations d'entrée au scroll (intersection observer)
- [ ] Optimiser les images (lazy loading, WebP format)
- [ ] Ajouter page de mentions légales et politique de confidentialité
- [ ] Intégration Google Analytics ou tracking

### P2 (Nice to Have)
- [ ] Blog section
- [ ] Section portfolio/études de cas
- [ ] Multilingue (EN/FR)
- [ ] Mode sombre
- [ ] Chat widget ou chatbot

## Status
**Phase 1 Complete**: Frontend landing page avec mock data est entièrement fonctionnel et testé via screenshots.

## Notes
- Aucune intégration backend nécessaire pour l'instant
- Formulaire de contact utilise toast notification (mock submission)
- Toutes les données sont dans mock.js pour faciliter les futures mises à jour
- Design suit strictement les guidelines (pas de gradients sombres, colors professionnelles)
