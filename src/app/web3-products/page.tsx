// src/app/web3-products/page.tsx
'use client';

import { useState } from 'react';
import { web3Products, Web3Product } from '@/lib/web3-products';
import ListingCard from '@/components/ListingCard';
import FilterBar from '@/components/FilterBar';

export default function Web3ProductsPage() {
  const [filters, setFilters] = useState({ category: 'All', rating: 0 });

  const filtered = web3Products.filter((p: Web3Product) => {
    const matchCategory = filters.category === 'All' || p.category === filters.category;
    const matchRating = !filters.rating || (p.rating && p.rating >= filters.rating);
    return matchCategory && matchRating;
  });

  // 🔁 Label map if needed for display name mapping (can customize)
  const labelMap = {
    Hardware: 'Hardware',
    Software: 'Software',
    Mobile: 'Mobile',
    'cold storage': 'Cold Storage',
  };

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        Explore Web3 Products
      </h1>
      <FilterBar onFilterChange={setFilters} data={web3Products} labelMap={labelMap} />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-4">
        {filtered.map((product: Web3Product & { slug: string }) => (
          <ListingCard
            key={product.slug}
            slug={product.slug}
            name={product.name}
            description={product.short_desc ?? ''}
            tags={Array.isArray(product.tags) ? product.tags : []}
            rating={product.rating}
            affiliate_url={product.affiliate_url ?? ''}
          />
        ))}
      </div>
    </main>
  );
}
