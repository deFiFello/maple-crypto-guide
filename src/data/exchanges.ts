// src/data/exchanges.ts

import raw from './exchanges.json';

export const exchangesObj = raw as Record<
  string,
  {
    name: string;
    summary?: string;
    description: string;
    website?: string;
    rating?: number;
    tags?: string[];
  }
>;
