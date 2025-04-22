export interface Treatment {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  description: string;
  benefits: string[];
  imageUrl: string;
  iconUrl: string;
  icon?: string; // Font awesome or other icon class
  image?: string; // Direct image path
  category: TreatmentCategory;
  duration: string; // e.g., "60 mins", "3-5 days"
  isPopular?: boolean;
  featured?: boolean;
  relatedDepartments?: TreatmentCategory[];
}

export enum TreatmentCategory {
  PANCHAKARMA = 'Panchakarma',
  GENERAL_MEDICINE = 'General Medicine & Neurology',
  WOMENS_HEALTH = 'Women\'s Health & Gynaecology',
  SPORTS_MEDICINE = 'Anorectal & Sports Medicine',
  WELLNESS = 'Wellness & Detoxification',
  PEDIATRICS = 'Ayurvedic Pediatrics',
  OPHTHALMOLOGY_ENT = 'Ayurvedic Ophthalmology & ENT',
} 