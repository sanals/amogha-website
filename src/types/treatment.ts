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
  PRE_POSTNATAL = 'Pre & Postnatal Care',
  SKIN_HAIR_CARE = 'Skin & Hair Care Treatments',
  WOMENS_WELLNESS = 'Women Wellness & Gynaec Care',
  PREVENTIVE_WELLNESS = 'Preventive healthcare and Wellness Programs',
  PAIN_SPORTS = 'Pain & Sports Injury Management',
  MENTAL_WELLNESS = 'Mental Wellness & Stress Management',
  ANORECTAL = 'Anorectal Care',
  PANCHAKARMA_DETOX = 'Panchakarma & Detox Therapies',
  LIFESTYLE_DISORDER = 'Lifestyle Disorder Management',
} 