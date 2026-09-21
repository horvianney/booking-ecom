import { CtaButton } from "@/components/CtaButton";
import { Reveal } from "@/components/Reveal";
import bookingLogo from "@/assets/booking-logo-white.png";
import banner from "@/assets/banner-offre.jpg";

export function Hero() {
  return (
    <header className="section-watermark wm-right relative overflow-hidden">
      {/* Lueurs d'ambiance */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-96 w-[42rem] -translate-x-1/2 rounded-full bg-[#b3001b]/20 blur-[120px]" />
        <div className="absolute right-0 top-1/2 h-72 w-72 rounded-full bg-[#561115]/40 blur-[110px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-12 sm:pt-16">
        <Reveal>
          <img
            src={bookingLogo}
            alt="Booking E-com Starter"
            className="mx-auto h-12 w-auto object-contain sm:h-16"
          />
        </Reveal>

        <div className="mt-8 text-center">
          <Reveal delay={80}>
            <span className="font-advent inline-block rounded-full border border-[#e10a17]/60 bg-[#b3001b]/15 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#fac9b8] sm:text-[11px] sm:tracking-[0.25em]">
              Boutique Shopify clé en main
            </span>
          </Reveal>
          <Reveal delay={160}>
            <h1 className="font-display mx-auto mt-6 max-w-3xl text-4xl uppercase leading-[1.05] sm:text-5xl lg:text-6xl">
              Ta boutique e-commerce{" "}
              <span className="text-brand-gradient">prête à vendre</span>{" "}
              <span className="text-[#e10a17]">en 24h.</span>
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-neutral-300 sm:text-lg">
              Pas de formation à 500 000 FCFA qui ne mène nulle part. Pas de
              semaines passées à configurer Shopify. Tu reçois ta boutique{" "}
              <strong className="text-white">brandée par nos experts</strong>,
              avec <strong className="text-white">+ de 10 produits gagnants</strong>{" "}
              — prête à te générer des revenus.
            </p>
          </Reveal>
          <Reveal delay={320}>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <CtaButton>Obtenir mon pack maintenant</CtaButton>
              <a
                href="#offre"
                className="text-sm font-semibold text-neutral-400 underline-offset-4 transition hover:text-[#fac9b8] hover:underline"
              >
                Voir ce que contient le pack ↓
              </a>
            </div>
          </Reveal>
          <Reveal delay={400}>
            <div className="font-advent mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium uppercase tracking-[0.15em] text-neutral-400">
              <span className="flex items-center gap-1.5">
                <span className="text-[#6bd425]">⚡</span> Livraison rapide
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-[#6bd425]">✆</span> Support inclus
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-[#6bd425]">🛡</span> Garantie 90 jours
              </span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={300}>
          <div className="relative mx-auto mt-12 max-w-4xl">
            <div className="pointer-events-none absolute -inset-5 rounded-3xl bg-[radial-gradient(circle_at_50%_40%,rgba(179,0,27,0.3),transparent_65%)] blur-xl" />
            <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.9)] max-sm:-ml-[4%] max-sm:w-[108%]">
              <img
                src={banner}
                alt="Offre unique Booking E-com Starter — 29 900 XOF au lieu de 550 000 XOF, offre limitée à 20 places"
                className="w-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </header>
  );
}
