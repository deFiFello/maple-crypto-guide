// src/types/exchange.ts
export interface Exchange {
    name: string;
    description: string;
    summary?: string;
    website?: string;
    affiliate_url?: string;
    rating?: number;
    tags?: string[];
    type?: string;
  }
  