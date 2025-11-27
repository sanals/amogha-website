'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { productsData } from '../data/productsData';
import { Product } from '../types/product';
import SEO from '../components/atoms/SEO';
import LazyImage from '../components/atoms/LazyImage';
import Badge from '../components/atoms/Badge';
import Button from '../components/atoms/Button';

interface ProductDetailPageProps {
  params?: { slug: string };
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ params }) => {
  const router = useRouter();
  const slug = params?.slug || '';
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const foundProduct = productsData.find(p => p.slug === slug);
    
    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      router.push('/products');
    }
  }, [slug, router]);

  if (!product) {
    return null;
  }

  const formatPrice = (amount: number, currency: string) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 0,
    }).format(amount);
  };

  // Create structured data for Product schema
  const productStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.imageUrl,
    brand: {
      '@type': 'Brand',
      name: 'AMOGHA The Ayur Hub',
    },
    offers: {
      '@type': 'Offer',
      price: product.price,
      priceCurrency: product.currency || 'INR',
      availability: product.availability === 'in-stock' 
        ? 'https://schema.org/InStock' 
        : 'https://schema.org/OutOfStock',
    },
    category: product.category,
  };

  return (
    <>
      <SEO 
        title={`${product.name} | Ayurvedic Products`}
        description={product.shortDescription || product.description}
        keywords={`${product.name}, ayurvedic products, ${product.category}, natural health products`}
        canonicalUrl={`/products/${product.slug}`}
        structuredData={productStructuredData}
      />
      
      <div className="min-h-screen bg-neutral-light dark:bg-neutral-darker">
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 bg-primary/10 dark:bg-primary-dark/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <div className="mb-4">
                <Badge variant="primary-light" size="md">
                  {product.category}
                </Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary dark:text-primary-light mb-4">
                {product.name}
              </h1>
              <p className="text-lg text-neutral-dark dark:text-neutral-light">
                {product.shortDescription || product.description}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Product Details */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="mb-8">
                <Button
                  variant="outline"
                  onClick={() => router.push('/products')}
                  className="mb-6"
                >
                  ← Back to All Products
                </Button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Product Image */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                >
                  <div className="aspect-square rounded-lg overflow-hidden shadow-lg bg-white dark:bg-neutral-dark">
                    <img
                      src={product.imageUrl || '/images/placeholder.jpg'}
                      alt={product.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        if (target.src !== '/images/placeholder.jpg') {
                          target.src = '/images/placeholder.jpg';
                        }
                      }}
                    />
                  </div>
                  {product.availability === 'out-of-stock' && (
                    <div className="absolute top-4 right-4">
                      <Badge variant="danger" size="md">
                        Out of Stock
                      </Badge>
                    </div>
                  )}
                  {product.availability === 'pre-order' && (
                    <div className="absolute top-4 right-4">
                      <Badge variant="warning" size="md">
                        Pre-Order
                      </Badge>
                    </div>
                  )}
                </motion.div>

                {/* Product Info */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="bg-white dark:bg-neutral-dark rounded-lg shadow-md p-8">
                    <div className="mb-6">
                      <h2 className="text-3xl font-serif font-bold text-primary dark:text-primary-light mb-4">
                        {formatPrice(product.price, product.currency || 'INR')}
                      </h2>
                      <p className="text-neutral-dark dark:text-neutral-medium mb-6">
                        {product.description}
                      </p>
                    </div>

                    {product.benefits && product.benefits.length > 0 && (
                      <div className="mb-6">
                        <h3 className="text-xl font-serif font-semibold text-primary dark:text-primary-light mb-3">
                          Benefits
                        </h3>
                        <ul className="space-y-2">
                          {product.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-start">
                              <svg
                                className="w-5 h-5 text-primary dark:text-primary-light mr-2 mt-0.5 flex-shrink-0"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <span className="text-neutral-dark dark:text-neutral-light">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {product.ingredients && product.ingredients.length > 0 && (
                      <div className="mb-6">
                        <h3 className="text-xl font-serif font-semibold text-primary dark:text-primary-light mb-3">
                          Ingredients
                        </h3>
                        <p className="text-neutral-dark dark:text-neutral-light">
                          {product.ingredients.join(', ')}
                        </p>
                      </div>
                    )}

                    {product.usage && (
                      <div className="mb-6">
                        <h3 className="text-xl font-serif font-semibold text-primary dark:text-primary-light mb-3">
                          Usage Instructions
                        </h3>
                        <p className="text-neutral-dark dark:text-neutral-light">
                          {product.usage}
                        </p>
                      </div>
                    )}

                    <div className="mt-8 pt-6 border-t border-neutral-light dark:border-neutral-700">
                      <p className="text-sm text-neutral-medium dark:text-neutral-light mb-4">
                        Available at our clinic. Visit us or contact us for more information.
                      </p>
                      <div className="flex gap-4">
                        <Button
                          variant="primary"
                          size="large"
                          href="/contact"
                          fullWidth
                        >
                          Contact Us
                        </Button>
                        <Button
                          variant="outline"
                          size="large"
                          href="/book-appointment"
                          fullWidth
                        >
                          Book Appointment
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProductDetailPage;

