import { useEffect, useState } from "react";
import { GOOGLE_SHEET_WEBAPP_URL, PLACES_TOTAL } from "@/config";

/**
 * Compteur de places restantes.
 * Interroge le Google Apps Script (doGet) qui compte les lignes du Sheet
 * (= les réservations réelles). Si le script n'a pas encore de doGet ou
 * que la requête échoue, on affiche PLACES_TOTAL comme valeur de secours.
 */
export function usePlacesRestantes(): number {
  const [pris, setPris] = useState<number>(0);

  useEffect(() => {
    if (!GOOGLE_SHEET_WEBAPP_URL) return;
    fetch(GOOGLE_SHEET_WEBAPP_URL)
      .then((r) => r.json())
      .then((d) => {
        if (typeof d.count === "number" && d.count >= 0) setPris(d.count);
      })
      .catch(() => {
        /* silencieux : valeur de secours conservée */
      });
  }, []);

  return Math.max(PLACES_TOTAL - pris, 0);
}

export function PlacesBadge({ className = "" }: { className?: string }) {
  const restantes = usePlacesRestantes();
  const pct = Math.round((restantes / PLACES_TOTAL) * 100);

  return (
    <div
      className={`inline-flex flex-col items-center gap-2 rounded-xl border border-[#e10a17]/40 bg-[#b3001b]/10 px-5 py-3 ${className}`}
    >
      <p className="font-advent flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#fac9b8] sm:text-sm">
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#e10a17] opacity-75" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#e10a17]" />
        </span>
        🔥 Plus que{" "}
        <span className="font-display text-base text-white sm:text-lg">
          {restantes} place{restantes > 1 ? "s" : ""}
        </span>{" "}
        sur {PLACES_TOTAL}
      </p>
      <div className="h-1.5 w-48 overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-gradient-to-r from-[#e10a17] to-[#ff5a5a] transition-all duration-700"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
