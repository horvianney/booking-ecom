import { Reveal } from "@/components/Reveal";
import { CtaButton } from "@/components/CtaButton";
import { Countdown } from "@/components/Countdown";
import { PlacesBadge } from "@/components/PlacesBadge";
import { VideoPlayer } from "@/sections/VideoSection";
import bookingLogo from "@/assets/booking-logo-white.png";
import promoVideo from "@/assets/promo-video.png";

export function Hero() {
  return (
    <header className="section-watermark wm-right relative overflow-hidden">
      {/* Lueurs d'ambiance */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-96 w-[42rem] -translate-x-1/2 rounded-full bg-[#b3001b]/20 blur-[120px]" />
        <div className="absolute right-0 top-1/2 h-72 w-72 rounded-full bg-[#561115]/40 blur-[110px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-10 text-center sm:pt-14">
        <Reveal>
          <img
            src={bookingLogo}
            alt="Booking E-com Starter"
            className="mx-auto h-12 w-auto object-contain sm:h-16"
          />
        </Reveal>

        {/* P1 · Accroche */}
        <Reveal delay={80}>
          <span className="font-advent mt-8 inline-block rounded-full border border-[#e10a17]/60 bg-[#b3001b]/15 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#fac9b8] sm:text-[11px] sm:tracking-[0.25em]">
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

        {/* P1 · Vidéo / VSL */}
        <Reveal delay={240}>
          <div id="video" className="mt-10 scroll-mt-24">
            <VideoPlayer />
          </div>
        </Reveal>

        {/* P6 · Timer (démarre à l'arrivée du visiteur) + P5 · Bouton */}
        <Reveal delay={300}>
          <div className="mt-10 flex flex-col items-center gap-6">
            <Countdown label="⏳ Offre valable pour seulement :" />
            <CtaButton className="w-full sm:w-auto sm:px-10">
              Je profite de l'offre maintenant
            </CtaButton>
          </div>
        </Reveal>

        {/* P2 · Réassurance allégée, sous la vidéo */}
        <Reveal delay={360}>
          <div className="font-advent mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium uppercase tracking-[0.15em] text-neutral-400">
            <span className="flex items-center gap-1.5">
              <span className="text-[#6bd425]">⚡</span> Accès rapide
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-[#6bd425]">✆</span> Support inclus
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-[#6bd425]">🛡</span> Garantie 90 jours
            </span>
          </div>
        </Reveal>
        <Reveal delay={420}>
          <div className="mt-6 flex justify-center">
            <PlacesBadge />
          </div>
        </Reveal>

        {/* Bannière promo */}
        <Reveal delay={480}>
          <div className="relative mx-auto mt-10 max-w-3xl">
            <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-[radial-gradient(circle_at_50%_40%,rgba(179,0,27,0.25),transparent_65%)] blur-xl" />
            <img
              src={promoVideo}
              alt="Saisis l'offre unique maintenant : 29 900 XOF au lieu de 550 000 XOF, offre limitée à 20 places, économisez 520 000 XOF"
              className="relative w-full rounded-2xl border border-white/10 object-cover shadow-[0_30px_80px_-20px_rgba(0,0,0,0.9)]"
              loading="lazy"
            />
          </div>
        </Reveal>
      </div>
    </header>
  );
}
