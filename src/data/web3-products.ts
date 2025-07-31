// ✅ Define the product interface
export interface Web3Product {
  id: string;
  name: string;
  category?: string;
  short_desc?: string;
  long_review?: string;
  pros?: string;
  cons?: string;
  rating?: number;
  tags?: string[];
  price_cad?: number;
  is_free?: boolean;
  created_at?: string;
  updated_at?: string;
  affiliate_url?: string;
  website?: string;
  logo_url?: string | null;
}

// ✅ Import the raw JSON object
import rawWeb3Products from './web3-products.json';

// ✅ Convert the raw object into a typed Record<string, Web3Product>
export const web3ProductsObj = rawWeb3Products as Record<string, any>;

// ✅ Normalize fields and add slug to each entry
export const web3Products = Object.entries(web3ProductsObj).map(
  ([slug, data]) => ({
    slug,
    ...data,
    // ✅ Ensure tags is a string[] — parse if it’s a string
    tags: typeof data.tags === 'string' ? JSON.parse(data.tags) : data.tags,
  }) satisfies Web3Product & { slug: string }
);
