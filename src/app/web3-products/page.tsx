// src/app/web3-products/page.tsx

import { web3ProductsObj } from "@/data/web3-products";
import { ListingCard } from "@/components/ListingCard";
import type { Metadata } from "next";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata(
  { params }: Props
): Promise<Metadata | {}> {
  const product = web3ProductsObj[params.slug];
  if (!product) return {};

  return {
    title: `${product.name} | Maple Crypto`,
    description: product.description ?? "No description available.",
  };
}


export async function generateStaticParams() {
  return Object.keys(web3ProductsObj).map((slug) => ({ slug }));
}

export default function Web3ProductsPage() {
  const products = Object.entries(web3ProductsObj).map(([slug, product]) => ({
    slug,
    ...product,
    tags: Array.isArray(product.tags) ? product.tags : [],
    description: product.description ?? "No description available.",
  }));

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
        Explore Web3 Products
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product, index) => (
          <ListingCard
            key={product.slug ?? `product-${index}`}
            {...product}
            tags={Array.isArray(product.tags) ? product.tags : []}
          />
        ))}
      </div>
    </main>
  );
}
