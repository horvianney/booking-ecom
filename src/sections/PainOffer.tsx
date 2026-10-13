import { CtaButton } from "@/components/CtaButton";
import { Reveal } from "@/components/Reveal";

const pains = [
  "Tu manques de connaissances en e-commerce",
  "Tu n'as pas le temps de tout gérer",
  "Tu ne sais pas créer ta boutique",
  "Tu ne trouves pas les bons produits",
  "Tu n'arrives pas à obtenir tes premières ventes",
  "Tu manques d'accompagnement",
];

const offer = [
  {
    icon: "🛒",
    title: "Boutique Shopify brandée",
    desc: "Créée par nos experts : configurée, design pro et pages optimisées pour convertir. Tu reçois un lien : tu commences à vendre.",
  },
  {
    icon: "🏆",
    title: "+ de 10 produits qui marchent inclus",
    desc: "Déjà ajoutés et optimisés dans ta boutique. Tu ne pars jamais de zéro : ta boutique arrive remplie, prête à vendre.",
  },
  {
    icon: "🎓",
    title: "Formation complète e-commerce",
    desc: "Le fonctionnement réel de l'e-commerce en Afrique, expliqué pas à pas. Pas de théorie inutile : que du terrain.",
  },
  {
    icon: "🤝",
    title: "3 mois d'accompagnement",
    desc: "Un suivi pour passer à l'action et avancer sans rester seul.",
  },
  {
    icon: "🎥",
    title: "2 lives par semaine",
    desc: "Questions et conseils en direct avec l'équipe.",
  },
  {
    icon: "💬",
    title: "Support 7j/7",
    desc: "Une équipe disponible chaque jour pour te répondre.",
  },
];

const steps = [
  {
    n: "01",
    title: "Réservez votre boutique",
    desc: "Remplissez le formulaire et effectuez votre paiement sécurisé.",
  },
  {
    n: "02",
    title: "Nous préparons votre boutique",
    desc: "Notre équipe configure votre boutique et intègre les éléments prévus dans votre offre.",
  },
  {
    n: "03",
    title: "Recevez & commencez",
    desc: "Recevez votre boutique et bénéficiez de votre accompagnement pour commencer à l'exploiter.",
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
            Tu te <span className="text-brand-gradient">reconnais</span> ?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-neutral-400">
            Voici ce que tu vis peut-être aujourd'hui.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {pains.map((p, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="flex h-full flex-col items-center gap-3 rounded-xl border border-white/10 bg-black/60 p-5 text-center">
                <span className="font-display text-xl text-[#e10a17]">✗</span>
                <p className="text-neutral-300">{p}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={300}>
          <div className="mt-8 rounded-xl border border-[#e10a17]/40 bg-[#b3001b]/10 p-6 text-center">
            <p className="font-display text-lg uppercase text-white sm:text-xl">
              Si tu es dans ce cas,{" "}
              <span className="text-[#e10a17]">cette solution est pour toi.</span>
            </p>
          </div>
        </Reveal>
        <Reveal delay={350}>
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

export function Offer() {
  return (
    <section id="offre" className="section-watermark wm-right relative py-20">
      <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-[#6bd425]/15 blur-[130px]" />
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
              <div className="group relative h-full rounded-2xl border border-white/10 bg-[#101010] p-7 text-center transition duration-300 hover:-translate-y-1.5 hover:border-[#6bd425]/50 hover:shadow-[0_20px_60px_-15px_rgba(107,212,37,0.25)]">
                <span className="font-display absolute right-5 top-4 text-xl text-white/15 transition group-hover:text-[#6bd425]/50">
                  0{i + 1}
                </span>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[#b3001b]/20 text-2xl ring-1 ring-[#e10a17]/40">
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
        <Reveal delay={200}>
          <div className="mt-10 flex justify-center">
            <CtaButton className="w-full sm:w-auto sm:px-10">
              Je me lance maintenant
            </CtaButton>
          </div>
        </Reveal>
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
        <Reveal delay={200}>
          <div className="mt-10 flex justify-center">
            <CtaButton className="w-full sm:w-auto sm:px-10">
              Je réserve ma boutique
            </CtaButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
