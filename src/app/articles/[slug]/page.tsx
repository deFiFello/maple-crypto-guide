import { notFound } from 'next/navigation';
import { articlesObj } from '@/data/articles';
import StructuredData from '@/components/StructuredData';

type Props = { params: { slug: string } };

export default function ArticlePage({ params }: Props) {
  const article = articlesObj[params.slug];
  if (!article) return notFound();

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">{article.title}</h1>
      <p className="mb-2">{article.body}</p>

      <StructuredData
        data={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: article.title,
          articleBody: article.body,
        }}
      />
    </main>
  );
}

export function generateMetadata({ params }: Props) {
  const article = articlesObj[params.slug];
  if (!article) return {};

  return {
    title: `${article.title} | Maple Crypto`,
    description: article.summary ?? article.body,
  };
}

export async function generateStaticParams() {
  return Object.keys(articlesObj).map((slug) => ({ slug }));
}
