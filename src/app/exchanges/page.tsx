import { exchangesObj } from '@/data/exchanges';
import Link from 'next/link';

interface Exchange {
  name: string;
  description?: string;
  affiliate_url?: string;
  [key: string]: any;
}

const exchanges = Object.entries(exchangesObj).map(([slug, data]) => ({
  slug,
  ...data,
})) as Array<{ slug: string } & Exchange>;

export default function ExchangesPage() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Crypto Exchanges</h1>
      <ul className="space-y-2">
        {exchanges.map((exchange) => (
          <li key={exchange.slug}>
            <Link
              href={`/exchanges/${exchange.slug}`}
              className="text-blue-600 underline"
            >
              {exchange.name}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
