import { notFound } from "next/navigation";
import { articles, getArticleBody } from "@/data/articles";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  return { title: article ? `${article.title} | Syed Hammad` : "Not found" };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  return (
    <div className="container mx-auto px-4 mt-4">
      <header>
        <h2 className="text-3xl md:text-5xl leading-tight">{article.title}</h2>
        <div className="flex items-center mt-6">
          <img src={article.authorImage} alt={article.author} className="w-20 rounded-full border-4 border-kjColorSecondary" />
          <div className="ml-6">
            <p className="text-xl font-bold">{article.author}</p>
            <p className="text-sm mt-1">{article.date}</p>
          </div>
        </div>
      </header>
      <div className="prose mt-8" dangerouslySetInnerHTML={{ __html: getArticleBody(article) }} />
    </div>
  );
}
