import { CtaButton } from "@/components/CtaButton";
import { Reveal } from "@/components/Reveal";

const stack = [
  { label: "Boutique Shopify brandée par nos experts", value: "150 000 FCFA" },
  { label: "10+ produits gagnants ajoutés", value: "50 000 FCFA" },
  { label: "Formation complète e-commerce Afrique", value: "100 000 FCFA" },
  { label: "Sourcing accompagné (local / Chine)", value: "75 000 FCFA" },
  { label: "Visuels publicitaires Facebook", value: "75 000 FCFA" },
  { label: "Accompagnement 3 mois (2 lives/sem. + support 7j/7)", value: "100 000 FCFA" },
];

export function Price() {
  return (
    <section id="prix" className="section-watermark wm-right relative overflow-hidden py-20">
      <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-[36rem] -translate-x-1/2 rounded-full bg-[#b3001b]/15 blur-[130px]" />
      <div className="relative mx-auto max-w-3xl px-4">
        <Reveal>
          <p className="font-advent text-center text-xs font-semibold uppercase tracking-[0.3em] text-[#fac9b8]">
            Combien ça vaut
          </p>
          <h2 className="font-display mt-4 text-center text-3xl uppercase sm:text-4xl">
            Tout ce que tu reçois{" "}
            <span className="text-brand-gradient">aujourd'hui</span>
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-[#0e0e0e] shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)]">
            <div className="bg-brand-gradient px-6 py-4">
              <p className="font-display text-center text-sm uppercase tracking-widest text-white">
                Booking E-com Starter — Accès complet
              </p>
            </div>
            <div className="divide-y divide-white/5 px-6">
              {stack.map((s, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between gap-4 py-4"
                >
                  <span className="flex items-center gap-3 text-neutral-200">
                    <span className="text-[#6bd425]">✓</span> {s.label}
                  </span>
                  <span className="whitespace-nowrap text-sm text-neutral-500 line-through">
                    {s.value}
                  </span>
                </div>
              ))}
            </div>
            <div className="border-t border-dashed border-white/15 px-6 py-6 text-center">
              <p className="text-sm uppercase tracking-wide text-neutral-400">
                Valeur totale :{" "}
                <span className="line-through decoration-[#e10a17] decoration-2">
                  550 000 FCFA
                </span>
              </p>
              <p className="font-display mt-3 text-5xl text-peach sm:text-6xl">
                29 900 <span className="text-2xl">FCFA</span>
              </p>
              <p className="font-advent mt-2 text-xs font-medium uppercase tracking-[0.2em] text-[#e10a17]">
                Prix de lancement — peut augmenter à tout moment
              </p>
              <CtaButton className="mt-6 w-full sm:w-auto">
                Oui, je veux ma boutique maintenant
              </CtaButton>
              <p className="font-advent mt-4 text-[11px] font-medium uppercase tracking-[0.15em] text-neutral-500">
                Mixx by Yas · Flooz · Autres moyens locaux · Garantie 7 jours
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Guarantee() {
  return (
    <section className="section-watermark wm-left relative border-t border-white/5 bg-[#0c0c0c] py-20">
      <div className="mx-auto max-w-3xl px-4">
        <Reveal>
          <div className="flex flex-col items-center gap-6 rounded-2xl border border-[#6bd425]/30 bg-[#6bd425]/5 p-8 text-center sm:flex-row sm:text-left">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-[#6bd425]/15 text-4xl ring-1 ring-[#6bd425]/40">
              🛡️
            </div>
            <div>
              <h2 className="font-display text-2xl uppercase">
                Garantie <span className="text-sgbus">satisfait ou remboursé</span> — 7 jours
              </h2>
              <p className="mt-3 text-neutral-300">
                Tu rejoins Booking E-com sans stress. Si après 7 jours tu estimes
                que le pack ne t'apporte pas de valeur, tu es remboursé
                intégralement. Aucune question, aucun risque — juste une
                opportunité à saisir maintenant.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
