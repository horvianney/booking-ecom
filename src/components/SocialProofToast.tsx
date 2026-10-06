import { useEffect, useState } from "react";

// Noms mixtes : africains + internationaux (notifications simulées de preuve sociale)
const prospects = [
  { name: "Awa K.", city: "Lomé" },
  { name: "Kofi M.", city: "Accra" },
  { name: "Fatou D.", city: "Dakar" },
  { name: "Yao N.", city: "Abidjan" },
  { name: "Aminata S.", city: "Bamako" },
  { name: "Kwame A.", city: "Kumasi" },
  { name: "Moussa B.", city: "Ouagadougou" },
  { name: "Adjoa E.", city: "Cotonou" },
  { name: "Ibrahim T.", city: "Conakry" },
  { name: "Nadia R.", city: "Niamey" },
  { name: "Lucas P.", city: "Paris" },
  { name: "Marie L.", city: "Lyon" },
  { name: "Thomas B.", city: "Bruxelles" },
  { name: "Sarah K.", city: "Montréal" },
  { name: "Julien R.", city: "Marseille" },
  { name: "Léa M.", city: "Genève" },
  { name: "Hugo D.", city: "Toulouse" },
  { name: "Emma F.", city: "Nantes" },
  { name: "Serge O.", city: "Douala" },
  { name: "Mariam C.", city: "Abidjan" },
];

const actions = [
  "vient de rejoindre Booking E-com Starter",
  "vient de réserver sa place",
  "vient de commander le pack Starter",
];

const avatarColors = [
  "bg-[#b3001b]", "bg-[#6bd425]/80", "bg-[#2563eb]", "bg-[#9333ea]", "bg-[#ea580c]",
];

type Toast = { name: string; city: string; action: string; mins: number };

function randomToast(): Toast {
  const p = prospects[Math.floor(Math.random() * prospects.length)];
  return {
    ...p,
    action: actions[Math.floor(Math.random() * actions.length)],
    mins: 1 + Math.floor(Math.random() * 45),
  };
}

/**
 * Notifications de preuve sociale (simulées)  bas gauche.
 * Première apparition après 6 s, puis toutes les 10 s, visible 5 s.
 */
export function SocialProofToast() {
  const [toast, setToast] = useState<Toast | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let hideTimer: number;

    const show = () => {
      setToast(randomToast());
      setVisible(true);
      hideTimer = window.setTimeout(() => setVisible(false), 5000);
    };

    const firstTimer = window.setTimeout(show, 6000);
    const interval = window.setInterval(show, 10000);

    return () => {
      window.clearTimeout(firstTimer);
      window.clearTimeout(hideTimer);
      window.clearInterval(interval);
    };
  }, []);

  if (!toast) return null;

  const initials = toast.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  const color = avatarColors[toast.name.length % avatarColors.length];

  return (
    <div
      role="status"
      className={`fixed bottom-5 left-4 z-50 max-w-[290px] transition-all duration-500 sm:bottom-6 sm:left-6 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#141414]/95 p-3 pr-4 shadow-[0_15px_40px_rgba(0,0,0,0.6)] backdrop-blur">
        <span
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white ${color}`}
        >
          {initials}
        </span>
        <div className="min-w-0">
          <p className="text-xs leading-snug text-neutral-200">
            <strong className="text-white">{toast.name}</strong> ({toast.city}){" "}
            {toast.action} 🔥
          </p>
          <p className="mt-0.5 text-[10px] text-neutral-500">
            il y a {toast.mins} min · ✅ Réservation vérifiée
          </p>
        </div>
        <button
          type="button"
          onClick={() => setVisible(false)}
          aria-label="Fermer la notification"
          className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-neutral-700 text-[10px] text-white transition hover:bg-neutral-600"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
