import articles from './articles.json';

export interface Article {
  title: string;
  body: string;
}

export const articlesObj = articles as Record<string, Article>;

export interface Article {
    title: string;
    body: string;
    summary?: string; // ← Add this
  }
  