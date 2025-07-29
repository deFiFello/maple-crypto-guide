// src/data/wallets.ts
import walletsRaw from './wallets.json';

export const walletsObj = walletsRaw as Record<
  string,
  {
    name: string;
    type: string;
    description: string;
    affiliate_url: string;
    logo?: string;
    rating?: number;
    tags?: string[];
    price_range?: string;
  }
>;
