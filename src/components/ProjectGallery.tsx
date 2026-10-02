"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import {
  FaChevronLeft,
  FaChevronRight,
  FaTimes,
  FaLock,
  FaExternalLinkAlt,
  FaPlay,
  FaArrowLeft,
  FaArrowRight,
  FaImages,
} from "react-icons/fa";
import { isVideo, optimizedImageSrc, type Project } from "@/data/projects";
import { StatusBadge } from "./ProjectCard";

type Props = {
  project: Project;
  onClose: () => void;
  onPrevProject?: () => void;
  onNextProject?: () => void;
};

export default function ProjectGallery({ project, onClose, onPrevProject, onNextProject }: Props) {
  const [index, setIndex] = useState(0);
  const overlay = useRef<HTMLDivElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  const details = useRef<HTMLDivElement>(null);
  const swipeStart = useRef<number | null>(null);
  const count = project.media.length;

  const go = useCallback((i: number) => {
    if (count > 0) setIndex((i + count) % count);
  }, [count]);

  // New project: back to the first slide, details scrolled to top and faded in
  useEffect(() => {
    setIndex(0);
    details.current?.scrollTo({ top: 0 });
    gsap.fromTo(
      details.current?.children ?? [],
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.4, stagger: 0.04, ease: "power2.out", clearProps: "transform,opacity" },
    );
  }, [project.slug]);

  // Open animation + lock page scroll
  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(overlay.current, { opacity: 0 }, { opacity: 1, duration: 0.25 }).fromTo(
      panel.current,
      { y: 40, opacity: 0 },
      // clearProps so no leftover transform keeps the text on a blurry layer
      { y: 0, opacity: 1, duration: 0.45, ease: "power3.out", clearProps: "transform,opacity" },
      0.05,
    );
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      tl.kill();
      document.body.style.overflow = prev;
    };
  }, []);

  const close = useCallback(() => {
    gsap.to(panel.current, { y: 30, opacity: 0, duration: 0.2 });
    gsap.to(overlay.current, { opacity: 0, duration: 0.25, onComplete: onClose });
  }, [onClose]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") go(index + 1);
      if (e.key === "ArrowLeft") go(index - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [close, go, index]);

  const onPointerDown = (e: React.PointerEvent) => (swipeStart.current = e.clientX);
  const onPointerUp = (e: React.PointerEvent) => {
    if (swipeStart.current === null) return;
    const dx = e.clientX - swipeStart.current;
    swipeStart.current = null;
    if (Math.abs(dx) > 50) go(index + (dx < 0 ? 1 : -1));
  };

  const current = project.media[index];
  const arrow =
    "absolute top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-kjColorDark shadow-lg backdrop-blur transition hover:scale-110 hover:bg-kjColorPrime hover:text-white";

  return (
    <div
      ref={overlay}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-kjColorBlack/80 p-2 backdrop-blur-sm md:p-6"
      onClick={close}
      role="dialog"
      aria-modal="true"
      aria-label={project.name}
    >
      <div
        ref={panel}
        onClick={(e) => e.stopPropagation()}
        className="relative flex max-h-[94vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl antialiased dark:bg-kjColorBlack lg:h-[min(640px,90vh)] lg:flex-row"
      >
        {/* ---------- media ---------- */}
        <div className="flex shrink-0 flex-col bg-kjColorBlack lg:w-[62%]">
          <div
            className="relative aspect-video touch-pan-y select-none overflow-hidden lg:aspect-auto lg:flex-1"
            onPointerDown={onPointerDown}
            onPointerUp={onPointerUp}
          >
            {count > 0 ? (
              <>
                <div
                  className="flex h-full transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)]"
                  style={{ transform: `translateX(-${index * 100}%)` }}
                >
                  {project.media.map((m, i) => (
                    <div key={m.src} className="flex h-full w-full shrink-0 items-center justify-center p-3 md:p-6">
                      {isVideo(m.src) ? (
                        i === index ? (
                          <video
                            src={m.src}
                            controls
                            autoPlay
                            muted
                            playsInline
                            className="max-h-full max-w-full rounded-lg shadow-2xl"
                          />
                        ) : null
                      ) : (
                        <img
                          src={i === index ? optimizedImageSrc(m.src, 1400) : undefined}
                          alt={m.caption ?? project.name}
                          draggable={false}
                          loading={i === index ? "eager" : "lazy"}
                          className="max-h-full max-w-full rounded-lg object-contain shadow-2xl"
                        />
                      )}
                    </div>
                  ))}
                </div>

                {count > 1 && (
                  <>
                    <button onClick={() => go(index - 1)} aria-label="Previous image" className={`${arrow} left-3`}>
                      <FaChevronLeft />
                    </button>
                    <button onClick={() => go(index + 1)} aria-label="Next image" className={`${arrow} right-3`}>
                      <FaChevronRight />
                    </button>
                  </>
                )}
              </>
            ) : (
              <div className="flex h-full flex-col items-center justify-center gap-3 bg-kjColorDark text-kjColorLight/70">
                <FaImages className="text-4xl" aria-hidden="true" />
                <span className="text-sm font-semibold">Project preview pending</span>
              </div>
            )}
          </div>

          {/* caption + thumbnails */}
          <div className="flex items-center gap-4 border-t border-white/10 px-4 py-3 text-kjColorLight">
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium">{current?.caption ?? project.name}</p>
              {count > 1 && (
                <p className="text-xs text-kjColorLight/60">
                  {index + 1} of {count}
                </p>
              )}
            </div>
            {count > 1 && (
              <div className="flex gap-2 overflow-x-auto">
                {project.media.map((m, i) => (
                  <button
                    key={m.src}
                    onClick={() => go(i)}
                    aria-label={`Show ${m.caption ?? `slide ${i + 1}`}`}
                    className={`h-11 w-16 shrink-0 overflow-hidden rounded-md ring-2 transition ${
                      i === index ? "ring-kjColorPrime" : "opacity-50 ring-transparent hover:opacity-100"
                    }`}
                  >
                    {isVideo(m.src) ? (
                      <span className="flex h-full w-full items-center justify-center bg-white/10 text-xs">
                        <FaPlay />
                      </span>
                    ) : (
                      <img
                        src={optimizedImageSrc(m.src, 240)}
                        alt=""
                        loading="lazy"
                        className="h-full w-full object-cover object-top"
                      />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* ---------- details ---------- */}
        <div className="relative flex min-h-0 flex-1 flex-col">
          <button
            onClick={close}
            aria-label="Close"
            className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-kjColorLight text-kjColorDark transition hover:rotate-90 hover:bg-kjColorPrime hover:text-white dark:bg-white/10 dark:text-kjColorLight"
          >
            <FaTimes />
          </button>

          <div
            ref={details}
            className="flex-1 overflow-y-auto px-6 pb-6 pt-6 text-[15px] leading-relaxed text-[#3d3e40] dark:text-kjColorLight/85 md:px-8 md:pt-8"
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-kjColorPrime">
              {project.category === "native" ? "Native application" : "Web application"}
            </p>
            <h2 className="mt-2 pr-12 text-[28px] font-black capitalize leading-tight tracking-tight text-kjColorDark dark:text-white">
              {project.name}
            </h2>
            <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm">
              <StatusBadge project={project} />
              {project.role && <span className="font-medium">{project.role}</span>}
              {project.year && <span className="text-kjColorGray dark:text-kjColorLight/60">· {project.year}</span>}
            </div>

            <div className="mt-5 space-y-3">
              {project.description.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>

            {project.highlights && (
              <ul className="mt-5 space-y-2">
                {project.highlights.map((h) => (
                  <li key={h} className="flex gap-3">
                    <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-kjColorPrime" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            )}

            {project.tech.length > 0 && (
              <>
                <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.2em] text-kjColorGray dark:text-kjColorLight/60">
                  Tech stack
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-kjColorLight px-2.5 py-1 text-[13px] font-medium text-kjColorDark dark:bg-white/10 dark:text-kjColorLight"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </>
            )}

            {!project.link && (
              <div className="mt-6 flex items-start gap-3 rounded-lg border border-kjColorPrimeLight bg-kjColorLight/60 p-4 text-sm dark:border-white/10 dark:bg-white/5">
                <FaLock className="mt-1 shrink-0 text-kjColorPrime" />
                <p>
                  <span className="font-bold text-kjColorDark dark:text-white">Private project.</span> The
                  live app and code are not publicly accessible. Contact me for more information.
                </p>
              </div>
            )}
          </div>

          {/* sticky footer: CTA + project navigation */}
          <div className="flex items-center justify-between gap-3 border-t border-kjColorLight px-6 py-4 dark:border-white/10 md:px-8">
            {project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-kjColorPrime px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-kjColorPrime/30 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-kjColorPrime/40"
              >
                {project.linkLabel ?? "Visit live site"}
                <FaExternalLinkAlt className="text-xs" />
              </a>
            ) : (
              <span className="text-sm font-medium text-kjColorGray dark:text-kjColorLight/60">
                Details available on request
              </span>
            )}
            {(onPrevProject || onNextProject) && (
              <div className="flex gap-2">
                <button
                  onClick={onPrevProject}
                  aria-label="Previous project"
                  title="Previous project"
                  className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-kjColorLight text-kjColorDark transition hover:border-kjColorPrime hover:text-kjColorPrime dark:border-white/10 dark:text-kjColorLight"
                >
                  <FaArrowLeft className="text-sm" />
                </button>
                <button
                  onClick={onNextProject}
                  aria-label="Next project"
                  title="Next project"
                  className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-kjColorLight text-kjColorDark transition hover:border-kjColorPrime hover:text-kjColorPrime dark:border-white/10 dark:text-kjColorLight"
                >
                  <FaArrowRight className="text-sm" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
