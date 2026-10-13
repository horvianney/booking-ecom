import { CtaButton } from "@/components/CtaButton";
import { Reveal } from "@/components/Reveal";

const proofs = [
  { big: "5 ans+", label: "d'expérience" },
  { big: "30 millions", label: "déjà générés" },
  { big: "Terrain", label: "une méthode testée sur le terrain" },
];

/**
 * P4 · Crédibilité · Expertise et résultats.
 * Emplacements prévus par la wireframe pour une photo expert et une capture
 * de résultat réel : à ajouter dès que les visuels sont fournis.
 */
export function WhyUs() {
  return (
    <section id="pourquoi-nous" className="section-watermark wm-left relative border-t border-white/5 bg-[#0c0c0c] py-20">
      <div className="pointer-events-none absolute left-0 top-1/3 h-64 w-64 rounded-full bg-[#6bd425]/10 blur-[110px]" />
      <div className="relative mx-auto max-w-4xl px-4">
        <Reveal>
          <p className="font-advent text-center text-xs font-semibold uppercase tracking-[0.3em] text-[#fac9b8]">
            Crédibilité
          </p>
          <h2 className="font-display mt-4 text-center text-3xl uppercase sm:text-4xl">
            Pourquoi nous <span className="text-brand-gradient">faire confiance</span> ?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-neutral-400">
            Conçu par des experts, déjà utilisé pour générer de vrais résultats.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {proofs.map((p, i) => (
            <Reveal key={i} delay={i * 120}>
              <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-white/10 bg-[#101010] p-7 text-center transition duration-300 hover:-translate-y-1.5 hover:border-[#6bd425]/50">
                <p className="font-display text-3xl uppercase text-brand-gradient sm:text-4xl">
                  {p.big}
                </p>
                <p className="font-advent mt-3 text-xs font-medium uppercase tracking-[0.15em] text-neutral-400">
                  {p.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-10 flex justify-center">
            <CtaButton className="w-full sm:w-auto sm:px-10">
              Je suis prêt à obtenir ma boutique
            </CtaButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
