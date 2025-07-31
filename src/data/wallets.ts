import walletsRaw from './wallets.json';
import type { Metadata } from "next";

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
export const wallets = Object.entries(walletsObj).map(([slug, data]) => ({
  slug,
  ...data,
}));
