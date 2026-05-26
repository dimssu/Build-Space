import { useEffect, useRef } from "react";

interface Props {
  videoMp4: string;
  videoWebm?: string;
  poster: string;
  altText: string;
}

/**
 * Scroll-scrubbed cinematic video.
 * The user scrolls; the video's currentTime is mapped to scroll progress
 * through the pinned section. Falls back to a static <img> when the user
 * prefers reduced motion or the video can't load (e.g. iOS Low Power Mode).
 */
export default function ScrollVideo({ videoMp4, videoWebm, poster, altText }: Props) {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const fallbackRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      if (videoRef.current) videoRef.current.style.display = "none";
      if (fallbackRef.current) fallbackRef.current.style.display = "block";
      return;
    }

    let ctx: gsap.Context | undefined;
    let cleanupListener: (() => void) | undefined;

    (async () => {
      const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      gsap.registerPlugin(ScrollTrigger);

      const section = sectionRef.current;
      const video = videoRef.current;
      if (!section || !video) return;

      // iOS Safari: honour low-power / autoplay restrictions.
      video.muted = true;
      video.playsInline = true;
      video.preload = "auto";

      const ready = () =>
        new Promise<void>((resolve) => {
          if (video.readyState >= 2) return resolve();
          const on = () => {
            video.removeEventListener("loadeddata", on);
            resolve();
          };
          video.addEventListener("loadeddata", on);
          video.load();
        });

      const handleError = () => {
        video.style.display = "none";
        if (fallbackRef.current) fallbackRef.current.style.display = "block";
      };
      video.addEventListener("error", handleError);
      cleanupListener = () => video.removeEventListener("error", handleError);

      try {
        await ready();
      } catch {
        handleError();
        return;
      }

      ctx = gsap.context(() => {
        const tween = { t: 0 };
        ScrollTrigger.create({
          trigger: section,
          start: "top top",
          end: "+=180%",
          pin: true,
          scrub: 0.4,
          onUpdate: (self) => {
            const dur = video.duration || 0;
            if (!dur) return;
            const target = self.progress * dur;
            // Throttle: only seek if we've moved enough to matter (~1 frame at 30fps)
            if (Math.abs(target - tween.t) > 0.033) {
              tween.t = target;
              try {
                video.currentTime = target;
              } catch {
                /* seeking too fast on some browsers; ignore */
              }
            }
          },
        });
      }, section);
    })();

    return () => {
      cleanupListener?.();
      ctx?.revert();
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden"
      style={{ background: "var(--color-ink)" }}
    >
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        muted
        playsInline
        preload="auto"
        poster={poster}
        aria-hidden="true"
      >
        {videoWebm ? <source src={videoWebm} type="video/webm" /> : null}
        <source src={videoMp4} type="video/mp4" />
      </video>

      <img
        ref={fallbackRef}
        src={poster}
        alt={altText}
        className="absolute inset-0 h-full w-full object-cover"
        style={{ display: "none" }}
      />

      {/* Vignette so the overlay copy is always readable, no matter what frame is on screen */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.18 0.015 260 / 0.55) 0%, oklch(0.18 0.015 260 / 0.15) 35%, oklch(0.18 0.015 260 / 0.15) 65%, oklch(0.18 0.015 260 / 0.7) 100%)",
        }}
      />
    </div>
  );
}
