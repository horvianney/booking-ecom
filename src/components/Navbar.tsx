import logo from "@/assets/booking-logo-white.png";
import { usePlacesRestantes } from "@/components/PlacesBadge";

function Logo() {
  return (
    <a href="#" className="inline-flex shrink-0 items-center">
      <img
        src={logo}
        alt="Booking E-com"
        className="h-8 w-auto object-contain sm:h-11"
      />
    </a>
  );
}

export function StickyBar() {
  const restantes = usePlacesRestantes();

  return (
    <>
      {/* Barre fixe : visible en permanence, même au défilement */}
      <div className="fixed inset-x-0 top-0 z-50 border-b border-[#b3001b]/50 bg-black/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-2 px-3 py-2 sm:gap-3 sm:px-4">
          <Logo />
          <div className="flex items-center gap-2 sm:gap-3">
            <p className="text-[11px] font-bold uppercase tracking-wider text-neutral-200 sm:text-xs">
              <span className="hidden text-[#e10a17] sm:inline">
                Offre de lancement {" "}
              </span>
              <span className="hidden line-through decoration-[#e10a17]/70 sm:inline">
                500 000 FCFA{" "}
              </span>
              <span className="hidden text-[#fac9b8] min-[420px]:inline">29 900 FCFA</span>
            </p>
            {/* Compteur de places  visible en permanence */}
            <a
              href="#formulaire"
              className="flex shrink-0 items-center gap-1.5 rounded-full border border-[#e10a17]/50 bg-[#b3001b]/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-[#fac9b8] transition hover:bg-[#b3001b]/30 sm:px-3 sm:text-[11px]"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#e10a17] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#e10a17]" />
              </span>
              🔥 {restantes}
              <span className="hidden sm:inline"> places restantes</span>
            </a>
          </div>
          <a
            href="#prix"
            className="shrink-0 rounded-md bg-[#e10a17] px-2.5 py-1.5 text-[10px] font-black uppercase tracking-wide text-white transition hover:bg-[#b3001b] sm:px-3"
          >
            J'en profite
          </a>
        </div>
      </div>
      {/* Espace réservé : compense la hauteur de la barre fixe */}
      <div className="h-[49px] sm:h-[61px]" aria-hidden="true" />
    </>
  );
}
