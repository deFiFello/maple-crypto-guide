import Link from 'next/link';
import { web3Products } from '@/data/web3-products';

export default function Web3ProductsPage() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Web3 Products</h1>
      <ul className="space-y-2">
        {web3Products.map((product) => (
          <li key={product.slug}>
            <Link href={`/web3-products/${product.slug}`} className="text-blue-600 underline">
              {product.name}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
