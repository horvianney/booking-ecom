import { Link } from "react-router";
import { CtaButton } from "@/components/CtaButton";
import { Reveal } from "@/components/Reveal";
import bookingLogo from "@/assets/booking-logo-white.png";

export function FinalCta() {
  return (
    <section className="section-watermark wm-right relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-0 left-1/2 h-96 w-[42rem] -translate-x-1/2 rounded-full bg-[#b3001b]/25 blur-[130px]" />
      </div>
      <div className="relative mx-auto max-w-3xl px-4 text-center">
        <Reveal>
          <img
            src={bookingLogo}
            alt="Booking E-com Starter"
            className="mx-auto mb-8 h-11 w-auto object-contain sm:h-14"
          />
          <p className="font-advent text-xs font-semibold uppercase tracking-[0.3em] text-[#fac9b8]">
            Dernière étape
          </p>
          <h2 className="font-display mt-4 text-3xl uppercase sm:text-5xl">
            Ta boutique peut être{" "}
            <span className="text-brand-gradient">prête demain.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-neutral-300">
            Boutique Shopify brandée, + de 10 produits gagnants, formation complète
            et 3 mois d'accompagnement — pour{" "}
            <strong className="text-white">29 900 FCFA</strong> au lieu de
            550 000 FCFA. Garantie 90 jours, zéro risque.
          </p>
          <div className="mt-8">
            <CtaButton className="w-full sm:w-auto sm:px-10 sm:py-5 sm:text-lg">
              Je veux ma boutique — 29 900 FCFA
            </CtaButton>
          </div>
          <p className="font-advent mt-5 text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-500">
            ⚡ Livraison rapide · 🛡 Garantie 90 jours · 🤝 Support inclus
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-4 text-center">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          <img
            src={bookingLogo}
            alt="Booking E-com"
            className="h-9 w-auto object-contain opacity-90"
          />
        </div>
        <div className="flex items-center gap-6 text-xs text-neutral-500">
          <span>© 2026 Booking E-com — Tous droits réservés</span>
          <Link to="/politique-confidentialite" className="hover:text-neutral-400 transition-colors">
            Politique de confidentialité
          </Link>
        </div>
        <p className="max-w-xl text-[10px] leading-relaxed text-neutral-600">
          Ce site n'est pas affilié à Shopify Inc. « Shopify » est une marque
          déposée de Shopify Inc. Booking E-com est un service indépendant de
          configuration de boutiques.
        </p>
      </div>
    </footer>
  );
}
