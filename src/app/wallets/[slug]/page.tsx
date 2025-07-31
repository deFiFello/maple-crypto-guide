import { notFound } from "next/navigation";
import { walletsObj } from "@/data/wallets";
import StructuredData from "@/components/StructuredData";
import type { Metadata } from "next"; // ✅ Add this

type Props = { params: { slug: string } };

export default function WalletPage({ params }: Props) {
  const wallet = walletsObj[params.slug];
  if (!wallet) return notFound();

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
        {wallet.name}
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        {wallet.description}
      </p>
      {wallet.affiliate_url && (
        <a
          href={wallet.affiliate_url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-xl transition focus-visible:outline focus-visible:ring-2 focus-visible:ring-blue-500"
        >
          Visit {wallet.name}
        </a>
      )}
      <div className="mt-10 text-sm text-gray-500 dark:text-gray-400">
        🔒 Secure • 📱 Mobile Friendly • 🛡️ Beginner Approved
      </div>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "Product",
          name: wallet.name,
          description: wallet.description,
          url: `https://yourdomain.com/wallets/${params.slug}`,
        }}
      />
    </main>
  );
}

// ✅ Correct return type
export async function generateStaticParams(): Promise<Props["params"][]> {
  return Object.keys(walletsObj).map((slug) => ({ slug }));
}

// ✅ Fix typing to return Metadata
export function generateMetadata({ params }: Props): Metadata {
  const wallet = walletsObj[params.slug];
  if (!wallet) return {};
  return {
    title: `${wallet.name} – Wallet Review`,
    description: wallet.description,
  };
}
