// src/app/page.tsx
export default function HomePage() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-4">Welcome to Maple Crypto Guide</h1>
      <p className="mb-6">Step-by-step crypto education for beginners — wallets, exchanges, Web3 tools, and more.</p>
      <div className="space-x-4">
        <a href="/wallets" className="btn-primary">Trusted Wallets</a>
        <a href="/exchanges" className="btn-primary">Top Exchanges</a>
        <a href="/web3-products" className="btn-primary">Web3 Tools</a>
      </div>
    </section>
  )
}
