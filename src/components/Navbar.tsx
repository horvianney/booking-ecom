import logo from "@/assets/booking-logo-white.png";

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
  return (
    <div className="sticky top-0 z-50 border-b border-[#b3001b]/50 bg-black/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-2 px-3 py-2 sm:gap-3 sm:px-4">
        <Logo />
        <p className="text-[11px] font-bold uppercase tracking-wider text-neutral-200 sm:text-xs">
          <span className="hidden text-[#e10a17] sm:inline">
            Offre de lancement —{" "}
          </span>
          <span className="hidden line-through decoration-[#e10a17]/70 sm:inline">
            500 000 FCFA{" "}
          </span>
          <span className="text-[#fac9b8]">29 900 FCFA</span>
        </p>
        <a
          href="#prix"
          className="shrink-0 rounded-md bg-[#e10a17] px-2.5 py-1.5 text-[10px] font-black uppercase tracking-wide text-white transition hover:bg-[#b3001b] sm:px-3"
        >
          J'en profite
        </a>
      </div>
    </div>
  );
}
