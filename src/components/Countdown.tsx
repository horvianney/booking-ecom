import { useEffect, useState } from "react";
import { COUNTDOWN_HOURS } from "@/config";

const DURATION = COUNTDOWN_HOURS * 3_600_000;
const STORAGE_KEY = "bec_countdown_end";

function pad(n: number) {
  return String(Math.max(n, 0)).padStart(2, "0");
}

// Deadline persistante : si absente ou dépassée, on repart pour COUNTDOWN_HOURS
function getDeadline(): number {
  const now = Date.now();
  try {
    const saved = Number(localStorage.getItem(STORAGE_KEY));
    if (saved > now) return saved;
    const next = now + DURATION;
    localStorage.setItem(STORAGE_KEY, String(next));
    return next;
  } catch {
    return now + DURATION;
  }
}

/**
 * Compte à rebours de COUNTDOWN_HOURS heures (config.ts).
 * Quand il arrive à zéro, il recommence automatiquement.
 */
export function Countdown({ className = "" }: { className?: string }) {
  const [left, setLeft] = useState(() => getDeadline() - Date.now());

  useEffect(() => {
    const t = window.setInterval(() => {
      let end: number;
      try {
        end = Number(localStorage.getItem(STORAGE_KEY)) || 0;
      } catch {
        end = 0;
      }
      const now = Date.now();
      if (end <= now) {
        end = getDeadline(); // temps écoulé : on relance un cycle
      }
      setLeft(end - now);
    }, 1000);
    return () => window.clearInterval(t);
  }, []);

  const h = Math.floor(left / 3_600_000);
  const m = Math.floor((left % 3_600_000) / 60_000);
  const s = Math.floor((left % 60_000) / 1_000);
  const urgent = left < 600_000; // moins de 10 min : rouge vif + pulsation

  const units = [
    { v: pad(h), label: "Heures" },
    { v: pad(m), label: "Min" },
    { v: pad(s), label: "Sec" },
  ];

  return (
    <div className={`flex flex-col items-center gap-3 ${className}`}>
      <p className="font-advent text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-400">
        ⏳ Ton prix de lancement est réservé pendant :
      </p>
      <div className="flex gap-2 sm:gap-3">
        {units.map((u) => (
          <div
            key={u.label}
            className={`flex w-16 flex-col items-center rounded-xl border py-2 sm:w-[70px] ${
              urgent
                ? "animate-pulse border-[#e10a17] bg-[#b3001b]/25"
                : "border-[#e10a17]/40 bg-black/60"
            }`}
          >
            <span
              className={`font-display text-2xl tabular-nums sm:text-3xl ${
                urgent ? "text-[#ff4d57]" : "text-white"
              }`}
            >
              {u.v}
            </span>
            <span className="font-advent text-[9px] font-medium uppercase tracking-widest text-neutral-500">
              {u.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
