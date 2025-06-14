import { TreatmentCategory } from './treatment';

export interface Doctor {
  id: string;
  name: string;
  title: string;
  imageUrl: string;
  image?: string; // Direct image path
  bannerImage?: string;
  qualifications: string[];
  specialties: TreatmentCategory[];
  bio: string;
  shortBio?: string;
  languages: string[];
  email?: string;
  isAvailable: boolean;
  schedulingUrl?: string; // Link for booking appointments
  education?: string[]; // Educational background
  achievements?: string[]; // Awards and recognitions
  slug?: string; // URL slug for the doctor's profile page
} 