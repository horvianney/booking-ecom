import { useEffect } from "react";
import { Reveal } from "@/components/Reveal";
import { StickyBar } from "@/components/Navbar";
import { Footer } from "@/sections/FinalCta";

export default function PolitiqueConfidentialite() {
  useEffect(() => {
    document.title =
      "Politique de Confidentialité — Booking E-com Starter";
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
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h1 className="font-display text-3xl uppercase sm:text-4xl">
              Politique de Confidentialité
            </h1>
            <p className="mt-4 text-neutral-400">
              Dernière mise à jour : Septembre 2026
            </p>
          </Reveal>

          <div className="mt-10 space-y-8">
            <Reveal delay={100}>
              <section>
                <h2 className="font-display text-xl uppercase text-[#fac9b8]">
                  1. Collecte des informations
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-neutral-300">
                  Nous collectons uniquement les informations nécessaires au bon fonctionnement de nos services :
                  nom, email, numéro de téléphone, et informations de paiement. Ces informations sont collectées 
                  lors de votre commande et de notre communication avec vous.
                </p>
              </section>
            </Reveal>

            <Reveal delay={200}>
              <section>
                <h2 className="font-display text-xl uppercase text-[#fac9b8]">
                  2. Utilisation des informations
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-neutral-300">
                  Vos informations sont utilisées pour : traiter votre commande, vous fournir la boutique configurée,
                  vous accompagner pendant 3 mois, améliorer nos services, et vous envoyer des communications 
                  relatives à votre commande (sauf si vous vous désabonnez).
                </p>
              </section>
            </Reveal>

            <Reveal delay={300}>
              <section>
                <h2 className="font-display text-xl uppercase text-[#fac9b8]">
                  3. Partage des informations
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-neutral-300">
                  Nous ne vendons pas vos données personnelles. Nous partageons vos informations uniquement avec :
                  nos prestataires de paiement sécurisés, les services nécessaires à la livraison de votre boutique,
                  et lorsque la loi l'exige. Tous nos partenaires sont tenus de respecter la confidentialité de vos données.
                </p>
              </section>
            </Reveal>

            <Reveal delay={400}>
              <section>
                <h2 className="font-display text-xl uppercase text-[#fac9b8]">
                  4. Sécurité des données
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-neutral-300">
                  Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos informations 
                  contre l'accès non autorisé, la modification, la divulgation ou la destruction. Vos données 
                  de paiement sont traitées via des systèmes cryptés et sécurisés.
                </p>
              </section>
            </Reveal>

            <Reveal delay={500}>
              <section>
                <h2 className="font-display text-xl uppercase text-[#fac9b8]">
                  5. Vos droits
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-neutral-300">
                  Conformément à la réglementation applicable, vous avez le droit d'accéder, de rectifier, 
                  de supprimer vos données personnelles, et de vous opposer à leur traitement. Pour exercer 
                  ces droits, contactez-nous via les moyens de communication fournis lors de votre commande.
                </p>
              </section>
            </Reveal>

            <Reveal delay={600}>
              <section>
                <h2 className="font-display text-xl uppercase text-[#fac9b8]">
                  6. Conservation des données
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-neutral-300">
                  Vos données sont conservées uniquement le temps nécessaire aux finalités pour lesquelles 
                  elles ont été collectées, conformément à nos obligations légales. Après la période de 
                  garantie de 90 jours et la fin de notre accompagnement, vos données sont archivées ou 
                  supprimées selon les nécessités légales.
                </p>
              </section>
            </Reveal>

            <Reveal delay={700}>
              <section>
                <h2 className="font-display text-xl uppercase text-[#fac9b8]">
                  7. Cookies
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-neutral-300">
                  Notre site utilise des cookies pour améliorer votre expérience de navigation et analyser 
                  l'utilisation du site. Vous pouvez configurer votre navigateur pour refuser les cookies, 
                  mais cela peut affecter certaines fonctionnalités du site.
                </p>
              </section>
            </Reveal>

            <Reveal delay={800}>
              <section>
                <h2 className="font-display text-xl uppercase text-[#fac9b8]">
                  8. Contact
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-neutral-300">
                  Pour toute question concernant cette politique de confidentialité ou nos pratiques de 
                  traitement des données, contactez-nous via les moyens de communication fournis lors 
                  de votre commande ou via notre support client.
                </p>
              </section>
            </Reveal>

            <Reveal delay={900}>
              <section className="rounded-xl border border-white/10 bg-black/60 p-6">
                <p className="text-xs text-neutral-400">
                  Cette politique de confidentialité est susceptible d'être modifiée. Nous vous encourageons 
                  à la consulter régulièrement. Les modifications entreront en vigueur dès leur publication 
                  sur cette page.
                </p>
              </section>
            </Reveal>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
