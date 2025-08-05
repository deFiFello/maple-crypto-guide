import articles from '@/data/articles.json' assert { type: 'json' }; // optional if needed by config
import { ListingItem } from '../types/listing';


export function getArticleBySlug(slug: string): ListingItem | undefined {
  return (Object.values(articles) as ListingItem[]).find(
    (article) => article.slug === slug
  );
}
