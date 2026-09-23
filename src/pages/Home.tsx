import { useEffect } from "react";
import { StickyBar } from "@/components/Navbar";
import { Hero } from "@/sections/Hero";
import { Pain, Offer, Steps } from "@/sections/PainOffer";
import { Price, Guarantee } from "@/sections/PriceGuarantee";
import { Proof, Faq } from "@/sections/ProofFaq";
import { FinalCta, Footer } from "@/sections/FinalCta";

export default function Home() {
  useEffect(() => {
    document.title =
      "Booking E-com Starter — Ta boutique Shopify clé en main (29 900 FCFA)";
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
      <Hero />
      <Pain />
      <Offer />
      <Steps />
      <Price />
      <Guarantee />
      <Proof />
      <Faq />
      <FinalCta />
      <Footer />
    </main>
  );
}
