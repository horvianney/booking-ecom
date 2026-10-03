import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { YOUTUBE_VIDEO_ID } from "@/config";

/**
 * Section vidéo YouTube avec "facade" : la miniature seule est chargée
 * au départ (page ultra rapide), le lecteur YouTube ne se charge qu'au clic.
 * La section ne s'affiche que si YOUTUBE_VIDEO_ID est renseigné dans config.ts.
 */
export function VideoSection() {
  const [playing, setPlaying] = useState(false);

  if (!YOUTUBE_VIDEO_ID) return null;

  const thumb = `https://i.ytimg.com/vi/${YOUTUBE_VIDEO_ID}/maxresdefault.jpg`;

  return (
    <section id="video" className="section-watermark wm-left relative border-t border-white/5 bg-[#0c0c0c] py-20">
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-[#b3001b]/15 blur-[130px]" />
      <div className="relative mx-auto max-w-4xl px-4">
        <Reveal>
          <p className="font-advent text-center text-xs font-semibold uppercase tracking-[0.3em] text-[#fac9b8]">
            Regarde avant de décider
          </p>
          <h2 className="font-display mt-4 text-center text-3xl uppercase sm:text-4xl">
            Découvre l'offre <span className="text-brand-gradient">en vidéo</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-neutral-400">
            Tout ce que contient le Booking E-com Starter, expliqué en quelques minutes.
          </p>
        </Reveal>

        <Reveal delay={150}>
          <div className="relative mx-auto mt-10 max-w-3xl">
            <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-[radial-gradient(circle_at_50%_40%,rgba(179,0,27,0.25),transparent_65%)] blur-xl" />
            <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.9)]">
              {playing ? (
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&rel=0`}
                  title="Présentation Booking E-com Starter"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setPlaying(true)}
                  aria-label="Lire la vidéo de présentation"
                  className="group absolute inset-0 h-full w-full cursor-pointer"
                >
                  <img
                    src={thumb}
                    alt="Vidéo de présentation Booking E-com Starter"
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <span className="absolute inset-0 bg-black/30 transition group-hover:bg-black/20" />
                  <span className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 shadow-lg ring-1 ring-black/10 transition group-hover:scale-110 sm:h-12 sm:w-12">
                    <svg viewBox="0 0 24 24" fill="#e10a17" className="ml-0.5 h-4 w-4 sm:h-5 sm:w-5">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                </button>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
