# Groupe Neema - Landing Page PRD

## Problem Statement
Créer un site vitrine pour Groupe Neema (SIRET: 981765399) conformément aux exigences d'Apple. Landing page professionnelle uniquement.

## Company Information
- **Name**: Groupe Neema
- **SIRET**: 981765399
- **Location**: Nancy, France
- **Email**: contact@groupeneema.com
- **Business**: Services professionnels et conseil d'entreprise

## User Personas
- **Primary**: Clients potentiels cherchant des services de conseil et accompagnement d'entreprise
- **Secondary**: Partenaires B2B et prospects corporate

## Core Requirements (Static)
1. Landing page moderne et professionnelle
2. Sections: Hero, Services, À Propos, Contact, Footer
3. Design responsive et élégant avec représentation diverse
4. Navigation fluide avec smooth scrolling
5. Formulaire de contact fonctionnel
6. Contenu en français
7. Images professionnelles de qualité montrant la diversité

## Implementation Completed (January 2026)

### Phase 1: Frontend with Mock Data ✅
**Date**: January 16, 2026

**Components Created**:
- `/app/frontend/src/mock.js` - Données mockées pour tout le contenu
- `/app/frontend/src/pages/Landing.jsx` - Page principale (4 sections)
- `/app/frontend/src/components/landing/Header.jsx` - Header fixe avec navigation
- `/app/frontend/src/components/landing/Hero.jsx` - Section hero avec image diverse et CTAs
- `/app/frontend/src/components/landing/Services.jsx` - Grille de 6 services
- `/app/frontend/src/components/landing/About.jsx` - Section à propos avec stats et valeurs
- `/app/frontend/src/components/landing/Contact.jsx` - Formulaire de contact + coordonnées (email, adresse)
- `/app/frontend/src/components/landing/Footer.jsx` - Footer complet

**Sections Actives**:
1. Hero - Avec image d'équipe diverse en réunion
2. Services - 6 services professionnels
3. À Propos - Stats et valeurs de l'entreprise
4. Contact - Formulaire + Email + Adresse (pas de téléphone)

**Design Features**:
- Color scheme: Teal (600/700) avec tons neutres gris
- Typographie: Font sizes 4xl-7xl pour headings, xl pour body
- Images: Équipe diverse et inclusive (professionnels noirs inclus)
- Animations: Fade-in, hover effects, transitions douces
- Shadcn components: Button, Card, Input, Textarea, etc.
- Lucide-react icons: Mail, MapPin, Briefcase, TrendingUp, etc.
- Images professionnelles via vision_expert_agent (Unsplash)

**Contact Information**:
- Email: contact@groupeneema.com ✅
- Adresse: Nancy, France ✅
- Téléphone: RETIRÉ (non requis) ✅

**Sections Retirées** (à la demande du client):
- ❌ Section Équipe (Team) - Rencontrez nos Experts
- ❌ Section Témoignages (Testimonials) - Ce que disent nos Clients

**Technical Stack**:
- React 19.0.0
- Tailwind CSS avec shadcn/ui components
- React Router pour navigation
- Sonner pour toasts
- Responsive design (mobile-first)

## Architecture & Data Model

### Mock Data Structure
```javascript
- companyInfo: Nom, email, adresse, SIRET (pas de phone)
- heroContent: Titre, sous-titre, description, image diverse, CTA
- services: 6 services avec icon, title, description, image
- aboutContent: Description, highlights (stats), values (3), image
- contactInfo: Title, subtitle, 2 methods (email, address - pas phone)
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

## Status
**Phase 1 Complete**: Frontend landing page avec mock data est entièrement fonctionnel.

**Latest Updates (January 16, 2026)**:
- ✅ Email mis à jour: contact@groupeneema.com
- ✅ Numéro de téléphone retiré
- ✅ Section Team (Équipe) retirée
- ✅ Section Testimonials (Témoignages) retirée  
- ✅ Image hero changée pour montrer diversité (équipe diverse en réunion)
- ✅ Navigation mise à jour (4 items: Accueil, Services, À Propos, Contact)

## Notes
- Aucune intégration backend nécessaire pour l'instant
- Formulaire de contact utilise toast notification (mock submission)
- Toutes les données sont dans mock.js pour faciliter les futures mises à jour
- Design suit strictement les guidelines (pas de gradients sombres, couleurs professionnelles)
- Représentation diverse et inclusive dans les images
