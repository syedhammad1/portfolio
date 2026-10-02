import { FaExternalLinkAlt } from "react-icons/fa";
import CustomBorder from "@/components/CustomBorder";
import { mediumArticles } from "@/data/articles";

export const metadata = { title: "Shelf | Syed Hammad" };

export default function Shelf() {
  return (
    <div>
      <h1 className="mt-6 text-2xl font-bold capitalize">My articles</h1>
      <CustomBorder />
      <section className="mt-8" aria-label="Medium articles">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {mediumArticles.map((article, index) => (
            <a
              key={article.slug}
              href={article.url}
              target="_blank"
              rel="noreferrer"
              className="card group flex min-h-[23rem] flex-col overflow-hidden bg-white p-6 text-kjColorDark transition-colors hover:bg-kjColorLight dark:bg-kjColorBlack dark:text-kjColorLight dark:hover:bg-kjColorDark md:p-7"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-kjColorPrime">
                  <span className="h-2 w-2 rounded-full bg-kjColorPrime" />
                  Medium · {article.topic}
                </span>
                <span className="font-mono text-sm text-kjColorGray/70 dark:text-kjColorLight/50">
                  0{index + 1}
                </span>
              </div>
              <div className="mt-auto pt-10">
                <h2 className="text-2xl font-bold leading-tight">{article.title}</h2>
                <p className="mt-4 text-sm leading-6 text-kjColorGray dark:text-kjColorLight/70">
                  {article.teaser}
                </p>
              </div>
              <div className="mt-6 flex items-center justify-between border-t border-kjColorGray/15 pt-4 text-sm dark:border-white/15">
                <span className="text-kjColorGray dark:text-kjColorLight/60">{article.readTime}</span>
                <span className="inline-flex items-center gap-2 font-bold text-kjColorPrime transition-transform group-hover:translate-x-1">
                  Read on Medium <FaExternalLinkAlt className="text-xs" aria-hidden="true" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
