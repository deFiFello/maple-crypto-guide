export interface ListingItem {
    slug: string;
    name: string;
    description: string;
    summary?: string;
    affiliate_url?: string;
    website?: string;
    rating?: number;
    tags?: string[];
    type?: string;
  }
  