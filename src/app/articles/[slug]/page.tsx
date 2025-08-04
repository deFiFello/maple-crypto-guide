import { Metadata } from 'next';
import { getArticleBySlug } from '../../../lib/articles';

interface Props {
  params: { slug: string };
}

// ✅ SEO Metadata — dynamic
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = await getArticleBySlug(params.slug);

  return {
    title: article?.title ?? 'Web3 Article',
    description: article?.excerpt ?? '',
  };
}

// ✅ Page rendering
export default async function ArticlePage({ params }: Props) {
  const article = await getArticleBySlug(params.slug);

  if (!article) {
    return <p className="text-red-500">Article not found.</p>;
  }

  return (
    <main className="prose max-w-3xl mx-auto py-12">
      <h1 className="text-2xl font-bold mb-4">{article.title}</h1>
      <p className="mb-2 text-gray-600">{article.excerpt}</p>
      <article dangerouslySetInnerHTML={{ __html: article.body }} />
    </main>
  );
}
