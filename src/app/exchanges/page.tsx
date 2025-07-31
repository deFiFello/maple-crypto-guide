import { exchangesObj } from "@/data/exchanges";
import { ListingCard } from "@/components/ListingCard";

type Exchange = (typeof exchangesObj)[string] & { slug: string };

export default function ExchangesPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
        Top Crypto Exchanges
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Object.entries(exchangesObj).map(([slug, exchange]) => (
          <ListingCard key={slug} {...exchange} />
        ))}
      </div>
    </main>
  );
}
