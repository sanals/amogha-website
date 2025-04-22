import { TreatmentCategory } from './treatment';

export interface Testimonial {
  id: string;
  patientName: string;
  location?: string;
  testimonial: string;
  rating: number; // 1-5 stars
  treatmentCategory?: TreatmentCategory;
  imageUrl?: string;
  videoUrl?: string;
  date: string;
  featured?: boolean;
} 