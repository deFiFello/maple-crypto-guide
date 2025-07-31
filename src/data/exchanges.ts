import exchangesRaw from './exchanges.json';

export const exchangesObj = exchangesRaw as Record<
  string,
  {
    name: string;
    description: string;
    summary?: string;
    website?: string;
    affiliate_url?: string;
    rating?: number;
    tags?: string[];
    type?: string;
  }
>;
