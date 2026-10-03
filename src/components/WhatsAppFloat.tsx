import { useEffect, useState } from "react";
import { WHATSAPP_NUMBER } from "@/config";

/**
 * Bouton WhatsApp flottant (bas droite).
 * N'apparaît qu'après un léger défilement pour ne pas gêner le Hero.
 * Ne s'affiche que si WHATSAPP_NUMBER est renseigné dans config.ts.
 */
export function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!WHATSAPP_NUMBER || WHATSAPP_NUMBER === "22800000000") return null;

  const msg = encodeURIComponent(
    "Bonjour 👋 Je veux réserver ma place Booking E-com Starter (29 900 FCFA)."
  );

  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Nous écrire sur WhatsApp"
      className={`group fixed bottom-5 right-5 z-50 flex items-center gap-0 rounded-full bg-[#25D366] p-3.5 shadow-[0_10px_30px_rgba(37,211,102,0.45)] transition-all duration-300 hover:scale-105 sm:bottom-6 sm:right-6 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-16 opacity-0"
      }`}
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7 fill-white sm:h-8 sm:w-8" aria-hidden="true">
        <path d="M16 .8C7.6.8.8 7.6.8 16c0 2.7.7 5.3 2 7.6L.8 31.2l7.8-2c2.2 1.2 4.7 1.9 7.4 1.9 8.4 0 15.2-6.8 15.2-15.2S24.4.8 16 .8zm0 27.6c-2.4 0-4.6-.7-6.5-1.8l-.5-.3-4.6 1.2 1.2-4.5-.3-.5c-1.3-2-2-4.3-2-6.7C3.3 9 9 3.3 16 3.3S28.7 9 28.7 16 23 28.4 16 28.4zm6.9-9.3c-.4-.2-2.3-1.1-2.6-1.2-.3-.1-.6-.2-.8.2-.2.4-.9 1.2-1.1 1.4-.2.2-.4.3-.8.1-.4-.2-1.6-.6-3.1-1.9-1.1-1-1.9-2.3-2.1-2.6-.2-.4 0-.6.2-.8.2-.2.4-.4.6-.7.2-.2.3-.4.4-.7.1-.3.1-.5 0-.7-.1-.2-.8-2-1.1-2.8-.3-.7-.6-.6-.8-.6h-.7c-.2 0-.7.1-1 .5-.3.4-1.3 1.3-1.3 3.1s1.3 3.6 1.5 3.9c.2.3 2.6 4 6.3 5.6.9.4 1.6.6 2.1.8.9.3 1.7.2 2.3.1.7-.1 2.3-.9 2.6-1.8.3-.9.3-1.7.2-1.8-.1-.2-.4-.3-.8-.5z" />
      </svg>
      <span className="font-advent max-w-0 overflow-hidden whitespace-nowrap text-xs font-bold uppercase tracking-wide text-white transition-all duration-300 group-hover:ml-2 group-hover:max-w-[180px]">
        Une question ? Écris-nous
      </span>
    </a>
  );
}
