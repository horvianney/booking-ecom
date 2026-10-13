import { useEffect } from "react";
import { StickyBar } from "@/components/Navbar";
import { Hero } from "@/sections/Hero";
import { Pain, Offer } from "@/sections/PainOffer";
import { WhyUs } from "@/sections/WhyUs";
import { Price, Guarantee } from "@/sections/PriceGuarantee";
import { Proof, Faq } from "@/sections/ProofFaq";
import { Testimonials } from "@/sections/Testimonials";
import { Footer } from "@/sections/FinalCta";
import { SocialProofToast } from "@/components/SocialProofToast";
// Sections retirées de la page (code conservé) :
// import { LeadForm } from "@/sections/LeadForm";          // exclu : paiement direct
// import { WhatsAppFloat } from "@/components/WhatsAppFloat"; // exclu
// import { Steps } from "@/sections/PainOffer";
// import { WhoFor } from "@/sections/WhoFor";
// import { VideoTestimonials } from "@/sections/VideoTestimonials";
// import { FinalCta } from "@/sections/FinalCta";

export default function Home() {
  useEffect(() => {
    document.title =
      "Booking E-com Starter  Ta boutique Shopify clé en main (29 900 FCFA)";
    // Filet de sécurité : si l'IntersectionObserver n'a pas révélé des éléments
    // (navigateur ancien, rendu headless, robot d'indexation), on les force tous.
    const t = window.setTimeout(() => {
      document
        .querySelectorAll<HTMLElement>(".reveal:not(.reveal-visible)")
        .forEach((el) => {
          el.classList.add("reveal-visible");
        });
    }, 2500);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white antialiased">
      <StickyBar />
      {/* P1 · Vidéo en tête + accroche + timer + bouton + P2 · réassurance */}
      <Hero />
      {/* P7 · Se reconnaître */}
      <Pain />
      {/* P8 · Ce que tu reçois (01 à 06) */}
      <Offer />
      {/* P4 · Crédibilité */}
      <WhyUs />
      {/* P9 · Prix et valeur perçue */}
      <Price />
      {/* Preuves de résultats */}
      <Proof />
      {/* P10 · Témoignages */}
      <Testimonials />
      {/* FAQ */}
      <Faq />
      {/* Garantie 90 jours */}
      <Guarantee />
      {/* Formulaire exclu : les CTA ouvrent directement le checkout */}
      {/* <LeadForm /> */}
      <Footer />
      {/* Bouton WhatsApp flottant exclu */}
      {/* <WhatsAppFloat /> */}
      <SocialProofToast />
    </main>
  );
}
