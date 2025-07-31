'use client';

import { useState } from 'react';
import { wallets } from '@/data/wallets'; // ✅ updated
import ListingCard from '@/components/ListingCard';
import FilterBar from '@/components/FilterBar';

export default function WalletsPage() {
  const [filters, setFilters] = useState({ category: 'All', rating: 0 });

  const filtered = wallets.filter((w) => {
    const matchCategory = filters.category === 'All' || w.category === filters.category;
    const matchRating = !filters.rating || (w.rating && w.rating >= filters.rating);
    return matchCategory && matchRating;
  });

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Explore Wallets</h1>
      <FilterBar onFilterChange={setFilters} />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-4">
        {filtered.map((wallet) => (
          <ListingCard
            key={wallet.slug}
            slug={wallet.slug}
            name={wallet.name}
            description={wallet.description}
            tags={Array.isArray(wallet.tags) ? wallet.tags : []}
            rating={wallet.rating}
            affiliate_url={wallet.affiliate_url}
          />
        ))}
      </div>
    </main>
  );
}
