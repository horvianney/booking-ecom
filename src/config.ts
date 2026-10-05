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
