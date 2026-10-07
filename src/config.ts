// ============================================
// CONFIGURATION BOOKING E-COM STARTER
// CTA_URL = destination des boutons d'appel à l'action
// ("#formulaire" = descend vers la section formulaire de la page)
// ============================================
export const CTA_URL = "#formulaire";

export const CTA_LABEL = "RÉSERVER MA PLACE MAINTENANT";

// Numéro WhatsApp qui reçoit les réservations du formulaire (format international, sans + ni espaces)
// Exemple Togo : "22890123456"
export const WHATSAPP_NUMBER = "33745458435";

// ID de la vidéo YouTube à intégrer sur la page (la partie après watch?v=)
// Vide = la section vidéo ne s'affiche pas
export const YOUTUBE_VIDEO_ID = "ckNVFePmCHQ";

// URL du Google Apps Script (Web App) qui écrit les réponses dans Google Sheets
// Vide = l'envoi vers Google Sheets est désactivé
export const GOOGLE_SHEET_WEBAPP_URL = "https://script.google.com/macros/s/AKfycbwuC0BjScqpe1ugGhZWZ6PXNQYFmPI22knD5_DN7AV8oKJNihfoZKkHfN4I-YogS9Cu/exec";

// Nombre total de places de l'offre de lancement
// Le compteur affiche PLACES_TOTAL - (nombre de lignes dans le Google Sheet)
export const PLACES_TOTAL = 20;

// Date limite du prix de lancement (compte à rebours affiché sur la page)
// Format : "AAAA-MM-JJTHH:MM:SS" - modifiable à tout moment
export const OFFER_DEADLINE = "2026-10-20T23:59:59";

// ============================================
// TÉMOIGNAGES (section photos)
// photo : null = avatar avec initiales.
// Pour ajouter une vraie photo : déposer le fichier dans public/temoignages/
// (ex. temoignage-1.jpg) et remplacer null par "temoignage-1.jpg".
// ⚠️ Textes génériques - à remplacer par vos vrais témoignages clients.
// ============================================
export const TESTIMONIALS: {
  name: string;
  city: string;
  text: string;
  result: string;
  photo: string | null;
}[] = [
  {
    name: "Marius A.",
    city: "Cotonou",
    text: "J'ai reçu ma boutique en 48h, déjà remplie avec les produits. Ma première vente est arrivée la semaine suivante. L'accompagnement fait vraiment toute la différence.",
    result: "1ʳᵉ vente en 6 jours",
    photo: null,
  },
  {
    name: "Aïcha B.",
    city: "Abidjan",
    text: "Je n'y connaissais absolument rien en e-commerce. Les deux lives par semaine et le support 7j/7 m'ont permis de lancer ma première publicité sans stress.",
    result: "Boutique lancée en 72h",
    photo: null,
  },
  {
    name: "Jean-Kevin M.",
    city: "Douala",
    text: "Le sourcing accompagné m'a évité des erreurs coûteuses avec les fournisseurs. Une équipe sérieuse, disponible, qui répond vite. Je recommande.",
    result: "Sourcing Chine réussi",
    photo: null,
  },
];

// ============================================
// TÉMOIGNAGES VIDÉO (section vidéos)
// IDs YouTube (la partie après watch?v=). Vide = la section ne s'affiche pas.
// Exemple : ["dQw4w9WgXcQ", "abc123xyz"]
// ============================================
export const YOUTUBE_TESTIMONIAL_IDS: string[] = [];
