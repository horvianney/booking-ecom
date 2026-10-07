import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { CtaButton } from "@/components/CtaButton";
import { Countdown } from "@/components/Countdown";
import { YOUTUBE_VIDEO_ID } from "@/config";
import promoVideo from "@/assets/promo-video.png";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    YT?: any;
    onYouTubeIframeAPIReady?: () => void;
  }
}

const PLAYER_ID = "yt-vsl-player";

/**
 * Section vidéo YouTube avec lecture automatique à l'arrivée sur la section.
 * - Si le visiteur a déjà cliqué/tapé sur la page : lecture AVEC le son.
 * - Sinon : lecture en muet (obligation des navigateurs) + bouton "Active le son".
 * La miniature seule est chargée au départ : la page reste ultra rapide.
 * La section ne s'affiche que si YOUTUBE_VIDEO_ID est renseigné dans config.ts.
 */
export function VideoSection() {
  const [started, setStarted] = useState(false);
  const [muted, setMuted] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const playerRef = useRef<any>(null);
  const interactedRef = useRef(false);

  // Mémorise la 1re interaction du visiteur (clic/tap) -> le son sera autorisé
  useEffect(() => {
    const mark = () => {
      interactedRef.current = true;
    };
    window.addEventListener("pointerdown", mark, { once: true });
    window.addEventListener("keydown", mark, { once: true });
    return () => {
      window.removeEventListener("pointerdown", mark);
      window.removeEventListener("keydown", mark);
    };
  }, []);

  // Démarre la vidéo quand la section entre dans l'écran
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setStarted(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Charge l'API YouTube et lance la lecture
  useEffect(() => {
    if (!started) return;
    const withSound = interactedRef.current;

    const create = () => {
      playerRef.current = new window.YT.Player(PLAYER_ID, {
        videoId: YOUTUBE_VIDEO_ID,
        playerVars: {
          autoplay: 1,
          mute: withSound ? 0 : 1,
          rel: 0,
          playsinline: 1,
        },
        events: {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          onReady: (e: any) => e.target.playVideo(),
          onAutoplayBlocked: () => {
            // Le navigateur a bloqué le son : on bascule en muet
            playerRef.current?.mute();
            playerRef.current?.playVideo();
            setMuted(true);
          },
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          onStateChange: (e: any) => {
            if (e.data === window.YT.PlayerState.PLAYING) {
              setMuted(Boolean(playerRef.current?.isMuted?.()));
            }
          },
        },
      });
    };

    if (window.YT?.Player) {
      create();
    } else {
      const prev = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        prev?.();
        create();
      };
      if (!document.querySelector('script[src*="iframe_api"]')) {
        const s = document.createElement("script");
        s.src = "https://www.youtube.com/iframe_api";
        document.body.appendChild(s);
      }
    }
  }, [started]);

  const unmute = () => {
    playerRef.current?.unMute();
    playerRef.current?.setVolume(100);
    playerRef.current?.playVideo();
    setMuted(false);
  };

  if (!YOUTUBE_VIDEO_ID) return null;

  const thumb = `https://i.ytimg.com/vi/${YOUTUBE_VIDEO_ID}/maxresdefault.jpg`;

  return (
    <section
      id="video"
      ref={sectionRef}
      className="section-watermark wm-left relative border-t border-white/5 bg-[#0c0c0c] py-20"
    >
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
          <div className="mx-auto mt-6 max-w-2xl rounded-xl border border-[#e10a17]/40 bg-[#b3001b]/10 px-5 py-4 text-center">
            <p className="text-sm leading-relaxed text-neutral-200 sm:text-base">
              Boutique Shopify brandée, + de 10 produits gagnants, formation
              complète et 3 mois d'accompagnement pour{" "}
              <strong className="text-white">29 900 FCFA</strong> au lieu de{" "}
              <span className="line-through decoration-[#e10a17]">550 000 FCFA</span>.
              {" "}Garantie 90 jours, zéro risque.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="relative mx-auto mt-8 max-w-3xl">
            <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-[radial-gradient(circle_at_50%_40%,rgba(179,0,27,0.25),transparent_65%)] blur-xl" />
            <img
              src={promoVideo}
              alt="Saisis l'offre unique maintenant : 29 900 XOF au lieu de 550 000 XOF, offre limitée à 20 places, économisez 520 000 XOF"
              className="relative w-full rounded-2xl border border-white/10 object-cover shadow-[0_30px_80px_-20px_rgba(0,0,0,0.9)]"
              loading="lazy"
            />
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="relative mx-auto mt-10 max-w-3xl">
            <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-[radial-gradient(circle_at_50%_40%,rgba(179,0,27,0.25),transparent_65%)] blur-xl" />
            <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.9)]">
              {started ? (
                <>
                  <div id={PLAYER_ID} className="absolute inset-0 h-full w-full" />
                  {muted && (
                    <button
                      type="button"
                      onClick={unmute}
                      className="btn-red font-display absolute bottom-4 left-1/2 z-10 -translate-x-1/2 rounded-full px-5 py-2.5 text-xs uppercase tracking-wide sm:text-sm"
                    >
                      🔊 Active le son
                    </button>
                  )}
                </>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    interactedRef.current = true; // clic = geste -> son autorisé
                    setStarted(true);
                  }}
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

        <Reveal delay={250}>
          <div className="mt-8 flex flex-col items-center gap-6">
            <Countdown />
            <CtaButton className="w-full sm:w-auto sm:px-10">
              Je réserve ma place maintenant
            </CtaButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
