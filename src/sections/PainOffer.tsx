import { Reveal } from "@/components/Reveal";

const pains = [
  "Tu as payé des formations chères… et tu n'as toujours pas de boutique en ligne.",
  "Tu as perdu des semaines sur Shopify, et ta boutique n'est toujours pas prête.",
  "Tu as les idées, l'envie, l'ambition — mais la technique te bloque à chaque étape.",
];

const offer = [
  {
    icon: "🛒",
    title: "Boutique Shopify brandée",
    desc: "Créée par nos experts : configurée, design pro et pages optimisées pour convertir. Tu reçois un lien : tu commences à vendre.",
  },
  {
    icon: "🏆",
    title: "10+ produits gagnants inclus",
    desc: "Déjà ajoutés et optimisés dans ta boutique. Tu ne pars jamais de zéro : ta boutique arrive remplie, prête à vendre.",
  },
  {
    icon: "🎓",
    title: "Formation complète e-commerce",
    desc: "Le fonctionnement réel de l'e-commerce en Afrique, expliqué pas à pas. Pas de théorie inutile : que du terrain.",
  },
  {
    icon: "📦",
    title: "Sourcing accompagné",
    desc: "On t'accompagne sur ton premier sourcing, avec l'appui de nos experts logistique — localement ou en Chine.",
  },
  {
    icon: "🚀",
    title: "Premier lancement pub accompagné",
    desc: "Visuels publicitaires prêts à l'emploi + accompagnement sur ta première campagne Facebook pour maximiser tes chances.",
  },
  {
    icon: "🤝",
    title: "3 mois d'accompagnement",
    desc: "2 lives de formation et de suivi par semaine (Google Meet) + support disponible 7j/7. On te suit jusqu'aux résultats.",
  },
];

const steps = [
  {
    n: "01",
    title: "Tu commandes",
    desc: "Tu paies 29 900 FCFA via mobile money (Mixx by Yas, Flooz…) et tu nous confirmes ta commande.",
  },
  {
    n: "02",
    title: "Tu nous envoies ta boutique",
    desc: "Tu as déjà une boutique ? Parfait. Tu n'en as pas ? On t'aide à la créer, étape par étape.",
  },
  {
    n: "03",
    title: "On configure tout",
    desc: "Produits, design, pages, réglages. Tu reçois ta boutique prête à vendre — et tes 3 mois d'accompagnement commencent.",
  },
];

export function Pain() {
  return (
    <section id="douleur" className="section-watermark wm-left relative border-t border-white/5 bg-[#0c0c0c] py-20">
      <div className="pointer-events-none absolute left-0 top-1/3 h-64 w-64 rounded-full bg-[#b3001b]/15 blur-[100px]" />
      <div className="relative mx-auto max-w-4xl px-4">
        <Reveal>
          <p className="font-advent text-center text-xs font-semibold uppercase tracking-[0.3em] text-[#e10a17]">
            Le vrai problème
          </p>
          <h2 className="font-display mt-4 text-center text-3xl uppercase sm:text-4xl">
            Tu reconnais ça ?
          </h2>
        </Reveal>
        <div className="mt-10 space-y-4">
          {pains.map((p, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="flex items-start gap-4 rounded-xl border border-white/10 bg-black/60 p-5">
                <span className="font-display text-xl text-[#e10a17]">✗</span>
                <p className="text-neutral-300">{p}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={300}>
          <div className="mt-8 rounded-xl border border-[#e10a17]/40 bg-[#b3001b]/10 p-6 text-center">
            <p className="font-display text-lg uppercase text-white sm:text-xl">
              Résultat : tu stagnes…{" "}
              <span className="text-[#e10a17]">
                pendant que d'autres vendent chaque semaine.
              </span>
            </p>
            <p className="font-advent mt-2 text-sm font-medium tracking-wide text-neutral-400">
              Il est temps de faire différemment.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Offer() {
  return (
    <section id="offre" className="section-watermark wm-right relative py-20">
      <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-[#561115]/50 blur-[110px]" />
      <div className="relative mx-auto max-w-6xl px-4">
        <Reveal>
          <p className="font-advent text-center text-xs font-semibold uppercase tracking-[0.3em] text-[#fac9b8]">
            La solution
          </p>
          <h2 className="font-display mt-4 text-center text-3xl uppercase sm:text-4xl">
            Ce que tu reçois avec{" "}
            <span className="text-brand-gradient">Booking E-com</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-neutral-400">
            Boutique, produits, formation, accompagnement : tout l'écosystème
            pour réussir, même si tu pars de zéro.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {offer.map((o, i) => (
            <Reveal key={i} delay={i * 120}>
              <div className="group h-full rounded-2xl border border-white/10 bg-[#101010] p-7 transition duration-300 hover:-translate-y-1.5 hover:border-[#e10a17]/60 hover:shadow-[0_20px_60px_-15px_rgba(179,0,27,0.4)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#b3001b]/20 text-2xl ring-1 ring-[#e10a17]/40">
                  {o.icon}
                </div>
                <h3 className="font-display mt-5 text-lg uppercase leading-snug">
                  {o.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                  {o.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Steps() {
  return (
    <section id="etapes" className="section-watermark wm-left relative border-t border-white/5 bg-[#0c0c0c] py-20">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <p className="font-advent text-center text-xs font-semibold uppercase tracking-[0.3em] text-[#fac9b8]">
            Comment ça marche
          </p>
          <h2 className="font-display mt-4 text-center text-3xl uppercase sm:text-4xl">
            De ta commande à ta boutique en 3 étapes
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={i} delay={i * 120}>
              <div className="relative h-full rounded-2xl border border-white/10 bg-black/60 p-7">
                <span className="font-display text-5xl text-white/10">{s.n}</span>
                <h3 className="font-display mt-3 text-lg uppercase text-[#fac9b8]">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                  {s.desc}
                </p>
                {i < steps.length - 1 && (
                  <span className="absolute -right-4 top-1/2 hidden -translate-y-1/2 text-2xl text-[#e10a17]/60 md:block">
                    →
                  </span>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
