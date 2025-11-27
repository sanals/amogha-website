'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Product } from '../../types/product';
import LazyImage from '../atoms/LazyImage';
import Badge from '../atoms/Badge';
import { cardBase, cardFullHeight, cardContentFlex, cardTitle, cardDescription } from '../../theme/cardStyles';
import { cardHover, defaultTransition } from '../../theme/animationVariants';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  className = '',
}) => {
  const { name, shortDescription, imageUrl, price, currency = 'INR', availability, category } = product;
  
  const formatPrice = (amount: number, curr: string) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: curr,
      minimumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <motion.div
      className={`${cardBase} ${cardFullHeight} ${className}`}
      variants={cardHover}
      whileHover="hover"
      transition={defaultTransition}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="relative h-48">
        <Link href={`/products/${product.slug}`}>
          <img
            src={imageUrl || '/images/placeholder.jpg'}
            alt={name}
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              if (target.src !== '/images/placeholder.jpg') {
                target.src = '/images/placeholder.jpg';
              }
            }}
          />
          {availability === 'out-of-stock' && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <Badge variant="danger" size="md">
                Out of Stock
              </Badge>
            </div>
          )}
          {availability === 'pre-order' && (
            <div className="absolute top-3 right-3">
              <Badge variant="warning" size="sm">
                Pre-Order
              </Badge>
            </div>
          )}
        </Link>
      </div>
      
      <div className={cardContentFlex}>
        <div className="mb-2">
          <Badge variant="primary-light" size="sm">
            {category}
          </Badge>
        </div>
        
        <h3 className={cardTitle}>{name}</h3>
        <p className={`${cardDescription} flex-grow`}>
          {shortDescription || (product.description.length > 120 ? `${product.description.substring(0, 120)}...` : product.description)}
        </p>
        
        <div className="mt-4 flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold text-primary dark:text-primary-light">
              {formatPrice(price, currency)}
            </p>
          </div>
          <Link 
            href={`/products/${product.slug}`}
            className="px-4 py-2 bg-primary hover:bg-primary-dark text-white font-medium rounded-md transition-colors duration-300"
          >
            View Details
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

