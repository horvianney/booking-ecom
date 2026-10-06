import { useEffect, useState } from "react";
import { OFFER_DEADLINE } from "@/config";

function pad(n: number) {
  return String(Math.max(n, 0)).padStart(2, "0");
}

/**
 * Compte à rebours jusqu'à OFFER_DEADLINE (config.ts).
 * Masqué automatiquement une fois la date passée.
 */
export function Countdown({ className = "" }: { className?: string }) {
  const [left, setLeft] = useState(
    () => new Date(OFFER_DEADLINE).getTime() - Date.now()
  );

  useEffect(() => {
    const t = window.setInterval(
      () => setLeft(new Date(OFFER_DEADLINE).getTime() - Date.now()),
      1000
    );
    return () => window.clearInterval(t);
  }, []);

  if (left <= 0) return null;

  const j = Math.floor(left / 86_400_000);
  const h = Math.floor((left % 86_400_000) / 3_600_000);
  const m = Math.floor((left % 3_600_000) / 60_000);
  const s = Math.floor((left % 60_000) / 1_000);

  const units = [
    { v: pad(j), label: "Jours" },
    { v: pad(h), label: "Heures" },
    { v: pad(m), label: "Min" },
    { v: pad(s), label: "Sec" },
  ];

  return (
    <div className={`flex flex-col items-center gap-3 ${className}`}>
      <p className="font-advent text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-400">
        ⏰ Le prix de lancement augmente dans :
      </p>
      <div className="flex gap-2 sm:gap-3">
        {units.map((u) => (
          <div
            key={u.label}
            className="flex w-16 flex-col items-center rounded-xl border border-[#e10a17]/40 bg-black/60 py-2 sm:w-[70px]"
          >
            <span className="font-display text-2xl tabular-nums text-white sm:text-3xl">
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
