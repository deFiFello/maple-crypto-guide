// src/app/exchanges/page.tsx
import { exchangesObj } from '@/data/exchanges';
import ListingCard from '@/components/ListingCard';

export default function ExchangePage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Explore Exchanges</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Object.entries(exchangesObj).map(([slug, exchange]) => (
          <ListingCard
            key={slug}
            slug={slug}
            name={exchange.name}
            description={exchange.description}
            tags={Array.isArray(exchange.tags) ? exchange.tags : []}
            rating={exchange.rating}
            affiliate_url={exchange.affiliate_url}
          />
        ))}
      </div>
    </main>
  );
}
