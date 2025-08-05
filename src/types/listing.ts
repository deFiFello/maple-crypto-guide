export interface ListingItem {
  slug: string;
  name: string;
  description?: string;
  summary?: string;
  excerpt?: string; // ✅ add this
  title?: string;   // ✅ add this
  body?: string;    // ✅ add this
  affiliate_url?: string;
  website?: string;
  rating?: number;
  tags?: string[];
  type?: string;
}
