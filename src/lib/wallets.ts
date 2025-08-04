import walletsRaw from '../data/wallets.json';
import type { Metadata } from "next";

type WalletEntry = {
  name: string;
  type: string;
  description: string;
  affiliate_url: string;
  logo?: string;
  rating?: number;
  tags?: string[];
  price_range?: string;
  category: string;
};

export const walletsObj = walletsRaw as Record<string, WalletEntry>;

export const wallets = Object.entries(walletsObj).map(([slug, data]) => ({
  slug,
  ...data,
}));
