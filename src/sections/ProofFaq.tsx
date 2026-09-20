import { Reveal } from "@/components/Reveal";
import capture01 from "@/assets/capture-01.jpg";
import capture02 from "@/assets/capture-02.jpg";
import capture03 from "@/assets/capture-03.jpg";
import capture04 from "@/assets/capture-04.jpg";
import capture05 from "@/assets/capture-05.jpg";

const captures = [
  { src: capture01, alt: "2,6 millions de FG générés en une journée" },
  { src: capture02, alt: "Résultats e-commerce — capture 2" },
  { src: capture03, alt: "Résultats e-commerce — capture 3" },
  { src: capture04, alt: "+ de 5 millions de FCFA en 03 mois" },
  { src: capture05, alt: "+ de 2 millions de FCFA en 30 jours" },
];

const faqs = [
  {
    q: "Je ne sais pas créer une boutique, ça marche pour moi ?",
    a: "Oui. Tu n'as rien à configurer toi-même : tu nous envoies ta boutique (ou on t'aide à la créer si tu n'en as pas), et on s'occupe de tout le reste.",
  },
  {
    q: "En combien de temps je reçois ma boutique ?",
    a: "En général sous 24 à 72h après la confirmation de ta commande, selon le nombre de commandes en cours.",
  },
  {
    q: "Comment je paie ?",
    a: "Via les moyens de paiement locaux : Mixx by Yas, Flooz, ou tout autre moyen disponible dans ton pays. On t'envoie les détails de paiement dès ta commande.",
  },
  {
    q: "Et si je ne suis pas satisfait ?",
    a: "Tu as 7 jours pour demander un remboursement intégral, sans justification. Zéro risque.",
  },
  {
    q: "Les produits sont-ils inclus dans la boutique ?",
    a: "Oui. Ta boutique arrive avec plus de 10 produits gagnants déjà ajoutés et les pages optimisées pour vendre.",
  },
  {
    q: "Combien de temps dure l'accompagnement ?",
    a: "3 mois complets : 2 lives de formation et de suivi par semaine (Google Meet), plus un support disponible 7j/7 pour t'aider à surmonter tes blocages — du sourcing jusqu'à ton premier lancement publicitaire.",
  },
  {
    q: "Je n'y connais rien au sourcing, vous m'aidez ?",
    a: "Oui. On t'accompagne sur ton premier sourcing avec nos experts logistique, que ce soit localement ou en Chine.",
  },
];

export function Proof() {
  return (
    <section id="preuves" className="section-watermark wm-right relative py-20">
      <div className="pointer-events-none absolute right-0 top-1/4 h-64 w-64 rounded-full bg-[#b3001b]/10 blur-[100px]" />
      <div className="relative mx-auto max-w-5xl px-4">
        <Reveal>
          <p className="font-advent text-center text-xs font-semibold uppercase tracking-[0.3em] text-[#fac9b8]">
            Preuves
          </p>
          <h2 className="font-display mt-4 text-center text-3xl uppercase sm:text-4xl">
            Des résultats, pas des promesses
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-neutral-400">
            Des ventes réelles générées avec la même méthode que celle qu'on
            installe dans ta boutique.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {captures.map((c, i) => (
            <Reveal
              key={i}
              delay={i * 100}
              className={i === 4 ? "lg:col-start-2" : ""}
            >
              <a
                href={c.src}
                target="_blank"
                rel="noopener noreferrer"
                className="block overflow-hidden rounded-xl border border-white/10 shadow-[0_16px_50px_-20px_rgba(0,0,0,0.9)] transition duration-300 hover:-translate-y-1 hover:border-[#e10a17]/50"
              >
                <img
                  src={c.src}
                  alt={c.alt}
                  loading="lazy"
                  className="w-full object-cover"
                />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Faq() {
  return (
    <section className="section-watermark wm-left relative border-t border-white/5 bg-[#0c0c0c] py-20">
      <div className="mx-auto max-w-3xl px-4">
        <Reveal>
          <p className="font-advent text-center text-xs font-semibold uppercase tracking-[0.3em] text-[#fac9b8]">
            Questions fréquentes
          </p>
          <h2 className="font-display mt-4 text-center text-3xl uppercase sm:text-4xl">
            Ce que tu te demandes encore
          </h2>
        </Reveal>
        <div className="mt-10 space-y-3">
          {faqs.map((f, i) => (
            <Reveal key={i} delay={i * 80}>
              <details className="faq-item group rounded-xl border border-white/10 bg-black/60 px-5 py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                  <span className="font-semibold text-neutral-100">{f.q}</span>
                  <span className="faq-plus font-display text-xl text-[#e10a17]">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                  {f.a}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
