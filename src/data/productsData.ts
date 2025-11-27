import { Product, ProductCategory } from '../types/product';

export const productsData: Product[] = [
  {
    id: 'product-1',
    name: 'Triphala Churna',
    slug: 'triphala-churna',
    description: 'A traditional Ayurvedic herbal formulation made from three fruits (Amalaki, Bibhitaki, and Haritaki). Known for its digestive health benefits, detoxification properties, and support for overall wellness.',
    shortDescription: 'Traditional digestive health and detoxification formula.',
    price: 450,
    currency: 'INR',
    imageUrl: '/images/products/product001.jpg',
    category: ProductCategory.HERBAL_MEDICINES,
    benefits: [
      'Supports healthy digestion',
      'Natural detoxification',
      'Boosts immunity',
      'Promotes regular bowel movements',
      'Rich in antioxidants'
    ],
    ingredients: ['Amalaki (Indian Gooseberry)', 'Bibhitaki', 'Haritaki'],
    usage: 'Take 1-2 teaspoons with warm water before bedtime or as directed by your physician.',
    availability: 'in-stock',
    featured: true,
    isPopular: true
  },
  {
    id: 'product-2',
    name: 'Ashwagandha Powder',
    slug: 'ashwagandha-powder',
    description: 'Pure Ashwagandha root powder, known as the "Indian Winter Cherry" or "Indian Ginseng". Helps manage stress, improve energy levels, and support overall vitality.',
    shortDescription: 'Pure Ashwagandha for stress management and vitality.',
    price: 650,
    currency: 'INR',
    imageUrl: '/images/products/product002.jpg',
    category: ProductCategory.SUPPLEMENTS,
    benefits: [
      'Reduces stress and anxiety',
      'Improves energy and stamina',
      'Supports better sleep',
      'Enhances cognitive function',
      'Boosts immune system'
    ],
    ingredients: ['Pure Ashwagandha Root Powder'],
    usage: 'Take 1 teaspoon with warm milk or water, preferably in the morning or as directed.',
    availability: 'in-stock',
    featured: true,
    isPopular: true
  },
  {
    id: 'product-3',
    name: 'Brahmi Oil',
    slug: 'brahmi-oil',
    description: 'Medicated oil infused with Brahmi (Bacopa Monnieri), traditionally used for hair care and scalp health. Promotes hair growth, reduces hair fall, and improves memory.',
    shortDescription: 'Medicated hair oil for growth and scalp health.',
    price: 550,
    currency: 'INR',
    imageUrl: '/images/products/product003.jpg',
    category: ProductCategory.OILS,
    benefits: [
      'Promotes hair growth',
      'Reduces hair fall',
      'Nourishes scalp',
      'Improves memory and concentration',
      'Prevents premature graying'
    ],
    ingredients: ['Brahmi (Bacopa Monnieri)', 'Coconut Oil', 'Sesame Oil', 'Herbal Extracts'],
    usage: 'Apply to scalp and hair, massage gently, leave for 30 minutes, then wash with mild shampoo.',
    availability: 'in-stock',
    featured: true,
    isPopular: false
  },
  {
    id: 'product-4',
    name: 'Turmeric Curcumin Capsules',
    slug: 'turmeric-curcumin-capsules',
    description: 'High-potency turmeric capsules with standardized curcumin content. Supports joint health, reduces inflammation, and provides antioxidant benefits.',
    shortDescription: 'High-potency curcumin for joint health and inflammation.',
    price: 750,
    currency: 'INR',
    imageUrl: '/images/products/product004.jpg',
    category: ProductCategory.SUPPLEMENTS,
    benefits: [
      'Reduces inflammation',
      'Supports joint health',
      'Powerful antioxidant',
      'Boosts immunity',
      'Supports digestive health'
    ],
    ingredients: ['Standardized Turmeric Extract', 'Curcumin', 'Black Pepper Extract'],
    usage: 'Take 1-2 capsules with meals, twice daily or as directed.',
    availability: 'in-stock',
    featured: false,
    isPopular: true
  },
  {
    id: 'product-5',
    name: 'Neem Face Wash',
    slug: 'neem-face-wash',
    description: 'Gentle herbal face wash with Neem and other natural ingredients. Cleanses skin, prevents acne, and maintains natural pH balance.',
    shortDescription: 'Herbal face wash for clear, healthy skin.',
    price: 350,
    currency: 'INR',
    imageUrl: '/images/products/product005.jpg',
    category: ProductCategory.SKINCARE,
    benefits: [
      'Prevents acne and pimples',
      'Cleanses deeply',
      'Maintains pH balance',
      'Natural antibacterial properties',
      'Suitable for all skin types'
    ],
    ingredients: ['Neem Extract', 'Aloe Vera', 'Turmeric', 'Tulsi', 'Natural Cleansers'],
    usage: 'Wet face, apply small amount, massage gently, and rinse with water. Use twice daily.',
    availability: 'in-stock',
    featured: false,
    isPopular: false
  },
  {
    id: 'product-6',
    name: 'Chyawanprash',
    slug: 'chyawanprash',
    description: 'Traditional Ayurvedic health supplement made from 40+ herbs and fruits. Known as the "elixir of life", it boosts immunity, improves digestion, and promotes overall wellness.',
    shortDescription: 'Traditional immunity booster and wellness supplement.',
    price: 850,
    currency: 'INR',
    imageUrl: '/images/products/product006.jpg',
    category: ProductCategory.WELLNESS,
    benefits: [
      'Boosts immunity',
      'Improves digestion',
      'Enhances energy levels',
      'Supports respiratory health',
      'Anti-aging properties'
    ],
    ingredients: ['Amalaki', '40+ Herbs and Spices', 'Honey', 'Ghee', 'Natural Preservatives'],
    usage: 'Take 1-2 teaspoons in the morning on empty stomach or as directed.',
    availability: 'in-stock',
    featured: true,
    isPopular: true
  }
];

