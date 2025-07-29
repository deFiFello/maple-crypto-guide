import { notFound } from 'next/navigation';
import { walletsObj } from '@/data/wallets';
import StructuredData from '@/components/StructuredData';

type Props = { params: { slug: string } };

export default function WalletPage({ params }: Props) {
  const wallet = walletsObj[params.slug];
  if (!wallet) return notFound();

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">{wallet.name}</h1>
      <p className="mb-2">{wallet.description}</p>

      <StructuredData
        data={{
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: wallet.name,
          description: wallet.description,
          ...(wallet.logo && { image: wallet.logo }),
          ...(wallet.rating && {
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: wallet.rating,
              reviewCount: 1,
            },
          }),
        }}
      />
    </main>
  );
}

export function generateMetadata({ params }: Props) {
  const wallet = walletsObj[params.slug];
  if (!wallet) return {};

  return {
    title: `${wallet.name} | Maple Crypto`,
    description: wallet.description,
  };
}

export async function generateStaticParams() {
  return Object.keys(walletsObj).map((slug) => ({ slug }));
}
