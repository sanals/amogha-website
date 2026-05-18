'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { productsData } from '../data/productsData';
import { ProductCard } from '../components/molecules/ProductCard';
import { ProductCategory } from '../types/product';
import SEO from '../components/atoms/SEO';
import Button from '../components/atoms/Button';
import { productsContent } from '../data/productsContent';

const ProductsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Get unique categories
  const categories = [
    'all',
    ...Object.values(ProductCategory)
  ];

  // Filter products based on selected category
  const filteredProducts = selectedCategory === 'all'
    ? productsData
    : productsData.filter(product => product.category === selectedCategory);

  return (
    <>
      <SEO 
        title={productsContent.seo.title} 
        description={productsContent.seo.description}
        keywords={productsContent.seo.keywords}
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
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary dark:text-primary-light mb-4">
                {productsContent.listingPage.heading}
              </h1>
              <p className="text-lg text-neutral-dark dark:text-neutral-light mb-8">
                {productsContent.listingPage.subtitle}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Category Filters */}
        <section className="py-8 bg-white dark:bg-neutral-dark border-b border-neutral-light dark:border-neutral-700">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-primary text-white'
                      : 'bg-neutral-light dark:bg-neutral-darker text-neutral-dark dark:text-neutral-light hover:bg-primary/10 dark:hover:bg-primary-dark/20'
                  }`}
                >
                  {category === 'all' ? productsContent.listingPage.allCategoriesLabel : category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-xl text-neutral-medium dark:text-neutral-light">
                  {productsContent.listingPage.emptyState}
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                  />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-primary/10 dark:bg-primary-dark/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary dark:text-primary-light mb-4">
                {productsContent.cta.heading}
              </h2>
              <p className="text-lg text-neutral-dark dark:text-neutral-light mb-8">
                {productsContent.cta.subtitle}
              </p>
              <Button 
                variant="primary" 
                size="large"
                href={productsContent.cta.buttonLink}
              >
                {productsContent.cta.buttonLabel}
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProductsPage;

