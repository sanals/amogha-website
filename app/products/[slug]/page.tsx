import React from 'react';
import ProductDetailPage from '@/pages/ProductDetailPage';
import { productsData } from '@/data/productsData';

export function generateStaticParams() {
  return productsData.map((product) => ({
    slug: product.slug,
  }));
}

export default function Page({ params }: { params: { slug: string } }) {
  return <ProductDetailPage params={params} />;
}

