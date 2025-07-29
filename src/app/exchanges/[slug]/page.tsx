// src/app/exchanges/[slug]/page.tsx

import { notFound } from 'next/navigation';
import { exchangesObj } from '@/data/exchanges';
import StructuredData from '@/components/StructuredData';

type Props = { params: { slug: string } };

export default function ExchangePage({ params }: Props) {
  const exchange = exchangesObj[params.slug];
  if (!exchange) return notFound();

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">{exchange.name}</h1>
      <p className="mb-2">{exchange.description}</p>

      <StructuredData
        data={{
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: exchange.name,
          description: exchange.summary ?? exchange.description,
          url: exchange.website,
        }}
      />
    </main>
  );
}

export async function generateStaticParams() {
  return Object.keys(exchangesObj).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props) {
  const exchange = exchangesObj[params.slug];
  if (!exchange) return {};

  return {
    title: `${exchange.name} | Maple Crypto`,
    description: exchange.summary ?? exchange.description,
  };
}
