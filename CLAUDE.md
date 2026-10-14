# CLAUDE.md — Booking E-com Starter (landing page)

> Document de passation. Claude Code : lis ce fichier en entier avant toute modification.

## Vue d'ensemble

Landing page de vente (tunnel) pour **Booking E-com Starter** : boutique Shopify clé en main à **29 900 FCFA** (valeur affichée 550 000 FCFA). Public : Afrique francophone, majoritairement **mobile**. Ton : tutoiement, direct, orienté conversion.

- **Site en ligne** : https://booking-ecom.pages.dev
- **Repo** : https://github.com/horvianney/booking-ecom (branche `main`)
- **Déploiement** : automatique. Un push sur `main` déclenche GitHub Actions → build → Cloudflare Pages. Ne pas toucher à la config Cloudflare.

## Stack & commandes

- React 18 + TypeScript + Vite + Tailwind CSS + react-router
- `npm install` → `npm run dev` (dev local) · `npm run build` (build prod) · `npx tsc -b` (vérif types rapide)
- Avant tout push : vérifier que `npm run build` passe.

## Fichier clé : `src/config.ts`

Toute la configuration métier est centralisée là — **toujours passer par ce fichier**, ne jamais coder en dur :

| Constante | Rôle |
|---|---|
| `CTA_URL` | Destination de tous les boutons CTA (actuellement checkout `hub-5.mymaketou.shop/...`) |
| `WHATSAPP_NUMBER` | Numéro WhatsApp (format international sans + ni espaces) |
| `YOUTUBE_VIDEO_ID` | ID de la VSL YouTube (autoplay au scroll, via IFrame API) |
| `GOOGLE_SHEET_WEBAPP_URL` | Apps Script qui écrit les leads du formulaire dans Google Sheets + endpoint GET `{count}` pour le compteur de places |
| `PLACES_TOTAL` / `PLACES_COUNTER_OFFSET` | Compteur de places : `TOTAL - max(count - OFFSET, 0)`. OFFSET = lignes déjà présentes dans le Sheet au branchement |
| `COUNTDOWN_DAYS` | Durée du minuteur, **individuel par visiteur** (localStorage `bec_countdown_end`, repart à zéro en boucle) |
| `TESTIMONIALS` | Témoignages (⚠️ textes génériques, à remplacer par de vrais) |
| `YOUTUBE_TESTIMONIAL_IDS` | IDs vidéos témoignages (vide = section cachée) |

## Structure de la page (ordre dans `src/pages/Home.tsx`)

StickyBar (barre fixe + compteur places) → Hero (badge, H1, **vidéo VSL**, minuteur, CTA, réassurance, places, bannière promo) → Pain (« Tu te reconnais ? », 6 points) → Offer (6 cartes 01–06) → WhyUs (« Pourquoi nous faire confiance ? ») → Price (valeur/prix/économie/timer) → Proof (captures de résultats) → Testimonials → Faq (6 questions) → Guarantee (90 jours) → Footer. Plus `SocialProofToast` (notifications simulées, intervalle aléatoire 1–5 min).

Un CTA après chaque section, textes en rotation : « Je profite de l'offre maintenant » / « Je suis prêt à obtenir ma boutique » / « Je me lance maintenant ».

### Sections actuellement EXCLUES (code conservé, commentées dans `Home.tsx`)

- `LeadForm` (formulaire 6 champs → Google Sheets) — exclu : paiement direct par CTA
- `WhatsAppFloat` (bouton WhatsApp flottant)
- `Steps`, `WhoFor`, `VideoTestimonials`, `FinalCta`

Pour les réactiver : décommenter l'import et la balise dans `Home.tsx`.

## Règles de style à respecter (choix du propriétaire, ne pas ré-ouvrir)

- **Jamais de tiret cadratin « — »** dans les textes visibles (supprimés exprès).
- Wording : « produits **qui marchent** » (pas « produits gagnants »).
- **Mobile-first** : tous les éléments centrés sur mobile.
- Palette : fond noir `#0a0a0a`, rouge `#e10a17` / `#b3001b`, vert `#6bd425`, pêche `#fac9b8`. Classes custom : `font-display`, `font-advent`, `text-brand-gradient`, `bg-brand-gradient`, `btn-red`, `section-watermark`.
- `CtaButton` gère automatiquement l'ouverture en nouvel onglet pour les liens externes.

## Points d'attention

- Le compteur de places dépend du Google Apps Script du propriétaire (compte Google perso). Si le script change d'URL, mettre à jour `GOOGLE_SHEET_WEBAPP_URL`.
- Images de preuves : `src/assets/capture01–07.png`. Photos de témoignages : déposer dans `public/temoignages/` puis renseigner `photo` dans `TESTIMONIALS`.
- Ne pas committer : `graphify-out/`, `wireframe-*.html`, `analyze_wireframe.py`, `wireframe-structure.txt` (fichiers de travail locaux).
- Page légale : `/politique-confidentialite` (route existante).
