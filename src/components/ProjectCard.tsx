import { FaImages, FaLock, FaGlobe, FaPlay } from "react-icons/fa";
import { isVideo, optimizedImageSrc, type Project } from "@/data/projects";

export function StatusBadge({ project }: { project: Project }) {
  return project.link ? (
    <span className="inline-flex items-center gap-1 rounded-full bg-kjColorPrime px-3 py-1 text-xs font-bold uppercase text-kjColorLight">
      <FaGlobe /> Live
    </span>
  ) : (
    <span className="inline-flex items-center gap-1 rounded-full bg-kjColorDark px-3 py-1 text-xs font-bold uppercase text-kjColorLight">
      <FaLock /> Private
    </span>
  );
}

export default function ProjectCard({ project, onOpen }: { project: Project; onOpen: () => void }) {
  const cover = project.media.find((m) => !isVideo(m.src)) ?? project.media[0];
  const videos = project.media.filter((m) => isVideo(m.src)).length;
  const images = project.media.length - videos;

  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`View ${project.name}`}
      className="project-card group relative block w-full overflow-hidden rounded-lg pf-card text-left focus:outline-none focus-visible:ring-4 focus-visible:ring-kjColorPrime/50"
    >
      <div className="aspect-[16/10] overflow-hidden rounded-lg bg-kjColorLight dark:bg-kjColorDark">
        {cover ? isVideo(cover.src) ? (
          <video src={cover.src} muted loop autoPlay playsInline className="h-full w-full object-cover object-top" />
        ) : (
          <img
            src={optimizedImageSrc(cover.src, 800)}
            alt={project.name}
            loading="lazy"
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-kjColorDark text-kjColorLight/70">
            <FaImages className="text-3xl" aria-hidden="true" />
            <span className="text-xs font-semibold uppercase">Preview pending</span>
          </div>
        )}
      </div>

      <div className="absolute left-3 top-3 z-20">
        <StatusBadge project={project} />
      </div>
      {project.media.length > 1 && (
        <div className="absolute right-3 top-3 z-20 inline-flex items-center gap-2 rounded-full bg-black/60 px-3 py-1 text-xs font-bold text-white">
          {images > 0 && (
            <span className="inline-flex items-center gap-1">
              <FaImages /> {images}
            </span>
          )}
          {videos > 0 && (
            <span className="inline-flex items-center gap-1">
              <FaPlay /> {videos}
            </span>
          )}
        </div>
      )}

      {/* Slides up on hover (always visible on touch screens) */}
      <div className="project-card__details absolute bottom-0 z-10 w-full rounded-b-lg bg-kjColorSecondary/85 px-6 py-4 md:px-8">
        <h2 className="text-lg font-bold capitalize text-kjColorLight">{project.name}</h2>
        <p className="mt-1 text-sm text-kjColorLight md:w-5/6">{project.summary}</p>
        <p className="mt-2 text-xs font-bold uppercase tracking-wide text-kjColorLight/80">
          View project →
        </p>
      </div>
    </button>
  );
}
