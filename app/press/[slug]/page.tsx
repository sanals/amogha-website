import React from 'react';
import ArticlePage from '@/pages/ArticlePage';
import { pressData } from '@/data/pressData';

export function generateStaticParams() {
  return pressData
    .filter((article) => article.type === 'article' && article.url)
    .map((article) => {
      // Extract slug from URL (e.g., /press/article-1 -> article-1)
      const slug = article.url!.replace('/press/', '');
      return { slug };
    });
}

export default function Page({ params }: { params: { slug: string } }) {
  return <ArticlePage params={params} />;
}

