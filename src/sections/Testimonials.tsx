import { Reveal } from "@/components/Reveal";
import { TESTIMONIALS } from "@/config";

const avatarColors = [
  "bg-[#b3001b]", "bg-[#2563eb]", "bg-[#9333ea]", "bg-[#ea580c]", "bg-[#0d9488]",
];

/**
 * Section témoignages photos.
 * Si un témoignage a une photo (fichier dans src/assets), elle est affichée ;
 * sinon on affiche un avatar avec les initiales.
 */
export function Testimonials() {
  if (TESTIMONIALS.length === 0) return null;

  return (
    <section id="temoignages" className="section-watermark wm-right relative border-t border-white/5 bg-[#0c0c0c] py-20">
      <div className="pointer-events-none absolute left-0 top-1/4 h-64 w-64 rounded-full bg-[#6bd425]/10 blur-[110px]" />
      <div className="relative mx-auto max-w-6xl px-4">
        <Reveal>
          <p className="font-advent text-center text-xs font-semibold uppercase tracking-[0.3em] text-[#fac9b8]">
            Témoignages
          </p>
          <h2 className="font-display mt-4 text-center text-3xl uppercase sm:text-4xl">
            Ils ont lancé <span className="text-brand-gradient">leur boutique</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-neutral-400">
            Des débutants comme toi, qui vendent aujourd'hui avec leur boutique
            Booking E-com Starter.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => {
            const initials = t.name
              .split(" ")
              .map((w) => w[0])
              .join("")
              .slice(0, 2)
              .toUpperCase();
            return (
              <Reveal key={i} delay={i * 120}>
                <figure className="flex h-full flex-col rounded-2xl border border-white/10 bg-[#101010] p-6">
                  <div className="text-sm tracking-widest text-[#f5c518]" aria-label="5 étoiles">
                    ★★★★★
                  </div>
                  <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-neutral-300">
                    « {t.text} »
                  </blockquote>
                  <span className="mt-4 inline-flex w-fit items-center rounded-full border border-[#6bd425]/40 bg-[#6bd425]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-[#6bd425]">
                    ✅ {t.result}
                  </span>
                  <figcaption className="mt-5 flex items-center gap-3 border-t border-white/5 pt-4">
                    {t.photo ? (
                      <img
                        src={`/temoignages/${t.photo}`}
                        alt={`Photo de ${t.name}`}
                        loading="lazy"
                        className="h-11 w-11 rounded-full object-cover ring-2 ring-white/10"
                      />
                    ) : (
                      <span
                        className={`flex h-11 w-11 items-center justify-center rounded-full text-sm font-bold text-white ring-2 ring-white/10 ${avatarColors[i % avatarColors.length]}`}
                      >
                        {initials}
                      </span>
                    )}
                    <div>
                      <p className="text-sm font-semibold text-white">{t.name}</p>
                      <p className="text-xs text-neutral-500">{t.city}</p>
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
