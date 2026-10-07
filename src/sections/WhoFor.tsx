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

        {/* Un seul bloc, divisé en deux moitiés côte à côte (mobile inclus) */}
        <Reveal delay={100}>
          <div className="mt-12 grid grid-cols-2 divide-x divide-white/10 overflow-hidden rounded-2xl border border-white/10 bg-[#0e0e0e]">
            <div className="bg-[#6bd425]/10 p-4 sm:p-7">
              <h3 className="font-display flex items-center gap-1.5 text-[13px] uppercase leading-tight text-[#6bd425] sm:gap-2 sm:text-lg">
                <span>✅</span> C'est fait pour toi si…
              </h3>
              <ul className="mt-4 space-y-2.5 sm:mt-5 sm:space-y-3">
                {pourToi.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-[11px] leading-snug text-neutral-200 sm:gap-3 sm:text-sm sm:leading-relaxed"
                  >
                    <span className="mt-0.5 shrink-0 text-[#6bd425]">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#b3001b]/10 p-4 sm:p-7">
              <h3 className="font-display flex items-center gap-1.5 text-[13px] uppercase leading-tight text-[#ff6b6b] sm:gap-2 sm:text-lg">
                <span>❌</span> Ce n'est PAS pour toi si…
              </h3>
              <ul className="mt-4 space-y-2.5 sm:mt-5 sm:space-y-3">
                {pasPourToi.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-[11px] leading-snug text-neutral-300 sm:gap-3 sm:text-sm sm:leading-relaxed"
                  >
                    <span className="mt-0.5 shrink-0 text-[#e10a17]">✗</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
