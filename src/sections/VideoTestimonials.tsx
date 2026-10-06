import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { YOUTUBE_TESTIMONIAL_IDS } from "@/config";

/** Mini-lecteur facade : miniature légère, iframe YouTube chargée au clic. */
function VideoCard({ id }: { id: string }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.9)]">
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title="Témoignage vidéo client"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label="Lire le témoignage vidéo"
          className="group absolute inset-0 h-full w-full cursor-pointer"
        >
          <img
            src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
            alt="Témoignage vidéo client"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <span className="absolute inset-0 bg-black/30 transition group-hover:bg-black/20" />
          <span className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 shadow-lg ring-1 ring-black/10 transition group-hover:scale-110">
            <svg viewBox="0 0 24 24" fill="#e10a17" className="ml-0.5 h-4 w-4">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}

/**
 * Section témoignages vidéo.
 * Masquée tant qu'aucun ID n'est renseigné dans config.ts (YOUTUBE_TESTIMONIAL_IDS).
 */
export function VideoTestimonials() {
  if (YOUTUBE_TESTIMONIAL_IDS.length === 0) return null;

  return (
    <section id="temoignages-video" className="section-watermark wm-left relative py-20">
      <div className="pointer-events-none absolute right-0 top-1/3 h-64 w-64 rounded-full bg-[#b3001b]/10 blur-[100px]" />
      <div className="relative mx-auto max-w-5xl px-4">
        <Reveal>
          <p className="font-advent text-center text-xs font-semibold uppercase tracking-[0.3em] text-[#fac9b8]">
            En vidéo
          </p>
          <h2 className="font-display mt-4 text-center text-3xl uppercase sm:text-4xl">
            Ils racontent <span className="text-brand-gradient">leur expérience</span>
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {YOUTUBE_TESTIMONIAL_IDS.map((id) => (
            <Reveal key={id}>
              <VideoCard id={id} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
