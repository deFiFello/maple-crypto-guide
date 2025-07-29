// src/app/articles/page.tsx

import rawArticles from '@/data/articles.json';
import Link from 'next/link';

const articlesObj = rawArticles as Record<string, { title: string }>;
const articles = Object.entries(articlesObj);

export default function ArticlesPage() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Articles</h1>
      <ul className="space-y-2">
        {articles.map(([slug, { title }]) => (
          <li key={slug}>
            <Link href={`/articles/${slug}`} className="text-blue-600 underline">
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
