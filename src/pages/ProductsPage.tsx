'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { productsData } from '../data/productsData';
import { ProductCard } from '../components/molecules/ProductCard';
import { ProductCategory } from '../types/product';
import SEO from '../components/atoms/SEO';
import Button from '../components/atoms/Button';

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
        title="Ayurvedic Products" 
        description="Discover our range of authentic Ayurvedic products including herbal medicines, oils, supplements, and wellness products at AMOGHA The Ayur Hub."
        keywords="ayurvedic products, herbal medicines, ayurvedic oils, supplements, wellness products, natural health products"
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
                Ayurvedic <span className="text-primary dark:text-primary-light">Products</span>
              </h1>
              <p className="text-lg text-neutral-dark dark:text-neutral-light mb-8">
                Explore our authentic range of Ayurvedic products, carefully formulated using traditional recipes and natural ingredients for your health and wellness.
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
                  {category === 'all' ? 'All Products' : category}
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
                  No products found in this category.
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
                Visit Our Clinic to Purchase
              </h2>
              <p className="text-lg text-neutral-dark dark:text-neutral-light mb-8">
                All our products are available at the clinic. Visit us or contact us for more information about our Ayurvedic products and their benefits.
              </p>
              <Button 
                variant="primary" 
                size="large"
                href="/contact"
              >
                Contact Us
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProductsPage;

