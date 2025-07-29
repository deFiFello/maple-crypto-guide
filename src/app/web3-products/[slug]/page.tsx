import { notFound } from 'next/navigation';
import { web3ProductsObj } from '@/data/web3-products';
import StructuredData from '@/components/StructuredData';

type Props = { params: { slug: string } };

export default function Web3ProductPage({ params }: Props) {
  const product = web3ProductsObj[params.slug];
  if (!product) return notFound();

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
      <p className="mb-2">{product.description}</p>

      <StructuredData
        data={{
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: product.name,
          description: product.description,
          ...(product.logo && { image: product.logo }),
        }}
      />
    </main>
  );
}

export function generateMetadata({ params }: Props) {
  const product = web3ProductsObj[params.slug];
  if (!product) return {};

  return {
    title: `${product.name} | Maple Crypto`,
    description: product.description,
  };
}

export async function generateStaticParams() {
  return Object.keys(web3ProductsObj).map((slug) => ({ slug }));
}
