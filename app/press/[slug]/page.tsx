import React from 'react';
import ArticlePage from '@/pages/ArticlePage';

export default function Page({ params }: { params: { slug: string } }) {
  return <ArticlePage params={params} />;
}

