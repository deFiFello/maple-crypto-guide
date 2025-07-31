import { Wallet, Banknote, Globe } from "lucide-react";

export default function HomePage() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-3 text-gray-900 dark:text-white">
        Welcome to Maple Crypto Guide
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Step-by-step crypto education for beginners — wallets, exchanges, Web3 tools, and more.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 mb-10">
        <a href="/wallets" className="flex items-center justify-center gap-2 px-5 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 focus-visible:outline focus-visible:ring-2 focus-visible:ring-blue-500 transition">
          <Wallet className="w-5 h-5" />
          Trusted Wallets
        </a>
        <a href="/exchanges" className="flex items-center justify-center gap-2 px-5 py-3 bg-green-600 text-white rounded-xl shadow hover:bg-green-700 focus-visible:outline focus-visible:ring-2 focus-visible:ring-green-500 transition">
          <Banknote className="w-5 h-5" />
          Top Exchanges
        </a>
        <a href="/web3-products" className="flex items-center justify-center gap-2 px-5 py-3 bg-purple-600 text-white rounded-xl shadow hover:bg-purple-700 focus-visible:outline focus-visible:ring-2 focus-visible:ring-purple-500 transition">
          <Globe className="w-5 h-5" />
          Web3 Tools
        </a>
      </div>

      <div className="text-sm text-gray-500 dark:text-gray-400 text-center">
        🛡️ Trusted by 20,000+ crypto beginners • 100% free & beginner-friendly
      </div>
    </section>
  );
}
