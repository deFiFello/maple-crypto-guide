import { notFound } from "next/navigation";
import { exchangesObj } from "@/lib/exchanges";
import StructuredData from "@/components/StructuredData";
import type { Metadata } from "next"; // ✅ Add this

type Props = { params: { slug: string } };

export default function ExchangePage({ params }: Props) {
  const exchange = exchangesObj[params.slug];
  if (!exchange) return notFound();

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
        {exchange.name}
      </h1>

      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        {exchange.summary ?? exchange.description}
      </p>

      {exchange.website && (
        <a
          href={exchange.website}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-xl transition focus-visible:outline focus-visible:ring-2 focus-visible:ring-blue-500"
        >
          Visit {exchange.name}
        </a>
      )}

      <div className="mt-10 text-sm text-gray-500 dark:text-gray-400">
        🏦 Trusted Exchange • 🔒 Secure • 🛠️ Regulated
      </div>

      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: exchange.name,
          description: exchange.summary ?? exchange.description,
          url: exchange.website,
        }}
      />
    </main>
  );
}

export async function generateStaticParams(): Promise<Props["params"][]> {
  return Object.keys(exchangesObj).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const exchange = exchangesObj[params.slug];
  if (!exchange) return {};
  return {
    title: `${exchange.name} – Maple Crypto`,
    description: exchange.summary ?? exchange.description,
  };
}
