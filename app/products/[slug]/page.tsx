import React from 'react';
import ProductDetailPage from '@/pages/ProductDetailPage';

export default function Page({ params }: { params: { slug: string } }) {
  return <ProductDetailPage params={params} />;
}

