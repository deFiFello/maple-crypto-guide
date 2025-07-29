import rawWeb3Products from './web3-products.json';

export interface Web3Product {
  name: string;
  description?: string;
  [key: string]: any;
}

export const web3ProductsObj = rawWeb3Products as Record<string, Web3Product>;

export const web3Products = Object.entries(web3ProductsObj).map(([slug, data]) => ({
  slug,
  ...data,
}));
