// src/types/article.ts
export interface Article {
    title: string;
    excerpt?: string;
    body: string;
    [key: string]: any;
  }
  