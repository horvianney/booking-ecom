import { Reveal } from "@/components/Reveal";

const pourToi = [
  "Tu veux te lancer dans l'e-commerce sans perdre des semaines sur la technique",
  "Tu veux une boutique professionnelle, prête à vendre dès la livraison",
  "Tu es prêt à suivre les lives et à appliquer, même 1h par jour",
  "Tu veux être accompagné jusqu'à tes premières ventes, pas lâché après le paiement",
];

const pasPourToi = [
  "Tu cherches un revenu magique sans rien faire",
  "Tu n'es pas prêt à consacrer un minimum de temps à ta boutique",
  "Tu préfères tout apprendre seul, même si ça prend 6 mois",
  "Tu n'as pas l'intention de lancer de publicité",
];

export function WhoFor() {
  return (
    <section id="pour-qui" className="section-watermark wm-right relative py-20">
      <div className="relative mx-auto max-w-5xl px-4">
        <Reveal>
          <p className="font-advent text-center text-xs font-semibold uppercase tracking-[0.3em] text-[#fac9b8]">
            Soyons honnêtes
          </p>
          <h2 className="font-display mt-4 text-center text-3xl uppercase sm:text-4xl">
            Est-ce fait <span className="text-brand-gradient">pour toi ?</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Reveal delay={100}>
            <div className="h-full rounded-2xl border border-[#6bd425]/30 bg-[#6bd425]/5 p-7">
              <h3 className="font-display flex items-center gap-2 text-lg uppercase text-[#6bd425]">
                <span>✅</span> C'est fait pour toi si…
              </h3>
              <ul className="mt-5 space-y-3">
                {pourToi.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-neutral-200">
                    <span className="mt-0.5 text-[#6bd425]">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="h-full rounded-2xl border border-[#e10a17]/30 bg-[#b3001b]/5 p-7">
              <h3 className="font-display flex items-center gap-2 text-lg uppercase text-[#ff6b6b]">
                <span>❌</span> Ce n'est PAS pour toi si…
              </h3>
              <ul className="mt-5 space-y-3">
                {pasPourToi.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-neutral-300">
                    <span className="mt-0.5 text-[#e10a17]">✗</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
