// src/app/layout.tsx
import './globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Maple Crypto Guide',
  description: 'Guides, wallets, exchanges, and Web3 tools for crypto beginners',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <header className="bg-white shadow-sm py-4">
          <nav className="container mx-auto flex space-x-6">
            <a href="/" className="font-semibold">Home</a>
            <a href="/articles" className="font-semibold">Articles</a>
            <a href="/wallets" className="font-semibold">Wallets</a>
            <a href="/exchanges" className="font-semibold">Exchanges</a>
            <a href="/web3-products" className="font-semibold">Web3 Products</a>
            <a href="/resources" className="font-semibold">Resources</a>
          </nav>
        </header>
        <main className="container mx-auto py-8">{children}</main>
        <footer className="mt-auto bg-white py-4 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Maple Crypto Guide
        </footer>
      </body>
    </html>
  )
}
