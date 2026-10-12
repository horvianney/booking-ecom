// ============================================
// CONFIGURATION BOOKING E-COM STARTER
// CTA_URL = destination des boutons d'appel à l'action
// Lien externe (https://…) = ouvert dans un nouvel onglet
// ============================================
export const CTA_URL = "https://pack-demarrage-rapide-e-commerce.mymaketou.shop/products/booking-ecom-starter/checkout";

export const CTA_LABEL = "RÉSERVER MA PLACE MAINTENANT";

// Numéro WhatsApp qui reçoit les réservations du formulaire (format international, sans + ni espaces)
// Exemple Togo : "22890123456"
export const WHATSAPP_NUMBER = "33745458435";

// ID de la vidéo YouTube à intégrer sur la page (la partie après watch?v=)
// Vide = la section vidéo ne s'affiche pas
export const YOUTUBE_VIDEO_ID = "ckNVFePmCHQ";

// URL du Google Apps Script (Web App) qui écrit les réponses dans Google Sheets
// Vide = l'envoi vers Google Sheets est désactivé
export const GOOGLE_SHEET_WEBAPP_URL = "https://script.google.com/macros/s/AKfycbxhL9CAvalQ0ff5ei1E_V39zuKFhEflphRdD1VRGcJL13TJOcXxz-pczu_xT6IbnZHsXg/exec";

// Nombre total de places de l'offre de lancement
// Le compteur affiche PLACES_TOTAL - (nombre de lignes dans le Google Sheet)
export const PLACES_TOTAL = 20;

// Lignes déjà présentes dans le Sheet au moment du branchement
// (anciennes réservations copiées depuis l'ancien fichier) :
// le compteur les ignore et ne compte que les NOUVELLES réservations.
export const PLACES_COUNTER_OFFSET = 36;

// Durée du compte à rebours (en jours), individuelle par visiteur :
// elle démarre à sa première visite et est mémorisée dans son navigateur.
// Quand elle arrive à zéro, elle repart pour un nouveau cycle.
export const COUNTDOWN_DAYS = 3;

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
  {
    name: "Fatou D.",
    city: "Dakar",
    text: "J'avais déjà payé une formation à 250 000 FCFA sans jamais avoir de boutique. Ici, en 3 jours ma boutique était en ligne avec les produits. J'aurais dû commencer par là.",
    result: "320 000 FCFA le 1ᵉʳ mois",
    photo: null,
  },
  {
    name: "Yao K.",
    city: "Abidjan",
    text: "Ce qui m'a bluffé, c'est le suivi. À chaque blocage, je pose ma question et on me répond dans la journée. On ne te lâche pas après le paiement, c'est rare.",
    result: "15 commandes en 2 semaines",
    photo: null,
  },
  {
    name: "Aminata S.",
    city: "Bamako",
    text: "Je travaille à côté, donc je n'avais pas de temps à perdre sur la technique. Tout était prêt : design, pages, produits. Je me concentre uniquement sur la pub.",
    result: "1ʳᵉ pub rentable en 10 jours",
    photo: null,
  },
  {
    name: "Kwame A.",
    city: "Accra",
    text: "Les visuels publicitaires fournis m'ont fait gagner un temps fou. J'ai lancé ma première campagne Facebook le week-end même de la livraison de ma boutique.",
    result: "CA 6 chiffres en 30 jours",
    photo: null,
  },
  {
    name: "Mariam C.",
    city: "Ouagadougou",
    text: "La garantie 90 jours m'a décidée, je n'avais rien à perdre. Résultat : ma boutique tourne et j'ai récupéré mon investissement dès le premier mois.",
    result: "Investissement remboursé en 1 mois",
    photo: null,
  },
];

// ============================================
// TÉMOIGNAGES VIDÉO (section vidéos)
// IDs YouTube (la partie après watch?v=). Vide = la section ne s'affiche pas.
// Exemple : ["dQw4w9WgXcQ", "abc123xyz"]
// ============================================
export const YOUTUBE_TESTIMONIAL_IDS: string[] = [];
