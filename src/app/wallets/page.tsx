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
          url: `https://yourdomain.com/wallets/${params.slug}`,
        }}
      />
    </main>
  );
}

export async function generateStaticParams() {
  return Object.keys(walletsObj).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props) {
  const wallet = walletsObj[params.slug];
  if (!wallet) return {};

  return {
    title: `${wallet.name} Wallet | Maple Crypto`,
    description: wallet.description,
  };
}
