export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription?: string;
  price: number;
  currency?: string;
  imageUrl: string;
  category: ProductCategory;
  benefits?: string[];
  ingredients?: string[];
  usage?: string;
  availability: 'in-stock' | 'out-of-stock' | 'pre-order';
  featured?: boolean;
  isPopular?: boolean;
}

export enum ProductCategory {
  HERBAL_MEDICINES = 'Herbal Medicines',
  OILS = 'Ayurvedic Oils',
  SUPPLEMENTS = 'Supplements',
  SKINCARE = 'Skincare',
  WELLNESS = 'Wellness Products',
  DIETARY = 'Dietary Products',
}

