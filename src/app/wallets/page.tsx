import { walletsObj } from "@/data/wallets";
import Link from "next/link";

export default function WalletListPage() {
  const wallets = Object.entries(walletsObj);

  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
        Compare Crypto Wallets
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {wallets.map(([slug, wallet]) => (
          <div
            key={slug}
            className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-5 shadow-sm hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-1">
              {wallet.name}
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
              {wallet.description.slice(0, 100)}...
            </p>

            {wallet.rating && (
              <div className="text-yellow-500 text-sm mb-2">
                ⭐ {wallet.rating.toFixed(1)} / 5
              </div>
            )}

            <div className="flex flex-wrap gap-2 text-xs mb-4">
              <span className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 px-2 py-1 rounded-full">
                {wallet.type}
              </span>
              {wallet.tags?.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex justify-between items-center">
              <Link
                href={`/wallets/${slug}`}
                className="text-sm font-medium text-blue-600 hover:underline"
              >
                Read Review
              </Link>

              {wallet.affiliate_url && (
                <a
                  href={wallet.affiliate_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-xl focus-visible:outline focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  Visit Site
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
