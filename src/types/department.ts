import { TreatmentCategory } from './treatment';

export interface Department {
  id: TreatmentCategory;
  name: string;
  shortName?: string;
  slug: string;
  icon?: string;
  iconComponent?: React.ReactNode;
  description?: string;
  shortDescription?: string;
  approach?: string;
  specialties?: string[];
  offerings?: string[];
  image?: string;
  bannerImage?: string;
  detailImage?: string;
  featured?: boolean;
} 