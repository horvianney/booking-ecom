/******************************************************
 * Booking E-com Starter - Réception des réservations
 *
 * À COLLER DANS LE NOUVEAU GOOGLE SHEET :
 * https://docs.google.com/spreadsheets/d/15GjlCHb-QDMa34ZOp-A1cZQP2eo1L9vYARnl2UfI-c/edit
 *
 * Étapes :
 * 1. Ouvre le Sheet > menu "Extensions" > "Apps Script"
 * 2. Supprime le contenu par défaut et colle TOUT ce fichier
 * 3. Enregistre (Ctrl+S), nomme le projet ex. "booking-reception"
 * 4. Déployer > Nouveau déploiement > Type : "Application Web"
 *    - Exécuter en tant que : Moi
 *    - Qui a accès : Tout le monde
 * 5. Autorise l'accès quand Google le demande
 * 6. Copie l'URL /exec générée et envoie-la moi :
 *    je la mets dans config.ts (GOOGLE_SHEET_WEBAPP_URL)
 *
 * Le script fait 2 choses :
 * - doPost : ajoute une ligne de réservation dans la 1re feuille
 * - doGet  : renvoie {"count": N} = nombre de réservations
 *            (utilisé par le compteur de places du site)
 ******************************************************/

const HEADERS = ["Date", "Nom & Prénom", "Âge", "Sexe", "WhatsApp", "Appel", "Expérience e-commerce", "Réseau le plus actif"];

function sheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sh = ss.getSheets()[0];
  // Crée la ligne d'en-tête si la feuille est vide
  if (sh.getLastRow() === 0) {
    sh.appendRow(HEADERS);
    sh.getRange(1, 1, 1, HEADERS.length).setFontWeight("bold");
  }
  return sh;
}

function doPost(e) {
  const p = e.parameter;
  sheet_().appendRow([
    p.date || new Date().toLocaleString("fr-FR"),
    p.nom || "",
    p.age || "",
    p.sexe || "",
    p.whatsapp || "",
    p.appel || "",
    p.experience || "",
    p.reseau || "",
  ]);
  return ContentService.createTextOutput(
    JSON.stringify({ ok: true })
  ).setMimeType(ContentService.MimeType.JSON);
}

function doGet() {
  // Nombre de réservations = lignes remplies - ligne d'en-tête
  const count = Math.max(0, sheet_().getLastRow() - 1);
  return ContentService.createTextOutput(
    JSON.stringify({ count: count })
  ).setMimeType(ContentService.MimeType.JSON);
}
